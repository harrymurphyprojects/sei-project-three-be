import Users from '../models/user-models.js'
import { NotFound, Unauthorized } from '../lib/errors.js'
import { secret } from '../config/environment.js'

import jwt from 'jsonwebtoken'


async function register (req, res, next) {
  try {
    const user = await Users.create(req.body)
    return res.status(201).json({ mesage: `Registration successsful, welcome ${user.username}!`, user })
  } catch (err) {
    next(err)
  }
}

async function login(req, res, next) {
  try {
    // need to find them by their email address, so findOne
    const userToLogin = await Users.findOne({ email: req.body.email })
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
      throw new Unauthorized()
    }
    // using the npm i jsonwebtoken to create tokens.  Secret is pulled in from environments.  sub: userToLogin is created to be used in the secure sign in.
    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '7 days' })
    return res.status(202).json({
      message: `Welcome back ${userToLogin.username}`,
      token,
    })
  } catch (err) {
    next(err)
  }
}

async function userEdit(req, res, next) {
  const { userId } = req.params
  try {
    const editUser = await Users.findById(userId)
    if (!editUser) {
      throw new NotFound()
    }
    if (!editUser._id.equals(req.currentUser)) {
      throw new Unauthorized()
    }
    Object.assign(editUser, req.body)
    await editUser.save()
    return res.status(202).json({ message: `Profile updated ${editUser}` })
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'Error') {
      return res.status(404).json({ message: 'Not Found' })
    }
    next(err)
  }
}

async function userDelete (req, res, next) {
  const { userId } = req.params
  try {
    const userToDelete = await Users.findById(userId)
    if (!userToDelete) {
      throw new NotFound()
    }
    if (!userToDelete._id.equals(req.currentUser)) {
      throw new Unauthorized()
    }
    await userToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

export default {
  register,
  login,
  edit: userEdit,
  delete: userDelete,
}