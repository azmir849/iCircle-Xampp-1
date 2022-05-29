
var base_url = "https://icircles.app/";
let username = "";
aboutRender = (about) => {
  username = about.username;
  document.getElementById(
    "user_name"
  ).innerHTML = `${about.firstname} <span id="last_name">${about.lastname}!</span>`;
  document.getElementById("about_me").innerHTML = about.about_me;
  document.getElementById(
    "aboutUserName"
  ).innerHTML = `${about.firstname} ${about.lastname}`;


  //About description
  let htmlText = "";
  const strShort = about.about_me;
  const strlong = about.about_me;
  // 👇️ First 25 words
  const shortDescription = strShort.split(" ").slice(0, 30).join(" ");
  const longDescription = strlong.split(" ").slice(31, 100).join(" ");

  if(shortDescription.length<50){
    document.getElementById("myBtn").style.display = "none";
  }
  if(strShort.length>50){
    document.getElementById("aboutDescription").style.marginTop = "-50px";
  }

  htmlText = `
  <div><span id="shortTitle">${shortDescription}</span><span id="dots"> ... </span></div>
  <div id="more">${longDescription}</div>
  `;
  document.getElementById("aboutDescription").innerHTML = htmlText;

  let socialIcon = ``;
  if (about.facebook) {
    socialIcon += `<div class="icon">
      <div class="toltip facebook">Facebook</div>
      <span><a href="${about.facebook}" style="color: #376bd3;"><i class="fa-brands fa-facebook"></i></a></span>
  </div>`;
  }
  if (about.twitter) {
    socialIcon += `<div class="icon">
      <div class="toltip twitter">Twitter</div>
      <span><a href="${about.twitter}" style="color: #46c1F6;"><i class="fa-brands fa-twitter"></i></a></span>
     </div>`;
  }
  if (about.instagram) {
    socialIcon += `<div class="icon">
      <div class="toltip instagram">Instagram</div>
      <span><a href="${about.instagram}" style="color: #e1306e;"><i class="fa-brands fa-instagram"></i></a></span>
     </div>`;
  }
  if (about.linkedin) {
    socialIcon += `<div class="icon">
        <div class="toltip linkedin">Linkedin</div>
        <span><a href="${about.linkedin}" style="color: #0e76a8;"><i class="fa-brands fa-linkedin-in"></i></a></span>
       </div>`;
  }
  if (about.github) {
    socialIcon += `<div class="icon">
        <div class="toltip github">Github</div>
        <span><a href="${about.github}" style="color: #333;"><i class="fa-brands fa-github"></i></a></span>
       </div>`;
  }
  document.getElementById("icon_wrapper").innerHTML = socialIcon;

  let details = ``;
  if (about.dob) {
    details += `<li class="w-50"><span><i class="fa-solid fa-calendar-days"></i></span> ${about.dob}</li>`;
  }
  if (about.mobile) {
    details += `<li class="w-50"><span><i class="fa-brands fa-mobile"></i></span> ${about.mobile}</li>`;
  }
  if (about.email) {
    details += `<li class="w-50"><span><i class="fa-solid fa-envelope-open-text"></i></span> ${about.email}</li>`;
  }

  if (about.web) {
    details += `<li class="w-50"><span><i class="fa-solid fa-link"></i></span> ${about.web_site}</li>`;
  }

  if (about.country) {
    details += `<li class="w-50"><span><i class="fa-solid fa-location-dot"></i></span> ${about.country}</li>`;
  }
  document.getElementById("user_details").innerHTML = details;

  document.getElementById("thumb").src = base_url + about.thumb;
  document.getElementById("contactImage").src = base_url + about.thumb;
  document.getElementById("skillImageThumb").src = base_url + about.thumb;
  document.getElementById("ResumeUrl").href = base_url + about.resume;
  document.getElementById("footer").innerHTML = `
    <span>© 2022, ${about.firstname} ${about.lastname}. All Rights Reserved.</span>
    `;

    document.getElementById("headerLeft").innerHTML = `<h2 class="bold">${about.firstname} <span>${about.lastname}</span></h2>`;
    document.getElementById("userNameTitle").innerHTML = `${about.firstname} ${about.lastname} - Portfolio`;
    document.getElementById("rightCanvasToggle").innerHTML = `<h2>${about.firstname} <span>${about.lastname}</span></h2>`;
    document.getElementById("headVideoThumb").innerHTML = `<img  src="${base_url + about.image}" alt="">`;
};


