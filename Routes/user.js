import express from "express"
import * as userControllers from "../Controllers/user.js"

const router = express.Router()

router.post("/create", userControllers.creatingUser)
router.post("/createmany", userControllers.creatingUsers)

export default router