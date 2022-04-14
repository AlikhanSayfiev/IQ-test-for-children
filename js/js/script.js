var error_message = [
    {
        type: "option_choice",
        message: "Выберите вариант"
    },
    {
        type: "fill_fields",
        message: "Заполните все поля"
    },
    {
        type: "pair",
        message: "Соедините все числа"
    },
    {
        type: "check_fields",
        message: "Заполните все поля"
    },
    {
        type: "select_fields",
        message: "Выберите все элементы"
    }
]

var slideIndex = 1
var timer = 0

window.addEventListener('load', function (event) {
    window.setInterval(function(){timer += 1}, 1000)
    maskotShow()
    const slider = document.getElementsByClassName("task")
    const dots = document.getElementById("dots")
    for (var i = 0; i < slider.length; i++) {
        const span = document.createElement("span")
        span.className = "dot"
        dots.appendChild(span)

    }
    showSlides(slideIndex);
    document.getElementById("check").addEventListener("click", checkTask, false);
    const inputs_name = document.querySelectorAll("[name^=in]")
    for (var i = 0; i < inputs_name.length; i++) {
        inputs_name[i].addEventListener("click", selectTask, false);
        inputs_name[i].addEventListener('change', selectTask, false)
    }

    for (var i = 0; i < tasks.length; i++) {
        document.getElementById("graphic_result").appendChild(document.createElement("span"))
    }


});

function ErrorMessage() {
    document.getElementById("error_message").style.display = "block"
    const span = document.createElement("span")
    span.textContent = error_message.filter(function(x){
        return x.type == tasks[slideIndex - 1].type
    })[0].message
    document.getElementById("error_message").innerHTML = span.innerHTML
}
function checkTask() {
    document.getElementById("error_message").style.display = "none"
    if (!Task()) {
        ErrorMessage()
        return false
    }
    return true

}
function Task() {
    var task = tasks[slideIndex - 1]
    var i = 0 
    switch (task.type) {
        case "option_choice":
            if (task.self_answer === undefined) {
                return false
            }
            const inputs_name = document.querySelectorAll("[name="+tasks[slideIndex - 1].input_name+"]")
            for (var i = 0; i < inputs_name.length; i++) {
                inputs_name[i].parentElement.className = "checkbox";
            }
            if (task.self_answer === task.answer_id) {
                document.getElementById(task.self_answer).parentElement.className += " aright"
            } else {
                document.getElementById(task.self_answer).parentElement.className += " wrong"
            }
            return true

        case "fill_fields":
            for (i = 0; i < task.fields.length; i++) {
                if (task.fields[i].self_answer === undefined) {
                    return false
                }
                if (task.fields[i].answer == task.fields[i].self_answer) {
                    document.getElementById(task.fields[i].answer_id).className = "field__input aright"
                } else {
                    document.getElementById(task.fields[i].answer_id).className = "field__input wrong"
                }
            }
            return true
        case "pair":
            for (i = 0; i < task.fields.length; i++) {
                if (task.fields[i].self_answer === undefined) {
                    return false
                }
                const elem = document.querySelector("svg.pair__svg").childNodes[i]
                if (task.fields[i].answer_id == task.fields[i].self_answer) {
                    elem.setAttribute("stroke", "green")
                } else {
                    elem.setAttribute("stroke", "red")
                }
            }
            return true
        case "check_fields":
            for (i = 0; i < task.fields.length; i++) {
                if (!task.fields[i].value) {
                    document.getElementById(task.fields[i].answer_id).className = "field__input"
                    return false
                }
                if (task.fields[i].answer.indexOf(task.fields[i].value) !== -1) {
                    document.getElementById(task.fields[i].answer_id).className = "field__input aright"
                } else {
                    document.getElementById(task.fields[i].answer_id).className = "field__input wrong"
                }

            }
            return true

        case "select_fields":
            for (i = 0; i < task.fields.length; i++) {
                if (!task.fields[i].value) {
                    document.getElementById(task.fields[i].answer_id).className = "field__select"
                    return false
                }

                if (task.fields[i].value == task.fields[i].answer) {
                    document.getElementById(task.fields[i].answer_id).className = "field__select aright"
                } else {
                    document.getElementById(task.fields[i].answer_id).className = "field__select wrong"

                }
            }
            return true


    }
}

function selectTask(event) {
    document.getElementById("error_message").style.display = "none"
    var task = tasks[slideIndex - 1]
    switch (task.type) {
        case "option_choice":
            task.self_answer = event.target.getAttribute("id")
            break
        case "fill_fields":
            for (var i = 0; i < task.fields.length; i++) {
                document.getElementById(task.fields[i].answer_id).className = "field__input"
                if (task.fields[i].answer_id == event.target.getAttribute("id")) {
                    task.fields[i].self_answer = event.target.value
                }

            }
            break;
        case "check_fields":
            for (var i = 0; i < task.fields.length; i++) {
                task.fields[i].value = document.getElementById(task.fields[i].answer_id).value
            }
            break
        case "select_fields":
            for (var i = 0; i < task.fields.length; i++) {
                task.fields[i].value = document.getElementById(task.fields[i].answer_id).value
            }
            break
    }
}
function plusSlides(n) {
    document.getElementById("error_message").style.display = "none"
    if (n > 0) {
        if (!checkTask()) {
            ErrorMessage()
            return
        }
    }
    showSlides(slideIndex += n);
    
    normalize_pair()
}