// function to set user educations information
educationsRender = (educations) => {
  var length = educations.length;
  if(length===0){
    document.getElementById("educations").style.display= "none";
    document.getElementById("eduATitleDiv").style.display= "none";
  }


  let htmlText = "";
  educations.map((eduData) => {
    let end_date = eduData.to_date.split("-");
    if (end_date[0] == "0000") {
      htmlText += `<div class="resume_container">
        <h4>${eduData.degree_name}</h4>
        <h5>${eduData.institution_name} / ${eduData.from_date} -<span class="fw-bold" style=" color: #d634b3"> Current</h5>
        <p>${eduData.details}</p>
      </div>`;
    } else {
      htmlText += `<div class="resume_container">
        <h4>${eduData.degree_name}</h4>
        <h5>${eduData.institution_name} / ${eduData.from_date} - ${eduData.to_date}</h5>
        <p>${eduData.details}</p>
      </div>`;
    }
  });
  document.getElementById("educations").innerHTML = htmlText;
};

//function to set work experiences
workExperienceRender = (experiences) => {
  var length = educations.length;
  if(length===0){
    document.getElementById("experiences").style.display= "none";
    document.getElementById("expTitleDiv").style.display= "none";
  }


  let htmlText = "";
  experiences.map((expData) => {
    let end_date = expData.to_date.split("-");
    if (end_date[0] == "0000") {
      htmlText += `<div class="resume_container">
      <h4>${expData.job_title}</h4>
      <h5>${expData.company_name} / ${expData.from_date} - <span class="fw-bold" style=" color: #d634b3">Current</span></h5>
      <p>${expData.details} </p>
  </div>`;
    } else {
      htmlText += ` <div class="resume_container">
      <h4>${expData.job_title}</h4>
      <h5>${expData.company_name} / ${expData.from_date} - ${expData.to_date}</h5>
      <p>${expData.details} </p>
  </div>`;
    }
  });
  document.getElementById("experiences").innerHTML = htmlText;
};

//function to set interests
interestRender = (interest) => {
  var length = interest.length;
  if(length===0){
    document.getElementById("interestSection").style.display= "none";
  }

  let htmlText = "";
  interest.map((interestData) => {
    htmlText += `
    <div class="interest_item">
    <div class="img_title">
        <span>${interestData.title}</span>
    </div>
  </div>
    `;
  });
  document.getElementById("interests").innerHTML = htmlText;
};

//functions to set testimonials
testimonialRender = (testimonial) => {
  var length = testimonial.length;
  if(length===0){
    document.getElementById("testimonialSection").style.display= "none";
  }

  let htmlText = "";
  testimonial.map((testimonialData) => {
    const str = testimonialData.feedback;

    // 👇️ First 25 words
    const shortFeedback = str.split(" ").slice(0, 25).join(" ");
    // console.log(shortFeedback);
    htmlText += `
        <div class="col-lg-1">
            <div class="queto">
                <img src="images/queto.png" alt="">
            </div>
        </div>
        <div class="col-lg-8">
            <p>${testimonialData.feedback}</p>
            <p>${shortFeedback}... <strong>MORE</strong></p>
        </div>
        <div class="col-lg-3">
            <div class="testimonial_img">
                <img src="${base_url}/${testimonialData.image}" alt="">
            </div>
            <div class="img_text">
                <h3>${testimonialData.client_name}</h3>
            </div>
        </div>
                                  
    `;
  });
  document.getElementById("testimonials").innerHTML = htmlText;
};

//function to set Skills
skillRender = (skills) => {
  var length = skills.length;
  if(length===0){
    document.getElementById("skillSection").style.display= "none";
  }

  let htmlText = "";
  skills.map((skills) => {
    if (skills.skill_level == "Advanced") {
      htmlText += `
            <div class="progress_wrapeer">
            <h6>${skills.name}</h6>
            <a href="#">95%</a>
        </div>
        <div class="progress">
        <div class="progress-value value_2"></div>
        </div>
            `;
    }
    if (skills.skill_level == "Intermediate") {
      htmlText += `
            <div class="progress_wrapeer">
            <h6>${skills.name}</h6>
            <a href="#" class="counter">90%</a>
        </div>
        <div class="progress">
            <div class="progress-value"></div>
        </div>
            `;
    }
    if (skills.skill_level == "Beginner") {
      htmlText += `
            <div class="progress_wrapeer">
                <h6>${skills.name}</h6>
                    <a href="#">80%</a>
                </div>
                <div class="progress">
                  <div class="progress-value value_4"></div>
                </div>
            `;
    }
  });
  document.getElementById("skillDiv").innerHTML = htmlText;
};

