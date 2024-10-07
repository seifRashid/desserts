<script setup>

defineProps({
    link:String,
    name:String
})

</script>
<template>
    <button>
        <a href="{{ link }}" class="py-2 px-4 text-white text-md font-semibold rounded-full bg-orange-500">
            {{ name }}
        </a>
    </button>
</template>