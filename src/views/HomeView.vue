<template>
    <main>
        <div class="mb-3 text-xs font-bold text-center uppercase text-emerald-400">{{ page.eyebrow }}</div>

        <h1 class="mx-auto mb-4 text-3xl font-extrabold text-center w-fit md:mb-6 md:text-5xl text-gradient">
            {{ page.h1 }}
        </h1>

        <p class="max-w-3xl mx-auto mb-10 text-base font-semibold leading-relaxed text-center md:text-lg">
            <span aria-hidden="true">&#10024;</span>
            {{ page.intro }}
            <span aria-hidden="true">&#10024;</span>
        </p>

        <div class="grid grid-cols-1 gap-2 mt-5 lg:grid-cols-none lg:auto-cols-auto lg:grid-flow-col">
            <fieldset
                v-for="group in visibleStyleGroups"
                :key="group.label"
                class="grid gap-2 p-2 border-2 rounded-xl"
                :class="[group.borderClass, group.gridClass]"
            >
                <legend class="px-1 text-[13px] font-bold">{{ group.label }}</legend>

                <Button
                    v-for="style in group.styles"
                    :key="style.key"
                    :title="style.title"
                    :class="group.buttonClass"
                    @click="applyStyle(style.key)"
                >
                    {{ style.label }}
                </Button>
            </fieldset>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
            <section class="min-w-0">
                <div class="flex items-end justify-between gap-3 mb-3">
                    <h2 class="text-lg font-bold text-base-content">Write your text</h2>
                    <span class="text-xs font-semibold text-base-300">{{ inputText.length }} chars</span>
                </div>

                <textarea
                    ref="inputRef"
                    v-model="inputText"
                    rows="12"
                    placeholder="Type your text here then choose a style."
                    autofocus
                    class="focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:shadow-inner w-full block bg-base-200 focus:border-violet-500 border-base-content/50 border rounded-xl px-3 py-2.5 resize-y"
                    @select="storeSelection"
                    @keyup="storeSelection"
                    @mouseup="storeSelection"
                    @input="handleInput"
                />
            </section>

            <section class="min-w-0">
                <div class="flex items-end justify-between gap-3 mb-3">
                    <h2 class="text-lg font-bold text-base-content">Formatted result</h2>
                    <span class="text-xs font-semibold text-base-300">{{ resultText.length }} chars</span>
                </div>

                <textarea
                    :value="resultText"
                    rows="12"
                    readonly
                    placeholder="Your formatted text will appear here."
                    class="focus:outline-none focus:ring-2 focus:ring-emerald-500/30 w-full block bg-base-300 border-slate-500 border rounded-xl px-3 py-2.5 resize-y"
                />
            </section>
        </div>

        <div class="grid grid-cols-3 gap-2 mt-4">
            <button type="button" @click="copyText" class="btn btn-success">
                <template v-if="!isCopied">Copy result</template>
                <template v-else>Copied!</template>
            </button>

            <button type="button" @click="resetAll" class="btn btn-warning">
                Reset all
            </button>

            <button type="button" @click="deleteText" class="btn btn-error">
                Delete text
            </button>
        </div>

        <section class="mt-14">
            <h2 class="mb-5 text-2xl font-extrabold text-ase-content">{{ page.examplesTitle }}</h2>

            <div class="grid gap-3 md:grid-cols-3">
                <article
                    v-for="example in page.examples"
                    :key="example.label"
                    class="p-4 border rounded-lg bg-base-200/70 border-base-300"
                >
                    <h3 class="mb-3 text-sm font-bold uppercase text-emerald-400">{{ example.label }}</h3>
                    <p class="mb-2 text-sm text-base-content/50">{{ example.before }}</p>
                    <p class="font-semibold text-ase-content">{{ example.after }}</p>
                </article>
            </div>
        </section>

        <section class="space-y-5 leading-relaxed mt-14 text-base-content">
            <h2 class="text-2xl font-extrabold text-base-content">{{ page.bodyTitle }}</h2>

            <p v-for="paragraph in page.body" :key="paragraph">
                {{ paragraph }}
            </p>
        </section>

        <section class="mt-14">
            <h2 class="mb-5 text-2xl font-extrabold text-base-content">Frequently asked questions</h2>

            <div class="space-y-3">
                <details
                    v-for="item in page.faq"
                    :key="item.question"
                    class="p-4 border rounded-lg bg-base-200/70 border-base-300"
                >
                    <summary class="flex items-center justify-between gap-8 font-bold cursor-pointer text-base-content">
                        <div>{{ item.question }}</div>
                        <i class="text-violet-500 fas fa-chevron-down" />
                    </summary>
                    <p class="mt-3 leading-relaxed text-base-content/70">{{ item.answer }}</p>
                </details>
            </div>
        </section>

        <section class="mt-14">
            <h2 class="mb-5 text-2xl font-extrabold text-base-content">More text tools</h2>

            <div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <RouterLink
                    v-for="item in relatedPages"
                    :key="item.path"
                    :to="item.path"
                    class="block p-4 transition-colors border rounded-lg bg-base-200/70 border-base-300 hover:border-emerald-500/70 hover:bg-base-100"
                >
                    <span class="block mb-2 font-bold text-base-content">{{ item.h1 }}</span>
                    <span class="block text-sm leading-relaxed text-base-content/50">{{ item.description }}</span>
                </RouterLink>
            </div>
        </section>
    </main>

    <footer class="flex flex-col gap-4 mt-16 text-sm md:flex-row md:items-center md:justify-between text-base-content/50">
        <div>
            &copy; {{ new Date().getFullYear() }}
            <a href="https://www.orangeweb.biz" class="font-semibold text-orange-500 transition-colors hover:text-orange-400">OrangeWeb</a>
        </div>

        <div class="flex flex-wrap gap-2">
            <a href="https://www.iubenda.com/privacy-policy/58923215" class="iubenda-black iubenda-noiframe iubenda-embed" title="Privacy Policy">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/58923215/cookie-policy" class="iubenda-black iubenda-noiframe iubenda-embed" title="Cookie Policy">Cookie Policy</a>
        </div>
    </footer>
