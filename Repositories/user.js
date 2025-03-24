import User from "../Models/user.js";


export const creatingUser = async (body) => {
    const user = await User.create(body)
    return user
}