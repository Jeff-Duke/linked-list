
//function for creating the bookmark article and populating with submitted information
function modLinkEvent() {
var urlInput= ($('#url-input').val());
var titleInput= $('#title-input').val();
console.log(urlInput);
console.log(titleInput);
}
//creates a new article.
//add class mod-link to article
//href with paragraph text.  href=urlInput.value paragraph text = titleInput.value
// takes the title-input and displays it as a string,
// takes the url-input and displays it as a link.
// create read button
// create remove buttons.





//event listener on click of submit button that calls bookmarkEvent function
$('.submit-button').on('click', modLinkEvent());
