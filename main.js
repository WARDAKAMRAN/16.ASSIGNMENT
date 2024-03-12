var guestArr = ["Warda", "Waleed", "Aqsa", "Fathima"];
var canNotAttend = "Aqsa";
var newGuest = "Mahanor";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// guestArr.map((items) =>
//  console.log(`Dear ${items}, I found a bigger dinner table so I am invited more Peoples,`));
//part 2 Beganlet 
var guestBeg = "Yusra";
guestArr.unshift(guestBeg);
console.log(guestArr);
//part 3 middel
var middelGuest = "Yasir";
var middelindex = guestArr.length / 3;
guestArr.splice(middelindex, 0, middelGuest);
console.log(guestArr);
//part 4 append
guestArr.push('Zeeshan');
console.log(guestArr);
//part 5
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", You are invited in the more people list on dinner"));
});
