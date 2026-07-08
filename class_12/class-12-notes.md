## Agenda

1. Housekeeping
2. Reading Discussion #3
3. Review Exercise
4. Introduction to Events

## Housekeeping

1. Attendance
2. Project #3 Proposal due next week

## Reading Discussion #3

In breakout rooms, discuss the following questions and take notes on your conversation in [this doc](https://cryptpad.fr/doc/#/2/doc/edit/zwhRUVxfXc8759eLAeQXTMnP/):

1. Where does friction factor in your learning or artistic practice? What is the boundary of something being "too easy" for you? Do you think friction/glitches/imperfections/errors are valuable right now, and why?
2. Where does most of your attention go when you are not working? Why does your attention go there? Feel free to share your screentime.
3. Have you discovered a cool website throughout this class or during these readings? Add it to the [communal are.na](https://www.are.na/sam-heckle/_web-jghsnohy78q), (are.na account required) or share a link and I can add it. 

## Review Exercise

1. Download this [starter folder](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fsamheckle%2Fhunter-web-projection-1-su26%2Ftree%2Fmain%2Fclass_12%2Fclass-12-starter)
2. Add the folder to your class-demos folder
3. Open that folder in SublimeText
4. Complete the exercise starting with `index.html`, then `styles.css`, then `script.js` by reading the comments and completing the code or answering the questions.
## Intro to Events

### Quick Reference

| Word           | Definition                                                        | Example                              |
| -------------- | ----------------------------------------------------------------- | ------------------------------------ |
| Event          | An input from the user to trigger something on the site.          | `click`, `mouseover`                 |
| Event Listener | A function that waits for an event to happen, then does an action | `.addEventListener('click', ()=>{}}` |
### Reference Links to Review

- JavaScript.info [Mouse Events](https://javascript.info/mouse-events-basics)
- w3schools [Event List](https://www.w3schools.com/jsref/dom_obj_event.asp)
### javascript `addEventListener` method

The `addEventListener` method attaches one or more event handlers for the selected elements and child elements. Event handlers attached using the `addEventListener` method will work for both current and FUTURE elements (like a new element created by a script).

The general syntax for attaching an event listener to an object using the `addEventListener` method is like this:

`*elementSelector*.addEventListener(*eventName, callbackFunction)*`

- The `elementSelector` works as discussed in a previous tutorial (by tag name, by id, by class, etc.)
- The `eventName` needs to take specific values, which are defined by HTML & Javascript. Examples include `click`, `keypress`, `hover`, and more. _You can find a full list of DOM events [here](https://developer.mozilla.org/en-US/docs/Web/Events)._
- The `callbackFunction` is a function that we define, similarly to timers. This is where we define what we want to happen as a result of the interaction (click, key press, etc.) and gets called when Javascript detects that user interaction on the given selected elements. Usually we will be using anonymous functions `() => {}`, but you can also create an external function.

### **Mouse events**

#### The `click` event

`*elementSelector*.addEventListener("click", (e) => { /* code here */ } )`

First of all, let’s talk about events. `“click”` is an event that is bound via the `addEventListener` method. All the different visitors' actions that a web page can respond to are called events, and javascript responds to events in an HTML page. Keep in mind that an event represents the **_precise moment_** when something happens. There could be one or more space-separated event types and optional namespaces, all events should be contained in a set of quotation marks.

Meanwhile, `(e) =>` is a handler, it executes when an event (in our case, the `“click”` event) is triggered and completed. We need it because JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors. To prevent this, you can create a callback function, which is executed after the current effect is finished.

For instance, the example below has no callback parameter, and the alert box will be displayed before the hide effect is completed:

```jsx
let button = document.getElementById("button");
button.addEventListener("click", (e) => {
  alert("button was clicked!");
});
```

- The `e` is short for `event` that is contained in `function` is an [event object](https://developer.mozilla.org/en-US/docs/Web/API/Event). When an event is triggered, javascript passes the handler an event object that it can use to analyze and change the status of the event. This object includes important properties and methods for cross-browser consistency, e.g. `target`, `pageX`, `pageY`, `relatedTarget` etc.
  For example, `event.type` contains the event name:
  ```jsx
  window.onload = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", (e) => {
      alert(e.type);
    });
  };
  ```

And here is a full example of how you would use this on a page:

```jsx
<html>
	<head>
		<script src="script.js"></script>
	</head>

	<body>
		<button>Click me!</button>
		<p>Click the button.</p>
	</body>

</html>
```

```jsx
window.onload = () => {
  let button = document.getElementById("button");
  button.addEventListener("click", (e) => {
    alert(e.type);
  });
};
```

#### The `mouseenter` event

`*elementSelector*.addEventListener("mouseenter", (e) => { /* code here */ } )`

The function is executed when the mouse pointer enters the HTML element:

```jsx
let para = document.getElementById("paragraph");
para.addEventListener("mouseenter", (e) => {
  // text's background becomes yellow when the cursor enter the p element
  para.style.backgroundColor = "yellow";
});
```

There is also a `mouseover` event. Note the difference between the two:

- The `mouseenter` event is triggered only when the mouse pointer hits the element. The counterpart event is `mouseleave`. **It does not propagate up the document hierarchy**.
- The `mouseover` \*\*\*\*event triggers when the mouse pointer enters an element and any one of its child elements. Its counterpart is `mouseout`.

#### The `mouseleave` event

`*elementSelector*.addEventListener("mouseleave", (e) => { /* code here */ } )`

The `mouseleave` event occurs when the mouse leaves the selected element.

```jsx
window.onload = () => {
  let para = document.getElementById("paragraph");
  para.addEventListener("mouseenter", (e) => {
    // text's background becomes yellow when the cursor enter the p element
    para.style.backgroundColor = "yellow";
  });
  para.addEventListener("mouseleave", (e) => {
    // text's background becomes yellow when the cursor enter the p element
    para.style.backgroundColor = "green";
  });
};
```

**Note:** Unlike the [`mouseout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event) event, the `mouseleave` event only triggers when the mouse leaves the selected elements. The `mouseout` event is triggered if a mouse leaves any child elements as well as the selected element.

#### The `mousemove` event

`*elementSelector*.addEventListener("mousemove", (e) => { /* code here */ } )`

The `mousemove` event is triggered each time the mouse pointer is moved when it is over an element. Note that the it occurs each time when you move the mouse by **one pixel**.

```jsx
window.onload = () => {
  document.addEventListener("mousemove", (e) => {
    document
      .getElementById("span")
      .textContent(event.pageX + ", " + event.pageY); // shows the position of mouse pointer on time
  });
};
```

In this example, we are adding the mousemove event listener to the _entire_ document. So, we are using `document` as the selector.

### **Keyboard events**

#### The `keydown` event

`*elementSelector*.addEventListener("keydown", (e) => { /* code here */ } )`

The `keydown` event occurs when a keyboard key is **pressed down** (as opposed to when it’s released.)

If you attach this event listener to the whole document, it’ll listen to key presses anywhere on the page. If you attach it to an individual element (like an `<input>` field,) it’ll only listen to key presses when that element is focused.

```jsx
window.onload = () => {
  document.addEventListener("keydown", (e) => {
    // Change the background color of an <input> field to yellow when a keyboard key is pressed down
    document.style.backgroundColor = "yellow";
    // Print to the console what key was pressed
    console.log(e.key);
  });
};
```

You can use the `e.key` property to look at which keyboard key was pressed. There are actually three properties on the event object relating to the key that was pressed:

- `e.key` gives you the character that was typed (`a`, `b`, `c`, `d`, etc.)
- `e.which` gives you the ASCII code of that character; for instance, if you type “j”, it will return “74”.
- `e.code` gives you the [HTML code](https://www.rapidtables.com/web/html/html-codes.html) of that character; for instance, if you type “J”, it will return “&#74;”

#### The `keyup` event

`*elementSelector*.addEventListener("keyup", function(event) { /* code here */ } )`

The `keyup` event occurs when a keyboard key is **released**.

```jsx
window.onload = () => {
  document.addEventListener("keydown", (e) => {
    // Change the background color of an <input> field to yellow when a keyboard key is pressed down
    document.style.backgroundColor = "yellow";
    // Print to the console what key was pressed
    console.log(e.key);
  });

  document.addEventListener("keyup", (e) => {
    // Change the background color of an <input> field to yellow when a keyboard key is pressed down
    document.style.backgroundColor = "green";
    // Print to the console what key was pressed
    console.log(e.key);
  });
};
```

There are three types of keyboard events: keydown, keypress, and keyup. The sequence of key events is as follows:

1. When the key is first pressed, the keydown event is sent.
2. If the key is not a modifier key, the keypress event is sent.
3. When the user releases the key, the keyup event is sent.