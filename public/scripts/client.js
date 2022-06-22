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

loadTweets();


const renderTweets = tweets => {
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
    <header class="tweet-header">
      <div>
      <img src=${tweetData.user.avatars} alt="profile icon">
        <p class="person-name">${tweetData.user.name}</p>
      </div>
      <div>${tweetData.user.handle}</div>
    </header>
    <p>${tweetData.content.text}</p>
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
  // console.log($tweetText);
  if ($tweetText.length > 140) {
    alert('Too long')
  } else if (!$tweetText) {
    alert('please enter a tweet')
  } else {
    $.ajax({
      type: "POST",
      url: '/tweets',
      // Use $form.serialize here instead of $tweetData since if you have more than one text area in the form you can get all with form
      // with $tweetData you could only get the one you selected and that defeats the whole serization process
      data: $form.serialize(),      
      success: () => {
        loadTweets();
        $tweetData.val('');
        $('textarea').parent().find('output').text(140);
      }
    });
  }
});