//function to set skill video
skillVideoRender = (profile_video) =>{
  let htmlText = "";
  profile_video.map((videoData)=>{
      htmlText += `
      <a target="_blank" class="venobox" data-autoplay="true" data-vbtype="video" href="https://icircles.app/uploads/video/${videoData.video}"> <i class="fas fa-play-circle"></i></a>
      `
  });

  document.getElementById("skillVideo").innerHTML = htmlText;
};

//function to set languages
languageRender = (languages) => {
  var length = languages.length;
  if(length===0){
    document.getElementById("languageSection").style.display= "none";
  }


  let htmlText = "";
  languages.map((languages) => {
    if (languages.level == "Advanced") {
      htmlText += `
      <div class="col-lg-1 appearOnSmall"></div>
            <div class="col-6 col-md-4 col-lg-2" >
                <div class="circle">
                    <div class="text">
                        100%
                    </div>
                    <svg>
                    <circle class="bg" cx="57" cy="57" r="52"></circle>
                    <circle class="progress Bangla" cx="57" cy="57" r="52"></circle>
                </svg>
                </div>
                <div class="cercle_title text-center">
                    <h4>${languages.title}</h4>
                </div>
            </div>
           
            `;
    }
    if (languages.level == "Intermediate") {
      htmlText += `
      <div class="col-lg-1 appearOnSmall"></div>
            <div class="col-6 col-md-4 col-lg-2">
                        <div class="circle">
                            <div class="text">
                                80%
                            </div>
                            <svg>
                            <circle class="bg" cx="57" cy="57" r="52"></circle>
                            <circle class="progress intermediate" cx="57" cy="57" r="52"></circle>
                        </svg>
                        </div>
                        <div class="cercle_title text-center">
                            <h4>${languages.title}</h4>
                        </div>
            </div>
        
            `;
    }
    if (languages.level == "Beginner") {
      htmlText += `
      <div class="col-lg-1 appearOnSmall"></div>
            <div class="col-6 col-md-4 col-lg-2">
                        <div class="circle">
                            <div class="text">
                                30%
                            </div>
                            <svg>
                            <circle class="bg" cx="57" cy="57" r="52"></circle>
                            <circle class="progress beginer" cx="57" cy="57" r="52"></circle>
                        </svg>
                        </div>
                        <div class="cercle_title text-center">
                            <h4>${languages.title}</h4>
                        </div>
            </div>
            
            `;
    }
  });
  document.getElementById("languageDiv").innerHTML = htmlText;
};

//function to set services
serviceRender = (services) => {
  var length = services.length;
  if(length===0){
    document.getElementById("serviceSection").style.display= "none";
  }


  let htmlText = "";
  services.map((serviceData) => {
    htmlText += ` <div class="col-md-6 col-lg-6">
        <div class="service_item">
            <div class="row d-flex align-items-center">
                <div class="col-md-2 serviceImg">
                    <img src="${base_url}/${serviceData.thumb}" alt="">
                </div>
                <div class="col-md-10">
                    <h3>${serviceData.service_name}</h3>
                    <p>${serviceData.details}</p>
                </div>
            </div>
        </div>
    </div> `;
  });
  document.getElementById("services").innerHTML = htmlText;
};

