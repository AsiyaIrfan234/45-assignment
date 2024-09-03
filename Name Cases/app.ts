// lower case
let personName: string ="Asiya"
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toUpperCase());

//Tittle case
console.log("tittlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));