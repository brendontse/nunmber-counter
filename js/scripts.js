$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("input#input1").val());
    var countBy = parseInt($("input#input2").val());

    var newArray = [];

    for (var index = countBy; index <= countTo; index += countBy) {
      newArray.push(index);
      console.log(newArray);
    }

  });
});
