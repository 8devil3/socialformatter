export const siteUrl = 'https://socialformatter.com';

export const styleSamples = {
    boldSansSerif: '\u{1D5D5}\u{1D5FC}\u{1D5F9}\u{1D5F1}',
    italicSansSerif: '\u{1D62A}\u{1D635}\u{1D622}\u{1D62D}\u{1D62A}\u{1D624}',
    boldItalicSansSerif: '\u{1D63D}\u{1D664}\u{1D661}\u{1D659} \u{1D65E}\u{1D669}\u{1D656}\u{1D661}\u{1D65E}\u{1D658}',
    boldSerif: '\u{1D401}\u{1D428}\u{1D425}\u{1D41D}',
    boldItalicSerif: '\u{1D469}\u{1D490}\u{1D48D}\u{1D485} \u{1D48A}\u{1D495}\u{1D482}\u{1D48D}\u{1D48A}\u{1D484}',
    handwrite: '\u{1D4D7}\u{1D4EA}\u{1D4F7}\u{1D4ED}\u{1D500}\u{1D4FB}\u{1D4F2}\u{1D4FD}\u{1D4EE}',
    gothic: '\u{1D572}\u{1D594}\u{1D599}\u{1D58D}\u{1D58E}\u{1D588}',
    monospace: '\u{1D67C}\u{1D698}\u{1D697}\u{1D698}\u{1D69C}\u{1D699}\u{1D68A}\u{1D68C}\u{1D68E}',
};

export const styleGroups = [
    {
        label: 'Sans serif',
        borderClass: 'border-blue-600',
        buttonClass: 'bg-blue-600 hover:bg-blue-500',
        gridClass: 'grid-cols-3 lg:grid-cols-none lg:auto-cols-auto lg:grid-flow-col',
        styles: [
            { key: 'boldSansSerif', label: styleSamples.boldSansSerif, title: 'bold sans serif' },
            { key: 'italicSansSerif', label: styleSamples.italicSansSerif, title: 'italic sans serif' },
            { key: 'boldItalicSansSerif', label: styleSamples.boldItalicSansSerif, title: 'bold italic sans serif' },
        ],
    },
    {
        label: 'Serif',
        borderClass: 'border-violet-600',
        buttonClass: 'bg-violet-600 hover:bg-violet-500',
        gridClass: 'grid-cols-2 lg:grid-cols-none lg:auto-cols-auto lg:grid-flow-col',
        styles: [
            { key: 'boldSerif', label: styleSamples.boldSerif, title: 'bold serif' },
            { key: 'boldItalicSerif', label: styleSamples.boldItalicSerif, title: 'bold italic serif' },
        ],
    },
    {
        label: 'Other styles',
        borderClass: 'border-fuchsia-600',
        buttonClass: 'bg-fuchsia-600 hover:bg-fuchsia-500',
        gridClass: 'grid-cols-3 lg:grid-cols-none lg:auto-cols-auto lg:grid-flow-col',
        styles: [
            { key: 'handwrite', label: styleSamples.handwrite, title: 'handwrite' },
            { key: 'gothic', label: styleSamples.gothic, title: 'gothic' },
            { key: 'monospace', label: styleSamples.monospace, title: 'monospace' },
        ],
    },
];

const commonFaq = [
    {
        question: 'Does SocialFormatter use Markdown or HTML?',
        answer: 'No. It converts regular letters into Unicode characters that look bold, italic, script, gothic, or monospace. That makes the result pasteable on platforms that do not support Markdown.',
    },
    {
        question: 'Will formatted Unicode text work on every social network?',
        answer: 'It usually works across major platforms, but rendering can vary by app, device, browser, and font support. Always preview important posts before publishing.',
    },
    {
        question: 'Is Unicode styling good for accessibility?',
        answer: 'Use it sparingly. Screen readers and search systems may treat decorative Unicode characters differently from normal text, so keep critical content readable.',
    },
];

