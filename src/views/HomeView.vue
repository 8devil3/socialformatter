<template>
    <main>
        <div class="mb-3 text-xs font-bold text-center uppercase text-emerald-400">free tool</div>

        <h1 class="mx-auto mb-4 text-3xl font-extrabold text-center w-fit md:mb-6 md:text-5xl text-gradient">
            SocialFormatter
        </h1>

        <p class="max-w-3xl mx-auto mb-10 text-base font-semibold leading-relaxed text-center md:text-lg text-slate-300">
            ✨ Format text for Facebook, LinkedIn, X, Instagram, TikTok, YouTube, and any social network that does not support Markdown. Convert plain text into Unicode bold, italic, serif, gothic, script, and monospace styles that you can paste anywhere. ✨
        </p>

        <div class="grid grid-cols-1 gap-2 mt-5 lg:grid-cols-none lg:auto-cols-auto lg:grid-flow-col">
            <fieldset
                v-for="group in styleGroups"
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
                    <h2 class="text-lg font-bold text-slate-100">Write your text</h2>
                    <span class="text-xs font-semibold text-slate-400">{{ inputText.length }} chars</span>
                </div>

                <textarea
                    ref="inputRef"
                    v-model="inputText"
                    rows="8"
                    placeholder="Type your text here. Select a word or phrase, then choose a style."
                    autofocus
                    class="focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:shadow-inner w-full block bg-slate-800 focus:border-violet-500 border-slate-400 border rounded-xl px-3 py-2.5 resize-y"
                    @select="storeSelection"
                    @keyup="storeSelection"
                    @mouseup="storeSelection"
                    @input="handleInput"
                />
            </section>

            <section class="min-w-0">
                <div class="flex items-end justify-between gap-3 mb-3">
                    <h2 class="text-lg font-bold text-slate-100">Formatted result</h2>
                    <span class="text-xs font-semibold text-slate-400">{{ resultText.length }} chars</span>
                </div>

                <textarea
                    :value="resultText"
                    rows="8"
                    readonly
                    placeholder="Your formatted text will appear here."
                    class="focus:outline-none focus:ring-2 focus:ring-emerald-500/30 w-full block bg-slate-900 border-slate-500 border rounded-xl px-3 py-2.5 resize-y"
                />
            </section>
        </div>

        <div class="grid grid-cols-3 gap-2 mt-4">
            <button type="button" @click="copyText" class="font-normal px-3 text-sm py-1.5 rounded-md border-2 border-green-500 text-green-500 hover:text-white hover:bg-green-500/50 transition-colors truncate">
                <template v-if="!isCopied">Copy result</template>
                <template v-else>Copied!</template>
            </button>

            <button type="button" @click="resetAll" class="font-normal px-3 text-sm py-1.5 rounded-md border-amber-500 border-2 text-amber-500 hover:text-white hover:bg-amber-500/50 transition-colors w-full truncate">
                Reset all
            </button>

            <button type="button" @click="deleteText" class="font-normal px-3 text-sm py-1.5 rounded-md border-red-500 border-2 text-red-500 hover:text-white hover:bg-red-500/50 transition-colors truncate">
                Delete text
            </button>
        </div>

        <section class="space-y-5 leading-relaxed mt-14 text-slate-300">
            <h2 class="text-2xl font-extrabold text-slate-100">Unicode text formatter for social media posts</h2>

            <p>
                SocialFormatter helps creators, marketers, founders, recruiters, and community managers style social media posts without Markdown, HTML, or platform-specific formatting tools. Write your caption, select the part you want to emphasize, choose a Unicode style, then copy the formatted result into your post.
            </p>

            <p>
                Use it as a bold text generator, italic text generator, script text converter, gothic font generator, monospace text formatter, or quick social media text editor for LinkedIn posts, Facebook updates, Instagram captions, X posts, TikTok bios, YouTube descriptions, and profile text.
            </p>

            <p>
                The generated characters are Unicode symbols, so they usually survive copy and paste across apps. They are useful for visual emphasis, but they are not a replacement for semantic formatting: keep important content readable, avoid overusing decorative styles, and test the final post on the platform where you plan to publish it.
            </p>
        </section>
    </main>

    <footer class="flex flex-col gap-4 mt-16 text-sm md:flex-row md:items-center md:justify-between text-slate-400">
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
import Button from '@/components/Button.vue';
import unicodeMaps from '../unicodeMaps.json';

const inputRef = ref(null);
const inputText = ref('');
const isCopied = ref(false);
const selection = ref({ start: 0, end: 0 });
const formatRanges = ref([]);

const styleGroups = [
    {
        label: 'Sans serif',
        borderClass: 'border-blue-600',
        buttonClass: 'bg-blue-600 hover:bg-blue-500',
        gridClass: 'grid-cols-3 lg:grid-cols-none lg:auto-cols-auto lg:grid-flow-col',
        styles: [
            { key: 'boldSansSerif', label: '𝗕𝗼𝗹𝗱', title: 'bold sans serif' },
            { key: 'italicSansSerif', label: '𝘪𝘵𝘢𝘭𝘪𝘤', title: 'italic sans serif' },
            { key: 'boldItalicSansSerif', label: '𝘽𝙤𝙡𝙙 𝙞𝙩𝙖𝙡𝙞𝙘', title: 'bold italic sans serif' },
        ],
    },
    {
        label: 'Serif',
        borderClass: 'border-violet-600',
        buttonClass: 'bg-violet-600 hover:bg-violet-500',
        gridClass: 'grid-cols-2 lg:grid-cols-none lg:auto-cols-auto lg:grid-flow-col',
        styles: [
            { key: 'boldSerif', label: '𝐁𝐨𝐥𝐝', title: 'bold serif' },
            { key: 'boldItalicSerif', label: '𝑩𝒐𝒍𝒅 𝒊𝒕𝒂𝒍𝒊𝒄', title: 'bold italic serif' },
        ],
    },
    {
        label: 'Other styles',
        borderClass: 'border-fuchsia-600',
        buttonClass: 'bg-fuchsia-600 hover:bg-fuchsia-500',
        gridClass: 'grid-cols-3 lg:grid-cols-none lg:auto-cols-auto lg:grid-flow-col',
        styles: [
            { key: 'handwrite', label: '𝓗𝓪𝓷𝓭𝔀𝓻𝓲𝓽𝓮', title: 'handwrite' },
            { key: 'gothic', label: '𝕲𝖔𝖙𝖍𝖎𝖈', title: 'gothic' },
            { key: 'monospace', label: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎', title: 'monospace' },
        ],
    },
];

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
