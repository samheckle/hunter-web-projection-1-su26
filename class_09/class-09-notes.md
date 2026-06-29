## Agenda

1. Housekeeping
2. Review Flexbox
3. Introduction to Grids
4. In-class work time

## Housekeeping

1. Attendance
2. Project #2 due tomorrow midnight
3. Reading #3 due next week
4. HTML day: global day to build html in the park on August 8
	1. global page: https://2026.html.energy/
	2. nyc: https://valuesbased.software/html.html

## Review: Flexbox

Flexbox is the #1 way to creative responsive designs on a webpage. There are alternatives, such as customizing sizes using `@media` or grids, or frameworks like Bootstrap or Tailwind. 

Typically flexbox is the *easiest*, most *lightweight* and *common* implementation. So it is really important to be familiar with how flexbox works and is implemented. 
## Introduction to Grids

### Quick Reference

| Word            | Definition                                                                                 | Example                                       |
| --------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------- |
| Grid            | 2 dimensional layout system in CSS. Defaults to one column grid.                           | `display: grid`                               |
| Grid tracks     | CSS defining the rows and columns inside the grid.                                         | `grid-template-rows`, `grid-template-columns` |
| Grid cell       | Smallest unit on a grid, similar to a table cell. Usually the child of the grid container. |                                               |
| Fractional Unit | Fraction of available space, similar to `flex-grow` or `flex-shrink`.                      |                                               |

### Reference Links to Review

- MDN CSS [grid reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid)
- MDN tutorial: [learn grids](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids)
- MDN CSS guide: [common grid layouts](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
- CSS Tricks: [grid layout](https://css-tricks.com/complete-guide-css-grid-layout/)
- [CSS Grid for Designers](https://web.archive.org/web/20190112201756/https://open.nytimes.com/css-grid-for-designers-f74a883b98f5?gi=c607e9c0fd8c)
- [CSS Grid Generator](https://cssgridgenerator.io/)

### Grids are tables

A long time ago, before media queries and flexbox, developers used to organize webpages by using the `<table>` tag. The modern adaptation of this is using a `grid` in CSS instead of HTML.

Flexbox leverages *one-directional flow*, whereas grids use *two-demsional layout*. 

<img src="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids/grid.png" style="width: 600px">

The last CSS display is `grid`, which works similarly to flexbox. 

On the **parent**, you define most of the grid properties:
- `display: grid` → sets the display to be grid 
- `grid: grid-template-rows grid-template-column column-gap row-gap`  → shorthand property to set up the grid
- `grid-template-rows: <track-list> | <auto-track-list>` → determines how big each item is in the row. You can list all the items, or you can set it to `repeat()`, have fractional values using `fr`. See [grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-rows)
- `grid-template-columns: <track-list> | <auto-track-list>`→ determines how big each item is in the column. You can list all the items, or you can set it to `repeat()`, have fractional values using `fr`. See [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-columns)
- `gap` → determines the space between items (this is the same as flexbox)

Just like in a flexbox, we don't need to put content inside of every cell, some cells can just use spacing. Think about alignment and consistency and play around with negative space! Consider how you would collage together elements on a webpage using flex and grids.

### Difference between flexbox and grids

Nice [explanation from CSS tricks](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/):
- grids are better at overlapping
- grids are sturdier
- flexbox allows elements to wrap by default
- flexbox can align individual items along an axis

As always with this class, there are multiple solutions to the same problem! Whatever works best for you and your workflow will work here. 

## In-class work time

### FAQ