//function to set blogs or journal
blogRender = (blogs) => {
  var length = blogs.length;
  if(length===0){
    document.getElementById("blogSection").style.display= "none";
  }

  let htmlText = "";
  blogs.Technology.map((techblog) => {
    var options = { day: "numeric", month: "long", year: "numeric" };
    var date = new Date(techblog.created_date);
    if (techblog.image == null) {
      htmlText += `
      <div class="col-md-6 col-lg-4">
      <div class="journal_item">
          <div class="journal_img">
          <img src="Images/journal1.png" alt="">
          </div>
          <div class="journal_content">
              <h5><i class="fa-solid fa-calendar-days"></i></h5>
              <h5>${date.toLocaleDateString("en-US", options)}</h5>
          </div>
      </div>
      <div class="journal_text text-center">
          <h4>${techblog.title}</h4>
          <p>${techblog.description}</p>
      </div>
  </div>
      `;
    } else {
      htmlText += `
            <div class="col-md-6 col-lg-4">
            <div class="journal_item">
                <div class="journal_img">
                <img src="${base_url}/${techblog.image}" alt="">
                </div>
                <div class="journal_content">
                    <h5><i class="fa-solid fa-calendar-days"></i></h5>
                    <h5>${date.toLocaleDateString("en-US", options)}</h5>
                </div>
            </div>
            <div class="journal_text text-center">
                <h4>${techblog.title}</h4>
                <p>${techblog.description}</p>
            </div>
        </div>
            `;
    }
  });
  document.getElementById("blogs").innerHTML = htmlText;
  
};

//function to set awards
awardRender = (awards) => {
  var length = awards.length;
  if(length===0){
    document.getElementById("awardSection").style.display= "none";
  }

  let htmlText = "";
  awards.map((awardData) => {
    htmlText += ` <div class="col-md-6 col-lg-6">
        <div class="award_container">
            <div class="award_wrap">
                <div class="award_img">
                    <img src="images/batch.png" alt="">
                </div>
                <div class="award_trxt">
                    <h5>${awardData.title}</h5>
                    <h6>Google Inc -2020</h6>
                </div>
            </div>
            <p>${awardData.details}</p>
        </div>
    </div>`;
  });
  document.getElementById("awards").innerHTML = htmlText;
};

//function to set portfolio

portfolioRender = (portfolios) => {
  var length = portfolios.length;
  if(length===0){
    document.getElementById("portfolioSection").style.display= "none";
  }

  const keys = Object.keys(portfolios);
  let cat = `<li data-filter="all"> All </li>`;
  let content = ``;
  let contentIndex0 = ``;
  let contentIndex1 = ``;
  let contentIndex2 = ``;
  let cnt = 1;
  keys.map((key, index) => {
    // console.log(key,index);
    cat += `<li data-filter=".${key}"> ${key} </li>`;
    portfolios[key].map((item, index) => {
      // console.log(index, cnt);
      //  const arr = Object.entries(item);
      //  console.log(arr);
      if (index === 0) {
        contentIndex0 += `
         <div class="portfolio_item mix ${item.cat_name} ${cnt>1?'mt-5':''} mb-5">
         <img src="${base_url + "/" + item.image}" alt="">
            <div class="portfolio_overly">
            <span><i class="fa-solid fa-camera"></i></span>
            <h4>${item.project_name}</h4>
            </div>
         </div>
        `;
      }
      if (index === 1 && ((cnt % 2) === 1)) {
        contentIndex1 += `
            <div class="portfolio_item mix ${item.cat_name}} mb-5">
                <img src="${base_url + "/" + item.image}" alt="">
                <div class="portfolio_overly">
                    <span><i class="fa-solid fa-camera"></i></span>
                    <h4>${item.project_name}</h4>
                </div>
            </div>
        `;
      }

      if (index === 2 || (index === 1 && ((cnt % 2) === 0))) {
        
        contentIndex2 += `
         <div class="portfolio_item mix  ${item.cat_name}  ${cnt>1?'mt-5':''} ">
         <img src="${base_url + "/" + item.image}" alt="">
            <div class="portfolio_overly">
            <span><i class="fa-solid fa-camera"></i></span>
            <h4>${item.project_name}</h4>
            </div>
         </div>
        `;
        cnt++;
      }
    });
  });

  document.getElementById("index0").innerHTML = contentIndex0;
  document.getElementById("index1").innerHTML = contentIndex1;
  document.getElementById("index2").innerHTML = contentIndex2;
  document.getElementById("portfolioCategory").innerHTML = cat;
//   document.getElementById("portfolio_content").innerHTML = content;
  var mixer= mixitup(".portfolio_content");
};

