var guest_list = ['zoya', 'bisma', 'ayesha', 'zolain'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('wellcome dear' + guest_list[i] + ',\nwe invited you on dinner tommorrrow.\n\nThank you\n');
// }
var not_Present = 'bisma';
var new_guest = "Ruba";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('wellcome dear' + guest_list[i] + ',\nwe invited you on dinner tommorrrow.\n\nThank you\n');
}
guest_list.unshift('anamta', 'ayat', 'dua');
for (var i = 0; i < guest_list.length; i++) {
    console.log('wellcome dear' + guest_list[i] + ',\nwe invited you on dinner tommorrow. we found big table so we decided to invite 3 more guests\n\nThnak you\n');
}
