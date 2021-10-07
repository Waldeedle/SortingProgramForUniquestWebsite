//  I P O

//  I: The data inputted by users

//  P: Parse that data into JSON and save to local storage
//  Waleed Masoom
//  ICS4UO
//  April 3RD, 2015
//  Signup Program
//  The program takes the object that was made from user input in the text boxes on the page and passes that data into the local storage so that it can be called from any other page on the website.
var studentProfile = JSON.parse(localStorage.getItem("students")) || [];

//starting our index at 0 unless there is already a students key that contains values present within local storage.
if (localStorage.getItem("students") === null) {
  var index = 0;
} else {
    var index = JSON.parse(localStorage.getItem("students")).length;
}

function saveProfile() { 

  //the arrays that are to be added to the studentProfile array already there or to be used to create the studentProfile array within the studentProfile array are defined as whatever strings are inputted into the textboxes.
 	//in order to allow addition instead of overwriting previous entries the push command was used
  studentProfile.push({
		firstName: document.getElementById("fname").value,
		surname: document.getElementById("lname").value,
		highSchool: document.getElementById("hs").value,
		gender: document.getElementById("gender").value,
		grade: document.getElementById("grade").value,
		studentNumber: document.getElementById("studnumber").value,
		email: document.getElementById("email").value,
		userName: document.getElementById("username").value,
		password: document.getElementById("password").value,
	});
	//now after it has defined a user we want to input into a new user instead of replacing another user's data, so we add to the index.
 	index = index + 1;
 	
  //parsing it to local storage as a JSON string
  localStorage.setItem("students", JSON.stringify(studentProfile));

	//clearing all the textboxes to make it easy and efficient for multiple accounts to be registered.
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("hs").value = "";
  document.getElementById("gender").value = "null";
  document.getElementById("grade").value = "";
	document.getElementById("studnumber").value = "";
  document.getElementById("email").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

//this function is because the actual color of the dropdown for gender was just black but I wanted it to be grey when the default value was shown.
$(function() {
	//calls the specific select input box and changes color to gray
    $('#gender').css('color','gray');
    //on click jquery evaluates whether the user has changed the value to either male and female and then changes the color back to black otherwise it stays grey.
    $('#gender').click(function() {
       var current = $('#gender').val();
       if (current != 'null') {
           $('#gender').css('color','black');
       } else {
           $('#gender').css('color','gray');
       }
    });

    //if the user clicks sumbit and all values reset I want the gender option to be grey again
    $('#submit').click(function() {
           $('#gender').css('color','gray');
	});    
});