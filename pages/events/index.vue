<template>
  <div id="events">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron jumbotron-events">
      <div class="container">
        <div class="d-block flex-row text-center py-1">
          <h1 class="display-4">Hack Nights, Community Nights and more</h1>
        </div>
      </div>
    </div>

    <div class="container" id="upcoming-events">
      <div class="row py-4">
        <div class="col-sm-12 py-2 my-auto">
          <h2 class="display-4">Hack Nights and What Happens</h2>
          <p>Project nights where our members work on select projects to benefit Baltimore communities.</p>
          <p>If you're new, no worries! You can easily jump in wherever your skills are needed.</p>
          <h2 class="display-4">Community Nights</h2>
          <p>Networking events with members of the community and the group to discuss issues that could be solved with civic tech.</p>
        </div>
      </div>

      <div v-if="events !== undefined">
        <div class="row py-2">
          <div class="col-sm-12 py-2 my-auto">
            <h3 class="display-4">Upcoming Events:</h3>
          </div>
        </div>
        <div v-for="(event, index) in events.rss.channel[0].item" :key="index">
          <div class="row py-2">
            <div class="col-sm-8 py-2 my-auto order-lg-first">
              <h4 v-if="findDate(event.description[0])" style="color:#1e6488">
                {{ event.description[0].substring(
                event.description[0].indexOf(findDate(event.description[0])),
                event.description[0].indexOf(findAmPm(event.description[0]))) }}{{ findAmPm(event.description[0]) }}
              </h4>
              <h3>{{ event.title[0] }}</h3>
              <p class="text-muted">
                <i class="fas fa-map-marker-alt"></i> Spark Baltimore
              </p>
              <div
                v-html="event.description[0].substring(0,event.description[0].indexOf('<p>--<br/>'))"
              ></div>

              <a v-bind:href="event.guid[0]._">
                <button type="button" class="btn btn-outline-primary">Attend</button>
              </a>
            </div>
            <div class="col-sm-12 py-2 my-auto">
              <hr />
            </div>
          </div>
        </div>

        <div class="row py-2">
          <div class="col-sm-12 py-2">
            <h3>
              Get notified of our next event:
              <a
                v-bind:href="events.rss.channel[0].link[0]"
                target="_blank"
              >Join our Meetup group</a>
            </h3>
          </div>
        </div>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
const parseString = require("xml2js").parseString;

export default {
  methods: {
    findDate: desc => {
      const days = [
        "Sunday, ",
        "Monday, ",
        "Tuesday, ",
        "Wednesday, ",
        "Thursday, ",
        "Friday, ",
        "Saturday, "
      ];

      let res = false;

      days.forEach(day => {
        if (desc.indexOf(day) > 0) res = day;
      });

      return res;
    },
    findAmPm: desc => {
      const amPms = [' AM',' PM',' am',' pm'];

      let res = false;

      amPms.forEach(amPm => {
        if (desc.indexOf(amPm) > 0) res = amPm;
      });

      return res;
    }
  },
  async asyncData({ $axios }) {
    let events;
    try {
      const meetup = await $axios.$get(`/Code-for-Baltimore/events/rss/`);

      const parse = parseString(meetup, (e, result) => {
        events = result;
      });
    } catch (e) {
      console.error(`Error: ${e}`);
    }

    return { events };
  }
};
</script>

<style>
@media screen and (max-width: 768px) {
  #upcoming-events .p-4 {
    padding: 0rem !important;
  }
}

#upcoming-events .btn-outline-primary {
  color: #1e6488;
  border: 2px solid #1e6488;
  font-size: 17px;
}
#upcoming-events .btn-outline-primary:hover {
  background-color: #1e6488;
  color: white;
}

.jumbotron-events {
  background: linear-gradient(
      90deg,
      rgba(0, 67, 255, 0.3575805322128851) 100%,
      rgba(9, 67, 121, 0.5144432773109244) 100%
    ),
    url(/images/events-header1.jpg);
  background-size: cover;
  color: #fff;
  border-radius: 0;
  margin-bottom: 0;
  background-position: 50% 60%;
}
</style>
