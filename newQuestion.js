const RD = require('readline')
const fs = require('fs')
const path = require('path')
const db_path = path.join(process.cwd(), 'db', 'test.db.json')
let data_test = JSON.parse(fs.readFileSync(db_path, 'utf-8'))

let rd = RD.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let len = 0
let arr = [' ', 'A) ', 'B) ', 'C) ', 'D) ']
rd.setPrompt('savoliz?:\n')
rd.prompt()

rd.on('line', a => {
  arr[len] += a
  len++
  rd.setPrompt(arr[len] || '')
  rd.prompt()
  if (len == 5) {
    return que()
  }
})
function que() {
  rd.question("to'g'ri javobni kiriting\n", data => {
    if (['A', 'B', 'C', 'D'].includes(data)) {
      let a = arr.join('\n')
      let b = [a, data]
      data_test.push(b)
      console.log('muvaffaqiyatli saqlandi!')
      fs.writeFileSync(db_path, JSON.stringify(data_test, null, 2))
      return rd.close()
    } else {
      return que(data)
    }
  })
}
