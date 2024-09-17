import { Passenger } from "@/types/passenger";
import { useState } from "react";

export const useForm = (initialValues: Passenger) => {
  const [values, setValues] = useState(initialValues);

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  return {
    values,
    ...values,
    handleFieldChange,
  };
};