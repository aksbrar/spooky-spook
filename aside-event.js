// import eventemitter
import {EventEmitter} from "node:events"

// initialise it
const eventTrig = new EventEmitter()

// function for it
const doSomething = (item) => {
  console.log(item)
}

// register it
eventTrig.on("Greet", doSomething)

// emit it
eventTrig.emit("Greet", "Hello, how are you doing today?" )