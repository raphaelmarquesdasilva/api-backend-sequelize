import User from "../Models/user.js";


export const creatingUser = async (body) => {
    const user = await User.create(body)
    return user
}

export const creatingUsers = async (body) => {
    const users = await User.bulkCreate(body)
    return users
}

export const gettingAll = async () => {
    const users = await User.findAll()
    return users
}

export const gettingOne = async (id) => {
    const user = await User.findOne({
        where: {
            id: id
        }
    })
    return user
}