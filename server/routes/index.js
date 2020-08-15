const texts = require('./getNotes')
const textAdd = require('./addNotes')
const textDelete = require('./deleteNotes')
module.exports = app => {
    app.use('/texts', texts)
    app.use('/textAdd', textAdd)
    app.use('/textDelete', textDelete)

}