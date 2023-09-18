import users from "../models/user";
import { UserLoginValidation, UserValidation } from "../interfaces/interfaces";
import { error } from "console";

const validateRegisterInput = (data: UserValidation) => {
  const { firstname, lastname, email, password } = data;

  if (!firstname.trim() || !lastname.trim()) {
    throw error("Invalid Firstname and Lastname");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw error("Invalid Email.");
  }
  if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
    throw error(
      "Invalid Password"
    );
  }
};

export const register = async (
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  
  try {
    validateRegisterInput({ firstname, lastname, email, password });
    const newUser = await users.create({id,firstname,lastname,email,password});
    return newUser;
  } catch (error) {
    throw error;
  }
};

const validateLoginInput = (data: UserLoginValidation) => {
  const { email } = data;
  if (!email ) {
    throw error("Email required");
  }
};


export const login = async (email: string) => {
  try {
    validateLoginInput({ email });

    const login = await users.findOne({
      where: { email },
    });
    if (!login) {
      throw null;
    }
    return login;
  } catch (error) {
   throw error;
  }
};

export const getUserProfile = async (email: string) => {
  try {
    const getUserProfile = await users.findOne({
      where: { email },
    });

    if (!getUserProfile) {
      throw null;
    }

    return getUserProfile;
  } catch (error) {
   throw error;
  }
};

export const getUserList = async (page: number, pageSize: number) => {
  try {
    const offset = (page - 1) * pageSize;

    return users.findAll({
      offset,
      limit: pageSize,
    });

  } catch (error) {
   throw error;
  }
};

