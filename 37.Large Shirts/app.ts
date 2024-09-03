function make_shirt(size: string = "large", printMessage: string = "I love typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`);
}

make_shirt()
make_shirt("Medium")
make_shirt("small","I love javascript")