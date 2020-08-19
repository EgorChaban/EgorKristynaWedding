$(function () {
  //========================================--------M-MENU--------===========================================
  let mLogo = $(".m-logo");
  let mClosed = $(".m-menu__element-img");
  let mMenu = $(".m-menu__wrap");

  function mMenuClosed() {
    //функция закрытия моб меню
    mMenu.animate(
      {
        width: "0vw",
        height: "0vh",
        left: "0%",
        top: "0%",
      },
      500
    );
    mLogo.fadeIn(700);
    $("body").toggleClass("no-scroll");
  }

  //открыть моб меню

  mLogo.on("click", function () {
    mMenu.animate(
      {
        width: "100vw",
        height: "100vh",
      },
      500
    );
    mLogo.fadeOut(500);
    $("body").toggleClass("no-scroll");
  });

  mClosed.on("click", function () {
    mMenuClosed(); //зыкрать
  });
  //=========================-----SCROLL---------===============
  //=============-----------------скролл на маленьком экране
  //invite
  $("#inviteId").click(function () {
    mMenuClosed();
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".invite").offset().top, // класс объекта к которому приезжаем
      },
      700 // Скорость прокрутки
    );
  });
  //timing
  $("#timingId").click(function () {
    mMenuClosed();
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".timing").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //place
  $("#placeId").click(function () {
    mMenuClosed();
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".place").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //guest
  $("#guestId").click(function () {
    mMenuClosed();
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".guest").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //danger
  $("#dangerId").click(function () {
    mMenuClosed();
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".impo").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //info
  $("#infoId").click(function () {
    mMenuClosed();
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".info").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //==============-------------скролл на большом экране
  //invite
  $("#invite").click(function () {
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".invite").offset().top, // класс объекта к которому приезжаем
      },
      700 // Скорость прокрутки
    );
  });
  //timing
  $("#timing").click(function () {
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".timing").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //place
  $("#place").click(function () {
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".place").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //guest
  $("#guest").click(function () {
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".guest").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //danger
  $("#danger").click(function () {
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".impo").offset().top, // класс объекта к которому приезжаем
      },
      900 // Скорость прокрутки
    );
  });
  //info
  $("#info").click(function () {
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".info").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
});
