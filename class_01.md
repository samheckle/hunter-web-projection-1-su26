# Week 01: 6/1/26

## Agenda

1. Syllabus
2. Expectations
3. Introductions
4. First Time Setup
5. Break
6. Tutorial: Introduction to HTML

---

## Syllabus

- Read through the [syllabus](/readme.md)
- If I am ever going too fast through _any_ material, please interrupt me!
- Questions? Comments? Needs? Etc? Send an email. I value open communication more than anything else. If you miss class, expect to be late, or are struggling with an assignment, please let me know.

### Expectations and Class Manifesto

1. Be curious!
   - what questions are you asking?
   - what do you not know?
   - how can you find those answers?
2. Practice!
   - learning to code takes time!
   - you _will_ have to do a lot of work outside of class to understand what is going on in the context of your own projects
3. Low Stress **NOT** Low Effort
   - did you learn something new? write it in your documentation!
   - did you struggle? write it in your documentation!
   - did you accomplish what you wanted? write it in your documentation!
   - if you made a solid attempt and wrote documentation (via a readme) you get full credit!

## Introductions

### me

- sam heckle (they/she)
- software engineer to creative technologist pipeline
- things you can ask me about: coding, software engineering, physical computing, sewing, portfolio review, resume review, grad school, games, cats, keyboards, baking, nyc/seattle/san francisco, food
- please ask me about these things in [office hours](https://calendly.com/samanthaheckle/30min)

### you

- name
- pronouns
- major / year
- type of OS (mac/windows/linux)
- default browser
- default search engine

## First Time Setup

Go through the [required course tools](./readme.md#required-materials):

- Install a text editor
- Install Command Line Tools
- Create a [Github account](https://github.com/)
- Set up SSH Keys:
	- Follow this [Github Tutorial on how to setup an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). Make sure to change the OS to your computer via the tabs on the top. 
	- [Add your new key to your account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### Set up a repository on your computer

I have already created a repository (or a folder) that has the structure that is expected for this class. You will:
- "Fork" (copy) this repository to your own Github account
- Setup Github Pages to automatically publish your websites for the semester
- Download this repository to your computer

### Forking the Repository

To add this to your Github account:

1. At the top of the page, click the "Fork" button

<img src="https://github.com/samheckle/images/blob/main/wp1/fork.png?raw=true" style="width:600px;">

2. Rename your project to `web-production-1` or something similar and press Create Fork.

<img src="https://github.com/samheckle/images/blob/main/wp1/rename.png?raw=true" style="width:600px;">

### Creating Github Page

1. Navigate to the repository in your account. If you did this right after forking, you should already be here. Otherwise, click Profile → Repositories → `web-production-1`
2. In the navigation bar of the repository, click "Settings"

<img src="https://github.com/samheckle/images/blob/main/wp1/settings.png?raw=true" style="width:600px;">

3. Then click "Pages"

<img src="https://github.com/samheckle/images/blob/main/wp1/pages.png?raw=true" style="width:600px;">

4. Then click the dropdown menu under "Branch" and select `main`

<img src="https://github.com/samheckle/images/blob/main/wp1/branch.png?raw=true" style="width:600px;">

5. After a few moments, your repository will be live. Your url will look something like `https://{your-username}/web-production-1/`. For example, my url would be: `https://samheckle.github.io/web-production-1/`

## Download the repository

To put this repository on your computer, we need to figure out where the folder needs to live. This is your own personal preference, so if you put your files on your Desktop that is fine. 

This location where the files will be stored is called the `path`, or the location where a file exists on your computer. My usual path for where my files live is in a folder called `dev` that lives at the same level of my `Desktop` folder. 

Open up your Finder or Windows explorer and navigate to *where* you want to put the file.

Then retrieve the path with your OS

<details>
<summary> MacOS </summary>

1. Enable viewing the path in the bottom of your finder

<img src="https://github.com/samheckle/images/blob/main/wp1/path.png?raw=true" style="width:600px;">


2. Right click the folder and click "New Terminal"

<img src="https://github.com/samheckle/images/blob/main/wp1/new_terminal.png?raw=true" style="width:600px;">

</details>


<details>
<summary> PC </summary>

1. Click the folder in the top bar to reveal the path

<img src="https://p.kagi.com/proxy/231770d1556290902-show-full-path-address-bar-file-explorer-windows-10-a-full_path_in_file_explorer_address_bar.jpg?c=WIoXsvPvNy9U9JlGUsnlrGfjYQ1XEhr1_YP-roXlFT64M24U0eUvnoW6LvIgyID1xK3EcqFxXmQADQ6_w89RER8mN2ujtwvi0SI_55qpmSyw0Jouw_bYslr8WP188WJJsK_u-zTc9uCkpOSUpfPOPjh8dYhAyJ56EXveflpRxkY2qqTIhVVAFveY4-UG8ry4zwA0GIZ3-vk3_-bUmdMPspPXuEhKArkM9gBu8zuB-AI%3D" style="width:600px;">


2. Open GitBash and type `cd ` + right click and paste the copied path. GitBash does not let you copy and paste (it is SHIFT+INS instead). So the command should look like `cd C:\Users\samheckle\Desktop`

</details>

Once everyone has their Terminal / GitBash open, please type `pwd` to ensure you are in the right location.

Now, we are going to "clone" (download) the repository.

In your Github web production 1 repository, get the SSH url. 

<img src="https://github.com/samheckle/images/blob/main/wp1/clone.png?raw=true" style="width:600px;">

After you copy the URL, go back to your Terminal / GitBash and type

```sh
git clone url-you-copied
```

Ex. mine looks like `git clone git@github.com:samheckle/web-production-1.git`

### Open the repo in your text editor

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

Let's make class_01:

```
└── web-production-1/
    ├── class-demos/
    │   └── class_01/
    ├── project1/
    ├── project2/
    └── project3/
```

## Introduction to HTML

Now that we are all set up, we will start making our first HTML files. 

*H*yper-*T*ext *M*arkup *L*angauage (HTML) isn't a programming language, but a way to taxonimize (organize) words on a page.

To make an HTML page, we can create a new file in VS Code by clicking the +Document button, or right clicking in the file explorer and pressing New File. Let's start by making an `index.html` file inside our `class_01/`.
#### Comments
The syntax of a comment in HTML is `<!-- -->`. We write comments to explain things that are happening in the code. It is good practice so that we can understand what is happening if we look at the code in the future. 
```html
<!-- this is a comment in HTML -->
```

#### HTML is Structure

To make an HTML page, we can create a new file in our text editor by clicking the +Document button, or right clicking in the file explorer and pressing New File.

We want to name the new file `whatever_i_want_but_no_spaces.html`. The `.html` is important for the naming (it also cannot have spaces or weird characters, I stick to `_` or `-`). 

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


Also important to note here, we can see the `path` in our address bar. Mine shows `file:///Users/samheckle/dev/web-foundations/week1/index.html`. 

The path is really important because we need to be able to know exactly where files are on our computer in order to reference them within our own code, specifically if we wanted to link two pages or add images together. Before we do that, we need to look at other html content elements. 

The content of a webpage exists inside the `<body>` element. The `<body>` can hold plaintext, but usually it will contain some type of other elements, such as:

* `<p>` - paragraphs
* `<em>` - emphasis, or italics
* `<strong>` - bold
* `<img>` - images, uses `src` attribute which can contain a local file path or url to an image, no closing tag
* `<a>` - links, uses `href` attribute which can use local path or url to an external site.
##### Paths

As stated earlier, a path is the location on which our files exist on our computer. We can access the files by specifying the path in different attributes (like `src` or `href`). We need to know where we are in the file structure and where we need to go in order to determine the path from one file to another. 

For example, if we want to include an image in our `index.html`, we need to know that our path to `index.html` is 
```
file:///Users/samheckle/dev/web-foundations/week1/index.html
```
Our images exist in a folder called `images/`, and if we drag our image to the browser, we can also see it's path
```
file:///Users/samheckle/dev/web-foundations/week1/images/guywithguitar.jpg
```
We need to note the difference between these two paths -- we know that everything up to the end of week1 is the same, so we can ignore that part of the path. Since we need to get into the images folder, we need to specify the folder `images/` + our file name `guywithguitar.jpg`. So the path from `index.html` to our image is `images/guywithguitar.jpg`. 

So, to determine paths we need to determine the difference between to file locations. If we need to go up a folder, we can use `../`. Say we put our images not in `week1/` but in `web-foundations/images/`, in order to retrieve images we need to use `../images/guywithguitar.jpg`. 