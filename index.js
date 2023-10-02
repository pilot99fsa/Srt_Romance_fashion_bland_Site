/* ↓スクロールするとヘッダーが出現 ページに入って5秒経つまで発火しない */

$(function () {
  setTimeout(function () {
    $(function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
        //画面横幅が768px以下のときの処理
        (function () {
          const fh = document.getElementById("fixed-header");
          window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
              fh.classList.add("is-show");
            } else {
              fh.classList.remove("is-show");
            }
          });
        })();
      } else {
        //画面横幅が769px以上のときの処理
        (function () {
          const fh = document.getElementById("fixed-header");
          window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
              fh.classList.add("is-show");
            } else {
              fh.classList.remove("is-show");
            }
          });
        })();
      }
    });
  }, 5000);
});
/* ↑スクロールするとヘッダーが出現 ページ入って5秒経つまで発火しない */

// $(function () {
//   $(".slick-slider").slick();
//   autoplay: true;
//   autoplaySpeed: 3000;
//   speed: 400;
// });

/* */

/* ↓コンテンツエリア及びモバイル版フッターのアコーディオンメニュー */

$(function () {
  // 親メニュー処理
  $(".acordion").click(function () {
    // メニュー表示/非表示
    $(this).next("ul").slideToggle("2000");
  });

  // 子メニュー処理
  $("li").click(function (e) {
    // メニュー表示/非表示
    $(this).children("ul").slideToggle("2000");
    e.stopPropagation();
  });
});

/* ↑コンテンツエリアのアコーディオンメニュー */

/* ↓ハンバーガーボタン */

window.onload = function () {
  const nav = document.getElementById("nav-wrapper");
  const hamburger = document.getElementById("js-hamburger");
  const blackBg = document.getElementById("js-black-bg");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
  blackBg.addEventListener("click", function () {
    nav.classList.remove("open");
  });
};
