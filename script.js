
//function for creating the bookmark article and populating with submitted information

  function modLinkEvent() {
    var titleInput= $('#title-input').val();
    var urlInput= $('#url-input').val();
    $('.link-list').append('<article class=\"mod-link"\></article><p class=\"title-value"\></p><p class=\"url-value"\></p>');
    $('.url-value').append('<a href=></a>');
    $('a').prop("href", urlInput);
    $('a').text(titleInput);
   }




//creates a new article.
//add class mod-link to article
//href with paragraph text.  href=urlInput.value paragraph text = titleInput.value
// takes the title-input and displays it as a string,
// takes the url-input and displays it as a link.
// create read button
// create remove buttons.

// append article to parent class



// event listener on click of submit button that calls bookmarkEvent function
// $(document).ready(function(){
  $('#submit-button').on('click', function(){
    modLinkEvent();
  });
// });
