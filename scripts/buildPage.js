var contentSections = [".intro", ".techSkills", ".personalSkills", ".experience", ".education", ".services", ".misc", ".contact", ".footer"];

window.onclick = function (event) {
    if (event.target.id.indexOf("Container") > 0 || event.target.id == 'intro') {
        $(".experienceInfo").fadeOut();
    }
}

function buildPage() {
    loadTextContent();
    loadOptionsMenu();
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

    // console.log("Page built!");
}

function loadOptionsMenu() {
    var option = $("#introOption");
    option.empty();
    option.text(textContent.intro.optionMenu);

    option = $("#techOption");
    option.empty();
    option.text(textContent.techSkills.optionMenu);

    option = $("#skillsOption");
    option.empty();
    option.text(textContent.personalSkills.optionMenu);

    option = $("#experienceOption");
    option.empty();
    option.text(textContent.experiences.optionMenu);

    option = $("#educationOption");
    option.empty();
    option.text(textContent.education.optionMenu);

    option = $("#servicesOption");
    option.empty();
    option.text(textContent.services.optionMenu);

    option = $("#contactOption");
    option.empty();
    option.text(textContent.socialMedia.optionMenu);

    option = $("#wellcome");
    option.empty();
    option.text(textContent.intro.wellcome);

    option = $("#btnWellcome");
    option.empty();
    option.text(textContent.intro.btnWellcome);
    




}

var textContent;
function loadTextContent() {
    // var lang;
    // var params = new window.URLSearchParams(window.location.search);
    // lang = params.get('lang');

    // if (lang == null)
    lang = $('#lang-select :selected').val();

    textContent = "";
    switch (lang) {
        case "en":
            textContent = textContent_EN;
            break;
        case "es":
            textContent = textContent_ES;
            break;
        case "ca":
            textContent = textContent_CA;
            break;
    }
    $("#lang-select").val(lang);
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
    $(".introImage").css("background-image", "url('src/images/codecode1024b" + extensionImage);
}

function addHandlers() {
    resizingElement();
    smoothScrolling();
    showHideNavBar();

    $('#lang-select').on('change', function () {

        // $("p").each(
        //     function () {
        //         // temprary save the children elements like spans & divs
        //         $temp = $(this).children("span,div,h4,h2");
        //         // clean the "p" container (text + <br>)
        //         $(this).empty();
        //         // recive the children
        //         $(this).append($temp);
        //     }
        // );        
        loadTextContent();
        buildPage();
        //location.assign(location.origin + location.pathname + "?lang=" + $('#lang-select :selected').val());
    });
}


