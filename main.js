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


// problem #24: string with the first character of the given string added to the front and back. 
function front_back(str) {
    // Write a JavaScript program to create another string from a given
    first = str.substring(2, 4);
    return first + str + first;
}
console.log(front_back('saikat'));


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


// problem #37:
// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

function upper_lower(string) {
    if (string.length < 3) {
        return string.toUpperCase();
    }
    front_part = (string.substring(0, 3)).toLowerCase();
    back_part = string.substring(3, string.length);
    return front_part + back_part;
}
console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));


// problem #38:
//   Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.

function exam_status(totmarks, is_exam) {
    if (is_exam) {
        return totmarks >= 90;
    }
    return (totmarks >= 89 && totmarks <= 100);
}

console.log(exam_status("78", " "));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "));


// problem #39:
// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

function sortaSum(x, y) {
    const sum_nums = x + y;
    if (sum_nums >= 50 && sum_nums <= 80) {
        return 65;
    }
    return 80;
}

console.log(sortaSum(30, 20));
console.log(sortaSum(90, 80));

// problem #40:
// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

function check8(x, y) {
    if (x == 8 || y == 8) {
        return true;
    }

    if (x + y == 8 || Math.abs(x - y) == 8) {
        return true;
    }

    return false;
}

console.log(check8(7, 8));
console.log(check8(16, 8));
console.log(check8(24, 32));
console.log(check8(17, 18));


// problem #41:
// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

function three_numbers(x, y, z) {
    if (x == y && y == z) {
        return 30;
    }

    if (x == y || y == z || z == x) {
        return 40;
    }

    return 20;
}
console.log(three_numbers(8, 8, 8));
console.log(three_numbers(8, 8, 18));
console.log(three_numbers(8, 7, 18));


// problem #42:
// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  Go to the editor
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function number_order(x, y, z) {
    if (y > x && z > y) {
        return "strict mode";
    }
    else if (z > y)
        return "Soft mode";
    else
        return "Undefinded";
}

console.log(number_order(10, 15, 31));
console.log(number_order(24, 22, 31));
console.log(number_order(50, 21, 15));


// problem #43:
// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) ||
        (p % 10 === r % 10) ||
        (q % 10 === r % 10);

}

console.log(same_last_digit(22, 32, 42));
console.log(same_last_digit(102, 302, 2));
console.log(same_last_digit(20, 22, 45));



// problem #44:
// Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.
function lessby20_others(x, y, z) {
    return (x >= 20 && (x < y || x < z)) ||
        (y >= 20 && (y < x || y < z)) ||
        (z >= 20 && (z < y || z < x));
}
console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));

// problem #45:
// Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15. 
function test_number(x, y) {
    return (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
}

console.log(test_number(15, 9));
console.log(test_number(25, 15));
console.log(test_number(7, 8));
console.log(test_number(25, 10));
console.log(test_number(5, 9));
console.log(test_number(7, 9));
console.log(test_number(9, 25));


// problem #46:
// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.
function valCheck(a, b) {
    if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
        return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
    }
    else
        return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(66, 20));

// problem #47:
// Write a JavaScript program to check whether a given number exists in the range 40..10000.  Go to the editor
// For example 40 presents in 40 and 4000

function test_digit(x, y, n) {
    if (n < 40 || n > 10000)
        return false;
    else
        if (n >= x && n <= y)
            return true;
        else
            return false;
}
console.log(test_digit(40, 4000, 45));
console.log(test_digit(80, 320, 79));
console.log(test_digit(89, 4000, 30));


// problem #48:
// Write a JavaScript program to reverse a given string. 
function string_reverse(str) {
    return str.split("").reverse().join("");
}

console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));

// problem #49:
//  Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function LetterChanges(text) {
    //https://goo.gl/R8gn7u
    var s = text.split('');   // ["p", "Y", "T", "H", "O", "N"]
    for (var i = 0; i < s.length; i++) {
        // Caesar cipher
        switch (s[i]) {
            case ' ':
                break;
            case 'z':
                s[i] = 'a';
                break;
            case 'Z':
                s[i] = 'A';
                break;
            default:
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));

        }

        // Upper-case vowels
        switch (s[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                s[i] = s[i].toUpperCase();
        }
    }
    return s.join('');
}
console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));

