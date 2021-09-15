const WilderModel = require('../model/wilder');

// Show all users
function showAllwilders() {
  return WilderModel.find()
}

// Create one user
function createOneWilder( name, city, skills ) {
  return WilderModel.init().then(() => {
    const wilder = new WilderModel({
      name,
      city,
      skills
    });
    return wilder.save();
  })
}

// Delete one user
function deleteOneUser(id) {
  return WilderModel.findByIdAndDelete(id);
}

function updateOneUser(id, body) {
  return WilderModel.findByIdAndUpdate(id, body)
}
module.exports = { createOneWilder, showAllwilders, deleteOneUser, updateOneUser };

// L'intérêt c'est de pouvoir switcher de techno indépendament sans modifier toute l'architecture du projet
// controller
// service
// DAO
// BDD



// module.exports = {
//   findAll: () => {
//     return WilderModel.find();
//   },
//   create: (name, city, skills) => {
//     return WilderModel.init().then(() => {
//       const wilder = new WilderModel({
//         name,
//         city,
//         skills
//       });
//       return wilder.save();
//     })
//   },
// }