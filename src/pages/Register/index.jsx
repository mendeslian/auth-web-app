import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import RegisterForm from "../../components/RegisterForm";

import { register } from "../../services/authService";

export default function Register() {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const { mutate: registerMutation, status: registerStatus } = useMutation({
    mutationFn: (userData) => register(userData),
    onSuccess: () => {
      toast.success("User registered with success");
      navigate("/login");
      reset();
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Unexpected error. Try again";
      toast.error(errorMessage);
      console.error("Registration error:", error);
    },
  });

  const submitForm = handleSubmit(async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match");
      return;
    }
    const userData = {
      fullName: formData.name,
      email: formData.email,
      password: formData.password,
      username: formData.username,
    };

    registerMutation(userData);
  });

  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-neutral-900">
      <div className="w-full h-full flex flex-col justify-center items-center gap-[32px] bg-white drop-shadow-2xl duration-200 p-[32px] md:w-[600px] md:h-auto md:rounded-md">
        <div className="w-full text-neutral-900">
          <h1 className="text-xl font-medium">Hello, welcome</h1>
          <h2 className="text-2xl font-medium">
            Finish your registration on the platform
          </h2>
        </div>
        <FormProvider {...methods}>
          <RegisterForm
            onSubmit={submitForm}
            isLoading={registerStatus === "pending"}
          />
        </FormProvider>
        <div className="flex gap-1 justify-center items-center">
          <p className="text-sm text-neutral-900">Already have an account?</p>
          <span
            className="cursor-pointer text-sm text-neutral-900 duration-200 hover:font-semibold"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        </div>
      </div>
    </section>
  );
}
