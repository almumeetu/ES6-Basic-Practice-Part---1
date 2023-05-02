// Problem #1:
// Write a JavaScript program to display the current day and time in the following format.
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);


// problem #2:
// Write a JavaScript program to print the contents of the current window.
function print_current_page() {
    window.print();
};


// problem #3:
// Write a JavaScript program to get the current date.
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;
console.log(today);
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
today = dd + '-' + mm + '-' + yyyy;
console.log(today);
today = dd + '/' + mm + '/' + yyyy;
console.log(today);


// Problem #4:
// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);


// Problem #5:
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
};


// problem #6:
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));


// problem #7:
// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
console.log('--------------------');
for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0)
        console.log("1st January is being a Sunday  " + year);
}
console.log('--------------------');

// problem #8:
// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
// Get a random integer from 1 to 10 inclusive
const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
    console.log('Matched');
else
    console.log('Not matched, the number was ' + gnum);


// Problem #9:
// Write a JavaScript program to calculate days left until next Christmas.
today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!");


// Problem #10:
// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

// problem #11:
//  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
cToF(60);
fToC(45);



// problem #12:
//  Write a JavaScript program to get the website URL (loading page). 
console.log(document.URL);


// problem #13
// Write a JavaScript exercise to create a variable using a user-defined name.\
var var_name = 'saikat';
var number = 120;
this[var_name] = number;
console.log(this[var_name])


// problem #14
// Write a JavaScript exercise to get the filename extension. 
filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());


// problem #15:
// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
function difference(n) {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
}
console.log(difference(32))
console.log(difference(11))


// problem #16:
// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
function sumTriple(x, y) {
    if (x == y) {
        return 3 * (x + y);
    }
    else {
        return (x + y);
    }
}
console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));

//   problem #17:
//   Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
function diff_num(n) {
    if (n <= 19) {
        return (19 - n);
    }
    else {
        return (n - 19) * 3;
    }
}

console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));


// problem #18:
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function test50(x, y) {
    return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))


// problem #19
// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 
function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
        (Math.abs(400 - x) <= 20));
}

console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));


// problem #20:
// Write a JavaScript program to check two given integers whether one is positive and another one is negative. 
function positive_negative(x, y) {
    if ((x < 0 && y > 0) || x > 0 && y < 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));


// problem #21:
// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  
function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
        return str1;
    }
    return "Py" + str1;
}

console.log(string_check("Python"));
console.log(string_check("thon"));


// problem #22:
// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function remove_character(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

console.log(remove_character("Python", 0));
console.log(remove_character("Python", 3));
console.log(remove_character("Python", 5));


// problem #23:
// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. 
function first_last(str1) {
    if (str1.length <= 1) {
        return str1;
    }
    mid_char = str1.substring(1, str1.length - 1);
    return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));


// problem #24:
// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back. 
function front_back(str) {
    first = str.substring(0, 1);
    return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));


// problem #25:
// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function test37(x) {
    if (x % 3 == 0 || x % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));


// problem #26:
// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
function front_back3(str) {
    if (str.length >= 3) {
        str_len = 3;

        back = str.substring(str.length - 3);
        return back + str + back;
    }
    else
        return false;
}
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));


// problem #27:
// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise. 
function start_spec_str(str) {
    if (str.length < 4) {
        return false;
    }
    front = str.substring(0, 4);
    if (front == 'Java') {
        return true;
    }
    else {
        return false;
    }
}

console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python"));


// problem #28:
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range. 
function check_numbers(x, y) {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));


// problem #29:
// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.
function check_three_nums(x, y, z) {
    return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
}

console.log(check_three_nums(50, 90, 99));
console.log(check_three_nums(5, 9, 199));
console.log(check_three_nums(65, 89, 199));
console.log(check_three_nums(65, 9, 199));


// problem #30:
// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. 
function check_script(str) {
    if (str.length < 6) {
        return str;
    }
    let result_str = str;

    if (str.substring(10, 4) == 'Script') {

        result_str = str.substring(0, 4) + str.substring(10, str.length);

    }
    return result_str;
}

console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));


// problem #31:
// Write a JavaScript program to find the largest of three given integers. 
function max_of_three(x, y, z) {
    max_val = 0;
    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    }
    if (z > max_val) {
        max_val = z;
    }
    return max_val;
}

console.log(max_of_three(1, 0, 1));
console.log(max_of_three(0, -10, -20));
console.log(max_of_three(1000, 510, 440));


// problem #32:
// Write a JavaScript program to find the closest value to 100 from two numerical values. 
function near_100(x, y) {
    if (x != y) {
        x1 = Math.abs(x - 100);
        y1 = Math.abs(y - 100);

        if (x1 < y1) {
            return x;
        }
        if (y1 < x1) {
            return y;
        }
        return 0;
    }
    else
        return false;
}

console.log(near_100(90, 89));
console.log(near_100(-90, -89));
console.log(near_100(90, 90));


// problem #33:
// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
function numbers_ranges(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60)
        ||
        (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(numbers_ranges(44, 56));
console.log(numbers_ranges(70, 95));
console.log(numbers_ranges(50, 89));


// problem #34:
// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. 
function max_townums_range(x, y) {
    if ((x >= 40) && (x <= 60) && (y >= 40 && y <= 60)) {
        if (x === y) {
            return "Numbers are the same";
        } else if (x > y) {
            return x;
        } else {
            return y;
        }
    } else {
        return "Numbers don't fit in range";
    }
}

console.log(max_townums_range(45, 60));
console.log(max_townums_range(25, 60));
console.log(max_townums_range(45, 80));


// problem #35:
// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. 
function check_char(str1, char) {
    ctr = 0;
    for (let i = 0; i < str1.length; i++) {
        if ((str1.charAt(i) == char) && (i >= 1 && i <= 3)) {
            ctr = 1;
            break;
        }
    }
    if (ctr == 1) return true;
    return false;
}
console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));


// problem #36:
// Write a JavaScript program that checks whether the last digit of three positive integers is the same.  
function last_digit(x, y, z) {
    if ((x > 0) && y > 0 && z > 0) {
        return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    }
    else
        return false;
}

console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));
console.log(last_digit(20, 30, -400));


















