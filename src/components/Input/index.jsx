import { useFormContext } from "react-hook-form";
import { useState } from "react";
import Icon from "../icon";

export default function Input({
  name = "",
  label = "",
  required = false,
  type = "text",
  placeholder = "",
  pattern = null,
  ...rest
}) {
  const [inputType, setInputType] = useState(type);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full flex flex-col gap-[4px]">
      <p className="text-sm text-neutral-900 font-medium capitalize">{label}</p>
      <div className="w-full h-[40px] flex justify-center items-center gap-[8px] bg-neutral-100 rounded-sm px-[12px] relative">
        <input
          className="w-full h-full text-neutral-900 text-sm font-normal"
          {...register(name, {
            required,
            ...(pattern && { pattern }),
          })}
          {...rest}
          type={inputType}
          placeholder={placeholder}
        />

        {type === "password" && (
          <button
            onClick={() =>
              setInputType((prev) =>
                prev === "password" ? "text" : "password"
              )
            }
            type="button"
            className="cursor-pointer flex justify-center items-center"
            title={inputType === "password" ? "Show" : "Hide"}
          >
            {inputType === "text" ? (
              <Icon icon="EyeOff" color="black" size={20} />
            ) : (
              <Icon icon="Eye" color="black" size={20} />
            )}
          </button>
        )}
      </div>
      {errors[name] && (
        <span className="text-red-500 text-sm">
          {errors[name].message || "This field is invalid"}
        </span>
      )}
    </div>
  );
}
