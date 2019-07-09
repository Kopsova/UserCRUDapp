function mustBeInteger(req, res, next) {
    const id = req.params.age

    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } else {
        next()
    }
}
function checkUserDetails(req, res, next) {
    const { name, age, email, password } = req.body
    if (name&& age && email && password) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}
/*function nameMustBeUnique(req, res, next) {
    const thisname = req.body.name
    if (name&& age && email && password) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}*/


module.exports = {
    mustBeInteger,
    checkUserDetails
    }