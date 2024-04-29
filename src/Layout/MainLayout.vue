<script setup>
    import AppFooter from './AppFooter.vue';
    import AppHeader from './AppHeader.vue';
</script>

<template>
    <main class="app-main min-vh-100 d-flex flex-wrap">
        <AppHeader />
        <div class="app-container d-flex flex-column">
            <router-view></router-view>
        </div>
        <AppFooter />
    </main>
</template>

<style lang="scss">
</style>