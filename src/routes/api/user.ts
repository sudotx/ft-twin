import { Response, Router } from "express";
import { check } from "express-validator";

import { createNew } from "../../controllers/user.controller";

import Request from "../../types/Request";

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req: Request, res: Response) => {
    createNew(req, res);
  }
);

export default router;
