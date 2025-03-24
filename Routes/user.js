import express from "express"
import * as userControllers from "../Controllers/user.js"

const router = express.Router()

router.post("/create", userControllers.creatingUser)

export default router