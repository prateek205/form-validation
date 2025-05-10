import { createContext, useState, useContext, useEffect } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    cnfPass: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [msgType, setMsgType] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(formData));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newError = {};

    const emailPattern = /\S+@\S+\.\S+/;

    if (!formData.name.trim()) {
      newError.name = "Name is Required";
    }

    if (!formData.email.trim()) {
      newError.email = "Email is Required";
    } else if (!emailPattern.test(formData.email)) {
      newError.email = "Invalid Email";
    }

    if (!formData.password.trim()) {
      newError.password = "Password is required";
    } else if (formData.password.length < 6) {
      newError.password = "Max length should be 6 Character";
    }

    if (!formData.cnfPass.trim()) {
      newError.cnfPass = "Confirm password is required";
    } else if (formData.password !== formData.cnfPass) {
      newError.cnfPass = "Password doesn't Match";
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.cnfPass.trim()
    ) {
      setSuccessMsg("* All fields are Mandatory");
      setMsgType("error");
    } else {
      setSuccessMsg("Invalid form");
      setMsgType("error");
    }

    setError(newError);

    if (Object.keys(newError).length > 0) {
      setTimeout(() => {
        setError({});
        setSuccessMsg("");
      }, 3000);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate();

    if (valid) {
      setSuccessMsg("Form submitted successfully!!!");
      setMsgType("success");
    }

    localStorage.setItem("formData", JSON.stringify(formData));

    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);

    setFormData(initialState);
  };

  return (
    <FormContext.Provider
      value={{
        error,
        successMsg,
        msgType,
        handleChange,
        handleSubmit,
        formData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
