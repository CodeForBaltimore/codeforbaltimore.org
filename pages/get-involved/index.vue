<template>
    <div id="get-involved">
        <!-- Main jumbotron for a primary marketing message or call to action -->
        <div class="jumbotron jumbotron-involved">
        <div class="container">
            <div class="d-block flex-row text-center py-1">
            <h1 class="display-4">Get Involved</h1>
            </div>
        </div>
        </div>

        <div class="container">

        <div class="row py-4">
            <div class="col-sm py-2 my-auto">
            <h2 class="display-4">Join us as a volunteer</h2>
            <p>There are volunteer opportunities for a diverse range of skillsets, varying skill levels, and time commitments.  You can participate in a Hack Night, attend a Community Night, contribute to an ongoing project, or participate in all of those! </p>
            <p>Start by filling out the volunteer interest form below, so we can learn more about your skills, interests, and availability.  A core team member will follow up with more information about how to start volunteering, but in the mean time you can join our Slack community, which is how we communicate and collaborate about ongoing projects and other community happenings.  And of course, join our Meetup group, so that you can get updates about our latest events.  (Also, when you RSVP for events, it helps us plan accordingly!).  </p>
            </div>
        </div>

        <div class="row text-center intro-action py-4">
            <div class="col-sm p-4">
            <img src="images/icon_join_us.png" class="mx-auto d-block img-fluid" alt="Get involved at hack night icon">
            <p class="lead">Share your project ideas or join our Hack nights</p>
            <a role="button" class="btn btn-outline-primary my-2" target="_blank" href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSc0VE6Qmu7qiMFute7K40Pr6xQsRNSLoASlYeIGXPWUF4Mrbg/viewform?usp=sf_link">Volunteer</a>
            </div>
            <div class="col-sm p-4">
            <img src="images/icon_meetup.png" class="mx-auto d-block img-fluid" alt="Go to Meetup logo/icon">
            <p class="lead">Follow our latest events on Meetup</p>
            <a role="button" class="btn btn-outline-primary my-2" target="_blank" href="https://www.meetup.com/Code-for-Baltimore/">Join a Meetup</a>
            </div>
            <div class="col-sm p-4">
            <img src="images/icon-idea.png" class="mx-auto d-block img-fluid" alt="Slack logo/icon">
            <p class="lead">Stay in touch and connect with us on Slack</p>
            <a role="button" class="btn btn-outline-primary my-2" href="https://join.slack.com/t/codeforbaltimoreteam/shared_invite/enQtMzYxNzgzNDIyOTQ4LTBhOTdhY2JlZmJhZGQ2ZDZhM2E0MWRhYTYwM2EwZDk1MDU4MTFhNTM0YjVlNTE2YjYyYmY2Y2Q0MzE3MjQxMzI">Submit an idea</a>
            </div>
        </div>

        <div class="row py-4" id="welcome">
            <div class="col-sm py-2 my-auto">
            <h2 class="display-4">Everyone's Welcome</h2>
            <p>While we always need more developers, Code for Baltimore welcomes designers, content creators, copywriters, storytellers, researchers, project managers, marketing specialists, and any other tech or government enthusiast!<p>
            <p>Towards creating a safe and respectful environment for all participants, we ask all our community members to abide by our Code of Conduct. <a href="code-for-conduct.html">Code of Conduct</a></p>
            </div>
            <div class="col-sm p-4">
            <img src="images/everyones-welcomed.jpg" class="img-fluid" alt="Code for Baltimore Welcome image">
            </div>
        </div>

        <div class="row intro-action">
            <div class="col-sm-12 pt-3 my-auto">
            <h2 class="display-4">Volunteer Sign-up form</h2>
            <p>Please fill out this form if you are new to the community. We want to learn more about you so that we understand your skillset and can find the best project fit for you. Make sure to check out the Meetup group for all of our upcoming events and join our Slack.</p>
            </div>
            <div class="col-sm-12 pb-4 my-auto">
            <a role="button" class="btn btn-outline-primary my-2 mx-auto" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc0VE6Qmu7qiMFute7K40Pr6xQsRNSLoASlYeIGXPWUF4Mrbg/viewform?usp=sf_link">Volunteer Form</a>
            </div>
        </div>

        </div>
    </div>
</template>

<style>
    .jumbotron-involved {
    background: linear-gradient(90deg, rgba(0,243,255,0.15870098039215685) 100%, rgba(9,67,121,0.5144432773109244) 100%),url(/images/cfb-involved-header.jpg);
    background-size: cover;
        color: #fff;
        border-radius: 0;
        margin-bottom: 0;
        background-position: 50% 30%;
    }
    .jumbotron-involved .container {margin: 50px auto;}

    @media screen and (max-width: 768px) {
        #welcome .p-4 { padding: 1rem!important; }
    }
</style>