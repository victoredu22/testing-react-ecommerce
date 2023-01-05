import { TextField, Typography } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

export interface InputInterface {
  name: string;
  label: string;
  type?: any;
  disabled?: boolean;
  required?: boolean;
}

const Input: React.FC<InputInterface> = ({
  name,
  label = "",
  type,
  disabled = false,
  required = false,
}) => {
  const { register } = useFormContext();

  return (
    <div>
      <TextField
        required={required}
        {...(disabled ? { disabled } : {})}
        type={type}
        id={name}
        label={label}
        variant="outlined"
        {...register(name)}
        /*    {...(trigger ? { onChange: () => trigger && trigger() } : {})} */
        fullWidth
      />
    </div>
  );
};

export default Input;
