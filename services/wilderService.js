const { showAllwilders, createOneWilder, deleteOneUser, updateOneUser } = require('../DAO/users');

module.exports = {
  read: () => {
    return showAllwilders();
  },
  create: (name, city, skills) => {
    return createOneWilder(name, city, skills)
  },
  delete: (id) => {
    return deleteOneUser(id)
  },
  update: (id, body) => {
    return updateOneUser(id, body)
  }
}