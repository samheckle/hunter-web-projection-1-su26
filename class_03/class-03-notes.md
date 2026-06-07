## Agenda

1. Housekeeping 
2. Tools Review
3. Introduction to CSS

## Housekeeping

1. Attendance
2. Reading Assignment #1 due tonight, discussion next class

## Tools Review

### Text Editor
Every class we will open **SublimeText** (or any text editor) and ensure we have our `web-production-1` folder open. It should open the folder automatically if this is the only time you use the tool.

A text editor allows us to write code. It provides *syntax highlighting* to help us identify errors where our code might have issues. 

### Browser
Usually side-by-side we will have a browser open. Typically I use **Firefox**, but Chrome also works. 

If you use Safari, you will need to [enable web developer tools](https://developer.apple.com/documentation/safari-developer-tools/enabling-developer-features)
#### Viewing HTML files
Last time we found the files on our computer and dragged them into a browser window. 

<img src="https://github.com/samheckle/images/blob/main/finder_drag.gif?raw=true" style="width:600px;">

### Terminal / GitBash
These are our computer console, where we can run commands using the Command Line Interface (CLI).
### GitHub
GitHub is like Google Drive for code -- we can share our code files directly AND publish them as live websites using Github Pages. This is why we submit 2 links at the end of every class. The two links you will submit will always follow the same structure:
```
# the code 
https://github.com/samheckle/web-production-1/tree/main/class-demos/week_0x
# the website
https://samheckle.github.io/web-production-1/class-demos/week_0x/index.html
```
These will pretty much be the same every class. Every week, you will replace `[week_0x]` with whatever you named your folder on your computer. We *never* want to name folders with spaces! Your url will look different if you use a space. 

### Questions on tools so far?

---
## Introduction to CSS

### Quick Reference

| Word     | Definition                                                                                                                                                                                                             | Example                                                |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| CSS      | Cascading Style Sheet is a language and file type that determines how HTML appears on a webpage.                                                                                                                       | `style.css`                                            |
| Selector | Which element on the page has a style rule applied to it. There are several levels of selectors that [allow you to get more specific as you go](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors). | `h1`, `p`, `.class`, `#id`                             |
| Property | Which style are you changing. You can see a full list [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties). This is on the left-side of the colon.                                            | `background-color`, `color`, `font-family`, `padding`  |
| Value    | Setting the property to be the desired value, on the right-side of the colon. This varies depending on what property you are changing.                                                                                 | `align-items: center;`                                 |
| Class    | A group of HTML elements that have the same styles. It is applied in an HTML attribute, and styled in a css selector.                                                                                                  | HTML:<br>`<div class="test">`<br>CSS:<br>`.test {}`    |
| ID       | A specific HTML element. You can only use a single unique ID one time, but you can have multiple IDs on a page. This is a better selector when we get to JavaScript.                                                   | HTML:<br>`<div id="cool-id">`<br>CSS:<br>`#cool-id {}` |
### What is CSS?

**C**ascasding **S**tyle **S**heets (CSS) is the language used to style HTML documents. HTML provides the structure of a document (using tags), whereas CSS determines how that structure looks. From color, spacing, layout, and much much more. CSS also determines how a website might look on different devices and screen sizes. 

CSS is written as a series of **rules**, broken into two parts:
- `selector`: which element is being styled via a rule
- `property`: what part of the element is modified (text color, background color, spacing, etc)
- `value`: what the property changes to

The basic syntax of a CSS rule looks like
```css
selector {
	property: value;
}
```

 You can add as many `property:value;` pairs that you want on each element and they would just be written one line after the other.
```css
selector {
	property: value;
	property: value;
	property: value;
	property: value;
}
```

 As an example, if you wanted to make a rule defining _all paragraphs on the HTML page to be red over a blue background, with a 16pt font size_:

```css
p {
  color: red;
  background-color: blue;
  font-size: 16pt;
}
```

### Using CSS on a webpage

There are three main ways of styling an HTML page. They all use the same CSS language and syntax, but are different in _where_ the CSS code lives. We will ONLY use the third option, but it’s important to be aware of all three.

- **Option #1** (bad): `style` attribute for individual elements
  ```html
  <html>
    <head>
      <!-- We have an empty head tag here, no page metadata. -->
    </head>
    <body>
      <p style="color: red;">This is a red paragraph</p>
      <p>This paragraph is NOT red.</p>
    </body>
  </html>
  ```
  Using the `style` attribute is a great way to try things out quickly in CSS. However, as an element’s styling gets more complex (meaning multiple CSS properties) and more elements get custom styles, the HTML document can become _really messy really quickly._ At the same time, if we wanted to apply the same style to two different elements, we would have to copy and paste the value of the style attribute, and that’s not ideal. This is why we will rarely use `style` as an attribute.
- **Option #2** (also bad): `<style>` tag, declared inside of `<head>`
  ```html
  <html>
    <head>
      <style>
        p {
          color: red;
        }
      </style>
      <!-- The CSS code above applies the red color property to ALL <p> tags on the page. -->
    </head>
    <body>
      <p>This is my red paragraph.</p>
      <p>This is another red paragraph.</p>
      <p>All paragraphs are actually red in this example.</p>

      This text, however, is not red, because it's not enclosed in a p tag.
      <div>Neither is this one.</div>
    </body>
  </html>
  ```
- **Option #3** (much better): Using a separate `CSS` file
  This is really just Option #2, but the `<style>` tag is replaced by an external file. Everything else is the same. We first create a file called `style.css` where we write our style declarations:
  ```css
  p {
    color: red;
  }
  ```
  And then point the HTML page to this external styling file. To link an external stylesheet, you'd include a `<link>` element inside the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) tag of your HTML file like this:
  ```html
  <html>
    <head>
      **
      <link rel="stylesheet" href="/style.css" />
      **
      <!-- We use the <link> tag to point to our CSS file. -->
    </head>
    <body>
      <p>This is a red paragraph.</p>

      <p style="color: blue">
        The style attribute has higher priority than the external stylesheet, so
        this paragraph will be blue.
      </p>
    </body>
  </html>
  ```
#### Link Tag Attributes

The **`<link>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element we used to include the stylesheet specifies relationships between the current document and external resources. This element is most commonly used to link to [stylesheets](https://developer.mozilla.org/en-US/docs/Glossary/CSS), but is also used to establish site icons. The `**rel**` stands for "relationship", and is probably one of the key features of the `<link>` element — the value denotes how the item being linked to is related to the containing document. As you'll see from our [Link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types) reference, there are many different kinds of relationships.

### Creating our first CSS file

Open up SublimeText if you haven't already and make sure you are looking at `web-production-1`

Let's create our class_03 folder and create our files. If you can't remember how to make a file, [refer to last class](https://github.com/samheckle/hunter-web-projection-1-su26/blob/main/class_02/Class_02.md#make-a-new-html-file).

Your structure should look like:
```
└── web-production-1/
    ├── class-demos/
    │   └── class_02/
    │   └── class_03/
    │       │   └── index.html
    │       │   └── style.css
    ├── project1/
    ├── project2/
    └── project3/
```

### Comments in CSS
We write comments to explain things that are happening in the code. It is good practice so that we can understand what is happening if we look at the code in the future.

In CSS, the syntax is `/* */`

```css
/* this is a comment in CSS */
```

### Selectors

There are 3 different types of basic selectors in CSS. The selector is the specific item on the webpage we are grabbing. They are:

- the html tag itself (ie `body`, `p`). this will select _all_ elements that match that value
- `class` - an attribute that can apply to multiple elements, regardless of the element type
- `id` - an attribute that can apply to only ONE element. This is useful for JavaScript.

To retrieve an html tag, we can just use the element name:

```css
body {
  background-color: cyan;
}
```
#### Class Selectors

**Class selectors** allow you to group things based on their logical function (or other purpose). The class selector starts with a dot (`.`) character. It will select everything in the document with that class applied to it.
```css
.search {
	width: 100%;
} /* Select everything in the document with class .search and apply width property to them */
```
##### Targeting classes on particular elements

You can create a selector that will target specific elements with the class applied. In this next example, we will highlight a `<span>` with a class of `highlight` differently to an `<h1>` heading with a class of `highlight`. We do this by using the type selector for the element we want to target, with the class appended using a dot, with no white space in between.

```css
span.highlight {
	background-color: yellow;
}

h1.highlight {
    background-color: pink;
}
```

##### Target an element if it has more than one class applied

You can apply multiple classes to an element and target them individually, or only select the element when all of the classes in the selector are present. This can be helpful when building up components that can be combined in different ways on your site.

In the example below, we have a `<div>` that contains a note. The grey border is applied when the box has a class of `notebox`. If it also has a class of `warning` or `danger`, we change the [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color). We can tell the browser that we only want to match the element if it has two classes applied by chaining them together with no white space between them.

In `style.css`
```css
.notebox {
	border: 4px solid #666; /* The grey border is applied when the box has a class of notebox */
}

.notebox.warning {
	border-color: orange; /* Change border color to orange if the div also has a class of warning. */
}

.notebox.danger {
	border-color: red; /* Change border color to red if the div also has a class of danger. */
}
```

In `index.html`
```html
<div class="notebox">This is an informational note.</div>

<div class="notebox warning">This note shows a warning.</div>

<div class="notebox danger">This note shows danger!</div>

<div class="danger">
This won't get styled — it also needs to have the notebox class
</div>
```

#### Id Selector

**ID selectors** are used in the same way as a class selector. However, an ID can be used only *once per page*, and elements can only have a single `id` value applied to them. It can select an element that has the `id` set on it, and you can precede the ID with a type selector to only target the element if both the element and ID match.

ID selectors start with a hash (`#`) followed by the ID value. The below style sheet sets the margin property for the element with an ID of `logo`.

In `style.css`
```css
#logo {
	margin: 9px;
} /* Assign margin property to ID #logo */
```

In `index.html`:

```html
<h1 id="logo">ID selector</h1>
```

**Warning:** Using the same ID multiple times in a document may appear to work for styling purposes, but don't do this. It results in invalid code, and will cause strange behavior in many places.
### Some Property Examples

#### Color

The **`<color>`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [data type](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types) represents a [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color). A `<color>` may also include an [alpha-channel](https://en.wikipedia.org/wiki/Alpha_compositing) _transparency value_, indicating how the color should [composite](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) with its background.
  
We will mainly cover `<color>` as defined in 2 ways: named colors and hex & `rgb()`
- Named colors - Using a keyword (such as `blue` or `transparent`).
	- Color keywords are case-insensitive identifiers that represent a specific color, such as `red`, `blue`, `black`, or `lightseagreen`. Although the names more or less describes their respective colors, they are essentially artificial, without a strict rationale behind the names used.
	- Unlike HTML, CSS will completely ignore unknown keywords.
	- The color keywords all represent plain, solid colors, without transparency.
	- [See a list of all the named colors!](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color)
- Hex & `rgb()` - Using the [RGB cubic-coordinate](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation) system.
	- rgb(): The RGB color model defines a given color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) according to its red (r), green (g), and blue (b) components. An optional alpha (a) component represents the color's transparency. Syntax-wise, RGB colors can be expressed through both hexadecimal (prefixed with `#`) and functional (`rgb()`, `rgba()`) notations.
	- rgb notation: **`rgb[a](R, G, B[, A])`** 
		- `R` (red), `G` (green), and `B` (blue) can be either [number](https://developer.mozilla.org/en-US/docs/Web/CSS/number) or [percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage), where the number `255` corresponds to `100%`. `A` (alpha) can be a [number](https://developer.mozilla.org/en-US/docs/Web/CSS/number) between `0` and `1`, or a [percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage), where the number `1` corresponds to `100%` (full opacity).
	- hex notation: **`#RGB[A]`**
		- `R` (red), `G` (green), `B` (blue), and `A` (alpha) are hexadecimal characters (0–9, A–F). `A` is optional. The three-digit notation (`#RGB`) is a shorter version of the six-digit form (`#RRGGBB`). For example, `#f09` is the same color as `#ff0099`. Likewise, the four-digit RGB notation (`#RGBA`) is a shorter version of the eight-digit form (`#RRGGBBAA`). For example, `#0f38` is the same color as `#00ff3388`.
    ```css
    color: red; /* named color */
    color: rbga(255, 0, 0, 1); /* rgba color */
    color: #ff0000; /* hex color */

    /* all three lines show the same color */
    ```
- Background-color 
  - Initially, the [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) of an HTML tag is transparent. However, you can change it by using the `background-color` property, which is specified as a single `<color>` value.

  ```css
  /* Keyword values */
  background-color: red;
  background-color: indigo;

  /* Hexadecimal value */
  background-color: #bbff00; /* Fully opaque */
  background-color: #bf0; /* Fully opaque shorthand */
  background-color: #11ffee00; /* Fully transparent */
  background-color: #1fe0; /* Fully transparent shorthand  */
  background-color: #11ffeeff; /* Fully opaque */
  background-color: #1fef; /* Fully opaque shorthand  */

  /* RGB value */
  background-color: rgb(255, 255, 128); /* Fully opaque */
  background-color: rgba(117, 190, 218, 0.5); /* 50% transparent */
  ```

#### Width & Height

The **`width`** and `height` CSS property set an element's [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height). By default, it sets the width of the [content area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content_area), but if [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) is set to `border-box`, it sets the width of the [border area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border_area).

  ```css
  /* <length> values */
  width: 300px;
  height: 25em;

  /* <percentage> value */
  width: 75%;

  /* Keyword values */
  width: max-content;
  height: min-content;
  width: fit-content(20em);
  height: auto;

  /* Global values */
  width: inherit;
  height: initial;
  width: revert;
  height: unset;
  ```
#### Typography 
The **`font`** property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.
- font-size
	- The **`font-size`** property sets the size of the font. Changing the font size also updates the sizes of the font size-relative [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units, such as `em`, `ex`, and so forth.
      ```css
      /* <absolute-size> values */
      font-size: xx-small;
      font-size: x-small;
      font-size: small;
      font-size: medium;
      font-size: large;
      font-size: x-large;
      font-size: xx-large;
      font-size: xxx-large;

      /* <relative-size> values */
      font-size: smaller;
      font-size: larger;

      /* <length> values */
      font-size: 12px;
      font-size: 0.8em;

      /* <percentage> values */
      font-size: 80%;

      /* Global values */
      font-size: inherit;
      font-size: initial;
      font-size: revert;
      font-size: unset;
      ```
- Measuring Units to specify:
	- `px` - Setting the font size in pixel values (`px`) is a good choice when you need pixel accuracy. A px value is static. This is an OS-independent and cross-browser way of literally telling the browsers to render the letters at exactly the number of pixels in height that you specified. The results may vary slightly across browsers, as they may use different algorithms to achieve a similar effect.
	- `em` - Using an `em` value creates a dynamic or computed font size. The numeric value acts as a multiplier of the `font-size` property of the element on which it is used. In order to calculate the `em` equivalent for any pixel value required, you can use this formula:
```
em = desired element pixel value / parent element font-size in pixels
```

- The **`font-family`** specifies a prioritized list of one or more font family names and/or generic family names for the selected element. Values are separated by commas to indicate that they are alternatives. The browser will select the first font in the list that is installed or that can be downloaded using a [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) at-rule.
	- The `font-family` property specifies a list of fonts, from highest priority to lowest. You should always include at least one generic family name in a `font-family` list, since there's no guarantee that any given font is available. This lets the browser select an acceptable fallback font when necessary.
	- For `font-family` there is no specific default or initial value; the initial value always depends on the browser and/or operating system.
	- The `font-family` property lists one or more font families, separated by commas. Each font family is specified as either a `family-name` or a `generic-name` value.
```css
h1 {
    font-family: serif;
    /* Using the default serif font of the system for our headings */
}

p {
    font-family: "Gill Sans Extrabold", sans-serif;
/* Using Gill Sans Extrabold for our paragraphs. 
If the font is not available for any reason, 
we fall back onto the default system sans-serif font. */
}
```

**Note:** If a font name contains white-space, it must be quoted. Single quotes must be used when using the "style" attribute in HTML.

- `serif`, `sans-serif`, `monospace` (Generic family names)
	- `serif` - In typography, a serif is a small line or stroke regularly attached to the end of a larger stroke in a letter or symbol within a particular font or family of fonts.
	- `sans-serif` - In typography and lettering, a sans-serif, sans serif, gothic, or simply sans letterform is one that does not have extending features called "serifs" at the end of strokes.
	- `monospace` - A monospaced font, also called a fixed-pitch, fixed-width, or non-proportional font, is a font whose letters and characters each occupy the same amount of horizontal space. This contrasts with variable-width fonts, where the letters and spacings have different widths.

#### Text alignment 
  The **`text-align`** property sets the horizontal alignment of text inside of its parent. The `text-align` property is specified using keyword values:
  `start`, `end`, `left`, `right`, `center`, `justify`, `justify-all`, or `match-parent`.
  ```css
  p {
    text-align: right; /* This right-aligns our text. */
  }
  ```

#### Some Light Positioning
- `margin`
	- CSS margins define the space around an element. It determines the amount of whitespace between neighboring components. It allows you to shift elements up and down the page and left and right.
	- A negative margin value allows you to overlap page items. When trying to generate a broken grid effect, this can be useful.
	- It’s easy to center an element horizontally if the width of your website is fixed: Set the value margin to `auto` in the value margin field.
	- The `margin` property may be specified using one, two, three, or four values. Each value is a [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length), a [percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage), or the keyword `auto`.When **one** value is specified, it applies the same margin to **all four sides**
	- When **two** values are specified, the first margin applies to the **top and bottom**, the second to the **left and right**.
	- When **three** values are specified, the first margin applies to the **top**, the second to the **right and left**, the third to the **bottom**.
	- When **four** values are specified, the margins apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).
	- You can also specify the value of the side using: `margin-top`, `margin-left`, `margin-bottom`, `margin-right`
```css
/* for example, to assign the top margin at an absolute value of 10px: */
margin-top: 10px;
```
- `border`
	- The **`border`** property sets an element's border. It sets the values of [border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width), and [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color), [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius), [border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
	- For both [border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width) , [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color), and [border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style), the property may be specified using one, two, three, or four values.
		- When **one** value is specified, it applies the same width to **all four sides**.
		- When **two** values are specified, the first width applies to the **top and bottom**, the second to the **left and right**.
		- When **three** values are specified, the first width applies to the **top**, the second to the **left and right**, the third to the **bottom**.
		- When **four** values are specified, the widths apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).
	- The property can also set each side individually, for instance:
		```css
		border-top-color: red; /* set only the top border red */
		border-bottom-width: thin; /* set only the bottom border thin */
		border-left-style: dotted; /* set only the left border to a 
		```

	- `<line-width>` value defines the width of the border, either as an explicit nonnegative [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) or a keyword. If it's a keyword, it must be one of the following values: `thin` < `medium` < `thick`
	- [border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) property sets the line style for all four sides of an element's border.`line-style` value describes the style of the border. It can have the following values: `hidden`, `none`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset`
    - **Note:** The border will be invisible if its style is not defined. This is because the style defaults to `none`.
    - Circles and other shapes you can make with `border-radius`
	    - The **`border-radius`** property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners. The radius applies to the whole [background](https://developer.mozilla.org/en-US/docs/Web/CSS/background), even if the element has no border; the exact position of the clipping is defined by the [background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) property.
	    - Some examples:
	    ```css
	    border-radius: 100px;
	    ```
		```css
		border-radius: 10% 30% 50% 70%;
		```
- `padding`
	- The [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) property controls the appearance of content within each element, or say, the amount of space between the content and the border of the page. It is most commonly used to create whitespace within items. The content will remain the same size as before, but more space will surround it when the padding value increases. This is beneficial when you enlarge the clickable area of interactive elements like buttons.
	- The `padding` property may be specified using one, two, three, or four values. Each value is a [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) or a [percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage). Negative values are invalid.
		- When **one** value is specified, it applies the same padding to **all four sides**.
		- When **two** values are specified, the first padding applies to the **top and bottom**, the second to the **left and right**.
		- When **three** values are specified, the first padding applies to the **top**, the second to the **right and left**, the third to the **bottom**.
		- When **four** values are specified, the paddings apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).
		- Similar to the `margin` and `border` property, `padding` can also set sides individually by adding the specification after it: [padding-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom), [padding-left](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left) ,[padding-right](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right) , [padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
#### Difference between margin, border, padding
<img src="https://camo.githubusercontent.com/bcbf2e0706002111065427bd383ae4b28bd14b8c2eb090044ee2c1c0e98eb614/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f69643d3153363630746d326b55795042356d4866454e786f366454397a5f4a6d30557051" style="width:600px;">
Margin is the space surrounding an element’s border in CSS, whereas padding is between its border and its content.

The margin property governs the *space around* an element, whereas the padding property governs the space *within* an element.

This is known as the `box model`, which we will discuss next class. 

## Opening the Inspector

The Inspector is a set of web developer tools built directly into the browser and can help you edit pages on-the-fly and diagnose problems quickly.

When you want to inspect a DOM (Document Object Model) node's styles or attributes, right-click the element and select **Inspect**

The **Elements** panel of the Inspector opens. The element where you right-clicked is highlighted in the **DOM Tree**. The DOM Tree is where you do all DOM-related activities in DevTools.

Under the “Styles” tab, you can access the CSS code and manipulate it.

More on Viewing And Changing CSS - An interactive [tutorial for Chrome](https://developer.chrome.com/docs/devtools/css/) to follow through.
- A similar interface is available in Mozilla Firefox, Safari and most other modern browsers.
