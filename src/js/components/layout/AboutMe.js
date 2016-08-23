import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <section id="about" class="bg-light-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">About Me</h2>
              <h3 class="section-subheading text-muted">This demo was developed by:</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="team-member">
                <img src="img/about/profile.jpg" class="img-responsive img-circle" alt=""/>
                  <h4>Santiago Villa Fernandez</h4>
                  <p class="text-muted">Software Engineer</p>
                  <ul class="list-inline social-buttons">
                    <li><a href="http://github.com/svillafe" target="_blank"><i class="fa fa-github"></i></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/svillafe" target="_blank"><i class="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}