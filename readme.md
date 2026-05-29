# MDEP 285: Web Production 1 Syllabus

Sam Heckle, samantha.heckle@hunter.cuny.edu
Summer 2026  
MDEP 285 Web Production 1
Mon / Weds 11:45am - 2:15pm

| Important Links                                                         |                                                                                  |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Office Hours                                                            | Tuesday 10:30am - 1:00pm, book [here](https://calendly.com/samanthaheckle/30min) |
|                                                                         | Email for alternative times (samantha.heckle@hunter.cuny.edu)                    |
| [Brightspace](https://brightspace.cuny.edu/d2l/le/content/1267014/Home) | For assignment due dates and submissions                                         |
| [Zoom](https://us02web.zoom.us/my/sam.heckle)                           | For class time                                                                   |
| Prerequisites                                                           | MDEP 150                                                                         |

---

## Overview

This class focuses on the craft of building basic websites. Students will learn how to make public websites; discovering layout using HTML, design using CSS, and eventually JavaScript for interactivity. Assignments will go through the process of building a website from scratch, emphasizing unique and handcrafted sites by understanding best practices and context of the web today. This class is designed for students with little to no coding experience, but does require MDEP 150 (Visual Communication and Interactive Design).

---

### [Statement on Technology](https://community.itp.io/community_statement#technology)

> We pledge to center creative and ethical uses of technology in our research, teaching, and making. We accept the claim that technology is a reflection of society, its histories, and its politics. We reject the claim that technology is neutral and acknowledge that every technology has the potential to do as much harm as good. We acknowledge that when technologies cause harm, the harm disproportionately affects Black, Brown, Indigenous, People of Color (BIPOC), queer, trans, disabled, femme, low-income, survivors, and all other marginalized bodies and communities worldwide.
>
> With this understanding, it is our responsibility to center these groups when hosting, participating in, or developing events (e.g. workshops or meetings), materials (e.g. courses, syllabi, resources), technologies (software, hardware, tools, etc) and creative applications made within this classroom (e.g. works of art, products, installations, experiments, etc).

---

## Course Requirements

| Grading                      |     |
| ---------------------------- | --- |
| Attendance and Participation | 40% |
| Readings                     | 30% |
| Projects                     | 30% |

### Rubrics

Every assignment will have an associated rubric for grading. You can view this rubric in Brightspace by clicking on the assignment discussion post and "View Rubric".

Projects typically fall under the following grading criteria:

| Project Grading  |                                                                                                                                                                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documentation    | Completed a write up of the project process following our [documentation guidelines](https://samheckle.github.io/how-to/write-good-documentation). Includes a list of specific links that you used for help (StackOverflow, Youtube tutorial, link to code-generating chat logs) |
| Code Clarity     | You wrote the code in your own words and does not include strange syntax. Code is commented and formatted.                                                                                                                                                                       |
| Above and Beyond | Your project is creative in the scope of your ability in the class. You demonstrated effort in your documentation.                                                                                                                                                               |
| Feedback         | You participated in in-class feedback                                                                                                                                                                                                                                            |

### Responsibility

Students are responsible for all assignments, *even if they are absent*. Late discussion posts, failure to complete assignments, and lack of preparedness will jeopardize your successful completion of this course. Please regularly check your email for class announcements, GitHub for class materials and notes, and Brightspace for assignment due dates and submissions.

#### Attendance and Participation

Students are required to follow along with in-class demos and submit their work at the end of class for participation credit. These will count as your participation for the day. **If you do not have your camera on, or you are not present in class to follow along with the in-class demos, you will not receive full participation**.

**There are no excused and unexcused absences**. If you miss a class, you are welcome to book office hours to make up for your missed participation for the day. These office hours do not need to be the same week, but should be completed in a timely manner. You are not able to book office hours back-to-back to make up for two classes, but they will need to be on separate days. 

### Late Assignments

Any work is considered late if it is submitted after the due date posted on Brightspace. For every day the work is late, the student will receive a 10 % penalty. You are not allowed to resubmit late work for an updated grade.

### Extension Policy

Extensions are admitted on an as-needed basis, as long as _the student informs the instructor more that 24-hours before the assignment is due_. **_There are absolutely no extensions on the midterm or the final_**.

### Use of Generative Artificial Intelligence (AI) Tools:

It is highly ***discouraged*** to use AI to generate or "vibe code" your assignments. You may not rely on code-generating tools to create your entire assignment for you. 

With this in mind:

- You MAY use AI in the initial stages of research, idea generation, and drafting.
- You MAY use AI for language translation.
- You MAY use AI for code tutoring. I highly encourage you to include in your prompts "Do not give me the answer, but help me work through the problem like a tutor". I highly encourage questions like "I don't understand what `<head>` does, can you explain?".
- You may NOT copy and paste your entire code into a tool and tell it to solve the problem for you. 
- If you use AI at any stage in the creation of your project (including initial stages, idea generation, drafting, language translation, and final form), you must properly cite and disclose this use. This should include details on the specific tool and version used, as well as the nature of your usage (for example, in programming code, images, and/or text/writing). You will include the model, version, and link to your chat logs in your project documentation.
- If you fail to disclose the use of AI, you will receive a 0 on the assignment.

---

## Required Materials

1. A computer (chromebooks and tablets will not work)
	1. *Highly* recommended: second monitor to follow along with class demos. Or, join the zoom on your tablet and follow the demo on your computer.
2. Install a text editor
	- I recommend [SublimeText](https://www.sublimetext.com/download)
	- [VSCodium](https://vscodium.com/#install) is also a good alternative, but iCloud users beware!
	- If you are interested in the command line, you can try [Neovim](https://neovim.io/)+[LazyVim](https://www.lazyvim.org/)
	- I would encourage disabling any autocomplete tools (the text editor autocomplete, linting, or AI tools) as they may be disruptive while following along with class demos.
3. Create a [Github account](https://github.com/)
	- Suggested sign up for [Github Student Developer Pack](https://education.github.com/pack)
	- Set up an SSH key on your computer: [Create an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
	- Add the SSH key to your GitHub account: [Add a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
4. Install Command Line Tools
	- Windows: Install [GitBash](https://git-scm.com/downloads)
	- Mac: Terminal is pre-installed, but you need to enable [Xcode Command Line Tools](https://developer.apple.com/xcode/resources/) by opening the Terminal app and copying the command `xcode-select --install`
	- Linux: See [git docs](https://git-scm.com/install/linux) based on your distribution.

---

## Assignments

| Schedule |      |                                                                        |
| -------- | ---- | ---------------------------------------------------------------------- |
| Week 1   | 6/1  | Introduction, Git and GitHub                                           |
|          | 6/3  | Crafting: Introduction to HTML                                         |
| Week 2   | 6/8  | Crafting: Introduction to CSS                                          |
|          | 6/10 | Crafting: Reading Discussion #1, The Box Model                         |
| Week 3   | 6/15 | Crafting: Positioning, Writing Documentation                           |
|          | 6/17 | Project #1 Critique                                                    |
| Week 4   | 6/22 | Structure: Researching Design, Responsiveness and Media Queries        |
|          | 6/24 | Structure: Reading Discussion #2, Introduction to Flexbox              |
| Week 5   | 6/29 | Structure: Introduction to Grids                                       |
|          | 7/1  | Project #2 Critique                                                    |
| Week 6   | 7/6  | Interaction: Introduction to the DOM                                   |
|          | 7/8  | Interaction: Reading Discussion #3                                     |
| Week 7   | 7/13 | Interaction: Incorporating p5.js                                       |
|          | 7/15 | Project #3 Proposal Critique                                           |
| Week 8   | 7/20 | No class, book final 1:1                                               |
|          | 7/22 | Project #3 Critique<br>**last day for resubmissions and extra credit** |
### Projects

#### Project 1

Prompt:
Create a hypertext narrative! This can be a fictionalized story, a passion of yours, or an experience you have had. Think about narrative structures that hypertext allows (branching, looping, repetition). You are allowed to use words and images. 

Requirements:
* More than one HTML page that includes at least one of the following tags:
	* heading `<h1>`
	* paragraph `<p>`
	* image `<img>`
	* link `<a>`
	* and one html element we did not cover in class (but can be found via [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements))
* One `style.css` file that holds all your CSS. *There should be no embedded CSS using `<style>`*
* **No JavaScript**

Deliverables:
- Due 6/17
	- a link to your code (eg. `https://github.com/samheckle/web-production-1-starter/tree/main/projects/project1`)
	- a link to your live website (eg. `https://samheckle.github.io/web-production-1/project1`)
	- a link to your documentation (eg. `https://github.com/samheckle/web-production-1-starter/blob/main/project1/readme.md`)

Inspiration:
- Larissa Pham, [poem club](https://lrsphm.github.io/poem-club/)
- Angela Chang, Lai-Tze Fan, Biyi Wen, Ka Lee Wong, [Dim Sum](https://anjchang.com/dimsum/)
- maya.land, [pens](https://maya.land/pens/)
- https://niceinter.net/
#### Project 2

Create a responsive web-poster about your neighborhood or a place that you grew up. 

Requirements:
- Single HTML page
- Uses `flex` or `grid` CSS layouts
- Uses Media Queries for styling on multiple devices

Deliverables:
- Due 7/1
	- a link to your code (eg. `https://github.com/samheckle/web-production-1-starter/tree/main/projects/project2`)
	- a link to your live website (eg. `https://samheckle.github.io/web-production-1/project2`)
	- a link to your documentation (eg. `https://github.com/samheckle/web-production-1-starter/blob/main/project2/readme.md`)

Inspiration:
- [Music Posters](https://www.are.na/rachel-steele/music-gig-posters-efsmeujirc4)
- [Swiss Poster Design](https://duckduckgo.com/?q=swiss+poster+design&t=ffab&iax=images&ia=images&atb=v486-1)
- [Retro SciFi Book Covers](https://www.are.na/joe-hart-rdnukrmf0kc/retro-scifi-covers)
#### Project 3

Deliverables:
- Due 7/15
	- A link to your proposal (eg. `https://github.com/samheckle/web-production-1-starter/blob/main/project3/proposal.md`)
- Due 7/22
	- a link to your code (eg. `https://github.com/samheckle/web-production-1-starter/tree/main/projects/project3`)
	- a link to your live website (eg. `https://samheckle.github.io/web-production-1/project3`)
	- a link to your documentation (eg. `https://github.com/samheckle/web-production-1-starter/blob/main/project3/readme.md`)

### Readings

#### Reading #1: Craft
- JR Carpenter, [A Handmade Web](https://handmade-web.net/assets/carpenter_handmade-web.pdf)
- Jeremy Keith, [Resilient Web Design](https://resilientwebdesign.com/) Introduction - Chapter 3

#### Reading #2: Structure

- Frank Chimero, [The Web's Grain](https://frankchimero.com/blog/2015/the-webs-grain/)
- American Artist, [Black Gooey Universe](https://static1.squarespace.com/static/59238d36d2b8575d127794a4/t/5a60bdecf9619a7f881b02a0/1516289526013/UNBAG_2_AmericanArtist.pdf)

#### Reading #3: Interaction

- Mindy Seu, [The Poetry of Tools](https://www.are.na/editorial/the-poetry-of-tools)
- Parimal Satyal, [Rediscovering the Small Web](https://neustadt.fr/essays/the-small-web/)

---

## University Policies

### Academic Integrity

Academic integrity is a guiding principle of the Hunter College learning community because all students should have the opportunity to learn and perform on a level playing field. Academic dishonesty includes, but is not limited to, cheating, plagiarism, obtaining an unfair advantage, and falsifying records or documents, whether intentional or not.

Hunter College upholds the right to promote academic integrity on its campus as an educational institution of the City University of New York. The College has the responsibility to review all charges of academic dishonesty and implement sanctions, including, but not limited to, failing the course, official transcript notation, suspension or expulsion from the College when it has been determined that academic dishonesty did occur. Please click [here](http://www.hunter.cuny.edu/studentaffairs/repository/files/Sanctions%20Defined.docx) to see a full list of disciplinary sanctions.

### Accessibility

In compliance with the American Disability Act of 1990 (ADA) and with Section 504 of the Rehabilitation Act of 1973, Hunter College is committed to ensuring educational parity and accommodations for all students with documented disabilities and/or medical conditions. It is recommended that all students with documented disabilities (Emotional, Medical, Physical, and/or Learning) consult the Office of Accessibility located in Room E1124 to secure necessary academic accommodations. For further information and assistance, please call (212) 772-4857/TTY (212) 650-3230. If you have registered with the Office of Accessibility, please let me know at the start of the term.

### Hunter College Policy on Sexual Misconduct

In compliance with the CUNY Policy on Sexual Misconduct, Hunter College reaffirms the prohibition of any sexual misconduct, which includes sexual violence, sexual harassment, and gender-based harassment, retaliation against students, employees, or visitors, as well as certain intimate relationships. Students who have experienced any form of sexual violence on or off campus (including CUNY-sponsored trips and events) are entitled to the rights outlined in the Bill of Rights for Hunter College. Sexual Violence: Students are strongly encouraged to immediately report the incident by calling 911, contacting NYPD Special Victims Division Hotline (646-610-7272) or their local police precinct or contacting the College's Public Safety Office (212-772-4444). All Other Forms of Sexual Misconduct: Students are also encouraged to contact the College's Title IX Campus Coordinator, Dean John Rose (jtrose@hunter.cuny.edu or 212-650-3262) or Colleen Barry (colleen.barry@hunter.cuny.edu or 212-772-4534) and seek complimentary services through the Counseling and Wellness Services Office, Hunter East 1123. CUNY Policy on Sexual Misconduct. Link: http://www.hunter.cuny.edu/diversityandcompliance/repository/files/cuny-policy-on-sexual-misconduct.pdf

### Film and Media listserv

The department maintains a listserv, fm-l, that posts opportunities, including internships and events, for students. Subscribe [here](https://fm.hunter.cuny.edu/resources/links/join-the-film-media-listserv).

### Rockowitz Writing Center:

The Rockowitz Writing Center offers students help with their writing at every stage of the writing process. You can make an appointment for a live video session at: hunter.mywconline.com.

### Counseling and Wellness Services:

Counseling and Wellness Services (CWS) is another campus resource and service center for all matriculated students that is operating remotely for counseling services at no cost to all Hunter students. You can make an appointment at: http://www.hunter.cuny.edu/studentservices/counseling-and-wellness.

### Immigrant Student Success Center

The Immigrant Student Success Center advocates for our undocumented and immigrant students at Hunter College. The Center aims to foster a safe, empowering, and community of belonging to all students, regardless of status, through informative resources, advising, programming, scholarships, and advocacy.
https://www.hunter.cuny.edu/students/student-affairs/immigrant-student-success-center/

### Other Emergency Resources for Students

There are a variety of supports available, including the Purple Apron Food Pantry.
https://www.hunter.cuny.edu/students/health-wellness/emergency-support-resources/

---

### Acknowledgements

- [Cezar Mocan](https://cezar.io/) - a delight and inspiration
- [Blair Simmons](https://www.blairsimmons.com/) - for her mediation and community praxis
- [Allison Parrish](https://www.decontextualize.com/) - a wonderful mentor and educator galvanizer
