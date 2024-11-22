class AuthControllers {
  admin_login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: "Invalid email or password" });
        }   
    } catch (error) {
        
    }
  }
}

module.exports = new AuthControllers();
