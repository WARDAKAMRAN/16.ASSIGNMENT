let guestArr : string[] = ["Warda","Waleed","Aqsa","Fathima"];

let canNotAttend : string ="Aqsa"

let newGuest : string = "Mahanor"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

// guestArr.map((items) =>
//  console.log(`Dear ${items}, I found a bigger dinner table so I am invited more Peoples,`));

//part 2 Beganlet 
let guestBeg : string = "Yusra"
guestArr.unshift(guestBeg);
console.log(guestArr)
//part 3 middel

let middelGuest : string = "Yasir"
let middelindex = guestArr.length/3
guestArr.splice(middelindex,0,middelGuest)
console.log(guestArr)

//part 4 append

guestArr.push('Zeeshan')
console.log(guestArr)


//part 5

guestArr.map((items) =>
console.log(`Dear ${items}, You are invited in the more people list on dinner`));
