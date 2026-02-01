import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { userProfileSchema } from "../../schemas/userProfileSchema";
import { updateUser } from "../../api/Users";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function UpdateUserInfo({ initialData, onSuccess, setShowAccount }) {
  const { getAccessTokenSilently } = useAuth0();
  const [formData, setFormData] = useState({
    display_name: initialData.display_name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    profile_pic: null,
  });
  const [errors, setErrors] = useState({});

  function capitalizeInput(value) {
    return value
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : name === "display_name" ? capitalizeInput(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await userProfileSchema.validate(formData, { abortEarly: false });

      const token = await getAccessTokenSilently({
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      });

      const updatedUser = await updateUser({ data: formData, token: token });

      onSuccess(updatedUser); // ← single source of truth
      setShowAccount(false);
    } catch (err) {
      if (err.inner) {
        const formatted = {};
        err.inner.forEach((e) => (formatted[e.path] = e.message));
        setErrors(formatted);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <Card className="dark:shadow-blue-950 shadow-violet-200 shadow-2xl slideUp">
      <form onSubmit={handleSubmit}>
        <h2 className="text-secondary dark:text-white text-3xl mb-8 text-center">Update Details</h2>
        <div className="mb-7 gap-4 flex flex-col">
          <div>
            <img
              src={formData?.profile_pic || "/avatar.png"}
              alt="Profile Picture"
              className="rounded-full h-40 mx-auto cursor-pointer mb-4"
              onClick={() => window.open(formData?.profile_pic || "/avatar.png", "_blank")}
            />
            <Input name="profile_pic" type="file" label="Profile Picture" onChange={handleChange} className="w-full" />
          </div>
          <hr className="text-secondary dark:text-primary my-4" />
          <Input name="display_name" label="Name" value={formData.display_name} onChange={handleChange} error={errors.display_name} className="w-full" />
          <Input name="email" label="Email" value={formData.email} onChange={handleChange} error={errors.email} className="w-full" />
          <Input name="phone" label="Phone" value={formData.phone} onChange={handleChange} error={errors.phone} className="w-full" />
        </div>
        <Button type="submit" className="w-full">
          Update
        </Button>
      </form>
    </Card>
  );
}
