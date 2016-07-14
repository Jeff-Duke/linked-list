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

function disableClearReadButton() {
  $('#clear-all-read').prop('disabled', true);
}

function enableClearReadButton() {
  $('#clear-all-read').prop('disabled',false);
}

function countRead() {
  var totalRead = ($('.read').length);
  $('.read-counter').text('Total read '+ totalRead);
}

function removeRead() {
  $('.read').remove().closest('article');
}

function validateUrl(urlInput) {
   return (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(urlInput));
}

function httpPrepend(urlInput) {
  if(/^(http|https|ftp):\/\//i.test(urlInput)) {
    return urlInput;
  }
  return 'http://' + urlInput;
}

function modLinkEvent() {
  clearErrors();
  var titleInput = $('#title-input').val();
  var urlInput = $('#url-input').val();
  urlInput = httpPrepend(urlInput);
  console.log(urlInput)

  if ((titleInput == '') && (urlInput == '')) {
    titleError();
    urlError();
    return;
  }

  if (titleInput == '') {
    titleError();
    return;
  }

  if (!validateUrl(urlInput)) {
    urlError();
    return;
  }


  $('.link-list').prepend('<article class=\"mod-link"\>' +
                            '<a href='+urlInput+'>' + titleInput + '</a>' +
                            '<div class=\"button-container"\>' +
                              '<input type=\"button"\ class=\"read-button"\ value=\"Read"\>' +
                              '<input type=\"button"\ class=\"remove-button"\ value=\"Remove"\>' +
                            '</div>' +
                          '</article>');

  clearInputs();
  countRead();
 }

$('#submit-button').on('click', function() {
  modLinkEvent();
});

$('.link-list').on('click','.read-button', function() {
  $(this).closest('.mod-link').toggleClass('read');
  countRead();
  enableClearReadButton();
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
  var totalRead = ($('.read').length);
  if (totalRead == 0) {
    disableClearReadButton();
  }
})

$('.link-list').bind('DOMSubtreeModified', function() {
  countRead();
});

$('#clear-all-read').on('click', function() {
  removeRead();
})
// });