function showSlides(n) {
    
    document.getElementById("prev").style.display = "";
    document.getElementById("next").style.display = "";

    
    const slides = document.getElementsByClassName("task");
    if (n < 1) { slideIndex = 1 }
    if (n > slides.length) { 
        result() 
        return
    }
    const dots = document.getElementById("dots").children;

    if (slideIndex == 1) {
        document.getElementById("prev").style.display = "none";
    }
    if (slideIndex == slides.length + 1) {
        document.getElementById("next").style.display = "none";
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].className = "task";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].className += " active";
    dots[slideIndex - 1].className += " active";
    maskotShow()
}

function maskotShow() {
    const maskot = document.getElementById("maskot").children
    for (var i = 0; i < maskot.length; i++) {
        maskot[i].style.display = null
    }
    maskot[slideIndex - 1].style.display = "block"
}
function normalize_pair() {
    const svg = document.getElementsByClassName("pair__svg")
    for (var i = 0; i < svg.length; i++) {
        svg[i].setAttribute("viewBox", "0 0 "+svg[i].clientWidth+" "+svg[i].parentElement.clientHeight)
    }

}

function pair(task_id) {
    
    normalize_pair()
    document.getElementById(task_id).querySelector(".answers").ondragstart = function () {
        return false;
    };
    window.addEventListener("resize", function () {
        normalize_pair()
    })
    document.getElementById(task_id).querySelector(".answers").addEventListener("click", function (event) {
        const task = tasks[slideIndex - 1]
        event.preventDefault()
        if (event.target.localName == "input") {
            for (var i = 0; i < task.fields.length; i++) {
                if (task.fields[i].pair_id == event.target.id) {
                    task.active_elem = event.target.id
                }
            }
        }

        else {
            if (event.target.localName == "img") {
                
                for (var i = 0; i < task.fields.length; i++) {
                    
                   
                    
                    if (task.fields[i].pair_id == task.active_elem) {
                        task.fields[i].self_answer = event.target.parentElement.id
                        const line = document.querySelector(".pair__svg").childNodes[i]
                        const active_elem = document.getElementById(task.active_elem)
                        line.setAttribute("y1", active_elem.parentElement.parentElement.offsetTop + active_elem.offsetHeight / 2 )
                        line.setAttribute("x2", line.parentElement.clientWidth - 4)
                        line.setAttribute("y2", event.target.parentElement.parentElement.offsetTop + event.target.offsetHeight / 2 )
                        task.active_elem = undefined
                    }
                }


            }
        }
    })

}

function result() {
    document.getElementById("wrapper_task").style.display = "none"
    document.querySelector("header").style.display = "none"
    document.getElementById("result").removeAttribute("style")
    document.body.setAttribute("class", "result")
    var report = tasks.map(function(){})
    for (var ti = 0; ti < tasks.length; ti++) {
        var task = tasks[ti]
        switch (task.type) {
            case "option_choice":
                report[ti] = task.self_answer === task.answer_id
                break
            case "fill_fields":
                report[ti] = task.fields.map(function(value){
                    return value.answer === value.self_answer
                }).indexOf(false) == -1 
                break
            case "pair":
                
                report[ti] = task.fields.map(function(value){
                    return value.answer_id == value.self_answer
                }).indexOf(false) == -1 
                break
            case "check_fields":
                report[ti] = task.fields.map(function(value){
                    return value.answer.indexOf(value.value) !== -1 
                }).indexOf(false) == -1 
                break

            case "select_fields":
                report[ti] = task.fields.map(function(value){
                    return value.value == value.answer
                }).indexOf(false) == -1 
                break
        }
    }
    for (var ti = 0; ti < tasks.length; ti++) {
        if (report[ti]){
            document.getElementById("graphic_result").children[ti].className = "aright"
        }else {
            document.getElementById("graphic_result").children[ti].className = "wrong"
        }
    }
    var correct_answers = report.reduce(function(sum, current){
        if(current === true){
            return sum + 1;
        }else{
            return sum
        }
      }, 0);
    document.getElementById("correct_answers").querySelector("span").innerText = correct_answers
    document.getElementById("error_answers").querySelector("span").innerText = report.reduce(function(sum, current){
        if(!current){
            return sum + 1;
        }else{
            return sum
        }
      }, 0);
    var mt = timer / 60 | 0
    var st = timer % 60
    if (st<10) {
        st = "0" + String(st)
    } 
    document.getElementById("spent_time").querySelector("span").innerText = mt+":"+st

    document.querySelector("img.result_img").setAttribute("src", "./assert/images/result_"+correct_answers+".png")
}
