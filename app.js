var userName = prompt("Enter Your Name")
var eng = +prompt("Enter your English Marks")
var math = +prompt("Enter your Math Marks")
var urdu = +prompt("Enter your Urdu Marks")
var com = +prompt("Enter your Computer Marks")
var studentObtainedMarks = eng + math + urdu + com;
var totalMarks = 400;
var percentage = studentObtainedMarks / totalMarks *100;
console.log("Your name is:" +userName + " Your result is:" + percentage +" %")