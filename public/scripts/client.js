/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaacTest"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = tweets => {
  for (const tweet in tweets) {
    // console.log(createTweetElement(tweets[tweet]))
    let $tweet = createTweetElement(tweets[tweet]);
    $('#tweets-container').append($tweet);
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
      <div >${tweetData.created_at}</div>
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


renderTweets(data);

// const $tweet = createTweetElement(tweetData);
// console.log($tweet);
// $('#tweets-container').append($tweet);

// const $tweets = renderTweets(data);
// console.log($tweets);