<template>
  <div>
    <nav-bar/>
    <nuxt />
    <site-footer/>
  </div>
</template>

<style>
</style>

<script>
import NavBar from '../components/nav'
import SiteFooter from '../components/footer'

export default {
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'stylesheet dns-prefetch preconnect', href: 'https://fonts.googleapis.com/css?family=Poppins' }
    ]
  },
  components: {
    NavBar,
    SiteFooter
  }
}
</script>
