<template>
  <div>
    <nav-bar />
    <nuxt />
    <site-footer />

    <vue-cookie-accept-decline
      :ref="'myPanel1'"
      :elementId="'myPanel1'"
      :debug="false"
      :position="'bottom-left'"
      :type="'floating'"
      :disableDecline="false"
      :transitionName="'slideFromBottom'"
      @status="cookieStatus"
      @clickedAccept="cookieClickedAccept"
      @clickedDecline="cookieClickedDecline"
      @removedCookie="cookieRemovedCookie"
    >
      <!-- Optional -->
      <div slot="message">
        We use cookies to ensure you get the best experience on our website.
        <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
      </div>

      <!-- Optional -->
      <div slot="declineContent">OPT OUT</div>

      <!-- Optional -->
      <div slot="acceptContent">GOT IT!</div>
    </vue-cookie-accept-decline>
    <script data-goatcounter="https://codeforbaltimore_org.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
  </div>
</template>

<script>
import NavBar from "../components/nav";
import SiteFooter from "../components/footer";
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'

export default {
  head: {
    htmlAttrs: {
      lang: "en"
    },
    link: [
      {
        rel: "stylesheet dns-prefetch preconnect",
        href: "https://fonts.googleapis.com/css?family=Poppins"
      }
    ]
  },
  components: {
    NavBar,
    SiteFooter,
    VueCookieAcceptDecline
  },
  methods: {
    cookieStatus(status) {
      this.status = status;
    },
    cookieClickedAccept() {
      this.status = "accept";
    },
    cookieClickedDecline() {
      this.status = "decline";
    },
    cookieRemovedCookie() {
      this.status = null;
      this.$refs.myPanel1.init();
    },

    removeCookie() {
      this.$refs.myPanel1.removeCookie();
    }
  }
};
</script>
