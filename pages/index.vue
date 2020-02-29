<template>
  <div id="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <div class="d-flex flex-row-reverse">
          <h1 class="display-4 float-right">Government can work for the people,<br> by the people, in the digital age.</h1>
        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="row text-center intro-action">
        <div class="col-sm p-4">
          <img src="images/icon_join_us.png" class="mx-auto d-block img-fluid" alt="Get involved at hack night icon">
          <p class="lead">Volunteer with us and share your skills</p>
          <a role="button" class="btn btn-outline-primary my-2" href="get-involved.html">Get Involved</a>
        </div>
        <div class="col-sm p-4">
          <img src="images/icon_slack.png" class="mx-auto d-block img-fluid" alt="Slack logo/icon">
          <p class="lead">Stay in touch and connect with us on Slack</p>
          <a role="button" class="btn btn-outline-primary my-2" target="_blank" href="https://join.slack.com/t/codeforbaltimoreteam/shared_invite/enQtMzYxNzgzNDIyOTQ4LTBhOTdhY2JlZmJhZGQ2ZDZhM2E0MWRhYTYwM2EwZDk1MDU4MTFhNTM0YjVlNTE2YjYyYmY2Y2Q0MzE3MjQxMzI">Connect on Slack</a>
        </div> 
        <div class="col-sm p-4">
          <img src="images/icon_meetup.png" class="mx-auto d-block img-fluid" alt="Go to Meetup logo/icon">
          <p class="lead">Follow our latest events on Meetup</p>
          <a role="button" class="btn btn-outline-primary my-2" target="_blank" href="https://www.meetup.com/Code-for-Baltimore/">Join a Meetup</a>
        </div>
      </div>
    </div>
    <featured/>
  </div>
</template>

<script>
import Featured from '~/components/featured.vue'

export default {
  components: {
    Featured
  }
}
</script>

<style>
  .jumbotron {
    background: linear-gradient(90deg, rgba(23,0,255,0.18951330532212884) 100%, rgba(104,121,9,0.29315476190476186) 100%),url(/images/cfb-jumbo-header.jpg);
    background-size: cover;
    color: #fff;
    border-radius: 0;
    margin-bottom: 0;
  }
  .jumbotron .container {margin: 50px auto;}
  .jumbotron h1 {text-shadow: 2px 2px 6px #4c4c4c;}

  .intro-action img {max-width: 125px;}
  .intro-action .btn-outline-primary {color: #1e6488; border: 2px solid #1e6488; font-size: 17px;}
  .intro-action .btn-outline-primary:hover {background-color: #1e6488; color: white;}
</style>