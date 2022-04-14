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
//Task 1
    $("button.check-button1").click(function () {
        $('.error-message').remove();
        if ($("#t1-o1").val().trim() == '' || $("#t1-o2").val().trim() == '' || $("#t1-o3").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t1-o1").val() === "5") {
                $("#t1-o1").addClass("correct-answer");
                $("#t1-o1").removeClass("wrong-answer");
            } else {
                $("#t1-o1").addClass("wrong-answer");
            }

            if ($("#t1-o2").val() === "4") {
                $("#t1-o2").addClass("correct-answer");
                $("#t1-o2").removeClass("wrong-answer");
            } else {
                $("#t1-o2").addClass("wrong-answer");
            }

            if ($("#t1-o3").val() === "4") {
                $("#t1-o3").addClass("correct-answer");
                $("#t1-o3").removeClass("wrong-answer");
            } else {
                $("#t1-o3").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });
// Task 2
    var trueOption = false;
    var button = $("button.check-button2");
    $("button.t2-o1").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t2-o1");
    });
    $("button.t2-o2").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t2-o2");
    });
    $("button.t2-o3").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t2-o3");
    });
    $("button.t2-oG").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        trueOption = true;
    });
    $("button.t2-o5").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t2-o5");
    });



    $("button.check-button2").click(function () {
        $('.error-message').remove();
        if (checkVariant) {
            if (trueOption === true) {
                $("button.t2-oG").addClass("correct-answer");
            } else {
                button.addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Выберите вариант</p>');
        }
    });
// Task 3
    $("button.check-button3").click(function () {
        $('.error-message').remove();
        if ($("#t3-o1").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t3-o1").val() === "15") {
                $("#t3-o1").addClass("correct-answer");
                $("#t3-o1").removeClass("wrong-answer");
            } else {
                $("#t3-o1").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });
// Task 4
    $("button.check-button4").click(function () {
        $('.error-message').remove();
        if ($("#t4-o1").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t4-o1").val() === "8") {
                $("#t4-o1").addClass("correct-answer");
                $("#t4-o1").removeClass("wrong-answer");
            } else {
                $("#t4-o1").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });
// Task 5
    var trueOption1 = false;
    var trueOption2 = false;
    var button1 = $("button.check-button5");
    var button2 = $("button.check-button5");
    $("button.t5-o1").click(function () {
        $('.error-message').remove();
        if ($("button.t5-o1").hasClass("blue-answer")) {
            $("button.t5-o1").removeClass("blue-answer");
            button1 = $("button.check-button5");
        } else {
            $("button.t5-o1").addClass("blue-answer");
            button1 = $("button.t5-o1");
        }


    });
    $("button.t5-o2").click(function () {
        $('.error-message').remove();
        if ($("button.t5-o2").hasClass("blue-answer")) {
            $("button.t5-o2").removeClass("blue-answer");
            button2 = $("button.check-button5");
        } else {
            $("button.t5-o2").addClass("blue-answer");
            button2 = $("button.t5-o2");

        }


    });
    $("button.t5-oG").click(function () {
        $('.error-message').remove();
        if ($("button.t5-oG").hasClass("blue-answer")) {
            $("button.t5-oG").removeClass("blue-answer");
            button = $("button.check-button5");
            trueOption1 = false;
        } else {
            $("button.t5-oG").addClass("blue-answer");

            trueOption1 = true;
        }

    });
    $("button.t5-oR").click(function () {
        $('.error-message').remove();
        if ($("button.t5-oR").hasClass("blue-answer")) {
            $("button.t5-oR").removeClass("blue-answer");

            trueOption2 = false;
        } else {
            $("button.t5-oR").addClass("blue-answer");

            trueOption2 = true;
        }

    });


    $("button.check-button5").click(function () {
        $('.error-message').remove();
        if ($('.blue-answer').length > 0) {
            checkVariant = true;
        } else {
            checkVariant = false;
        }
        if (checkVariant) {
            $("button.t5-oG").parent().children().removeClass("blue-answer");
            $("button.t5-oR").parent().children().removeClass("blue-answer");

            if (trueOption1 === true) {
                $("button.t5-oG").addClass("correct-answer");

            } else {
                button1.addClass("wrong-answer");
            }
            if (trueOption2 === true) {

                $("button.t5-oR").addClass("correct-answer");
            } else {
                button2.addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Отметьте все варианты</p>');
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
