# linked-list
Linked List project for Mod-1
Madison Kerndt and Jeff Duke

Intro
----
This is a simple weblink storage list site.  You enter a title and a URL for your link, click the submit button, or press enter, and a bookmark card is created below.  The bookmark can be marked as read, removed from the list, or all read bookmarks can be removed en masse. The tool authenticates the title and URL inputs to ensure the user input is functional. The populated cards can be referenced to remember your favorite links. A counter functionality tracks the total number of bookmarks along with those marked as read.

jquery Logic
----

On page load the Mod Links loads an interface that allows users to input a title and url of a website they wish to save. Upon typing in either input the submit button is enabled. Once the input fields are populated, and the submit button is clicked, a bookmark is generated with the read and remove buttons, the counters appear and the total bookmarks counter increments up.  

The logic begins when the user enters text into the inputs fields. Triggered by the click on the Submit button, the input is validated. Both a title and valid URL must exist for any further logic to occur; if this is not the case a custom error message will appear. If all inputs are valid the article list is prepended. This new article is visible as a new bookmark card. Each bookmark card contains a clickable title along with a read and remove button. The read button will add a class to the article element, if clicked again the class will toggle and therefore be removed. The remove button will remove the entire article. If 1 or more articles are marked as read, the 'Clear all Read' button will be enabled and if clicked, will clear all bookmark cards with the read class. The number counter keeps track of the number of elements with the 'mod-link' class and the read class to notify the user on the current state of their bookmark library. A user can continue to save bookmarks and keep track of saved bookmarks in this manner until the browser is refreshed.
