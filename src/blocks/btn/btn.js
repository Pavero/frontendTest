$(".js-btn").click(function() {
  $.getJSON("../test.json", function(data) {
    $(".modal").fadeToggle("fast");
    if (data["status"] === true) {
      $(".modal").addClass("modal--success");
    } else {
      $(".modal").addClass("modal--error");
    }
    $(".modal__text").text(data["message"]);
  });
});

$(".js-modal-close").click(function() {
  $(".modal").fadeToggle("fast")
    .removeClass("modal--success")
    .removeClass("modal--error");
  $(".modal__text").text("");
});
