// try and catch any uncaught errors and log them
try {
    let result = 10 / 0; // This will not throw an error, but will result in Infinity
    console.log("Result:", result);
    undefinedFunction(); // This will throw a ReferenceError
    console.log("This line will not be executed due to the error above");
} catch (error) {
    console.error("Error caught:", error.name, error.message);
};
console.log("This line will be executed after the error is caught");

// Another example of try and catch with a different error
try {
    let num = 5;
    console.log(num.toUpperCase()); // This will throw a TypeError since num is not a string
} catch (error) {
    console.error("Error caught:", error.name, error.message);
};



try {
    let age = 25;
    console.log(age.length());
} catch (error) {
    console.error("Error caught:", error.name, error.message); 
};


// Error object properties
try {
    let user = null;
    console.log(user.name);
} catch (error) {
    console.error("Error caught:", error.name, error.message);
    console.error("Error stack:", error.stack);
}

// finally block example
try {
    let a = 10;
    console.log("Value of a:", a);
} catch (error) {
    console.error("Error caught:", error.name, error.message);
} finally {
    console.log("This line will always be executed");
};


try {    let x = 5;
    let y = 0;
    let z = x / y;
    throw new Error("Division by zero is not allowed"); // Manually throwing an error
    console.log("This line will not be executed due to the error above");
} catch (error) {
    console.error("Error caught:", error.name, error.message);
} finally {
    console.log("This line will always be executed");
};

