let current_users = ["Alishba","oman","Balaj","saima","Rehana"]

let new_users = ["Asiya","Noor","Oman","Maheen","Saima"]

new_users.forEach(new_one_users => {
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase())
    if (our_condition){
        console.log(`sorry ${new_one_users} is already taken!`);
    }else{
        console.log(`This Username ${new_one_users} is available`);
    }
})










