const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utils/response");

class AuthControllers {
  admin_login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    try {
        const admin = await adminModel.findOne({ email }).select("+password");
        // console.log(admin);
        if (admin) {
            
        } else{
            responseReturn(res, 404, {
                success: false,
                error: "Email not found",
            });
        }  
    } catch (error) {
        responseReturn(res, 500, {
            success: false,
            error: error.message,
        });
    }
  }
}

module.exports = new AuthControllers();
