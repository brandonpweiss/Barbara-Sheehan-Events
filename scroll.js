function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
$("#navabout").click(function() {
   scrollToAnchor('about');
});

$("#navbuzz").click(function() {
   scrollToAnchor('buzz');
});

$("#navapproach").click(function() {
   scrollToAnchor('approach');
});

$("#navcontact").click(function() {
   scrollToAnchor('contact');
});
$("#navevents").click(function() {
   scrollToAnchor('events');
});

$("#contactButton").click(function() {
   scrollToAnchor('contact');
});
$("#see").click(function() {
   scrollToAnchor('approach');
});

$("#navinterests").click(function() {
   scrollToAnchor('interests');
});

$("#top").click(function() {
   scrollToAnchor('top');
});

$("#learnmore").click(function() {
   scrollToAnchor('approach');
});

$("#one").click(function() {
   scrollToAnchor('approach');
});
$("#two").click(function() {
   scrollToAnchor('approach');
});
$("#three").click(function() {
   scrollToAnchor('approach');
});



