<template>
    <div id="app">
        <iphone-preview
        />

        <android-preview
        />
    </div>
</template>

<script>
    import IphonePreview from './components/IphonePreview.vue';
    import AndroidPreview from './components/AndroidPreview.vue';

    export default {
        components: {
            IphonePreview,
            AndroidPreview
        }
    }
</script>
