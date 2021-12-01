function send(){
    number1=docuement.getElementById("num1").value;
    number2=document.getElementById("num2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+" X "+number2+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_text_box'>";
    check_button="<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    docuement.getElementById("output").innerHTML=row;

    docuement.getElementById("num1").innerHTML="";
    docuement.getElementById("num2").innerHTML="";

}
