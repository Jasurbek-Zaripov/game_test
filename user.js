const fs = require('fs')
const path = require('path')
const user_db_path = path.join(process.cwd(), 'db', 'user.db.json')
let user_array = JSON.parse(fs.readFileSync(user_db_path, 'utf-8'))
let users_obj = {}

for (const user of user_array) {
  if (users_obj[user[0]]) {
    user[0] += ` ${~~(Math.random() * 100)}`
  }
  users_obj[user[0]] = {
    Count: user.length - 1,
    True: user.join(' ').match(/true/g)?.length,
    False: user.join(' ').match(/false/g)?.length,
  }
}

console.table(users_obj)
