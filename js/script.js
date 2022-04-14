$(document).ready(function(){
  var task1 = $("ul").children().first();
  var task2 = task1.next();
  var task3 = task2.next();
  var task4 = task3.next();
  var task5 = task4.next();

//Начало переключателя

  $("button.next-button1").click(function(){ //Переключение заданий Вперед
    task1.hide();
    task2.show();
    
  });

  $("button.back-button1").click(function(){ //Переключение заданий Назад
     //todo
  });


  $("button.next-button2").click(function(){ //Переключение заданий Вперед
    task1.hide();
    task3.show();
    
  });

  $("button.back-button2").click(function(){ //Переключение заданий Назад
     task1.hide();
     task1.show();
  });


  $("button.next-button3").click(function(){ //Переключение заданий Вперед
    task1.hide();
    task4.show();
    
  });

  $("button.back-button3").click(function(){ //Переключение заданий Назад
     task3.hide();
     task2.show();
  });


  $("button.next-button4").click(function(){ //Переключение заданий Вперед
    task1.hide();
    task5.show();
    
  });

  $("button.back-button4").click(function(){ //Переключение заданий Назад
     task4.hide();
     task3.show();
  });


$("button.next-button5").click(function(){ //Переключение заданий Вперед
    //todo
    
  });

  $("button.back-button5").click(function(){ //Переключение заданий Назад
     task5.hide();
     task4.show();
  });

//Конец переключений

var trueOption = false; // Task 1 Start
var button = $("button.check-button1");
$("button.t1-oG").click(function(){
  trueOption = true;
});
$("button.t1-o1").click(function(){
  button = $("button.t1-o1");
});
$("button.t1-o3").click(function(){
  button = $("button.t1-o3");
});
$("button.t1-o4").click(function(){
  button = $("button.t1-o4");
});



  $("button.check-button1").click(function(){ 
    if(trueOption === true){
      $("button.t1-oG").addClass("correct-answer");
    }
    else {
      button.addClass("wrong-answer");
    }
  });

var trueOption2 = false; // Task 2 Start
var button2 = $("button.check-button2");



$("button.check-button2").click(function(){ 
    if($("#t2-o1").val() === "26"){
            $("#t2-o1").addClass("correct-answer");
            $("#t2-o1").removeClass("wrong-answer");
    } else{
        $("#t2-o1").addClass("wrong-answer");
    }
    
    if($("#t2-o2").val() === "42"){
          $("#t2-o2").addClass("correct-answer");
          $("#t2-o2").removeClass("wrong-answer");
    } else {
      $("#t2-o2").addClass("wrong-answer");
    }

    if($("#t2-o3").val() === "50") {
        $("#t2-o3").addClass("correct-answer");
        $("#t2-o3").removeClass("wrong-answer");
    } else {
      $("#t2-o3").addClass("wrong-answer");
    }
  });

});
