let userNames = ["Anas","Admin","Asiya","Alisha","Sumaiya"];

userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`);
    }else {
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
        
    }
})