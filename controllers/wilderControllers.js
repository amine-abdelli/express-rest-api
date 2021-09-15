const express = require('express');
// const WilderService = require('../services/wilderService')

const router = express.Router();
// Async handler with express permet de gérer les erreurs asynchrones
const asyncHandler = require('express-async-handler');
//Error handling with express
const createError = require('http-errors');
const wilderService = require('../services/wilderService');
const { updateOneUser } = require('../DAO/users');

// Routes
router.get('/', asyncHandler(async (_, res) => {
  const wilderdb = await wilderService.read()
  if(!wilderdb) createError(404, "Database not found !")
  res.json({ success: true, wilderdb })
  res.send('Hello')
}))

// Create one user
router.post('/create', asyncHandler(async (req, res) => {
  const { name, city, skills} = req.body;
  const result = await wilderService.create(name, city, skills)
  res.json({ success: true, result });
}))

// Delete one user
router.delete('/delete/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  if(!id) createError(404, "User not found !")
  const user = await wilderService.delete(id);
  res.json({ success: true, user })
  console.log('User deleted Successfully');
}))

// Update one user
router.put('/update/:id', asyncHandler(async (req, res) => {
  const id = req.params.id
  console.log('IDIDIDIDIDIDIDD', id);
  if(!id) createError(404, "User not found !")
  const user = await updateOneUser(id, req.body)
  res.status(200).json(user);
}))

// Update one user
router.patch('/patch/:id', asyncHandler(async (req, res) => {
  const id = req.params.id
  if(!id) createError(404, "User not found !")
  const user = await updateOneUser(id, req.body)
  res.status(200).json(user)
}))

// Model: représentation de la base de données ex: WilderModel. Discute avec la base de données
// Controller: Résolvers collecte la data depuis le model/base de données
// Vue: La 'Response' - React - Browser

// Controllers <- Services < DAO

// req.body._id: id contenu dans le body
// req.params.id: :id contenu dans l'url tel que /:id
// req.query.id: ?id= contenu dans l'url tel que query?id=45234346343634

// Create skill
// createSkills: asyncHandler(async (req, res) => {
//   const wilderId = findById()
//     const wilder = 
// }),
// UPDATE ONE SKILL
// ESLINT + AirBNB 

module.exports = router;