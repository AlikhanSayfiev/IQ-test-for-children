$(document).ready(function () {
    $('#t3-o3').draggable({containment: ".drag-3"});
    $('#t3-oG').draggable({containment: ".drag-3"});
    $('#t3-o4').draggable({containment: ".drag-3"});
    var scorePlus = 0;

    var scoreMinus = 0;



    var task1 = $("ul").children().first();
    var task2 = task1.next();
    var task3 = task2.next();
    var task4 = task3.next();
    var task5 = task4.next();
    var task6 = task5.next();
    var checkVariant = false;
//Начало переключателя

    $("button.next-button1").click(function () { //Переключение заданий Вперед
        $('.check-button1').trigger('click');
        if ($('.error-message').length == 0){
            task1.hide();
            task2.show();
        }

    });

    $("button.back-button1").click(function () { //Переключение заданий Назад
        //todo
    });


    $("button.next-button2").click(function () { //Переключение заданий Вперед
        $('.check-button2').trigger('click');
            if ($('.error-message').length == 0){
            task2.hide();
            task3.show();
        }

    });

    $("button.back-button2").click(function () { //Переключение заданий Назад
        task2.hide();
        task1.show();
    });


    $("button.next-button3").click(function () { //Переключение заданий Вперед
        $('.check-button3').trigger('click');
            if ($('.error-message').length == 0){
            task3.hide();
            task4.show();
        }

    });

    $("button.back-button3").click(function () { //Переключение заданий Назад
        task3.hide();
        task2.show();
    });


    $("button.next-button4").click(function () { //Переключение заданий Вперед
        $('.check-button4').trigger('click');
            if ($('.error-message').length == 0){
            task4.hide();
            task5.show();
        }

    });

    $("button.back-button4").click(function () { //Переключение заданий Назад
        task4.hide();
        task3.show();
    });


    $("button.next-button5").click(function () { //Переключение заданий Вперед
        //todo
        $('.check-button5').trigger('click');
            if ($('.error-message').length == 0){
            task5.hide();
            task6.show();
        }
    });

    $("button.back-button5").click(function () { //Переключение заданий Назад
        task5.hide();
        task4.show();
    });
    $("button.back-button6").click(function () { //Переключение заданий Назад
        task6.hide();
        task5.show();
    });

//Конец переключений




    var trueOption = false; // Task 1 Start
    var button = $("button.check-button1");
    $("button.t1-oG").click(function () {
        $('.error-message').remove();
        trueOption = true;
        checkVariant = true;
    });
    $("button.t1-o1").click(function () {
        $('.error-message').remove();
        button = $("button.t1-o1");
        trueOption = false;
        checkVariant = true;
    });
    $("button.t1-o3").click(function () {
        $('.error-message').remove();
        button = $("button.t1-o3");
        trueOption = false;
        checkVariant = true;
    });
    $("button.t1-o4").click(function () {
        $('.error-message').remove();
        button = $("button.t1-o4");
        trueOption = false;
        checkVariant = true;
    });




    $("button.check-button1").click(function () {
        $('.error-message').remove();
        if (checkVariant) {
            if (trueOption === true) {
                $("button.t1-oG").addClass("correct-answer");
            } else {
                button.addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Выберите вариант</p>');
        }
    });



    var trueOptionT2 = false; // Task 2 Start
    var buttonT2 = $("button.check-button2");
    $("button.t2-oG").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        trueOptionT2 = true;
    });
    $("button.t2-o1").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        buttonT2 = $("button.t2-o1");
        trueOptionT2 = false;
    });
    $("button.t2-o3").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        buttonT2 = $("button.t2-o3");
        trueOptionT2 = false;
    });
    $("button.t2-o4").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        buttonT2 = $("button.t2-o4");
        trueOptionT2 = false;
    });




    $("button.check-button2").click(function () {
        $('.error-message').remove();
        if (checkVariant) {
            if (trueOptionT2 === true) {
                $("button.t2-oG").addClass("correct-answer");
            } else {
                buttonT2.addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Выберите вариант</p>');
        }
    });


   // Task 3 Start
    $("button.check-button3").click(function () {
        $('.error-message').remove();
        var drag_3 = $('.drag-3').position();
        var t3_oG = $('#t3-oG').position();
        var t3_o3 = $('#t3-o3').position();
        var t3_o4 = $('#t3-o4').position();
        var min_left = drag_3.left + 160;
        var max_left = drag_3.left + 230;
        var min_top = drag_3.top;
        var max_top = drag_3.top + 20;
        var trueOptionT3 = false;
        var trueOptionT4 = false;
        var trueOptionTG = false;
        if (t3_oG.left >= min_left && t3_oG.left <= max_left && t3_oG.top >= min_top && t3_oG.top <= max_top){
            trueOptionTG = true;
        }
        if (t3_o3.left >= min_left && t3_o3.left <= max_left && t3_o3.top >= min_top && t3_o3.top <= max_top){
            trueOptionT3 = true;
        }
        if (t3_o4.left >= min_left && t3_o4.left <= max_left && t3_o4.top >= min_top && t3_o4.top <= max_top){
            trueOptionT4 = true;
        }
        if ((trueOptionTG && trueOptionT3) || (trueOptionTG && trueOptionT4) || (trueOptionT4 && trueOptionT3) || (!trueOptionT4 && !trueOptionT3 && !trueOptionTG)){
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if (trueOptionTG === true) {
                $(".t3-o2").addClass("correct-answer");
            } else {
                $('.t3-o2').addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Перетащите один вариант</p>');
        }
    });




    var trueOption1T4 = false; // Task 4 Start
    var trueOption2T4 = false;
    var button1T4 = $("button.check-button4");
    var button2T4 = $("button.check-button4");

    $("button.check-button4").click(function () {

                $('.error-message').remove();

                if ($('.t4-o1').val() == '<'){

                    $('.t4-o1').addClass('correct-answer');

                } else {

                    $('.t4-o1').addClass('wrong-answer');

                }

            });
	$("button.check-button4").click(function () {

                $('.error-message').remove();

                if ($('.t4-o2').val() == '<'){

                    $('.t4-o2').addClass('correct-answer');

                } else {

                    $('.t4-o2').addClass('wrong-answer');

                }

            });



    


    var trueOptionT5 = false; // Task 5 Start
    var buttonT5 = $("button.check-button5");
    $("button.t5-oG").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        trueOptionT5 = true;
    });
    $("button.t5-o1").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        buttonT5 = $("button.t5-o1");
        trueOptionT5 = false;
    });
    $("button.t5-o3").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        buttonT5 = $("button.t5-o3");
        trueOptionT5 = false;
    });
    $("button.t5-o4").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        buttonT5 = $("button.t5-o4");
        trueOptionT5 = false;
    });




    $("button.check-button5").click(function () {
        $('.error-message').remove();
        if (checkVariant) {
            if (trueOptionT5 === true) {
                $("button.t5-oG").addClass("correct-answer");
            } else {
                buttonT5.addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Выберите вариант</p>');
        }
    });


    $("button.check-button1").click(function () {
        if (checkVariant) {
            $("button.check-button1").addClass("disabled");
            if (task1.find(".body-test-body").find("button").length) {
                if (task1.find(".body-test-body").find("button").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task1.find(".body-test-body").find("button").hasClass("correct-answer")) {
                    scorePlus = scorePlus + 1;
                } else {
                    scoreMinus = scoreMinus + 1;
                }
            } else if (task1.find(".body-test-body").find("input").length) {
                if (task1.find(".body-test-body").find("input").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task1.find(".body-test-body").find("input").hasClass("correct-answer")) {
                    scorePlus = scorePlus + 1;
                } else {
                    scoreMinus = scoreMinus + 1;
                }
            } else {
                console.log("Zhas код на скорую руку не серчайте кто увидит");
            }

        }
    });
    $("button.check-button2").click(function () {
        if (checkVariant) {
            $("button.check-button2").addClass("disabled");
            if (task2.find(".body-test-body").find("button").length) {
                if (task2.find(".body-test-body").find("button").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task2.find(".body-test-body").find("button").hasClass("correct-answer")) {
                    scorePlus = scorePlus + 1;
                } else {
                    scoreMinus = scoreMinus + 1;
                }
            } else if (task2.find(".body-test-body").find("input").length) {
                if (task2.find(".body-test-body").find("input").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task2.find(".body-test-body").find("input").hasClass("correct-answer")) {
                    scorePlus = scorePlus + 1;
                } else {
                    scoreMinus = scoreMinus + 1;
                }
            } else {
                console.log("Zhas код на скорую руку не серчайте кто увидит");
            }

        }
    });
    $("button.check-button3").click(function () {
        if (checkVariant) {
            $("button.check-button3").addClass("disabled");
            if (task3.find(".body-test-body").find("button").length) {
                if (task3.find(".body-test-body").find("button").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task3.find(".body-test-body").find("button").hasClass("correct-answer")) {
                    scorePlus = scorePlus + 1;
                } else {
                    scoreMinus = scoreMinus + 1;
                }
            } else if (task3.find(".body-test-body").find("input").length) {
                if (task3.find(".body-test-body").find("input").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task3.find(".body-test-body").find("input").hasClass("correct-answer")) {
                    scorePlus = scorePlus + 1;
                } else {
                    scoreMinus = scoreMinus + 1;
                }
            } else {
                console.log("Zhas код на скорую руку не серчайте кто увидит");
            }
        }

    });
  $("button.check-button4").click(function () {

        if (checkVariant) {

            $("button.check-button4").addClass("disabled");

            if (task4.find(".body-test-body").find("select").length) {

                if (task4.find(".body-test-body").find("select").hasClass("wrong-answer")) {

                    scoreMinus = scoreMinus + 1;

                } else if (task4.find(".body-test-body").find("select").hasClass("correct-answer")) {

                    scorePlus = scorePlus + 1;

                } else {

                    scoreMinus = scoreMinus + 1;

                }

            } else if (task4.find(".body-test-body").find("input").length) {

                if (task5.find(".body-test-body").find("input").hasClass("wrong-answer")) {

                    scoreMinus = scoreMinus + 1;

                } else if (task4.find(".body-test-body").find("input").hasClass("correct-answer")) {

                    scorePlus = scorePlus + 1;

                } else {

                    scoreMinus = scoreMinus + 1;

                }

            } else {

                console.log("Zhas код на скорую руку не серчайте кто увидит");

            }

        }



    });
    $("button.check-button5").click(function () {
        if (checkVariant) {
            $("button.check-button5").addClass("disabled");
            if (task5.find(".body-test-body").find("button").length) {
                if (task5.find(".body-test-body").find("button").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task5.find(".body-test-body").find("button").hasClass("correct-answer")) {
                    scorePlus = scorePlus + 1;
                } else {
                    scoreMinus = scoreMinus + 1;
                }
            } else if (task5.find(".body-test-body").find("input").length) {
                if (task5.find(".body-test-body").find("input").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task5.find(".body-test-body").find("input").hasClass("correct-answer")) {
                    scorePlus = scorePlus + 1;
                } else {
                    scoreMinus = scoreMinus + 1;
                }
            } else {
                console.log("Zhas код на скорую руку не серчайте кто увидит");
            }
        }

    });








    $("button.next-button5").click(function () {
        $('.error-message').remove();
        //checkVariant = false;
        $("span.plusScore").text(scorePlus);
        $("span.minusScore").text(scoreMinus);
    });

});
