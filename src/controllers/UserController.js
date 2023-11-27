import jwt from 'jsonwebtoken'
import userSchema from '../utils/users.js'
import users from '../utils/mockData.js'

const secretKey = "12"
export const LoginController = (req, res) => {
    const { username, password } = req.body
    const user = users.find(
        (u) => u.username === username && u.password === password
    )
    if (user) {
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            secretKey,
            {
                expiresIn: '1h',
            }
        )
        res.json({ token })
    } else {
        res.status(401).json({ message: 'Invalid username' })
    }
}

export const AddUserController = (req, res) => {
    const newValue = req.body
    const { error, value } = userSchema.validate(newValue)
    if (!error) {
        users.push(value)
        res.json(users)
    } else {
        const { details } = error
        res.status(400).json({ message: 'Invalid Input', details })
    }
}