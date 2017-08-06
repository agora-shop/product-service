'use strict'

console.log('----- Agora product API has started -----');

process.on('uncoughtException', (err) => {
  console.error('Unhandled Exception', err)
})

process.on('uncoughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err)
})