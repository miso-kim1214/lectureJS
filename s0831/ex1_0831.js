function ex1_a(){
    document.getElementById("exQuery").innerText = "a. 두 수를 입력 받아서, 출력해 봅시다."

    let num1 = prompt("첫 번재 숫자를 입력하세요", "0~99")
    let num2 = prompt("두 번재 숫자를 입력하세요", "0~99")

    document.getElementById("exAnswer").innerText = "입력받은 두 수의 값은 : \n "+ num1 +"과" +num2 +"입니다."
}

let num1, num2;
let exQuery = document.getElementById("exQuery");
let exAnswer = document.getElementById("exAnswer");

function ex1_b(){
    exQuery.innerText = "b. 두 수를 입력받아서, 두 수가 짝수인지 홀수인지 출력해 봅시다.";
    num1 = parseInt(prompt("첫 번재 숫자를 입력하세요", "0~99"));
    num2 = parseInt(prompt("두 번재 숫자를 입력하세요", "0~99"));

    var p = document.createElement("p");
    var txt = document.createElement("");

    if(num1 % 2 == 0){
        txt.nodeValue = num1 + ": 짝수";

    }else{
        txt.nodeValue = num + ": 홀수";
    }
//p태그 추가
    p.appendChild(txt);
    exAnswer.appendChild(p);

    var p = document.createElement("p");
    var txt = document.createTextNode("");

  
    if(num2 % 2 == 0){
        txt.nodeValue = num1 + ": 짝수";

    }else{
        txt.nodeValue = num + ": 홀수";
    }
    p.appendChild(txt);
    exAnswer.appendChild(p);
}

function ex1_c2(num){
    let p = document.createElement("p");
    let txt = document.createTextNode("");

    if(num1 % 2 == 0){
        txt.nodeValue = num1 + ": 짝수";

    }else{
        txt.nodeValue = num + ": 홀수";
    }
    p.appendChild(txt);
    exAnswer.appendChild(p);
}
function ex1_c(){
    exQuery.innerText=
    "c. 두 수를 입력받아, 함수{짝수 or 홀수 출력.}를 작성합시다";

    num1 = parseInt(prompt("첫 번째 숫자를 입력하세요", "0~99"));
    num2 = parseInt(prompt("두 번째 숫자를 입력하세요", "0~99"));

    ex1_c(num1);
    ex1_c2(num2);
}