//function to set microsites
micrositesRender = (microsites) => {
  var length = microsites.length;
  if(length===0){
    document.getElementById("micrositeSection").style.display= "none";
  }


  let htmlText = "";
  microsites.map((micrositesData) => {
    htmlText += ` <div class="col-md-6 col-lg-6">
        <div class="microsite_item">
            <div class="row d-flex align-items-center">
                <div class="col-md-2 serviceImg">
                    <img src="https://icircles.app/uploads/micrositeslogo/${micrositesData.entity_logo}" alt="">
                </div>
                <div class="col-md-10">
                  
                    <a target="_blank" href="https://icircles.app/microsites/single/${micrositesData.id}"><h3>${micrositesData.name}</h3></a>
                    <p>${micrositesData.entity_details}</p>
                </div>
            </div>
        </div>
    </div> `;
  });
  document.getElementById("microsites").innerHTML = htmlText;
};


//function to set microsite verified card
verifiedCardRender = (microsites_verified_card) => {
  var length = microsites_verified_card.length;
  if(length===0){
    document.getElementById("verifiedCard").style.display= "none";
  }

  let htmlText = "";
  microsites_verified_card.map((verifiedCardData)=>{
    if(typeof verifiedCardData !== 'undefined' && verifiedCardData.length === 0){
     document.getElementById("verifiedCard").style.display = "none";
    }else{
      htmlText += `
      <div class="col-md-4 microBatchImg">
      <img src="https://icircles.app/uploads/micrositeslogo/${verifiedCardData.entity_logo}" class="p-3" alt="">
  </div>
  <div class="col-md-8 col-sm-8 microCardFooter">
  <div class="topRightCheck" style="text-align:right ">
      <span class="dotBatch"><i class="fa-solid fa-check text-center"></i></span>
    </div>
<h5 class="text-center">${verifiedCardData.name}</h5>
  <h6 class="text-center">${verifiedCardData.designation}</h6>
</div>
      `
    }
  });
  document.getElementById("verifiedCard").innerHTML = htmlText;
};

//function to set clients
clientRender = (clients) => {
  var length = clients.length;
  if(length===0){
    document.getElementById("clientSection").style.display= "none";
  }

  let htmlText = "";
  clients.map((clientData)=>{
     if(clientData.image){
      htmlText += `
      <div class="col-md-6  col-lg-3">
      <div class="partner_item">
          <img src="https://icircles.app/uploads/user/${username}/${clientData.image}" alt="">
      </div>
  </div>
      `
     }
  });
  document.getElementById("clients").innerHTML = htmlText;
};

//function to set profile photos
myphotosRender = (profile_images) => {

  var length = profile_images.length;
  if(length===0){
    document.getElementById("myPhotoSection").style.display= "none";
  }


  var length = profile_images.length;

  if(length===0){
    document.getElementById("myPhotoSection").style.display= "none";
  }

  let htmlText = "";
  profile_images.map((portfolioData)=>{
      htmlText += `
      <div class="col mb-3">
      <div class="interest-card interest-cardh-50 shadow-sm"> 
        <img src="https://icircles.app/uploads/user/${username}/${portfolioData.image}" class="card-img-top" alt="...">
      </div>
  </div>
      `
  });
  document.getElementById("myPhotos").innerHTML = htmlText;
  //alert(document.getElementById("myPhotos"));
};

//function to set the whole ui
render = (data) => {
  aboutRender(data.about);
  verifiedCardRender(data.microsites_verified_card);
  myphotosRender(data.profile_images);
  micrositesRender(data.microsites);
  educationsRender(data.educations);
  workExperienceRender(data.experiences);
  skillRender(data.subskills);
  skillVideoRender(data.profile_video);
  languageRender(data.languages);
  serviceRender(data.services);
  testimonialRender(data.testimonials);
  portfolioRender(data.portfolios);
  interestRender(data.interests);
  blogRender(data.blogs);
  awardRender(data.awards);
  
  clientRender(data.clients);

};

//Fetch api
var url = document.URL 
let usrnm = url.split('/'); 
fetch("https://icircles.app/api/profile/usermicrosite/"+usrnm[usrnm.length-1])
  .then((responsse) => responsse.json())
  .then((data) => { 
    render(data);
  });

//console.log(data);

//array object data resource

// 1. nested array field get object from an array
//2. https://stackoverflow.com/questions/66345577/get-path-of-value-in-object-from-nested-array
//3. https://stackoverflow.com/questions/69521018/get-value-from-nested-arrays-of-objects
//4. https://stackoverflow.com/questions/65641648/how-to-get-data-from-nested-objects-in-the-form-of-array
//5. https://stackoverflow.com/questions/68559392/find-object-from-an-array-of-nested-objects-by-key-in-javascript
