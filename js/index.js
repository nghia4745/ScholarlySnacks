var quotes = [
  //Motivational
  "It always seems impossible until its done. @Nelson Mandela",
  "In order to succeed, we must first believe that we can. @Nikos Kazantzakis",
  "What you do today can improve all your tomorrows. @Ralph Marston",
  "Life is 10% what happens to you and 90% how you react to it. @Charles R. Swindoll",
  "Problems are not stop signs, they are guidelines. @Robert H. Schuller",
  "I'd rather attempt to do something great and fail than to attempt to do nothing and succeed. @Robert H. Schuller",
  "Always do your best. What you plant now, you will harvest later. @Og Mandino",
  "It does not matter how slowly you go as long as you do not stop. @Confucius",
  "The secret of getting ahead is getting started. @Mark Twain",
  "Don't watch the clock; do what it does. Keep going. @Sam Levenson",
  "Aim for the moon. If you miss, you may hit a star. @W. Clement Stone",
  "Be kind whenever possible. It is always possible. @Dalai Lama",
  "By failing to prepare, you are preparing to fail. @Benjamin Franklin",
  "After a storm comes a calm. @Matthew Henry",
  "Don't let yesterday take up too much of Today. @Will Rogers",
  "Good, better, best. Never let it rest. 'Til your good is better and your better is best. @St. Jerome",
  "If you want to achieve greatness, stop asking for permission. @Anonymous",
  "If you do what you always did, you will get what you always got. @Anonymous",
  "I have not failed. I've just found 10,000 ways that won't work. @Thomas A. Edison",
  "Do one thing every day that scares you. @Anonymous",

  //Inspirational
  "The best preparation for tomorrow is doing your best today. @H. Jackson Brown, Jr.",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. @Helen Keller",
  "Perfection is not attainable, but if we chase perfection we can catch excellence. @Vince Lombardi",
  "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. @Francis of Assisi",
  "I hated every minute of training, but I said, Don't quit. Suffer now and live the rest of your life as a champion. @Muhammad Ali",
  "It is during our darkest moments that we must focus to see the light. @Aristotle Onassis",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. @Jimmy Dean",
  "We know what we are, but know not what we may be. @William Shakespeare",
  "Change your thoughts and you change your world. @Norman Vincent Peale",
  "If opportunity doesn't knock, build a door. @Milton Berle",
  "Keep your face always toward the sunshine - and shadows will fall behind you. @Walt Whitman",
  "Believe you can and you're halfway there. @Theodore Roosevelt",
  "No act of kindness, no matter how small, is ever wasted. @Aesop",
  "What we think, we become. @Buddha",
  "Someone is sitting in the shade today because someone planted a tree a long time ago. @Warren Buffet",
  "What great thing would you attempt if you knew you could not fail? @Robert H. Schuller",
  "If I had to live my life again, I'd make the same mistakes, only sooner. @Tallulah Bankhead",
  "Education is not preparation for life; education is life itself. @John Dewey",
  "The whole purpose of education is to turn mirrors into windows. @Sydney J. Harris",
  "I dwell in possibility. @Emily Dickinson",

  //Life
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. @Buddha",
  "Life is really simple, but we insist on making it complicated. @Confucius",
  "Life isn't about finding yourself. Life is about creating yourself. @George Bernard Shaw",
  "We do not remember days, we remember moments. @Cesare Pavese",
  "Life is not a problem to be solved, but a reality to be experienced. @Soren Kierkegaard",
  "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor. @Sholom Aleichem",
  "Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it. @Sai Baba",
  "The purpose of life is a life of purpose. @Robert Byrne",
  "If you love life, don't waste time, for time is what is made up of. @Bruce Lee",
  "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. @Marie Curie",
  "I have a simple philosophy: Fill what's empty. Empty what's full. Scratch where it itches. @Alice Roosevelt Longworth",
  "Don't go around saying the world owes you a living. The world owes you nothing. It was here first. @Mark Twain",
  "Your heart is the size of an ocean. Go find yourself in its hidden depths. @Rumi",
  "If you want to fly on the sky, you need to leave the earth. If you want to move forward, you need to let go the past that drags you down. @Amit Ray",
  "Possibility of having a dream come true that makes life interesting. @Paulo Coelho",
  "Life doesn´t come with any guarantees. You have to risk it to get the biscuit. @Paulo Coelho",
  "The world is a room of heavy furniture. Eventually you are allowed to leave. @Adam Foulds",
  "The man who has no inner-life is a slave to his surroundings. @Henri Frederic Amiel",
  "That it will never come again is what makes life sweet. @Emily Dickinson",
  "A man sooner or later discovers that he is the master-gardener of his soul, the director of his life. @James Allen",

  //Love
  "Love isn't something you find. Love is something that finds you. @Loretta Young",
  "Love is when the other person's happiness is more important than your own. @H. Jackson Brown, Jr.",
  "Sometimes the heart sees what is invisible to the eye. @H. Jackson Brown, Jr.",
  "You can't blame gravity for falling in love. @Albert Einstein",
  "Let us always meet each other with smile, for the smile is the beginning of love. @Mother Teresa",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. @Mother Teresa",
  "I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love. @Mother Teresa",
  "To love oneself is the beginning of a lifelong romance. @Oscar Wilde",
  "True love is like ghosts, which everyone talks about and few have seen. @Francois de La Rochefoucauld",
  "A new command I give you: Love one another. As I have loved you, so you must love one another. @Jesus Christ",
  "Life is the flower for which love is the honey. @Victor Hugo",
  "We're born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we're not alone. @Orson Welles",
  "Love is like a friendship caught on fire. In the beginning a flame, very pretty, often hot and fierce, but still only light and flickering. As love grows older, our hearts mature and our love becomes as coals, deep-burning and unquenchable. @Bruce Lee",
  "Don't forget to love yourself. @Soren Kierkegaard",
  "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world. @Lucille Ball",
  "Love is always being given where it is not required. @E. M. Forster",
  "Love can be unselfish, in the sense of being benevolent and generous, without being selfless. @Mortimer Adler",
  "We waste time looking for the perfect lover, instead of creating the perfect love. @Tom Robbins",
  "Love is an emotion experienced by the many and enjoyed by the few. @George Jean Nathan",
  "Love is an irresistible desire to be irresistibly desired. @Robert Frost",

  //Friendship
  "The greatest gift of life is friendship, and I have received it. @Hubert H. Humphrey",
  "One of the most beautiful qualities of true friendship is to understand and to be understood. @Lucius Annaeus Seneca",
  "Walking with a friend in the dark is better than walking alone in the light. @Helen Keller",
  "Friendship... is not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything. @Muhammad Ali",
  "I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Let's face it, friends make life a lot more fun. @Charles R. Swindoll",
  "There is nothing on this earth more to be prized than true friendship. @Thomas Aquinas",
  "Friendship is always a sweet responsibility, never an opportunity. @Khalil Gibran",
  "A real friend is one who walks in when the rest of the world walks out. @Walter Winchell",
  "It is one of the blessings of old friends that you can afford to be stupid with them. @Ralph Waldo Emerson",
  "Friends are the siblings God never gave us. @Mencius",
  "Remember that the most valuable antiques are dear old friends. @H. Jackson Brown, Jr.",
  "Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom. @Marcel Proust",
  "One loyal friend is worth ten thousand relatives. @Euripides",
  "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend. @Albert Camus",
  "Friends show their love in times of trouble, not in happiness. @Euripides",
  "There are no strangers here; Only friends you haven't yet met. @William Butler Yeats",
  "A friend is someone who gives you total freedom to be yourself. @Jim Morrison",
  "Things are never quite as scary when you've got a best friend. @Bill Watterson",
  "Love is blind; friendship closes its eyes. @Friedrich Nietzsche",
  "The best time to make friends is before you need them. @Ethel Barrymore",

  //Funny
  "A woman's mind is cleaner than a man's: She changes it more often. @Oliver Herford",
  "Do not take life too seriously. You will never get out of it alive. @Elbert Hubbard",
  "Always remember that you are absolutely unique. Just like everyone else. @Margaret Mead",
  "We are all here on earth to help others; what on earth the others are here for I don't know. @W. H. Auden",
  "I'm sorry, if you were right, I'd agree with you. @Robin Williams",
  "Get your facts first, then you can distort them as you please. @Mark Twain",
  "Procrastination is the art of keeping up with yesterday. @Don Marquis",
  "I love deadlines. I like the whooshing sound they make as they fly by. @Douglas Adams",
  "A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man. @Lana Turner",
  "A day without sunshine is like, you know, night. @Steve Martin",
  "All right everyone, line up alphabetically according to your height. @Casey Stengel",
  "I can resist everything except temptation. @Oscar Wilde",
  "Laziness is nothing more than the habit of resting before you get tired. @Jules Renard",
  "Too much agreement kills a chat. @Eldridge Cleaver",
  "My fake plants died because I did not pretend to water them. @Mitch Hedberg",
  "I want my children to have all the things I couldn't afford. Then I want to move in with them. @Phyllis Diller",
  "Laugh and the world laughs with you, snore and you sleep alone. @Anthony Burgess",
  "Don't talk about yourself; it will be done when you leave. @Wilson Mizner",
  "Prejudice is a great time saver. You can form opinions without having to get the facts. @E. B. White",
  "One advantage of talking to yourself is that you know at least somebody's listening. @Franklin P. Jones"
];

