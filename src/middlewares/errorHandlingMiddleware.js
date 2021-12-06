module.exports = (err, req, res , next) => {
    console.log("Error Handling middleware called!")
    console.log("Route: ", req.path)
    console.error("Error: ", err)



    res.status(500).send(err);
}