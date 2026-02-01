import * as yup from "yup";

export const userProfileSchema = yup.object({
  display_name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z '-]+$/, "Only letters allowed"),

  email: yup.string().email("Invalid email").required("Email is required"),

  phone: yup
    .string()
    .nullable()
    .matches(/^[0-9 +()-]*$/, "Invalid phone number"),

  profile_pic: yup.mixed().nullable(),
});
