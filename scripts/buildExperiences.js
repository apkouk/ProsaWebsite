function experience() {
  var experienceSection = $(".experience");
  experienceSection.empty();

  let experiences = [];
  $.each(textContent.experiences, function (i, experience) {
    if (experience.company != undefined) {
    experiences.push(experience);
    }
  });

  $.each(experiences.sort(SortById), function (i, experience) {

    if (experience.company != undefined) {

      var card = $("<a>", { id: experience.id, class: "col-sm-6 col-md-auto col-lg-4 card" });

      var cardContainer = $("<div>", { id: experience.ref, class: "col card-container" });
      var cardImageDiv = $("<div>", { class: "card-image" });
      var cardImage = $("<img>", { src: "src/images/" + experience.image + extensionImage, class: "cardImg", alt: experience.image });
      cardImageDiv.append(cardImage);

      var cardTitle = $("<div>", { class: "card-title" });
      cardTitle.append("<h4>" + experience.company + "</h4>");

      var cardRole = $("<div>", { class: "card-role" });
      cardRole.append("<h5>" + experience.role + "</h5>");

      cardContainer.append(cardImageDiv);
      cardContainer.append(cardTitle);
      cardContainer.append(cardRole);
      card.append(cardContainer);

      card.click(function () {
        var experienceId = this.getAttribute('id');
        $.each(textContent.experiences, function (i, experience) {
          if (experience.id == experienceId) {
            buildExperienceInfo(experience);
            return;
          }
        });
      });
      experienceSection.append(card);
    }
  });
}

function SortById(a, b){
  var aId = a.id;
  var bId = b.id; 
  return ((aId > bId) ? -1 : ((aId < bId) ? 1 : 0));
}


function buildExperienceInfo(experience) {
  var experienceInfo = $(".experienceInfo");
  experienceInfo.empty();
  experienceInfo.append("<input id='closeInfo' type='image' src='src/images/close.png' />");

  var width = $(".experience").width();
  experienceInfo.css("margin", "0 auto");

  var expHeader = $("<div>", { class: "expHeader" });
  // expHeader.append("<h1>" + experience.company  +"</h1>");
  var imageExp = $("<img>", { src: "src/images/" + experience.image + extensionImage, class: "imgInfoExperience", alt: experience.image });
  expHeader.append(imageExp);

  // expHeader.append("<hr>");
  expHeader.append("<h2>" + experience.role + "</b>");
  expHeader.append("<h4>" + experience.city + ", " + experience.dateStart + "-" + experience.dateEnd + "</h4>");
  expHeader.append("<a href='" + experience.website + "'>" + experience.website + "</a></br>");
  expHeader.append("<hr>");
  expHeader.append("<p>" + experience.description + "</p>");
  experienceInfo.append(expHeader);

  if (experience.tasks.length > 0) {
    expHeader.append("<h2><b>Highlights</b></h2>");
    expHeader.append("<ul>");
    $.each(experience.tasks, function (i, task) {
      expHeader.append("<li>" + task + "</li>");
    });
    expHeader.append("</ul>");
  }

  if (experience.sightseeingpass !== undefined) {
    expHeader.append("<h2><b>Sightseeing Pass</b></h2>");
    expHeader.append("<ul>");
    $.each(experience.sightseeingpass, function (i, task) {
      expHeader.append("<li>" + task + "</li>");
    });
    expHeader.append("</ul>");
  }
  experienceInfo.fadeIn();

  $("#closeInfo").click(function () {
    $(".experienceInfo").fadeOut();
  });
};
