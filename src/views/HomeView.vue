<template>
    <main>
        <div class="mb-3 text-xs font-bold text-center uppercase text-emerald-400">free tool</div>

        <h1 class="mx-auto mb-4 text-3xl font-extrabold text-center w-fit md:mb-6 md:text-5xl text-gradient">
            SocialFormatter
        </h1>

        <h2 class="mb-12 text-base font-semibold leading-relaxed text-center md:text-lg text-slate-300">
            ✨ <em>SocialFormatter</em> is a free online tool that makes it easy to add bold, italic, and other text styles to your social media posts on Facebook, LinkedIn, X, Instagram, and more. Enhance your posts to stand out and drive engagement! ✨
        </h2>

        <div class="grid grid-cols-1 gap-2 mb-4 md:grid-cols-none md:auto-cols-auto md:grid-flow-col">
            <fieldset class="grid grid-cols-3 gap-2 p-2 border-2 border-blue-600 rounded-xl md:grid-cols-none md:auto-cols-auto md:grid-flow-col">
                <legend class="px-1 text-[13px] font-bold">Sans serif</legend>

                <Button @click="resetFormat(unicodeMaps.boldSansSerif, getSelectedText())" title="bold sans serif" class="font-bold bg-blue-600 hover:bg-blue-500">
                    Bold
                </Button>

                <Button @click="resetFormat(unicodeMaps.italicSansSerif, getSelectedText())" title="italic sans serif" class="italic bg-blue-600 hover:bg-blue-500">
                    Italic
                </Button>

                <Button @click="resetFormat(unicodeMaps.boldItalicSansSerif, getSelectedText())" title="bold italic sans serif" class="italic font-bold bg-blue-600 hover:bg-blue-500">
                    Bold italic
                </Button>
            </fieldset>


            <fieldset class="grid grid-cols-2 gap-2 p-2 border-2 border-violet-600 rounded-xl md:grid-cols-none md:auto-cols-auto md:grid-flow-col">
                <legend class="px-1 text-[13px] font-bold">Serif</legend>

                <Button @click="resetFormat(unicodeMaps.boldSerif, getSelectedText())" title="bold serif" class="bg-violet-600 hover:bg-violet-500">
                    𝑩𝒐𝒍𝒅
                </Button>

                <Button @click="resetFormat(unicodeMaps.boldItalicSerif, getSelectedText())" title="bold italic serif" class="bg-violet-600 hover:bg-violet-500">
                    𝑩𝒐𝒍𝒅 𝒊𝒕𝒂𝒍𝒊𝒄
                </Button>
            </fieldset>


            <fieldset class="grid grid-cols-3 gap-2 p-2 border-2 border-fuchsia-600 rounded-xl md:grid-cols-none md:auto-cols-auto md:grid-flow-col">
                <legend class="px-1 text-[13px] font-bold">Other styles</legend>

                <Button @click="resetFormat(unicodeMaps.handwrite, getSelectedText())" title="handwrite" class="bg-fuchsia-600 hover:bg-fuchsia-500">
                    𝓗𝓪𝓷𝓭𝔀𝓻𝓲𝓽𝓮
                </Button>

                <Button @click="resetFormat(unicodeMaps.gothic, getSelectedText())" title="gothic" class="bg-fuchsia-600 hover:bg-fuchsia-500">
                    𝕲𝖔𝖙𝖍𝖎𝖈
                </Button>

                <Button @click="resetFormat(unicodeMaps.monospace, getSelectedText())" title="monospace" class="bg-fuchsia-600 hover:bg-fuchsia-500">
                    𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎
                </Button>
            </fieldset>
        </div>

        <textarea ref="textareaRef" rows="16" placeholder="Type your text and select it to format..." autofocus class="focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:shadow-inner w-full block bg-slate-800 focus:border-violet-500 border-slate-400 border rounded-xl px-2.5 py-2"></textarea>

        <div class="grid grid-cols-2 gap-2 mt-4 md:grid-cols-4">
            <button type="button" @click="copyText()" class="font-normal px-3 text-sm py-1.5 rounded-md border-2 border-green-500 text-green-500 hover:text-white hover:bg-green-500/50 transition-colors col-span-full md:col-span-1 w-full truncate">
                <template v-if="!isCopied">
                    <i class="mr-1 fa-solid fa-copy" />
                    Copy text
                </template>
                <template v-else>
                    <i class="mr-1 transition-opacity fa-solid fa-check" />
                    Copied!
                </template>
            </button>

            <button type="button" @click="resetFormat(null, getSelectedText())" class="font-normal px-3 text-sm py-1.5 rounded-md border-2 border-amber-500 text-amber-500 hover:text-white hover:bg-amber-500/50 transition-colors w-full truncate">
                <i class="mr-1 fa-solid fa-arrow-rotate-left" />
                Reset selection
            </button>

            <button type="button" @click="resetAll()" class="font-normal px-3 text-sm py-1.5 rounded-md border-amber-500 border-2 text-amber-500 hover:text-white hover:bg-amber-500/50 transition-colors w-full truncate">
                <i class="mr-1 fa-solid fa-arrow-rotate-left" />
                Reset all
            </button>

            <button type="button" @click="deleteText()" class="font-normal px-3 text-sm py-1.5 rounded-md border-red-500 border-2 text-red-500 hover:text-white hover:bg-red-500/50 transition-colors md:col-span-1 col-span-full w-full truncate">
                <i class="mr-1 fa-solid fa-trash" />
                Delete text
            </button>
        </div>
    </main>

    <footer class="flex justify-between mt-16 text-sm text-slate-400">
        <div>
            &copy; {{ new Date().getFullYear() }}
            <a href="https://www.orangeweb.biz" class="font-semibold text-orange-500 transition-colors hover:text-orange-400">OrangeWeb</a>
        </div>

        <div class="flex flex-wrap gap-2">
            <a href="https://www.iubenda.com/privacy-policy/58923215" class="iubenda-black iubenda-noiframe iubenda-embed " title="Privacy Policy ">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/58923215/cookie-policy" class="iubenda-black iubenda-noiframe iubenda-embed " title="Cookie Policy ">Cookie Policy</a>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import unicodeMaps from '../unicodeMaps.json';

