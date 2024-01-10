import React from "react";
import "./FAQ.css";

class FAQ extends React.Component {
  render() {
    return (
      <div id="FAQ">
        <br />
        <h1>Frequently Asked Questions</h1>
        <br />
        <br />
        <div className="faq-container">
          <div className="faq-btn">
            <button>1. What is MFLIX?</button>
            <p className="faq-drp-dwn">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              suscipit provident repellendus necessitatibus nihil? Ab magnam
              beatae nemo molestiae voluptas. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
          <div className="faq-btn">
            <button>2. What plans can I choose?</button>
            <p className="faq-drp-dwn">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              fuga, doloremque perspiciatis aut odio facere accusamus.
            </p>
          </div>
          <div className="faq-btn">
            <button>3. How many devices can I use this on?</button>
            <p className="faq-drp-dwn">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              libero repellendus sequi vero dicta at unde ipsum, qui rem ut.
            </p>
          </div>
          <div className="faq-btn">
            <button>4. When can I cancel my Subscription</button>
            <p className="faq-drp-dwn">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              delectus quam modi sunt magni dolor doloribus recusandae nesciunt
              excepturi nulla!
            </p>
          </div>
          <div className="faq-btn">
            <button>
              5. Are there any hidden charges for deleting my subscription?
            </button>
            <p className="faq-drp-dwn">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              optio, excepturi ea aut nobis illo dolorum aperiam asperiores modi
              magni.
            </p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default FAQ;
