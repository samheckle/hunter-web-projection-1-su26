
## Agenda 

1. Housekeeping
2. Reading #2 Discussion
3. Responsive Design: Media Queries and Flexbox

## Housekeeping

1. Attendance
2. Project #2 due next Tuesday at midnight

## Reading #2

### The Web's Grain

> "Think about the weight we’ve added to the world: attention-greedy devices and services, new business structures that turn out to reinforce existing inequalities instead of working against them, technocratic blowhards, never mind the surveillance shit storm we all now must navigate." - Frank Chimero, 2015

> "What would happen if we stopped treating the web like a blank canvas to paint on, and instead like a material to build _with_?" - Frank Chimero, 2015

> "Using technology to solve the problems it causes is as futile as cleaning a grass stain by rubbing grass on it. More technology only amplifies the problems created by an abundance of it. This leads to the most pressing question: How far out will technology grow? And when does it cross the line of comfort?" - Frank Chimero, 2015
### Black Gooey (GUI) Universe

Accompanying art exhibition, [*Black Gooey Universe*](https://americanartist.us/works/black-gooey-universe) in 2018.

<img src="https://lh3.googleusercontent.com/-qfr_-c686VU/WezC7wIg_YI/AAAAAAABFgc/zQFUdT06QDojnk1nGOKn6294x99ElrlNQCHMYBhgL/w9999/alto-running-smalltalk.jpg">

> Xerox Alto, 1970s and first introduction of whiteness to computer interface

When did "dark mode" become available for consumers? 
- 2016 → Windows 10
- 2018 → macOS Mojave
- 2019 → iOS 13 and Android 10
- 2019 → CSS property to determine light / dark theme
- 2024 → Wikipedia

Strangely enough, black screens use up less power than white screens, so *why is whiteness the default* despite it being more resource intensive?

> "It is from a black interface that contemporary computer interfaces developed...Blackness has, so to say, formed the ground for white, with black gooey being antithetical to the values of the white screen. Black gooey might then be a platform of slowness, refusal, thought, complexity, critique, softness, loudness, transparency, uselessness, and brokenness." - American Artist, 2018

### Discussion Questions

- Why is a computer a rectangle? Why is NYC a grid? Who decided that?
- Going forward, how much will your projects follow the web's grain? What is the value of consistency in design? In your projects, how will you "break" from the web's grain?
- Is a computer actually intuitive? Think about how you learned how to type, use a mouse, understand what different icons mean. When did this happen in your life? Who taught you that?
	- Look through some icons: https://feathericons.com/ and see if your group and figure out where different icons came from. For example, look up the history of bluetooth, save, and send.

## Responsive Design: Media Queries and Flexbox

### Quick Reference
| Word           | Definition                                                                                          | Example                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Media Query    | Specific CSS rules for different screen sizes                                                       | `@media () {}`                                                              |
| Breakpoint     | The size of screens that you are building specific CSS rules for                                    | `@media screen and (max-width: 600px){}`                                    |
| Viewport       | The area of the screen that is currently being viewed. Is a required meta property to use `@media`  | `<meta name="viewport" content="width=device-width,initial-scale=1" />`<br> |
| Flexbox Layout | "Flexible Box Layout" allows a container to modify the children's size to best-fit available space. | `display: flex`                                                             |
| Intrinsic Size | The size an element would have based purely on the content, set to the width property.              | `min-content`, `max-content`, `fit-content`                                 |

### Reference Links to Review
- See [MDN guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using) on developing media queries. 
- [MDN Learn Web Dev docs on media queries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries)
- [Designing Intrinsic Layouts](https://youtu.be/AMPKmh98XLY?si=XyvIT2Nxdhf_cPok) - Jen Simmons (59 min)
- Play [FlexBox Froggy](https://flexboxfroggy.com/) to practice flexbox syntax
- [Responsive Type and Zoom](https://adrianroselli.com/2019/12/responsive-type-and-zoom.html) - Adrian Roselli
	- [NY Times Responsive Type](https://www.nytimes.com/interactive/2019/12/23/style/y2k-bug-millennials.html)
### Media Queries

When building websites, we want to build not only for our own devices (laptop + phone), but also *anyone's* device so that our website has consistent design across all screens. 

There are two ways to start building a website: mobile-first and desktop-first. Think about how *you* browse the internet and which you want to start with.

Some typical "breakpoints", or screen sizes you are building for are something like: 
- extra small < `600px`
- small > `600px` and < `768px`
- medium > `768px` and < `992px`
- large > `1200px`

But typically you want to build for things you can actually test and see when the layout breaks. These numbers are loosely based off of some CSS frameworks (like Bootstrap and Tailwind), but [you don't actually need a framework](https://www.taniarascia.com/you-dont-need-a-framework/).

The syntax for building out a media query would look like:

```css
@media screen and (width > 600px){
	body{
		font-size: 16px;
	}
}
```

We could also build out for printing out the page as well:

```css
@media print and (width > 768px){
	body{
		font-size: 12px;
	}
}
```

We can also use a media query for different color schemes:

```css
@media (prefers-color-scheme: dark){
	body{
		background: slategray;
	}
}
```
#### Testing Your Responsive Designs

Depending on your browser, you will have different ways of opening and testing your media queries. 

- [Chrome Simulate Mobile Devices](https://developer.chrome.com/docs/devtools/device-mode)
- [Firefox Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Safari Responsive Design Mode](https://developer.apple.com/documentation/safari-developer-tools/responsive-design-mode)
- [Edge Emulate Mobile Devices](https://learn.microsoft.com/en-us/microsoft-edge/devtools/device-mode/)

As a web developer, it is good to test for different devices *and* different browsers.

### Flexbox

Media queries are fine and all, but flexbox is really about setting intrinsic layouts that will dynamically change without us having to set up different queries. 

Flexbox *seems* complicated, but you only need to keep track of parent-child relationships. I do not have this memorized and I regularly use [CSS Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to remind myself what each flex property does. 

The parent is the container *holding* the grid you would like to make:

<img src="https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg" style="width: 600px">


On the **parent**, you define most of the flexbox properties:
- `display: flex` → sets the display to be flexible based on screen size
- `flex-direction: (row | column)` → determines whether the children are displayed horizontally or vertically
- `justify-content: (center | space-between | space-around | space-evenly)` → determines the horizontal alignment
- `align-items: (center | stretch | baseline)` → determines how the items are vertically aligned
- `gap` → determines the space between items (it will append to whatever size is determined by `justify-content`)

The children are the *individual grid items*:

<img src="https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg" style="width: 600px">

On the children, you aren't required to change anything for a normal flexbox. But, there are some useful properties to customize:
- `flex-grow` / `flex-shrink`→ allows items to grow or shrink if necessary. This is determined as a ratio; if the value is set to `1` all items will be sized equally. If all but one children have a size of `1` and a single child has a size of `2`, it will be double the size. 

There are a couple of really useful flex layouts that allow us to quickly make a responsive site.

### Using flexbox is the best way to organize a page

Centering items becomes super easy!

In `style.css`:

```css
.parent{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
```
In `page1.html`:
```html
<div class="parent">
	<span> item 1 </span>
	<span> item 2 </span>
	<span> item 3 </span>
</div>
```


### Basic Site Layout Template

Here is a basic site layout using flex and our CRAP rules.

In `style.css`:

```css
body {
	width: 100%;
	height: 100%;
	font-family: sans-serif;
	display: flex;
	flex-direction: column;
}

nav { 
	width: 100%;
	height: 3rem;
	padding: 1rem;
}

.content{
	display: flex;
	flex-direction: row;
}

aside{
	max-width: 25%;
	flex-grow: 1;
}

main {
	display: flex;
	flex-direction: column;
	flex-grow: 2;
}
```

In `index.html`:

```html
<body>
	<nav></nav>
	<div class="content">
		<aside></aside>
		<main></main>
		<aside></aside>
	</div>
	<footer></footer>
</body>
```