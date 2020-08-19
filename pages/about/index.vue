<template>
  <div id="about">
    <div class="embed-container">
      <iframe title="Learn Code for America Brigades" src="https://www.youtube.com/embed//mYzMl_HnEZU" allowfullscreen></iframe>
    </div>

    <div class="container">
      <div class="row py-4" id="about-us">
        <div class="col-sm py-2 my-auto">
          <h1 class="display-4">About Code for Baltimore</h1>
          <p>We are a community of volunteers who develop open-source projects as a Code for America Brigade by focusing on open government, open data, great design, and social good in Baltimore.</p>
          <p>While we always need more developers, Code for Baltimore welcomes designers, content creators, copywriters, storytellers, researchers, project managers, marketing specialists, and any other tech or government enthusiast!</p>
          <p></p>
          <p>We have two types of meetups:</p>
          <ol>
            <li>Hack Nights: project nights where our members work on select projects to benefit Baltimore communities.</li>
            <li>Community Nights: networking events with members of the community and the group to discuss issues that could be solved with civic tech.</li>
          </ol>
        </div>
        <div class="col-sm p-4">
          <img
            src="/images/cfb-about-header.jpg"
            class="img-fluid"
            alt="Code for Baltimore Welcome image"
          />
        </div>
      </div>

      <div class="row py-4" id="team">
        <div class="col-sm-12 py-3">
          <h3 class="display-4">Team Members</h3>
          <div class="row text-center py-3">
            <div v-for="(member, index) in team" :key="index" class="col-sm-4 py-4 mx-auto">
              <img
                v-if="member.fields.picture"
                v-bind:src="'https:' + member.fields.picture.fields.file.url"
                class="img-fluid mb-2"
                v-bind:alt="member.fields.name"
              />
              <img
                v-else
                src="images/default-headshot.jpg"
                class="img-fluid mb-2"
                v-bind:alt="member.fields.name"
              />

              <h4>{{ member.fields.name }}</h4>
              <p class="text-muted">{{ member.fields.title }}</p>
              <a v-bind:href="'mailto:' + member.fields.email">{{ member.fields.email }}</a>
              <ul v-if="member.fields.socialLinks" class="socials">
                <li v-for="(link, i) in member.fields.socialLinks" :key="i">
                  <a v-bind:href="link" target="_blank" rel="noreferrer" v-bind:id="`${member.fields.name.replace(/ /g,'').toLowerCase()}-social-${i}`">
                    <span class="sr-only">{{ member.fields.name }} social links.</span>
                    <fa v-if="link.includes('facebook')" :icon="faFacebook" v-bind:id="`${member.fields.name.replace(/ /g,'').toLowerCase()}-facebook`" />
                    <fa v-if="link.includes('github')" :icon="faGithub" v-bind:id="`${member.fields.name.replace(/ /g,'').toLowerCase()}-github`" />
                    <fa v-if="link.includes('linkedin')" :icon="faLinkedin" v-bind:id="`${member.fields.name.replace(/ /g,'').toLowerCase()}-linkedin`" />
                    <fa v-if="link.includes('twitter')" :icon="faTwitter" v-bind:id="`${member.fields.name.replace(/ /g,'').toLowerCase()}-twitter`" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p class="mt-2">
            We are always looking for more support! If you are interested in helping, please email us at
            <a
              href="mailto:hello@codeforbaltimore.org"
              target="_blank"
              rel="noreferrer"
            >hello@codeforbaltimore.org</a> or fill out our <a href="https://forms.gle/wZxQAfas1kpSmpvU8" target="_blank" rel="noreferrer">volunteer interest form</a>.
          </p>
          <p><i>For more information about volunteering please visit our <nuxt-link to="/get-involved" exact>Get Involved</nuxt-link> page!</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";
import { faFacebook, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default {
  head: {
    title: 'About Us | Code for Baltimore'
  },
  computed: {
    faFacebook() {
      return faFacebook;
    },
    faGithub() {
      return faGithub;
    },
    faLinkedin() {
      return faLinkedin;
    },
    faTwitter() {
      return faTwitter;
    }
  },
  async asyncData({ env }) {
    const team = await contentful.getEntries({
      content_type: "team",
      order: "fields.title",
      include: 5
    });

    return { team: team.items };
  }
};
</script>

<style>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 768px) {
  #about-us .p-4 {
    padding: 1rem !important;
  }
}
#team h4 {
  margin-bottom: 0;
}
#team img {
  border-radius: 50%;
}
#team .text-muted {
  margin-bottom: 5px;
}
#team .socials {
  padding: 0;
  margin: 0;
}
#team .socials li {
  display: inline;
}
</style>
