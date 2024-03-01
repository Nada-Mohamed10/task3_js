// question1 done 
//  Write a program that allow to user enter number then print it
// let num = Number(prompt("enter your number"));
// document.write(num);

/**************************************************2******************** */
// 2 - Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// done
// let ckeck_num = Number(prompt("enter your numbr"));
// if (ckeck_num % 3 == 0 && ckeck_num % 4 == 0) {
//     document.write("yes");
// }
// else {
//     document.write("no");
// }
/****************************************3**************************************** done */
// 3- Write a program that allows the user to insert 2 integers then print the max
// let num1 = Number(prompt("enter number1"));
// let num2 = Number(prompt("enter number2"));
// if (num1 > num2) {
//     document.write(num1);
// }
// else {
//     document.write(num2);
// }

/**********************************************4***************************************done */
// 4 - Write a program that allows the user to insert an integer
// then print negative if it is negative number otherwise print positive.
// let num = Number(prompt("enter your number"));
// if (num > 0) {
//     console.log("positive");
// }
// else {
//     console.log("negative");
// }

// /*************************************5********************************************* done */
// 5 - Write a program that take 3 integers from user then print the max element and the min element.
// let num1 = Number(prompt("enter your number1"));
// let num2 = Number(prompt("enter your number2"));
// let num3 = Number(prompt("enter your number3"));
// if (num1 > num2 && num1 > num3) {

//     console.log("max element", num1);
// }
// else if (num2 > num1 && num2 > num3) {

//     console.log("max element", num2);
// }
// else {
//     console.log("max element ", num3)
// }

/***********************************************6****************************** done*/
// 6 - Write a program that allows the user to insert integer number then check If a number is oven or odd
// let num = Number(prompt("enter your number"));
// if (num % 2 == 0) {
//     console.log("even");
// }
// else {
//     console("odd");
// }

/******************************************7************************************ done */
// 8 - Write a program that take character from user then
// if it is vowel chars(a, e, I, o, u) then print vowel otherwise print consonant

// let character = prompt("enter your character ");
// if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
//     console.log("vowel");
// }
// else {
//     console.log("constant");
// }

/**********************************************8************************************************** done/
// 9 - Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// let num = Number(prompt("enter your number"));
// for (let i = 1; i <= num; i++){
//     console.log(i);
// }


/*****************************************9************************************************** done */
// 10 - Write a program that allows user to insert integer then print a multiplication table up to 12.
// let num = Number(prompt("enter your number"));
// for (let i = 1; i <= 12; i++){
//     console.log(num * i);
// }

/*******************************************************10*********************************** done*/
// 11 - Write a program that allows to user to insert number then print all even numbers between 1 to this number
// let num = Number(prompt("enter your number"));
// for (let i = 1 ; i < num; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

/****************************************11************************************************ done */
// 12 - Write a program that take two integers then print the power
// let num1 = Number(prompt("enter your number1"));
// let num2 = Number(prompt("enter your number2"));
// console.log(num1 ** num2);

/*************************************12********************************************* done */
// 12 - Write a program to enter marks of five subjects and calculate total, average and percentage.
// let mark_subject1 = Number(prompt("enter mark of one subject"));
// let mark_subject2 = Number(prompt("enter mark of two subject"));
// let mark_subject3 = Number(prompt("enter mark of three subject"));
// let mark_subject4 = Number(prompt("enter mark of four subject"));
// let sum = mark_subject1 + mark_subject2 + mark_subject3 + mark_subject4;
// console.log(`the sum marks = ${sum}`);
// console.log(`the average marks = ${sum / 4}`);
// let total_marks = 400;
// console.log(`the persentage= ${sum/total_marks*100}`);


/***************************************13************************************************ done */
// 13 - Write a program to input month number and print number of days in that month.
// let month_number = Number(prompt("enter your month number "));
// console.log(`the number days ${month_number * 30}`);


/****************************************14*********************************************** */
// 14 - Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
//     , Find percentage and grade
let subject_Physics = Number(prompt("enter the mark Physics"));
let subject_Chemistry = Number(prompt("enter the mark Chemistry"));
let subject_Biology = Number(prompt("enter the mark Biology"));
let subject_Mathematics = Number(prompt("enter the mark Mathematics"));
let subject_Computer = Number(prompt("enter the mark Computer"));
let sum = subject_Biology + subject_Chemistry + subject_Computer + subject_Mathematics + subject_Physics;
let total_marks = 500;















/****************************************************15****************************** */
// 15 - Write a program to print total number of days in month

// let number_month = Number(prompt("enter thr number of month "));
// switch (number_month) {
//     case 1:
//         console.log(`the number of days = ${number_month*30}`)
//         break;

//     default:
//         break;
// }
/*******************************************************16************************* done */
// 16 - Write a program to check whether an alphabet is vowel or consonant

// let character = prompt("enter your character ");
// switch (character) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case "u":
//         console.log("alphabet is vowel");
//         break;
//     default:
//         console.log("alphabet is consonant");
// }

/************************************17************************************ */
// 17 - Write a program to find maximum between two numbers
// let num1 = Number(prompt("enter the number1"));
// let num2 = Number(prompt("enter the number2"));


/********************************************18************************* done*/
// 18 - Write a program to check whether a number is even or odd
// let num = Number(prompt("enter the number "));
// switch (num) {
//     case num %2 ==0:
//         console.log("even");
//         break;

//     default:
//         console.log("odd");
// }

/**************************************************19****************************** done */
// 19 - Write a program to check whether a number is positive or negative or zero
// let num = Number(prompt("enter the number"));
// switch (num) {
//     case num>=0:
//         console.log("positive")
//         break;

//     default:
//         console.log("negative");
// }


/**********************************************************20**************************** done  */
// 20 - Write a program to create Simple Calculator
// let num1 = Number(prompt("enter the number1"));
// let operator = prompt('enter the operator');
// let num2 = Number(prompt("enter the number2"));
// switch (operator) {
//     case '+':
//         console.log(`the sum two number = ${num1 + num2}`);
//         break;
//     case '-':
//         console.log(`the diffrence two number = ${num1 - num2}`);
//         break;
//     case '*':
//         console.log(`the muliteable two number = ${num1 * num2}`);
//         break;
//     case '/':
//         console.log(`the division two number = ${num1 / num2}`);
//         break;
//     case '%': console.log(`the modul two number = ${num1 % num2}`);
//         break;

//     default:
//         console.log("please enter the real oprator");
// }



   