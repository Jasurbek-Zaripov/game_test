const fs = require('fs')
const path = require('path')
const { UserDB } = require('./user.service')
let arr_i = []
function* gen() {
  //connect db
  const db_path = path.join(process.cwd(), 'db', 'test.db.json')
  const user_db_path = path.join(process.cwd(), 'db', 'user.db.json')
  let data_test = JSON.parse(fs.readFileSync(db_path, 'utf-8'))
  let data_user = JSON.parse(fs.readFileSync(user_db_path, 'utf-8'))

  for (let i = 0; i < data_test.length; i++) {
    const savol = data_test[rdm(data_test.length)]
    let javob = yield i + 1 + ': ' + savol[0]

    data_user[data_user.length - 1].push(
      `your: ${javob} | ${savol[1]} | ${javob == savol[1]}`
    )
  }
  console.table(data_user[data_user.length - 1])
  fs.writeFileSync(user_db_path, JSON.stringify(data_user, null, 2))
}

function rdm(len) {
  while (true) {
    let rdm = Math.floor(Math.random() * len)
    if (!arr_i.includes(rdm)) {
      arr_i.push(rdm)
      return rdm
    }
  }
}
let gen_test = gen()
module.exports = { gen_test }
