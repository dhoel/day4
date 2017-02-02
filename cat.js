$(".thumbnails").click(function(event) {
  var newSrc = $(event.target).attr('src');
  console.log(newSrc);
  $('.hero img').attr('src', newSrc);
});





//make .hero src = current target src
