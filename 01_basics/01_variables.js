const accountId = 14567
let acccountEmail = "adarsh@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"

let accountState;

// accountId = 2 // Not allowed

accountEmail = "ads@gmail.com"
accountPassword = "6666"
accountCity = "Gonda"

console.log(accountId)

/*
 prefer not to use 'var' beacuse of issue in block and functionsl scope
*/

console.table([accountId , accountEmail, accountPassword, accountCity, accountState])