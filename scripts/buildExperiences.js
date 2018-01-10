function experience() {
  $("#closeInfo").click(function(){
    $(".experienceInfo").fadeOut();
    $(".experience").slideDown();
  });


  var experienceSection = $(".experience");
  $.each(textContent.experiences, function(i, experience) {
    var card = $("<a>", { id: experience.id, class: "col-sm-6 col-md-auto col-lg-4 card" });

    var cardContainer = $("<div>", { class: "col card-container" });
    var cardImageDiv = $("<div>", { class: "card-image" });
    var cardImage = $("<img>", { src: "src/images/" + experience.image, class: "cardImg" });
    cardImageDiv.append(cardImage);

    var cardTitle = $("<div>", { class: "card-title" });
    cardTitle.append("<h4>" + experience.company + "</h4>");

    var cardRole = $("<div>", { class: "card-role" });
    cardRole.append("<h5>" + experience.role + "</h5>");

    cardContainer.append(cardImageDiv);
    cardContainer.append(cardTitle);
    cardContainer.append(cardRole);
    card.append(cardContainer);

    card.click(function(){
    //  alert(this.getAttribute('id'));


      var experienceInfo = $(".experienceInfo");
      experienceSection.slideUp();
      experienceInfo.fadeIn();

    });

    experienceSection.append(card);
  });
}
