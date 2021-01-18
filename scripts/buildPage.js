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
function loadTextContent(lang) {
    if (lang == undefined)
        lang = "en";

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
    // $("#lang-select").val(lang);
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
    
    $("#lang-en").removeClass("lang-selected");
    $("#lang-ca").removeClass("lang-selected");
    $("#lang-es").removeClass("lang-selected");

    $("#lang-en").click(function () {
        loadTextContent("en");
        buildPage();
        $("#lang-en").addClass("lang-selected");
    });

    $("#lang-ca").click(function () {
        loadTextContent("ca");
        buildPage();
        $("#lang-ca").addClass("lang-selected");
    });

    $("#lang-es").click(function () {
        loadTextContent("es");
        buildPage();
        $("#lang-es").addClass("lang-selected");
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

var textContent = {}

