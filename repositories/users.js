const { User } = require('../models')

module.exports = {
    getAllUsers() {
        return User.findAll()
    },
   
    getUsers(offset = 0, limit = 10) { },
    getAdmins() { },
    getAuthors() { },
    getGuests(){ }, 
    getUser(id) { 
        return User.findOne({ where:{id} });
    }, 
    getUserByEmail(email) { },
    addUser(user) { },
    updateUser() { },
    deleteUser() { },
}