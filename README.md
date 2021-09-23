# *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Chukwudimma Ikoro**

Time spent: **4** hours spent in total

Link to project: https://ikoro-memory-game.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn
* [x] Player only loses after 3 mistakes (instead of on the first mistake)

The following **additional** features are implemented:

- [x] Dialogue box pops up on mistake telling you how many attempts the user has left
- [x] Tab text changed from "Hello!" to link name 

KNOWN BUG: This project was coded in Mozilla Firefox and is fully functional there, as well as on Microsoft Edge. However, when used in Google Chrome, there
is a chance that the audio for the buttons cuts out.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![demo](https://cdn.glitch.com/5584a93b-9743-44cd-9d8b-09894b846bed%2FMemory%20Walkthrough.gif?v=1617679424839)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

  - I did not use any outside resources to help with this submission.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  - Before creating this project submission, I had little to no idea what the HTML and CSS languages were used for, and minimal usage with the 
    Javascript language. I had only practiced JavaScript for a single semester, focusing on more back-end languages such as Java, C, and 
    C++ in my other semesters. The main aspect I knew about JavaScript is that it is a function oriented language, as opposed to the 
    more object-oriented languages I am used to, which brings a different set of rules and capabilities on what is able to be done
    with the language. Due to these factors, I did not know much about the front-end programming pipeline, nor did 
    I have much experience with making applications with it like how I've done with Java. When given the choice for projects and
    interviews, I would always stick with Java, as it was what I knew best. However, completing this pre-work has allowed me to understand
    not only what each language is used for, but how they work together. I overcame the initial confusion by following the instructions,
    relating content to stuff that was similar to what I've done before, and breaking the work down into parts. I now understand that 
    HTML code provides the foundation for CSS code to stylize and JavaScript code to execute, and allows for flexible web development 
    because of it.
    

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  - After completing this assignment, I believe that I have a solid foundation of how the web development pipleine is handled, as well as
  how each of the languages of HTML, CSS, and JavaScript intertwine with one another. However, I would like to know if there are other languages that could
  also be applied in order to either replace the given languages here, or supplement them with more features on top of the foundation, style, 
  and coding. I would also like to know how using multiple files of a given language affects how the work is handled. Even if the project
  is small, is it worth splitting up the project files into smaller files for organization's sake?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

  - If I had a few more hours to work on the project, I would definitely spend more time to make the app look nicer than it does at this 
    moment. Maybe I could mess with the fonts more so the overall design of the title and description pops out more and is less stock,
    or design the buttons in a way that makes it look like it is a 3-Dimensional button being physically pushed inwards when clicked, 
    instead of just changing its color. I would also like to potentially add a feature that allows one to change the difficulty of the 
    game before playing. I would add three options- easy, medium and hard- and depending on what is chosen, the speed and length of the
    game would change. To do this, I would add buttons to the start with each difficulty, and refactor the given functions that set button
    patterns and speeds to change the setup of the game based on what difficulty is chosen.


## License

    Copyright [Chukwudimma Ikoro]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
