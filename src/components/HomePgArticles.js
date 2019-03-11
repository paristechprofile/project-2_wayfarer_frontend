import React, { Component } from "react";
import img1 from "./images/Bus-Beach.png"
import img2 from "./images/Canal-City.png"
import img3 from "./images/Festival-Fun.png"

export default class HomePgArticles extends Component {
  render() {
    return (
      <div>
        {/* <!-- Dummy article section --> */}
        <div className="container">
          <div className="col">
            <div className="row section s12">
              <h2>Wayfarer Is...</h2>
            </div>
          </div>
          <div className='row'>
          <div className="row ">
            <img className='col' src={img1} alt='some value' />
              <h4>Adventures Of A Yellow-ish Submarine</h4>
              <p>
                Swag bespoke yuccie salvia photo booth la croix live-edge.
                Activated charcoal cliche ipsum excepteur scenester
                chicharrones. Bushwick pariatur cliche you probably haven't
                heard of them schlitz.
              </p>
            </div>
            <div className="row">
            <img className='col' src={img2} alt='some value' />
              <h4>30 Places To Visit Before 30 (hint: not Italy)</h4>
              <p>
                Plaid portland 90's pitchfork, single-origin coffee raw denim
                kinfolk flannel polaroid vaporware. Mollit tofu you probably
                haven't heard of them church-key duis.
              </p>
            </div>
            <div className="row">
            <img className='col' src={img3} alt='some value' />
              <h4>You're Not Too Old For A Festival. Here's Why</h4>
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
