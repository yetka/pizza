//back-end
function Pizza (size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.cost = function(size, toppings) {
  var amount = 7;
  if (size==="small") {
    return amount -= 2;
  }
  if (size==="large") {
    return amount += 2;
  }
  var toppingsAmount = toppings.length;
  return amount += toppingsAmount;
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

    var pizzaCost = newPizza.cost(newPizza.size,newPizza.toppings);

    $(".amount").text(pizzaCost);


    $("#pizzaCreation").hide();
    $(".pizzaCost").show();

  });
});
