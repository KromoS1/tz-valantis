import { OutlinedInput } from "@mui/material";
import { ChangeEvent, FC, memo } from "react";

type PropsType = {
  name: string;
  placeholder: string;
  value: string | number | undefined;
  type: "text" | "number";
  change: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const CustomInput: FC<PropsType> = memo(
  ({ placeholder, name, value, type, change }) => {
    return (
      <OutlinedInput
        name={name}
        value={value ?? ""}
        type={type}
        placeholder={placeholder}
        onChange={change}
        sx={{ maxWidth: 250, mr: 2 }}
      />
    );
  }
);
