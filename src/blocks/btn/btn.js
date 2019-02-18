$(".js-btn").click(function() {
  $.getJSON("../ajax.php", function(data) {
    $(".modal").fadeIn("fast");
    if (data["status"] === true) {
      $(".modal").addClass("modal--success");
    } else {
      $(".modal").addClass("modal--error");
    }
    $(".modal__text").text(data["message"]);
  });
});

$(".js-modal-close").click(function() {
  $(".modal").fadeOut("fast")
    .removeClass("modal--success")
    .removeClass("modal--error");
  $(".modal__text").text("");
});
