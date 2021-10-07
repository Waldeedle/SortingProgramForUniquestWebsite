//  I P O

//  I: The object from the signup.js

//  O: Sort the data based on user's preference
//  Waleed Masoom
//  ICS4UO
//  April 20TH, 2015
//  Sort Program
//  The program takes the object that was made from user input in the register page and displays that data in a speficied sorting method.
//get the data in local storage that was saved by the user in the register page.
var students = JSON.parse(localStorage.getItem("students"));

//the page looks to see if there is data in the actual localStorage otherwise it outputs an error.
if (students === null) {
    document.write('<p id="sorry">' + 'Sorry, there\'s no data to sort! You can go create some on the register page.' + '</p>');
}

//the sorting function which holds all the conditions that need to be met in order to sort.
var sortRegister = function (arr, prop, reverse, numeric) {

    //Ensure there's a property specified by the user that they want to sort otherwise it returns just the array.
    if (!prop || !arr) {
        return arr
    }

    //the sort function that uses p as a pivot and then use c as the second element that it compares the pivot to.
    var sort_by = function (field, reverse, primer) {

        // Return the output of the function, which is doing the actual sorting.
        return function (p, c) {

            // Reset the position p, c to the field, which is the array.
            p = primer(p[field]), c = primer(c[field]);

            // Do actual sorting by comparing the pivot to the second compare element, reverse the sorting as needed and returns the result. If p is less than c it stays in place otherwise it swaps with the second element c's position. However if you want to reverse the direction of the sort the elements swap if p is less than c.
            return ((p < c) ? -1 : ((p > c) ? 1 : 0)) * (reverse ? -1 : 1);
        }
    }

    //this if statement allows the user to distinguish between numeric and text strings to prevent 100's from coming before smaller numbers.
    if (numeric) {

        // Do sort "in place" with sort_by function.
        arr.sort(sort_by(prop, reverse, function (p) {

            // - Force the values to be a numeric string.
            // - Replace any non numeric characters.
            // - Parse as float to allow 0.02 values.
            return parseFloat(String(p).replace(/[^0-9.-]+/g, ''));

        }));
    } else {

        // Do sort "in place" with sort_by function.
        arr.sort(sort_by(prop, reverse, function (p) {

            // - Force value to by a text string.
            return String(p).toUpperCase();

        }));
    }
}

//output all data of an array to a certain table template so its organized.
function stringResult(elemID, doing, label) {
    //this takes the id of the div that the program should output to.
    var elem = document.getElementById(elemID);

    //this states that the variable should be like the following template.
    var result = "<p>" + label + "</p>";   
    //this appends each field as a seperate entry into the div and formats it into a simple table.
    result += '<table cellpadding="10" cellspacing="10" bgcolor="#D3D9E5">';

    //this just tells the js to make the following as titles for the different columns/properties of the array.
        result += "<tr>" + "<td>" + '<b>' + '<u>' + 'First Name' + '</u>' + '</b>' +'</td>';
        result += "<td>" + '<b>' + '<u>' + 'Surname' + '</u>' + '</b>' + '</td>';
        result += "<td>" + '<b>' + '<u>' + 'Highschool' + '</u>' + '</b>' + '</td>';
        result += "<td>" + '<b>' + '<u>' + 'Gender' + '</u>' + '</b>' + '</td>';
        result += "<td>" + '<b>' + '<u>' + 'Grade' + '</u>' + '</b>' + '</td>';
        result += "<td>" + '<b>' + '<u>' + 'Student Number' + '</u>' + '</b>' + '</td>';
        result += "<td>" + '<b>' + '<u>' + 'Email' + '</u>' + '</b>' + '</td>';
        result += "<td>" + '<b>' + '<u>' + 'Username' + '</u>' + '</b>' + '</td>' + "</tr>";

    //this goes through the students array and organizes everything into a simple table template.
    for (var i = 0; i < students.length; i++) {
        //sort and normal are ids in the css and it just helps to show what was being sorted.
        result += "<tr>";
        result += '<td class="' + (doing == "firstName" ? "sort" : "normal") + '">';
        result += students[i].firstName + "</td>";
        
        result += '<td class="' + (doing == "surname" ? "sort" : "normal") + '">';
        result += students[i].surname + "</td>";
        
        result += '<td class="' + (doing == "highSchool" ? "sort" : "normal") + '">';
        result += students[i].highSchool + "</td>";
        
        result += '<td class="' + (doing == "gender" ? "sort" : "normal") + '">';
        result += students[i].gender + "</td>";
        
        result += '<td class="' + (doing == "grade" ? "sort" : "normal") + '">';
        result += students[i].grade + "</td>";

        result += '<td class="' + (doing == "studentNumber" ? "sort" : "normal") + '">';
        result += students[i].studentNumber + "</td>";

        result += '<td class="' + (doing == "email" ? "sort" : "normal") + '">';
        result += students[i].email + "</td>";

        result += '<td class="' + (doing == "userName" ? "sort" : "normal") + '">';
        result += students[i].userName + "</td>";           
        result += "</tr>";
    }
    result += "</table>";
    result += "<br/>"; 
    //this then tell js to ouput the table made onto the page in the specified div id. 
    elem.innerHTML = result;
}	

