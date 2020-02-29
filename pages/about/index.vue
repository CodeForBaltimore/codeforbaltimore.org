<template>
    <div id="about">
        <div class='embed-container'>
            <iframe src='https://www.youtube.com/embed//mYzMl_HnEZU' allowfullscreen></iframe>
        </div>

        <div class="container">
            <div class="row py-4" id="about-us">
                <div class="col-sm py-2 my-auto">
                <h1 class="display-4">About Code for Baltimore</h1>
                <p>We are a community of volunteers who develop open-source projects as a Code for America Brigade by focusing on open government, open data, great design, and social good in Baltimore.</p>
                <p>While we always need more developers, Code for Baltimore welcomes designers, content creators, copywriters, storytellers, researchers, project managers, marketing specialists, and any other tech or government enthusiast!<p>

                <p>We have two types of meetups:</p>
                <ol>
                    <li>Hack Nights: project nights where our members work on select projects to benefit Baltimore communities.</li>
                    <li>Community Nights: networking events with members of the community and the group to discuss issues that could be solved with civic tech.</li>
                </ol>
                </div>
                <div class="col-sm p-4">
                <img src="images/cfb-about-header.jpg" class="img-fluid" alt="Code for Baltimore Welcome image">
                </div>
            </div>
            <team/>
        </div>
    </div>
</template>

<script>
import Team from '~/components/team.vue'
export default {
    components:  {
        Team
    }
}
</script>

<style>
    .embed-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
    }
    .embed-container iframe, .embed-container object, .embed-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 768px) {
        #about-us .p-4 { padding: 1rem!important; }
    }
</style>