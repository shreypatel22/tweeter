$(document).ready(() => {
  $('textarea').on('input', function() {
    let inputLength = $(this).val().length;
    let counterValue = $(this).closest('form').find('output').text(140 - inputLength);
  
    if (Number(counterValue.text()) < 0) {
      counterValue.addClass('counter-red');
    } else {
      counterValue.removeClass('counter-red');
    }
  });
});