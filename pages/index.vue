<template>
  <div id="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <div class="d-flex flex-row-reverse">
          <h1 class="display-4 float-right">
            Government can work for the people,
            <br />by the people, in the digital age.
          </h1>
        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="row text-center intro-action">
        <div class="col-sm p-4">
          <img
            src="images/icon_join_us.png"
            class="mx-auto d-block img-fluid"
            alt="Get involved at hack night icon"
          />
          <p class="lead">Volunteer with us and share your skills</p>
          <nuxt-link
            role="button"
            class="btn btn-outline-primary my-2"
            to="/get-involved"
            exact
          >Get Involved</nuxt-link>
        </div>
        <div class="col-sm p-4">
          <img src="images/icon_slack.png" class="mx-auto d-block img-fluid" alt="Slack logo/icon" />
          <p class="lead">Stay in touch and connect with us on Slack</p>
          <a
            role="button"
            class="btn btn-outline-primary my-2"
            target="_blank"
            href="https://join.slack.com/t/codeforbaltimoreteam/shared_invite/enQtMzYxNzgzNDIyOTQ4LTBhOTdhY2JlZmJhZGQ2ZDZhM2E0MWRhYTYwM2EwZDk1MDU4MTFhNTM0YjVlNTE2YjYyYmY2Y2Q0MzE3MjQxMzI"
          >Connect on Slack</a>
        </div>
        <div class="col-sm p-4">
          <img
            src="images/icon_meetup.png"
            class="mx-auto d-block img-fluid"
            alt="Go to Meetup logo/icon"
          />
          <p class="lead">Follow our latest events on Meetup</p>
          <a
            role="button"
            class="btn btn-outline-primary my-2"
            target="_blank"
            href="https://www.meetup.com/Code-for-Baltimore/"
          >Join a Meetup</a>
        </div>
      </div>
    </div>

    <div id="featured">
      <h3 class="text-center display-4 py-2" style="font-size: 2.5rem;">Featured Projects</h3>
      <carousel :navigationEnabled=true :perPage=1 :autoplay=true :loop=true :autoplayTimeout=5000>
        <slide v-for="(project,index) in projects" :key="index">
          <div
            class="content text-center slide"
            v-bind:style="'background-image: url(https:' + project.fields.picture.fields.file.url + ')'"
          >
            <h3 class="display-4 carouselText">{{ project.fields.title }}</h3>
            <div class="carouselText" v-html="$md.render(project.fields.summary)"></div>
            <a
              v-bind:id="`${project.fields.title.replace(/ /g, '').toLowerCase()}-slider`"
              role="button"
              class="btn btn-outline-light my-2"
              target="_blank"
              v-bind:href="project.fields.githubLink"
            >Learn more</a>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import contentful from "~/plugins/contentful.js";

export default {
  components: {
    Carousel,
    Slide
  },
  async asyncData({ env }) {
    const projects = await contentful.getEntries({
      content_type: "project",
      order: "fields.title",
      include: 5
    });

    return { projects: projects.items };
  }
};
</script>

<style>
.jumbotron {
  background: linear-gradient(
      90deg,
      rgba(23, 0, 255, 0.18951330532212884) 100%,
      rgba(104, 121, 9, 0.29315476190476186) 100%
    ),
    url(/images/cfb-jumbo-header.jpg);
  background-size: cover;
  color: #fff;
  border-radius: 0;
  margin-bottom: 0;
}
.jumbotron .container {
  margin: 50px auto;
}
.jumbotron h1 {
  text-shadow: 2px 2px 6px #4c4c4c;
}

.intro-action img {
  max-width: 125px;
}
#featured .btn {
  color: black;
}
#featured .btn-outline-light {
  color: #f8f9fa;
  border: 2px solid #f8f9fa;
  font-size: 17px;
}
#featured .btn-outline-light:hover {
  background-color: #1e6488 !important;
  color: white !important;
}
.intro-action .btn-outline-primary {
  color: #1e6488;
  border: 2px solid #1e6488;
  font-size: 17px;
}
.intro-action .btn-outline-primary:hover {
  background-color: #1e6488;
  color: white;
}

.VueCarousel-slide {
  position: relative;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.carouselText {
  color: #fff;
  text-shadow: 2px 2px 6px #4c4c4c;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.slide {
  background-position: top center;
  padding-top: 10em;
  padding-bottom: 2em;
  background-size: cover;
}

a.slide-link:link,
a.slide-link:hover,
a.slide-link:visited,
a.slide-link:active {
  color: white !important;
  text-decoration: none;
  text-shadow: 2px 2px 4px #000;
}

a.slide-link a.btn:hover {
  color: black !important;
  text-shadow: none;
}
</style>
