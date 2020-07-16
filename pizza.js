const menu = {
 cheese: {
     toppings: ['cheese', 'parmesan', 'asiago'],
     price: 8.99
 }

 pepperoni: {
     toppings:['pepperoni', 'more pepperoni', 'cheese'],
     price: 9.99
    
 }

  veggie: {
      toppings: ['bell peppers', 'olives', 'tomatos', 'cheese'],
      price:10.99

  }
  supreme:{
    toppings: ['sausauge', 'olives', 'bell peppers', 'mushrooms'],
    price; 12.99

  }
  meatlovers;{
      toppings: ['pepperoni', 'sausage', 'bacon'],
      15.99
  }
}

    console.log(menu);
    console.log(menu.veggie);


    Let allPizzas = Object.keys(menu);
    console.log(allPizzas);

    if (menu.banana) {
        console.log('That piazza does not exist');
        
    }
 