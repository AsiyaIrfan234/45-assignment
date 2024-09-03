let placeToVisit: string[] = ["london","dubai","America","china","banff"];
//print in original order
console.log("original order:",placeToVisit);

//print array in alphabetical order
console.log("Alphabetical order:",placeToVisit.slice().sort());

//array is still in its original order
console.log("original order after sorting:", placeToVisit);

//print array in reverse alphabetical order without changing the order of the original list
console.log("reverse alphabetical order:", placeToVisit.slice().sort());

//array is still in its original order
console.log("original order after reverse sorting:", placeToVisit);

//Reverse the order of list
placeToVisit.reverse();
console.log("Reverse order:",placeToVisit);

//Reverse the of list again
placeToVisit.reverse();
console.log("Back to original order:",placeToVisit);

//sort array so it's storted in alphabetical order
console.log("sorted in alphabetical order:", placeToVisit.slice().sort());

//sort to change array so it's stored in reverse alphabetical order
console.log(" stored in reverse alphabetical order:", placeToVisit.slice().sort().reverse());