</template>

<script setup>
import { computed, ref } from 'vue';
import { onBeforeRouteUpdate, RouterLink, useRoute } from 'vue-router';
import Button from '@/components/Button.vue';
import unicodeMaps from '../unicodeMaps.json';
import { getPageByPath, pages, styleGroups } from '../content/pages';

const route = useRoute();
const inputRef = ref(null);
const inputText = ref(getPageByPath(route.path).defaultText);
const isCopied = ref(false);
const selection = ref({ start: 0, end: 0 });
const formatRanges = ref([]);

const page = computed(() => getPageByPath(route.path));

const relatedPages = computed(() => pages.filter((item) => item.path !== page.value.path));

const visibleStyleGroups = computed(() => styleGroups
    .map((group) => ({
        ...group,
        styles: group.styles.filter((style) => page.value.preferredStyles.includes(style.key)),
    }))
    .filter((group) => group.styles.length));

const reverseMap = Object.values(unicodeMaps).reduce((map, unicodeMap) => {
    Object.entries(unicodeMap).forEach(([plainLetter, codePoint]) => {
        map[codePoint.toLowerCase()] = plainLetter;
    });

    return map;
}, {});

const normalizeText = (text = '') => Array.from(text).map((character) => {
    const codePoint = character.codePointAt(0).toString(16);
    return reverseMap[codePoint] ?? character;
}).join('');

const transformText = (text = '', styleKey = null) => {
    const unicodeMap = unicodeMaps[styleKey];
    const plainText = normalizeText(text);

    if (!unicodeMap) return plainText;

    return Array.from(plainText).map((character) => {
        const codePoint = unicodeMap[character];
        return codePoint ? String.fromCodePoint(parseInt(codePoint, 16)) : character;
    }).join('');
};

const resultText = computed(() => {
    const sourceText = inputText.value;
    let cursor = 0;
    let output = '';

    const orderedRanges = [...formatRanges.value].sort((a, b) => a.start - b.start);

    orderedRanges.forEach((range) => {
        output += sourceText.slice(cursor, range.start);
        output += transformText(sourceText.slice(range.start, range.end), range.styleKey);
        cursor = range.end;
    });

    output += sourceText.slice(cursor);
    return output;
});

onBeforeRouteUpdate((to) => {
    inputText.value = getPageByPath(to.path).defaultText;
    formatRanges.value = [];
    selection.value = { start: 0, end: 0 };
});

const storeSelection = () => {
    const textarea = inputRef.value;
    if (!textarea) return;

    selection.value = {
        start: textarea.selectionStart,
        end: textarea.selectionEnd,
    };
};

const handleInput = () => {
    const normalizedValue = normalizeText(inputText.value);

    if (inputText.value !== normalizedValue) {
        inputText.value = normalizedValue;
    }

    formatRanges.value = [];
    storeSelection();
};

const getSelectedRange = () => {
    const textLength = inputText.value.length;
    const { start, end } = selection.value;

    if (start !== end) return { start, end };

    return { start: 0, end: textLength };
};

const applyStyle = (styleKey) => {
    const { start, end } = getSelectedRange();

    if (start === end) return;

    formatRanges.value = formatRanges.value.flatMap((range) => {
        if (range.end <= start || range.start >= end) return [range];

        const remainingRanges = [];

        if (range.start < start) {
            remainingRanges.push({ ...range, end: start });
        }

        if (range.end > end) {
            remainingRanges.push({ ...range, start: end });
        }

        return remainingRanges;
    });

    formatRanges.value.push({ start, end, styleKey });
};

const resetAll = () => {
    formatRanges.value = [];
    inputText.value = normalizeText(inputText.value);
};

const copyText = async () => {
    if (!resultText.value) return;

    await navigator.clipboard.writeText(resultText.value);
    isCopied.value = true;

    setTimeout(() => {
        isCopied.value = false;
    }, 2000);
};

const deleteText = () => {
    formatRanges.value = [];
    inputText.value = '';
};
</script>
