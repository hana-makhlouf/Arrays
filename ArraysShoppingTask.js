var shoppingList = ["Eggs","Apples","Bread","Milk","Carrots","Potatoes","Chicken"] //the shopping list
var fruitVegList = ["Apples","Apricot","Artichoke","Carrots","Cabbage","Onion","Oranges","Potatoes"] //the list of accepted fruits and vegetables

var fruitVegShoppingList = [];

// Code Below

for(var i=0; i<shoppingList.length ;i++){
    for( var j=0; j<=fruitVegList.length ;j++){
        if(shoppingList[i]==fruitVegList[j]){
            fruitVegShoppingList.push(shoppingList[i]);  
        } 
    } 
}
console.log(fruitVegShoppingList);




