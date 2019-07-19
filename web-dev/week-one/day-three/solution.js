
//Q1
document.getElementById("container");

//Q2
document.querySelector("#container");

//Q3
document.getElementsByClassName("second");

//Q4
 const thirdlist = document.getElementsByClassName("third");
 thirdlist[1];

//Q5
document.getElementById("container").innerHTML += "Hello!";

//Q6
document.getElementsByClassName("footer")[0].classList.add('main');

//Q7
 document.getElementsByClassName("footer")[0].classList.remove('main');

//Q8
const li = document.createElement("li");

//Q9
li.innerText = "four";

//Q10
document.querySelector("ul").appendChild(li);

//Q12
 var l = document.getElementsByTagName("ol")[0]; //get list for 1st ol tag
 l = l.getElementsByTagName("li"); //get list for li tags within 1st ol tag
 for (let i = 0; i < l.length; i++)
   l[i].style.backgroundColor = "green"; //change each background to green

//Q13
document.removeChild(document.getElementsByClassName("footer")[0]);