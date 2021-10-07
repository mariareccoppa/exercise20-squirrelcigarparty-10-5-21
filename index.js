let cigars = parseInt(prompt("How many cigars?"));
let isWeekend = confirm("Is it a weekend?");
let isPartySuccessful = (!isWeekend && cigars>=40 && cigars<=60 || isWeekend && cigars >=40);
console.log(isPartySuccessful)