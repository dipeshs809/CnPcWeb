import React from "react";
export const Home = (props) => {
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "<em>Read more<em/>";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "<em>Read less<em/>";
      moreText.style.display = "inline";
    }
  }
  return (
    <div className="cont">
      <div id="home" className="container item">
        <div>
          <hr className="left" />
          <h3 className="homeHead">About Us</h3>
          <hr className="right" />
        </div>
        <p className="aboutUs">
          Among the elite technology institutes of the country, IIT Mandi
          embodies technology, research and development in the purest form.
          Supported by the nourishing, picturesque settings of the Shivalik
          mountain range, IIT Mandi boasts of a unique hands-on curriculum,
          creme de la creme of students who epitomise all round proficiency in
          technical and professional matters. <br />
          All the Placement associated activities are handled by the Career and
          Placement Cell (CnP) of the institute. The CnP consists of Faculty
          Members, Placement Officers and student volunteers working round the
          clock to provide the best possible services to the visiting
          organisations. <br />
          We look forward to a mutually beneficial Placement Session with your
          company.
        </p>
      </div>
      <h3 className="faculty-head">From the Faculty Advisor</h3>
      <div className="about container row item">
        {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <img className="faculty-advisor" src="http://faculty.iitmandi.ac.in/~tushar/img/tj1.jpg" alt="Dr. Tushar Jain" />
          </div> */}
        {/* <div className="col-lg-8 col-md-6 col-sm-12"> */}
        <div className="col-lg-3 col-md-3 col-sm-12">
        <img
            className="faculty-advisor"
            src="http://faculty.iitmandi.ac.in/~tushar/img/tj1.jpg"
            alt="Dr. Tushar Jain"
          />
          <h4 className="profile">Dr. Tushar Jain</h4>
          <h5 className="profile">Faculty Advisor</h5>
          <h5 className="profile">IIT Mandi</h5>
        </div>
        <p className="bhashan col-lg-9 col-md-9 col-sm-12 backG">
          During a short span of ten years of its existence, Indian Institute of
          Technology Mandi (IIT Mandi) has gained a reputation for its cutting
          edge research and innovative teaching programs. The institute prides
          itself on creating an environment that empowers young minds by
          developing intellect, versatility, broadening horizons of creativity,
          and honing inter-personal skills. With an aim of shaping the students
          into responsible engineers and scientists, the innovative
          undergraduate curriculum at IIT Mandi strives to expose students to
          strong fundamentals of engineering, basic sciences, and humanities,
          while simultaneously sensitizing them about human values and
          surroundings.
          <span id="dots">...</span>
          <span id="more">
            {" "}
            Similarly, the institute's focus on research at the fore-fronts of
            various areas of science and technology has resulted in significant
            contributions, and excellent and responsible researchers. The Career
            and Placement (CnP) cell invites organizations which have recruited
            our alumni and have witnessed them deliver well on high expectations
            placed on them, as well as those whom our students have not yet got
            an opportunity to serve. The CnP cell strives to facilitate the best
            possible match between the aspirations of recruiting organizations
            and the abilities of our students, and we welcome suggestions from
            your organization that will help us realize it. I can assure you of
            prodigious talent of our students and feel elated to invite your
            esteemed organizations to recruit our students. We look forward to
            enthusiastic participation of your organization in our forthcoming
            campus placement session and lasting and mutually satisfying
            relation with your organization.
          </span>
          <button
            className="btn btn-primary btn-sm"
            onClick={myFunction}
            id="myBtn"
          >
            <em><b>Read More</b></em>
          </button>
        </p>
        {/* <br /> */}
        {/* <br /> */}
        {/* </div> */}
        <br />
      </div>
    </div>
  );
};
