import React, { Component } from "react";

export default class HomePgArticles extends Component {
  render() {
    return (
      <div>
        {/* <!-- Dummy article section --> */}
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="section-title">
                <h2>Dummy Articles</h2>
                <p>
                  Warfarer empowers travelers to blah blah blah. You no longer
                  have to settle for lousy resources when it comes to fulfilling
                  your travel needs. Now travel war farer with WayFarer.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            {/* <!-- Dummy article --> */}
            <div class="col-md-4 col-sm-6">
              <i class="fa fa-star-o" />
              <h4>Article One</h4>
              <p>
                Swag bespoke yuccie salvia photo booth la croix live-edge.
                Activated charcoal cliche ipsum excepteur scenester
                chicharrones. Bushwick pariatur cliche you probably haven't
                heard of them schlitz.
              </p>
            </div>

            {/* <!-- Dummy article --> */}
            <div class="col-md-4 col-sm-6">
              <i class="fa fa-sliders" />
              <h4>Article Two</h4>
              <p>
                Plaid portland 90's pitchfork, single-origin coffee raw denim
                kinfolk flannel polaroid vaporware. Mollit tofu you probably
                haven't heard of them church-key duis.
              </p>
            </div>

            {/* <!-- Dummy article --> */}
            <div class="col-md-4 col-sm-6">
              <i class="fa fa-bolt" />
              <h4>Article Three</h4>
              <p>
                Ipsum +1 voluptate velit est taxidermy lorem pitchfork four
                dollar toast mollit anim blue bottle. Leggings vice iceland
                pitchfork offal selfies.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
