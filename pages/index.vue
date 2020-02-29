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
          <a
            role="button"
            class="btn btn-outline-primary my-2"
            href="get-involved.html"
          >Get Involved</a>
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
      <carousel :navigationEnabled="true">
        <div v-for="(project,index) in projects.items" :key="index">
        <slide>
          <a v-bind:href="project.fields.githubLink" target="_blank"><img v-bind:src="'https:' + project.fields.picture.fields.file.url" class="d-block w-100 img-fluid" v-bind:alt="project.fields.title" /></a>
          <div class="content text-center">
            <h3 class="display-4">{{ project.fields.title }}</h3>
            <div v-html="$md.render(project.fields.summary)"></div>
            <a
              role="button"
              class="btn btn-outline-light my-2"
              target="_blank"
              v-bind:href="project.fields.githubLink"
            >Learn more</a>
          </div>
        </slide>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  components: {
    Carousel,
    Slide
  },
  async asyncData({ env }) {
    const projects = await client.getEntries({
      content_type: "project",
      order: "fields.title",
      include: 5
    });

    return { projects };
  }
};
</script>

<style>
.VueCarousel-slide {
  position: relative;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
