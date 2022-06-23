/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const loadTweets = () => {
  $.ajax('/tweets', {method: 'GET'})
    .then(tweets => {
      renderTweets(tweets);
    })
}

const convertToSafe = string => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(string));
  return div.innerHTML;
}

// Hide tweet error initially
const $tweetError = $('.error')
$tweetError.hide();
// Load initial tweets
loadTweets();



const renderTweets = tweets => {
  // Empty intial tweets to avoid duplication since it will be loaded from the for loop
  $('#tweets-container').empty();
  for (const tweet in tweets) {
    // console.log(createTweetElement(tweets[tweet]))
    let $tweet = createTweetElement(tweets[tweet]);
    $('#tweets-container').prepend($tweet);
  }
  return
}


const createTweetElement = (tweetData) => {
  let $tweet = `  
  <article>
    <header>
      <div>
      <img src=${tweetData.user.avatars} alt="profile icon">
        <p class="person-name">${tweetData.user.name}</p>
      </div>
      <div>${tweetData.user.handle}</div>
    </header>
    <p>${convertToSafe(tweetData.content.text)}</p>
    <footer class="tweet-footer">
      <div >${timeago.format(tweetData.created_at)}</div>
      <div class="tweet-footer-right">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>
  `
  return $tweet
}

const $form = $('form');
$form.on('submit', (event) => {
  // you need the parameter event in the callback so you can use preventDefault which stops the page from redirecting
  event.preventDefault();
  
  const $tweetData = $('#tweet-text');
  const $tweetText = $tweetData.val();
  // const $tweetError = $('.error')
  const $tweetErrorText = $tweetError.find('#tweet-error-text')
  // console.log($tweetText);
  if ($tweetText.length > 140) {
    // $tweetError.show();
    $tweetError.slideUp();
    $tweetError.slideDown();

    $tweetErrorText.text('Tweet too long, please keep to 140 characters or less!')
  } else if (!$tweetText) {
    // $tweetError.show();
    $tweetError.slideUp();
    $tweetError.slideDown();
    $tweetErrorText.text('Please enter something in the textarea in order to tweet!')
  } else {
    $tweetError.slideUp();
    $.ajax({
      type: "POST",
      url: '/tweets',
      // Use $form.serialize here instead of $tweetData since if you have more than one text area in the form you can get all with form
      // with $tweetData you could only get the one you selected and that defeats the whole serization process
      data: $form.serialize(),      
      success: () => {
        // Load loads -> now adds the new tweet before loading
        loadTweets();
        // Empty the text area
        $tweetData.val('');
        // Reset the counter
        $('textarea').parent().find('output').text(140);
      }
    });
  }
});
