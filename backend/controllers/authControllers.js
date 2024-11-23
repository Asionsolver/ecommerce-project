const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utils/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/tokenCreate");
class AuthControllers {
  // admin login
  admin_login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      // console.log(admin);
      if (admin) {
        const isMatch = await bcrypt.compare(password, admin.password);
        if (isMatch) {
          const token = await createToken({
            id: admin._id,
            role: admin.role,
          });

          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: true,
            sameSite: "none",
          });
          responseReturn(res, 200, {
            success: true,
            token,
            message: "Login successful",
          });
        } else {
          responseReturn(res, 400, {
            success: false,
            error: "Password is incorrect",
          });
        }
      } else {
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
  };

  // get user
  getUser = async (req, res) => {
    const { id, role } = req;
    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        console.log("Seller Info");
        // responseReturn(res, 400, { success: false, error: "Unauthorized" });
      }
    } catch (error) {
      console.log(error.message);
      // responseReturn(res, 500, { success: false, error: error.message });
    }
  };
}

module.exports = new AuthControllers();
