const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)

//google auth
//router.get('/google', authController.getGoogle) // inserted the google and google.googlecallback routes
//router.get('/google/callback', authController.getGoogleCallback) // inserted the google and google.googlecallback routes
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router

