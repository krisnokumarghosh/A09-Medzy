"use client";

import { authClient } from "@/lib/auth-client";
import { errorToast, successToast } from "@/lib/toasts";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LoginComponent = () => {
  const handleLogIn = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      successToast("Login Successfull");
      redirect("/");
    } else {
      errorToast(error.message);
    }
  };

  const handleGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="container  mx-auto grid lg:grid-cols-2 justify-items-center items-center">
      <div>
        <h1 className=" text-[27px] md:text-[48px] font-bold text-[#00655C] w-70 md:w-136 mx-auto">
          Welcome back to your{" "}
          <span className="text-[#A42F11]">Renewed Vitality</span> journey.
        </h1>
        <p className="text-[14px] md:text-[18px] text-[#3E4947] w-70 md:w-136 mt-6 mx-auto ">
          Your appointments and health records are waiting. Sign in to continue.
        </p>
      </div>

      <div className="bg-white px-7 py-12 md:p-16 w-75 md:w-md mx-auto rounded-xl mt-10 lg:mt-0 shadow-lg shadow-[#008075]/30">
        <h3 className="text-[32px] font-semibold text-[#151D1D] mb-8 md:mb-16">
          Login
        </h3>
        <Form onSubmit={handleLogIn}>
          <TextField
            isRequired
            name="email"
            type="email"
            className="mb-6"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-[#3E4947] font-medium text-[14px]">
              Email
            </Label>
            <Input
              className="bg-[#ECF5F4] shadow-none border border-[#92F0E4]  md:p-3.5 focus:ring-[#00655C] focus:border-none"
              placeholder="john@example.com"
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="mb-6"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-[#3E4947] font-medium text-[14px]">
              Password
            </Label>
            <Input
              className="bg-[#ECF5F4] shadow-none border border-[#92F0E4]  md:p-3.5 focus:ring-[#00655C] focus:border-none"
              placeholder="Enter your password"
            />
            <FieldError />
          </TextField>
          <div>
            <Button
              className="w-full bg-[#C64728] rounded-xl text-white"
              type="submit"
            >
              Log In
            </Button>
          </div>
        </Form>

        <div className=" flex items-center justify-center gap-5 text-[12px] font-semibold mt-8 md:mt-16 text-[#BDC9C6]">
          <Separator className="w-10 md:w-14" />
          <p>OR CONTINUE WITH</p>
          <Separator className="w-10 md:w-14 " />
        </div>

        <Button
          onClick={handleGoogle}
          className=" text-[#3E4947] mt-8 md:mt-16 w-full rounded-xl bg-transparent border border-[#BDC9C6] flex items-center gap-2"
        >
          <FcGoogle />
          Continue With Google
        </Button>

        <p className="mt-8 md:mt-16 text-[#3E4947] text-center">
          Dont have an account ?{" "}
          <Link href={"/register"}>
            <span className=" font-bold text-[#00655C]">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
