const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PasienSchema = new Schema({
namaLengkap: {
     type: String
 },
 ttl: {
     type: String
 },
 jeniskelamin: {
     type: String
 },
 alamat: {
     type: String
 },
 usia: {
     type: String
 },
 diagnosa: {
     type: String
 }

})

module.exports = mongoose.model('pasien', PasienSchema)