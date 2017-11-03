//back-end
function Pizza (size) {
  this.size = size;
  this.toppings = [];
}






//front-end
$(document).ready(function() {
  $("#pizzaCreation").submit(function(event) {
    event.preventDefault();

    var sizeChoice = $("input:radio[name=size]:checked").val();

    newPizza = new Pizza (sizeChoice);

    $("input:checkbox[name=chosen-toppings]:checked").each(function(){
      var toppingsChoice = $(this).val();
      newPizza.toppings.push(toppingsChoice);
    });


    $("#pizzaCreation").hide();
    $(".pizzaCost").show();

  });
});
