<template>
    <nav class="navbar navbar-expand-lg navbar-light">
      <nuxt-link class="navbar-brand" to="/" exact>
        <img src="/images/cfb_logo_full.png" width="100" height="56" class="d-inline-block align-top" alt="Code For Baltimore">
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav align-items-center">
          <nuxt-link class='nav-item nav-link' to="/about" exact>About Us</nuxt-link>
          <nuxt-link class='nav-item nav-link' to="/get-involved" exact>Get Involved</nuxt-link>
          <nuxt-link class='nav-item nav-link' to="/events" exact>Events</nuxt-link>
          <nuxt-link class='nav-item nav-link' to="/projects" exact>Projects</nuxt-link>
          <a role="button" class="btn btn-outline-primary" target="_blank" href="https://www.codeforamerica.org/donate-to-a-brigade">Donate</a>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    props: ['page'] 
}
</script>

<style>
  .navbar-expand-lg .navbar-nav .nav-link {color: #1e6488;}
  .navbar-expand-lg .navbar-nav .nav-link:hover {color: #cf1f42 !important; text-decoration: underline;}

  .navbar-nav .btn-outline-primary {
      color: #563d7c;
      border: 2px solid #563d7c;
      font-weight: 700;
      font-size: 18px;
  }
  .navbar-nav .btn-outline-primary:hover {
    background-color: #563d7c;
    color: white;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 1rem;
      padding-left: 1rem;
  }

  @media screen and (max-width: 768px) {
    .navbar-nav .btn-outline-primary {
        border: 1px solid #563d7c;
        font-size: 15px;
    }
    .navbar-expand-lg .navbar-nav .nav-link {font-size: 16px; padding: .70rem 1rem;}
  }
</style>