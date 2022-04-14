
$(document).ready(function () {

    $('.draggable-content .ui-draggable').draggable({containment: ".draggable-content-wrapper"});

    var scorePlus = 0;

    var scoreMinus = 0;

    var elementPosition = function(el) {
        if(el.length){
            var offset = el.offset();
            return {
                'top': offset.top,
                'right': offset.left + el.outerWidth(),
                'bottom': offset.top + el.outerHeight(),
                'left': offset.left,
            };
        }else{
            return 0
        }
    };



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
        trueOption = true;
    });
    $("button.t1-o4").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t1-o4");
        trueOption = true;
    });
    $("button.check-button1").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        if (checkVariant) {
            if (trueOption === true) {
                $("button.t1-o3").addClass("correct-answer");
            } else {
                button.addClass("wrong-answer");
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
        trueOption = true;
    });
    $("button.t2-o4").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t2-o4");
    });
    $("button.check-button2").click(function () {
        $('.error-message').remove();
        if (checkVariant) {
            if (trueOption === true) {
                $("button.t2-o3").addClass("correct-answer");
            } else {
                button.addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });
// Task 3
    var trueOption1 = false;
    var trueOption2 = false;

    var button1 = $("button.check-button3");
    var button2 = $("button.check-button3");

    if ($('.t3-02').val() == '+') {
        trueOption1 = true;
    } else {
    }
    if ($('.t3-03').val() == ':') {
        trueOption2 = true;
    }


    $("button.check-button3").click(function () {
        $('.error-message').remove();
        if ($("#t3-o1").val().trim() != '' && $("#t3-o6").val().trim() != '' && $("#t3-o7").val().trim() != '' && $("#t3-o8").val().trim() != '' && $("#t3-o13").val().trim() != '' && $("#t3-o14").val().trim() != '') {
            checkVariant = true;
        } else {
            checkVariant = false;
        }
        if (checkVariant) {
            if (trueOption1 === true) {
                $(".t3-02").addClass("correct-answer");
            } else {
                button1.addClass("wrong-answer");
            }

            if (trueOption2 === true) {
                $(".t3-03").addClass("correct-answer");
            } else {
                button2.addClass("wrong-answer");
            }


            if ($("#t3-o1").val().trim() == "8") {
                $("#t3-o1").addClass("correct-answer");
                $("#t3-o1").removeClass("wrong-answer");
            } else {
                $("#t3-o1").addClass("wrong-answer");
            }
            if ($("#t3-o6").val().trim() == "2") {
                $("#t3-o6").addClass("correct-answer");
                $("#t3-o6").removeClass("wrong-answer");
            } else {
                $("#t3-o6").addClass("wrong-answer");
            }
            if ($("#t3-o7").val().trim() == "20") {
                $("#t3-o7").addClass("correct-answer");
                $("#t3-o7").removeClass("wrong-answer");
            } else {
                $("#t3-o7").addClass("wrong-answer");
            }
            if ($("#t3-o8").val().trim() == "20") {
                $("#t3-o8").addClass("correct-answer");
                $("#t3-o8").removeClass("wrong-answer");
            } else {
                $("#t3-o8").addClass("wrong-answer");
            }
            if ($("#t3-o13").val().trim() == "4") {
                $("#t3-o13").addClass("correct-answer");
                $("#t3-o13").removeClass("wrong-answer");
            } else {
                $("#t3-o13").addClass("wrong-answer");
            }
            if ($("#t3-o14").val().trim() == "5") {
                $("#t3-o14").addClass("correct-answer");
                $("#t3-o14").removeClass("wrong-answer");
            } else {
                $("#t3-o14").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Отметьте все варианты</p>');
        }
    });
// Task 4
    $("button.check-button4").click(function () {
        $('.error-message').remove();
        const wrapCoord = elementPosition($('.task-4 .draggable-content-wrapper'));
        $('.task-4 .ui-correct').map((index,el)=>{
            let elCoord = elementPosition($(el));
            if(elCoord.top >= wrapCoord.top && elCoord.bottom <= wrapCoord.bottom && elCoord.left <= elCoord.left + 15 && elCoord.right <= wrapCoord.right + 15){
                checkVariant = true;
            }else{
                checkVariant = false;
            }
        });

        if (checkVariant) {
            $('.task-4 .ui-correct').map((index,el)=>{
                let elCoord = elementPosition($(el));
                let elParentCoord = $(el).data('box')
                parent =  elementPosition($(elParentCoord));
                if(elCoord.top >=  parent.top - 15 && elCoord.bottom <=  parent.bottom && elCoord.left <= elCoord.left + 15 && elCoord.right <=  parent.right + 15){
                    $(el).addClass('correct-answer')
                }else{
                    $(el).addClass('wrong-answer')
                }
            });
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

    $("button.next-button4").click(function () {
        $("span.plusScore").text(scorePlus);
        $("span.minusScore").text(scoreMinus);
    });
});
