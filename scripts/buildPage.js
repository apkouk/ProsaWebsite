var contentSections = [".intro", ".techSkills", ".personalSkills", ".experience", ".education", ".services", ".misc", ".contact", ".footer"];

window.onclick = function(event) {
    if (event.target.id.indexOf("Container") > 0 || event.target.id == 'intro'){
        $(".experienceInfo").fadeOut();
    }
}


function buildPage() {
  canUseWebP();
  initSections();
  intro();
  techSkills();
  personal();
  experience();
  education();
  services();
  misc();
  contact();
  addHandlers();
  console.log("Page built!");
}

var extensionImage = "";
function canUseWebP() {
    var elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      extensionImage = ".webp";
    }
    else {
      extensionImage = ".png";
    }
    $("#contactForm").css("background-image", "url(src/images/worldMap" + extensionImage + ")");
    $(".introImage").css("background-image", "url('src/images/codecode1024b" + extensionImage );
}

function addHandlers() {
  resizingElement();
  smoothScrolling();
  showHideNavBar();
}


function initSections() {
  //intro
  $(".intro").css("padding-top", "55");
  //set width content
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  $.each(contentSections, function(i, section) {
    if (windowWidth > 768) {
      var widthVal = ($(window).width() / 4) * 3;
      $(section).css("width", widthVal);
      $('.experienceInfo').css("width", widthVal);
    } else {
      $(section).css("width", "100%");
      $('.experienceInfo').css("width", "100%");
    }
  });

  //intro image
  $('.introImage').css("width", windowWidth);
  $('.introImage').css("height", windowHeight);
  $('.introStart').css("margin-top", windowHeight / 2);

  //experiences
  $('#experienceInfoContainer').css("margin-left", $(".intro").offset().left);
  $('#experienceInfoContainer').css("width", windowWidth);
}

function intro() {
  var introSection = $(".intro");
  introSection.append("<h2>Introduction</h2>");
  $.each(textContent.intro.paragraphs, function(i, item) {
    introSection.append("<p>" + item + "</p>");
  });
}

function techSkills() {
  var techSkillsSection = $(".techSkills");
  techSkillsSection.append("<h2>Tech Skills</h2>");
  $.each(textContent.techSkills.paragraphs, function(i, item) {
    techSkillsSection.append("<p>" + item + "</p>");
  });
  techSkillsSection.append("</br><h4><b>Development</b></h4>");
  techSkillsSection.append("<p>" + textContent.techSkills.devSkills + "</p></br>");
  techSkillsSection.append("<h4><b>Concepts</b></h4>");
  techSkillsSection.append("<p>" + textContent.techSkills.concepts + "</p></br>");
  techSkillsSection.append("<h4><b>Tools</b></h4>");
  techSkillsSection.append("<p>" + textContent.techSkills.tools + "</p></br>");
}

function personal() {
  var personalSkillsSection = $(".personalSkills");
  personalSkillsSection.append("<h2>Personal Skills</h2>");
  $.each(textContent.personalSkills.paragraphs, function(i, item) {
    personalSkillsSection.append("<p>" + item + "</p>");
  });
}

function education() {
  var educationSection = $(".education");
  educationSection.append("<h2>Education</h2>");
  $.each(textContent.education.paragraphs, function(i, item) {
    educationSection.append("<p>" + item + "</p>");
  });
}

function services() {
  var servicesSection = $(".services");
  //servicesSection.append("<h2>Services</h2>");
  //servicesSection.append("<p>" + textContent.services.title + "</p></br>");
  var serviceItem = $(".service");

  $.each(textContent.services.serviceItems, function(i, service) {
    var serviceItemContainer = $("<div>", {
      class: "col-sm-6 col-md-4 col-lg-3 service-item"
    });
    var serviceImageDiv = $("<div>", {
      class: "service-image"
    });
    var serviceImage = $("<img>", {
      src: "src/images/" + service.image + extensionImage,
      class: "serviceImg"
    });
    serviceImageDiv.append(serviceImage);
    serviceItemContainer.append(serviceImageDiv);

    serviceItemContainer.append("<h4 style=><b>" + service.title + "</b></h4>");
    serviceItemContainer.append("<p>" + service.desc + "</p>");
    serviceItem.append(serviceItemContainer);
  });
  servicesSection.append(serviceItem);

}

