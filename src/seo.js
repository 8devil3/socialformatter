import { getPageByKey, siteUrl } from './content/pages';

const getCanonicalUrl = (page) => `${siteUrl}${page.path === '/' ? '' : page.path}`;

export const createJsonLd = (page) => [
    {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: page.h1,
        url: getCanonicalUrl(page),
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        description: page.description,
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    },
];

export const createHeadTags = (page) => {
    const canonical = getCanonicalUrl(page);
    const jsonLd = createJsonLd(page)
        .map((schema) => `<script type="application/ld+json" data-socialformatter-schema>${JSON.stringify(schema)}</script>`)
        .join('\n        ');

    return [
        `<title>${page.title}</title>`,
        `<meta name="description" content="${page.description}">`,
        `<link rel="canonical" href="${canonical}">`,
        `<meta property="og:title" content="${page.title}">`,
        `<meta property="og:description" content="${page.description}">`,
        `<meta property="og:url" content="${canonical}">`,
        jsonLd,
    ].join('\n        ');
};

export const applyMeta = (route) => {
    const page = getPageByKey(route.meta.pageKey);
    const canonical = getCanonicalUrl(page);

    document.title = page.title;

    const setTag = (selector, createTag, valueAttribute, value) => {
        let tag = document.head.querySelector(selector);

        if (!tag) {
            tag = createTag();
            document.head.appendChild(tag);
        }

        tag.setAttribute(valueAttribute, value);
    };

    setTag('meta[name="description"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        return tag;
    }, 'content', page.description);

    setTag('link[rel="canonical"]', () => {
        const tag = document.createElement('link');
        tag.setAttribute('rel', 'canonical');
        return tag;
    }, 'href', canonical);

    setTag('meta[property="og:title"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('property', 'og:title');
        return tag;
    }, 'content', page.title);

    setTag('meta[property="og:description"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('property', 'og:description');
        return tag;
    }, 'content', page.description);

    setTag('meta[property="og:url"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('property', 'og:url');
        return tag;
    }, 'content', canonical);

    document.head.querySelectorAll('script[data-socialformatter-schema]').forEach((tag) => {
        tag.remove();
    });

    createJsonLd(page).forEach((schema) => {
        const tag = document.createElement('script');
        tag.type = 'application/ld+json';
        tag.dataset.socialformatterSchema = '';
        tag.textContent = JSON.stringify(schema);
        document.head.appendChild(tag);
    });
};
