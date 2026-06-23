## Agenda

1. Housekeeping
2. Extra material from Project #1 Discussion
3. Researching Design
## Housekeeping

1. Attendance
2. Reading Discussion #2 due tomorrow at midnight
3. Project #2 due next week
4. Ending at 1:30pm today! Will have extra office hours this week.
## Topics mentioned from Project #1

### General Design Tips

Generally speaking, there are a few "golden rules" of design. You do not need to take these as gospel, but they are useful to reference if you find yourself stuck on implementing a design.

From *The Non-Designers Design Book* by Robin Williams, the 4 basic principals of "CRAP":
- Contrast: avoid elements on a page looking too similar.
- Repetition: repeat visual elements of the design throughout the piece. 
- Alignment: every element should be visually connected with another on a page
- Proximity: Items relating to each other should be groups closely together.

Here are some PDFs of the [second](https://web.archive.org/web/20250801174712/https://diegopiovesan.wordpress.com/wp-content/uploads/2010/07/livro_-_the_non-designers_desi.pdf) (2004) and [fourth](https://web.archive.org/web/20260622142927/https://www.gossettphd.org/library/ux/williams_nondesignersdesignbook.pdf) (2015) edition for your reference. Interesting to compare and contrast the designs of the book itself!
#### Width of text on a page

See https://practicaltypography.com/ , and specifically https://practicaltypography.com/page-layout.html, for good visual references.

Typically, we want text to be between 60%-80% of a webpage (even Practical Typography says [45-90 characters](https://practicaltypography.com/line-length.html), or approximately 2-3 alphabets in a line).
#### Contrast on text for readability

There are a few ways to add readability for text on a background.

Given a paragraph with some content:

```html
<p>
	this is some text in a paragraph
</p>
```

You could just add a `background-color` property in CSS with [transparency](https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4).

```css
p{
	background-color: #66000000;
}
```

Or, you could add a div around the paragraph and add a background color:

```html
<div class="adding-contrast">
	<p>
		this is some text in a paragraph
	</p>
</div>
```

```css
.adding-contrast{
	background-color: #66000000;
}
```
### Linear gradients and background alternatives

In CSS, there are lots of ways to modify the background. We have only really used `background-color`, but there are lots to play around with. 

[`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background) is a shorthand for a variety of different implementations of background, including `background-color`.

[`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient/linear-gradient) is a function (a piece of code syntax that refers to an action and always uses `()`) that allows us to add a gradient to the background.

```css
background: linear-gradient(#e66465, #9198e5);
```

There are two colors separated by a comma, and CSS will automatically create the gradient for us. 

We can also pass an image into the background and have that be "tiled".

```css
background: url("test.jpg") repeat-y;
```
### Pseudo-classes 

A [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) is a class that depends on the *state* of an element, or what action has happened to the element on the webpage.

A few that might be useful to you are:
- `:hover` → when an item is held over by the mouse
- `:link` → a link that has **not** been visited
- `:visited` → a link that **has** been visited

A pseudo-class usually needs a selector to determine when an action has occurred. 

```css
/* removing default a tag styling */
a:link{
	text-decoration: none;
	color: lightgreen;
}
```
```css
/* adding hover effect */
a:hover{
	background: yellow;
}
```
```css
/* change styling after link has been clicked */
a:visited{
	text-decoration: none;
	color: darkgreen;
}
```
### Open link in new window or tab

We can also choose how an `<a>` tag opens, whether in a new window or tab. See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#target). 

```html
<a href="https://library.hunter.cuny.edu/" target="_blank"> go to library </a>
```

#### Any other questions that came up during your projects that would be useful to go over now?

???
## Researching Design

Throughout this class you will be expected to research. This will apply to both technical and conceptual topics, from design to readings to code. 

This will apply to your documentation and allowing yourself time to ideate on a concept before directly implementing it. 

### A Type of Web Design Process

1. Research + Inspiration
2. Concept
3. Information Architecture + User Experience
4. Visual Design
5. Implementation (structure, style, interaction)

#### 1. Research + Inspiration

- [Rhizome Net Art Anthology](https://anthology.rhizome.org/) | [Rhizome Artbase](https://artbase.rhizome.org/wiki/Main_Page)
- [21st Century Digital Art](http://www.digiart21.org/)
- [Creative Applications](https://www.creativeapplications.net/)
- [Artists Featured in Form and Code](http://formandcode.com/links)
- [linci.co Design Bookmarks](https://bookmarks.linci.co/)
- Tumblr, Instagram, Are.na, Social Media etc...
- [Our class collaborative doc](https://cryptpad.fr/doc/#/2/doc/view/5U8Jg0hyifHZj449ZDzzBqSiB1tGxICm4waKBsFQqnw/)

##### Inspiration

- Where do you find your web inspiration and news? [Add to this doc](https://cryptpad.fr/doc/#/2/doc/edit/jZQXlZyNpiJW2qlph3dUwVqp/)
##### Organizing your research and inspirations

In the past I was a Notion enjoyer...

<img src="https://github.com/samheckle/images/blob/main/notion.png?raw=true" style="width: 600px" />

You can add a [notion extension](https://github.com/dvanoni/notero#configure-notion) to your browser for quick bookmarking.

Now I am an [are.na](https://are.na) enjoyer. Some useful channels/people I regularly look at:
* my own [web channel](https://www.are.na/sam-heckle/_web-jghsnohy78q)
* yoona's [i love websites](https://www.are.na/yoona/i-love-websites)
* elliot cost's [model websites](https://www.are.na/elliott-cost/model-sites)
* aidan quinlan's [class collection](https://www.are.na/aidan-quinlan/class-collection)
* [herdimas anggara](https://www.are.na/herdimas-anggara/channels)
* [omayeli arenyeka](https://www.are.na/omayeli-arenyeka/channels)
* [chia amisola](https://www.are.na/chia/channels)
##### Keep a research journal!

- digital (pinterest, are.na, google docs/sheets/slides, notion, miro, figma, folder on your computer)
- physical

#### 2. Concept

- spend time [mind-mapping](https://www.gandanet.com.hk/WikIT/index.php?title=How_to_make_a_mind_map) or journalling and actually thinking about multiple concepts **before** implementing them

#### 3. Information Architecture + User Experience

##### sitemaps → blueprint / outline for your entire website

<img src="https://cdn-proxy.slickplan.com/wp-content/uploads/2025/08/2-understanding-sitemaps.png" style="width: 600px">

Ways to build a sitemap:
  - bullet point list with nested items (you can also use https://tree.nathanfriend.com/)
  - written diagram of pen and paper
  - online tools (miro, penpot, figma, google doc, adobe)

Think of a sitemap as an outline, just like writing an essay outline. These can be helpful when you are laying out **how many pages you are going to create** and **how they are connected**. 

##### wireframes → blueprint for individual pages

<img src="https://www.archimetric.com/wp-content/uploads/2022/02/02-newspaper-site-wireframe-example.png" style="width: 600px">

Ways to build a wireframe:
  - pen + paper
  - online tools (miro, penpot, figma, google doc, adobe)

Wireframes define how each individual page is structured and how the broad content might be organized. Truly a rectangle with a bunch of other rectangles will satisfy the job.

Sitemaps and wireframes are considered "sketches" and ideation on your project. Typically it is always good to prototype your designs before implementing them. For websites that only have one page, you likely don't need a sitemap (like project 2), but you will always need a wireframe.

#### 4. Visual Design

- take your wireframe to higher fidelity and populate it with content.
- how does the website look?
- how does the design work towards conveying your concept?

##### Color

- color scheme generators: [coolors.co](https://coolors.co/)

##### Typography

- google fonts
- adobe fonts
- [typefoundry](https://typefoundry.directory/)
- github + search of font name

##### Accessibility 

- [w3c accessability guidelines](https://www.w3.org/WAI/standards-guidelines/)

#### 5. Implementation

The last bit of building out a project is implementing your designs into code. This is where you might have designed something but aren't sure how to technically implement it.

A few ways to explore:
- Reread the class notes! There are always extra resources and links that might give you more guidance on a particular topic.
- Read through the MDN docs! Are there interactions that you can make using HTML and CSS outlined in a tutorial?
- Look at Youtube tutorials. This won't be copying and pasting the tutorial, but implementing it in your won words.
- Talk to people! Email me or ask your friends. 
- Although this is discouraged as a method, you can ask AI tools for resources on how to build something. Again, this is *not* asking AI tools to build the project for you, but directing yourself to potential avenues of resources. 

Research takes a long time! Which is why AI tools are so compelling, because they can streamline and "optimize" your time. But we don't want to optimize, we want to be curious! In your blog, take note of each link you clicked on that you spent significant time with. These are the links that you will cite in your documentation.
