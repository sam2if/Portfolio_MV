let section = [
  {
      name:"TONIC",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      featured_image: "./images/Portfolio 1.png",
      technologies: ["html", "css", "javascript"],
      link_to_live: "",
      link_to_source: ""
  },

  {
      name:"Multi-Post<br /> Stories",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      featured_image: "./images/Portfolio 2.png",
      technologies: ["html", "css", "javascript"],
      link_to_live: "",
      link_to_source: ""
  },

  {
      name:"TONIC",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      featured_image: "./images/Portfolio 3.png",
      technologies: ["html", "css", "javascript"],
      link_to_live: "",
      link_to_source: ""
  },

  {
      name:"Multi-Post<br /> Stories",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      featured_image: "./images/Portfolio 4.png",
      technologies: ["html", "css", "javascript"],
      link_to_live: "",
      link_to_source: "" 
  }

]

const body = document.querySelector('body');
const mysection = document.createElement('section');
body.appendBefore(mysection);
mysection.innerHTML = `<div class="grid-container">
<!-- portfolio - 1 -->
<div class="card">
<div class="row">
  <div class="col-1 work-1">
  <a href="#"
    ><img src="./images/Portfolio 1.png" class="mobile-only" alt="portfolio-1"
  /></a>

     <a href="#"
    ><img src="./images/dsk Portfolio1.png" class="desktop-only" alt="portfolio-1"
  /></a>
  
  </div>

  <div class="col-2">
  <a href="#"><h1>TONIC</h1></a>
  <div class="work-details flex2">
    <a href="#"><h3>CANOPY</h3></a>
    <div class="bullet-point"></div>
    <a href=""><h4>Back End Dev</h4></a>
    <div class="bullet-point"></div>
    <a href=""><h4>2015</h4></a>
  </div>
  <p>
    A daily selection of privately personalized reads; no accounts
    or sign-ups required.
  </p>
  <ul>
    <li class="work-tools">
      <button type="button" class="tools">html</button>
      <button type="button" class="tools">css</button>
      <button type="button" class="tools">javascript</button>
    </li>
  </ul>
  <div>
    <button type="button" class="primary-btn">See Project</button>
  </div>
</div>
</div>
</div>

<div class="card">
<div class="row reverse">
  <div class="col-1">
  <a href="#"
    ><img src="./images/Portfolio 2.png" class="mobile-only" alt="portfolio-1"
  /></a>

       <a href="#"
    ><img src="./images/dsk Portfolio2.png" class="desktop-only" alt="portfolio-1"
  /></a>

  </div>

  <div class="col-2">
  <a href="#"
    ><h1>Multi-Post<br /> Stories</h1></a>

    
  <div class="work-details flex2">
    <a href="#"><h3>CANOPY</h3></a>
    <div class="bullet-point"></div>
    <a href=""><h4>Back End Dev</h4></a>
    <div class="bullet-point"></div>
    <a href=""><h4>2015</h4></a>
  </div>
  <p>
    A daily selection of privately personalized reads; no accounts
    or sign-ups required.
  </p>
  <ul>
    <li class="work-tools">
      <button type="button" class="tools">html</button>
      <button type="button" class="tools">css</button>
      <button type="button" class="tools">javascript</button>
    </li>
  </ul>
  <div>
    <button type="button" class="primary-btn">See Project</button>
  </div>
</div>
</div>
  </div>

<div class="card selected-card">
<div class="row">
  <div class="col-1">
  <a href="#"
    ><img src="./images/Portfolio 3.png" class="mobile-only" alt="portfolio-1"
  /></a>

      <a href="#"
    ><img src="./images/dsk Portfolio3.png" class="desktop-only" alt="portfolio-1"
  /></a>


  </div>

  <div class="col-2" >
  <a href="#"><h1>TONIC</h1></a>
  <div class="work-details flex2">
    <a href="#"><h3>CANOPY</h3></a>
    <div class="bullet-point"></div>
    <a href=""><h4>Back End Dev</h4></a>
    <div class="bullet-point"></div>
    <a href=""><h4>2015</h4></a>
  </div>
  <p>
    A daily selection of privately personalized reads; no accounts
    or sign-ups required.
  </p>
  <ul>
    <li class="work-tools">
      <button type="button" class="tools">html</button>
      <button type="button" class="tools">css</button>
      <button type="button" class="tools">javascript</button>
    </li>
  </ul>
  <div>
    <button type="button"class='active'>See Project</button>
  </div>
</div>
</div>
</div>
<div class="card">
<div class="row reverse">
  <div class="col-1">
  <a href="#"
    ><img src="./images/Portfolio 4.png" class="mobile-only" alt="portfolio-1"
  /></a>

      <a href="#"
    ><img src="./images/dsk Portfolio.png" class="desktop-only" alt="portfolio-1"
  /></a>

  </div>

  <div class="col-2">
  <a href="#"
    ><h1>Multi-Post<br /> Stories</h1></a>

    
  <div class="work-details flex2">
    <a href="#"><h3>CANOPY</h3></a>
    <div class="bullet-point"></div>
    <a href=""><h4>Back End Dev</h4></a>
    <div class="bullet-point"></div>
    <a href=""><h4>2015</h4></a>
  </div>
  <p>
    A daily selection of privately personalized reads; no accounts
    or sign-ups required.
  </p>
  <ul>
    <li class="work-tools">
      <button type="button" class="tools">html</button>
      <button type="button" class="tools">css</button>
      <button type="button" class="tools">javascript</button>
    </li>
  </ul>
  <div>
    <button type="button" class="primary-btn">See Project</button>
  </div>
</div>
</div>
  </div>
</div>`