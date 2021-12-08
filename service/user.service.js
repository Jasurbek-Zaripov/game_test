const fs = require('fs')
const path = require('path')
let USER_NAME = []
//============
class UserDB {
  constructor(username) {
    USER_NAME = []
    USER_NAME.push(username)
    this.user = username
    this.pathDB = path.join(process.cwd(), 'db', 'user.db.json')
  }

  userWrite() {
    try {
      let data = fs.readFileSync(this.pathDB, 'utf-8')
      data = JSON.parse(data)
      data.push([this.user])
      fs.writeFileSync(this.pathDB, JSON.stringify(data, null, 2))
      console.log(`${this.user} boshladik!`)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = {
  UserDB,
  USER_NAME,
}
