$(document).ready(function() {
  $("#pizzaCreation").submit(function(event) {
    event.preventDefault();

    var sizeChoice = $("input:radio[name=size]:checked").val();
    var toppingsChoices = [];
    $("input:checkbox[name=chosen-toppings]:checked").each(function(){
      var toppingsChoice = $(this).val();
      toppingsChoices.push(toppingsChoice);
    });

    $("#pizzaCreation").hide();
    $(".pizzaCost").show();
    
  });
});
