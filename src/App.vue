<template>
    <Navbar/>
    <div class="container mb-3">

      <router-view/>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    export default {
        components: {
            Navbar
        }
    }
</script>
<style>

</style>