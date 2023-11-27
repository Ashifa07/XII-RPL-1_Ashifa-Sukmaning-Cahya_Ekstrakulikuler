const { default: mongoose } = require("mongoose")

const EkskulSchema = new mongoose.Schema({
    kategori: {
        type: String,
        required: [true, 'Silahkan isikan kategori ekskul'],
        unique: true
    },
    pembimbing: {
        type: String,
        required: [true, 'Silahkan isikan pembimbing ekskul'],
        unique: false
    },
    anggota: {
        type: Number,
        requirred: [true, 'Silahkan isi jumlah anggota ekskul'],
        unique: false
    },
    jadwal: {
        type: String,
        requirred: [true, 'Silahkan isi jadwal ekskul'],
        unique: false
    },
    ruangan: {
        type: String,
        requirred: [true, 'Silahkan isi ruangan ekskul'],
        unique: false
    },



})

module.exports = mongoose.model('Ekskul', EkskulSchema)