// problem #50:
// Write a JavaScript program to capitalize the first letter of each word in a given string.
function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));

// problem #51:
//  Write a JavaScript program to convert a given number into hours and minutes.
function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));

// // problem #52:
//  Write a JavaScript program to convert letters of a given string alphabetically. 
function alphabet_Soup(str) {

    return str.split("").sort().join("");

}

console.log(alphabet_Soup("Python"));

console.log(alphabet_Soup("Exercises"));

// // problem #53:
// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
function ab_Check(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
}

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));

// // problem #54:
//  Write a JavaScript program to count the number of vowels in a given string.
function vowel_Count(str) {

    return str.replace(/[^aeiou]/g, "").length;
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));

// // problem #55:
// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
function equal_pt(str) {
    var str_p = str.replace(/[^p]/g, "");

    var str_t = str.replace(/[^t]/g, "");

    var p_num = str_p.length;
    var s_num = str_t.length;

    return p_num === s_num;

}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));

// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

function division_string(n1, n2) {

    n1 = 80;
    n2 = 6;

    var div = Math.round(n1 / n2).toString(),
        result_array = div.split("");

    if (div >= 1000) {
        for (var i = div.length - 3; i > 0; i -= 3) {
            result_array.splice(i, 0, ",");
        }
        result_array;
    }
    console.log(result_array);

}
// 57. Write a JavaScript program to create one string of specified copies(positive numbers) of a given string.

function string_copies(str, n) {
    if (n < 0)
        return false;
    else
        return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));


// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string.The string length must be 3 and above.

function newstring(str) {
    if (str.length >= 3) {
        result_str = str.substring(str.length - 3);
        return result_str + result_str + result_str + result_str;
    }
    else
        return false;
}
console.log(newstring("Python 3.0"));
console.log(newstring("JS"));
console.log(newstring("JavaScript"));

// 59. Write a JavaScript program to extract the first half of a even string.

function first_half(str) {
    if (str.length % 2 == 0) {
        return str.slice(0, str.length / 2);
    }
    return str;
}
console.log(first_half("Python"));
console.log(first_half("JavaScript"));
console.log(first_half("PHP"));

// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.

function without_first_end(str) {
    return str.substring(1, str.length - 1);
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('JS'));
console.log(without_first_end('PHP'))

// 61. Write a JavaScript program to concatenate two strings except for their first character.
function concatenate(str1, str2) {
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.length);
    return str1 + str2;
}

console.log(concatenate("PHP", "JS")); // HPS
console.log(concatenate("A", "B"));
console.log(concatenate("AA", "BB")); //AB

// 62. Write a JavaScript program to copy the middle four characters to the start of a given string.The string length must be greater than or equal to three and should be even.

function right_three(str) {
    if (str.length >= 3 && str.length % 2 != 0) {
        mid = (str.length - 1) / 2;
        return str.slice(mid - 2, mid + 1) + str.slice(0, str.length);
    }
    return str;
}
console.log(right_three("Pythono")); //ythoPython

console.log(right_three("JavaScript"));
console.log(right_three("Hi"));
console.log(right_three("JavaScriptJavaScript"));

// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length.The string length must be greater than or equal to three.

function middle_three(str) {
    if (str.length % 2 != 0) {

        mid = (str.length + 1) / 2;
        return str.slice(mid - 2, mid + 1);
    }
    return str;
}
console.log(middle_three('abcdefg'));  //cde
console.log(middle_three('HTML5'));  // tml
console.log(middle_three('Python')); // Python
console.log(middle_three('PHP'));   // PHP
console.log(middle_three('Exercises'));  //rci

// 64. Write a JavaScript program to concatenate two strings and return the result.If the length of the strings does not match, then remove the characters from the longer string.

function str_con_cat(str1, str2) {

    let str1L = str1.length;
    let str2L = str2.length;

    const m = Math.min(str1L, str2L);

    return str1.substring(str1L - m) + str2.substring(str2L - m);
}