function misc() {
  var miscSection = $(".misc");
  miscSection.append("<h2>My Library</h2><hr>");
  $.each(textContent.misc.books, function(i, book) {
    miscSection.append("<p><i>" + book.title + "</i></br> " + book.author + "</p><hr>");
  });
  miscSection.append("</br>")
  miscSection.append("<h2>Conferences</h2><hr>");
  $.each(textContent.misc.conferences, function(i, conference) {
    miscSection.append("<p><i>" + conference.name + "</i></p>");
    miscSection.append("<h4>Date: " + conference.date + "</h4>");
    miscSection.append("<h4>" + conference.desc + "</h4>");
    miscSection.append("<a href='" + conference.URL + "'>" + conference.URL + "</a><hr>");
  });
}

function contact() {
  var contactSection = $(".contact");
  var contactItem = $("<div>", {
    class: "contactItem"
  });
  var contactImage = $("<img>", {
    src: "src/images/prosaWeb.png",
    class: "img-circle"
  });
  contactItem.append(contactImage);
  contactItem.append("<h3>Francisco Rosa</h3>");
  contactItem.append("<p>Barcelona - London</p>");
  contactItem.append("<p>CAT: +34 634 538 340</p>");
  contactItem.append("<p>UK:  +44 7756 291844</p>");
  contactSection.prepend(contactItem);

}

function resizingElement() {
  $(window).resize(function() {
    initSections();
  });
}

function smoothScrolling() {
  //add smooth scrolling on navBar links...
  var links = $("#linksGroup").find('a');
  for (var i = 0; i < links.length; i++) {
    $(links[i]).on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.position().top
        }, 1000);
      }
    });
  }
  //...and button
  $("#btnWellcome").click(function() {
    $('html, body').animate({
      scrollTop: $("#intro").position().top
    }, 1000);
  });
}

function showHideNavBar() {
  $(window).scroll(function(event) {
    ($(window).scrollTop() > 550) ? showNavBarTimeOut() : $("#navBar").show();
    console.log("SCROLLTOP: " + $(window).scrollTop());
  });
}

function showNavBarTimeOut(){
    $(window).scroll($.debounce( 250, function(){
     $("#navBar").fadeIn();
     setTimeout(function(){ $("#navBar").fadeOut(); }, 5000);
}));
}

