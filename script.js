// $(document).ready(function(){
// var urlInput = $('#url-input');
// var titleInput = $('#title-input');
// //

function titleError() {
  $('.title-error').text('Please enter a title');

}

function urlError() {
  $('.url-error').text('Please enter a valid url');

}

function clearErrors() {
  $('.title-error').text('');
  $('.url-error').text('');
}

function clearInputs() {
  $('#title-input').val('');
  $('#url-input').val('');
}

function disableSubmitButton() {
  $('#submit-button').prop('disabled',true);
}

function enableSubmitButton() {
  $('#submit-button').prop('disabled',false);
}

function countRead() {
  var totalRead = ($('.read').length);
  $('.read-counter').text('Total read '+ totalRead);
}

function modLinkEvent() {
  clearErrors();
  var titleInput = $('#title-input').val();
  var urlInput = $('#url-input').val();
    if ((titleInput == '') && (urlInput == '')) {
      titleError();
      urlError();
    return;
    }

    if (titleInput == '') {
      titleError();
      return;
    }

    if (urlInput == '') {
      urlError();
      return;
    }

  $('.link-list').prepend('<article class=\"mod-link"\><a href='+urlInput+'>' + titleInput + '</a><div class=\"button-container"\><input type=\"button"\ class=\"read-button"\ value=\"Read"\><input type=\"button"\ class=\"remove-button"\ value=\"Remove"\></div></article>');

  clearInputs();
  countRead();
 }

$('#submit-button').on('click', function() {
  modLinkEvent();
});

$('.link-list').on('click','.read-button', function() {
  $(this).closest('.mod-link').toggleClass('read');
  countRead();
});

$('.link-list').on('click', '.remove-button', function() {
  $(this).closest('article').remove();
});

$('header').keydown(function() {
  enableSubmitButton();
});

$('header').keyup(function() {
  var titleInput = $('#title-input').val();
  var urlInput = $('#url-input').val();
  if ((titleInput == '') && (urlInput == '')){
    disableSubmitButton();
  }
});

$('.link-list').bind('DOMSubtreeModified', function() {
  var totalLinks = ($('.mod-link').length);
  $('.total-links-counter').text('Total Bookmarks ' + totalLinks);
});

$('.link-list').bind('DOMSubtreeModified', function() {
  countRead();
});

// });
