# Week 01: 6/3/26

## Agenda

1. Introductions
2. Setting up Sublime
3. Introduction to HTML
4. How to upload to github

## Your Introductions

- preferred name
- pronouns
- major / year
- type of OS (mac/windows/linux)
- default browser
- default search engine

## Setting Up Text Editor

Open up whichever text editor you installed (SublimeText, VSCodium, Notepad++, etc). Then open the folder we just cloned.

Your folder should look like this:

```
└── web-production-1/
    ├── class-demos/
    ├── project1/
    ├── project2/
    └── project3/
```

For every class, you will create a class# folder inside the `class-demos/`

Let's make class_02:

```
└── web-production-1/
    ├── class-demos/
    │   └── class_02/
    ├── project1/
    ├── project2/
    └── project3/
```
## Introduction to HTML
### Quick Reference

| Word                      | Definition                                                                                                                                                                                                                       | Example                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Syntax                    | The grammar or punctuation of a programming language                                                                                                                                                                             |                                                     |
| Documentation / Reference | The dictionary that defines the syntax for a particular programming language. Often, we will be using the [Mozilla Developer Network](https://developer.mozilla.org/en-US/). You can think of this as the textbook for the class |                                                     |
| HTML<br>                  | HyperText Markup Language, or a way to organize words on a page. It is both a file-type and a way of writing files.                                                                                                              | `index.html`                                        |
| Comment                   | A note written inside of code but is not rendered on the webpage                                                                                                                                                                 | `<!-- -->`                                          |
| Element                   | A specific type of markup in HTML, created using tags. You can see a [list of all HTML tags here](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)                                                          | h1, p, a                                            |
| Tags                      | The syntax used to create a HTML element that goes inside `< >`                                                                                                                                                                  | `<p> </p>`                                          |
| Opening Tag               | The first piece of syntax in an HTML element                                                                                                                                                                                     | `<h1>`                                              |
| Closing Tag               | The last piece of syntax in an HTML element that includes `/`                                                                                                                                                                    | `</h1>`                                             |
| Parent Element            | An element with another element inside of it. In the example, `p` is the parent element.<br>                                                                                                                                     | ```<p><span></span></p>```                          |
| Child Element             | An element that is inside another element. In the above example, `span` is the child element.                                                                                                                                    |                                                     |
| Attributes                | Extra settings or information about the element. Some attributes are required for an element to work correctly.                                                                                                                  | `src`, `href`                                       |
| Flow layout               | How HTML elements fall on the page                                                                                                                                                                                               |                                                     |
| Path                      | Where a file lives on your computer. This can refer to both absolute and relative paths.                                                                                                                                         |                                                     |
| Absolute Path             | The full file location on your computer                                                                                                                                                                                          | `/Users/samheckle/dev/summer-26/week_02/index.html` |
| Relative Path             | The location of a file relative to another file                                                                                                                                                                                  | `/images/guywithguitar.png`                         |
### What is HTML?
Now that we are all set up, we will start making our first HTML files. 

*H*yper*T*ext *M*arkup *L*angauage (HTML) isn't a programming language, but a way to taxonimize (organize) words on a page. "Hypertext" refers to the links that connect pages to one another. 

---
### Make a new HTML file
#### Option 1: Click the `+` in the top right corner of SublimeText
<img src="https://github.com/samheckle/images/blob/main/wp1/new_file.png?raw=true" style="width:600px;">

#### Option 2: Right Click the folder you want → New File

<img src="https://github.com/samheckle/images/blob/main/wp1/new_file_2.png?raw=true" style="width:600px;">

#### Option 3: Hotkey

1. Mac: `⌘ + N`
2. PC: `Ctrl + N`

--- 
### Saving your new file

#### Option 1: in the top menu  → File → Save

<img src="https://github.com/samheckle/images/blob/main/wp1/filesave.png?raw=true" style="width:600px;">

#### Option 2: Hotkey

1. Mac: `⌘ + S`
2. PC: `Ctrl + S`

---

### Name the file
It will ask what you would like to name the file. Our first file in any folder will typically be called `index.html`. Generally speaking you can name files whatever you want, but they *cannot* have spaces. Use `_` or `-` instead. 

<img src="https://github.com/samheckle/images/blob/main/wp1/namefile.png?raw=true" style="width:600px;">

This will pretty much be the flow for creating any file. 
## Writing our first HTML: Comments

The syntax of a comment in HTML is `<!-- -->`. We write comments to explain things that are happening in the code. It is good practice so that we can understand what is happening if we look at the code in the future. 

```html
<!-- this is a comment in HTML -->
<!-- comments are used to take notes -->
<!-- i write comments to explain what is happening in the code -->
```

## HTML is Structure

HTML follows a particular structure. The first tag we always use in an HTML file is `<html>`. All of our code will be written between the opening and closing tags. Every HTML tag can also be called an `element`, or the thing that exists on the page. 

```html
<!-- opening -->
<html>

<!-- closing -->
</html>
```

Then we get into parent and child tags. An element that contains elements inside of it is called the `parent element`, whereas the elements inside are called `child elements`. We can have infinite nesting inside of elements. 

The typical children of the `<html>` element are `<head>` and `<body>` elements. 

![image](https://kagi.com/proxy/Document.jpg?c=h8JCMe5cYLVbQGUI8h4mf7rgrW8NI2w--6vBMX9vZpfXO6UiFxDqWEFyflaL0FTSB7ZUc1FYoXDOrrqAD_5mVwH157My1rt4Gr5w2EVxa08LSWT2VXbF_NqJ-W_uQUE-)

The `<head>` tag contains content and meta information about the webpage the browser might need to know, like language, character set (ie alphabet), and the `<title>` tag, which allows us to set what the name of the tab is in our browser. 

It might look something like
```html
<html>
    <head>
        <title>my homepage</title>
    </head>
</html>
```

We can view any HTML pages by right clicking the file in the file explorer -> pressing Reveal in Finder, and dragging the file into our browser. 

<img src="https://github.com/samheckle/images/blob/main/finder.png?raw=true" style="width:600px;">


<img src="https://github.com/samheckle/images/blob/main/finder_drag.gif?raw=true" style="width:600px;">

## Other Element Types for Content

These are tags that will always live inside the `<body>` tag.

- `<p>...</p>` → paragraph
- `<h1> ... </h1>` → headings (also h2, h3, ... h6)
- `<strong>...</strong>` → bolded text
- `<em>...</em>` → italicized text
- `<small> ... </small>` → small text

***Self-Closing Tags***

A self-closing tag is a tag that does not have a closing tag and instead uses a shorthand inside the opening tag. This is because they do not have content inside them.
- `<br />` → line break
- `<hr />` horizontal rule → a line break which draws a line

**Tags with Required Attributes**
- `<a href="http://...">...</a>` → a link to another page. The “`href=""`” portion is an **attribute**. Many tags have optional attributes, further details below.
- `<img src="" />` → images, uses `src` attribute which can contain a local file path or url to an image. Also self-closing

**Grouping & information organization:**
  - `<div> ... </div>` → [Block-level](https://www.w3schools.com/html/html_blocks.asp)
  - `<span> ... </span>` → [Inline](https://www.w3schools.com/html/html_blocks.asp)
    - These will come in handy as we start working with styles and Javascript.
#### Attributes

Most HTML tags can have **attributes**. In the case of the `<a>` above, `href` is an attribute which indicates the URL that the link should point to. Other common attributes are `id`, `class` or `src`

- `src` is specific to media elements (images, audio, video, iframes) and point to the actual file being embedded into the webpage.
- `href` is specific to links that tells where the link is going to
- `id` allows a specific tag/element on the page to be referenced through JavaScript or CSS
  (which we’ll cover later).
- `class` is useful when using CSS to define the design of the page.

There are more attributes out there, most of them specific to certain tags. We will cover them as we discover other tags.
#### Flow Layout

The way html is structured is through the flow layout: each page comprises `block` and `inline` elements to construct each page. This is like a stack of documents, it reads from the top to the bottom according to how big the page is and how much content you have.

| block                                                                                                                                                             | inline                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `block` elements are stacked vertically, so they typically won't have content next to it. Think of it in like a word document where you have images "break" text. | `inline` elements are stacked horizontally, so they will usually have content side-by-side. In a word document, it is also called inline. |
| <img src="https://github.com/samheckle/images/blob/main/wp1/block.png?raw=true" style="width:300px;">                                                             | <img src="https://github.com/samheckle/images/blob/main/wp1/inline.png?raw=true" style="width:300px;">                                    |
| `<p>`, `<div>`                                                                                                                                                    | `<em>`, `<strong>`, `<a>`, `<span>`                                                                                                       |

#### More on Pathing

Also important to note here as we are working, we can see the `path` in our address bar. Mine shows `file:///Users/samheckle/dev/web-production-1/class-demos/week_02/index.html`. The first part, `file://` is the protocol, meaning it is looking at a file on your computer. Another protocol is `https://` , which is how we access files on the web.

***You should always be submitting `https://` links in this class.***

The path is really important because we need to be able to know exactly where files are on our computer in order to reference them within our own code, specifically if we wanted to link two pages or add images together.

We can access the files by specifying the path in different attributes (like `src` or `href`). We need to know where we are in the file structure and where we need to go in order to determine the path from one file to another. 

For example, if we want to include an image in our `index.html`, we need to know that our path to `index.html` is 
```
/Users/samheckle/dev/web-production-1/class-demos/week_02/index.html
```
Our images exist in a folder called `images/`, and if we drag our image to the browser, we can also see it's path
```
/Users/samheckle/dev/web-production-1/class-demos/week_02/images/guywithguitar.jpg
```

***Absolute Path***

The ***absolute path*** between the two files is the same: `/Users/samheckle/dev/web-production-1/week_02/`. Absolute paths are the entire path on the entire computer. 
```
/Users/samheckle/dev/web-production-1/class-demos/week_02/index.html
/Users/samheckle/dev/web-production-1/class-demos/week_02/images/guywithguitar.jpg
```

We need to note the ***difference*** between these two paths -- when we want to include a file (this could be another HTML file or an asset like an image), we use the ***relative path***. This is the path that is different between the absolute paths. So if we want to include the `guywithguitar.jpg` in our `index.html`, we need to use the relative path, or the difference between the absolute paths. 

***Relative Path***
```
index.html
images/guywithguitar.jpg
```

So if we wanted to include our image as content inside our HTML, we would add the `src` attribute in the opening `<img>` tag. 

```html
<img src="images/guywithguitar.jpg" />
```

If we moved the folder around and the absolute paths changed...

```
└── web-production-1/
    ├── images/
    │   └── guywithguitar.jpg
    ├── class-demos/
    │   └── class_02/
    │       └── index.html
    ├── project1/
    ├── project2/
    └── project3/
```

The absolute path between the two files would be:
```
/Users/samheckle/dev/web-production-1/class-demos/week_02/index.html
/Users/samheckle/dev/web-production-1/images/guywithguitar.jpg
```
Now, the only similarity is `/Users/samheckle/dev/web-production-1/`. So to include this image in our `index.html`, we need to go UP two folders. This is because the file needs to find the images folder. 

In order to go UP a folder in code, we use the syntax `../`

If we go UP one time, we land in `class-demos/`. But the `images/` folder does not exist there.   
If we go UP two times, we land in `web-production-1`, which is where the `images/` folder lives!

So to go from `index.html` to our image, our relative path would be:
```
index.html
../../images/guywithguitar.jpg
```
So our final path in our attribute:
```html
<img src="../../images/guywithguitar.jpg" />
```
This likely won't happen but if you end up using a lot of sub-folders in projects it will be helpful.

## Upload to Github

At the end of every class, we will upload our code to GitHub. This is 5 steps you will do at the end of every class. You will be running commands in your CLI interface. You should be typing these out to build muscle memory! 

1. Open the Terminal / GitBash application by right clicking your `web-production-1` folder on your computer and selecting "Open in Terminal" / "Open in GitBash (this might be nested under the more options menu)"
2. `git status` → check all the files that were changed from the last version
3. `git add .` → adds all the changed files. if you have a file you do not want added, you need to manually type the files you do want instead of the `.`
4. `git commit -m "you must change this message"` → names the version we are about to upload. Everything inside the `""` will be what the version is named. This should be a useful message, something along the lines of `"class 2 upload"`. It will be different every time you upload!
5. `git push` → uploads our version to GitHub