export const pages = [
    {
        key: 'home',
        path: '/',
        title: 'SocialFormatter - Free Unicode Text Formatter for Social Media',
        description: 'Free Unicode text formatter for social media. Create bold, italic, serif, gothic, script, and monospace text for LinkedIn, Facebook, Instagram, X, TikTok, and more.',
        h1: 'SocialFormatter',
        eyebrow: 'free tool',
        intro: 'Format text for Facebook, LinkedIn, X, Instagram, TikTok, YouTube, and any social network that does not support Markdown. Convert plain text into Unicode bold, italic, serif, gothic, script, and monospace styles that you can paste anywhere.',
        defaultText: 'Write a social post, then choose a Unicode style.',
        preferredStyles: ['boldSansSerif', 'italicSansSerif', 'boldItalicSansSerif', 'boldSerif', 'boldItalicSerif', 'handwrite', 'gothic', 'monospace'],
        examplesTitle: 'Social media formatting examples',
        examples: [
            { label: 'LinkedIn hook', before: 'New case study: conversion rate is up 38%.', after: '\u{1D5E1}\u{1D5F2}\u{1D604} \u{1D5F0}\u{1D5EE}\u{1D600}\u{1D5F2} \u{1D600}\u{1D601}\u{1D602}\u{1D5F1}\u{1D606}: conversion rate is up 38%.' },
            { label: 'Instagram caption', before: 'Limited drop tonight only.', after: '\u{1D4DB}\u{1D4F2}\u{1D4F6}\u{1D4F2}\u{1D4FD}\u{1D4EE}\u{1D4ED} drop tonight only.' },
            { label: 'Code-oriented post', before: 'Use npm run build before deploy.', after: 'Use \u{1D697}\u{1D699}\u{1D696} \u{1D69B}\u{1D69E}\u{1D697} \u{1D68B}\u{1D69E}\u{1D692}\u{1D695}\u{1D68D} before deploy.' },
        ],
        bodyTitle: 'Unicode text formatter for social media posts',
        body: [
            'SocialFormatter helps creators, marketers, founders, recruiters, and community managers style social media posts without Markdown, HTML, or platform-specific formatting tools. Write your caption, select the part you want to emphasize, choose a Unicode style, then copy the formatted result into your post.',
            'Use it as a bold text generator, italic text generator, script text converter, gothic font generator, monospace text formatter, or quick social media text editor for LinkedIn posts, Facebook updates, Instagram captions, X posts, TikTok bios, YouTube descriptions, and profile text.',
            'The generated characters are Unicode symbols, so they usually survive copy and paste across apps. They are useful for visual emphasis, but they are not a replacement for semantic formatting: keep important content readable, avoid overusing decorative styles, and test the final post on the platform where you plan to publish it.',
        ],
        faq: commonFaq,
    },
    {
        key: 'bold',
        path: '/bold-text-generator',
        title: 'Bold Text Generator - Copy Unicode Bold Text',
        description: 'Create Unicode bold text for social media posts, bios, captions, and headlines. Type plain text, convert it to bold, and copy the result.',
        h1: 'Bold Text Generator',
        eyebrow: 'unicode bold text',
        intro: 'Turn normal text into Unicode bold text for posts, headlines, bios, comments, and captions. Use bold sparingly to make hooks, keywords, and calls to action easier to scan.',
        defaultText: 'Launch day is here. Try the new version today.',
        preferredStyles: ['boldSansSerif', 'boldSerif'],
        examplesTitle: 'Bold text examples',
        examples: [
            { label: 'Post hook', before: 'Launch day is here.', after: '\u{1D5DF}\u{1D5EE}\u{1D602}\u{1D5FB}\u{1D5F0}\u{1D5F5} \u{1D5F1}\u{1D5EE}\u{1D606} \u{1D5F6}\u{1D600} \u{1D5F5}\u{1D5F2}\u{1D5FF}\u{1D5F2}.' },
            { label: 'CTA', before: 'Save this post for later.', after: '\u{1D5E6}\u{1D5EE}\u{1D603}\u{1D5F2} this post for later.' },
            { label: 'Headline', before: 'Three lessons from the launch.', after: '\u{1D413}\u{1D421}\u{1D42B}\u{1D41E}\u{1D41E} \u{1D425}\u{1D41E}\u{1D42C}\u{1D42C}\u{1D428}\u{1D427}\u{1D42C} from the launch.' },
        ],
        bodyTitle: 'When to use bold Unicode text',
        body: [
            'Bold Unicode text works well for short phrases that need visual weight: post hooks, section labels, product names, and calls to action.',
            'Do not convert entire paragraphs to bold. It makes posts harder to read and weakens the emphasis you wanted in the first place.',
        ],
        faq: commonFaq,
    },
    {
        key: 'italic',
        path: '/italic-text-generator',
        title: 'Italic Text Generator - Copy Unicode Italic Text',
        description: 'Create Unicode italic text for captions, comments, bios, and social posts. Convert plain text to italic and copy it anywhere.',
        h1: 'Italic Text Generator',
        eyebrow: 'unicode italic text',
        intro: 'Convert plain text into Unicode italic text for softer emphasis, notes, quotes, and captions on platforms that do not support Markdown.',
        defaultText: 'A small detail can change the whole post.',
        preferredStyles: ['italicSansSerif', 'boldItalicSansSerif', 'boldItalicSerif'],
        examplesTitle: 'Italic text examples',
        examples: [
            { label: 'Subtle emphasis', before: 'This is the part people miss.', after: 'This is the part people \u{1D632}\u{1D636}\u{1D62A}\u{1D635}\u{1D62D}\u{1D636}.' },
            { label: 'Quote', before: 'Progress beats perfection.', after: '\u{1D47F}\u{1D493}\u{1D490}\u{1D488}\u{1D493}\u{1D486}\u{1D494}\u{1D494} beats perfection.' },
            { label: 'Caption note', before: 'Available this weekend only.', after: '\u{1D608}\u{1D627}\u{1D622}\u{1D62A}\u{1D62D}\u{1D622}\u{1D623}\u{1D62D}\u{1D626} this weekend only.' },
        ],
        bodyTitle: 'Italic text for social posts',
        body: [
            'Italic Unicode text is useful for quotes, notes, captions, product hints, and phrases that should feel secondary rather than loud.',
            'For long social posts, combine normal text with short italic phrases instead of styling everything.',
        ],
        faq: commonFaq,
    },
    {
        key: 'linkedin',
        path: '/linkedin-text-formatter',
        title: 'LinkedIn Text Formatter - Bold and Italic LinkedIn Posts',
        description: 'Format LinkedIn posts with Unicode bold, italic, and monospace text. Create clearer hooks, sections, bullets, and calls to action.',
        h1: 'LinkedIn Text Formatter',
        eyebrow: 'linkedin post tool',
        intro: 'Format LinkedIn posts with Unicode bold, italic, and monospace text. Make hooks, section labels, takeaways, and calls to action easier to scan without relying on Markdown.',
        defaultText: 'New lesson from this project: clarity beats cleverness.',
        preferredStyles: ['boldSansSerif', 'italicSansSerif', 'monospace'],
        examplesTitle: 'LinkedIn formatting examples',
        examples: [
            { label: 'Hook', before: 'New lesson from this project:', after: '\u{1D5E1}\u{1D5F2}\u{1D604} \u{1D5F9}\u{1D5F2}\u{1D600}\u{1D600}\u{1D5FC}\u{1D5FB} from this project:' },
            { label: 'Takeaway', before: 'Takeaway: write for scanning.', after: '\u{1D5E7}\u{1D5EE}\u{1D5F8}\u{1D5F2}\u{1D5EE}\u{1D604}\u{1D5EE}\u{1D606}: write for scanning.' },
            { label: 'Code term', before: 'Run npm build before deploy.', after: 'Run \u{1D697}\u{1D699}\u{1D696} \u{1D68B}\u{1D69E}\u{1D692}\u{1D695}\u{1D68D} before deploy.' },
        ],
        bodyTitle: 'How to format LinkedIn posts without Markdown',
        body: [
            'LinkedIn does not offer rich text formatting for regular posts, so Unicode characters are a practical way to highlight hooks, headings, and key phrases.',
            'The best LinkedIn formatting is restrained: one bold hook, a few clear section labels, and normal readable body text.',
        ],
        faq: commonFaq,
    },
    {
        key: 'instagram',
        path: '/instagram-caption-formatter',
        title: 'Instagram Caption Formatter - Unicode Fonts for Captions and Bios',
        description: 'Format Instagram captions and bios with Unicode bold, script, gothic, italic, and monospace text. Copy styled text for posts and profiles.',
        h1: 'Instagram Caption Formatter',
        eyebrow: 'instagram captions',
        intro: 'Create styled Unicode text for Instagram captions, bios, comments, and calls to action. Use decorative styles for short accents and keep the rest readable.',
        defaultText: 'Limited drop tonight only. Save this before it sells out.',
        preferredStyles: ['handwrite', 'gothic', 'boldSansSerif', 'italicSansSerif'],
        examplesTitle: 'Instagram caption examples',
        examples: [
            { label: 'Drop announcement', before: 'Limited drop tonight only.', after: '\u{1D4DB}\u{1D4F2}\u{1D4F6}\u{1D4F2}\u{1D4FD}\u{1D4EE}\u{1D4ED} drop tonight only.' },
            { label: 'Bio accent', before: 'Creative studio for modern brands.', after: '\u{1D56E}\u{1D597}\u{1D58A}\u{1D586}\u{1D599}\u{1D58E}\u{1D59B}\u{1D58A} studio for modern brands.' },
            { label: 'CTA', before: 'Save this for later.', after: '\u{1D5E6}\u{1D5EE}\u{1D603}\u{1D5F2} this for later.' },
        ],
        bodyTitle: 'Unicode fonts for Instagram captions',
        body: [
            'Instagram captions and bios can benefit from short styled phrases, especially for product drops, creator profiles, and recurring content formats.',
            'Decorative Unicode text is best used as an accent. Full captions in script or gothic styles are harder to read and can reduce engagement.',
        ],
        faq: commonFaq,
    },
    {
        key: 'facebook',
        path: '/facebook-post-formatter',
        title: 'Facebook Post Formatter - Bold and Styled Unicode Text',
        description: 'Format Facebook posts, group updates, and page captions with Unicode bold, italic, script, gothic, and monospace text.',
        h1: 'Facebook Post Formatter',
        eyebrow: 'facebook post tool',
        intro: 'Format Facebook posts with Unicode styles for announcements, community updates, page posts, and group content. Highlight the important parts without turning the whole post into decoration.',
        defaultText: 'Important update: registration closes Friday.',
        preferredStyles: ['boldSansSerif', 'boldSerif', 'italicSansSerif'],
        examplesTitle: 'Facebook post examples',
        examples: [
            { label: 'Announcement', before: 'Important update: registration closes Friday.', after: '\u{1D5DC}\u{1D5FA}\u{1D5FD}\u{1D5FC}\u{1D5FF}\u{1D601}\u{1D5EE}\u{1D5FB}\u{1D601} \u{1D602}\u{1D5FD}\u{1D5F1}\u{1D5EE}\u{1D601}\u{1D5F2}: registration closes Friday.' },
            { label: 'Group post', before: 'Please read before commenting.', after: '\u{1D40F}\u{1D425}\u{1D41E}\u{1D41A}\u{1D42C}\u{1D41E} read before commenting.' },
            { label: 'Event note', before: 'Doors open at 7 PM.', after: 'Doors open at 7 \u{1D5E3}\u{1D5E0}.' },
        ],
        bodyTitle: 'Formatting Facebook posts with Unicode',
        body: [
            'Facebook posts often need quick visual hierarchy: an announcement label, a date, a location, or a call to action.',
            'Unicode formatting can make those parts stand out, especially in groups and page updates where Markdown is not available.',
        ],
        faq: commonFaq,
    },
    {
        key: 'unicode-font',
        path: '/unicode-font-generator',
        title: 'Unicode Font Generator - Copy Fancy Text Styles',
        description: 'Generate fancy Unicode text styles including bold, italic, serif, script, gothic, and monospace. Copy styled text for social media.',
        h1: 'Unicode Font Generator',
        eyebrow: 'fancy unicode text',
        intro: 'Generate multiple Unicode text styles from plain text. Compare bold, italic, serif, script, gothic, and monospace output before copying the version that fits your post.',
        defaultText: 'Choose the style that fits the message.',
        preferredStyles: ['boldSansSerif', 'italicSansSerif', 'boldItalicSansSerif', 'boldSerif', 'boldItalicSerif', 'handwrite', 'gothic', 'monospace'],
        examplesTitle: 'Unicode font examples',
        examples: [
            { label: 'Bold sans', before: 'Product update', after: '\u{1D5E3}\u{1D5FF}\u{1D5FC}\u{1D5F1}\u{1D602}\u{1D5F0}\u{1D601} \u{1D602}\u{1D5FD}\u{1D5F1}\u{1D5EE}\u{1D601}\u{1D5F2}' },
            { label: 'Script', before: 'Creator notes', after: '\u{1D4D2}\u{1D4FB}\u{1D4EE}\u{1D4EA}\u{1D4FD}\u{1D4F8}\u{1D4FB} notes' },
            { label: 'Monospace', before: 'npm run build', after: '\u{1D697}\u{1D699}\u{1D696} \u{1D69B}\u{1D69E}\u{1D697} \u{1D68B}\u{1D69E}\u{1D692}\u{1D695}\u{1D68D}' },
        ],
        bodyTitle: 'What a Unicode font generator actually does',
        body: [
            'These are not custom fonts installed on a social network. They are Unicode characters that resemble different type styles.',
            'That distinction matters: Unicode styled text is portable, but it can affect search, accessibility, and readability if overused.',
        ],
        faq: commonFaq,
    },
];

export const routes = pages.map((page) => page.path);

export const getPageByPath = (path) => pages.find((page) => page.path === path) ?? pages[0];

export const getPageByKey = (key) => pages.find((page) => page.key === key) ?? pages[0];
