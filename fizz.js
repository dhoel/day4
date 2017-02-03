function fizzBuzz (countTo) {
    var arr = [];
    for (i = 1; i <= countTo; i++) {

        switch (i % 15){
            case 0:
            arr.push('fizzbuzz');
            break;

            case 3:
            case 6:
            case 9:
            case 12:
            arr.push('fizz');
            break;

            case 5:
            case 10:
            arr.push('buzz');
            break;

            default:
            arr.push(i);
        }
    }

    return arr;

}
// console.log(fizzBuzz(100));


$('#number-chooser').submit(function(event) {
  event.preventDefault();
  var choice = parseInt($('#number-choice').val());
  var result = fizzBuzz(choice);
   $('.js-results').append(result.map(function(num) {
     return "<div class='fizz-buzz-item'> <span>" + num + "</span> </div>";
   }));
  });
