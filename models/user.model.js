let users = require('../data/users.json')
const filename = './data/users.json'
const helper = require('../helpers/helper.js')


function getUsers() {
    return new Promise((resolve, reject) => {
        if (users.length === 0) {
            reject({
                message: 'no users available',
                status: 202
            })
        }
        resolve(users)
    })
}
function getUser(name) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(users, name)
       .then(user => resolve(user))
       .catch(err => reject(err))
    })
}
function insertUser(newName, newAge, newEmail, newPassword) {
    return new Promise((resolve, reject) => {
        newUser = { 
            ...newName, 
            ...newAge, 
            ...newEmail, 
            ...newPassword 
        }
       helper.nameMustBeUnique(users, newName)
       .then(() =>{
            users.push(newUser)
            helper.writeJSONFile(filename, users)
            resolve(newUser)
        })
       .catch(err => reject(err))
    })
}


function updateUser(thisName,  newAge, newEmail, newPassword) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(users, thisName)
        .then(user => {
          const index = users.findIndex(p => p.name === user.name)
           updatedUser = {
                             "name": thisName,
                             "age": newAge,
                             "email": newEmail,
                             "password": newPassword
                        }
            users[index] = updatedUser
            helper.writeJSONFile(filename, users)
            resolve(users[index])
        })
        .catch(err => reject(err))
    })

}
function deleteUser(name) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(users, name)
        .then(() => {
            users = users.filter(p => p.name !== name)
            helper.writeJSONFile(filename, users)
            resolve()
        })
        .catch(err => reject(err))
    })
}
module.exports = {
    insertUser,
    getUser,
    getUsers, 
    updateUser,
    deleteUser
}