AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Media Team Member",
    cardImage: "assets/images/experience-page/seds.jpg",
    place: "SEDS CUSAT",
    time: "(2022 - present)",
    desp: "<li>Worked together with a group of space enthusiasts who get together to discuss ,explore and have fun with the marvels of the cosmos.</li> <li>Worked in creative media works via posters ,videos through various media applications to influence the space aspirants into the community. </li>"
  },
  {
    title: "Media Team Member",
    cardImage: "assets/images/experience-page/horizon.jpg",
    place: "TEAM HORIZON CUSAT",
    time: "(2022 - present)",
    desp: "<li>Working in the renowned mars rover team, CUSAT as a media team member.</li><li>This rover team is with a primary goal to participate in university rover challenge and it ranked 32 worldwide in European rover challenge.</li>"
  },
  {
    title: "NCC Cadet",
    cardImage: "assets/images/experience-page/ncc.png",
    place: "21 KERALA BN NCC (KERALA AND LAKSHADWEEP DIRECTORATE)",
    time: "(2017-2021)",
    desp: "<li>Proud to be the part of National Cadet Corps under 21 (K) BN NCC Ernakulam group (Kerala & Lakshadweep Directorate)</li><li>Training completed Successfully and attended two National camps, National Integration Camp(NIC) and All India Trekking Expedition (Tirupati 2019)</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "UI/UX",
    subtitle: "",
    image: "assets/images/experience-page/ui-ux-design.jpg",
    desp: "Successfully completed 5 days UI/UX boot camp using figma conducted by Tinkerhub Cucek",
  },
  {
    title: "Mobile App Development",
    subtitle: "",
    image: "assets/images/experience-page/app.png",
    desp: "Workshop on mobile app development conducted by Talrop on 24/10/2021,sunday",
  },
  {
    title: "Machine Learning",
    subtitle: "",
    image: "assets/images/experience-page/machine.jpeg",
    desp: "Workshop on Machine Learning conducted by Cochin University Union from 20 to 22 march 2021",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
