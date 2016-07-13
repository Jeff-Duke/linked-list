function modLinkEvent() {
 var titleInput = $('#title-input').val();
 var urlInput = $('#url-input').val();
  $('.link-list').prepend('<article class=\"mod-link"\><a href='+urlInput+'>' + titleInput + '</a><div class=\"button-container"\><input type=\"button"\ class=\"read-button"\ value=\"Read"\><input type=\"button"\ class=\"remove-button"\ value=\"Remove"\></div></article>');
 }

$('#submit-button').on('click', function(){
  modLinkEvent();
});

$('.link-list').on('click','.read-button', function(){
  $(this).closest('.mod-link').toggleClass('read');
});

$('.link-list').on('click', '.remove-button', function(){
  $(this).closest('article').remove();
});
