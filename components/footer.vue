<template>
    <footer class="site-footer t-margin--top l-before-angled" style="margin-top: 0rem;">

      <svg xmlns="http://www.w3.org/2000/svg"  width="100px" height="100px" viewBox="0 0 100 100" version="1.1" class="corner_btm">
        <g>
          <path d="M 0,100 100,100 100,0 Z" style="fill:#399fd3"/>
          <path d="M 33,100 100,100 100,33 Z" style="fill:#71499d"/>
          <path d="M 66,100 100,100 100,66 Z" style="fill:#cf1f42"/>
        </g>
      </svg>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h2>Contact</h2>
            <ul>
              <li><a href="mailto:hello@codeforbaltimore.org">hello@codeforbaltimore.org</a></li>
              <li>Something wrong with the site?</li>
              <li><a role="button" class="btn btn-outline-dark" target="_blank" href="https://github.com/CodeForBaltimore/codeforbaltimore.github.io/issues">Submit an issue</a></li>
            </ul>
          </div>
          <div class="col-sm">
            <h2>Connect</h2>
            <ul>
              <li><a href="https://www.meetup.com/Code-for-Baltimore/" target="_blank">Meetup</a></li>
              <li><a href="https://join.slack.com/t/codeforbaltimoreteam/shared_invite/enQtMzYxNzgzNDIyOTQ4LTBhOTdhY2JlZmJhZGQ2ZDZhM2E0MWRhYTYwM2EwZDk1MDU4MTFhNTM0YjVlNTE2YjYyYmY2Y2Q0MzE3MjQxMzI" target="_blank">Slack</a></li>
              <li><a href="https://github.com/CodeForBaltimore" target="_blank">GitHub</a></li>
              <li><a href="https://twitter.com/@codeforbmore" target="_blank">Twitter</a></li>
            </ul>
          </div>
          <div class="col-sm">
            <h2>About</h2>
            <ul>
              <li><nuxt-link to="/projects" exact>Projects</nuxt-link></li>
              <li><nuxt-link to="/about#team" exact>Team</nuxt-link></li>
              <li><nuxt-link to="/code-of-conduct" exact>Code of Conduct</nuxt-link></li>
              <li><a target="_blank" href="https://www.codeforamerica.org/donate-to-a-brigade">Donate</a></li>
            </ul>
          </div>
        </div>
      </div>
  </footer>
</template>

<style>
  footer {color: white !important;}
  footer ul {list-style-type: none; padding-left: 0px;}
  footer a:hover {color: #cf1f42 !important;}
  footer .btn-outline-dark {border: 3px solid; font-size: 17px;}

  @media screen and (max-width: 768px) {
    footer .btn-outline-dark {border: 2px solid; font-size: 14.4px;}
    footer ul {padding-left: 0px;}
  }
  .corner_btm{
    position:absolute;
    bottom:0;
    right:0;
    width:400px;
    height:400px;
    z-index:-1
  }
</style>