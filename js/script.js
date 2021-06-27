$(document).ready(()=>{
  const pizza = {large:800, medium:600, small:400};
  const toppings = {large:300, medium:200, small:100};
  const crust = {glutenFree:400, stuffed:300, crispy:200};

  let itemOBJ = []

  var addToObject = function (obj, key, value, index) {

    // Create a temp object and index variable
    var temp = {};
    var i = 0;
  
    // Loop through the original object
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
  
        // If the indexes match, add the new item
        if (i === index && key && value) {
          temp[key] = value;
        }
  
        // Add the current item in the loop to the temp obj
        temp[prop] = obj[prop];
  
        // Increase the count
        i++;
  
      }
    }
  
    // If no index, add to the end
    if (!index && key && value) {
      temp[key] = value;
    }
  
    return temp;
  
  };


  $('.cart').click(()=>{
    $('.checkout').toggleClass('active')
  })

  const btns = $('.btn');
  
  $('.container').click(e=>{
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }else{
      const trg = e.target;
      let arr = {}
      if(trg.classList.value == "btn pizzaSize"){
        switch (trg.innerText) {
          case 'Large':
            addToObject(arr, 'pizzaPrize', pizza.large)
            break;

          case 'Medium':
            addToObject(arr, 'pizzaPrize', pizza.medium)
            break;  

          case 'Small':
            addToObject(arr, 'pizzaPrize', pizza.small)
            break;
        
          default:
            console.log('extra')
            break;
        }
      }

      else if(trg.classList.value == "btn toppings"){
        switch (trg.innerText) {
          case 'Large':
            arr['toppingsPrize'] = toppings.large;
            break;

          case 'Medium':
            arr['toppingsPrize'] = toppings.medium;
            break;

          case 'Small':
            arr['toppingsPrize'] = toppings.small;
            break;
        
          default:
            console.log('extra')
            break;
        }
      }

      itemOBJ.push(arr)
      console.log(arr, itemOBJ);
    }
  })

  
})
