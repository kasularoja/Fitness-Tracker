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

console.log("Welcome to FitTrack - A Smart Fitness Tracker"); // Welcome message for the user
const readlineSync = require('readline-sync'); //Used to initiate the user input
let name = readlineSync.question('Enter your name: '); // takes the input from the user
console.log("Welcome "+ name); //Displays the name
let weight = readlineSync.question('Enter your weight: '); //takes the input for weight
let height = readlineSync.question('Enter your height: ');//takes the input for height
//The above lines are are part of Values, Data Types, and Operations lessons, 
//which are common aspects of developing any logic around the functionality
let bmi =((weight/(height * height))* 703); //Formula for calculating the BMI
console.log("Your BMI is : "+ bmi); //prints the bmi
console.log("Your BMI is within the range however you can always become better at maintaing ideal goals"); //displays a message
let wishMinues = readlineSync.question('how many mintues do you wish to excercise daily?'); // takes user input for minutes of exercise
let goalMintues
//The below code has the logic which is dependent on the user input and
//  is the Control Structure and Logic for calculating the goal minutes
if(bmi>3300){ //calculates the goal minutes based on the bmi
     goalMintues = 60;
}else{
    goalMintues = 30;
}
//The below code has the logic for Stringing Characters Together,
//which can be used for displaying the messages to the users with the information provided by the user
console.log("you wish to exercise for "+ wishMinues +"you should daily exercise for :" + goalMintues); // Displays the message with information
if(goalMintues== wishMinues){
    console.log("you are going in the right direction");
}
let calories = readlineSync.question('Number of calories you wish to burn daily? Please enter in [100,200,300,400]');
//The below code is the array of exercises which is helpful in determing the type of exercise the user needs to perform
let workouts = ['Running','Squats','Weights','Cycling']; //Array of exercises
    if(calories==100){
        //The below code is using loops to determine the workouts needed as per the user input
        // this kinds of loops makes things easier for iterating n number of times depending on the size.
        for(let i=0;i<1;i++){ //Loops to calcuate the workouts based on the number of calories
        console.log("You need to do 1 workouts which is :" + workouts[i]);
    }
    } else if(calories==200){
        for(let i=0;i<2;i++){//Loops to calcuate the workouts based on the number of calories
        console.log("You need to do 2 workouts which are :" + workouts[i]);
        }
    } else if(calories==300){
        for(let i=0;i<3;i++){//Loops to calcuate the workouts based on the number of calories
        console.log("You need to do 3 workouts which are :" + workouts[i]);
        }
    } else{
        for(let i=0;i<4;i++){//Loops to calcuate the workouts based on the number of calories
        console.log("You need to do 4 workouts which are :" + workouts[i]);
        }
    }

    console.log("Total calories burned ="+ calories)

    let meals = [ // predefined array for the meals
        { name: "eggs", protein: 5 },
        { name: "Oatmeal", protein: 8 },
        { name: "Chicken & Rice", protein: 35 },
        { name: "Protein Shake", protein: 50 }
    ];
    
    let userProteinInput = readlineSync.question('Enter the minimum protein amount to filter meals [Choose in 5,8,25,50]:');
    let proteinThreshold = Number(userProteinInput);
    //The below code is used to iterate through the array and filterout the types of protien that the user can get based on the user requirement.
    //The filtering concept in arrays helps us to get the match based on the criteria, this helps us extensively for filteration.
    let highProteinMeals = meals.filter(meal => meal.protein >= proteinThreshold); 
// Display the result
console.log("High protein meals:", highProteinMeals);// Displays the meals of recommendation.
