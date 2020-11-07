import React from "react";
import BioImg from "../images/IMG_3562.JPG";

function AboutMe() {
  return (
    <div id="background-img">
      <main className="container bg-light shadow-lg p-1 mb-2 rounded">

        <section className="row text-center">
          <div id="img" className="col-12">
            <img
              id="my-img"
              src={BioImg}
              className="rounded img-thumbnail shadow p-2 mb-2 bg-white rounded"
              alt="Matthew Kerr"
            />

            <p
              id="bio"
              className="m-2 text-center shadow-lg p-3 bg-white rounded"
            >
              <strong>
                I began my journey by pursuing a career in the health field as a
                Registered Dietitian. After some time I began to feel like I had
                more to contribute to the field and felt limited by my current
                knowledge and skill set. I have always had a strong passion for
                anything tech related. Technology plays an integral role in our
                health system. Moving forward, the role of tech integrated
                healthcare will only continue to flourish. This realization has
                pushed me to furthur my skill set and learn software
                development. With this knowledge I can combine my two passions
                and help craft the future of technology.
              </strong>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutMe;
