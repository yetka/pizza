//back-end

function Pizza (size) {
  this.size = size;
  this.toppings = [];
  this.prize = [];
}

Pizza.prototype.cost = function(size, toppings) {
  var amount = 7;
  if (size === "small") {
    return amount += toppings.length -2;
  }
  if (size === "large") {
    return amount += toppings.length +3;
  } else {
    return amount += toppings.length;
  }
}







//front-end
$(document).ready(function() {

  $("#pizzaCreation").submit(function(event) {
    event.preventDefault();
    var sizeChoice = $("input:radio[name=size]:checked").val();
    var newPizza = new Pizza (sizeChoice);
    $("input:checkbox[name=chosen-toppings]:checked").each(function(){
      var toppingsChoice = $(this).val();
      newPizza.toppings.push(toppingsChoice);
    });
    var pizzaCost = newPizza.cost(newPizza.size,newPizza.toppings);
    newPizza.prize.push(pizzaCost);

    $(".pizzaName").append('<div class="show-pizza">' +
                        '<li>' +
                         newPizza.size +
                        '</li>' +
                        '</div>')

    $(".user-order").show();

    $(".show-pizza").last().click(function() {
      $(".display-size").text(newPizza.size);
      $(".display-toppings").text(newPizza.toppings.toString());
      $(".display-amount").text(newPizza.prize.toString());
      $("#display-pizza").show();
    });
  });
})
