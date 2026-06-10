## Agenda

1. Housekeeping
2. Reading Discussion #1
3. HTML / CSS Review
4. Introduction to the Box Model

## Housekeeping

1. Attendance
2. Project #1 due next Wednesday
3. Rolling Extra Credit

## Reading Discussion #1

### Handmade Web
 > I evoke the term 'handmade web' in order to draw attention to the physical body
 
 > I evoke the term 'handmade web' to suggest slowness and smallness as a forms of resistance.

### Resilient Web Design

- https://info.cern.ch/Proposal.html
	- TBL wrote [This is for Everyone](https://en.wikipedia.org/wiki/This_Is_for_Everyone) in 2025 all about the history of the web.
- https://www.pbs.org/video/how-we-got-now-glass/

In [this document](https://cryptpad.fr/doc/#/2/doc/edit/2lGNX0JaSCHVsc+sVjRXCSSn/), take notes in your breakout rooms on your conversation to answer the following questions:

- What does the handmade web look like to you? What are some websites that evoke that feeling? Feel free to link them.
- What was your first experience with the web? How did you learn how to use a computer? How did you learn how to type?
- How did you decide what web browser you use? How did you decide which search engine? Did you *actually* make that decision?
## HTML / CSS Review

| Compare  |                                                                                                                                | Contrast         |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| HTML     | HTML is the **structure**<br>CSS is the **style**                                                                              | CSS              |
| Element  | Element is the **type** of data that is shown.<br>Tag is the **syntax**.                                                       | Tag              |
| Selector | Selector determines which element receives a style.<br>Property : Value is the style that is changed and how it changes.       | Property : Value |
| Class    | Class is a **group** of HTML elements that have the same styles.<br>ID is a **single** HTML element and can only be used once. | ID               |
### Review: The Flow Layout
HTML is rendered in the browser using the flow layout, which is the horizontal and vertical alignment of elements on a webpage. There are two values we can manipulate using the `display` property in CSS. 

| block                                                                                                                                                             | inline                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `block` elements are stacked vertically, so they typically won't have content next to it. Think of it in like a word document where you have images "break" text. | `inline` elements are stacked horizontally, so they will usually have content side-by-side. In a word document, it is also called inline. |
| <img src="https://github.com/samheckle/images/blob/main/wp1/block.png?raw=true" style="width:300px;">                                                             | <img src="https://github.com/samheckle/images/blob/main/wp1/inline.png?raw=true" style="width:300px;">                                    |
| `<p>`, `<div>`                                                                                                                                                    | `<em>`, `<strong>`, `<a>`, `<span>`                                                                                                       |
<img src="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Display/Block_and_inline_layout/mdn-horizontal.png" style="width: 600px">
> via "Block and Inline Layout" [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Display/Block_and_inline_layout)


## Introduction to the Box Model

### Quick Reference
| Word               | Definition                                                                       | Example                           |
| ------------------ | -------------------------------------------------------------------------------- | --------------------------------- |
| Box Model          | How elements are displayed on a webpage using horizontal and vertical alignment. |                                   |
| Outer Display Type | How a box is laid out in relation to other boxes around it                       |                                   |
| Inner Display Type | How elements are laid out inside a box                                           |                                   |
| Display            | A property in CSS that determines what display type it has                       | `block`, `inline-block`, `inline` |


### Reference Links to Review
- [MDN Box Model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [MDN Block and Inline Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [MDN Flow Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Display/Flow_layout)

### Box Review

Last class we introduced the box model with this image:
<img src="https://camo.githubusercontent.com/bcbf2e0706002111065427bd383ae4b28bd14b8c2eb090044ee2c1c0e98eb614/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f69643d3153363630746d326b55795042356d4866454e786f366454397a5f4a6d30557051" style="width:600px;">
Every element on a webpage is contained inside of a box, which we can expose using the Inspector. 
<img src="https://github.com/samheckle/images/blob/main/wp1/box-inspector.png?raw=true" style="width:600px;">

For this class, we will focus on the *outer display types*, which is how a box is laid out in relation to other boxes around it. 

A box is determined by the following properties:
- `content`: this is the size of the text or media and can be changed using `width` and `height`
- `padding`: the space between the content and the border
- `border`: the edge of the content + padding
- `margin`: the distance between the border and another element
- `display`: how the box is rendered in the flow layout

We already covered most of these in [class 3](../class_03/class-03-notes.md), so today we will practice them and incorporate `display`.

### Types of Displays

The [display](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display) is a property that can change whether or not an item is a `block` or `inline` rendering. This means we can customize whether or not it goes in a new line. At this time, there are four values we can experiment with:
- `block` → vertically stacked
- `inline` → horizontally stacked
- `inline-block` → horizontally AND vertically stacked
- `hidden` → removed from the flow layout
We will add more in the future, but we will practice with these for now. 

<img src="https://miro.medium.com/v2/resize:fit:1400/1*eTM7rZjWEbhcn9HHNn7l6Q.png" style="width:600px">

### Breaking the "Normal" Flow

There are some CSS properties that can actually play with the normal flow of a page:

`float` → `right`, `left`, `auto`

allows content to flow along the sides and *removes* element from the flow-layout

<img src="https://github.com/samheckle/images/raw/main/float.png?raw=true" style="width:600px">

`overflow`→ `hidden`, `visible`, `scroll`

we can also specify which axis has overflow `overflow-x` or `overflow-y`

<img src="https://github.com/samheckle/images/raw/main/overflow.png?raw=true" style="width:600px">

- `position` → we will talk about this next class 

### Text Manipulation

We can modify how text is displayed within a container using some new properties:

[`writing-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/writing-mode)  → `horizontal-tb`, `vertical-lr`, `vertical-rl`, `sideways-rl`, `sideways-lr`

This determines *how* the block flow direction is ordered. By default, the block flow direction is **horizontal top to bottom** (`horizontal-tb`), but we can change that using different writing modes. 

[`text-orientation`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-orientation) → `mixed`, `upright`, `sideways-right`, `sideways`

We can change the text orientation only when our writing mode is not the default. So these will work in conjunction with one another on a single element.

```css
writing-mode: vertical-rl;
text-orientation: upright;
```

