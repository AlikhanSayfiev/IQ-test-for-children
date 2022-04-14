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
        if ($('.error-message').length == 0) {
            task1.hide();
            task2.show();
        }
    });

    $("button.back-button1").click(function () { //Переключение заданий Назад
        //todo
    });


    $("button.next-button2").click(function () { //Переключение заданий Вперед
        $('.check-button2').trigger('click');
        if ($('.error-message').length == 0) {
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
        if ($('.error-message').length == 0) {
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
        if ($('.error-message').length == 0) {
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
        if ($('.error-message').length == 0) {
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


//Task 2 Start


    $("button.check-button2").click(function () {
        $('.error-message').remove();
        if ($("#t2-o1").val().trim() == '' || $("#t2-o2").val().trim() == '' || $("#t2-o3").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t2-o1").val().trim() == "26") {
                $("#t2-o1").addClass("correct-answer");
                $("#t2-o1").removeClass("wrong-answer");
            } else {
                $("#t2-o1").addClass("wrong-answer");
            }

            if ($("#t2-o2").val().trim() == "42") {
                $("#t2-o2").addClass("correct-answer");
                $("#t2-o2").removeClass("wrong-answer");
            } else {
                $("#t2-o2").addClass("wrong-answer");
            }

            if ($("#t2-o3").val().trim() == "50") {
                $("#t2-o3").addClass("correct-answer");
                $("#t2-o3").removeClass("wrong-answer");
            } else {
                $("#t2-o3").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });

//Task 3 Start
    var buttonPressed1 = false;
    var buttonPressed2 = false;
    var buttonPressed3 = false;

    $("button.t3-o1").click(function () {
        $("button.t3-o1").addClass("blue-answer");
        buttonPressed1 = true;
        buttonPressed2 = false;
        buttonPressed3 = false;
    });
    $("button.t3-o2").click(function () {
        $("button.t3-o2").addClass("red-answer");

        buttonPressed1 = false;
        buttonPressed2 = true;
        buttonPressed3 = false;
    });
    $("button.t3-o3").click(function () {
        $("button.t3-o3").addClass("yellow-answer");
        buttonPressed1 = false;
        buttonPressed2 = false;
        buttonPressed3 = true;
    });

    $("button.t3-o4").click(function () {
        $("button.t3-o4").removeClass("blue-answer");
        $("button.t3-o4").removeClass("red-answer");
        $("button.t3-o4").removeClass("yellow-answer");
        if (buttonPressed1) {
            $('.arrow-img-1-1').show();
            $('.arrow-img-1-2').hide();
            $('.arrow-img-1-3').hide();
            $("button.t3-o4").addClass("blue-answer");
            $("button.t3-o5").removeClass("blue-answer");
            $("button.t3-o6").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-1').show();
            $('.arrow-img-2-2').hide();
            $('.arrow-img-2-3').hide();
            $("button.t3-o4").addClass("red-answer");
            $("button.t3-o5").removeClass("red-answer");
            $("button.t3-o6").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-1').show();
            $('.arrow-img-3-2').hide();
            $('.arrow-img-3-2').hide();
            $("button.t3-o4").addClass("yellow-answer");
            $("button.t3-o5").removeClass("yellow-answer");
            $("button.t3-o6").removeClass("yellow-answer");
        }

    });
    $("button.t3-o5").click(function () {
        $("button.t3-o5").removeClass("blue-answer");
        $("button.t3-o5").removeClass("red-answer");
        $("button.t3-o5").removeClass("yellow-answer");
        if (buttonPressed1) {
            $('.arrow-img-1-2').show();
            $('.arrow-img-1-1').hide();
            $('.arrow-img-1-3').hide();
            $("button.t3-o5").addClass("blue-answer");
            $("button.t3-o4").removeClass("blue-answer");
            $("button.t3-o6").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-2').show();
            $('.arrow-img-2-1').hide();
            $('.arrow-img-2-3').hide();
            $("button.t3-o5").addClass("red-answer");
            $("button.t3-o4").removeClass("red-answer");
            $("button.t3-o6").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-2').show();
            $('.arrow-img-3-1').hide();
            $('.arrow-img-3-3').hide();
            $("button.t3-o5").addClass("yellow-answer");
            $("button.t3-o4").removeClass("yellow-answer");
            $("button.t3-o6").removeClass("yellow-answer");
        }

    });
    $("button.t3-o6").click(function () {
        $("button.t3-o6").removeClass("blue-answer");
        $("button.t3-o6").removeClass("red-answer");
        $("button.t3-o6").removeClass("yellow-answer");
        if (buttonPressed1) {
            $('.arrow-img-1-3').show();
            $('.arrow-img-1-1').hide();
            $('.arrow-img-1-2').hide();
            $("button.t3-o6").addClass("blue-answer");
            $("button.t3-o4").removeClass("blue-answer");
            $("button.t3-o5").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-3').show();
            $('.arrow-img-2-1').hide();
            $('.arrow-img-2-2').hide();
            $("button.t3-o6").addClass("red-answer");
            $("button.t3-o4").removeClass("red-answer");
            $("button.t3-o5").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-3').show();
            $('.arrow-img-3-1').hide();
            $('.arrow-img-3-2').hide();
            $("button.t3-o6").addClass("yellow-answer");
            $("button.t3-o4").removeClass("yellow-answer");
            $("button.t3-o5").removeClass("yellow-answer");
        }

    });

    $("button.check-button3").click(function () {
        $('.error-message').remove();
        $("button.t3-o5").removeClass("wrong-answer");
        $("button.t3-o3").removeClass("wrong-answer");
        $("button.t3-o6").removeClass("wrong-answer");
        $("button.t3-o1").removeClass("wrong-answer");
        $("button.t3-o4").removeClass("wrong-answer");
        $("button.t3-o2").removeClass("wrong-answer");
        if ($('.arrow-img:visible').length == 3) {
            checkVariant = true;
        } else {
            checkVariant = false;
        }
//        if ($('.arrow-img:visible').length == 3 || $('.yellow-answer').length < 2 || $('.blue-answer').length < 2 || $('.red-answer').length < 2) {
//            checkVariant = false;
//        } else {
//            checkVariant = true;
//        }
        if (checkVariant) {
            if ($("button.t3-o6").hasClass("blue-answer")) {
                $("button.t3-o6").removeClass("blue-answer");
                $("button.t3-o6").addClass("correct-answer");

                $("button.t3-o1").removeClass("blue-answer");
                $("button.t3-o1").addClass("correct-answer");
            } else {
                $("button.t3-o6").removeClass("red-answer");       //1-6 blue, 2-4 red, 3-5 yellow
                $("button.t3-o6").removeClass("yellow-answer");
                $("button.t3-o6").addClass("wrong-answer");

                $("button.t3-o1").removeClass("blue-answer");
                $("button.t3-o1").addClass("wrong-answer");

            }
            if ($("button.t3-o4").hasClass("red-answer")) {
                $("button.t3-o4").removeClass("red-answer");
                $("button.t3-o4").addClass("correct-answer2");

                $("button.t3-o2").removeClass("red-answer");
                $("button.t3-o2").addClass("correct-answer2");
            } else {
                $("button.t3-o4").removeClass("blue-answer");
                $("button.t3-o4").removeClass("yellow-answer");
                $("button.t3-o4").addClass("wrong-answer");

                $("button.t3-o2").removeClass("red-answer");
                $("button.t3-o2").addClass("wrong-answer");
            }
            if ($("button.t3-o5").hasClass("yellow-answer")) {
                $("button.t3-o5").removeClass("yellow-answer");
                $("button.t3-o5").addClass("correct-answer3");

                $("button.t3-o3").removeClass("yellow-answer");
                $("button.t3-o3").addClass("correct-answer3");
            } else {
                $("button.t3-o5").removeClass("blue-answer");
                $("button.t3-o5").removeClass("red-answer");
                $("button.t3-o5").addClass("wrong-answer");

                $("button.t3-o3").removeClass("yellow-answer");
                $("button.t3-o3").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Соедините все пары</p>');
        }
    });

//Task 4 Start
    $("button.check-button4").click(function () {
        $('.error-message').remove();
        if ($("#t4-o1").val().trim() == '' || $("#t4-o2").val().trim() == '' || $("#t4-o3").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t4-o1").val().trim() == "53") {
                $("#t4-o1").addClass("correct-answer");
                $("#t4-o1").removeClass("wrong-answer");
            } else {
                $("#t4-o1").addClass("wrong-answer");
            }

            if ($("#t4-o2").val().trim() == "50") {
                $("#t4-o2").addClass("correct-answer");
                $("#t4-o2").removeClass("wrong-answer");
            } else {
                $("#t4-o2").addClass("wrong-answer");
            }

            if ($("#t4-o3").val().trim() == "3") {
                $("#t4-o3").addClass("correct-answer");
                $("#t4-o3").removeClass("wrong-answer");
            } else {
                $("#t4-o3").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });

// Task 5 Start
//2 4 7
    var trueOption1 = false;
    var trueOption2 = false;
    var trueOption3 = false;

    $("button.check-button5").click(function () {
        checkVariant = true;
        $('.error-message').remove();
        if ($('.t5-o1').val() == '<') {
            $('.t5-o1').addClass('correct-answer');
            trueOption1 = true;
        } else {
            $('.t5-o1').addClass('wrong-answer');
        }
        if ($('.t5-o2').val() == '>') {
            $('.t5-o2').addClass('correct-answer');
            trueOption2 = true;
        } else {
            $('.t5-o2').addClass('wrong-answer');
        }
        $('.error-message').remove();
        if ($('.t5-o3').val() == '>') {
            $('.t5-o3').addClass('correct-answer');
            trueOption2 = true;
        } else {
            $('.t5-o3').addClass('wrong-answer');
        }

    });


//Проверка

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
            if (task5.find(".body-test-body").find("select").length) {
                if (task5.find(".body-test-body").find("select").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task5.find(".body-test-body").find("select").hasClass("correct-answer")) {
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
