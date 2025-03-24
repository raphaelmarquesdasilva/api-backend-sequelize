import express from "express"
import cors from "cors"
import sequelize from "./Databases/database.js"

const app = express()
const PORT = process.env.BACK_PORT

app.use(express.json())
app.use(cors())






const testingConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log(`Database connection has been stablished successfully!`)
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(`Database connection has not been stablished!`, error)
    }
}

testingConnection()

