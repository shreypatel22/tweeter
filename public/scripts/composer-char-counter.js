$(document).ready( () => {
  $('textarea').on('input', function() {
    // This selects the input text and then finds its length
    let inputLength = $(this).val().length

    // This selects the parent of the textarea (form) then finds the output tag with find()
      // ^that selects the node, to get the text you do .text()      
    let counterValue = $(this).parent().find('output').text(140 - inputLength);
    
    // if (Number(counterValue.text()) < 0) {
    //   console.log(counterValue.text())
    //   counterValue.css('color', 'red')
    // } else {
    //   counterValue.css('color', '')
    // }

    if (Number(counterValue.text()) < 0) {
      console.log(counterValue.text())
      counterValue.addClass('counter-red')
    } else {
      counterValue.removeClass('counter-red')
    }
  })
});