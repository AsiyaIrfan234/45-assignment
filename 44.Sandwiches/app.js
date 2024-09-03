function spicySandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) {
        return console.log(singleItem);
    });
    console.log("\nNow Enoy Sandwich");
}
spicySandwiches("Butter", "Bread");
spicySandwiches("Chicken kabab", "Egg", "Cheese", "Spicy masala", "Salt");
spicySandwiches("Tomata", "Onion", "Cucumber", "Tomata kechup", "Egg", "Mayoness", "Butter");
