<template>
  <div id="events">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron jumbotron-projects">
      <div class="container">
        <div class="d-block flex-row text-center py-1">
          <h1 class="display-4">Projects</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row py-4">
        <div class="col-sm-12 py-2 my-auto">
          <h3 class="display-4">How they work</h3>
          <p>Project selection is typically a “bottom-up” process: volunteers identify and initiate projects that match their interests and skills – in line with addressing local issues or ideas for social good. Volunteers are frequently looking for project ideas from local government. Core team keeps a pulse on topics of interest to the city partners. Project success depends on the skills, commitment and organization of volunteer team. Core team may champion a few promising project ideas, based on government partnership or other city interests.</p>
          <p>City Partners interested in partnering with Code for Baltimore (CfB) can participate in the following ways: Come to a community night to pitch the idea to other volunteers. Ideas are always welcome — no advance notice needed. Discuss the idea with the Delivery Lead or Brigade Captains, who will share idea with the volunteer network to see if it’s a good match and if there are skills to complete the project.</p>
          <p>
            Have a project idea?
            <a
              href="mailto:hello@codeforbaltimore.org"
            >You're always welcome to email us</a>.
          </p>
          <h3 class="display-4">Getting Involved</h3>
          <p>For projects on which the two organizations are officially partnering, we will make sure to set expectations about the roles and responsibilities on both sides. Before the project begins, the following items should be clear:</p>
          <ul>
            <li>Which City office/department is the project sponsor?</li>
            <li>What is the goal of this tool, and who will be using it?</li>
            <li>What is the anticipated timeline for this project?</li>
            <li>Do we have a team of CfB volunteers with the skills and availability to make this project happen?</li>
            <li>Who will manage the project? Who are the main points of contact at CfB and the City of Baltimore?</li>
            <li>Who will support and maintain this project after it is completed?</li>
            <li>Once a project is underway, communication is handled by the project leads on both sides.</li>
            <li>The Community Organizer will check in on a monthly basis for updates.</li>
          </ul>
        </div>
      </div>

      <div class="row py-2" id="projects">
        <div class="col-sm-12">
          <h2 class="display-4">Active projects</h2>
        </div>

        <div v-for="(project, index) in projects.items" :key="index">
          <div class="col-lg-5 my-auto img-hov">
            <a v-bind:href="project.fields.githubLink" target="_blank">
              <img
                v-bind:src="'https:' + project.fields.picture.fields.file.url"
                class="img-fluid"
                v-bind:alt="project.fields.title"
              />
            </a>
          </div>
          <div class="col-lg-7 py-2 my-auto">
            <h3 class="display-4">
              <a v-bind:href="project.fields.githubLink" target="_blank">{{ project.fields.title }}</a>
            </h3>
            <div v-html="$md.render(project.fields.description)"></div>
            <div v-if="project.fields.skillsNeeded" class="my-3 skills-list">
              <h5>Skills Needed</h5>
              <ul v-for="(skill,i) in project.fields.skillsNeeded" :key="i">
                <li>{{ skill.fields.skill }}</li>
              </ul>
            </div>
            <div v-if="project.fields.civicInterest" class="my-3 civic-list">
              <h5>Civic Interest</h5>
              <ul v-for="(interest,i) in project.fields.civicInterest" :key="i">
                <li>{{ interest.fields.interest }}</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 py-2 my-auto">
            <hr />
          </div>
        </div>

        <div class="col-sm-12 py-4 my-auto text-center">
          <button
            type="button"
            class="btn btn-outline-primary"
            onclick="window.location.href='https://github.com/CodeforBaltimore'"
          >See more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
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