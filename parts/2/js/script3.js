$(document).ready(function () {
    $('#t1-o5').draggable({containment: ".drag-1"});
    $('#t1-o6').draggable({containment: ".drag-1"});
    $('#t1-o7').draggable({containment: ".drag-1"});
    $('#t1-o8').draggable({containment: ".drag-1"});
    $('#t1-o9').draggable({containment: ".drag-1"});
    $('#t1-o10').draggable({containment: ".drag-1"});
    $('#t1-o11').draggable({containment: ".drag-1"});
    $('#t1-o12').draggable({containment: ".drag-1"});
    $('#t1-o13').draggable({containment: ".drag-1"});
    $('#t1-o14').draggable({containment: ".drag-1"});
    $('#t1-o15').draggable({containment: ".drag-1"});
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
        var drag_1 = $('.drag-1').position();
        var t1_o5 = $('#t1-o5').position();
        var t1_o6 = $('#t1-o6').position();
        var t1_o7 = $('#t1-o7').position();
        var t1_o8 = $('#t1-o8').position();
        var t1_o9 = $('#t1-o9').position();
        var t1_o10 = $('#t1-o10').position();
        var t1_o11 = $('#t1-o11').position();
        var t1_o12 = $('#t1-o12').position();
        var t1_o13 = $('#t1-o13').position();
        var t1_o14 = $('#t1-o14').position();
        var t1_o15 = $('#t1-o15').position();
        var min_left = drag_1.left+160;
        var max_left = drag_1.left+$('.drag-1').width() - 20;
        
        var min_top_o3 = drag_1.top;
        var max_top_o3 = drag_1.top + 32;
        var min_top_o4 = drag_1.top +75;
        var max_top_o4 = drag_1.top + 113;
//        alert(min_left+'---------'+max_left+'------'+t1_o5.left);
//        alert(min_left+'---------'+max_left+'------'+t1_o6.left);
//        alert(min_top_o3+'---------'+max_top_o3+'------'+t1_o5.top);
//        alert(min_top_o4+'---------'+max_top_o4+'------'+t1_o6.top);
        var trueOptionT5 = false;
        var trueOptionT6 = false;
        var trueOptionT7 = false;
        var trueOptionT8 = false;
        var trueOptionT9 = false;
        var trueOptionT10 = false;
        var trueOptionT11 = false;
        var trueOptionT12 = false;
        var trueOptionT13 = false;
        var trueOptionT14 = false;
        var trueOptionT15 = false;
        var checkVariant5 = false;
        var checkVariant6 = false;
        var checkVariant7 = false;
        var checkVariant8 = false;
        var checkVariant9 = false;
        var checkVariant10 = false;
        var checkVariant11 = false;
        var checkVariant12 = false;
        var checkVariant13 = false;
        var checkVariant14 = false;
        var checkVariant15 = false;
        if (t1_o5.left >= min_left && t1_o5.left <= max_left && t1_o5.top >= min_top_o3 && t1_o5.top <= max_top_o3){
            trueOptionT5 = true;
            checkVariant5 = true;
        }
        if (t1_o5.left >= min_left && t1_o5.left <= max_left && t1_o5.top >= min_top_o4 && t1_o5.top <= max_top_o4){
            checkVariant5 = true;
        }
        if (t1_o6.left >= min_left && t1_o6.left <= max_left && t1_o6.top >= min_top_o4 && t1_o6.top <= max_top_o4){
            trueOptionT6 = true;
            checkVariant6 = true;
        }
        if (t1_o6.left >= min_left && t1_o6.left <= max_left && t1_o6.top >= min_top_o3 && t1_o6.top <= max_top_o3){
            checkVariant6 = true;
        }
        if (t1_o7.left >= min_left && t1_o7.left <= max_left && t1_o7.top >= min_top_o3 && t1_o7.top <= max_top_o3){
            trueOptionT7 = true;
            checkVariant7 = true;
        }
        if (t1_o7.left >= min_left && t1_o7.left <= max_left && t1_o7.top >= min_top_o4 && t1_o7.top <= max_top_o4){
            checkVariant7 = true;
        }
        if (t1_o8.left >= min_left && t1_o8.left <= max_left && t1_o8.top >= min_top_o4 && t1_o8.top <= max_top_o4){
            trueOptionT8 = true;
            checkVariant8 = true;
        }
        if (t1_o8.left >= min_left && t1_o8.left <= max_left && t1_o8.top >= min_top_o3 && t1_o8.top <= max_top_o3){
            checkVariant8 = true;
        }
        if (t1_o9.left >= min_left && t1_o9.left <= max_left && t1_o9.top >= min_top_o3 && t1_o9.top <= max_top_o3){
            trueOptionT9 = true;
            checkVariant9 = true;
        }
        if (t1_o9.left >= min_left && t1_o9.left <= max_left && t1_o9.top >= min_top_o4 && t1_o9.top <= max_top_o4){
            checkVariant9 = true;
        }
        if (t1_o10.left >= min_left && t1_o10.left <= max_left && t1_o10.top >= min_top_o3 && t1_o10.top <= max_top_o3){
            trueOptionT10 = true;
            checkVariant10 = true;
        }
        if (t1_o10.left >= min_left && t1_o10.left <= max_left && t1_o10.top >= min_top_o4 && t1_o10.top <= max_top_o4){
            checkVariant10 = true;
        }
        if (t1_o11.left >= min_left && t1_o11.left <= max_left && t1_o11.top >= min_top_o3 && t1_o11.top <= max_top_o3){
            trueOptionT11 = true;
            checkVariant11 = true;
        }
        if (t1_o11.left >= min_left && t1_o11.left <= max_left && t1_o11.top >= min_top_o4 && t1_o11.top <= max_top_o4){
            checkVariant11 = true;
        }
        if (t1_o12.left >= min_left && t1_o12.left <= max_left && t1_o12.top >= min_top_o4 && t1_o12.top <= max_top_o4){
            trueOptionT12 = true;
            checkVariant12 = true;
        }
        if (t1_o12.left >= min_left && t1_o12.left <= max_left && t1_o12.top >= min_top_o3 && t1_o12.top <= max_top_o3){
            checkVariant12 = true;
        }
        if (t1_o13.left >= min_left && t1_o13.left <= max_left && t1_o13.top >= min_top_o4 && t1_o13.top <= max_top_o4){
            trueOptionT13 = true;
            checkVariant13 = true;
        }
        if (t1_o13.left >= min_left && t1_o13.left <= max_left && t1_o13.top >= min_top_o3 && t1_o13.top <= max_top_o3){
            checkVariant13 = true;
        }
        if (t1_o14.left >= min_left && t1_o14.left <= max_left && t1_o14.top >= min_top_o3 && t1_o14.top <= max_top_o3){
            trueOptionT14 = true;
            checkVariant14 = true;
        }
        if (t1_o14.left >= min_left && t1_o14.left <= max_left && t1_o14.top >= min_top_o4 && t1_o14.top <= max_top_o4){
            checkVariant14 = true;
        }
        if (t1_o15.left >= min_left && t1_o15.left <= max_left && t1_o15.top >= min_top_o4 && t1_o15.top <= max_top_o4){
            trueOptionT15 = true;
            checkVariant15 = true;
        }
        if (t1_o15.left >= min_left && t1_o15.left <= max_left && t1_o15.top >= min_top_o3 && t1_o15.top <= max_top_o3){
            checkVariant15 = true;
        }
        if (checkVariant5 && checkVariant6 && checkVariant7 && checkVariant8 && checkVariant9 && checkVariant10 && checkVariant11 && checkVariant12 && checkVariant13 && checkVariant14 && checkVariant15){
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
            if (trueOptionT9 === true) {
                $(".t1-o9").addClass("correct-answer");
            } else {
                $('.t1-o9').addClass("wrong-answer");
            }
            if (trueOptionT10 === true) {
                $(".t1-o10").addClass("correct-answer");
            } else {
                $('.t1-o10').addClass("wrong-answer");
            }
            if (trueOptionT11 === true) {
                $(".t1-o11").addClass("correct-answer");
            } else {
                $('.t1-o11').addClass("wrong-answer");
            }
            if (trueOptionT12 === true) {
                $(".t1-o12").addClass("correct-answer");
            } else {
                $('.t1-o12').addClass("wrong-answer");
            }
            if (trueOptionT13 === true) {
                $(".t1-o13").addClass("correct-answer");
            } else {
                $('.t1-o13').addClass("wrong-answer");
            }
            if (trueOptionT14 === true) {
                $(".t1-o14").addClass("correct-answer");
            } else {
                $('.t1-o14').addClass("wrong-answer");
            }
            if (trueOptionT15 === true) {
                $(".t1-o15").addClass("correct-answer");
            } else {
                $('.t1-o15').addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Перетащите все элементы в ячейки</p>');
        }
    });
// Task 2
    $('.drag-2 .btn-block').click(function(){
        $(this).toggleClass('lightblue-answer');
    });

    $("button.check-button2").click(function () {
        $('.error-message').remove();
        if ($('.lightblue-answer').length == 0){
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant){
            var trueOptionT2 = false;
            var trueOptionT3 = false;
            var trueOptionT4 = false;
            var trueOptionT9 = false;
            var trueOptionT11 = false;
            var trueOptionT12 = false;
            var trueOptionT15 = false;
            var trueOptionT16 = false;
            var trueOptionT18 = false;
            var trueOptionT23 = false;
            var trueOptionT25 = false;
            if ($('.t2-o1').hasClass('lightblue-answer')){
                $('.t2-o1').removeClass('lightblue-answer');
                $('.t2-o1').addClass('wrong-answer');
            }
            if ($('.t2-o2').hasClass('lightblue-answer')){
                $('.t2-o2').removeClass('lightblue-answer');
                $('.t2-o2').addClass('correct-answer');
                trueOptionT2 = true;
            }
            if ($('.t2-o3').hasClass('lightblue-answer')){
                $('.t2-o3').removeClass('lightblue-answer');
                $('.t2-o3').addClass('correct-answer');
                trueOptionT3 = true;
            }
            if ($('.t2-o4').hasClass('lightblue-answer')){
                $('.t2-o4').removeClass('lightblue-answer');
                $('.t2-o4').addClass('correct-answer');
                trueOptionT4 = true;
            }
            if ($('.t2-o5').hasClass('lightblue-answer')){
                $('.t2-o5').removeClass('lightblue-answer');
                $('.t2-o5').addClass('wrong-answer');
            }
            if ($('.t2-o6').hasClass('lightblue-answer')){
                $('.t2-o6').removeClass('lightblue-answer');
                $('.t2-o6').addClass('wrong-answer');
            }
            if ($('.t2-o7').hasClass('lightblue-answer')){
                $('.t2-o7').removeClass('lightblue-answer');
                $('.t2-o7').addClass('wrong-answer');
            }
            if ($('.t2-o8').hasClass('lightblue-answer')){
                $('.t2-o8').removeClass('lightblue-answer');
                $('.t2-o8').addClass('wrong-answer');
            }
            if ($('.t2-o9').hasClass('lightblue-answer')){
                $('.t2-o9').removeClass('lightblue-answer');
                $('.t2-o9').addClass('correct-answer');
                trueOptionT9 = true;
            }
            if ($('.t2-o10').hasClass('lightblue-answer')){
                $('.t2-o10').removeClass('lightblue-answer');
                $('.t2-o10').addClass('wrong-answer');
            }
            if ($('.t2-o11').hasClass('lightblue-answer')){
                $('.t2-o11').removeClass('lightblue-answer');
                $('.t2-o11').addClass('correct-answer');
                trueOptionT11 = true;
            }
            if ($('.t2-o12').hasClass('lightblue-answer')){
                $('.t2-o12').removeClass('lightblue-answer');
                $('.t2-o12').addClass('correct-answer');
                trueOptionT12 = true;
            }
            if ($('.t2-o13').hasClass('lightblue-answer')){
                $('.t2-o13').removeClass('lightblue-answer');
                $('.t2-o13').addClass('wrong-answer');
            }
            if ($('.t2-o14').hasClass('lightblue-answer')){
                $('.t2-o14').removeClass('lightblue-answer');
                $('.t2-o14').addClass('wrong-answer');
            }
            if ($('.t2-o15').hasClass('lightblue-answer')){
                $('.t2-o15').removeClass('lightblue-answer');
                $('.t2-o15').addClass('correct-answer');
                trueOptionT15 = true;
            }
            if ($('.t2-o16').hasClass('lightblue-answer')){
                $('.t2-o16').removeClass('lightblue-answer');
                $('.t2-o16').addClass('correct-answer');
                trueOptionT16 = true;
            }
            if ($('.t2-o17').hasClass('lightblue-answer')){
                $('.t2-o17').removeClass('lightblue-answer');
                $('.t2-o17').addClass('wrong-answer');
            }
            if ($('.t2-o18').hasClass('lightblue-answer')){
                $('.t2-o18').removeClass('lightblue-answer');
                $('.t2-o18').addClass('correct-answer');
                trueOptionT18 = true;
            }
            if ($('.t2-o19').hasClass('lightblue-answer')){
                $('.t2-o19').removeClass('lightblue-answer');
                $('.t2-o19').addClass('wrong-answer');
            }
            if ($('.t2-o20').hasClass('lightblue-answer')){
                $('.t2-o20').removeClass('lightblue-answer');
                $('.t2-o20').addClass('wrong-answer');
            }
            if ($('.t2-o21').hasClass('lightblue-answer')){
                $('.t2-o21').removeClass('lightblue-answer');
                $('.t2-o21').addClass('wrong-answer');
            }
            if ($('.t2-o22').hasClass('lightblue-answer')){
                $('.t2-o22').removeClass('lightblue-answer');
                $('.t2-o22').addClass('wrong-answer');
            }
            if ($('.t2-o23').hasClass('lightblue-answer')){
                $('.t2-o23').removeClass('lightblue-answer');
                $('.t2-o23').addClass('correct-answer');
                trueOptionT23 = true;
            }
            if ($('.t2-o24').hasClass('lightblue-answer')){
                $('.t2-o24').removeClass('lightblue-answer');
                $('.t2-o24').addClass('wrong-answer');
            }
            if ($('.t2-o25').hasClass('lightblue-answer')){
                $('.t2-o25').removeClass('lightblue-answer');
                $('.t2-o25').addClass('correct-answer');
                trueOptionT25 = true;
            }
            if ($('.t2-o26').hasClass('lightblue-answer')){
                $('.t2-o26').removeClass('lightblue-answer');
                $('.t2-o26').addClass('wrong-answer');
            }
            if ($('.t2-o27').hasClass('lightblue-answer')){
                $('.t2-o27').removeClass('lightblue-answer');
                $('.t2-o27').addClass('wrong-answer');
            }
            if ($('.t2-o28').hasClass('lightblue-answer')){
                $('.t2-o28').removeClass('lightblue-answer');
                $('.t2-o28').addClass('wrong-answer');
            }
            if ($('.t2-o29').hasClass('lightblue-answer')){
                $('.t2-o29').removeClass('lightblue-answer');
                $('.t2-o29').addClass('wrong-answer');
            }
            if (trueOptionT2 && trueOptionT3 && trueOptionT4){
                $('.t2-o30').addClass('correct-answer');
            } else {
                $('.t2-o30').addClass('wrong-answer');
            }
            if (trueOptionT9 && trueOptionT11 && trueOptionT12) {
                $('.t2-o31').addClass('correct-answer');
            } else {
                $('.t2-o31').addClass('wrong-answer');
            }
            if (trueOptionT15 && trueOptionT16 && trueOptionT18){
                $('.t2-o32').addClass('correct-answer');
            } else {
                $('.t2-o32').addClass('wrong-answer');   
            }
            if (trueOptionT23 && trueOptionT25){
                $('.t2-o33').addClass('correct-answer');
            } else {
                $('.t2-o33').addClass('wrong-answer');
            }
        } else {
            if ($('.task-2 .wrong-answer').length == 0 && $('.task-2 .correct-answer').length == 0){
                $('.bottom-buttons').before('<p class="error-message">Отметьте элементы</p>');
            }
        }
    });
// Task 3
    var buttonPressed1 = false;
    var buttonPressed2 = false;
    var buttonPressed3 = false;
    var buttonPressed4 = false;

    $("button.t3-o1").click(function () {
        $("button.t3-o1").addClass("blue-answer");
        buttonPressed1 = true;
        buttonPressed2 = false;
        buttonPressed3 = false;
        buttonPressed4 = false;
    });
    $("button.t3-o2").click(function () {
        $("button.t3-o2").addClass("red-answer");

        buttonPressed1 = false;
        buttonPressed2 = true;
        buttonPressed3 = false;
        buttonPressed4 = false;
    });
    $("button.t3-o3").click(function () {
        $("button.t3-o3").addClass("yellow-answer");
        buttonPressed1 = false;
        buttonPressed2 = false;
        buttonPressed3 = true;
        buttonPressed4 = false;
    });
    $("button.t3-o4").click(function () {
        $("button.t3-o4").addClass("black-answer");
        buttonPressed1 = false;
        buttonPressed2 = false;
        buttonPressed3 = false;
        buttonPressed4 = true;
    });

    $("button.t3-o5").click(function () {
        if (buttonPressed1) {
            $('.arrow-img-1-1').show();
            $('.arrow-img-1-2').hide();
            $("button.t3-o5").addClass("blue-answer");
            $("button.t3-o6").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-1').show();
            $('.arrow-img-2-2').hide();
            $("button.t3-o5").addClass("red-answer");
            $("button.t3-o6").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-1').show();
            $('.arrow-img-3-2').hide();
            $("button.t3-o5").addClass("yellow-answer");
            $("button.t3-o6").removeClass("yellow-answer");
        } else if (buttonPressed4) {
            $('.arrow-img-4-1').show();
            $('.arrow-img-4-2').hide();
            $("button.t3-o5").addClass("black-answer");
            $("button.t3-o6").removeClass("black-answer");
        }

    });
    
    $("button.t3-o6").click(function () {
        if (buttonPressed1) {
            $('.arrow-img-1-2').show();
            $('.arrow-img-1-1').hide();
            $("button.t3-o6").addClass("blue-answer");
            $("button.t3-o5").removeClass("blue-answer");
        } else if (buttonPressed2) {
            $('.arrow-img-2-2').show();
            $('.arrow-img-2-1').hide();
            $("button.t3-o6").addClass("red-answer");
            $("button.t3-o5").removeClass("red-answer");
        } else if (buttonPressed3) {
            $('.arrow-img-3-2').show();
            $('.arrow-img-3-1').hide();
            $("button.t3-o6").addClass("yellow-answer");
            $("button.t3-o5").removeClass("yellow-answer");
        } else if (buttonPressed4) {
            $('.arrow-img-4-2').show();
            $('.arrow-img-4-1').hide();
            $("button.t3-o6").addClass("black-answer");
            $("button.t3-o5").removeClass("black-answer");
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
            if ($("button.t3-o5").hasClass("blue-answer") && $("button.t3-o5").hasClass("black-answer")) {
                $("button.t3-o5").removeClass("blue-answer");
                $("button.t3-o5").removeClass("black-answer");
                $("button.t3-o5").addClass("correct-answer");

                $("button.t3-o1").removeClass("blue-answer");
                $("button.t3-o4").removeClass("black-answer");
                $("button.t3-o1").addClass("correct-answer");
                $("button.t3-o4").addClass("correct-answer");
            } else {
                $("button.t3-o5").removeClass("yellow-answer");
                $("button.t3-o5").removeClass("red-answer");
                $("button.t3-o5").addClass("wrong-answer");

                $("button.t3-o1").removeClass("blue-answer");
                $("button.t3-o4").removeClass("black-answer");
                if ($("button.t3-o5").hasClass("blue-answer")){
                    $("button.t3-o1").addClass("correct-answer");
                } else {
                    $("button.t3-o1").addClass("wrong-answer");
                }
                if ($("button.t3-o5").hasClass("black-answer")){
                    $("button.t3-o4").addClass("correct-answer");
                } else {
                    $("button.t3-o4").addClass("wrong-answer");
                }
            }
            if ($("button.t3-o6").hasClass("yellow-answer") && $("button.t3-o6").hasClass("red-answer")) {
                $("button.t3-o6").removeClass("yellow-answer");
                $("button.t3-o6").removeClass("red-answer");
                $("button.t3-o6").addClass("correct-answer2");

                $("button.t3-o2").removeClass("red-answer");
                $("button.t3-o3").removeClass("yellow-answer");
                $("button.t3-o2").addClass("correct-answer2");
                $("button.t3-o3").addClass("correct-answer2");
            } else {
                $("button.t3-o6").removeClass("blue-answer");       //1-6 blue, 2-4 red, 3-5 yellow
                $("button.t3-o6").removeClass("black-answer");
                $("button.t3-o6").addClass("wrong-answer");

                $("button.t3-o2").removeClass("red-answer");
                $("button.t3-o3").removeClass("yellow-answer");
                if ($("button.t3-o6").hasClass("red-answer")){
                    $("button.t3-o2").addClass("correct-answer2");
                } else {
                    $("button.t3-o2").addClass("wrong-answer");
                }
                if ($("button.t3-o6").hasClass("yellow-answer")){
                    $("button.t3-o3").addClass("correct-answer2");
                } else {
                    $("button.t3-o3").addClass("wrong-answer");
                }
            }
            
        } else {
            $('.bottom-buttons').before('<p class="error-message">Соедините все пары</p>');
        }
    });
// Task 4
    var trueOption = false; // Task 1 Start

    var button = $("button.check-button4");
    $("button.t4-oG").click(function () {
        $('.error-message').remove();
        trueOption = true;
        checkVariant = true;
    });
    $("button.t1-o1").click(function () {
        $('.error-message').remove();
        button = $("button.t4-o1");
        trueOption = false;
        checkVariant = true;
    });
    $("button.t1-o3").click(function () {
        $('.error-message').remove();
        button = $("button.t4-o3");
        trueOption = false;
        checkVariant = true;
    });
    $("button.t1-o4").click(function () {
        $('.error-message').remove();
        button = $("button.t4-o4");
        trueOption = false;
        checkVariant = true;
    });

    $("button.check-button4").click(function () {
        $('.error-message').remove();
        if (checkVariant) {
            if (trueOption === true) {
                $("button.t4-oG").addClass("correct-answer");
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
        if ($("#t5-o1").val().trim() == '' || $("#t5-o2").val().trim() == '' || $("#t5-o3").val().trim() == '' || $("#t5-o4").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t5-o1").val() === "45") {
                $("#t5-o1").addClass("correct-answer");
                $("#t5-o1").removeClass("wrong-answer");
            } else {
                $("#t5-o1").addClass("wrong-answer");
            }
            if ($("#t5-o2").val() === "15") {
                $("#t5-o2").addClass("correct-answer");
                $("#t5-o2").removeClass("wrong-answer");
            } else {
                $("#t5-o2").addClass("wrong-answer");
            }
            if ($("#t5-o3").val() === "15") {
                $("#t5-o3").addClass("correct-answer");
                $("#t5-o3").removeClass("wrong-answer");
            } else {
                $("#t5-o3").addClass("wrong-answer");
            }
            if ($("#t5-o4").val() === "85") {
                $("#t5-o4").addClass("correct-answer");
                $("#t5-o4").removeClass("wrong-answer");
            } else {
                $("#t5-o4").addClass("wrong-answer");
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