console.log(str_con_cat("Python", "JS"));     // onJS
console.log(str_con_cat("ab", "cdef"));        //  abef

// 65. Write a JavaScript program to test whether a string ends with "Script".The string length must be greater than or equal to 6.
function end_script(str) {
    if (str.substring(str.length - 6, str.length) == 'Script') {
        return true;
    }
    else {
        return false;
    }
}
console.log(end_script("JavaScript"));  //True 
console.log(end_script("Java Script")); //True
console.log(end_script("Java Scripts"));//False

// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function city_name(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
        || (str.substring(0, 3) == 'New'))) {
        return str;
    }

    return '';
}

console.log(city_name("New York"));
console.log(city_name("Los Angeles"));
console.log(city_name("London"));

// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

function nop(str) {  //PythonP
    let start_position = 0;
    let end_position = str.length; // 7


    // 7 > 0 && 
    if (str.length > 0 && str.charAt(0) == 'P') {
        // console.log(str.charAt(0));

        start_position = 1;
    }

    if (str.length > 1 && str.charAt(str.length - 1) == 'P') {
        end_position--;
    }

    return str.substring(start_position, end_position);
}

console.log(nop("PythonP")); //ython
console.log(nop("Python")); //ython
console.log(nop("JavaScript")); //JavaScript

// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.

function two_string(str, n) {
    first_part = str.substring(0, n);
    last_part = str.substring(str.length - n);
    return first_part + last_part;
}

console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3. 

function sum_three(nums) {
    return nums[0] + nums[1] + nums[2];
}

console.log(sum_three([10, 32, 20]));
console.log(sum_three([5, 7, 9]));
console.log(sum_three([0, 8, -11]));

// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3. 

function rotate_elements_left(array) {
    return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5]));
console.log(rotate_elements_left([0, -1, 2]));
console.log(rotate_elements_left([7, 6, 5]));


// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

function first_last_1(nums) {
    var end_pos = nums.length - 1;
    return nums[0] == 1 || nums[end_pos] == 1;
}


console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));


// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.

function first_last_same(nums) {
    var end = nums.length - 1;
    if (nums.length >= 1) {
        return nums[0] == nums[end];
    } else { return false; }
}

console.log(first_last_same([10, 20, 30]));
console.log(first_last_same([10, 20, 30, 10]));
console.log(first_last_same([20, 20, 20]));


// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.

// function reverse3(array) {
//     return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
// }

// console.log(reverse3([5, 4, 3])); 
// console.log(reverse3([1, 0, -1]));  
// console.log(reverse3([2, 3, 1]));


// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array. 

// function all_max(nums) {
//     var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

//     nums[0] = max_val;
//     nums[1] = max_val;
//     nums[2] = max_val;

//     return nums;
// }
// console.log(all_max([20, 30, 40]));
// console.log(all_max([-7, -9, 0]));
// console.log(all_max([12, 10, 3]));


// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3. 

function middle_elements(a, b) {
    var new_array = []
    new_array.push(a[1], b[1]);

    return new_array;
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));
console.log(middle_elements([3, 3, 3], [2, 8, 0]));
console.log(middle_elements([4, 2, 7], [2, 4, 5]));


// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1. 

function started(nums) {
    var array1 = [];
    array1.push(nums[0], nums[nums.length - 1]);

    return array1;
}
console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));
console.log(started([17, 12, 34, 78]));


// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3. 

function contains13(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1) {
        return true
    }
    else {
        return false
    }
}

console.log(contains13([1, 5]));
console.log(contains13([2, 3]));
console.log(contains13([7, 5]));


// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.
function is13(nums) {
    if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1) {
        return true;
    } else {
        return false;
    }
}

console.log(is13([7, 8]));
console.log(is13([3, 2]));
console.log(is13([0, 1]));


// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2. 

function twice3040(arra1) {
    let a = arra1[0],
        b = arra1[1];
    return (a === 30 && b === 30) || (a === 40 && b === 40);
}

console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));

// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.  

function swap(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    return arra;
}
console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));







