$(document).ready(function () {

    var scorePlus = 0;

    var scoreMinus = 0;

    $('.draggable-content .ui-draggable').draggable({containment: ".draggable-content-wrapper"});

    var task1 = $("ul").children().first();
    var task2 = task1.next();
    var task3 = task2.next();
    var task4 = task3.next();
    var task5 = task4.next();
    var task6 = task5.next();
    var checkVariant = false;

    var elementPosition = function(idClass) {
        var element = $(idClass);
        var offset = element.offset();

        return {
            'top': offset.top,
            'right': offset.left + element.outerWidth(),
            'bottom': offset.top + element.outerHeight(),
            'left': offset.left,
        };
    };

    var elPost = function(el) {
        var element = $(el);
        var offset = element.offset();

        return {
            'top': offset.top,
            'right': offset.left + element.outerWidth(),
            'bottom': offset.top + element.outerHeight(),
            'left': offset.left,
        };
    };

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
        task3.show();

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
// Task 1
    var trueOption = false;
    var button = $("button.check-button1");
    $("button.t1-o1").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t1-o1");
    });
    $("button.t1-o2").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t1-o2");
    });
    $("button.t1-o3").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t1-o3");
    });
    $("button.t1-oG").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        trueOption = true;
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
// Task 2
    $("button.check-button2").click(function () {
        $('.error-message').remove();
        if ($("#t2-o1").val().trim() == '' || $("#t2-o2").val().trim() == '' || $("#t2-o3").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if (parseInt($("#t2-o1").val(), 10) * 3 < 40 / 4) {
                $("#t2-o1").addClass("correct-answer");
                $("#t2-o1").removeClass("wrong-answer");
            } else {
                $("#t2-o1").addClass("wrong-answer");
            }

            if (parseInt($("#t2-o1").val(), 10) * 3 < 40 / 4) {
                $("#t2-o2").addClass("correct-answer");
                $("#t2-o2").removeClass("wrong-answer");
            } else {
                $("#t2-o2").addClass("wrong-answer");
            }

            if (parseInt($("#t2-o1").val(), 10) * 3 < 40 / 4) {
                $("#t2-o3").addClass("correct-answer");
                $("#t2-o3").removeClass("wrong-answer");
            } else {
                $("#t2-o3").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });
// Task 3
    $("button.check-button3").click(function () {
        $('.error-message').remove();
        if ($("#t3-o1").val().trim() == '' || $("#t3-o2").val().trim() == '' || $("#t3-o3").val().trim() == '' || $("#t3-o4").val().trim() == '' || $("#t3-o5").val().trim() == '' || $("#t3-o6").val().trim() == '' || $("#t3-o7").val().trim() == '' || $("#t3-o8").val().trim() == '' || $("#t3-o9").val().trim() == '' || $("#t3-o10").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t3-o1").val() === "9") {
                $("#t3-o1").addClass("correct-answer");
                $("#t3-o1").removeClass("wrong-answer");
            } else {
                $("#t3-o1").addClass("wrong-answer");
            }
            if ($("#t3-o2").val() === "9") {
                $("#t3-o2").addClass("correct-answer");
                $("#t3-o2").removeClass("wrong-answer");
            } else {
                $("#t3-o2").addClass("wrong-answer");
            }
            if ($("#t3-o3").val() === "3") {
                $("#t3-o3").addClass("correct-answer");
                $("#t3-o3").removeClass("wrong-answer");
            } else {
                $("#t3-o3").addClass("wrong-answer");
            }
            if ($("#t3-o4").val() === "27") {
                $("#t3-o4").addClass("correct-answer");
                $("#t3-o4").removeClass("wrong-answer");
            } else {
                $("#t3-o4").addClass("wrong-answer");
            }
            if ($("#t3-o5").val() === "27") {
                $("#t3-o5").addClass("correct-answer");
                $("#t3-o5").removeClass("wrong-answer");
            } else {
                $("#t3-o5").addClass("wrong-answer");
            }
            if ($("#t3-o6").val() === "3") {
                $("#t3-o6").addClass("correct-answer");
                $("#t3-o6").removeClass("wrong-answer");
            } else {
                $("#t3-o6").addClass("wrong-answer");
            }
            if ($("#t3-o7").val() === "9") {
                $("#t3-o7").addClass("correct-answer");
                $("#t3-o7").removeClass("wrong-answer");
            } else {
                $("#t3-o7").addClass("wrong-answer");
            }
            if ($("#t3-o8").val() === "9") {
                $("#t3-o8").addClass("correct-answer");
                $("#t3-o8").removeClass("wrong-answer");
            } else {
                $("#t3-o8").addClass("wrong-answer");
            }
            if ($("#t3-o9").val() === ":") {
                $("#t3-o9").addClass("correct-answer");
                $("#t3-o9").removeClass("wrong-answer");
            } else {
                $("#t3-o9").addClass("wrong-answer");
            }
            if ($("#t3-o10").val() === "*") {
                $("#t3-o10").addClass("correct-answer");
                $("#t3-o10").removeClass("wrong-answer");
            } else {
                $("#t3-o10").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });
// Task 4

    $("button.check-button4").click(function () {
        $('.error-message').remove();
        var drag_1 = elementPosition('.draggable-content-wrapper');
        var t4_o5 = elementPosition('.t4-o5'),
            st4_o5 = elementPosition('.scope-t4-05');
        var t4_o6 = elementPosition('.t4-o6'),
            st4_o6 = elementPosition('.scope-t4-06');
        var t4_o7 = elementPosition('.t4-o7'),
            st4_o7 = elementPosition('.scope-t4-07');
        var t4_o8 = elementPosition('.t4-o8'),
            st4_o8 = elementPosition('.scope-t4-08');
        var min_left = drag_1.left;
        var max_left = drag_1.left+$('.draggable-content-wrapper').width();

        var min_top_o3 = drag_1.top;
        var max_top_o3 = drag_1.top + 32;
        var min_top_o4 = drag_1.top +75;
        var max_top_o4 = drag_1.top + 113;
        var trueOptionT5 = false;
        var trueOptionT6 = false;
        var trueOptionT7 = false;
        var trueOptionT8 = false;
        var checkVariant2 = false;


        if (t4_o5.top >= st4_o5.top && t4_o5.bottom <= st4_o5.bottom && t4_o5.left <= st4_o5.left + 15 && t4_o5.right <= st4_o5.right + 15){
            trueOptionT5 = true;
        }
        if (t4_o6.top >= st4_o6.top && t4_o6.bottom <= st4_o6.bottom && t4_o6.left <= st4_o6.left + 15 && t4_o6.right <= st4_o6.right + 15){
            trueOptionT6 = true;
        }
        if (t4_o7.top >= st4_o7.top && t4_o7.bottom <= st4_o7.bottom && t4_o7.left >= st4_o7.left && t4_o7.right <= st4_o7.right){
            trueOptionT7 = true;
        }
        if (t4_o8.top >= st4_o8.top, t4_o8.bottom <= st4_o8.bottom, t4_o8.left >= st4_o8.left, t4_o8.right <= st4_o8.right){
            trueOptionT8 = true;
        }
        if (trueOptionT5){
            checkVariant = true;
        } else {
            checkVariant = false;
        }
        if (checkVariant) {
            if (trueOptionT5 === true) {
                $(".t1-o5").addClass("correct-answer");
            } else {
                $('.t1-o5').addClass("wrong-answer");
            }
            if (trueOptionT6 === true) {
                $(".t1-o6").addClass("correct-answer");
            } else {
                $('.t1-o6').addClass("wrong-answer");
            }
            if (trueOptionT7 === true) {
                $(".t1-o7").addClass("correct-answer");
            } else {
                $('.t1-o7').addClass("wrong-answer");
            }
            if (trueOptionT8 === true) {
                $(".t1-o8").addClass("correct-answer");
            } else {
                $('.t1-o8').addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Перетащите все элементы в ячейки</p>');
        }
    });
// Task 5
   var trueOption = false; // Task 4 Start

    var button = $("button.check-button5");
    $("button.t5-oG").click(function () {
        $('.error-message').remove();
        trueOption = true;
        checkVariant = true;
    });
    $("button.t5-o1").click(function () {
        $('.error-message').remove();
        button = $("button.t5-o1");
        trueOption = false;
        checkVariant = true;
    });
    $("button.t5-o3").click(function () {
        $('.error-message').remove();
        button = $("button.t5-o3");
        trueOption = false;
        checkVariant = true;
    });
    $("button.t5-o4").click(function () {
        $('.error-message').remove();
        button = $("button.t5-o4");
        trueOption = false;
        checkVariant = true;
    });

    $("button.check-button5").click(function () {
        $('.error-message').remove();
        if (checkVariant) {
            if (trueOption === true) {
                $("button.t5-oG").addClass("correct-answer");
            } else {
                button.addClass("wrong-answer");
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
    $("button.check-button5").click(function () {
        if (checkVariant) {
            $("button.check-button5").addClass("disabled");
            if (task4.find(".body-test-body").find("button").length) {
                if (task4.find(".body-test-body").find("button").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task4.find(".body-test-body").find("button").hasClass("correct-answer")) {
                    scorePlus = scorePlus + 1;
                } else {
                    scoreMinus = scoreMinus + 1;
                }
            } else if (task4.find(".body-test-body").find("input").length) {
                if (task1.find(".body-test-body").find("input").hasClass("wrong-answer")) {
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
    $("button.next-button5").click(function () {
        $('.error-message').remove();
        checkVariant = false;
        $("span.plusScore").text(scorePlus);
        $("span.minusScore").text(scoreMinus);
    });
});