//below is just calling the code to print out the certain results of the sort function in the template.
//output the original array, first to allow comparisons.
stringResult("d1",'', "Original Data");
//output the data according to which sorting method the user would like.
$('select[name="dropdown"]').change(function(){
if ($(this).val() == "1"){
    // Sort First Name
    sortRegister(students, 'firstName', false, false);
    stringResult("d1", 'firstName', "First Name Ascending");
} else if ($(this).val() == "2") {
    // Sort First Name in reverse
    sortRegister(students, 'firstName', true, false);
    stringResult("d1", 'firstName', "First Name Descending");
} else if ($(this).val() == "3") {
    // Sort Surname
    sortRegister(students, 'surname', false, false);
    stringResult("d1", 'surname', "Surname Ascending");
} else if ($(this).val() == "4") {
    // Sort Surname in reverse
    sortRegister(students, 'surname', true, false);
    stringResult("d1", 'surname', "Surname Descending");
} else if ($(this).val() == "5") {
    // Sort Highschool
    sortRegister(students, 'highSchool', false, false);
    stringResult("d1", 'highSchool', "Highschool Ascending");
} else if ($(this).val() == "6") {
    // Sort Highschool in reverse
    sortRegister(students, 'highSchool', true, false);
    stringResult("d1", 'highSchool', "Highschool Descending");
} else if ($(this).val() == "7") {
    // Sort Gender
    sortRegister(students, 'gender', false, false);
    stringResult("d1", 'gender', "Gender");
} else if ($(this).val() == "8") {
    // Sort Gender in reverse
    sortRegister(students, 'gender', true, false);
    stringResult("d1", 'gender', "Gender reverse");
} else if ($(this).val() == "9") {
    // Sort Grade
    sortRegister(students, 'grade', false, true);
    stringResult("d1", 'grade', "Grade");
} else if ($(this).val() == "10") {
    // Sort Grade in reverse
    sortRegister(students, 'grade', true, true);
    stringResult("d1", 'grade', "Grade reverse");
} else if ($(this).val() == "11") {
    // Sort Student Number
    sortRegister(students, 'studentNumber', false, true);
    stringResult("d1", 'studentNumber', "Student Number");
} else if ($(this).val() == "12") {
    // Sort Student Number in reverse
    sortRegister(students, 'studentNumber', true, true);
    stringResult("d1", 'studentNumber', "Student Number reverse");
} else if ($(this).val() == "13") {
    // Sort Email
    sortRegister(students, 'email', false, false);
    stringResult("d1", 'email', "Email reverse");
} else if ($(this).val() == "14") {
    // Sort Email in reverse
    sortRegister(students, 'email', true, false);
    stringResult("d1", 'email', "Email reverse");
} else if ($(this).val() == "15") {
    // Sort Username
    sortRegister(students, 'userName', false, false);
    stringResult("d1", 'userName', "Username reverse");
} else if ($(this).val() == "16") {
    // Sort Username in reverse
    sortRegister(students, 'userName', true, false);
    stringResult("d1", 'userName', "Username reverse");
}});