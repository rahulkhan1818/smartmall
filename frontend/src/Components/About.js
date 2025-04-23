import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Componentscss/About.css";

function About() {
  const location=useLocation()
  return (
    <>
    {
      location.pathname=='/About'&&
      <div className="about-page-container">
        <div className="about-header">Welcome to Smart Mall</div>

        <main className="about-main">
          <section className="about-intro">
            <h1>About Smart Mall</h1>
            <p>
              {" "}
              Smart Mall is managed by a group of enthusiastic students who aim
              to provide an excellent shopping experience through this platform.
            </p>
          </section>

          <section className="about-owners">
            <h2>Who We Are</h2>
            <p>This website is owned and managed by:</p>
            <ul className="owner-list">
              <li>Parth</li>
              <li>Rahul Khan</li>
              <li>Arman Khan</li>
              <li>Shiva</li>
            </ul>

            <p>
              All owners are third-year B.Tech CSE students at{" "}
              <strong>K.R. Mangalam University</strong>.
            </p>
          </section>
          <section className="about-owners">
            <h2>Who We Are</h2>
            <p>This website is owned and managed by:</p>
            <div className="owner-grid">
              <div className="owner-card">
                <img src="https://cdn.pixabay.com/photo/2021/11/21/20/10/bach-6815187_1280.jpg" alt="Parth" className="owner-image" />
                <h3>Parth</h3>
                <p>B.Tech CSE, K.R. Mangalam University</p>
              </div>
              <div className="owner-card">
                <img
                  src="https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg"
                  alt="Rahul Khan"
                  className="owner-image"
                />
                <h3>Rahul Khan</h3>
                <p>B.Tech CSE, K.R. Mangalam University</p>
              </div>
              <div className="owner-card">
                <img
                  src="https://cdn.pixabay.com/photo/2023/12/07/10/52/snow-8435305_1280.jpg"
                  alt="Arman Khan"
                  className="owner-image"
                />
                <h3>Arman Khan</h3>
                <p>B.Tech CSE, K.R. Mangalam University</p>
              </div>
              <div className="owner-card">
                <img src="https://cdn.pixabay.com/photo/2020/07/15/15/14/meadow-5407968_1280.jpg" alt="Shiva" className="owner-image" />
                <h3>Shiva</h3>
                <p>B.Tech CSE, K.R. Mangalam University</p>
              </div>
            </div>
          </section>
          <section className="about-benefits">
            <h2>Why Use This Website?</h2>
            <p>
              Shop Smart Mall's website provides you with all the essential
              information about the mall, including store details, events, and
              offers. It helps you:<br></br><Link to="/ShowMall"><button className="btn">Click Here</button>
                        </Link>
            </p>
            <ul className="benefits-list">
              <li>Navigate the mall effortlessly.</li>
              <li>Stay updated on discounts and events.</li>
              <li>Plan your shopping trips better.</li>
            </ul>
          </section>

          <section className="about-address">
            <h2>Full Address</h2>
            <p className="mall-address">
              Shop Smart Mall, [Gurugran bus stand], Gurugama, Haryana, 122102
            </p>
          </section>
        </main> 
      </div>
    }
      
    </>
  );
}

export default About;
