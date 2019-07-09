const fs = require('fs')

function mustBeInArray(array, name) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.name == name )
        if (!row) {
            reject({
                message: 'User does not exist',
                status: 404
            })
        }
        resolve(row)
    })
}

function nameMustBeUnique(array, name) {
    return new Promise((resolve, reject) => {
     const row = array.find(r => r.name == name )
    console.log(row)
        if(! row) { resolve (name)}
        else{
            reject({
                message: 'Username allready exists, choose new username.',
                status: 404
            })
        }
    })
}

function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}
module.exports = {
    mustBeInArray,
    nameMustBeUnique,
    writeJSONFile
}