var textContent = {

  "intro": {
    "paragraphs": [
      "My name is Francisco but everybody calls me Paco (a common Spanish nickname for Francisco). I grew up in Barcelona but moved to London to make a fresh start and it's being a great experience so far. ",
      "I make my living as a senior software developer, and I have been building diverse software solutions for various clients and employers since 2009. I truly love what I do, and what I like most is the challenges of solving problems and improving my coding ability on a daily basis. I love helping my employers and clients improve their software and watching projects mature and grow. I’m inspired by being part of a team with a common goal, and I wake up every day motivated to get things done. This work gives me great satisfaction, and problem solving is a strength and something I truly enjoy.",
      "I also am passionate about learning, seeing new places, and meeting new people. I am fortunate that my career in software development has provided me with the opportunity to do all three.",
      "In my free time I enjoy playing spanish guitar, reading a good book, or cooking a nice meal with friends. Feel free to poke around my website to learn more about me and my work. ",
      "Hasta la vista!"
    ]
  },
  "techSkills": {
    "paragraphs": [
      "I consider myself a full stack developer able to contribute to projects across the stack. Most of my development experience has been with Microsoft technologies, including deep experience using C#, ASP.NET, Web Forms, and SQL Server. I am quite comfortable using a number of Microsoft tools including several versions of Visual Studio, Entity Framework, Team Foundation Server, and Sharepoint.",
      "For web development projects I have worked with HTML/CSS and JavaScript including several popular frameworks and libraries such as Bootstrap, Slick, and jQuery. I also have experience using cloud tools from Azure and Amazon Web Services.",
      "I am also competent working with design patterns (still learning) and developing in Agile environments. Below is a brief list of skills from my resume."
    ],
    "devSkills": "C#, ASP.NET, PHP, Java, jQuery, JavaScript, HTML/CSS, Bootstrap, Oracle, SQL, MVC, Entity Framework",
    "concepts": "Software development process (Agile, Scrum), relational databases, data modelling, object-oriented programming, MVC, SOLID principles",
    "tools": "TFS, Git, GitHub, Sharepoint, Visual Studio, MSSQL Mangement Studio, Azure, Amazon Web Services, Notepad++, Atom, WebStorm"
  },
  "personalSkills": {
    "paragraphs": [
      "In addition to offering a robust set of hands-on technical skills, I believe my interpersonal skills and business acumen are additional assets I offer to my clients. I am quite comfortable in client-facing roles that require soft skills in negotiating deliverables and managing expectations of stakeholders. ",
      "Over my career I have successfully managed several projects, performed as a business analyst to gather requirements from users, and written detailed requirements documentation. I have also managed offshore development teams and am able to mentor junior level resources.",
      "My analytical skills are another strength, and I have regularly been able to identify and resolve inefficiencies within development processes that have improved delivery speed.",
      "I am a native speaker of Spanish and Catalan with additional fluency in English."
    ]
  },
  "experiences": {
    "desktopPublisher": {
      "id": 1,
      "ref": "desktopPublisher",
      "company": "Multiple companies",
      "website": "",
      "city": "Barcelona",
      "role": "Designer/Desktop Publisher",
      "dateStart": "Dec 2006",
      "dateEnd": "Aug 2008",
      "techStack": "",
      "description": "Before becoming a software developer I was a designer for several companies around Barcelona. I mostly did design work using Acrobat, Photoshop, Illustrator, InDesign, Quark, Freehand, and ArtiosCad.",
      "tasks": "",
      "image": "graphic"
    },
    "netLife": {
      "id": 2,
      "ref": "netLife",
      "company": "Net-Life S.L",
      "city": "Barcelona",
      "website": "",
      "role": "Programmer",
      "dateStart": "Dec 2009",
      "dateEnd": "May 2010",
      "techStack": "",
      "description": "This was my first real programming role, and I built web pages using C# (framework 3.5), ASP.NET, HTML, MS SQL Server, and Visual Studio 2010.",
      "tasks": "",
      "image": "netlife"
    },
    "btgsa": {
      "id": 3,
      "ref": "btgsa",
      "company": "T&G Think & Grow (now Aggity) ",
      "city": "Barcelona",
      "website": "http://btgsa.com",
      "role": "Software Engineer",
      "dateStart": "June 2010",
      "dateEnd": "Mar 2014",
      "techStack": "C#, Visual Studio, Oracle, MSSQL Server, TFS (Sharepoint integrated), ASP.NET, HTML, Gembase.",
      "description": "At T&G (now Aggity) I was a software engineer focused on development using the Microsoft stack including C#, ASP.NET, and SQL Server. I also trained users.",
      "tasks": [
        "Developed and modified program features according to client specifications using Visual Studio 2010, C#, and ASP.NET.",
        "Designed and implemented MS SQL Server and Oracle databases including complex queries, stored procedures, views and integration, and data migrations for new clients.",
        "Fixed software issues and SQL code irregularities in queries or stored procedures and business logic in C#.",
        "Wrote functional documentation for new clients and trained new users."
      ],
      "image": "aggity"
    },
    "luxtripper": {
      "id": 4,
      "ref": "luxtripper",
      "company": "Luxtripper LTD",
      "city": "London",
      "website": "http://luxtripper.co.uk",
      "role": "Project Manager / Developer",
      "dateStart": "Jan 2015 ",
      "dateEnd": "Aug 2015",
      "techStack": "",
      "description": "At Luxtripper I had a hybrid role that included both hands-on work and leadership for their technical teams. My work included project management of various in-house projects, managing an offshore development team in Pakistan, gathering requirements for their e-commerce and marketing departments, and hands-on development work.",
      "tasks": [
        "Designed and implemented integrations with third APIs for hotel booking data. Prototyped a flight booking feature.",
        "Implemented TFS source control software and set source control processes (branch merges, deployments, testing).",
        "Implemented production, backup, and testing servers using Rackspace and the Azure platform. Automated backups using scripts so databases, image servers, and code could be saved to Amazon S3 service.",
        "Resolved coding errors related to SQL and business logic. Contributed to cosmetic changes.",
        "Implemented testing plans for both front and back-end with TFS online.",
        "Migrated a WordPress blog to an internal IIS server and migrated data from MySQL to MS SQL Server. "
      ],
      "image": "luxtripper"
    },
    "membra": {
      "id": 5,
      "ref": "membra",
      "company": "Membership Engagement Services",
      "city": "London",
      "website": "http://membra.co.uk",
      "role": "Web Developer",
      "dateStart": "Aug 2015",
      "dateEnd": "Aug 2016",
      "techStack": "",
      "description": "At MES I was part of a team that implemented new features and functionality to a site used by NHS hospitals to gather and present survey data to users.",
      "tasks": [
        "Added responsive web features to improve device compatibility and a progress bar to improve UI/UX.",
        "Implemented Sort-Modify-Delete for survey questions/answers instead of requiring changes in the database.",
        "Performed multiple database tasks including pivot tables, creation and design of tables, stored procedures, and query", "timization. Wrote scripts to automate data import that improved speed from days to only six hours.",
        "Built a responsive three-tier architecture admin tool that automated and optimized project managers tasks. (Bootstrap,Telerikframework, ASP.NET Webforms, C#, and MS SQL Server)."
      ],
      "image": "mes"
    },
    "mission": {
      "id": 6,
      "ref": "mission",
      "company": "Mission Communications",
      "city": "London",
      "website": "http://mission-communications.net",
      "role": "Web Developer",
      "dateStart": "Aug 2016",
      "dateEnd": "Nov 2017",
      "techStack": "",
      "description": "At Mission Communications I was able to work on several web development projects for clients in diverse industries, and in particular I made significant contributions to the development of sightseeingpass.com",
      "tasks": [
        "Built a responsive e-commerce website (not yet deployed) and news/blog content that integrated with Facebook, Instagram and Twitter. (Web Forms, C#, Bootstrap, jQuery).",
        "Built a private password-protected property management site to display details on available properties (images, description, plans, etc.) in London with a slide show (Slick JavaScript library, Typescript). The site enabled agents to send individual or bulk emails to registrants and upload PDFs with property data for download. (Web Forms, C#, jQuery, Bootstrap).",
        "Converted business critical websites to web apps using ASP.NET to improve debugging capability.",
        "Migrated several websites to TFS source control to enable developers to work locally, replacing a problematic FTP solution.",
        "Implemented new API endpoints and fixed bugs in the company API. The API was developed using MVC architecture with an Entity Framework pointing to a MS SQL Server database with Postman to carry out endpoint testing.",
        "Refactored code according to the SOLID principles."
      ],
      "sightseeingpass": [
        "Built a new back-end feature for sightseeingpass.com to manage all images related to a tourist attraction, including validation of image presence and size. Feature enabled users to upload multiple images at once and sort them via drag and drop. (Web Forms, C#, jQuery, MS SQL stored procedures for CRUD operations).",
        "Developed a new sightseeingpass.com feature for users to create custom itineraries for New York bus tours with ability to select date and attractions from a list (using data from company API), creating a Google Map with most efficient routes. (Web Forms, Bootstrap, C#, JQuery, ASP.NET handlers, and internal APIs).",
        "Built a feature using company API to compare data between systems with alerts for any differences. Solution enabled users to update disparate data through the website database or the central system database in one click and allowed team to check consistency between systems. (MS SQL Server, internal API, and C#).",
        "Wrote unit tests to validate URL rewriting and accuracy for pricing (number of people, type of delivery, type of card, etc.). "
      ],
      "image": "mission"
    }
  },
  "education": {
    "paragraphs": [
      "I received professional training in Software Development at Escola Politècnica Salessians Sarrià (2008 - 2010) and in Graphic Design at IES Esteve Terradasi illa (2005 - 2007).  ",
      "I’ve received additional training as a systems programmer for Android (Master D, 2012) and Java Programming (Escola BIT, 2008 - 2009)."
    ]
  },
  "misc": {
    "books": [{
        "id": 1,
        "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
        "author": "Robert C. Martin"
      },
      {
        "id": 2,
        "title": "Soft Skills: The software developer's life manual",
        "author": "John Sonmez"
      },
      {
        "id": 3,
        "title": "The Pragmatic Programmer: From Journeyman to Master",
        "author": "Gary McLean Hall"
      },
      {
        "id": 4,
        "title": "Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles",
        "author": "David Thomas"
      },
      {
        "id": 5,
        "title": "Test Driven Development: By Example",
        "author": "Kent Beck"
      },
      {
        "id": 6,
        "title": "HEAD FIRST DESIGN PATTERNS",
        "author": "Elisabeth Freeman, Eric Freeman, Bert Bates"
      },
      {
        "id": 3,
        "title": "The Software Craftsman: Professionalism, Pragmatism, Pride",
        "author": "Robert C. Martin, Sandro Mancuso"
      }
    ],
    "conferences": [{
        "id": 1,
        "name": "SOFTWARE CRAFTSMANSHIP LONDON",
        "desc": "",
        "date": "5-6 October 2017",
        "URL": "http://sc-london.com/"
      },
      {
        "id": 2,
        "name": "CODENODE",
        "desc": "Regularly attend events about different subjects at the Skill Matters community ",
        "date": "-",
        "URL": "https://skillsmatter.com/"
      },
      {
        "id": 3,
        "name": "SOFTWARE CRAFTSMANSHIP BARCELONA",
        "desc": "Regularly attend events about different subjects with their Barcelona Meetup Group",
        "date": "-",
        "URL": "https://www.meetup.com/Barcelona-Software-Craftsmanship/events/"
      }
    ]
  },
  "socialMedia": {
    "links": [{
      "id": 1,
      "name": "GitHub",
      "URL": "http://github.com/apkouk",
      "image": ""
    }, {
      "id": 2,
      "name": "LinkedIn",
      "URL": "https://www.linkedIn.com/in/pacorosa",
      "image": ""
    }, {
      "id": 3,
      "name": "GMail",
      "URL": "https://www.linkedIn.com/in/pacorosa",
      "image": ""
    }]
  },
  "services": {
    "title": "As a freelance consultant I offer various services to clients that can include:",
    "serviceItems": [{
        "id": 2,
        "title": "Database Scripting",
        "desc": "Over the years I have worked with a number of databases, including extensive experience with Microsoft SQL Server and Oracle in designing tables and stored procedures.",
        "image": "database"
      },
      {
        "id": 3,
        "title": "System Integration",
        "desc": "My experience includes extensive system integration work that often has required an ability to problem solve and work with ambiguous or vague documentation related to third-party software and APIs. I can navigate these areas for clients and develop a working solution.",
        "image": "systemInt"
      },
      {
        "id": 6,
        "title": "Team Management",
        "desc": "Throughout my career I have managed small teams that include onsite and offshore or distributed team members. I am also able to mentor junior team members and gain team buy-in for adhering to best practices.",
        "image": "teamMan"
      },
      {
        "id": 4,
        "title": "Error Fixing/Code Quality",
        "desc": "One of my strengths is the ability to analyze code to identify errors and areas for improvement for performance or maintainability.",
        "image": "errorFix"
      },
      {
        "id": 1,
        "title": "Software Development",
        "desc": "For eight years I have focused on software development work and I have built many solutions using C#, ASP.NET, Entity Framework, Microsoft SQL Server, JQuery, HTML and CSS. I am able to contribute to the full lifecycle of software development projects from requirements through testing and deployment.",
        "image": "softdev"
      },
      {
        "id": 5,
        "title": "Software Process Improvement",
        "desc": "I am able to review your software development process in order to design and implement new processes and tools. This may include implementations of new software development methodologies (Agile, Scrum), source control solutions (Git, Team Foundation Server), and industry practices such as code reviews.",
        "image": "softdevProc"
      }

    ]
  }
}