var count = 0;
var randomQuote;
var lastQuote;
var array = new Array(quotes.length);
var counter = 0;
for (var i = 0; i < array.length; i++) {
  array[i] = false;
}//Setting all index to false to begin with
$(document).ready(function() {
  $(".circle").click(function(){
    var bg = $(this).css("background-color");
    var border = $(this).css("border-color");
    $("body").css({
      "background-color": bg,
      "color": border,
      transition: "all 0.5s ease-in-out"
    });
  });
  $(".quoteBtn").on("click", function() {
    count++;
    getQuote();
    if (count > 1) {
      $("p").fadeOut(0);
      $(".shareBtns").fadeOut(0);
      $(".box").hide(500);
      $(".box").delay(200).show(500);
      $("p").delay(200).fadeIn(500);
      $(".shareBtns").delay(200).fadeIn(500);
    } else {
      $(".box").show(500);
      $("p").fadeIn(500);
      $(".shareBtns").fadeIn(500);
    }
  });
  $("#tweet").click(function() {
    var currentQuote = $(".quote").html();
    var currentAuthor = $(".author").text();
    window.open("http://twitter.com/home/?status=" + currentQuote + currentAuthor);
  });
  $("#facePost").click(function() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcodepen.io%2Fnghia4745%2Ffull%2FpbEOzb%2F&amp;src=sdkpreparse");
  });
  $("#print").click(function() {
    window.print();
  });
  $("#email").click(function () {
    var currentQuote = $(".quote").html();
    var currentAuthor = $(".author").text();
    location.href = "mailto:?subject=ScholarlySnacks&body=" +
    currentQuote + currentAuthor;
  });

});

function getQuote() {
  var loopControl = true;
  while (loopControl) { //Used to get a new randomIndex if the same randomIndex was used in that iteration
    randomIndex = Math.floor(Math.random() * quotes.length);
    if (array[randomIndex] == false) { //if not the same index
      while (lastQuote == randomIndex) { // transition from one iteration to another, make sure the index are not the same
        randomIndex = Math.floor(Math.random() * quotes.length);
      }
      lastQuote = null; // throw away after iteration is over
      loopControl = false; // got the non-duplicated quote for the iteration
      randomQuote = quotes[randomIndex];
      array[randomIndex] = true;
      counter++;
    }
  }
  if (counter == quotes.length)
  {
    lastQuote = randomIndex;
    for (var i = 0; i < array.length; i++) {
      array[i] = false;
    }
    counter = 0;
  }
  quoteAuthor = randomQuote.split("@");
  $(".quote").html("&#10077; " + quoteAuthor[0] + "&#10078;");
  $(".author").text(" - " + quoteAuthor[1]);
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}
