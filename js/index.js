var count = 0;
var randomQuote;
var lastQuote;
var quotes = ["The best preparation for tomorrow is doing your best today. @H. Jackson Brown, Jr.",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. @Helen Keller",
"I hated every minute of training, but I said, Don't quit. Suffer now and live the rest of your life as a champion. @Muhammad Ali",
"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. @Francis of Assisi",
"I can't change the direction of the wind, but I can adjust my sails to always reach my destination. @Jimmy Dean",
"Perfection is not attainable, but if we chase perfection we can catch excellence. @Vince Lombardi",
"We know what we are, but know not what we may be. @William Shakespeare",
"It is during our darkest moments that we must focus to see the light. @Aristotle Onassis",
"Change your thoughts and you change your world. @Norman Vincent Peale",
"If opportunity doesn't knock, build a door. @Milton Berle",
"Believe you can and you're halfway there. @Theodore Roosevelt",
"No act of kindness, no matter how small, is ever wasted. @Aesop",
"It always seems impossible until its done. @Nelson Mandela",
"In order to succeed, we must first believe that we can. @Nikos Kazantzakis",
"Life is 10% what happens to you and 90% how you react to it. @Charles R. Swindoll",
"Always do your best. What you plant now, you will harvest later. @Og Mandino",
"Problems are not stop signs, they are guidelines. @Robert H. Schuller",
"The secret of getting ahead is getting started. @Mark Twain",
"Don't watch the clock; do what it does. Keep going. @Sam Levenson",
"If I had to live my life again, I'd make the same mistakes, only sooner. @Tallulah Bankhead",
"Keep your face to the sunshine and you cannot see a shadow. @Helen Keller",
"Education is not preparation for life; education is life itself. @John Dewey",
"The whole purpose of education is to turn mirrors into windows. @Sydney J. Harris"
];

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
    $("box").animate({
      color: "green",
      backgroundColor: "rgb( 20, 20, 20 )"
    });
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
  $("#tweet").click(function() {
    var currentQuote = $(".quote").html();
    var currentAuthor = $(".author").text();
    window.open("http://twitter.com/home/?status=" + currentQuote + currentAuthor);
  });
  $("#facePost").click(function() {
    var currentQuote = $(".quote").html();
    var currentAuthor = $(".author").text();
    window.open("https://www.facebook.com/sharer.php?u" + currentQuote + currentAuthor);
  });
  $("#print").click(function() {
    window.print();
  });
  $("#email").click(function () {
    var currentQuote = $(".quote").html();
    var currentAuthor = $(".author").text();
    location.href = "mailto:?subject=Summoned Quote&body=" +
    currentQuote + currentAuthor;
  });

});

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