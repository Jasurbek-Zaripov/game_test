const RD = require('readline')
const { gen_test } = require('./service/test.service')
const { UserDB } = require('./service/user.service')

let rd = RD.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let savol

rd.question('ismingiz:\n', data => {
  let userdb = new UserDB(data)
  userdb.userWrite()

  rd.setPrompt('Tayyormisiz?:\n')
  rd.prompt()

  rd.on('line', a => {
    let data = gen_test.next(a).value
    if (!data) {
      return rd.close()
    }
    rd.setPrompt(data)
    rd.prompt()
  })
})
