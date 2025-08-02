import { toast } from "sonner";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export default function isFormValid(formData) {
  if (formData.name.length === 0) {
    toast.error("Please include your name!");
    return false;
  }

  if (!validateEmail(formData.email)) {
    toast.error("Please use a valid email address");
    return false;
  }

  if (formData.message.length === 0) {
    toast.error("Please include your message!");
    return false;
  }
  return true;
}

export function isFormFilled(formData) {
  return (
    formData.name.length !== 0 &&
    validateEmail(formData.email) &&
    formData.message.length !== 0
  );
}