const textareaRef = ref(null);
const isCopied = ref(false);

const getSelectedText = ()=>{
    const textarea = textareaRef.value; // Riferimento alla textarea
    if (!textarea) return;

    // Prendi l'indice di inizio e fine della selezione
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end) return; // Nessuna selezione attiva

    // Ottieni il testo selezionato
    const selectedText = textarea.value.substring(start, end);

    return selectedText;
};

const replaceText = (formattedText = '')=>{
    if(formattedText){
        const textarea = textareaRef.value; // Riferimento alla textarea
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        // Sostituisci il testo selezionato con il testo formattato
        textarea.value = textarea.value.substring(0, start) + formattedText + textarea.value.substring(end);

        // Riposiziona il cursore
        textarea.setSelectionRange(start + formattedText.length, start + formattedText.length);
        textarea.focus();
    }
};

const formatText = (unicodeMap = null, text = [])=>{
    let formattedText = text;

    if(unicodeMap){
        formattedText = text.map(letter => {
            if(unicodeMap[letter]) return String.fromCodePoint('0x' + unicodeMap[letter]);
            return letter;
        });
    }

    replaceText(formattedText.join(''));
};

const resetAll = ()=>{
    textareaRef.value.select();
    resetFormat(null, textareaRef.value.value);
};

