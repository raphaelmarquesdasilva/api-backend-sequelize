import express from "express"
import * as userControllers from "../Controllers/user.js"

const router = express.Router()

router.post("/create", userControllers.creatingUser)
router.post("/createmany", userControllers.creatingUsers)
router.get("/allusers", userControllers.gettingAll)
router.get("/oneuser/:id", userControllers.gettingOneUser)

export default router