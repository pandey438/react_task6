import Pic from "./images/img.jpg";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-7 d-flex align-items-center justify-content-center">
          <div>
            <div className="contain">
              <p>
                Hello,
                <br /> I'm from Kanpur and I'm passionate about Web development
                and Database Design.I make it a priority to stay up-to-date with
                the latest technologies and trends in these fields to
                continuously improve my skills.
                <br /> In my spare time, I enjoy hand lettering, and I'm an
                active member of the Voice-IT Club at VIT Chennai, radio club of
                vit chennai. <br />
                I'm looking forward to connecting with like-minded individuals.
                Let's collaborate, learn from each other, and create great
                things together!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <img id="pictureself" src={Pic} alt="Aryan" />
        </div>
      </div>
    </div>
  );
}
export default About;
