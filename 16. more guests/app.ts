let guest_list: string [] = ['zoya','bisma','ayesha','zolain'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('wellcome dear' + guest_list[i] + ',\nwe invited you on dinner tommorrrow.\n\nThank you\n');
// }
let not_Present : string = 'bisma';
let new_guest : string = "Ruba";
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('wellcome dear' + guest_list[i] + ',\nwe invited you on dinner tommorrrow.\n\nThank you\n');
}

guest_list.unshift('anamta','ayat','dua');
for(let i=0; i<guest_list.length; i++){
    console.log('wellcome dear' + guest_list[i] + ',\nwe invited you on dinner tommorrow. we found big table so we decided to invite 3 more guests\n\nThnak you\n');
}