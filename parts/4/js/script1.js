$(document).ready(function () {

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
// Task 1
    $("button.check-button1").click(function () {
        $('.error-message').remove();
        if ($("#t1-o1").val().trim() == '' || $("#t1-o2").val().trim() == '' || $("#t1-o3").val().trim() == '' || $("#t1-o4").val().trim() == '' || $("#t1-o5").val().trim() == '' || $("#t1-o6").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t1-o1").val() === "290") {
                $("#t1-o1").addClass("correct-answer");
                $("#t1-o1").removeClass("wrong-answer");
            } else {
                $("#t1-o1").addClass("wrong-answer");
            }
            if ($("#t1-o2").val() === "110") {
                $("#t1-o2").addClass("correct-answer");
                $("#t1-o2").removeClass("wrong-answer");
            } else {
                $("#t1-o2").addClass("wrong-answer");
            }
            if ($("#t1-o3").val() === "370") {
                $("#t1-o3").addClass("correct-answer");
                $("#t1-o3").removeClass("wrong-answer");
            } else {
                $("#t1-o3").addClass("wrong-answer");
            }
            if ($("#t1-o4").val() === "400") {
                $("#t1-o4").addClass("correct-answer");
                $("#t1-o4").removeClass("wrong-answer");
            } else {
                $("#t1-o4").addClass("wrong-answer");
            }
            if ($("#t1-o5").val() === "370") {
                $("#t1-o5").addClass("correct-answer");
                $("#t1-o5").removeClass("wrong-answer");
            } else {
                $("#t1-o5").addClass("wrong-answer");
            }
            if ($("#t1-o6").val() === "760") {
                $("#t1-o6").addClass("correct-answer");
                $("#t1-o6").removeClass("wrong-answer");
            } else {
                $("#t1-o6").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });
// Task 2
    var trueOption1 = false;
    var trueOption2 = false;
    var trueOption3 = false;
    var button1 = $("button.check-button1");
    var button2 = $("button.check-button1");
    var button3 = $("button.check-button1");


    $("button.check-button2").click(function () {
        $('.error-message').remove();
        if ($('.t2-01').val() == '=') {
            trueOption1 = true;
        }
        if ($('.t2-02').val() == '=') {
            trueOption2 = true;
        }
        if ($('.t2-03').val() == '>') {
            trueOption3 = true;
        }
        checkVariant = true;
        if (checkVariant) {
            if (trueOption1 === true) {
                $(".t2-01").addClass("correct-answer");
            } else {
                $(".t2-01").addClass("wrong-answer");
            }

            if (trueOption2 === true) {
                $(".t2-02").addClass("correct-answer");
            } else {
                $(".t2-02").addClass("wrong-answer");
            }

            if (trueOption3 === true) {
                $(".t2-03").addClass("correct-answer");
            } else {
                $(".t2-03").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Отметьте все варианты</p>');
        }
    });
// Task 3
    $("button.check-button3").click(function () {
        $('.error-message').remove();
        if ($("#t3-o1").val().trim() == '' || $("#t3-o2").val().trim() == '' || $("#t3-o3").val().trim() == '' || $("#t3-o4").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t3-o1").val() === "1") {
                $("#t3-o1").addClass("correct-answer");
                $("#t3-o1").removeClass("wrong-answer");
            } else {
                $("#t3-o1").addClass("wrong-answer");
            }
            if ($("#t3-o2").val() === "2") {
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
            if ($("#t3-o4").val() === "12") {
                $("#t3-o4").addClass("correct-answer");
                $("#t3-o4").removeClass("wrong-answer");
            } else {
                $("#t3-o4").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });
// Task 4
    var trueOption1 = false;
    var trueOption2 = false;

    $("button.check-button4").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        if (checkVariant) {
            if ($('.t4-01').val() == '+') {
                trueOption1 = true;
            }
            if ($('.t4-02').val() == ':') {
                trueOption2 = true;
            }
            if ($("#t4-o9").val() === "10") {
                $("#t4-o9").addClass("correct-answer");
                $("#t4-o9").removeClass("wrong-answer");
            } else {
                $("#t4-o9").addClass("wrong-answer");
            }
            if (trueOption1 === true) {
                $(".t4-01").addClass("correct-answer");
            } else {
                $(".t4-02").addClass("wrong-answer");
            }

            if (trueOption2 === true) {
                $(".t4-02").addClass("correct-answer");
            } else {
                $('.t4-02').addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Отметьте все варианты</p>');
        }
    });
// Task 5
    $("button.check-button5").click(function () {
        $('.error-message').remove();
        if ($("#t5-o1").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t5-o1").val() === "9") {
                $("#t5-o1").addClass("correct-answer");
                $("#t5-o1").removeClass("wrong-answer");
            } else {
                $("#t5-o1").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
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
            if (task4.find(".body-test-body").find("button").length) {
                if (task4.find(".body-test-body").find("button").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task4.find(".body-test-body").find("button").hasClass("correct-answer")) {
                    scorePlus = scorePlus + 1;
                } else {
                    scoreMinus = scoreMinus + 1;
                }
            } else if (task4.find(".body-test-body").find("input").length) {
                if (task4.find(".body-test-body").find("input").hasClass("wrong-answer")) {
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
        checkVariant = false;
        $("span.plusScore").text(scorePlus);
        $("span.minusScore").text(scoreMinus);
    });
});
