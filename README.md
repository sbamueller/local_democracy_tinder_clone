# local_democracy_tinder_clone

is an opens source information tool for elections. 
Which party has voted which way in the last elctoral cycle? Citizens can swipe to the right or left, and thus see which party has voted in parliament or city council.

# App logic : 
- start with a given screen, given ID numebr
	- set the relevant content according to the screen id 
	- set the utton interaction according to the screen type 
- when one clicks a choice on the frist ( choice ) screen
	- the relevant result screen is selected as the enxt screen
		- the relevant content is set up, 
			!!!! ACCORDING TO THE DATA IN THE CHOICE SCREEN DATA 
		- buttons in this view : 
			- return to choice screen
			- go to next selection screen 
				- this could be a button that's continuously there 

We will adapt the app for Freiburg. 

Currently you can see a first implementation in Swedish here: http://sourisr.kapsi.fi/boras/

# Some config details

If you want to modify things, eg adapt things to German, then you'll find some texts in the following files : 
- index.html
- js/demo_app.js
      -- in this file I've added the #TEXT hashtag to help you find where there are bits of text that appear on screen 
- js/app_screen_data.js
      -- this is where the questions and answers are located. 
       It's a JSON array with question+answer data. 
       The places which might well be relevant to you in each json entry, are : 
          - question : that's the main text, that describes the question/issue the parties voted on.
          - images : ( well, it's only one image, but there was space for several earlier ) this is the background image url. Do remember to have the image url in single quotes.
          - which_parties_voted_YES_for_this__as_list and which_parties_voted_NO_for_this__as_list : these are the texts for when one swipes right/left, or presses the X or <3 buttons at the bottom of the screen. 
           - Don't worry about the images related to voting YES/NO, these are leftovers from things that were supposed to be implemented but didn't. 

( The other files in the js library, the different jquery files, are libraries for screen interaction, that someone else has written, that I've not modified ).

## __ Modifying the texts on the buttons ___
The buttons are actually svg files (which are essentially XML files). So one could edit them in Adobe Illustrator or in a text editor. It's quite easy to figure out which the text strings are. 
If the things don't fit well with the length of the equivalent German text, then one can either reposition them by changing the string coordinates, or using Illustrator to do that easier… 

## __ A slightly different ( not so tall ) css layout alternative ___
Maybe one addition thing that might be useful to know, is that I've included a css file, from a different version of this, which is a bit less vertically tall, at the expense of a partly transparent text background. If you want to try this, then rename style.css to something else, and rename the style_BORAS_5.css to style.css. Then reload the browser enough times that the browser uses the other css file. ( Sometimes browsers cache css files for a long time and some old css file is shown for a long time ). 

