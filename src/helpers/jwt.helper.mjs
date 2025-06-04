const generateToken = () => {
    const token = jwt.sign(
        payload,
        JWT_SECRET,

    )

}

export {
    generateToken
}