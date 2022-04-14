$(document).ready(function () {
    $('#t5-o7').draggable({containment: ".drag-5"});
    $('#t5-o8').draggable({containment: ".drag-5"});
    $('#t5-o9').draggable({containment: ".drag-5"});
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
    var buttonPressed1 = false;
    var buttonPressed2 = false;
    var buttonPressed3 = false;
    var buttonPressed4 = false;

    $("button.t1-o1").click(function () {
        $("button.t1-o1").addClass("blue-answer");
        buttonPressed1 = true;
        buttonPressed2 = false;
        buttonPressed3 = false;
        buttonPressed4 = false;
    });
    $("button.t1-o2").click(function () {
        $("button.t1-o2").addClass("red-answer");

        buttonPressed1 = false;
        buttonPressed2 = true;
        buttonPressed3 = false;
        buttonPressed4 = false;
    });
    $("button.t1-o3").click(function () {
        $("button.t1-o3").addClass("yellow-answer");
        buttonPressed1 = false;
        buttonPressed2 = false;
        buttonPressed3 = true;
        buttonPressed4 = false;
    });
    $("button.t1-o4").click(function () {
        $("button.t1-o4").addClass("black-answer");
        buttonPressed1 = false;
        buttonPressed2 = false;
        buttonPressed3 = false;
        buttonPressed4 = true;
    });

    $("button.t1-o5").click(function () {
        $("button.t1-o5").removeClass("blue-answer");
        $("button.t1-o5").removeClass("red-answer");
        $("button.t1-o5").removeClass("yellow-answer");
        $("button.t1-o5").removeClass("black-answer");
        if (buttonPressed1) {            
            $('.arrow-img-1-1').show();
            $('.arrow-img-1-2').hide();
            $('.arrow-img-1-3').hide();
            $('.arrow-img-1-4').hide();
            $("button.t1-o5").addClass("blue-answer");
            $("button.t1-o6").removeClass("blue-answer");
            $("button.t1-o7").removeClass("blue-answer");
            $("button.t1-o8").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-1').show();
            $('.arrow-img-2-2').hide();
            $('.arrow-img-2-3').hide();
            $('.arrow-img-2-4').hide();
            $("button.t1-o5").addClass("red-answer");
            $("button.t1-o6").removeClass("red-answer");
            $("button.t1-o7").removeClass("red-answer");
            $("button.t1-o8").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-1').show();
            $('.arrow-img-3-2').hide();
            $('.arrow-img-3-3').hide();
            $('.arrow-img-3-4').hide();
            $("button.t1-o5").addClass("yellow-answer");
            $("button.t1-o6").removeClass("yellow-answer");
            $("button.t1-o7").removeClass("yellow-answer");
            $("button.t1-o8").removeClass("yellow-answer");
        } else if (buttonPressed4) {
            $('.arrow-img-4-1').show();
            $('.arrow-img-4-2').hide();
            $('.arrow-img-4-3').hide();
            $('.arrow-img-4-4').hide();
            $("button.t1-o5").addClass("black-answer");
            $("button.t1-o6").removeClass("black-answer");
            $("button.t1-o7").removeClass("black-answer");
            $("button.t1-o8").removeClass("black-answer");
        }

    });
    $("button.t1-o6").click(function () {
        $("button.t1-o6").removeClass("blue-answer");
        $("button.t1-o6").removeClass("red-answer");
        $("button.t1-o6").removeClass("yellow-answer");
        $("button.t1-o6").removeClass("black-answer");
        if (buttonPressed1) {
            $('.arrow-img-1-2').show();
            $('.arrow-img-1-1').hide();
            $('.arrow-img-1-3').hide();
            $('.arrow-img-1-4').hide();
            $("button.t1-o6").addClass("blue-answer");
            $("button.t1-o5").removeClass("blue-answer");
            $("button.t1-o7").removeClass("blue-answer");
            $("button.t1-o8").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-2').show();
            $('.arrow-img-2-1').hide();
            $('.arrow-img-2-3').hide();
            $('.arrow-img-2-4').hide();
            $("button.t1-o6").addClass("red-answer");
            $("button.t1-o5").removeClass("red-answer");
            $("button.t1-o7").removeClass("red-answer");
            $("button.t1-o8").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-2').show();
            $('.arrow-img-3-1').hide();
            $('.arrow-img-3-3').hide();
            $('.arrow-img-3-4').hide();
            $("button.t1-o6").addClass("yellow-answer");
            $("button.t1-o5").removeClass("yellow-answer");
            $("button.t1-o7").removeClass("yellow-answer");
            $("button.t1-o8").removeClass("yellow-answer");
        } else if (buttonPressed4) {
            $('.arrow-img-4-2').show();
            $('.arrow-img-4-1').hide();
            $('.arrow-img-4-3').hide();
            $('.arrow-img-4-4').hide();
            $("button.t1-o6").addClass("black-answer");
            $("button.t1-o5").removeClass("black-answer");
            $("button.t1-o7").removeClass("black-answer");
            $("button.t1-o8").removeClass("black-answer");
        }

    });
    $("button.t1-o7").click(function () {
        $("button.t1-o7").removeClass("blue-answer");
        $("button.t1-o7").removeClass("red-answer");
        $("button.t1-o7").removeClass("yellow-answer");
        $("button.t1-o7").removeClass("black-answer");
        if (buttonPressed1) {
            $('.arrow-img-1-3').show();
            $('.arrow-img-1-1').hide();
            $('.arrow-img-1-2').hide();
            $('.arrow-img-1-4').hide();
            $("button.t1-o7").addClass("blue-answer");
            $("button.t1-o5").removeClass("blue-answer");
            $("button.t1-o6").removeClass("blue-answer");
            $("button.t1-o8").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-3').show();
            $('.arrow-img-2-1').hide();
            $('.arrow-img-2-2').hide();
            $('.arrow-img-2-4').hide();
            $("button.t1-o7").addClass("red-answer");
            $("button.t1-o5").removeClass("red-answer");
            $("button.t1-o6").removeClass("red-answer");
            $("button.t1-o8").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-3').show();
            $('.arrow-img-3-1').hide();
            $('.arrow-img-3-2').hide();
            $('.arrow-img-3-4').hide();
            $("button.t1-o7").addClass("yellow-answer");
            $("button.t1-o5").removeClass("yellow-answer");
            $("button.t1-o6").removeClass("yellow-answer");
            $("button.t1-o8").removeClass("yellow-answer");
        } else if (buttonPressed4) {
            $('.arrow-img-4-3').show();
            $('.arrow-img-4-1').hide();
            $('.arrow-img-4-2').hide();
            $('.arrow-img-4-4').hide();
            $("button.t1-o7").addClass("black-answer");
            $("button.t1-o5").removeClass("black-answer");
            $("button.t1-o6").removeClass("black-answer");
            $("button.t1-o8").removeClass("black-answer");
        }

    });
    $("button.t1-o8").click(function () {
        $("button.t1-o8").removeClass("blue-answer");
        $("button.t1-o8").removeClass("red-answer");
        $("button.t1-o8").removeClass("yellow-answer");
        $("button.t1-o8").removeClass("black-answer");
        if (buttonPressed1) {
            $('.arrow-img-1-4').show();
            $('.arrow-img-1-1').hide();
            $('.arrow-img-1-2').hide();
            $('.arrow-img-1-3').hide();
            $("button.t1-o8").addClass("blue-answer");
            $("button.t1-o5").removeClass("blue-answer");
            $("button.t1-o6").removeClass("blue-answer");
            $("button.t1-o7").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-4').show();
            $('.arrow-img-2-1').hide();
            $('.arrow-img-2-2').hide();
            $('.arrow-img-2-3').hide();
            $("button.t1-o8").addClass("red-answer");
            $("button.t1-o5").removeClass("red-answer");
            $("button.t1-o6").removeClass("red-answer");
            $("button.t1-o7").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-4').show();
            $('.arrow-img-3-1').hide();
            $('.arrow-img-3-2').hide();
            $('.arrow-img-3-3').hide();
            $("button.t1-o8").addClass("yellow-answer");
            $("button.t1-o5").removeClass("yellow-answer");
            $("button.t1-o6").removeClass("yellow-answer");
            $("button.t1-o7").removeClass("yellow-answer");
        } else if (buttonPressed4) {
            $('.arrow-img-4-4').show();
            $('.arrow-img-4-1').hide();
            $('.arrow-img-4-2').hide();
            $('.arrow-img-4-3').hide();
            $("button.t1-o8").addClass("black-answer");
            $("button.t1-o5").removeClass("black-answer");
            $("button.t1-o6").removeClass("black-answer");
            $("button.t1-o7").removeClass("black-answer");
        }

    });

    $("button.check-button1").click(function () {
        $('.error-message').remove();
        $("button.t1-o5").removeClass("wrong-answer");
        $("button.t1-o3").removeClass("wrong-answer");
        $("button.t1-o6").removeClass("wrong-answer");
        $("button.t1-o1").removeClass("wrong-answer");
        $("button.t1-o4").removeClass("wrong-answer");
        $("button.t1-o2").removeClass("wrong-answer");
        $("button.t1-o7").removeClass("wrong-answer");
        $("button.t1-o8").removeClass("wrong-answer");
        if ($('.arrow-img:visible').length == 4){
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
            if ($("button.t1-o8").hasClass("blue-answer")) {
                $("button.t1-o8").removeClass("blue-answer");
                $("button.t1-o8").addClass("correct-answer");

                $("button.t1-o1").removeClass("blue-answer");
                $("button.t1-o1").addClass("correct-answer");
            } else {
                $("button.t1-o8").removeClass("red-answer");       //1-6 blue, 2-4 red, 3-5 yellow
                $("button.t1-o8").removeClass("yellow-answer");
                $("button.t1-o8").removeClass("black-answer");
                $("button.t1-o8").addClass("wrong-answer");

                $("button.t1-o1").removeClass("blue-answer");
                $("button.t1-o1").addClass("wrong-answer");

            }
            if ($("button.t1-o7").hasClass("red-answer")) {
                $("button.t1-o7").removeClass("red-answer");
                $("button.t1-o7").addClass("correct-answer2");

                $("button.t1-o2").removeClass("red-answer");
                $("button.t1-o2").addClass("correct-answer2");
            } else {
                $("button.t1-o7").removeClass("blue-answer");
                $("button.t1-o7").removeClass("yellow-answer");
                $("button.t1-o7").removeClass("black-answer");
                $("button.t1-o7").addClass("wrong-answer");

                $("button.t1-o2").removeClass("red-answer");
                $("button.t1-o2").addClass("wrong-answer");
            }
            if ($("button.t1-o5").hasClass("yellow-answer")) {
                $("button.t1-o5").removeClass("yellow-answer");
                $("button.t1-o5").addClass("correct-answer3");

                $("button.t1-o3").removeClass("yellow-answer");
                $("button.t1-o3").addClass("correct-answer3");
            } else {
                $("button.t1-o5").removeClass("blue-answer");
                $("button.t1-o5").removeClass("red-answer");
                $("button.t1-o5").removeClass("black-answer");
                $("button.t1-o5").addClass("wrong-answer");

                $("button.t1-o3").removeClass("yellow-answer");
                $("button.t1-o3").addClass("wrong-answer");
            }
            if ($("button.t1-o6").hasClass("black-answer")) {
                $("button.t1-o6").removeClass("black-answer");
                $("button.t1-o6").addClass("correct-answer4");

                $("button.t1-o4").removeClass("black-answer");
                $("button.t1-o4").addClass("correct-answer4");
            } else {
                $("button.t1-o6").removeClass("blue-answer");
                $("button.t1-o6").removeClass("red-answer");
                $("button.t1-o6").removeClass("yellow-answer");
                $("button.t1-o6").addClass("wrong-answer");

                $("button.t1-o4").removeClass("black-answer");
                $("button.t1-o4").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Соедините все пары</p>');
        }
    });
// Task 2
    var trueOption1 = false;
    var trueOption2 = false;
    var trueOption3 = false;
    var button1 = $("button.check-button2");
    var button2 = $("button.check-button2");
    var button3 = $("button.check-button2");

   $("button.check-button2").click(function () {

                $('.error-message').remove();

                if ($('.t2-o1').val() == '='){

                    $('.t2-o1').addClass('correct-answer');

                } else {

                    $('.t2-o1').addClass('wrong-answer');

                }

            });
    $("button.check-button2").click(function () {

                $('.error-message').remove();

                if ($('.t2-o2').val() == '='){

                    $('.t2-o2').addClass('correct-answer');

                } else {

                    $('.t2-o2').addClass('wrong-answer');

                }

            });
       $("button.check-button2").click(function () {

                $('.error-message').remove();

                if ($('.t2-o3').val() == '<'){

                    $('.t2-o3').addClass('correct-answer');

                } else {

                    $('.t2-o3').addClass('wrong-answer');

                }

            });




   

// Task 3
    var trueOption = false;
    var button = $("button.check-button3");
    $("button.t3-o1").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t3-o1");
        trueOption = false;
    });
    $("button.t3-o2").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t3-o2");
        trueOption = false;
    });
    $("button.t3-o3").click(function () {
        $('.error-message').remove();
        checkVariant = true;
        button = $("button.t3-o3");
        trueOption = true;
    });


    $("button.check-button3").click(function () {
        $('.error-message').remove();
        if (checkVariant) {
            if (trueOption === true) {
                $("button.t3-o3").addClass("correct-answer");
            } else {
                button.addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Выберите вариант</p>');
        }
    });
// Task 4
    $("button.check-button4").click(function () {
        $('.error-message').remove();
        if ($("#t4-o1").val().trim() == '' || $("#t4-o2").val().trim() == '' || $("#t4-o3").val().trim() == '' || $("#t4-o4").val().trim() == '' || $("#t4-o5").val().trim() == '' || $("#t4-o6").val().trim() == '' || $("#t4-o7").val().trim() == '' || $("#t4-o8").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t4-o1").val().trim() == "600") {
                $("#t4-o1").addClass("correct-answer");
                $("#t4-o1").removeClass("wrong-answer");
            } else {
                $("#t4-o1").addClass("wrong-answer");
            }
            if ($("#t4-o2").val().trim() == "60") {
                $("#t4-o2").addClass("correct-answer");
                $("#t4-o2").removeClass("wrong-answer");
            } else {
                $("#t4-o2").addClass("wrong-answer");
            }
            if ($("#t4-o3").val().trim() == "6") {
                $("#t4-o3").addClass("correct-answer");
                $("#t4-o3").removeClass("wrong-answer");
            } else {
                $("#t4-o3").addClass("wrong-answer");
            }
            if ($("#t4-o4").val().trim() == "7") {
                $("#t4-o4").addClass("correct-answer");
                $("#t4-o4").removeClass("wrong-answer");
            } else {
                $("#t4-o4").addClass("wrong-answer");
            }
            if ($("#t4-o5").val().trim() == "70") {
                $("#t4-o5").addClass("correct-answer");
                $("#t4-o5").removeClass("wrong-answer");
            } else {
                $("#t4-o5").addClass("wrong-answer");
            }
            if ($("#t4-o6").val().trim() == "700") {
                $("#t4-o6").addClass("correct-answer");
                $("#t4-o6").removeClass("wrong-answer");
            } else {
                $("#t4-o6").addClass("wrong-answer");
            }
            if ($("#t4-o7").val().trim() == "5") {
                $("#t4-o7").addClass("correct-answer");
                $("#t4-o7").removeClass("wrong-answer");
            } else {
                $("#t4-o7").addClass("wrong-answer");
            }
            if ($("#t4-o8").val().trim() == "500") {
                $("#t4-o8").addClass("correct-answer");
                $("#t4-o8").removeClass("wrong-answer");
            } else {
                $("#t4-o8").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });
// Task 5
    $("button.check-button5").click(function () {
        $('.error-message').remove();
        var drag_5 = $('.drag-5').position();
        var t5_o7 = $('#t5-o7').position();
        var t5_o8 = $('#t5-o8').position();
        var t5_o9 = $('#t5-o9').position();
        var min_left = drag_5.left + $('.drag-5 .c1').outerWidth() - 30;
        var max_left = min_left + 400;
//        alert(min_left+'---------'+max_left+'------'+t5_o7.left);
        var min_top_o4 = drag_5.top;
        var max_top_o4 = min_top_o4 + 50;
        var min_top_o5 = drag_5.top + $('.t5-o4').height() + 18;
        var max_top_o5 = min_top_o5 + 30;
        var min_top_o6 = drag_5.top + $('.t5-o4').height() + $('.t5-o5').height() + 38;
        var max_top_o6 = min_top_o6 + 40;
//        alert(min_top_o4+'---------'+max_top_o4+'------'+t5_o7.top);
//        alert(min_top_o5+'---------'+max_top_o5+'------'+t5_o8.top);
//        alert(min_top_o6+'---------'+max_top_o6+'------'+t5_o9.top);
        var trueOptionT7 = false;
        var trueOptionT8 = false;
        var trueOptionT9 = false;
        var checkVariant7 = false;
        var checkVariant8 = false;
        var checkVariant9 = false;
        if (t5_o7.left >= min_left && t5_o7.left <= max_left && t5_o7.top >= min_top_o5 && t5_o7.top <= max_top_o5){
            trueOptionT7 = true;
            checkVariant7 = true;
        }
        if (t5_o7.left >= min_left && t5_o7.left <= max_left && t5_o7.top >= min_top_o4 && t5_o7.top <= max_top_o4){
            checkVariant7 = true;
        }
        if (t5_o7.left >= min_left && t5_o7.left <= max_left && t5_o7.top >= min_top_o6 && t5_o7.top <= max_top_o6){
            checkVariant7 = true;
        }
        
        if (t5_o8.left >= min_left && t5_o8.left <= max_left && t5_o8.top >= min_top_o6 && t5_o8.top <= max_top_o6){
            trueOptionT8 = true;
            checkVariant8 = true;
        }
        if (t5_o8.left >= min_left && t5_o8.left <= max_left && t5_o8.top >= min_top_o4 && t5_o8.top <= max_top_o4){
            checkVariant8 = true;
        }
        if (t5_o8.left >= min_left && t5_o8.left <= max_left && t5_o8.top >= min_top_o5 && t5_o8.top <= max_top_o5){
            checkVariant8 = true;
        }
        
        if (t5_o9.left >= min_left && t5_o9.left <= max_left && t5_o9.top >= min_top_o4 && t5_o9.top <= max_top_o4){
            trueOptionT9 = true;
            checkVariant9 = true;
        }
        if (t5_o9.left >= min_left && t5_o9.left <= max_left && t5_o9.top >= min_top_o6 && t5_o9.top <= max_top_o6){
            checkVariant9 = true;
        }
        if (t5_o9.left >= min_left && t5_o9.left <= max_left && t5_o9.top >= min_top_o5 && t5_o9.top <= max_top_o5){
            checkVariant9 = true;
        }
        if (checkVariant7 && checkVariant8 && checkVariant9){
            checkVariant = true;
        } else {
            checkVariant = false;
        }
        if (checkVariant) {
            if (trueOptionT7 === true) {
                $(".t5-o5").addClass("correct-answer");
            } else {
                $('.t5-o5').addClass("wrong-answer");
            }
            if (trueOptionT8 === true) {
                $(".t5-o6").addClass("correct-answer2");
            } else {
                $('.t5-o6').addClass("wrong-answer");
            }
            if (trueOptionT9 === true) {
                $(".t5-o4").addClass("correct-answer3");
            } else {
                $('.t5-o4').addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Перетащите все элементы в ячейки</p>');
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
