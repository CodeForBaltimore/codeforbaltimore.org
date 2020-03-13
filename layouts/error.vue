<template>
  <div class="error">
    <div class="container">
      <img src="/images/travolta.gif" alt="Something went wrong" />
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <nuxt-link to="/">Home page</nuxt-link> | <a href="https://github.com/CodeForBaltimore/CfB-websiteV3/issues">Submit an issue</a>
    </div>
  </div>
</template>

<style>
.error {
  border-radius: 0;
  margin-bottom: 0;
  text-align: center;
}
.error .container {
  margin: 100px auto;
}
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins' }
    ]
  },
  components: {
    NavBar,
    SiteFooter
  },
  props: ['error']
}
</script>
