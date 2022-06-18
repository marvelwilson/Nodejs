const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime is seconds
console.log(`The System Uptime is ${os.uptime} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),

}
console.log(currentOs)