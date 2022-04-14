$(document).ready(function () {
    $('#t1-o3').draggable({containment: ".drag-1"});
    $('#t1-o4').draggable({containment: ".drag-1"});
    $('#t1-o5').draggable({containment: ".drag-1"});
    $('#t1-o6').draggable({containment: ".drag-1"});

    $('#t4-o3').draggable({containment: ".drag-4"});
    $('#t4-o4').draggable({containment: ".drag-4"});

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
        var t1_o3 = $('#t1-o3').position();
        var t1_o4 = $('#t1-o4').position();
        var t1_o5 = $('#t1-o5').position();
        var t1_o6 = $('#t1-o6').position();
        var min_left_1 = drag_1.left;
        var max_left_1 = min_left_1 + $('.drag-1 .c1').outerWidth() - 90;
        var min_left_2 = drag_1.left+$('.drag-1 .c1').outerWidth();
        var max_left_2 = min_left_2 + $('.drag-1 .c1').outerWidth() + 100;
        var min_top_1 = drag_1.top + $('.drag-1 .c1').height();
        var max_top_1 = min_top_1 + 40;
//        alert(min_top_1+'---------'+max_top_1+'------'+t1_o3.top);
//        alert(min_left_1+'---------'+max_left_1+'------'+t1_o3.left+'------');
//        alert(min_left_2+'---------'+max_left_2+'------'+t1_o4.left);
        var trueOptionT3 = false;
        var trueOptionT5 = false;
        var checkOption3 = false;
        var checkOption4 = false;
        var checkOption5 = false;
        var checkOption6 = false;
        
        if (t1_o3.left >= min_left_2 && t1_o3.left <= max_left_2 && t1_o3.top >= min_top_1 && t1_o3.top <= max_top_1){
            trueOptionT3 = true;
        } 
        if (t1_o5.left >= min_left_1 && t1_o5.left <= max_left_1 && t1_o5.top >= min_top_1 && t1_o5.top <= max_top_1){
            trueOptionT5 = true;
        }
        
        var checkVariant0 = 0;
        if (t1_o3.left >= min_left_1 && t1_o3.left <= max_left_2 && t1_o3.top >= min_top_1 && t1_o3.top <= max_top_1){
            checkVariant0++;
            checkOption3 = true;
        }
        if (t1_o4.left >= min_left_1 && t1_o4.left <= max_left_2 && t1_o4.top >= min_top_1 && t1_o4.top <= max_top_1){
            checkVariant0++;
            checkOption4 = true;
        }
        if (t1_o5.left >= min_left_1 && t1_o5.left <= max_left_2 && t1_o5.top >= min_top_1 && t1_o5.top <= max_top_1){
            checkVariant0++;
            checkOption5 = true;
        }
        if (t1_o6.left >= min_left_1 && t1_o6.left <= max_left_2 && t1_o6.top >= min_top_1 && t1_o6.top <= max_top_1){
            checkVariant0++;
            checkOption6 = true;
        }
//        alert(checkVariant7 +'8'+ checkVariant8 +'9'+ checkVariant9 +'10'+ checkVariant10 +'11'+ checkVariant11 +'12'+ checkVariant12);
        if (checkVariant0 == 2){
            checkVariant = true;
        } else {
            checkVariant = false;
        }
        if (checkVariant) {
            if (checkOption3){
                if (trueOptionT3 === true) {
                    $(".t1-o3").addClass("correct-answer");
                } else {
                    $('.t1-o3').addClass("wrong-answer");
                }
            }
            if (checkOption5){
                if (trueOptionT5 === true) {
                    $(".t1-o5").addClass("correct-answer");
                } else {
                    $('.t1-o5').addClass("wrong-answer");
                }
            }
            if (checkOption4){
                $('.t1-o4').addClass("wrong-answer");
            }
            if (checkOption6){
                $('.t1-o6').addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Перетащите элементы в ячейки</p>');
        }
    });
// Task 2
    var trueOption1 = false;
    var trueOption2 = false;


    $("button.check-button2").click(function () {
        $('.error-message').remove();
        if ($("#t2-o1").val().trim() != '' && $("#t2-o6").val().trim() != '' && $("#t2-o7").val().trim() != '' && $("#t2-o8").val().trim() != '' && $("#t2-o13").val().trim() != '' && $("#t2-o14").val().trim() != '') {
            checkVariant = true;
        } else {
            checkVariant = false;
        }

        if (checkVariant) {
            if ($('.t2-02').val() == '·') {
                trueOption1 = true;
            }
            if ($('.t2-09').val() == '–') {
                trueOption2 = true;
            }
            if (trueOption1 === true) {
                $(".t2-02").addClass("correct-answer");
            } else {
                $(".t2-02").addClass("wrong-answer");
            }

            if (trueOption2 === true) {
                $(".t2-09").addClass("correct-answer");
            } else {
                $(".t2-09").addClass("wrong-answer");
            }


            if ($("#t2-o1").val() === "8") {
                $("#t2-o1").addClass("correct-answer");
                $("#t2-o1").removeClass("wrong-answer");
            } else {
                $("#t2-o1").addClass("wrong-answer");
            }
            if ($("#t2-o6").val() === "4") {
                $("#t2-o6").addClass("correct-answer");
                $("#t2-o6").removeClass("wrong-answer");
            } else {
                $("#t2-o6").addClass("wrong-answer");
            }
            if ($("#t2-o7").val() === "32") {
                $("#t2-o7").addClass("correct-answer");
                $("#t2-o7").removeClass("wrong-answer");
            } else {
                $("#t2-o7").addClass("wrong-answer");
            }
            if ($("#t2-o8").val() === "32") {
                $("#t2-o8").addClass("correct-answer");
                $("#t2-o8").removeClass("wrong-answer");
            } else {
                $("#t2-o8").addClass("wrong-answer");
            }
            if ($("#t2-o13").val() === "8") {
                $("#t2-o13").addClass("correct-answer");
                $("#t2-o13").removeClass("wrong-answer");
            } else {
                $("#t2-o13").addClass("wrong-answer");
            }
            if ($("#t2-o14").val() === "24") {
                $("#t2-o14").addClass("correct-answer");
                $("#t2-o14").removeClass("wrong-answer");
            } else {
                $("#t2-o14").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Отметьте все варианты</p>');
        }
    });
// Task 3
    var trueOption1 = false;
    var button1 = $("button.check-button3");

    $("button.t3-o5").click(function () {
        $('.error-message').remove();
        $("button.t3-o5").parent().children().removeClass("lightblue-answer");
        $("button.t3-o5").addClass("lightblue-answer");
        button1 = $("button.t3-o5");
        trueOption1 = false;
    });
    $("button.t3-o6").click(function () {
        $('.error-message').remove();
        $("button.t3-o6").parent().children().removeClass("lightblue-answer");
        $("button.t3-o6").addClass("lightblue-answer");
        button1 = $("button.t3-o6");
        trueOption1 = true;
    });

    $("button.check-button3").click(function () {
        $('.error-message').remove();
        if ($('.lightblue-answer').length == 1 && $("#t3-o1").val().trim() != '' && $("#t3-o2").val().trim() != '' && $("#t3-o4").val().trim() != '' && $("#t3-o7").val().trim() != '' && $("#t3-o8").val().trim() != '') {
            checkVariant = true;
        } else {
            checkVariant = false;
        }
        if (checkVariant) {
            $("button.optionbutton").removeClass("lightblue-answer");
            if (trueOption1 === true) {
                $("button.t3-o6").addClass("correct-answer");
            } else {
                button1.addClass("wrong-answer");
            }
            if ($("#t3-o1").val() === "18") {
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
            if ($("#t3-o4").val() === "18") {
                $("#t3-o4").addClass("correct-answer");
                $("#t3-o4").removeClass("wrong-answer");
            } else {
                $("#t3-o4").addClass("wrong-answer");
            }
            if ($("#t3-o7").val() === "2") {
                $("#t3-o7").addClass("correct-answer");
                $("#t3-o7").removeClass("wrong-answer");
            } else {
                $("#t3-o8").addClass("wrong-answer");
            }
            if ($("#t3-o8").val() === "9") {
                $("#t3-o8").addClass("correct-answer");
                $("#t3-o8").removeClass("wrong-answer");
            } else {
                $("#t3-o8").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Отметьте все варианты</p>');
        }
    });
// Task 4
    $("button.check-button4").click(function () {
        $('.error-message').remove();
        var drag_4 = $('.drag-4').position();
        var t4_o3 = $('#t4-o3').position();
        var t4_o4 = $('#t4-o4').position();
        var min_left_1 = drag_4.left + $('.drag-4 .c1').outerWidth() + 30;
        var max_left_1 = min_left_1 + 200;
        var min_top_1 = drag_4.top + $('.drag-4 th:first-child').height() +10;
        var max_top_1 = min_top_1 + 60;
        var min_top_2 = drag_4.top + $('.drag-4 th:first-child').height() + $('.drag-4 .c1').height() + 30;
        var max_top_2 = min_top_2 + 60;
//        alert(min_left_1+'---------'+max_left_1+'------'+t4_o3.left);
//        alert(min_top_1+'---------'+max_top_1+'------'+t4_o3.top+'------');
//        alert(min_top_2+'---------'+max_top_2+'------'+t4_o4.top);
        var trueOptionT3 = false;
        var trueOptionT4 = false;
        var checkOption3 = false;
        var checkOption4 = false;
        
        if (t4_o3.left >= min_left_1 && t4_o3.left <= max_left_1 && t4_o3.top >= min_top_1 && t4_o3.top <= max_top_1){
            trueOptionT3 = true;
        } 
        if (t4_o4.left >= min_left_1 && t4_o4.left <= max_left_1 && t4_o4.top >= min_top_2 && t4_o4.top <= max_top_2){
            trueOptionT4 = true;
        }
        
        if (t4_o3.left >= min_left_1 && t4_o3.left <= max_left_1 && t4_o3.top >= min_top_1 && t4_o3.top <= max_top_2){
            checkOption3 = true;
        }
        if (t4_o4.left >= min_left_1 && t4_o4.left <= max_left_1 && t4_o4.top >= min_top_1 && t4_o4.top <= max_top_2){
            checkOption4 = true;
        }
        
//        alert(checkVariant7 +'8'+ checkVariant8 +'9'+ checkVariant9 +'10'+ checkVariant10 +'11'+ checkVariant11 +'12'+ checkVariant12);
        if (checkOption3 && checkOption4){
            checkVariant = true;
        } else {
            checkVariant = false;
        }
        if (checkVariant) {
            if (checkOption3){
                if (trueOptionT3 === true) {
                    $(".t4-o3").addClass("correct-answer");
                } else {
                    $('.t4-o3').addClass("wrong-answer");
                }
            }
            if (checkOption4){
                if (trueOptionT4 === true) {
                    $(".t4-o4").addClass("correct-answer");
                } else {
                    $('.t4-o4').addClass("wrong-answer");
                }
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Перетащите элементы в ячейки</p>');
        }
    });
// Task 5
    var trueOption1 = false;
    var trueOption2 = false;

    var button1 = $("button.check-button3");
    var button2 = $("button.check-button3");


    $("button.t5-o2").click(function () {
        $('.error-message').remove();
        $("button.t5-o2").parent().children().removeClass("lightblue-answer");
        $("button.t5-o2").addClass("lightblue-answer");
        button1 = $("button.t5-o2");
        trueOption1 = true;
    });
    $("button.t5-o3").click(function () {
        $('.error-message').remove();
        $("button.t5-o3").parent().children().removeClass("lightblue-answer");
        $("button.t5-o3").addClass("lightblue-answer");
        button1 = $("button.t5-o3");
        trueOption1 = false;
    });
    $("button.t5-o4").click(function () {
        $('.error-message').remove();
        $("button.t5-o4").parent().children().removeClass("lightblue-answer");
        $("button.t5-o4").addClass("lightblue-answer");
        trueOption1 = false;
        button1 = $("button.t5-o4");
    });

    $("button.t5-o5").click(function () {
        $('.error-message').remove();
        $("button.t5-o5").parent().children().removeClass("lightblue-answer");
        $("button.t5-o5").addClass("lightblue-answer");
        button1 = $("button.t5-o5");
        trueOption1 = false;
    });
    $("button.t5-o9").click(function () {
        $('.error-message').remove();
        $("button.t5-o9").parent().children().removeClass("lightblue-answer");
        $("button.t5-o9").addClass("lightblue-answer");
        button2 = $("button.t5-o9");
        trueOption2 = false;
    });
    $("button.t5-o10").click(function () {
        $('.error-message').remove();
        $("button.t5-o10").parent().children().removeClass("lightblue-answer");
        $("button.t5-o10").addClass("lightblue-answer");
        trueOption2 = true;
        button1 = $("button.t5-o10");
    });

    $("button.t5-o11").click(function () {
        $('.error-message').remove();
        $("button.t5-o11").parent().children().removeClass("lightblue-answer");
        $("button.t5-o11").addClass("lightblue-answer");
        trueOption2 = false;
        button2 = $("button.t5-o11");
    });
    $("button.t5-o12").click(function () {
        $('.error-message').remove();
        $("button.t5-o12").parent().children().removeClass("lightblue-answer");
        $("button.t5-o12").addClass("lightblue-answer");
        trueOption2 = false;
        button2 = $("button.t5-o12");
    });


    $("button.check-button5").click(function () {
        $('.error-message').remove();
        if ($('.lightblue-answer').length == 2 && 
$("#t5-o1").val().trim() != '' && 
$("#t5-o6").val().trim() != '' && 
$("#t5-o7").val().trim() != '' && 
$("#t5-o8").val().trim() != '' && 
$("#t5-o13").val().trim() != '' 
&& $("#t5-o14").val().trim() != '') {
            checkVariant = true;
        } else {
            checkVariant = false;
        }
        if (checkVariant) {
            $("button.optionbutton").removeClass("lightblue-answer");
            if (trueOption1 === true) {
                $("button.t5-o2").addClass("correct-answer");
            } else {
                button1.addClass("wrong-answer");
            }

            if (trueOption2 === true) {
                $("button.t5-o10").addClass("correct-answer");
            } else {
                button2.addClass("wrong-answer");
            }


            if ($("#t5-o1").val() === "12") {
                $("#t5-o1").addClass("correct-answer");
                $("#t5-o1").removeClass("wrong-answer");
            } else {
                $("#t5-o1").addClass("wrong-answer");
            }
            if ($("#t5-o6").val() === "6") {
                $("#t5-o6").addClass("correct-answer");
                $("#t5-o6").removeClass("wrong-answer");
            } else {
                $("#t5-o6").addClass("wrong-answer");
            }
            if ($("#t5-o7").val() === "18") {
                $("#t5-o7").addClass("correct-answer");
                $("#t5-o7").removeClass("wrong-answer");
            } else {
                $("#t5-o7").addClass("wrong-answer");
            }
            if ($("#t5-o8").val() === "28") {
                $("#t5-o8").addClass("correct-answer");
                $("#t5-o8").removeClass("wrong-answer");
            } else {
                $("#t5-o8").addClass("wrong-answer");
            }
            if ($("#t5-o13").val() === "18") {
                $("#t5-o13").addClass("correct-answer");
                $("#t5-o13").removeClass("wrong-answer");
            } else {
                $("#t5-o13").addClass("wrong-answer");
            }
            if ($("#t5-o14").val() === "10") {
                $("#t5-o14").addClass("correct-answer");
                $("#t5-o14").removeClass("wrong-answer");
            } else {
                $("#t5-o14").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Отметьте все варианты</p>');
        }
    });
// Task 6
    /*$("button.check-button5").click(function () {
        $('.error-message').remove();
        if ($("#t6-o1").val().trim() == '') {
            checkVariant = false;
        } else {
            checkVariant = true;
        }
        if (checkVariant) {
            if ($("#t6-o1").val() === "C") {
                $("#t6-o1").addClass("correct-answer");
                $("#t6-o1").removeClass("wrong-answer");
            } else {
                $("#t6-o1").addClass("wrong-answer");
            }
        } else {
            $('.bottom-buttons').before('<p class="error-message">Заполните все поля</p>');
        }
    });*/
    $("button.check-button1").click(function () {
        if (checkVariant) {
            $("button.check-button1").addClass("disabled");
            if (task1.find(".body-test-body").find(".btn").length) {
                if (task1.find(".body-test-body").find(".btn").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task1.find(".body-test-body").find(".btn").hasClass("correct-answer")) {
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
            if (task4.find(".body-test-body").find(".btn").length) {
                if (task4.find(".body-test-body").find(".btn").hasClass("wrong-answer")) {
                    scoreMinus = scoreMinus + 1;
                } else if (task4.find(".body-test-body").find(".btn").hasClass("correct-answer")) {
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
        //checkVariant = false;
        $("span.plusScore").text(scorePlus);
        $("span.minusScore").text(scoreMinus);
    });
});
