const accountId = 144553
let accountEmail = "archit483@gmail.com"
var accountPassword = "archit01"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //NOT ALLOWED 

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])