<template lang="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="{ name : 'Home' }">VueX</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link " :to="{ name : 'Home' }">Home
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
            <router-link v-if="auth" class="nav-link" :to="{ name : 'Dashbord' }">dashbord</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" v-if="auth" herf="#">{{ user.name }}</a>
        </li>
        <li class="nav-item">
            <router-link v-if="!auth" class="nav-link" :to="{ name : 'Singin' }">Singin</router-link>
        </li>
        <li class="nav-item">
            <a @click='logOut()' v-if="auth" class="nav-link" href="#">Log out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
      ...mapGetters({
        'auth': 'auth/auth',
        'user': 'auth/user'
      })
    },
    methods: {
      ...mapActions({
        'singOut' : 'auth/singOut'
      }),
      logOut () {
        this.singOut().then(() => {
          this.$router.replace({ name: 'Singin' })
        })
      }
    }
}
</script>
<style lang="">
    
</style>