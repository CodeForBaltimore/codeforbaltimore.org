<template>
  <div id="events">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron jumbotron-events">
      <div class="container">
        <div class="d-block flex-row text-center py-1">
          <h1 class="display-4">Hack Nights, Community Nights and more!</h1>
        </div>
      </div>
    </div>

    <div class="container" id="upcoming-events">
      <div v-if="events !== undefined">
        <div class="row py-2">
          <div class="col-sm-12 py-2 my-auto">
            <h3 class="display-4">Upcoming Events:</h3>
          </div>
          <vl-map
            :load-tiles-while-animating="true"
            :load-tiles-while-interacting="true"
            :controls="{zoom:false}"
            style="height: 400px"
          >
            <vl-view
              :zoom.sync="zoom"
              :center.sync="center"
              :rotation.sync="rotation"
              projection="EPSG:4326"
            ></vl-view>

            <vl-layer-tile class="osm">
              <vl-source-osm></vl-source-osm>
            </vl-layer-tile>

            <vl-feature class="point">
              <vl-geom-point :coordinates="[-76.6072, 39.28954]"></vl-geom-point>
              <vl-style-box>
                <vl-style-icon src="/images/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
              </vl-style-box>
            </vl-feature>

            <vl-geoloc>
              <template slot-scope="geoloc">
                <vl-feature v-if="geoloc.position" id="position-feature">
                  <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
                  <vl-style-box>
                    <vl-style-icon src="/images/flag.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
                  </vl-style-box>
                </vl-feature>
              </template>
            </vl-geoloc>
          </vl-map>
        </div>
        <div v-for="(event, index) in events" :key="index">
          <div class="row py-2">
            <div class="col-sm-8 py-2 my-auto order-lg-first">
              <h4
                v-if="event.fields.date"
                style="color:#1e6488"
              >{{ $moment(event.fields.date).format('MMMM Do YYYY, h:mm a') }}</h4>
              <h3>{{ event.fields.title }}</h3>
              <p class="text-muted">
                <i class="fas fa-map-marker-alt"></i>
                {{ event.fields.venueName }}
              </p>
              <div v-html="$md.render(event.fields.description)"></div>

              <a v-bind:href="event.fields.meetupUrl">
                <button type="button" class="btn btn-outline-primary">Attend</button>
              </a>
            </div>
            <div class="col-sm-4 py-2 my-auto">
              <img v-bind:src="'https:' + event.fields.venueImage.fields.file.url" />
            </div>
          </div>

          <div class="col-sm-12 py-2 my-auto">
            <hr />
          </div>
        </div>
      </div>
      <div class="row py-4">
        <div class="col-sm-12 py-2 my-auto">
          <h2 class="display-4">Hack Nights and What Happens</h2>
          <p>Project nights where our members work on select projects to benefit Baltimore communities.</p>
          <p>If you're new, no worries! You can easily jump in wherever your skills are needed.</p>
          <h2 class="display-4">Community Nights</h2>
          <p>Networking events with members of the community and the group to discuss issues that could be solved with civic tech.</p>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-sm-12 py-2">
          <h3>
            Get notified of our next event:
            <a
              href="http://www.meetup.com/Code-for-Baltimore/events/"
              target="_blank"
            >Join our Meetup group</a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";
import VueLayers from "vuelayers";
import "vuelayers/lib/style.css"; // needs css-loader
import moment from "moment";

const locationPins = async events => {
  let locations = [];

  for (var event of events) {
    if (locations[event.fields.venueName] !== undefined) {
      locations[event.fields.venueName].dates.push(event.fields.date);
    } else {
      locations[event.fields.venueName] = {
        geolocation: [event.fields.location.lon, event.fields.location.lat],
        dates: [event.fields.date]
      };
    }
  }

  return locations;
};

export default {
  components: {
    VueLayers
  },
  async asyncData({ env }) {
    const events = await contentful.getEntries({
      content_type: "event",
      order: "fields.title",
      include: 5
    });
    // Making the location OL/OSM compatable for ease of use...
    const locations = await locationPins(events.items);
    return {
      events: events.items,
      locations: locations,
      zoom: 13,
      rotation: 0,
      center: [-76.6072, 39.28954]
    };
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
