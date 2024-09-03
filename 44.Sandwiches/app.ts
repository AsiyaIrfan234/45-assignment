function spicySandwiches(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem =>
        console.log(singleItem)
        
    )
    console.log("\nNow Enoy Sandwich");
}

spicySandwiches("Butter","Bread")
spicySandwiches("Chicken kabab","Egg","Cheese","Spicy masala","Salt")
spicySandwiches("Tomata","Onion","Cucumber","Tomata kechup","Egg","Mayoness","Butter")