$(document).ready(function () {
    $('#t2-o7').draggable({containment: ".drag-2"});
    $('#t2-o8').draggable({containment: ".drag-2"});
    $('#t2-o9').draggable({containment: ".drag-2"});
    $('#t2-o10').draggable({containment: ".drag-2"});
    $('#t2-o11').draggable({containment: ".drag-2"});
    $('#t2-o12').draggable({containment: ".drag-2"});

    $('#t5-o5').draggable({containment: ".drag-5"});
    $('#t5-o6').draggable({containment: ".drag-5"});
    $('#t5-o7').draggable({containment: ".drag-5"});
    $('#t5-o8').draggable({containment: ".drag-5"});
    $('#t5-o9').draggable({containment: ".drag-5"});
    $('#t5-o10').draggable({containment: ".drag-5"});
    $('#t5-o11').draggable({containment: ".drag-5"});
    $('#t5-o12').draggable({containment: ".drag-5"});

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

//Task 1 Start
    var buttonPressed1 = false;
    var buttonPressed2 = false;
    var buttonPressed3 = false;

    $("button.t1-o1").click(function () {
        $("button.t1-o1").addClass("blue-answer");
        buttonPressed1 = true;
        buttonPressed2 = false;
        buttonPressed3 = false;
    });
    $("button.t1-o2").click(function () {
        $("button.t1-o2").addClass("red-answer");

        buttonPressed1 = false;
        buttonPressed2 = true;
        buttonPressed3 = false;
    });
    $("button.t1-o3").click(function () {
        $("button.t1-o3").addClass("yellow-answer");
        buttonPressed1 = false;
        buttonPressed2 = false;
        buttonPressed3 = true;
    });

    $("button.t1-o4").click(function () {
        $("button.t1-o4").removeClass("blue-answer");
        $("button.t1-o4").removeClass("red-answer");
        $("button.t1-o4").removeClass("yellow-answer");
        if (buttonPressed1) {
            $('.arrow-img-1-1').show();
            $('.arrow-img-1-2').hide();
            $('.arrow-img-1-3').hide();
            $("button.t1-o4").addClass("blue-answer");
            $("button.t1-o5").removeClass("blue-answer");
            $("button.t1-o6").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-1').show();
            $('.arrow-img-2-2').hide();
            $('.arrow-img-2-3').hide();
            $("button.t1-o4").addClass("red-answer");
            $("button.t1-o5").removeClass("red-answer");
            $("button.t1-o6").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-1').show();
            $('.arrow-img-3-2').hide();
            $('.arrow-img-3-2').hide();
            $("button.t1-o4").addClass("yellow-answer");
            $("button.t1-o5").removeClass("yellow-answer");
            $("button.t1-o6").removeClass("yellow-answer");
        }

    });
    $("button.t1-o5").click(function () {
        $("button.t1-o5").removeClass("blue-answer");
        $("button.t1-o5").removeClass("red-answer");
        $("button.t1-o5").removeClass("yellow-answer");
        if (buttonPressed1) {
            $('.arrow-img-1-2').show();
            $('.arrow-img-1-1').hide();
            $('.arrow-img-1-3').hide();
            $("button.t1-o5").addClass("blue-answer");
            $("button.t1-o4").removeClass("blue-answer");
            $("button.t1-o6").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-2').show();
            $('.arrow-img-2-1').hide();
            $('.arrow-img-2-3').hide();
            $("button.t1-o5").addClass("red-answer");
            $("button.t1-o4").removeClass("red-answer");
            $("button.t1-o6").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-2').show();
            $('.arrow-img-3-1').hide();
            $('.arrow-img-3-3').hide();
            $("button.t1-o5").addClass("yellow-answer");
            $("button.t1-o4").removeClass("yellow-answer");
            $("button.t1-o6").removeClass("yellow-answer");
        }

    });
    $("button.t1-o6").click(function () {
        $("button.t1-o6").removeClass("blue-answer");
        $("button.t1-o6").removeClass("red-answer");
        $("button.t1-o6").removeClass("yellow-answer");
        if (buttonPressed1) {
            $('.arrow-img-1-3').show();
            $('.arrow-img-1-1').hide();
            $('.arrow-img-1-2').hide();
            $("button.t1-o6").addClass("blue-answer");
            $("button.t1-o4").removeClass("blue-answer");
            $("button.t1-o5").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-3').show();
            $('.arrow-img-2-1').hide();
            $('.arrow-img-2-2').hide();
            $("button.t1-o6").addClass("red-answer");
            $("button.t1-o4").removeClass("red-answer");
            $("button.t1-o5").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-3').show();
            $('.arrow-img-3-1').hide();
            $('.arrow-img-3-2').hide();
            $("button.t1-o6").addClass("yellow-answer");
            $("button.t1-o4").removeClass("yellow-answer");
            $("button.t1-o5").removeClass("yellow-answer");
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
        if ($('.arrow-img:visible').length == 3){
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
            if ($("button.t1-o5").hasClass("blue-answer")) {
                $("button.t1-o5").removeClass("blue-answer");
                $("button.t1-o5").addClass("correct-answer");

                $("button.t1-o1").removeClass("blue-answer");
                $("button.t1-o1").addClass("correct-answer");
            } else {
                $("button.t1-o5").removeClass("red-answer");       //1-6 blue, 2-4 red, 3-5 yellow
                $("button.t1-o5").removeClass("yellow-answer");
                $("button.t1-o5").addClass("wrong-answer");

                $("button.t1-o1").removeClass("blue-answer");
                $("button.t1-o1").addClass("wrong-answer");

            }
            if ($("button.t1-o6").hasClass("red-answer")) {
                $("button.t1-o6").removeClass("red-answer");
                $("button.t1-o4").addClass("correct-answer2");

                $("button.t1-o2").removeClass("red-answer");
                $("button.t1-o2").addClass("correct-answer2");
            } else {
                $("button.t1-o6").removeClass("blue-answer");
                $("button.t1-o6").removeClass("yellow-answer");
                $("button.t1-o6").addClass("wrong-answer");

                $("button.t1-o2").removeClass("red-answer");
                $("button.t1-o2").addClass("wrong-answer");
            }
            if ($("button.t1-o4").hasClass("yellow-answer")) {
                $("button.t1-o4").removeClass("yellow-answer");
                $("button.t1-o4").addClass("correct-answer3");

                $("button.t1-o3").removeClass("yellow-answer");
                $("button.t1-o3").addClass("correct-answer3");
            } else {
                $("button.t1-o4").removeClass("blue-answer");
                $("button.t1-o4").removeClass("red-answer");
                $("button.t1-o4").addClass("wrong-answer");

                $("button.t1-o3").removeClass("yellow-answer");
                $("button.t1-o3").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Соедините все пары</p>');
        }
    });
// Task 2
    $("button.check-button2").click(function () {
        $('.error-message').remove();
        var drag_2 = $('.drag-2').position();
        var t2_o7 = $('#t2-o7').position();
        var t2_o8 = $('#t2-o8').position();
        var t2_o9 = $('#t2-o9').position();
        var t2_o10 = $('#t2-o10').position();
        var t2_o11 = $('#t2-o11').position();
        var t2_o12 = $('#t2-o12').position();
        var min_left_1 = drag_2.left+$('.c1').outerWidth();
        var max_left_1 = min_left_1 + 60;
        var min_left_2 = drag_2.left+$('.c1').outerWidth()+$('.t2-o1').outerWidth();
        var max_left_2 = min_left_2 + 60;
        var min_top_1 = drag_2.top + $('.drag-2 thead').height() - 16;
        var max_top_1 = min_top_1 + 67;
        var min_top_2 = drag_2.top + $('.drag-2 thead').height() + $('.t2-o1').height() - 16;
        var max_top_2 = min_top_2 + 93;
        var min_top_3 = drag_2.top + $('.drag-2 thead').height() + $('.t2-o1').height() + $('.t2-o3').height() - 16;
        var max_top_3 = min_top_3 + 90;
//        alert(min_top_1+'---------'+max_top_1+'------'+t2_o7.top+'---'+$('.t2-o1').height());
//        alert(min_top_2+'---------'+max_top_2+'------'+t2_o7.top);
//        alert(min_top_3+'---------'+max_top_3+'------'+t2_o7.top);
        var trueOptionT7 = false;
        var trueOptionT8 = false;
        var trueOptionT9 = false;
        var trueOptionT10 = false;
        var trueOptionT11 = false;
        var trueOptionT12 = false;
        var checkVariant7 = false;
        var checkVariant8 = false;
        var checkVariant9 = false;
        var checkVariant10 = false;
        var checkVariant11 = false;
        var checkVariant12 = false;
        if (t2_o7.left >= min_left_1 && t2_o7.left <= max_left_1 && t2_o7.top >= min_top_2 && t2_o7.top <= max_top_2){
            trueOptionT7 = true;
            checkVariant7 = true;
        } else if (t2_o7.left >= min_left_1 && t2_o7.left <= max_left_2 && t2_o7.top >= min_top_1 && t2_o7.top <= max_top_3) {
            checkVariant7 = true;
        }
        
        if (t2_o8.left >= min_left_1 && t2_o8.left <= max_left_1 && t2_o8.top >= min_top_1 && t2_o8.top <= max_top_1){
            trueOptionT8 = true;
            checkVariant8 = true;
        } else if (t2_o8.left >= min_left_1 && t2_o8.left <= max_left_2 && t2_o8.top >= min_top_1 && t2_o8.top <= max_top_3) {
            checkVariant8 = true;
        }
        
        if (t2_o9.left >= min_left_1 && t2_o9.left <= max_left_1 && t2_o9.top >= min_top_3 && t2_o9.top <= max_top_3){
            trueOptionT9 = true;
            checkVariant9 = true;
        } else if (t2_o9.left >= min_left_1 && t2_o9.left <= max_left_2 && t2_o9.top >= min_top_1 && t2_o9.top <= max_top_3) {
            checkVariant9 = true;
        }
        
        if (t2_o10.left >= min_left_2 && t2_o10.left <= max_left_2 && t2_o10.top >= min_top_1 && t2_o10.top <= max_top_1){
            trueOptionT10 = true;
            checkVariant10 = true;
        } else if (t2_o10.left >= min_left_1 && t2_o10.left <= max_left_2 && t2_o10.top >= min_top_1 && t2_o10.top <= max_top_3) {
            checkVariant10 = true;
        }
        
        if (t2_o11.left >= min_left_2 && t2_o11.left <= max_left_2 && t2_o11.top >= min_top_2 && t2_o11.top <= max_top_2){
            trueOptionT11 = true;
            checkVariant11 = true;
        } else if (t2_o11.left >= min_left_1 && t2_o11.left <= max_left_2 && t2_o11.top >= min_top_1 && t2_o11.top <= max_top_3) {
            checkVariant11 = true;
        }
        
        if (t2_o12.left >= min_left_2 && t2_o12.left <= max_left_2 && t2_o12.top >= min_top_3 && t2_o12.top <= max_top_3){
            trueOptionT12 = true;
            checkVariant12 = true;
        } else if (t2_o12.left >= min_left_1 && t2_o12.left <= max_left_2 && t2_o12.top >= min_top_1 && t2_o12.top <= max_top_3) {
            checkVariant12 = true;
        }
//        alert(checkVariant7 +'8'+ checkVariant8 +'9'+ checkVariant9 +'10'+ checkVariant10 +'11'+ checkVariant11 +'12'+ checkVariant12);
        if (checkVariant7 && checkVariant8 && checkVariant9 && checkVariant10 && checkVariant11 && checkVariant12){
            checkVariant = true;
        } else {
            checkVariant = false;
        }
        if (checkVariant) {
            if (trueOptionT7 === true) {
                $(".t2-o7").addClass("correct-answer");
            } else {
                $('.t2-o7').addClass("wrong-answer");
            }
            if (trueOptionT8 === true) {
                $(".t2-o8").addClass("correct-answer2");
            } else {
                $('.t2-o8').addClass("wrong-answer");
            }
            if (trueOptionT9 === true) {
                $(".t2-o9").addClass("correct-answer3");
            } else {
                $('.t2-o9').addClass("wrong-answer");
            }
            if (trueOptionT10 === true) {
                $(".t2-o10").addClass("correct-answer3");
            } else {
                $('.t2-o10').addClass("wrong-answer");
            }
            if (trueOptionT11 === true) {
                $(".t2-o11").addClass("correct-answer3");
            } else {
                $('.t2-o11').addClass("wrong-answer");
            }
            if (trueOptionT12 === true) {
                $(".t2-o12").addClass("correct-answer3");
            } else {
                $('.t2-o12').addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Перетащите все элементы в ячейки</p>');
        }
    });
// Task 3
    var trueOption1 = false;
    var trueOption2 = false;
    var trueOption3 = false;
    var trueOption4 = false;
    var button1 = $("button.check-button3");
    var button2 = $("button.check-button3");
    var button3 = $("button.check-button3");
    var button4 = $("button.check-button3");

    $("button.t3-o1").click(function () {
        $('.error-message').remove();
        $("button.t3-o2").removeClass("lightblue-answer");
        $("button.t3-o1").addClass("lightblue-answer");
        button1 = $("button.t3-o1");
        trueOption1 = false;
    });
    $("button.t3-o2").click(function () {
        $('.error-message').remove();
        $("button.t3-o1").removeClass("lightblue-answer");
        $("button.t3-o2").addClass("lightblue-answer");
        button1 = $("button.t3-o2");
        trueOption1 = true;
    });
    $("button.t3-o3").click(function () {
        $('.error-message').remove();
        $("button.t3-o4").removeClass("lightblue-answer");
        $("button.t3-o3").addClass("lightblue-answer");
        trueOption2 = true;
        button2 = $("button.t3-o3");
    });

    $("button.t3-o4").click(function () {
        $('.error-message').remove();
        $("button.t3-o3").removeClass("lightblue-answer");
        $("button.t3-o4").addClass("lightblue-answer");
        trueOption2 = false;
        button2 = $("button.t3-o4");
    });
    $("button.t3-o5").click(function () {
        $('.error-message').remove();
        $("button.t3-o6").removeClass("lightblue-answer");
        $("button.t3-o5").addClass("lightblue-answer");
        trueOption3 = true;
        button2 = $("button.t3-o5");
    });
    $("button.t3-o6").click(function () {
        $('.error-message').remove();
        $("button.t3-o5").removeClass("lightblue-answer");
        $("button.t3-o6").addClass("lightblue-answer");
        button3 = $("button.t3-o6");
        trueOption3 = false;
    });

    $("button.t3-o7").click(function () {
        $('.error-message').remove();
        $("button.t3-o8").removeClass("lightblue-answer");
        $("button.t3-o7").addClass("lightblue-answer");
        trueOption4 = true;
        button2 = $("button.t3-o7");
    });
    $("button.t3-o8").click(function () {
        $('.error-message').remove();
        $("button.t3-o7").removeClass("lightblue-answer");
        $("button.t3-o8").addClass("lightblue-answer");
        button4 = $("button.t3-o8");
        trueOption4 = false;
    });

    $("button.check-button3").click(function () {
        $('.error-message').remove();
        if ($('.lightblue-answer').length == 4) {
            checkVariant = true;
        } else {
            checkVariant = false;
        }
        if (checkVariant) {
            $("button.optionbutton").removeClass("lightblue-answer");
            if (trueOption1 === true) {
                $("button.t3-o2").addClass("correct-answer");
            } else {
                button1.addClass("wrong-answer");
            }

            if (trueOption2 === true) {
                $("button.t3-o3").addClass("correct-answer");
            } else {
                button2.addClass("wrong-answer");
            }

            if (trueOption3 === true) {
                $("button.t3-o5").addClass("correct-answer");
            } else {
                button3.addClass("wrong-answer");
            }
            if (trueOption4 === true) {
                $("button.t3-o7").addClass("correct-answer");
            } else {
                button4.addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Отметьте все варианты</p>');
        }
    });
// Task 4
    var trueOption = false; // Task 1 Start
    var button = $("button.check-button4");
    $("button.t4-o3").click(function () {
        $('.error-message').remove();
        trueOption = true;
        checkVariant = true;
    });
    $("button.t4-o2").click(function () {
        $('.error-message').remove();
        button = $("button.t4-o2");
        trueOption = false;
        checkVariant = true;
    });
    $("button.t4-o4").click(function () {
        $('.error-message').remove();
        button = $("button.t4-o4");
        trueOption = false;
        checkVariant = true;
    });
    $("button.t4-o5").click(function () {
        $('.error-message').remove();
        button = $("button.t4-o5");
        trueOption = false;
        checkVariant = true;
    });

    $("button.check-button4").click(function () {
        $('.error-message').remove();
        if (checkVariant) {
            if (trueOption === true) {
                $("button.t4-o3").addClass("correct-answer");
            } else {
                button.addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Выберите вариант</p>');
        }
    });
// Task 5
    $("button.check-button5").click(function () {
        $('.error-message').remove();
        var drag_5 = $('.drag-5').position();
        var t5_o5 = $('#t5-o5').position();
        var t5_o6 = $('#t5-o6').position();
        var t5_o7 = $('#t5-o7').position();
        var t5_o8 = $('#t5-o8').position();
        var t5_o9 = $('#t5-o9').position();
        var t5_o10 = $('#t5-o10').position();
        var t5_o11 = $('#t5-o11').position();
        var t5_o12 = $('#t5-o12').position();
        var min_left_1 = drag_5.left + $('.drag-5 .c1').outerWidth() - 5;
        var max_left_1 = min_left_1 + 20;
        var min_left_2 = drag_5.left + $('.drag-5 .c1').outerWidth() + $('.b').outerWidth() + 10;
        var max_left_2 = min_left_2 + 20;
        var min_left_3 = drag_5.left + $('.drag-5 .c1').outerWidth() +$('.b').outerWidth()*2 +25;
        var max_left_3 = min_left_3+ 20;
        var min_top_1 = drag_5.top;
        var max_top_1 = min_top_1 + 20;
//        alert(min_top_1+'---------'+max_top_1+'------'+t5_o5.top);
//        alert(min_left_1+'---------'+max_left_1+'------'+t5_o5.left);
//        alert(min_left_2+'---------'+max_left_2+'------'+t5_o6.left);
//        alert(min_left_3+'---------'+max_left_3+'------'+t5_o7.left);
        var trueOptionT6 = false;
        var trueOptionT9 = false;
        var trueOptionT11 = false;
        var checkVariant0 = 0;
        if (t5_o5.left >= min_left_1 && t5_o5.left <= max_left_3 && t5_o5.top >= min_top_1 && t5_o5.top <= max_top_1){
            checkVariant0++;
        } 
        if (t5_o6.left >= min_left_1 && t5_o6.left <= max_left_3 && t5_o6.top >= min_top_1 && t5_o6.top <= max_top_1){
            checkVariant0++;
        } 
        if (t5_o7.left >= min_left_1 && t5_o7.left <= max_left_3 && t5_o7.top >= min_top_1 && t5_o7.top <= max_top_1){
            checkVariant0++;
        }
        if (t5_o8.left >= min_left_1 && t5_o8.left <= max_left_3 && t5_o8.top >= min_top_1 && t5_o8.top <= max_top_1){
            checkVariant0++;
        }
        if (t5_o9.left >= min_left_1 && t5_o9.left <= max_left_3 && t5_o9.top >= min_top_1 && t5_o9.top <= max_top_1){
            checkVariant0++;
        } 
        if (t5_o10.left >= min_left_1 && t5_o10.left <= max_left_3 && t5_o10.top >= min_top_1 && t5_o10.top <= max_top_1){
            checkVariant0++;
        }
        if (t5_o11.left >= min_left_1 && t5_o11.left <= max_left_3 && t5_o11.top >= min_top_1 && t5_o11.top <= max_top_1){
            checkVariant0++;
        } 
        if (t5_o12.left >= min_left_1 && t5_o12.left <= max_left_3 && t5_o12.top >= min_top_1 && t5_o12.top <= max_top_1){
            checkVariant0++;
        }
        
        if (t5_o6.left >= min_left_1 && t5_o6.left <= max_left_1 && t5_o6.top >= min_top_1 && t5_o6.top <= max_top_1){
            trueOptionT6 = true;
        } 
        
        if (t5_o9.left >= min_left_2 && t5_o9.left <= max_left_2 && t5_o9.top >= min_top_1 && t5_o9.top <= max_top_1){
            trueOptionT9 = true;
        }
        
        if (t5_o11.left >= min_left_3 && t5_o11.left <= max_left_3 && t5_o11.top >= min_top_1 && t5_o11.top <= max_top_1){
            trueOptionT11 = true;
        }
        
        if (checkVariant0 != 3){
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if (trueOptionT6 === true) {
                $(".t5-o2").addClass("correct-answer");
            } else {
                $('.t5-o2').addClass("wrong-answer");
            }
            if (trueOptionT9 === true) {
                $(".t5-o3").addClass("correct-answer");
            } else {
                $('.t5-o3').addClass("wrong-answer");
            }
            if (trueOptionT11 === true) {
                $(".t5-o4").addClass("correct-answer");
            } else {
                $('.t5-o4').addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Перетащите 3 фигуры в ячейки</p>');
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
            if (task2.find(".body-test-body").find(".btn").length) {
                if (task2.find(".body-test-body").find(".btn").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task2.find(".body-test-body").find(".btn").hasClass("correct-answer")) {
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
            if (task5.find(".body-test-body").find(".b").length) {
                if (task5.find(".body-test-body").find(".b").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task5.find(".body-test-body").find(".b").hasClass("correct-answer")) {
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
