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