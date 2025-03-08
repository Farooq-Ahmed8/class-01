var userName = prompt("Enter Your Name")
var eng = +prompt("Enter your English Marks")
var math = +prompt("Enter your Math Marks")
var urdu = +prompt("Enter your Urdu Marks")
var com = +prompt("Enter your Computer Marks")

var studentObtainedMarks = eng + math + urdu + com;
var totalMarks = 400;
var percentage = (studentObtainedMarks / totalMarks) * 100;
document.write('<h3>' + "Your name is: ", userName+'<br>' + '</h3>');
document.write('<h3>' + "Your Marks are: ", studentObtainedMarks +'<br>' + '</h3>');  
document.write('<h3>' + "Your Percentage is: ", percentage + "%" + '<br>' + '</h3>') ;

var passingMarks = 200;
var result = studentObtainedMarks >= passingMarks ? "Pass" : "Fail";
document.write('<h3>' + "Your Result is: ", result + '</h3>');