function initSections() {
    //intro
    $(".intro").css("padding-top", "55");
    //set width content
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $.each(contentSections, function (i, section) {
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
    // $('#experienceInfoContainer').css("width", windowWidth);
}

function intro() {
    var introSection = $(".intro");
    introSection.empty();
    introSection.append("<h2>" + textContent.intro.optionMenu + "</h2>");
    $.each(textContent.intro.paragraphs, function (i, item) {
        introSection.append("<p>" + item + "</p>");
    });
}

function techSkills() {
    var techSkillsSection = $(".techSkills");
    techSkillsSection.empty();
    techSkillsSection.append("<h2>" + textContent.techSkills.optionMenu + "</h2>");
    $.each(textContent.techSkills.paragraphs, function (i, item) {
        techSkillsSection.append("<p>" + item + "</p>");
    });
    techSkillsSection.append("</br><h4><b>" + textContent.techSkills.subTitle1 + "</b></h4>");
    techSkillsSection.append("<p>" + textContent.techSkills.devSkills + "</p></br>");
    techSkillsSection.append("<h4><b>" + textContent.techSkills.subTitle2 + "</b></h4>");
    techSkillsSection.append("<p>" + textContent.techSkills.concepts + "</p></br>");
    techSkillsSection.append("<h4><b>" + textContent.techSkills.subTitle3 + "</b></h4>");
    techSkillsSection.append("<p>" + textContent.techSkills.tools + "</p></br>");
}

function personal() {
    var personalSkillsSection = $(".personalSkills");
    personalSkillsSection.empty();
    personalSkillsSection.append("<h2>" + textContent.personalSkills.optionMenu + "</h2>");
    $.each(textContent.personalSkills.paragraphs, function (i, item) {
        personalSkillsSection.append("<p>" + item + "</p>");
    });
}

function education() {
    var educationSection = $(".education");
    educationSection.empty();
    educationSection.append("<h2>" + textContent.education.optionMenu + "</h2>");
    $.each(textContent.education.paragraphs, function (i, item) {
        educationSection.append("<p>" + item + "</p>");
    });
}

function services() {
    var servicesSection = $(".services");
    var serviceItem = $(".service");
    serviceItem.empty();
    $.each(textContent.services.serviceItems, function (i, service) {
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

        serviceImageDiv.empty();
        serviceImageDiv.append(serviceImage);
        serviceItemContainer.empty();
        serviceItemContainer.append(serviceImageDiv);

        serviceItemContainer.append("<h4 style=><b>" + service.title + "</b></h4>");
        serviceItemContainer.append("<p>" + service.desc + "</p>");
        serviceItem.append(serviceItemContainer);
    });
    servicesSection.append(serviceItem);

}

function misc() {
    var miscSection = $(".misc");
    miscSection.empty();
    miscSection.append("<h2>" + textContent.misc.optionMenu + "</h2><hr>");
    $.each(textContent.misc.books, function (i, book) {
        miscSection.append("<p><i>" + book.title + "</i></br> " + book.author + "</p><hr>");
    });
    miscSection.append("</br>")
    miscSection.append("<h2>" + textContent.misc.optionMenu2 + "</h2><hr>");
    $.each(textContent.misc.conferences, function (i, conference) {
        miscSection.append("<p><i>" + conference.name + "</i></p>");
        miscSection.append("<h4>Date: " + conference.date + "</h4>");
        miscSection.append("<h4>" + conference.desc + "</h4>");
        miscSection.append("<a href='" + conference.URL + "'>" + conference.URL + "</a><hr>");
    });
}

function contact() {
    var contactSection = $(".contact");
    contactSection.empty();
    var contactItem = $("<div>", {
        class: "contactItem"
    });
    var contactImage = $("<img>", {
        src: "src/images/prosaWeb.png",
        class: "img-circle"
    });
    contactItem.append(contactImage);
    contactItem.append("<h3>Francisco Rosa</h3>");
    contactItem.append("<p>Barcelona - +34 634 538 340</p>");

    contactSection.prepend(contactItem);

}

function resizingElement() {
    $(window).resize(function () {
        initSections();
    });
}

function smoothScrolling() {
    //add smooth scrolling on navBar links...
    var links = $("#linksGroup").find('a');
    for (var i = 0; i < links.length; i++) {
        $(links[i]).on('click', function (event) {
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
    $("#btnWellcome").click(function () {
        $('html, body').animate({
            scrollTop: $("#intro").position().top
        }, 1000);
    });
}

function showHideNavBar() {
    // $(window).scroll(function (event) {
    //     ($(window).scrollTop() > 550) ? showNavBarTimeOut() : $("#navBar").show();
    //     console.log("SCROLLTOP: " + $(window).scrollTop());
    // });
}

// function showNavBarTimeOut() {
//     $(window).scroll($.debounce(250, function () {
//         $("#navBar").fadeIn();
//         setTimeout(function () { $("#navBar").fadeOut(); }, 5000);
//     }));
// }

var textContent = {}

// var textContent = {
//     "languages": {
//       "en": {
//         "intro": {
//           "paragraphs": [
//             "My name is Francisco but everybody calls me Paco (a common Spanish nickname for Francisco).",
//             "I make my living as a senior software developer, and I have been building diverse software solutions for various clients and employers since 2009. I truly love what I do, and what I like most is the challenges of solving problems and improving my coding ability on a daily basis. I love helping my employers and clients improve their software and watching projects mature and grow. I’m inspired by being part of a team with a common goal, and I wake up every day motivated to get things done. This work gives me great satisfaction, and problem solving is a strength and something I truly enjoy.",
//             "I also am passionate about learning, seeing new places, and meeting new people. I am fortunate that my career in software development has provided me with the opportunity to do all three.",
//             "In my free time I enjoy playing spanish guitar, reading a good book, or cooking a nice meal with friends. Feel free to poke around my website to learn more about me and my work. ",
//             "Hasta la vista!"
//           ]
//         },
//         "techSkills": {
//           "paragraphs": [
//             "I consider myself a full stack developer able to contribute to projects across the stack. Most of my development experience has been with Microsoft technologies, including deep experience using C#, ASP.NET, Web Forms, and SQL Server. I am quite comfortable using a number of Microsoft tools including several versions of Visual Studio, Entity Framework, Team Foundation Server and Git.",
//             "For web development projects I have worked with HTML/CSS and JavaScript including several popular frameworks and libraries such as ASP.NET, Bootstrap, Angular, Slick, and jQuery. I also have experience using cloud tools from Azure and Amazon Web Services.",
//             "Below is a brief list of skills from my resume."
//           ],
//           "devSkills": "C#, ASP.NET, ASP.NET Core, ASP.NET Web API, MVC, Entity Framework, EFCore, Telerik, Azure Functions, React, jQuery, JavaScript, Angular, Typescript, HTML, CSS, Bootstrap, PrimeNg, FontAwesome, Oracle, SQL, CloudantDb, CosmoDb",
//           "concepts": "Software development process (Agile, Scrum), relational databases, data modelling, object-oriented programming, TDD, MVC, n-tier architecture, SOLID principles",
//           "tools": "TFS, Git, GitHub, Visual Studio 2019, Visual Studio Code, MSSQL Mangement Studio, Azure, Amazon Web Services, Notepad++, Atom, JetBrains Resharper, Docker, Source Tree, Postman"
//         },
//         "personalSkills": {
//           "paragraphs": [
//             "In addition to offering a robust set of hands-on technical skills, I believe my interpersonal skills and business acumen are additional assets I offer to my clients. I am quite comfortable in client-facing roles that require soft skills in negotiating deliverables and managing expectations of stakeholders. ",
//             "Over my career I have successfully managed several projects, performed as a business analyst to gather requirements from users, and written detailed requirements documentation. I have also managed offshore development teams and am able to mentor junior level resources.",
//             "My analytical skills are another strength, and I have regularly been able to identify and resolve inefficiencies within development processes that have improved delivery speed.",
//             "I am a native speaker of Spanish and Catalan with additional fluency in English."
//           ]
//         },
//         "experiences": {
//           "desktopPublisher": {
//             "id": 1,
//             "ref": "desktopPublisher",
//             "company": "Multiple companies",
//             "website": "",
//             "city": "Barcelona",
//             "role": "Designer/Desktop Publisher",
//             "dateStart": "Dec 2006",
//             "dateEnd": "Aug 2008",
//             "techStack": "",
//             "description": "Before becoming a software developer I was a designer for several companies around Barcelona. I mostly did design work using Acrobat, Photoshop, Illustrator, InDesign, Quark, Freehand, and ArtiosCad.",
//             "tasks": "",
//             "image": "graphic"
//           },
//           "netLife": {
//             "id": 2,
//             "ref": "netLife",
//             "company": "Net-Life S.L",
//             "city": "Barcelona",
//             "website": "",
//             "role": "Programmer",
//             "dateStart": "Dec 2009",
//             "dateEnd": "May 2010",
//             "techStack": "",
//             "description": "This was my first real programming role, and I built web pages using C# (framework 3.5), ASP.NET, HTML, MS SQL Server, and Visual Studio 2010.",
//             "tasks": "",
//             "image": "netlife"
//           },
//           "btgsa": {
//             "id": 3,
//             "ref": "btgsa",
//             "company": "T&G Think & Grow (now Aggity) ",
//             "city": "Barcelona",
//             "website": "http://btgsa.com",
//             "role": "Software Engineer",
//             "dateStart": "June 2010",
//             "dateEnd": "Mar 2014",
//             "techStack": "C#, Visual Studio, Oracle, MSSQL Server, TFS (Sharepoint integrated), ASP.NET, HTML, Gembase.",
//             "description": "At T&G (now Aggity) I was a software engineer focused on development using the Microsoft stack including C#, ASP.NET, and SQL Server. I also trained users.",
//             "tasks": [
//               "Developed and modified program features according to client specifications using Visual Studio 2010, C#, and ASP.NET.",
//               "Designed and implemented MS SQL Server and Oracle databases including complex queries, stored procedures, views and integration, and data migrations for new clients.",
//               "Fixed software issues and SQL code irregularities in queries or stored procedures and business logic in C#.",
//               "Wrote functional documentation for new clients and trained new users."
//             ],
//             "image": "aggity"
//           },
//           "luxtripper": {
//             "id": 4,
//             "ref": "luxtripper",
//             "company": "Luxtripper LTD",
//             "city": "London",
//             "website": "http://luxtripper.co.uk",
//             "role": "Project Manager / Developer",
//             "dateStart": "Jan 2015 ",
//             "dateEnd": "Aug 2015",
//             "techStack": "",
//             "description": "Startup in the luxury sector to find destinations worldwide according to its own algorithm. I implemented the minimal infrastructure (servers, backups, version control) and processes of a software department leading a team of four offshore developers in Pakistan.",
//             "tasks": [
//               "Designed and implemented integrations with third APIs for hotel booking data. Prototyped a flight booking feature.",
//               "Implemented TFS source control software and set source control processes (branch merges, deployments, testing).",
//               "Implemented production, backup, and testing servers using Rackspace and the Azure platform. Automated backups using scripts so databases, image servers, and code could be saved to Amazon S3 service.",
//               "Resolved coding errors related to SQL and business logic. Contributed to cosmetic changes.",
//               "Implemented testing plans for both front and back-end with TFS online.",
//               "Migrated a WordPress blog to an internal IIS server and migrated data from MySQL to MS SQL Server. "
//             ],
//             "image": "luxtripper"
//           },
//           "membra": {
//             "id": 5,
//             "ref": "membra",
//             "company": "Membership Engagement Services",
//             "city": "London",
//             "website": "http://membra.co.uk",
//             "role": "Web Developer",
//             "dateStart": "Aug 2015",
//             "dateEnd": "Aug 2016",
//             "techStack": "",
//             "description": "At MES I was part of a team that implemented new features and functionality to a site used by NHS hospitals to gather and present survey data to users.",
//             "tasks": [
//               "Added responsive web features to improve device compatibility and a progress bar to improve UI/UX.",
//               "Implemented Sort-Modify-Delete for survey questions/answers instead of requiring changes in the database.",
//               "Performed multiple database tasks including pivot tables, creation and design of tables, stored procedures, and query",
//               "timization. Wrote scripts to automate data import that improved speed from days to only six hours.",
//               "Built a responsive three-tier architecture admin tool that automated and optimized project managers tasks. (Bootstrap,Telerikframework, ASP.NET Webforms, C#, and MS SQL Server)."
//             ],
//             "image": "mes"
//           },
//           "mission": {
//             "id": 6,
//             "ref": "mission",
//             "company": "Mission Communications",
//             "city": "London",
//             "website": "http://mission-communications.net",
//             "role": "Web Developer",
//             "dateStart": "Aug 2016",
//             "dateEnd": "Nov 2017",
//             "techStack": "",
//             "description": "At Mission Communications I was able to work on several web development projects for clients in diverse industries, and in particular I made significant contributions to the development of sightseeingpass.com",
//             "tasks": [
//               "Built a responsive e-commerce website (not yet deployed) and news/blog content that integrated with Facebook, Instagram and Twitter. (Web Forms, C#, Bootstrap, jQuery).",
//               "Built a private password-protected property management site to display details on available properties (images, description, plans, etc.) in London with a slide show (Slick JavaScript library, Typescript). The site enabled agents to send individual or bulk emails to registrants and upload PDFs with property data for download. (Web Forms, C#, jQuery, Bootstrap).",
//               "Converted business critical websites to web apps using ASP.NET to improve debugging capability.",
//               "Migrated several websites to TFS source control to enable developers to work locally, replacing a problematic FTP solution.",
//               "Implemented new API endpoints and fixed bugs in the company API. The API was developed using MVC architecture with an Entity Framework pointing to a MS SQL Server database with Postman to carry out endpoint testing.",
//               "Refactored code according to the SOLID principles."
//             ],
//             "sightseeingpass": [
//               "Built a new back-end feature for sightseeingpass.com to manage all images related to a tourist attraction, including validation of image presence and size. Feature enabled users to upload multiple images at once and sort them via drag and drop. (Web Forms, C#, jQuery, MS SQL stored procedures for CRUD operations).",
//               "Developed a new sightseeingpass.com feature for users to create custom itineraries for New York bus tours with ability to select date and attractions from a list (using data from company API), creating a Google Map with most efficient routes. (Web Forms, Bootstrap, C#, JQuery, ASP.NET handlers, and internal APIs).",
//               "Built a feature using company API to compare data between systems with alerts for any differences. Solution enabled users to update disparate data through the website database or the central system database in one click and allowed team to check consistency between systems. (MS SQL Server, internal API, and C#).",
//               "Wrote unit tests to validate URL rewriting and accuracy for pricing (number of people, type of delivery, type of card, etc.). "
//             ],
//             "image": "mission"
//           },
//           "educo": {
//             "id": 7,
//             "ref": "educo",
//             "company": "Educo ONG",
//             "city": "Barcelona",
//             "website": "https://www.educo.org/",
//             "role": "Web Developer",
//             "dateStart": "Mar 2018",
//             "dateEnd": "Aug 2018",
//             "techStack": "Kentico CMS, C#, SQL Server, Javascript",
//             "description": "NGO to watch over and safeguard the rights of children. I was basically covering a maternity leave helping in the incidental of the application.",
//             "tasks": [
//               "Built a responsive crowdfunding component in Kentico CMS integrated with Redsys payment system and Paypal. Used C#, Javascript, HTML, CSS and Kentico components.",
//               "Fixed bugs on the commercial website, also in Kentico CMS.",
//               "Refactored Javascript code according to the SOLID principles."
//             ],
//             "image": "educo"
//           },
//           "wivi": {
//             "id": 8,
//             "ref": "wivi",
//             "company": "Wivi Vision",
//             "city": "Barcelona",
//             "website": "https://wivivision.com/",
//             "role": "Web Developer",
//             "dateStart": "Oct 2018",
//             "dateEnd": "Apr 2019",
//             "techStack": "",
//             "description": "Due to a confidentiality agreement, it is not allowed to me to show publicly any description of any task nor technology during my time in this startup.",
//             "tasks": [],
//             "image": "wivi"
//           },
//           "planeta": {
//             "id": 9,
//             "ref": "planeta",
//             "company": "Grupo Planeta",
//             "city": "Barcelona",
//             "website": "https://www.planeta.es/en/learning",
//             "role": "Web Developer - Team Leader",
//             "dateStart": "Ago 2018",
//             "dateEnd": "Dec 2020",
//             "techStack": "ASP.NET, ASP.NET API, C #, HTML, CSS, Canvas, Javascript, jQuery, SQL, SSIS, IIS, CMS DotnetNuke",
//             "description": "Worked as a web developer for the group's learning and universities division, where it is managed from the courses' recruitment websites to enrollment in them and integration with learning platforms. The last 4 months I acted as team lead managing a team of 7 developers, 2 QA and 1 BA",
//             "tasks": [
//               "Integration of two brands having to migrate all the data from one brand (students, enrollments, courses ...) to the other to preserve their history",
//               "Solution for changing a conflicting NAS cabin where all the documentation generated during the enrollment process of students and courses was housed.",
//               "I modified the behavior of the two main applications to historicize the huge documentation that was generated in the enrollment process. In this way, the backup processes were simplified and the performance of the application was improved. In addition, standardizations were applied to document names.",
//               "I wrote an script in SQL to avoid a known exploit of the CMS of the websites that allows to create super users in the sites.",
//               "I participated as team leader in the different upgrade processes of 3 of the CMS where part of the websites ran, providing technical and functional help when required and carrying out the deployments.",
//               "I finished a critical project for the organization such as the migration of the Flash exercises/tests editor to HTML5, having to use canvas for the preview part of them.",
//               "As a team lead I participated in the planning and execution to change the payment provider of the applications due to a European regulatory change (3DS)."
//             ],
//             "image": "planeta"
//           }
//         },
//         "education": {
//           "paragraphs": [
//             "I received professional training in Software Development at Escola Politècnica Salessians Sarrià (2008 - 2010) and in Graphic Design at IES Esteve Terradasi illa (2005 - 2007).  ",
//             "I’ve received additional training as a systems programmer for Android (Master D, 2012) and Java Programming (Escola BIT, 2008 - 2009)."
//           ]
//         },
//         "misc": {
//           "books": [
//             {
//               "id": 1,
//               "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
//               "author": "Robert C. Martin"
//             },
//             {
//               "id": 2,
//               "title": "The Pragmatic Programmer: From Journeyman to Master",
//               "author": "Gary McLean Hall"
//             },
//             {
//               "id": 3,
//               "title": "Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles",
//               "author": "David Thomas"
//             },
//             {
//               "id": 4,
//               "title": "Test Driven Development: By Example",
//               "author": "Kent Beck"
//             },
//             {
//               "id": 5,
//               "title": "HEAD FIRST DESIGN PATTERNS",
//               "author": "Elisabeth Freeman, Eric Freeman, Bert Bates"
//             },
//             {
//               "id": 6,
//               "title": "The Software Craftsman: Professionalism, Pragmatism, Pride",
//               "author": "Robert C. Martin, Sandro Mancuso"
//             },
//             {
//               "id": 7,
//               "title": "Pro ASP.NET Web API Security",
//               "author": "Badrinarayanan Lakshmiraghavan"
//             },
//             {
//               "id": 8,
//               "title": "Working Effectively with Legacy Code (Robert C Martin)",
//               "author": "Michael C. Feathers"
//             }
//           ],
//           "conferences": [
//             {
//               "id": 1,
//               "name": "SOFTWARE CRAFTSMANSHIP LONDON",
//               "desc": "",
//               "date": "5-6 October 2017",
//               "URL": "http://sc-london.com/"
//             },
//             {
//               "id": 2,
//               "name": "CODENODE",
//               "desc": "Regularly attend events about different subjects at the Skill Matters community ",
//               "date": "-",
//               "URL": "https://skillsmatter.com/"
//             },
//             {
//               "id": 3,
//               "name": "SOFTWARE CRAFTSMANSHIP BARCELONA",
//               "desc": "Regularly attend events about different subjects with their Barcelona Meetup Group",
//               "date": "-",
//               "URL": "https://www.meetup.com/Barcelona-Software-Craftsmanship/events/"
//             },
//             {
//               "id": 4,
//               "name": "Codebar",
//               "desc": "Regularly attend events to mentor and teach programming like Javascript or SQL",
//               "date": "-",
//               "URL": "https://codebar.io/"
//             }
//           ]
//         },
//         "socialMedia": {
//           "links": [
//             {
//               "id": 1,
//               "name": "GitHub",
//               "URL": "http://github.com/apkouk",
//               "image": ""
//             },
//             {
//               "id": 2,
//               "name": "LinkedIn",
//               "URL": "https://www.linkedIn.com/in/pacorosa",
//               "image": ""
//             },
//             {
//               "id": 3,
//               "name": "GMail",
//               "URL": "https://www.linkedIn.com/in/pacorosa",
//               "image": ""
//             }
//           ]
//         },
//         "services": {
//           "title": "As a freelance consultant I offer various services to clients that can include:",
//           "serviceItems": [
//             {
//               "id": 2,
//               "title": "Database Scripting",
//               "desc": "Over the years I have worked with a number of databases, including extensive experience with Microsoft SQL Server and Oracle in designing tables and stored procedures. I can work with NoSql databases like CLoudantDb or MongoDb.",
//               "image": "database"
//             },
//             {
//               "id": 3,
//               "title": "System Integration",
//               "desc": "My experience includes extensive system integration work that often has required an ability to problem solve and work with ambiguous or vague documentation related to third-party software and APIs. I can navigate these areas for clients and develop a working solution.",
//               "image": "systemInt"
//             },
//             {
//               "id": 6,
//               "title": "Team Management",
//               "desc": "Throughout my career I have managed small teams that include onsite and offshore or distributed team members. I am also able to mentor junior team members and gain team buy-in for adhering to best practices.",
//               "image": "teamMan"
//             },
//             {
//               "id": 4,
//               "title": "Error Fixing/Code Quality",
//               "desc": "One of my strengths is the ability to analyze code to identify errors and areas for improvement for performance or maintainability.",
//               "image": "errorFix"
//             },
//             {
//               "id": 1,
//               "title": "Software Development",
//               "desc": "For ten years I have focused on software development work and I have built many solutions using C#, ASP.NET, ASP.NET Core, ASP.NET Web API, Entity Framework, Microsoft SQL Server, JQuery, Angular, Typescript HTML and CSS. I am able to contribute to the full lifecycle of software development projects from requirements through testing and deployment.",
//               "image": "softdev"
//             },
//             {
//               "id": 5,
//               "title": "Software Process Improvement",
//               "desc": "I am able to review your software development process in order to design and implement new processes and tools. This may include implementations of new software development methodologies (Agile, Scrum), source control solutions (Git, Team Foundation Server), and industry practices such as code reviews.",
//               "image": "softdevProc"
//             }
//           ]
//         }
//       },
//       "es": {
//         "intro": {
//           "paragraphs": [
//             "Mi nombre es Francisco pero todos me llaman Paco (un apodo común en español para Francisco)",
//             "Me gano la vida como desarrollador senior de software y he estado creando diversas soluciones de software para varios clientes y empleadores desde 2009. Realmente amo lo que hago, y lo que más me gusta son los desafíos de resolver problemas y mejorar mi capacidad de codificación. a diario. Me encanta ayudar a mis empleadores y clientes a mejorar su software y ver cómo los proyectos maduran y crecen. Me inspira ser parte de un equipo con un objetivo común y me despierto todos los días motivado para hacer las cosas. el trabajo me da una gran satisfacción, y la resolución de problemas es una fortaleza y algo que realmente disfruto. ",
//             "También me apasiona aprender, conocer nuevos lugares y conocer gente nueva. Tengo la suerte de que mi carrera en el desarrollo de software me haya brindado la oportunidad de hacer las tres cosas.",
//             "En mi tiempo libre disfruto tocar la guitarra española, leer un buen libro o cocinar una buena comida con amigos. No dudes en echar un vistazo a mi sitio web para aprender más sobre mí y mi trabajo.",
//             "¡Hasta la vista!"
//           ]
//         },
//         "techSkills": {
//           "paragraphs": [
//             "Me considero un desarrollador de pila completa capaz de contribuir a proyectos en toda la pila. La mayor parte de mi experiencia de desarrollo ha sido con tecnologías de Microsoft, incluida una amplia experiencia en el uso de C #, ASP.NET, Web Forms y SQL Server. Me siento bastante cómodo usando una serie de herramientas de Microsoft, incluidas varias versiones de Visual Studio, Entity Framework, Team Foundation Server y Git. ",
//             "Para proyectos de desarrollo web, he trabajado con HTML / CSS y JavaScript, incluidos varios marcos y bibliotecas populares como ASP.NET, Bootstrap, Angular, Slick y jQuery. También tengo experiencia en el uso de herramientas en la nube de Azure y Amazon Web Services.",
//             "A continuación se muestra una breve lista de habilidades de mi currículum."
//           ],
//           "devSkills": "C#, ASP.NET, ASP.NET Core, ASP.NET Web API, MVC, Entity Framework, EFCore, Telerik, Azure Functions, React, jQuery, JavaScript, Angular, Typescript, HTML, CSS, Bootstrap, PrimeNg, FontAwesome, Oracle, SQL, CloudantDb, CosmoDb",
//           "concepts": "Software development process (Agile, Scrum), relational databases, data modelling, object-oriented programming, TDD, MVC, n-tier architecture, SOLID principles",
//           "tools": "TFS, Git, GitHub, Visual Studio 2019, Visual Studio Code, MSSQL Mangement Studio, Azure, Amazon Web Services, Notepad++, Atom, JetBrains Resharper, Docker, Source Tree, Postman"
//         },
//         "personalSkills": {
//           "paragraphs": [
//             "Además de ofrecer un sólido conjunto de habilidades técnicas prácticas, creo que mis habilidades interpersonales y mi visión para los negocios son activos adicionales que ofrezco a mis clientes. Me siento bastante cómodo en roles de cara al cliente que requieren habilidades blandas para negociar entregables y administrar expectativas de los grupos de interés. ",
//             "A lo largo de mi carrera, he gestionado con éxito varios proyectos, me desempeñé como analista de negocios para recopilar los requisitos de los usuarios y redacté documentación detallada de los requisitos. También he gestionado equipos de desarrollo en el extranjero y puedo orientar recursos de nivel junior.",
//             "Mis habilidades analíticas son otra fortaleza, y regularmente he podido identificar y resolver ineficiencias dentro de los procesos de desarrollo que han mejorado la velocidad de entrega.",
//             "Soy un hablante nativo de español y catalán con una fluidez adicional en inglés."
//           ]
//         },
//         "experiences": {
//           "desktopPublisher": {
//             "id": 1,
//             "ref": "Diseñador/Maquetador",
//             "company": "Multiples compañias",
//             "website": "",
//             "city": "Barcelona",
//             "role": "Diseñador/Mauqetador",
//             "dateStart": "Dic 2006",
//             "dateEnd": "Ago 2008",
//             "techStack": "",
//             "description": "Trabajos de diseño realizados con Acrobat, Photoshop, Illustrator, InDesign, Quark, Freehand y ArtiosCad.",
//             "tasks": "",
//             "image": "graphic"
//           },
//           "netLife": {
//             "id": 2,
//             "ref": "netLife",
//             "company": "Net-Life S.L",
//             "city": "Barcelona",
//             "website": "",
//             "role": "Programador",
//             "dateStart": "Dec 2009",
//             "dateEnd": "May 2010",
//             "techStack": "",
//             "description": "Este fue mi primer trabajo como programador en prácticas construyendo páginas web usando C # (framework 3.5), ASP.NET, HTML, MS SQL Server y Visual Studio 2010.",
//             "tasks": "",
//             "image": "netlife"
//           },
//           "btgsa": {
//             "id": 3,
//             "ref": "btgsa",
//             "company": "T&G Think & Grow (now Aggity) ",
//             "city": "Barcelona",
//             "website": "http://btgsa.com",
//             "role": "Software Engineer",
//             "dateStart": "Jun 2010",
//             "dateEnd": "Mar 2014",
//             "techStack": "C#, Visual Studio, Oracle, MSSQL Server, TFS (Sharepoint integrated), ASP.NET, HTML, Gembase.",
//             "description": "At T&G (ahora Aggity) trabajé como software engineer focalizado en tareas de desarrollo utilizando el stack de Microsoft. También formé a usuarios finales entre otros.",
//             "tasks": [
//               "Desarrollé y modifiqué funciones del programa de acuerdo con las especificaciones del cliente utilizando Visual Studio 2010, C # y ASP.NET.",
//               "Diseñé e implementé bases de datos de MS SQL Server y Oracle que incluían consultas complejas, procedimientos almacenados y vistas para las migraciones de datos de los nuevos clientes.",
//               "Se corrigieron problemas de software e irregularidades en consultas o procedimientos almacenados (SQL)  y en la lógica de negocio en C #.",
//               "Escribí documentación funcional para nuevos clientes y capacité a nuevos usuarios."
//             ],
//             "image": "aggity"
//           },
//           "luxtripper": {
//             "id": 4,
//             "ref": "luxtripper",
//             "company": "Luxtripper LTD",
//             "city": "London",
//             "website": "http://luxtripper.co.uk",
//             "role": "Project Manager / Developer",
//             "dateStart": "Ene 2015 ",
//             "dateEnd": "Ago 2015",
//             "techStack": "",
//             "description": "Startup del sector lujo para encontrar destinos a nivel mundial según un algoritmo propio. Implementé la infraestructura mínima (servidores, backups, control de versiones) y procesos de un departamento de software dirigiendo un equipo de cuatro desarrolladores offshore en Pakistán.",
//             "tasks": [
//               "Gestioné varios proyectos internos. Desempeñé funciones  como analista de negocios para recopilar y escribir requisitos de software para los departamentos de comercio electrónico y marketing.",
//               "Diseñé e implementé integraciones con terceras API para datos de reserva de hoteles. Prototipé una función de reserva de vuelos.",
//               "Se implementó el software de control de versiones TFS y se establecieron procesos sobre el mismo (fusiones de ramas, despliegues, pruebas).",
//               "Implementación de servidores de producción, backup y test usando Rackspace y la plataforma Azure. Copias de seguridad automatizadas mediante scripts para que las bases de datos, los servidores de imágenes y el código se puedan guardar en el servicio Amazon S3.",
//               "Se resolvieron errores de codificación relacionados con SQL y lógica empresarial. Contribución a cambios cosméticos.",
//               "Implementé planes de prueba para front y back-end con TFS en línea.",
//               "Migré un blog de WordPress a un servidor IIS interno migrando los datos de MySQL a MS SQL Server."
//             ],
//             "image": "luxtripper"
//           },
//           "membra": {
//             "id": 5,
//             "ref": "membra",
//             "company": "Membership Engagement Services",
//             "city": "London",
//             "website": "http://membra.co.uk",
//             "role": "Web Developer",
//             "dateStart": "Ago 2015",
//             "dateEnd": "Ago 2016",
//             "techStack": "",
//             "description": "Se implementaron nuevas características y funcionalidades en un sitio utilizado por los hospitales del NHS para recopilar y presentar datos de encuestas a los usuarios (casi no tenían back-end).",
//             "tasks": [
//               "Se modificó sitio web para que fuera responsive y así mejorar la compatibilidad entre dispositivos. Se añadió una barra de progreso para mejorar UI / UX, entre otras funcionalidades.",
//               "Implementación de un mantenimiento para todo lo referente a las preguntas/respuestas de encuestas como Ordenar-Modificar-Eliminar (en lugar de hacer cambios directamente en la base de datos).",
//               "Realice múltiples tareas de bases de datos, incluidas tablas dinámicas, creación y diseño de tablas, procedimientos almacenados y optimización de consultas. Hice un scripting para automatizar la importación de datos que mejoró la velocidad de días a solo seis horas.",
//               "Crée una herramienta de administración de arquitectura de tres niveles que automatizaba y optimizaba las tareas de los administradores de proyectos. Desarrollada con Bootstrap, Telerik framework, ASP.NET Webforms, C # y MS SQL Server."
//             ],
//             "image": "mes"
//           },
//           "mission": {
//             "id": 6,
//             "ref": "mission",
//             "company": "Mission Communications",
//             "city": "London",
//             "website": "http://mission-communications.net",
//             "role": "Web Developer",
//             "dateStart": "Ago 2016",
//             "dateEnd": "Nov 2017",
//             "techStack": "",
//             "description": "En Mission Communications pude trabajar en varios proyectos de desarrollo web para clientes de diversas industrias y, en particular, hice contribuciones significativas al desarrollo de sightseeingpass.com.",
//             "tasks": [
//               "Creé un sitio web de comercio electrónico y contenido de noticias/blogs que se integró con Facebook, Instagram y Twitter. Usé Web Forms, C #, Bootstrap y jQuery.",
//               "Creé un sitio para un evento de administradores de propiedades privadas. El sitio estaba protegido con contraseña para mostrar detalles sobre propiedades disponibles (imágenes, descripción, planos, etc.). Se implementó una presentación de diapositivas utilizando la biblioteca Slick JavaScript y Typescript. El sitio permitía a los agentes inmobiliarios enviar correos electrónicos individuales o masivos a los registrantes (adjuntando pdfs con la info de la propiedad). Construido en Web Forms, C #, jQuery y Bootstrap.",
//               "Conversión de sitios web críticos para la empresa en aplicaciones web ASP.NET para mejorar la capacidad de depuración.",
//               "Se migraron varios sitios web a TFS para permitir a los desarrolladores trabajar localmente, reemplazando una solución FTP problemática.",
//               "Implementé nuevos puntos finales y corrección de errores en la API de la empresa. La API se desarrolló utilizando la arquitectura MVC con un Entity Framework que apunta a una base de datos de MS SQL Server."
//             ],
//             "sightseeingpass": [
//               "Añadí una nueva función en el back-end para sightseeingpass.com para administrar todas las imágenes relacionadas con una atracción turística. La función permitía a los usuarios cargar varias imágenes a la vez y ordenarlas mediante drag and drop. Se utilizaron Web Forms, C #, jQuery y SQL stored procedures para operaciones CRUD.",
//               "Desarrollé una nueva función en sightseeingpass.com para que los usuarios creasen itinerarios personalizados para los recorridos en autobús con la capacidad de seleccionar fechas y atracciones de una lista (utilizando datos de la API de la empresa), creando un mapa de Google con las rutas más eficientes utilizando el diseño aportado por la diseñadora gráfica. Lo hice con web forms (user control), Bootstrap, C #, JQuery, controladores ASP.NET y API internas.",
//               "Se creó una función utilizando la API de la empresa para comparar datos entre 3 bases de datos con alertas de cualquier diferencia. La solución permitió a los usuarios actualizar datos dispares a través de la base de datos del sitio web con la base de datos del sistema central con un solo clic y permitió que el equipo pudiera verificar bajo demanda la consistencia/coherencia entre los sistemas. Se utilizó MS SQL Server, API interna y C #.",
//               "Escribí pruebas unitarias para validar la reescritura de URL y la precisión de los precios de venta al público (número de personas, tipo de entrega, tipo de tarjeta, etc.)."
//             ],
//             "image": "mission"
//           },
//           "educo": {
//             "id": 7,
//             "ref": "educo",
//             "company": "Educo ONG",
//             "city": "Barcelona",
//             "website": "https://www.educo.org/",
//             "role": "Web Developer",
//             "dateStart": "Mar 2018",
//             "dateEnd": "Ago 2018",
//             "techStack": "Kentico CMS, C#, SQL Server, Javascript",
//             "description": "ONG para velar y salvaguardar los derechos de la infancia. Estuve básicamente cubriendo una baja por maternidad ayudando en el incidental del aplicativo.",
//             "tasks": [
//               "Creé un componente de crowdfunding en Kentico CMS integrado con los sistemas de pago Redsys y Paypal. Usé componentes C #, Javascript, HTML, CSS y Kentico.",
//               "Corrección de bugs en el sitio web comercial, también en Kentico CMS.",
//               "Código Javascript refactorizado de acuerdo con los principios SOLID."
//             ],
//             "image": "educo"
//           },
//           "wivi": {
//             "id": 8,
//             "ref": "wivi",
//             "company": "Wivi Vision",
//             "city": "Barcelona",
//             "website": "https://wivivision.com/",
//             "role": "Web Developer",
//             "dateStart": "Oct 2018",
//             "dateEnd": "Abr 2019",
//             "techStack": "",
//             "description": "Debido a un acuerdo de confidencialidad no se me permite mostrar públicamente ninguna descripción de ninguna tarea ni tecnología durante mi tiempo en esta startup.",
//             "tasks": [],
//             "image": "wivi"
//           },
//           "planeta": {
//             "id": 9,
//             "ref": "planeta",
//             "company": "Grupo Planeta",
//             "city": "Barcelona",
//             "website": "https://www.planeta.es/en/learning",
//             "role": "Web Developer - Team Leader",
//             "dateStart": "Ago 2018",
//             "dateEnd": "Dic 2020",
//             "techStack": "ASP.NET, ASP.NET API, C #, HTML, CSS, Canvas, Javascript, jQuery, SQL, SSIS, IIS, CMS DotnetNuke",
//             "description": "Trabajos como desarrollador web para la división de formación y universidades del grupo donde se gestiona desde las webs de captación de los cursos hasta la matriculación en los mismos y la integración con las plataformas de aprendizaje. Los últimos 4 meses actué como team lead gestionando un equipo de 6 desarrolladores, 2 QA y 1 BA.",
//             "tasks": [
//               "Integración de dos marcas debiendo migrar todos los datos de una marca (alumnos, matrículas, cursos…) hacia la otra para preservar el histórico de las mismas.",
//               "Solución para cambio de cabina NAS conflictiva donde se alojaba toda la documentación que se generaba durante el proceso de matriculación de los alumnos y de los cursos.",
//               "Modifiqué el comportamiento de los dos aplicativos principales para historificar la ingente documentación que se generaba en el proceso de negocio. Se simplificó de esta manera los procesos de backups de los mismos y se mejoró el rendimiento en la aplicación. Además se aplicaron normalizaciones a los nombres de documentos.",
//               "Creación de un script en SQL para evitar un exploit conocido del CMS de los sitios web que permite crear superusuarios en los sites.",
//               "Participé como team leader en los diferentes procesos de upgrade de 3 de los CMS donde corrían una parte de los sitios web, aportando ayuda técnica y funcional cuando se requería y llevando a cabo los despliegues.",
//               "Acabé proyecto crítico para la organización como  la migración del editor de ejercicios/pruebas de Flash a HTML5, teniendo que utilizar canvas para la parte de preview de los mismos.",
//               "Como team lead participé en la planificación y ejecución para cambiar el proveedor de pagos de los aplicativos debido a un cambio normativo europeo (3DS)."
//             ],
//             "image": "planeta"
//           }
//         },
//         "education": {
//           "paragraphs": [
//             "Técnico superior en desarrollo de aplicaciones informáticas Escola Politècnica Salessians Sarrià - BCN(2008 - 2010)",
//             "Técnico superior en Producción Editorial IES Esteve Terradasi illa - BCN(2005 - 2007)"
//           ]
//         },
//         "misc": {
//           "books": [
//             {
//               "id": 1,
//               "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
//               "author": "Robert C. Martin"
//             },
//             {
//               "id": 2,
//               "title": "The Pragmatic Programmer: From Journeyman to Master",
//               "author": "Gary McLean Hall"
//             },
//             {
//               "id": 3,
//               "title": "Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles",
//               "author": "David Thomas"
//             },
//             {
//               "id": 4,
//               "title": "Test Driven Development: By Example",
//               "author": "Kent Beck"
//             },
//             {
//               "id": 5,
//               "title": "HEAD FIRST DESIGN PATTERNS",
//               "author": "Elisabeth Freeman, Eric Freeman, Bert Bates"
//             },
//             {
//               "id": 6,
//               "title": "The Software Craftsman: Professionalism, Pragmatism, Pride",
//               "author": "Robert C. Martin, Sandro Mancuso"
//             },
//             {
//               "id": 7,
//               "title": "Pro ASP.NET Web API Security",
//               "author": "Badrinarayanan Lakshmiraghavan"
//             },
//             {
//               "id": 8,
//               "title": "Working Effectively with Legacy Code (Robert C Martin)",
//               "author": "Michael C. Feathers"
//             }
//           ],
//           "conferences": [
//             {
//               "id": 1,
//               "name": "SOFTWARE CRAFTSMANSHIP LONDON",
//               "desc": "",
//               "date": "5-6 October 2017",
//               "URL": "http://sc-london.com/"
//             },
//             {
//               "id": 2,
//               "name": "CODENODE",
//               "desc": "Cuando el tiempo lo permite atiendo a eventos y workshops sobre diferentes materias (el de las promises en javasript estuvo muy bien, por ejemplo)",
//               "date": "-",
//               "URL": "https://skillsmatter.com/"
//             },
//             {
//               "id": 3,
//               "name": "SOFTWARE CRAFTSMANSHIP BARCELONA",
//               "desc": "Sigo lo eventos del Barcelona Meetup Group",
//               "date": "-",
//               "URL": "https://www.meetup.com/Barcelona-Software-Craftsmanship/events/"
//             },
//             {
//               "id": 4,
//               "name": "Codebar",
//               "desc": "Actué como mentor en sus eventos para enseñar programación con javascript o SQL",
//               "date": "-",
//               "URL": "https://codebar.io/"
//             }
//           ]
//         },
//         "socialMedia": {
//           "links": [
//             {
//               "id": 1,
//               "name": "GitHub",
//               "URL": "http://github.com/apkouk",
//               "image": ""
//             },
//             {
//               "id": 2,
//               "name": "LinkedIn",
//               "URL": "https://www.linkedIn.com/in/pacorosa",
//               "image": ""
//             },
//             {
//               "id": 3,
//               "name": "GMail",
//               "URL": "https://www.linkedIn.com/in/pacorosa",
//               "image": ""
//             }
//           ]
//         },
//         "services": {
//           "title": "Como consultor autónomo ofrezco varios servicios a los clientes que pueden incluir:",
//           "serviceItems": [
//             {
//               "id": 2,
//               "title": "Database Scripting",
//               "desc": "A lo largo de los años, he trabajado con varias bases de datos, incluida una amplia experiencia con Microsoft SQL Server y Oracle en el diseño de tablas y procedimientos almacenados. Puedo trabajar con bases de datos NoSql como CLoudantDb o MongoDb.",
//               "image": "database"
//             },
//             {
//               "id": 3,
//               "title": "System Integration",
//               "desc": "Mi experiencia incluye un extenso trabajo de integración de sistemas que a menudo ha requerido la capacidad de resolver problemas y trabajar con documentación ambigua o vaga relacionada con software y API de terceros. Puedo navegar por estas áreas para los clientes y desarrollar una solución funcional.",
//               "image": "systemInt"
//             },
//             {
//               "id": 6,
//               "title": "Team Management",
//               "desc": "A lo largo de mi carrera, he dirigido pequeños equipos que incluyen miembros del equipo en el sitio y en el extranjero o distribuidos. También puedo orientar a los miembros del equipo junior y obtener la aceptación del equipo para que se adhieran a las mejores prácticas.",
//               "image": "teamMan"
//             },
//             {
//               "id": 4,
//               "title": "Error Fixing/Code Quality",
//               "desc": "Uno de mis puntos fuertes es la capacidad de analizar código para identificar errores y áreas de mejora para el rendimiento o la mantenibilidad.",
//               "image": "errorFix"
//             },
//             {
//               "id": 1,
//               "title": "Software Development",
//               "desc": "Durante diez años me he centrado en el trabajo de desarrollo de software y he creado muchas soluciones utilizando C #, ASP.NET, ASP.NET Core, ASP.NET Web API, Entity Framework, Microsoft SQL Server, JQuery, Angular, Typecript HTML y CSS. Puedo contribuir al ciclo de vida completo de los proyectos de desarrollo de software desde los requisitos hasta las pruebas y la implementación.",
//               "image": "softdev"
//             },
//             {
//               "id": 5,
//               "title": "Software Process Improvement",
//               "desc": "Puedo revisar su proceso de desarrollo de software para diseñar e implementar nuevos procesos y herramientas. Esto puede incluir implementaciones de nuevas metodologías de desarrollo de software (Agile, Scrum), soluciones de control de fuente (Git, Team Foundation Server) y prácticas de la industria como revisiones de código.",
//               "image": "softdevProc"
//             }
//           ]
//         }
//       },
//       "ca": {
//         "intro": {
//           "paragraphs": [
//             "El meu nom és Francisco, però tothom em diu Paco (un sobrenom comú en francès de Francisco).",
//             "Em guanyo la vida com a desenvolupador de programari sènior i he estat construint diverses solucions de programari per a diversos clients i empresaris des del 2009. M'encanta el que faig i el que més m'agrada són els reptes de resoldre problemes i millorar la meva capacitat de codificació diàriament. M'encanta ajudar els meus empresaris i clients a millorar el seu programari i veure com els projectes maduren i creixen. M'inspiro formar part d'un equip amb un objectiu comú i em llevo cada dia motivat per fer les coses. Això el treball em proporciona una gran satisfacció i la resolució de problemes és un punt fort i realment m’agrada. ",
//             "També m'apassiona aprendre, veure llocs nous i conèixer gent nova. Tinc la sort que la meva carrera en el desenvolupament de programari m'hagi donat l'oportunitat de fer els tres.",
//             "Durant el meu temps lliure, gaudeixo tocant la guitarra espanyola, llegint un bon llibre o cuinant un bon àpat amb els amics. No dubteu a fer una ullada al meu lloc web per obtenir més informació sobre mi i la meva feina.",
//             "A reveure!"
//           ]
//         },
//         "techSkills": {
//           "paragraphs": [
//             "Em considero un full-stack developer complet capaç de contribuir a projectes en totes les seves vessants. La majoria de la meva experiència de desenvolupament ha estat amb tecnologies de Microsoft, inclosa l'experiència profunda utilitzant C #, ASP.NET, Web Forms i SQL Server. Estic molt còmode diverses eines de Microsoft, incloses diverses versions de Visual Studio, Entity Framework, Team Foundation Server i Git. ",
//             "Per a projectes de desenvolupament web, he treballat amb HTML / CSS i JavaScript, inclosos diversos marcs i biblioteques populars, com ara ASP.NET, Bootstrap, Angular, Slick i jQuery. També tinc experiència utilitzant eines al núvol d'Azure i Amazon Web Services.",
//             "A continuació es mostra una breu llista d'habilitats del meu currículum."
//           ],
//           "devSkills": "C#, ASP.NET, ASP.NET Core, ASP.NET Web API, MVC, Entity Framework, EFCore, Telerik, Azure Functions, React, jQuery, JavaScript, Angular, Typescript, HTML, CSS, Bootstrap, PrimeNg, FontAwesome, Oracle, SQL, CloudantDb, CosmoDb",
//           "concepts": "Software development process (Agile, Scrum), relational databases, data modelling, object-oriented programming, TDD, MVC, n-tier architecture, SOLID principles",
//           "tools": "TFS, Git, GitHub, Visual Studio 2019, Visual Studio Code, MSSQL Mangement Studio, Azure, Amazon Web Services, Notepad++, Atom, JetBrains Resharper, Docker, Source Tree, Postman"
//         },
//         "personalSkills": {
//           "paragraphs": [
//             "A més d'oferir un conjunt robust d'habilitats tècniques pràctiques, crec que les meves habilitats interpersonals i la meva visió empresarial són actius addicionals que ofereixo als meus clients. Estic bastant còmode amb els rols que afronten els clients que requereixen habilitats suaus en la negociació de lliuraments i la gestió expectatives dels grups d'interès. ",
//             "Al llarg de la meva carrera professional, he gestionat amb èxit diversos projectes, he realitzat analistes empresarials per reunir els requisits dels usuaris i he escrit documentació detallada sobre els requisits. També he gestionat equips de desenvolupament offshore i sóc capaç de fer de tutor de recursos de nivell júnior.",
//             "Les meves habilitats analítiques són un altre dels punts forts i he estat capaç d'identificar i resoldre regularment les ineficiències dels processos de desenvolupament que han millorat la velocitat de lliurament.",
//             "Sóc parlant nadiu de castellà i català amb una fluïdesa addicional en anglès."
//           ]
//         },
//         "experiences": {
//           "desktopPublisher": {
//             "id": 1,
//             "ref": "desktopPublisher",
//             "company": "Multiples companyies",
//             "website": "",
//             "city": "Barcelona",
//             "role": "Dissenyador/Maquetador",
//             "dateStart": "Dec 2006",
//             "dateEnd": "Ago 2008",
//             "techStack": "",
//             "description": "Abans d'entrar en el món de la informàtica vaig treballar com a dissenyador i maquetador per varies empreses a l'àrea de Barcelona utilizant majorment Acrobat, Photoshop, Illustrator, InDesign, Quark, Freehand, and ArtiosCad.",
//             "tasks": "",
//             "image": "graphic"
//           },
//           "netLife": {
//             "id": 2,
//             "ref": "netLife",
//             "company": "Net-Life S.L",
//             "city": "Barcelona",
//             "website": "",
//             "role": "Programmer",
//             "dateStart": "Dec 2009",
//             "dateEnd": "Mai 2010",
//             "techStack": "",
//             "description": "Aquest va ser el meu primer treball en pràctiques com a programador.",
//             "tasks": "Vaig escriure pàgines web fent servir C # (framework 3.5), ASP.NET, SOAP Web Services, HTML, CSS, MS SQL Server, Oracle i Visual Studio 2010.",
//             "image": "netlife"
//           },
//           "btgsa": {
//             "id": 3,
//             "ref": "btgsa",
//             "company": "T&G Think & Grow (now Aggity) ",
//             "city": "Barcelona",
//             "website": "http://btgsa.com",
//             "role": "Software Engineer",
//             "dateStart": "Jun 2010",
//             "dateEnd": "Mar 2014",
//             "techStack": "C#, Visual Studio, Oracle, MSSQL Server, TFS (Sharepoint integrated), ASP.NET, HTML, Gembase.",
//             "description": "At T&G (ara Aggity) vaig treballar com a software engineer focalitzat en tasques de desenvolupament utilitzant stack Microsoft. També vaig donar formació als usuaris finals entre altres.",
//             "tasks": [
//               "Vaig desenvolupar i vaig modificar funcions de el programa d'acord amb les especificacions de client utilitzant Visual Studio 2010, C # i ASP.NET.",
//               "Vaig dissenyar i vaig implementar bases de dades de MS SQL Server i Oracle que incloïen consultes complexes, procediments emmagatzemats i vistes per a les migracions de dades dels nous clients.",
//               "Es van corregir problemes de programari i irregularitats en consultes o procediments emmagatzemats (SQL) i en la lògica de negoci en C #.",
//               "Vaig escriure documentació funcional per a nous clients i capacitar a nous usuaris."
//             ],
//             "image": "aggity"
//           },
//           "luxtripper": {
//             "id": 4,
//             "ref": "luxtripper",
//             "company": "Luxtripper LTD",
//             "city": "London",
//             "website": "http://luxtripper.co.uk",
//             "role": "Project Manager / Developer",
//             "dateStart": "Gen 2015 ",
//             "dateEnd": "Ago 2015",
//             "techStack": "",
//             "description": "Startup del sector luxe per trobar destinacions a nivell mundial segons un algoritme propi. Vaig crear la infraestructura mínima (servidors, backups, control de versions) i processos d'un departament de programari dirigint un equip de quatre desenvolupadors offshore al Pakistan.",
//             "tasks": [
//               "Vaig gestionar diversos projectes interns. Vaig exercir funcions com a analista de negoci per recopilar i escriure requisits de programari per als departaments de comerç electrònic i màrqueting.",
//               "Vaig dissenyar i vaig implementar integracions amb terceres API per a dades de reserves d'hotel. ProtoVaig prototipar una funció de reserva de vols.",
//               "Vaig dirigir un equip de quatre desenvolupadors offshore al Pakistan.",
//               "Es va implementar el programari de control de versions TFS i es van establir processos sobre el mateix (fusions de branques, desplegaments, proves).",
//               "Implementació de servidors de producció, backup i test usant Rackspace i la plataforma Azure. Còpies de seguretat automatitzades mitjançant scripts perquè les bases de dades, els servidors d'imatges i el codi es puguin guardar al servei Amazon S3.",
//               "Es van resoldre errors de codificació relacionats amb SQL i lògica de  negoci. Contribució a canvis cosmètics.",
//               "Vaig escriure plans de prova per front i back-end amb TFS en línia.",
//               "Vaig migrar un bloc de WordPress a un servidor IIS intern migrant les dades de MySQL a MS SQL Server."
//             ],
//             "image": "luxtripper"
//           },
//           "membra": {
//             "id": 5,
//             "ref": "membra",
//             "company": "Membership Engagement Services",
//             "city": "London",
//             "website": "http://membra.co.uk",
//             "role": "Web Developer",
//             "dateStart": "Ago 2015",
//             "dateEnd": "Ago 2016",
//             "techStack": "",
//             "description": "Es van implementar noves característiques i funcionalitats en un lloc utilitzat pels hospitals de l'NHS per recopilar i presentar dades d'enquestes als usuaris (gairebé no tenien back-end).",
//             "tasks": [
//               "Es va modificar el lloc web perquè fos responsive i així millorar la compatibilitat entre dispositius. Es va afegir una barra de progrés per millorar la UI/UX, entre d'altres funcionalitats.",
//               "Implementació d'un manteniment per tot el referent a les preguntes/respostes d'enquestes com Ordenar-Modificar-Eliminar (en lloc de fer canvis directament a la base de dades).",
//               "Múltiples tasques de bases de dades, incloses taules dinàmiques, creació i disseny de taules, procediments emmagatzemats i optimització de consultes. Vaig fer un scripting per automatitzar la importació de dades que va millorar la velocitat de dies a només sis hores.",
//               "Vaig crear una eina d'administració d'arquitectura de tres nivells que automatitzava i optimitzava les tasques dels administradors de projectes. Desenvolupada amb Bootstrap, Telerik framework, ASP.NET WebForms, C # i MS SQL Server."
//             ],
//             "image": "mes"
//           },
//           "mission": {
//             "id": 6,
//             "ref": "mission",
//             "company": "Mission Communications",
//             "city": "London",
//             "website": "http://mission-communications.net",
//             "role": "Web Developer",
//             "dateStart": "Ago 2016",
//             "dateEnd": "Nov 2017",
//             "techStack": "",
//             "description": "A Mission Communications vaig poder treballar en diversos projectes de desenvolupament web per a clients de diverses indústries i, en particular, vaig fer contribucions significatives a el desenvolupament de sightseeingpass.com.",
//             "tasks": [
//               "Vaig crear un lloc web de comerç electrònic i contingut de notícies/blog que es va integrar amb Facebook, Instagram i Twitter. Vaig fer servir Web Forms, C #, Bootstrap i jQuery.",
//               "Vaig crear un lloc per a un esdeveniment d'administradors de propietats privades. Aquest lloc protegit amb contrasenya era per mostrar detalls sobre propietats disponibles (imatges, vista general, plànols, etc.). Es va implementar una presentació de diapositives utilitzant la biblioteca Slick JavaScript i Typescript. El lloc permetia als agents immobiliaris enviar correus electrònics individuals o massius als registrants (adjuntant pdfs amb la info de la propietat). Construït en Web Forms, C #, jQuery i Bootstrap.",
//               "Conversió de llocs web crítics per a l'empresa en aplicacions web ASP.NET per millorar la capacitat de depuració.",
//               "Es van migrar diversos llocs web a TFS per permetre als desenvolupadors treballar localment, reemplaçant una solució FTP problemàtica.",
//               "Vaig implementar nous punts finals i correcció d'errors en l'API de l'empresa. L'API es va desenvolupar utilitzant l'arquitectura MVC amb un Entity Framework que apuntava a una base de dades de MS SQL Server.",
//               "Codi refractoritzat segons els principis SOLID."
//             ],
//             "sightseeingpass": [
//               "Vaig afegir una nova funció al back-end per sightseeingpass.com per administrar totes les imatges relacionades amb una atracció turística. La funció permetia als usuaris carregar diverses imatges a l’hora i ordenar-les mitjançant drag and drop. Es van utilitzar Web Forms, C #, jQuery i SQL stored procedures per a operacions CRUD.",
//               "Vaig desenvolupar una nova funció en sightseeingpass.com perquè els usuaris creessin itineraris personalitzats per als recorreguts amb autobús amb la capacitat de seleccionar dates i atraccions d'una llista (utilitzant dades de l'API de l'empresa), creant un mapa de Google amb les rutes més eficients utilitzant el disseny proveït per la dissenyadora gràfica. Ho vaig fer amb web forms (user control), Bootstrap, C #, JQuery, controladors ASP.NET i API internes.",
//               "Es va crear una funció utilitzant la API de l'empresa per comparar dades entre sistemes amb alertes de qualsevol diferència. La solució va permetre als usuaris actualitzar dades dispars a través de la base de dades del lloc web amb la base de dades de sistema central amb un sol clic i va permetre que l'equip pogués verificar sota demanda la consistència/coherència entre els sistemes. Es va utilitzar MS SQL Server, API interna i C #.",
//               "Vaig escriure proves unitàries per validar la reescriptura d'URL i la precisió dels preus de venda a el públic (nombre de persones, tipus de lliurament, tipus de targeta, etc.)."
//             ],
//             "image": "mission"
//           },
//           "educo": {
//             "id": 7,
//             "ref": "educo",
//             "company": "Educo ONG",
//             "city": "Barcelona",
//             "website": "https://www.educo.org/",
//             "role": "Web Developer",
//             "dateStart": "Mar 2018",
//             "dateEnd": "Ago 2018",
//             "techStack": "Kentico CMS, C#, SQL Server, Javascript",
//             "description": "ONG per vetllar i salvaguardar els drets de la infància. Vaig estar bàsicament cobrint una baixa per maternitat ajudant en el incidental de l'aplicatiu.",
//             "tasks": [
//               "Vaig crear un component de crowdfunding a Kentico CMS integrat amb els sistemes de pagament Redsys i Paypal. Vaig fer servir components C #, Javascript, HTML, CSS i Kentico.",
//               "Correcció de bugs en el lloc web comercial, també en Kentico CMS.",
//               "Codi Javascript refactorizado d'acord amb els principis SOLID."            
//             ],
//             "image": "educo"
//           },
//           "wivi": {
//             "id": 8,
//             "ref": "wivi",
//             "company": "Wivi Vision",
//             "city": "Barcelona",
//             "website": "https://wivivision.com/",
//             "role": "Web Developer",
//             "dateStart": "Oct 2018",
//             "dateEnd": "Abr 2019",
//             "techStack": "",
//             "description": "A causa d'un acord de confidencialitat no es em permet mostrar públicament cap descripció de cap tasca ni tecnologia durant el meu temps en aquesta startup.",
//             "tasks": [],
//             "image": "wivi"
//           },
//           "planeta": {
//             "id": 9,
//             "ref": "planeta",
//             "company": "Grupo Planeta",
//             "city": "Barcelona",
//             "website": "https://www.planeta.es/en/learning",
//             "role": "Web Developer - Team Leader",
//             "dateStart": "Ago 2018",
//             "dateEnd": "Dec 2020",
//             "techStack": "ASP.NET, ASP.NET API, C #, HTML, CSS, Canvas, Javascript, jQuery, SQL, SSIS, IIS, CMS DotnetNuke",
//             "description": "Treballs com a desenvolupador web per a la divisió de formació i universitats del grup on es gestiona des de les webs de captació dels cursos fins a la matriculació en els mateixos i la integració amb les plataformes d'aprenentatge. Els últims 4 mesos vaig actuar com team lead gestionant 6 desenvolupadors i un QA tester.",
//             "tasks": [
//               "Integració de dues marques migrant totes les dades d'una marca (alumnes, matrícules, cursos...) cap a l'altra per preservar l'històric de les mateixes.",
//               "Solució per a canvi de cabina NAS conflictiva on s'allotjava tota la documentació que es genera durant el procés de matriculació dels alumnes i dels cursos.",
//               "Vaig modificar el comportament dels dos aplicatius principals per historificar la ingent documentació que es genera en el procés de matriculació. Es van simplificar d'aquesta manera els processos de còpies de seguretat i es va millorar el rendiment de l'aplicació. A més es van aplicar normalitzacions els noms de documents.",
//               "Creació d'un script en SQL per evitar un exploit conegut del CMS dels llocs web que permet crear superusuaris en els sites.",
//               "Vaig participar com team leader en els diferents upgrades de 3 dels CMS on corrien una part dels llocs web, aportant ajuda tècnica i funcional quan es requeria i portant a terme els desplegaments.",
//               "Vaig acabar projecte crític per a l'organització com la migració de l'editor d'exercicis/proves de Flash a HTML5, havent d'utilitzar canvas per la part de preview.",
//               "Com team lead vaig participar en la planificació i execució per canviar el proveïdor de pagaments dels aplicatius a causa d'un canvi normatiu europeu (3DS)."            
//             ],
//             "image": "planeta"
//           }
//         },
//         "education": {
//           "paragraphs": [
//             "Tècnic superior en Desenvolupament d’Aplicacions Informàtiques Escola Politècnica Salessians Sarrià - BCN(2008 - 2010)",
//             "Tècnic superior en Producció Editorial IES Esteve Terradasi illa - BCN(2005 - 2007)"
//           ]
//         },
//         "misc": {
//           "books": [
//             {
//               "id": 1,
//               "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
//               "author": "Robert C. Martin"
//             },
//             {
//               "id": 2,
//               "title": "The Pragmatic Programmer: From Journeyman to Master",
//               "author": "Gary McLean Hall"
//             },
//             {
//               "id": 3,
//               "title": "Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles",
//               "author": "David Thomas"
//             },
//             {
//               "id": 4,
//               "title": "Test Driven Development: By Example",
//               "author": "Kent Beck"
//             },
//             {
//               "id": 5,
//               "title": "HEAD FIRST DESIGN PATTERNS",
//               "author": "Elisabeth Freeman, Eric Freeman, Bert Bates"
//             },
//             {
//               "id": 6,
//               "title": "The Software Craftsman: Professionalism, Pragmatism, Pride",
//               "author": "Robert C. Martin, Sandro Mancuso"
//             },
//             {
//               "id": 7,
//               "title": "Pro ASP.NET Web API Security",
//               "author": "Badrinarayanan Lakshmiraghavan"
//             },
//             {
//               "id": 8,
//               "title": "Working Effectively with Legacy Code (Robert C Martin)",
//               "author": "Michael C. Feathers"
//             }
//           ],
//           "conferences": [
//             {
//               "id": 1,
//               "name": "SOFTWARE CRAFTSMANSHIP LONDON",
//               "desc": "",
//               "date": "5-6 October 2017",
//               "URL": "http://sc-london.com/"
//             },
//             {
//               "id": 2,
//               "name": "CODENODE",
//               "desc": "Quan el temps m'ho permet intento atendre a events sobre diferents matèries",
//               "date": "-",
//               "URL": "https://skillsmatter.com/"
//             },
//             {
//               "id": 3,
//               "name": "SOFTWARE CRAFTSMANSHIP BARCELONA",
//               "desc": "Segeuixo de prop els events del seu Barcelona Meetup Group",
//               "date": "-",
//               "URL": "https://www.meetup.com/Barcelona-Software-Craftsmanship/events/"
//             },
//             {
//               "id": 4,
//               "name": "Codebar",
//               "desc": "Vaig participar com a mentor en els seus events per ensenyar javascript i SQL",
//               "date": "-",
//               "URL": "https://codebar.io/"
//             }
//           ]
//         },
//         "socialMedia": {
//           "links": [
//             {
//               "id": 1,
//               "name": "GitHub",
//               "URL": "http://github.com/apkouk",
//               "image": ""
//             },
//             {
//               "id": 2,
//               "name": "LinkedIn",
//               "URL": "https://www.linkedIn.com/in/pacorosa",
//               "image": ""
//             },
//             {
//               "id": 3,
//               "name": "GMail",
//               "URL": "https://www.linkedIn.com/in/pacorosa",
//               "image": ""
//             }
//           ]
//         },
//         "services": {
//           "title": "Com a consultor independent, ofereixo diversos serveis als clients que poden incloure:",
//           "serviceItems": [
//             {
//               "id": 2,
//               "title": "Database Scripting",
//               "desc": "Al llarg dels anys he treballat amb diverses bases de dades, inclosa una àmplia experiència amb Microsoft SQL Server i Oracle en el disseny de taules i procediments emmagatzemats. Puc treballar amb bases de dades NoSql com CLoudantDb o MongoDb.",
//               "image": "database"
//             },
//             {
//               "id": 3,
//               "title": "System Integration",
//               "desc": "La meva experiència inclou un ampli treball d'integració de sistemes que sovint ha requerit la capacitat de resoldre problemes i treballar amb documentació ambigua o vaga relacionada amb programes i API de tercers. Puc navegar per aquestes àrees per als clients i desenvolupar una solució de treball.",
//               "image": "systemInt"
//             },
//             {
//               "id": 6,
//               "title": "Team Management",
//               "desc": "Al llarg de la meva carrera he gestionat equips petits que inclouen membres d’equips presencials i offshore o distribuïts. També puc fer de mentor als membres de l’equip júnior i obtenir la incorporació de l’equip per complir les millors pràctiques.",
//               "image": "teamMan"
//             },
//             {
//               "id": 4,
//               "title": "Error Fixing/Code Quality",
//               "desc": "Un dels meus punts forts és la capacitat d’analitzar el codi per identificar els errors i les àrees de millora del rendiment o manteniment.",
//               "image": "errorFix"
//             },
//             {
//               "id": 1,
//               "title": "Software Development",
//               "desc": "Durant deu anys m’he centrat en el desenvolupament de programari i he creat moltes solucions mitjançant C #, ASP.NET, ASP.NET Core, ASP.NET Web API, Entity Framework, Microsoft SQL Server, JQuery, Angular, Typescript HTML i CSS. Puc contribuir al cicle de vida complet dels projectes de desenvolupament de programari, des dels requisits fins a les proves i el desplegament.",
//               "image": "softdev"
//             },
//             {
//               "id": 5,
//               "title": "Software Process Improvement",
//               "desc": "Puc revisar el vostre procés de desenvolupament de programari per dissenyar i implementar nous processos i eines. Això pot incloure implementacions de noves metodologies de desenvolupament de programari (Agile, Scrum), solucions de control de fonts (Git, Team Foundation Server) i pràctiques del sector, com ara revisions de codi.",
//               "image": "softdevProc"
//             }
//           ]
//         }
//       }
//     }
//   }

