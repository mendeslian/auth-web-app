import { useForm, FormProvider } from "react-hook-form";
// import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import AuthForm from "../../components/AuthForm";

import { login } from "../../services/authService";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [forgetPassword, setForgetPassword] = useState(false);
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const { mutate: loginMutation, status: loginStatus } = useMutation({
    mutationFn: (authData) => {
      return login(authData.email, authData.password);
    },
    onSuccess: (response) => {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch({ type: "user/setUser", payload: response.data.user });
      navigate("/");
      reset();
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Unexpected error. Try again";
      toast.error(errorMessage);
      console.error("Login error:", error);
    },
  });

  const submitLogin = handleSubmit(async (formData) => {
    const authData = {
      email: formData.email,
      password: formData.password,
    };

    loginMutation(authData);
  });

  return (
    <section className="w-full h-full flex flex-col justify-center items-center  ">
      <div className="w-full h-full flex flex-col justify-center items-center gap-[32px] bg-white drop-shadow-2xl duration-200 p-[32px] sm:w-[400px] sm:h-[500px] sm:rounded-md">
        <div className="w-full text-neutral-900">
          <h1 className="text-xl font-medium">
            {/* {forgetPassword ? "Forgot your password?" : "Welcome back"} */}
            Welcome back
          </h1>
          <h2 className="text-2xl font-medium">
            {/* {forgetPassword
              ? "Fill the field with your email"
              : "Access your account"} */}
            Access your account
          </h2>
        </div>

        <FormProvider {...methods}>
          <AuthForm
            // isRecovery={forgetPassword}
            onSubmit={submitLogin}
            isLoading={loginStatus === "pending"}
            // toggleForm={() => setForgetPassword(!forgetPassword)}
          />
        </FormProvider>

        <div className="flex gap-1 justify-center items-center">
          <p className="text-sm text-neutral-900">Don't have an account?</p>
          <span
            className="cursor-pointer text-sm text-neutral-900 duration-200 hover:font-semibold"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </span>
        </div>
      </div>
    </section>
  );
}
