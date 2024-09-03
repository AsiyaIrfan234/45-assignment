var guest_list = ['zoya', 'bisma', 'ayesha', 'zolain'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('wellcome dear' + guest_list[i] + ',\nwe invited you on dinner tommorrrow.\n\nThank you\n');
// }
var not_Present = 'bisma';
var new_guest = 'Ruba';
guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('wellcome dear' + guest_list[i] + ',\nwe invited you on dinner tommorrrow.\n\nThank you\n');
// }
guest_list.unshift('anamta', 'ayat', 'dua');
// for (let i=0; i<guest_list.length; i++){
//     console.log('wellcome dear' + guest_list[i] + ',\nwe invited you on dinner tommorrow. we found big table so we decided to invite 3 more guests\n\nThnak you\n');
// }
console.log('\nunfortunately we can not arrange big table , Only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('wellcome dear' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