const resetFormat = (unicodeMap = null, text = '')=>{
    // const reverseMaps = {};
    // for (const uMap in unicodeMaps) {
    //     const map = unicodeMaps[uMap];
    //     reverseMaps[uMap] = {};
    //     for (const letter in map) {
    //         const code = map[letter];
    //         reverseMaps[uMap][code] = letter;
    //     }
    // }

    const reverseBoldSansSerif = {};
    for (const bold in unicodeMaps.boldSansSerif) {
        reverseBoldSansSerif[unicodeMaps.boldSansSerif[bold]] = bold;
    }

    const reverseItalicSansSerif = {};
    for (const italic in unicodeMaps.italicSansSerif) {
        reverseItalicSansSerif[unicodeMaps.italicSansSerif[italic]] = italic;
    }

    const reverseBoldItalicSansSerif = {};
    for (const boldItalic in unicodeMaps.boldItalicSansSerif) {
        reverseBoldItalicSansSerif[unicodeMaps.boldItalicSansSerif[boldItalic]] = boldItalic;
    }

    const reverseBoldSerif = {};
    for (const bold in unicodeMaps.boldSerif) {
        reverseBoldSerif[unicodeMaps.boldSerif[bold]] = bold;
    }

    const reverseBoldItalicSerif = {};
    for (const boldItalic in unicodeMaps.boldItalicSerif) {
        reverseBoldItalicSerif[unicodeMaps.boldItalicSerif[boldItalic]] = boldItalic;
    }

    const reverseHandwrite = {};
    for (const handwrite in unicodeMaps.handwrite) {
        reverseHandwrite[unicodeMaps.handwrite[handwrite]] = handwrite;
    }

    const reverseGothic = {};
    for (const gothic in unicodeMaps.gothic) {
        reverseGothic[unicodeMaps.gothic[gothic]] = gothic;
    }

    const reverseMonospace = {};
    for (const monospace in unicodeMaps.monospace) {
        reverseMonospace[unicodeMaps.monospace[monospace]] = monospace;
    }

    // Conversione da formattato a normale
    let normalText = [];
    for (let i = 0; i < text.length; i++) {
        let cp = text.codePointAt(i);

        // for (const uMap in reverseMaps) {
        //     if(reverseMaps[uMap][cp.toString(16)]){
        //         // console.log(uMap, cp.toString(16), reverseMaps[uMap][cp.toString(16)]);
        //         normalText.push(reverseMaps[uMap][cp.toString(16)]);
        //         break;
        //     } else {
        //         normalText.push(text[i]);
        //         break;
        //     }
        // }

        if(reverseItalicSansSerif[cp.toString(16)]) normalText.push(reverseItalicSansSerif[cp.toString(16)]);
        else if(reverseBoldSansSerif[cp.toString(16)]) normalText.push(reverseBoldSansSerif[cp.toString(16)]);
        else if(reverseBoldItalicSansSerif[cp.toString(16)]) normalText.push(reverseBoldItalicSansSerif[cp.toString(16)]);
        else if(reverseBoldSerif[cp.toString(16)]) normalText.push(reverseBoldSerif[cp.toString(16)]);
        else if(reverseBoldItalicSerif[cp.toString(16)]) normalText.push(reverseBoldItalicSerif[cp.toString(16)]);
        else if(reverseHandwrite[cp.toString(16)]) normalText.push(reverseHandwrite[cp.toString(16)]);
        else if(reverseGothic[cp.toString(16)]) normalText.push(reverseGothic[cp.toString(16)]);
        else if(reverseMonospace[cp.toString(16)]) normalText.push(reverseMonospace[cp.toString(16)]);
        else normalText.push(text[i]);

        // Verifica se il carattere corrente è seguito da un altro punto di codice
        // che fa parte della sequenza (modificatori di stile, per esempio).
        // Salta il punto di codice successivo che fa parte della sequenza.
        if(cp >= 0x10000) i++;
    }

    formatText(unicodeMap, normalText);
};

const copyText = ()=>{
    navigator.clipboard.writeText(textareaRef.value.value);
    isCopied.value = true;

    setTimeout(() => {
        isCopied.value = false;
    }, 2000);
};

const deleteText = ()=>{
    textareaRef.value.value = null;
};

</script>
