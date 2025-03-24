import User from "../Models/user.js";


export const creatingUser = async (body) => {
    const user = await User.create(body)
    return user
}

export const creatingUsers = async (body) => {
    const users = await User.bulkCreate(body)
    return users
}