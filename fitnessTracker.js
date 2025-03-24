// Task 1: Application Description
// Application Name: "FitTrack - A Smart Fitness Tracker"
// Target Users:
// Fitness enthusiasts
// Beginners looking to track progress
// People aiming for weight gain, muscle building, or improved stamina

// Features:
// Personalized Goal Tracking – Users set fitness goals (e.g., weight gain, muscle building, endurance).
// Daily Log System – Users can log meals, workouts, and progress.
// Smart Insights – The app provides recommendations based on progress and consistency.
// Habit Streaks & Motivation – Encourages users to maintain consistency with badges and reminders.

console.log("Welcome to FitTrack - A Smart Fitness Tracker");
const readlineSync = require('readline-sync');
let name = readlineSync.question('Enter your name: ');
console.log("Welcome "+ name);
let weight = readlineSync.question('Enter your weight: ');

let height = readlineSync.question('Enter your height: ');
let bmi =((weight/(height * height))* 703); //Formula for calculating the BMI
console.log("Your BMI is : "+ bmi);
console.log("Your BMI is within the range however you can always become better at maintaing ideal goals");
let wishMinues = readlineSync.question('how many mintues do you wish to excercise daily?');
let goalMintues
if(bmi>3300){
     goalMintues = 60;
}else{
    goalMintues = 30;
}
console.log("you wish to exercise for "+ wishMinues +"you should daily exercise for :" + goalMintues);
if(goalMintues== wishMinues){
    console.log("you are going in the right direction");
}
let calories = readlineSync.question('Number of calories you wish to burn daily? Please enter in [100,200,300,400]');

let workouts = ['Running','Squats','Weights','Cycling'];
    if(calories==100){
        for(let i=0;i<1;i++){
        console.log("You need to do 1 workouts which is :" + workouts[i]);
    }
    } else if(calories==200){
        for(let i=0;i<2;i++){
        console.log("You need to do 2 workouts which are :" + workouts[i]);
        }
    } else if(calories==300){
        for(let i=0;i<3;i++){
        console.log("You need to do 3 workouts which are :" + workouts[i]);
        }
    } else{
        for(let i=0;i<4;i++){
        console.log("You need to do 4 workouts which are :" + workouts[i]);
        }
    }

    console.log("Total calories burned ="+ calories)

    let meals = [
        { name: "eggs", protein: 5 },
        { name: "Oatmeal", protein: 8 },
        { name: "Chicken & Rice", protein: 35 },
        { name: "Protein Shake", protein: 50 }
    ];
    
    let userProteinInput = readlineSync.question('Enter the minimum protein amount to filter meals [Choose in 5,8,25,50]:');
    let proteinThreshold = Number(userProteinInput);
    let highProteinMeals = meals.filter(meal => meal.protein >= proteinThreshold);

// Display the result
console.log("High protein meals:", highProteinMeals);
