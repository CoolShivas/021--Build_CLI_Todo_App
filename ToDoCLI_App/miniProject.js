import readline from "readline";
// // readline is a module used to interact with CLI;


const lineReader = readline.createInterface({
        // // Created the property for read and write; 
    input : process.stdin,      // Write
    output : process.stdout     // Read
});


const toDos = [];


const showMenu = () => {
    console.log("1 : Add a Task");
    console.log("2 : View Task");
    console.log("3 : Exit");
    // // lineReader.question is used to write;
    lineReader.question("Choose an option : ", handlerInput);
    // // User is going to choose any option from 1,2,3. While choosing option itself calls the function handlerInput;
};


const handlerInput = () => {
    console.log("Writing area for the user to add task.");
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