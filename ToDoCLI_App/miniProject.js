import readline from "readline";
// // readline is a module used to interact with CLI;


const lineReader = readline.createInterface({
        // // Created the property for read and write; 
    input : process.stdin,      // Write
    output : process.stdout     // Read
});


const toDos = [];


const showMenu = () => {
    console.log("\n1 : Add a Task"); // // \n new line added or start from the new line;
    console.log("2 : View Task");
    console.log("3 : Exit");
    // // lineReader.question is used to write;
    lineReader.question("Choose an option : ", handlerInput);
    // // User is going to choose any option from 1,2,3. While choosing option itself calls the function handlerInput;
};


const handlerInput = (options) => {
    if(options === "1")
    {
        lineReader.question("Enter your task : ", (inputData) => {
            toDos.push(inputData);
            // // Pushing the enter user todos in the toDos array;
            console.log("Task added : ", inputData);
            // // Printing the enter user todos infront of "Task added : ";
            showMenu();
            // // Again showing the whole menus;
        })
    }
    else if(options === "2")
    {
        // console.log(toDos); // // Getting the toDos array whichever is added by user;
        console.log("\nHave a look on your task :- ");
        toDos.forEach((list, index) => {
            console.log(`${index + 1}. ${list}`)
        }); // // Getting the data on proper format instead of this ['laptop', 'mobile'];
        showMenu(); // // Again showing the whole menus;
    }
    else if(options === "3")
    {
        console.log("See you again.")
        lineReader.close(); // // lineReader.close is used to close the program;
    }
    else 
    {
        console.log("Invalid option. Try again !.")
        showMenu(); // // Showing again the whole menus. If invalid option is choosed;
    }

};

showMenu();
// // // // Here, we are getting the Output on Terminal as :-
// // // // Open the Terminal and clear the stuff first.
// // // // Check the list of folder in which you are working on. (i.e., by ls command).
// // // // Then, enter into the folder named as ToDoCLI_App (i.e., by cd command).
// // // // Check the list of folder named as ToDoCLI_App (i.e., by ls command).
// // // // Finally, select the file named as miniProject.js to run or execute (i.e., node --watch miniProject.js)
// // // // Therefore, we get the Output on Terminal as :-
// // // // 1 : Add a Task
// // // // 2 : View Task
// // // // 3 : Exit
// // // // Completed running 'miniProject.js'