var current_users = ["Alishba", "oman", "Balaj", "saima", "Rehana"];
var new_users = ["Asiya", "Noor", "Oman", "Maheen", "Saima"];
new_users.forEach(function (new_one_users) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_users, " is available"));
    }
});
