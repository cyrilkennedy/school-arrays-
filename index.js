const jss1 = ["Marvel", "Abigail", "ihuoma", "Precious", "Ihechiluru"];
const jss2 = ["Charles", "Tom", "Gabriel", "Carson", "Benjamin"];
const jss3 = ["Alimat", "Hazan", "Hazard", "Joy", "Caroline"];
const ss1 = ["Henry", "Lade", "Ubong", "Gift", "Linda"];
const ss2 = ["Ann", "Lydia", "Judas", "Chillwel", "Jordan"];
const ss3 = ["Fredico", "Kylian", "Bruno", "Kevin", "Cristiano"];

console.log(jss1);
console.log(jss1[3]);
jss1.pop("ihechiluru");
console.log(jss1);
jss1.push("Femi");
console.log(jss1);


console.log(jss2);
console.log(jss2[1]);
jss2.pop("Benjamin");
console.log(jss2);
jss2.unshift("Ronaldo");
console.log(jss2);

console.log(jss3);
console.log(jss3[4]);
jss3.pop("Caroline");
console.log(jss3);
jss3.push("Messi");
console.log(jss3);

console.log(ss1);
console.log(ss1[2]);
ss1.pop("Linda");
console.log(ss1);
ss1.unshift("Sadio");
console.log(ss1);

console.log(ss2);
console.log(ss2[0]);
ss2.pop("Jordan");
console.log(ss2);
ss2.push("Salah");
console.log(ss2);

console.log(ss3);
console.log(ss3[2]);
ss3.pop("kevin");
console.log(ss3);
ss3.unshift("Jose Mourinho");
console.log(ss3);

