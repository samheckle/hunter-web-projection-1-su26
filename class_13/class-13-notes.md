## Agenda

1. Housekeeping
2. Introduction to Time

## Housekeeping

1. Attendance
2. Project #3 Proposal due tomorrow
3. No class next Monday 7/20 -- book final project 1:1s by tomorrow night

## Introduction to Time

## Quick Reference

| Word                 | Definition                                                | Example               |
| -------------------- | --------------------------------------------------------- | --------------------- |
| Function Declaration | Naming and creating a function, like a variable           | `function hi() {}`    |
| Call                 | To use a named function elsewhere in the code             |                       |
| Callback function    | A function that happens as a result of an action or event | `setTimeout(hi, 200)` |
### Reference Links to Review

- MDN [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
- MDN [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
- MDN [`Date` class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
	- Allegedly will be replaced by [Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal), but does not work on Safari yet.
### Single-use timers
#### `setTimeout`

The most simple way to set up a time-based interaction in JavaScript is using `setTimeout()`. This allows us to schedule a piece of code to be executed at a certain time in the future. When JavaScript sees the `setTimeout` function, it accepts a parameter that is how many seconds that it runs in the future. 

```js
// Step 1:
// Call setTimeout with two parameters, a callback function, and a duration
// (the duration is in milliseconds, so 2000 means 2 seconds)
setTimeout(()=>{
	console.log("Two seconds have passed");
}, 2000);
```

We could also forgo the anonymous function (using `()=>{}`) and create a named function instead:

```js
// Step 1:
// Call setTimeout with two parameters, a callback function, and a duration
// (the duration is in milliseconds, so 2000 means 2 seconds)
setTimeout(myFunction, 2000);

// Step 2:
// Define the function that will be called by setTimeout
function myFunction() {
  console.log("Two seconds have passed");
}
```

If we incorporate this into our code using the `window.onload`

```js
window.onload = () => {
	setTimeout(myFunction, 2000)
})

function myFunction() {
	console.log("Two seconds have passed")
}
```

Not all of our code needs to go inside `window.onload`, but usually it will be a function declaration that is *called* inside the `window.onload`. 

#### `clearTimeout`

Sometimes you want to stop a timeout before the time is completed. Think about a screen saver: after a certain duration of user activity, the screensaver takes over the desktop. But if a user moves their mouse before, the timer needs to be cancelled or restarted. 

`setTimeout` actually is able to be set to a variable because it gives a number that is the timer id. So if we reference that specific timer, we can stop it using the `clearTimeout` function

```js
// set up our timer and set it to a variable
let timerId = setTimeout(hi, 2000)
console.log(timerId) // if you look at this in the console, it is just a number

clearTimeout(timerId)
```

#### Adding parameters to the callback function

You notice in the examples above that the callback function (`callMe` or `myFunction`) doesn’t take any arguments. If you need to pass your callback function certain data, you can use the three-parameter version of the `setTimeout` function: `setTimeout(callbackFunction, duration, data)`. For example:

```js
let timerId = setTimeout(callMe, 2000, "Bug");

function callMe(theName) {
  // The string "Bug" will become available in the "name" argument of this function.
  console.log("Two seconds later, the name is: ", theName);
}
```
### Repeating Timers
### `setInterval`

If you wanted to have a timer that *repeats* every x seconds, you can use `setInterval`. It is exactly the same as `setTimeout` except the callback function repeats every x seconds instead of once.

```js
setInterval(intervalFunction, 5000);

function intervalFunction() {
  console.log("Yet another 5 seconds have passed... on and on... forever...");
}
```

#### `clearInterval`

We can also clear our repeating timers, because they will go on forever. There are some browsers that limit the timer refreshing when it is an inactive window or tab, but usually if the window is open the timer will be continuous. We can do the same thing as `clearTimeout`

```js
let intervalId = setInterval(intervalFunction, 5000);

function intervalFunction() {
  console.log("Yet another 5 seconds have passed... on and on... forever...");
}

// Passing the intervalId as an argument to the callback function
setTimeout(cancelTheInterval, 12000, intervalId);

function cancelTheInterval(intervalId) {
  clearInterval(intervalId);
}
```

### Using Real Time and `Date`

While `setTimeout` and `setInterval` allow us to control time that is _relative to our code_, in some circumstances you will want access to the actual real-world time. Javascript exposes that using the powerful `Date` class.

Let’s say you wanted to print the current date and time to the console. You can do that using the `toString()` method on the date object:

```jsx
// First, you need to create a new Date object
let date = new Date();
console.log(date.toString());

// This will print the date as a string, formatted like this:
// Sun Feb 6 2021 23:15:30 GMT+0200 (CEST)
```

You can access the individual components of the date (e.g. hour of the day, day of the week) using other methods on the `Date` object:

- `date.getDate()` returns the day of the month as a number (e.g. `6` for the example above)
- `date.getDay()` returns the day of the week as a number (Sunday is `0`, Monday is `1`, Tuesday is `2`, ... and Saturday is `6`)
- `date.getHours()` returns the current hour as a number (e.g. `23` in the example above)
- and so on, for all components of a time.
### Epoch time

One functionality of the `Date` class that you might use quite often is the `date.now()` method. This returns the current _epoch time_ in milliseconds. _[Epoch time_](https://en.wikipedia.org/wiki/Unix_time) measures the amount of time that has passed since a specific date in the past, which on most systems is set as `00:00:00 on January 1, 1970`.

This is useful if you need to keep track of time in your code for any reason. For example, if you wanted to calculate how much time passed between two user clicks on your page, you could get the epoch time at the first click using `date.now()`, get it again at the second click, and subtract the two numbers. You will then have a number in milliseconds which is exactly the elapsed time between the two events.

**You can find the full reference for the `Date` class [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).**

_One important thing to note about `Date` is the fact that it accesses the time of the user’s computer, not the server time. So, if two users access your website from different timezones and you don’t do any time zone conversion, this will return different times. Similarly, if someone’s computer year is for some reason set to 1980, the `Date` object will follow that._
#### Getting the current computer time

Computers calculate the time based on how many milliseconds have happened since epoch. We get the current time by first creating an instance of the Date class, then retrieving the number of ms since epoch.

```js
let date = new Date()
let currentTime = date.now()
```

From there, we can retrieve lots of different structures of time based on the default timezone, language, and region of your computer:

```js
currentTime.toLocaleTimeString()
// Expected output: "1:15:30 AM"
```

```js
console.log(currentTime.toLocaleDateString());
// "7/13/2026"
```
#### Getting a specific timezone time

```js
let date = new Date()
let currentTime = date.now()

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(currentTime.toLocaleString("en-GB", { timeZone: "UTC" }));
// Expected output: "20/12/2012, 03:00:00"
```
The first parameter is the language tag, which might reference the writing system and dialect. You can review the [language tag reference](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) to construct a specific language tag. Constructing the language tag follows 3 parts

- Required: 2-3 character for the basic language (here is a [list](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) to see the subtags)
- Optional: writing system for the language, 4 characters long. Default / common writing systems (like Latin for English) do not need to be specified. 
- Optional: region with either 2 uppercase letters or 3 numbers with a non-country area.

So some examples are:

- `en-US`: English as spoken in USA
- `en-GB`: English as spoken in UK
- `ru-Cyrl-BY`: Russian in Cyrillic alphabet as spoken in Belarus

Generally you can construct and look up what you need via [this app subtags tool](https://r12a.github.io/app-subtags/).

The second parameter is an object using the specific timezone. This is easier because you can use the 3 character timezone name listed [here](https://en.wikipedia.org/wiki/List_of_time_zone_abbreviations).

