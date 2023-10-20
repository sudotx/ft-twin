import Profile, { IProfile } from "../models/Profile";
import User, { IUser } from "../models/User";

class profileController {
  getUserProfile = async (userId: string) => {
    // create a new user
    try {
      const profile: IProfile = await Profile.findOne({
        user: userId,
      }).populate("user", ["avatar", "email"]);
    } catch (err) {
      console.error(err.message);
    }
  };
  createOrUpdateUserProfile = async (userId: string) => {
    // create a new user
    try {
      let user: IUser = await User.findOne({ _id: userId });

      if (!user) {
        // return res.status(HttpStatusCodes.BAD_REQUEST).json({
        //   errors: [
        //     {
        //       msg: "User not registered",
        //     },
        //   ],
        // });
      }

      let profile: IProfile = await Profile.findOne({ user: userId });
      if (profile) {
        // Update
        // profile = await Profile.findOneAndUpdate(
        //   { user: userId },
        //   { $set: profileFields },
        //   { new: true }
        // );
        // return res.json(profile);
      }

      // Create
      //   profile = new Profile(profileFields);

      await profile.save();
    } catch (err) {
      console.error(err.message);
    }
  };
  getAllProfiles = async () => {
    // create a new user
    try {
      const profiles: IProfile[] = await Profile.find().populate("user", [
        "avatar",
        "email",
      ]);
    } catch (err) {
      console.error(err.message);
    }
  };
  getUserById = async (userId: string) => {
    // create a new user
    try {
      const profile: IProfile = await Profile.findOne({
        user: userId,
      }).populate("user", ["avatar", "email"]);
    } catch (err) {
      console.error(err.message);
    }
  };
  deleteUserProfile = async (userId: string) => {
    // create a new user
    try {
      // Remove profile
      await Profile.findOneAndRemove({ user: userId });
      // Remove user
      await User.findOneAndRemove({ _id: userId });
    } catch (err) {
      console.error(err.message);
    }
  };
}

export default new profileController();
