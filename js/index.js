(function($) {
  $(function() {
    $("ul.tab_nav").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tab")
        .find("div.tab_content_item")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });

  $(function() {
    countTab = $("#tab-content").children().length;

    $("#tab-next").on("click", function() {
      currentTab = $("div.active").index() + 1;

      if (currentTab < countTab) {
        $(".active")
          .removeClass("active")
          .next()
          .addClass("active");
      }
    });

    $("#tab-prev").on("click", function() {
      currentTab = $("div.active").index() + 1;

      if (currentTab > '1') {     
        $(".active")
        .removeClass("active")
        .prev()
        .addClass("active");
      }
    });
  });

  $(function() {
    $("#calc-send").on("click", function() {
      $.getJSON("ajax.php", function(result){
        if (result.status === true) {
          data = '<span class="true">'+result.message+'</span>';
        } else {
          data = '<span class="false">'+result.message+'</span>';
        }

        console.log(data);
        $("#calc-data").html(data);
      });
    });
  });
})(jQuery);