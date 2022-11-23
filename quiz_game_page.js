
p1_name = localStorage.getItem("player1_name");
p2_name = localStorage.getItem("player2_name");

score_2 = 0;
score_1 = 0;

question_turn = "player1";
answer_turn = "player2";

document.getElementById("player1_name").innerHTML = p1_name + ":";
document.getElementById("player2_name").innerHTML = p2_name + ":";
document.getElementById("player2_score").innerHTML=score_2;
document.getElementById("player1_score").innerHTML=score_1;
document.getElementById("question_turn").innerHTML = "Question Turn - " + p1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + p2_name;

function send(output) {
    $("#"+"output").show();
    num_1= document.getElementById("number_1").value;
    num_2= document.getElementById("number_2").value;
    localStorage.setItem("number_1", num_1);
    localStorage.setItem("number_2", num_2);
    actual_answer = parseInt(num_1) * parseInt(num_2);
    question_number = "<h4>" + num_1 + " x " + num_2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer ){
        if(answer_turn == "player1"){
                score_1 = score_1 + 1;
                document.getElementById("player1_score").innerHTML = score_1;
    }            
    else{
                score_2 = score_2 + 1;
                document.getElementById("player2_score").innerHTML = score_2;
        

    }

if(question_turn == "player1"){
    question_turn = "player2";
    document.getElementById("question_turn").innerHTML = "Question Turn - " + p2_name;
    }
    else{
    question_turn = "player1";
    document.getElementById("question_turn").innerHTML = "Question turn - " + p1_name;
    }

if(answer_turn == "player1"){
    answer_turn = "player2";
    document.getElementById("answer_turn").innerHTML  = "Answer Turn - " + p2_name;
    }
    else{
    answer_turn="player1";
    document.getElementById("answer_turn").innerHTML = "Answer Turn - " + p1_name;
    }
    document.getElementById("output").innerHTML = "";
    }
}