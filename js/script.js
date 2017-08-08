
$(document).ready(function () {
  $(".calculate__button").on("click",getPrice);
  var tabs = initTabs("tabs");
  tabs.setTab(0);
  tipIcons();
});

function getPrice(){
  $.ajax({
    url: "/ajax.php",
    success: function (data) {
      var message = $(".message");
      message.html(data.message);
      if(data.status){
        message.removeClass("error");
        $.fancybox.open({
          type: "inline",
          src: "#msg"
        });
      } else {
        message.addClass("error");
        $.fancybox.open({
          type: "inline",
          src: "#msg"
        });
      }
    }
  });
}

function initTabs(tabsElementId){
  var tabsElement = $("#" + tabsElementId);
  var tabsBlock = tabsElement.find(".tabs__block")[0];
  var tabsContent = tabsElement.find(".tabs__content")[0];
  var tabsNav = tabsElement.find(".tabs__nav").find("a");
  var navId = 0;
  var tabId = 0;
  var tabsArrow = {
    next: tabsElement.find(".next"),
    prev: tabsElement.find(".prev")
  };
  $(tabsArrow.next[0]).on("click",function () {
    action.nextTab();
  });
  $(tabsArrow.prev[0]).on("click",function () {
    action.prevTab();
  });
  $(tabsNav).each(function () {
    var el = $(this);
    el.attr("data-tab-nav",navId++);
    el.on("click",function () {
      var navId = $(this).attr("data-tab-nav");
      action.setTab(navId);
    });
  });
  var action = {
    setTab: function (id) {
      tabId = id;
      var content;
      $(tabsContent).find("[data-tab]").each(function () {
        var el = $(this);
        if(el.attr("data-tab") == tabId) content = el.html();
      });
      $(tabsBlock).html(content);
      $(tabsNav).each(function () {
        var el = $(this);
        if(el.attr("data-tab-nav") == tabId) el.addClass("is-active");
        else el.removeClass("is-active");
      });
    },
    nextTab: function () {
      if(tabId < tabsNav.length - 1) this.setTab(++tabId);
      else this.setTab(0);
    },
    prevTab: function () {
      if(tabId > 0) this.setTab(--tabId);
      else this.setTab(tabsNav.length - 1);
    }
  };
  return action;
}

function tipIcons(){
  $(".tip").each(function () {
    var icon = "/img/" + $(this).attr("data-icon") + ".png";
    $(this).find(".tip__icon").css("backgroundImage","url('" + icon + "')");
  });
}
