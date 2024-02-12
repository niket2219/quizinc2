import * as Yup from "yup";

export const UserSchema = Yup.object({
  fname: Yup.string()
    .min(3, "first name must be atleast of 3 characters")
    .max(15)
    .required("please enter your first name"),
  lname: Yup.string()
    .min(3, "last name must be atleast of 3 characters")
    .max(15)
    .required("please enter your last name"),
  roll: Yup.string().min(6).max(15).required("please enter your roll"),
  email: Yup.string().email().required("please enter your email"),
  dob: Yup.string().min(3).max(15).required("please choose your DOB"),
  gender: Yup.string().min(3).max(15).required("please CHOOSE YOUR GENDER"),
  phone: Yup.string()
    .min(10)
    .max(10)
    .required("please enter your phone number"),
});

export default UserSchema;
