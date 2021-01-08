$(function() {

    //ヘッダーアイコンをクリックすると、ページ最上部まで自動スクロールされる処理。
    $("#header-icon, #header-system-btn").on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    //ヘッダーアイコンをクリックすると、ページ最上部まで自動スクロールされる処理。

    //第２ヘッダーの各ボタンをクリックすると、指定の位置までページスライダーアニメーションを行う処理。
    $("#header2-rec-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-rec').offset().top });
    });
    $("#header2-audio-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-audio').offset().top });
    });
    $("#header2-stage-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-stage').offset().top });
    });
    $("#header2-lending-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-lending').offset().top });
    });
    $("#header2-original-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-original').offset().top });
    });
    //第２ヘッダーの各ボタンをクリックすると、指定の位置までページスライダーアニメーションを行う処理。

    //機材名をクリックした時にモーダルを表示する処理。
    $('.system-link-btn-1').on('click', function() {
        $('#system-pop-1').addClass('popup-content-active')
    });
    $('.system-link-btn-2').on('click', function() {
        $('#system-pop-2').addClass('popup-content-active')
    });
    $('.system-link-btn-3').on('click', function() {
        $('#system-pop-3').addClass('popup-content-active')
    });
    $('.system-link-btn-4').on('click', function() {
        $('#system-pop-4').addClass('popup-content-active')
    });
    $('.system-link-btn-5').on('click', function() {
        $('#system-pop-5').addClass('popup-content-active')
    });
    $('.system-link-btn-6').on('click', function() {
        $('#system-pop-6').addClass('popup-content-active')
    });
    $('.system-link-btn-7').on('click', function() {
        $('#system-pop-7').addClass('popup-content-active')
    });
    $('.system-link-btn-8').on('click', function() {
        $('#system-pop-8').addClass('popup-content-active')
    });
    $('.system-link-btn-9').on('click', function() {
        $('#system-pop-9').addClass('popup-content-active')
    });
    $('.system-link-btn-10').on('click', function() {
        $('#system-pop-10').addClass('popup-content-active')
    });
    $('.system-link-btn-11').on('click', function() {
        $('#system-pop-11').addClass('popup-content-active')
    });
    $('.system-link-btn-12').on('click', function() {
        $('#system-pop-12').addClass('popup-content-active')
    });
    $('.system-link-btn-13').on('click', function() {
        $('#system-pop-13').addClass('popup-content-active')
    });
    $('.system-link-btn-14').on('click', function() {
        $('#system-pop-14').addClass('popup-content-active')
    });
    $('.system-link-btn-15').on('click', function() {
        $('#system-pop-15').addClass('popup-content-active')
    });
    $('.system-link-btn-16').on('click', function() {
        $('#system-pop-16').addClass('popup-content-active')
    });
    $('.system-link-btn-17').on('click', function() {
        $('#system-pop-17').addClass('popup-content-active')
    });
    $('.system-link-btn-18').on('click', function() {
        $('#system-pop-18').addClass('popup-content-active')
    });
    $('.system-link-btn-19').on('click', function() {
        $('#system-pop-19').addClass('popup-content-active')
    });
    $('.system-link-btn-20').on('click', function() {
        $('#system-pop-20').addClass('popup-content-active')
    });
    $('.system-link-btn-21').on('click', function() {
        $('#system-pop-21').addClass('popup-content-active')
    });
    $('.system-link-btn-22').on('click', function() {
        $('#system-pop-22').addClass('popup-content-active')
    });
    $('.system-link-btn-23').on('click', function() {
        $('#system-pop-23').addClass('popup-content-active')
    });
    $('.system-link-btn-24').on('click', function() {
        $('#system-pop-24').addClass('popup-content-active')
    });
    $('.system-link-btn-25').on('click', function() {
        $('#system-pop-25').addClass('popup-content-active')
    });
    $('.system-link-btn-26').on('click', function() {
        $('#system-pop-26').addClass('popup-content-active')
    });
    $('.system-link-btn-27').on('click', function() {
        $('#system-pop-27').addClass('popup-content-active')
    });
    $('.system-link-btn-28').on('click', function() {
        $('#system-pop-28').addClass('popup-content-active')
    });
    $('.system-link-btn-29').on('click', function() {
        $('#system-pop-29').addClass('popup-content-active')
    });
    $('.system-link-btn-30').on('click', function() {
        $('#system-pop-30').addClass('popup-content-active')
    });
    $('.system-link-btn-31').on('click', function() {
        $('#system-pop-31').addClass('popup-content-active')
    });
    $('.system-link-btn-32').on('click', function() {
        $('#system-pop-32').addClass('popup-content-active')
    });
    $('.system-link-btn-33').on('click', function() {
        $('#system-pop-33').addClass('popup-content-active')
    });
    $('.system-link-btn-34').on('click', function() {
        $('#system-pop-34').addClass('popup-content-active')
    });
    $('.system-link-btn-35').on('click', function() {
        $('#system-pop-35').addClass('popup-content-active')
    });
    $('.system-link-btn-36').on('click', function() {
        $('#system-pop-36').addClass('popup-content-active')
    });
    $('.system-link-btn-37').on('click', function() {
        $('#system-pop-37').addClass('popup-content-active')
    });
    $('.system-link-btn-38').on('click', function() {
        $('#system-pop-38').addClass('popup-content-active')
    });
    $('.system-link-btn-39').on('click', function() {
        $('#system-pop-39').addClass('popup-content-active')
    });
    $('.system-link-btn-40').on('click', function() {
        $('#system-pop-40').addClass('popup-content-active')
    });
    $('.system-link-btn-41').on('click', function() {
        $('#system-pop-41').addClass('popup-content-active')
    });
    $('.system-link-btn-42').on('click', function() {
        $('#system-pop-42').addClass('popup-content-active')
    });
    $('.system-link-btn-43').on('click', function() {
        $('#system-pop-43').addClass('popup-content-active')
    });
    $('.system-link-btn-44').on('click', function() {
        $('#system-pop-44').addClass('popup-content-active')
    });
    $('.system-link-btn-45').on('click', function() {
        $('#system-pop-45').addClass('popup-content-active')
    });
    $('.system-link-btn-46').on('click', function() {
        $('#system-pop-46').addClass('popup-content-active')
    });
    $('.system-link-btn-47').on('click', function() {
        $('#system-pop-47').addClass('popup-content-active')
    });
    $('.system-link-btn-48').on('click', function() {
        $('#system-pop-48').addClass('popup-content-active')
    });
    $('.system-link-btn-49').on('click', function() {
        $('#system-pop-49').addClass('popup-content-active')
    });
    $('.system-link-btn-50').on('click', function() {
        $('#system-pop-50').addClass('popup-content-active')
    });
    $('.system-link-btn-51').on('click', function() {
        $('#system-pop-51').addClass('popup-content-active')
    });
    $('.system-link-btn-52').on('click', function() {
        $('#system-pop-52').addClass('popup-content-active')
    });
    $('.system-link-btn-53').on('click', function() {
        $('#system-pop-53').addClass('popup-content-active')
    });
    $('.system-link-btn-54').on('click', function() {
        $('#system-pop-54').addClass('popup-content-active')
    });
    $('.system-link-btn-55').on('click', function() {
        $('#system-pop-55').addClass('popup-content-active')
    });
    $('.system-link-btn-56').on('click', function() {
        $('#system-pop-56').addClass('popup-content-active')
    });
    $('.system-link-btn-57').on('click', function() {
        $('#system-pop-57').addClass('popup-content-active')
    });
    $('.system-link-btn-58').on('click', function() {
        $('#system-pop-58').addClass('popup-content-active')
    });
    $('.system-link-btn-59').on('click', function() {
        $('#system-pop-59').addClass('popup-content-active')
    });
    $('.system-link-btn-60').on('click', function() {
        $('#system-pop-60').addClass('popup-content-active')
    });
    //機材名をクリックした時にモーダルを表示する処理。


    //レンタル楽器・機材の詳細をクリックした時にモーダルを表示する処理。
    $('.rental-link-btn-1').on('click', function() {
        $('#rental-pop-1').addClass('popup-content-active')
    });
    $('.rental-link-btn-2').on('click', function() {
        $('#rental-pop-2').addClass('popup-content-active')
    });
    $('.rental-link-btn-3').on('click', function() {
        $('#rental-pop-3').addClass('popup-content-active')
    });
    //レンタル楽器・機材の詳細をクリックした時にモーダルを表示する処理。


    //レコーディングについての詳細をクリックした時にモーダルを表示する処理。
    $('.rec-detail-link-btn').on('click', function() {
        $('#rec-detail-pop').addClass('popup-content-active')
    });
    //レコーディングについての詳細をクリックした時にモーダルを表示する処理。

    //オリジナル機材をクリックした時にモーダルを表示する処理。
    $('.pps-9dc-link-btn').on('click', function() {
        $('#pps-9dc-pop').addClass('popup-content-active')
    });
    $('.consider-link-btn-1').on('click', function() {
        $('#consider-link-pop-1').addClass('popup-content-active')
    });
    $('.consider-link-btn-2').on('click', function() {
        $('#consider-link-pop-2').addClass('popup-content-active')
    });
    $('.consider-link-btn-3').on('click', function() {
        $('#consider-link-pop-3').addClass('popup-content-active')
    });
    //オリジナル機材をクリックした時にモーダルを表示する処理。


    //レコーディングについての詳細、機材名・レンタル楽器及び機材の詳細をクリックした時に、背景スクロールができないように固定する処理。
    var scrollPosition;
    $(".rec-detail-link-open, .system-link-open, .rental-link-open").on("click", function() {
        scrollPosition = $(window).scrollTop();
        $('body').addClass('fixed').css({ 'top': -scrollPosition });
    });
    //レコーディングについての詳細、機材名・レンタル楽器及び機材の詳細をクリックした時に、背景スクロールができないように固定する処理。


    //モーダルコンテンツの閉じるボタンを押した時にimgとtextを初期位置に戻し、モーダルを閉じる処理。
    $('.popup-content-close-btn').on('click', function() {
        $('.popup-content').removeClass('popup-content-active');
        $('body').removeClass('fixed').css({ 'top': 0 });
        window.scrollTo(0, scrollPosition);
        $('.popup-content-text').css('float', 'right');
        $('.popup-content-text').css('width', '65%');
        $('.popup-content-text').css('padding-left', '5%');
        $('.popup-content-img').css('width', '25%');
    });
    //モーダルコンテンツの閉じるボタンを押した時にimgとtextを初期位置に戻し、モーダルを閉じる処理。

    //レコーディングについての詳細、機材名・レンタル楽器及び機材の詳細をクリックした時に、背景スクロールができないように固定する処理。
    var scrollPosition;
    $(".rec-detail-link-open, .system-link-open, .rental-link-open, .link-open").on("click", function() {
        scrollPosition = $(window).scrollTop();
        $('body').addClass('fixed').css({ 'top': -scrollPosition });
    });
    //レコーディングについての詳細、機材名・レンタル楽器及び機材の詳細をクリックした時に、背景スクロールができないように固定する処理。

    //モーダルのimgをクリックした時にimg、textの拡大/縮小を行う処理。
    $('.popup-content-img').on('click', function() {
        if ($(this).hasClass('popup-content-img-big-active')) {
            $(this).removeClass('popup-content-img-big-active');
            $(this).css('width', '25%');
            $(this).css('float', 'left');
            $('.popup-content-text').css('float', 'right');
            $('.popup-content-text').css('width', '65%');
            $('.popup-content-text').css('padding-left', '5%');
        } else {
            $(this).addClass('popup-content-img-big-active');
            $(this).css('width', '95%');
            $(this).css('float', 'left');
            $('.popup-content-text').css('float', 'left');
            $('.popup-content-text').css('width', '100%');
            $('.popup-content-text').css('padding-left', '0%');
        }
    });
    //モーダルのimgをクリックした時にimg、textの拡大/縮小を行う処理。


});