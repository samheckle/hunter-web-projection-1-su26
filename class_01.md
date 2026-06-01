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

