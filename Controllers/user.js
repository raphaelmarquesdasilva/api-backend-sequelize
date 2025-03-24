import * as userRepositories from "../Repositories/user.js"

export const creatingUser = async (req,res) => {
    const body = req.body
    try {
        const user = await userRepositories.creatingUser(body)
        res.status(201).json({message: "User created successfully!", createdUser: body})
    } catch (error) {
        res.status(500).json({message: "It was not possible to create the user.", error})
    }
}

export const creatingUsers = async (req,res) => {
    const body = req.body
    try {
        const users = await userRepositories.creatingUsers(body)
        res.status(201).json({message: "Users created sucessfully!", createdUsers: body})
    } catch (error) {
        res.status(500).json({message: "It was not possible to create the users."})
    }
}

export const gettingAll = async (req,res) => {
    try {
        const users = await userRepositories.gettingAll()
        res.status(200).json({message: "Users are gonna be listed below:", users: users})
    } catch (error) {
        res.status(500).json({message: "it wasn not possible to list all the users", error})
    }
}

export const gettingOneUser = async (req,res) => {
    const { id } = req.params
    try {
        const user = await userRepositories.gettingOne(id)
        res.status(200).json({message: `User with id: ${id} is gonna be listed below:`, user: user})
    } catch (error) {
        res.status(500).json({message: "It was not possible to list the user", error})
    }
}