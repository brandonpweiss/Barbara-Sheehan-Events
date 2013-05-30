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

$("#navhow").click(function() {
   scrollToAnchor('how');
});

$("#navcontact").click(function() {
   scrollToAnchor('contact');
});
$("#navevents").click(function() {
   scrollToAnchor('events');
});
$("#navservices").click(function() {
   scrollToAnchor('services');
});

$("#contactButton").click(function() {
   scrollToAnchor('contact');
});
$("#see").click(function() {
   scrollToAnchor('how');
});

$("#navinterests").click(function() {
   scrollToAnchor('interests');
});

$("#top").click(function() {
   scrollToAnchor('top');
});

$("#learnmore").click(function() {
   scrollToAnchor('how');
});

$("#one").click(function() {
   scrollToAnchor('how');
});
$("#two").click(function() {
   scrollToAnchor('how');
});
$("#three").click(function() {
   scrollToAnchor('how');
});



