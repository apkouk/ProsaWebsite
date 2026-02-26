var contentSections = [".intro", ".techSkills", ".personalSkills", ".experience", ".education", ".services", ".misc", ".contact", ".footer"];

window.onclick = function (event) {
    if (event.target.id.indexOf("Container") > 0 || event.target.id == 'intro') {
        $(".experienceInfo").fadeOut();
    }
}

function buildPage() {
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
    option.text(textContent.services.optionMenu);

    option = $("#experienceOption");
    option.empty();
    option.text(textContent.experiences.optionMenu);

    option = $("#educationOption");
    option.empty();
    option.text(textContent.education.optionMenu);

    option = $("#miscOption");
    option.empty();
    option.text(textContent.misc.optionMenu);

    option = $("#contactOption");
    option.empty();
    option.text(textContent.socialMedia.optionMenu);

    option = $("#welcome");
    option.empty();
    option.text(textContent.intro.welcome);

    option = $("#btnwelcome");
    option.empty();
    option.text(textContent.intro.btnwelcome);

    // Section titles
    $("#techSkillsTitle").text(textContent.services.optionMenu);
    $("#experienceTitle").text(textContent.experiences.optionMenu);
    $("#educationTitle").text(textContent.education.optionMenu);
    $("#miscTitle").text(textContent.misc.optionMenu);
}

var textContent;
function loadTextContent(lang) {
    if (lang == undefined)
        lang = "en";

    // Remove selected class from all language buttons
    $("#lang-en").removeClass("lang-selected");
    $("#lang-ca").removeClass("lang-selected");
    $("#lang-es").removeClass("lang-selected");

    textContent = "";
    switch (lang) {
        case "en":
            textContent = textContent_EN;
            $("#lang-en").addClass("lang-selected");
            break;
        case "es":
            textContent = textContent_ES;
            $("#lang-es").addClass("lang-selected");
            break;
        case "ca":
            textContent = textContent_CA;
            $("#lang-ca").addClass("lang-selected");
            break;
    }
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

    $("#lang-en").click(function () {
        $(location).prop("href", window.location.href.replace(window.location,'')  + "?lang=en");               
    });

    $("#lang-ca").click(function () {
        $(location).prop("href", window.location.href.replace(window.location,'')  + "?lang=ca");        
    });

    $("#lang-es").click(function () {
        $(location).prop("href", window.location.href.replace(window.location,'')  + "?lang=es");        
    });
}

function loadCarrousel() {
    //$('.carrousel').unslick();
    $('.carrousel').slick({
        // prev arrow
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',

        // next arrow
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',

        // Enables auto play of slides
        autoplay: true,

        // Auto play change interval
        autoplaySpeed: 5000,

        // Current slide indicator dots
        dots: true,

        // Class for slide indicator dots container
        dotsClass: 'slick-dots',

        // Target containet to respond to
        respondTo: 'window',

        slidesToShow: 3,

        infinite: false,

        accessibility: true,

        initialSlide: 0,

        // Breakpoint triggered settings
        responsive: [
            {
                breakpoint: 1648,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 300,
                settings: "unslick" // destroys slick
            }]

    });

    let experiences = [];
    $.each(textContent.experiences, function (i, experience) {
        if (experience.company != undefined) {
            experiences.push(experience);
        }
    });

    $.each(experiences.sort(SortById), function (i, experience) {
        $(experience.slickitem).click(function () {
            buildExperienceInfo(experience);
        });
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
    techSkillsSection.append("</br><h3><b>" + textContent.techSkills.subTitle1 + "</b></h3>");
    techSkillsSection.append("<p>" + textContent.techSkills.devSkills + "</p></br>");
    techSkillsSection.append("<h3><b>" + textContent.techSkills.subTitle2 + "</b></h3>");
    techSkillsSection.append("<p>" + textContent.techSkills.concepts + "</p></br>");
    techSkillsSection.append("<h3><b>" + textContent.techSkills.subTitle3 + "</b></h3>");
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
    var educationSection = $(".education-grid");
    educationSection.empty();
    $.each(textContent.education.collection, function (i, item) {

        var education = $("<div>", { class: "educationChunk" });
        var imageExp = $("<img>", { src: "src/images/" + item.image + extensionImage, class: "educationimg", alt: item.image });
        education.append(imageExp);
        education.append("<p>" + item.center + ", " + item.date + "</p>");
        education.append("<b><a target=\"_blank\" rel=\"noopener noreferrer\" href='" + item.url + "' >" + item.title + "</a></b></br>");

        if (item.desc !== "") {
            education.append("<a target=\"_blank\" rel=\"noopener noreferrer\" href='" + item.descUrl + "' >" + item.desc + "</a></br>");
        }

        educationSection.append(education);
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
            class: "serviceImg",
            alt: service.image
        });

        serviceImageDiv.empty();
        serviceImageDiv.append(serviceImage);
        serviceItemContainer.empty();
        serviceItemContainer.append(serviceImageDiv);

        serviceItemContainer.append("<h4><b>" + service.title + "</b></h4>");
        serviceItemContainer.append("<p>" + service.desc + "</p>");
        serviceItem.append(serviceItemContainer);
    });
    servicesSection.append(serviceItem);

}

function misc() {
    var miscSection = $(".misc");
    miscSection.empty();
    miscSection.append("<h2>" + textContent.misc.title + "</h2><hr>");
    $.each(textContent.misc.books, function (i, book) {
        miscSection.append("<ul><li><p><cite>" + book.title + "</cite></br> " + book.author + "</p></li></ul>");
    });
    miscSection.append("</br>")
    miscSection.append("<h2>" + textContent.misc.optionMenu2 + "</h2><hr>");
    $.each(textContent.misc.conferences, function (i, conference) {
        miscSection.append("<h3>" + conference.name + "</h3>");
        if (conference.date !== "-")
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
        class: "img-circle",
        alt: "prosaWeb"
    });
    contactItem.append(contactImage);
    contactItem.append("<h3>Francisco Rosa</h3>");
    contactItem.append("<p>Barcelona +34 634 538 340</p>");

    contactSection.prepend(contactItem);

}

function resizingElement() {
    $(window).resize(function () {
        initSections();
    });
}


var textContent = {}

