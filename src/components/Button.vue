<template>
    <button type="button" class="px-3 text-sm py-1.5 rounded-md text-white truncate w-full transition-colors" :class="colorClasses">
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    color: String
});

const colorClasses = computed(()=>{
    switch (props.color) {
        case 'blue':
        return 'bg-blue-600 hover:bg-blue-500';

        case 'violet':
        return 'bg-violet-600 hover:bg-violet-500';

        case 'fuchsia':
        return 'bg-fuchsia-600 hover:bg-fuchsia-500';
    }
});

</script>
