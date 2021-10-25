# Formula 2021 Quiz

## About
---

<p>
Formula One, also called F1 in short is the fastest single-seater motorsport racing in the world. The Formula 2021 Quiz website is an interactive quiz about formula one, where the user can test their knowledge on the topic of F1. The site targets both people with knowledge of F1 that want to prove their skills and people without any knowledge that just want to learn more about the amazing sport of Formula One.
</p>

## UX (User Experience) 
---

### Ideal client

<p>
 Anyone who is interested in Formula One who want to test their knowledge or just for fun by taking the quiz.
</p>

### User stories

* Answer wrong/right and get feedback
* Be able to see questions.
* Score counter.
* Play again option.

### Site Owner Goals

* Spread F1 knowledge.
* Inform people about the sport.
* Make a game for fans to test their knowledge.
* Make customers return for future games that the website will release.

### Design

* The design of the  web application meets accessibility guidelines, presents a structured layout and follows the principles of UX design and navigation model 
* Contrast between background and foreground colors to help the visually impaired
* The graphics are consistent in style and color throughout the site.


### Choice of color

* The color scheme is based on what color you associate F1 with to make it easier for the user to recognize the site as an F1-inspired game quiz.

### Responsive Design

* The site is responsive to all devices (desktop, mobile, tablet).

### Mockups

[Ami.responsivedesign](http://ami.responsivedesign.is/) was used to creat the mockups below.

* [Mockups](media/allD.png)

### Wireframes

[Balsamiq](https://balsamiq.com/) was used to creat the wireframes below.

* [Game page - Mobile](media/mobileB.png)
* [Game page - Tablet](media/tabletB.png)
* [Game page - Desktop](media/desktopB.png)

### Screenshots (Of Finnished Site)

* [Game page](Screenshot.png)

## Features
---

### Game Page

#### Title

* Shows the user the topic of the quiz they are about to play.

#### Question counter and Question

* The question counter shows what number of question the user are on.
* It also shows how many questions there are in total.

#### Choices

* The four choices are structured underneath each other and they each have a index name (A, B, C or D)  for the user to pick.
* The answer choice is displayed under the question index.

#### Correct/Incorrect answer 

* To let the user know if they answer correctly the correct answer counter will increase.
* To let the user know if they answer incorrectly the incorrect answer counter will increase.

#### End button 

* The end button loops through all questions (until number 7) and an alert shows the user what their score is.
* The button is for the user who wants to end and get to the last question earlier.

#### Skip one

* If a user wants to skip one question they can do so by pressing the skip one button.

#### Alert(result)

<p>
When the user has finished the quiz an alert made with sweet alert shows on the screen.
</p>

* The alert shows the score out of available questions and then two choices of buttons.
* OK, restarts the game and set the score to 0.
* Cancel, close the alert window, and shows the last question again.

### Future features

* The user can be able to create their own username.
    * This is to make the site more interactive.
* Bigger question Bank.
* Expand the site to have more quizzes.
    * Different types of motorsport quizzes and give variety to the site.


## Testing
---

### Screen Size Testing

* Testing has ben done to mobile, tablet and desktop. 
* There is no issues with the different screen sizes.

### Browser Testing

* The site has been tested on both chrome and safari with no issues.

### Validator Testing

#### HTML

* The HTML code passes through the official [W3C validator](https://validator.w3.org/) with no issues.

### CSS

*  CSS code that passes through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/) with no issues

### Javascript

* The JavaScript code passes through [Jshint](https://jshint.com/) with no significant issues.

### Fixed Bugs

* The user was able to get an infinity amount of correct answers by continuously pressing the right answer without the next question being shown.
    * By calling the getNextQuestion function at the end of the checkAnswer function this was prevented.

## Deployment
---

1. Create an account and log in on GitHub.
2. Create a repository.
3. Making commit messages and pushing your code to GitHub throughout when you code.
4. When you are done, go into settings in GitHub (in your repository).
5. Scroll down to GitHub pages.
6. In the source section select branch (this project selected main) and save.
7. Refresh the page and when it is successfully deployed, The message Your site is published at... will show beside the link to your site.

## Credits
---

### Content

* [Font Awesome](https://fontawesome.com/) icons were used in the Title of the quiz.
* [F1 official](https://www.formula1.com/) website for inspiration.

### Code

* Codeinstitute Full Stack Developer Course.

### Inspiration 

* The sport for following it for a long time.
* Codeinstitute Full Stack Developer Course gave me inspiration from learning the essentials.

### Acknowledgments

* Friends, for testing the site on different devices and giving feedback.
* My Mentor for guiding me throughout the process and showing me sweetalert to make my site even better.
