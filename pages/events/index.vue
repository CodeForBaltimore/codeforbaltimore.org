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
            <h3 class="display-4">Hack Nights and What Happens</h3>
            <p>Project nights where our members work on select projects to benefit Baltimore communities.</p>
            <p>If you're new, no worries! You can easily jump in wherever your skills are needed. </p>
            <h3 class="display-4">Community Nights</h3>
            <p>Networking events with members of the community and the group to discuss issues that could be solved with civic tech.</p>
            </div>
        </div>

        <div class="row py-2">
            <div class="col-sm-12 py-2 my-auto">
            <h3 class="display-4">Upcoming Events</h3>
            </div>
        </div>

        <div class="row py-2">
            <div class="col-sm-4 py-2 my-auto">
            <img src="images/everyones-welcomed.jpg" class="img-fluid p-2" alt="Code for Baltimore Welcome image">
            </div>
            <div class="col-sm-8 py-2 my-auto order-lg-first">
            <h4 style="color:#1e6488">Wednesday, December 11th, 6:00PM</h4>
            <h3>December Hack Night</h3>
            <p class="text-muted"><i class="fas fa-map-marker-alt"></i> Spark Baltimore</p>
            <p>Join us for a Hack Night! Please RSVP so we can get enough food. We'll gather for food and work on the Sync The City project OR if you have another project you'd like to work on, come prepared to chat about it. If you're new, no worries! You can easily jump in wherever your skills are needed. Let us know if you have any questions! Follow us on Twitter & Instagram: @CodeForBmore</p>
            <button type="button" class="btn btn-outline-primary" href="https://join.slack.com/t/codeforbaltimoreteam/shared_invite/enQtMzYxNzgzNDIyOTQ4LTBhOTdhY2JlZmJhZGQ2ZDZhM2E0MWRhYTYwM2EwZDk1MDU4MTFhNTM0YjVlNTE2YjYyYmY2Y2Q0MzE3MjQxMzI">Attend</button>
            </div>
            <div class="col-sm-12 py-2 my-auto">
            <hr/>
            </div>
        </div>

        <div class="row py-2">
            <div class="col-sm-4 py-2 my-auto">
            <img src="images/community-night-1200x1100.jpg" class="img-fluid p-2" alt="Code for Baltimore Welcome image">
            </div>
            <div class="col-sm-8 py-2 my-auto order-lg-first">
            <h4 style="color:#1e6488">Wednesday, January 9th, 6:00PM</h4>
            <h3>January Community Night</h3>
            <p class="text-muted"><i class="fas fa-map-marker-alt"></i> Spark Baltimore</p>
            <p>Join us for a Hack Night! Please RSVP so we can get enough food. We'll gather for food and work on the Sync The City project OR if you have another project you'd like to work on, come prepared to chat about it. If you're new, no worries! You can easily jump in wherever your skills are needed. Let us know if you have any questions! Follow us on Twitter & Instagram: @CodeForBmore</p>
            <button type="button" class="btn btn-outline-primary" href="https://join.slack.com/t/codeforbaltimoreteam/shared_invite/enQtMzYxNzgzNDIyOTQ4LTBhOTdhY2JlZmJhZGQ2ZDZhM2E0MWRhYTYwM2EwZDk1MDU4MTFhNTM0YjVlNTE2YjYyYmY2Y2Q0MzE3MjQxMzI">Attend</button>
            </div>
            <div class="col-sm-12 py-2 my-auto">
            <hr/>
            </div>
        </div>

        <div class="row py-2">
            <div class="col-sm-12 py-2">
            <h3>Get notified of our next event: <a href="https://www.meetup.com/Code-for-Baltimore/" target="_blank">Join our Meetup group</a></h3>
            </div>
        </div>

        </div>
    </div>
</template>

<style>
    @media screen and (max-width: 768px) {
        #upcoming-events .p-4 { padding: 0rem!important; }
    }

    #upcoming-events .btn-outline-primary {color: #1e6488; border: 2px solid #1e6488; font-size: 17px;}
    #upcoming-events .btn-outline-primary:hover {background-color: #1e6488; color: white;}

    .jumbotron-events{
    background: linear-gradient(90deg, rgba(0,67,255,0.3575805322128851) 100%, rgba(9,67,121,0.5144432773109244) 100%),url(/images/events-header1.jpg);
    background-size: cover;
        color: #fff;
        border-radius: 0;
        margin-bottom: 0;
        background-position: 50% 60%;
    }
</style>