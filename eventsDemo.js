import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hi " + name);
}

function goodByeHandler(name) {
  console.log("Good Bye " + name);
}

//Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodByeHandler);

//Emit events
myEmitter.emit("greet", "John");
myEmitter.emit("goodbye", "John");

//Error handling
myEmitter.on("error", (err) => {
  console.log("An error occurred", err);
});

//Simulate error
myEmitter.emit("error", new Error("Something went wrong"));
