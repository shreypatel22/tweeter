// const $form = $('form');
// const $tweetData = $('#tweet-text');

// $form.on('submit', (event) => {
//   // you need the parameter event in the callback so you can use preventDefault which stops the page from redirecting
//   event.preventDefault();

//   // const $tweetText = $tweetData.val();
//   // console.log($tweetText);

//   $.ajax({
//     type: "POST",
//     url: '/tweets',
//     // Use $form.serialize here instead of $tweetData since if you have more than one text area in the form you can get all with form
//     // with $tweetData you could only get the one you selected and that defeats the whole serization process
//     data: $form.serialize(),
//     success: () => {console.log($form.serialize())}    
//   });

// })