"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div>
      <div className="bg-white px-7 py-12 md:p-16 w-75 md:w-md mx-auto rounded-xl">
        <h3 className="text-[32px] font-semibold text-[#151D1D] mb-8 md:mb-16">Login</h3>
        <Form className="">
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
            <Label className="text-[#3E4947] font-medium text-[14px]">Email</Label>
            <Input className="bg-[#ECF5F4] shadow-none border border-[#92F0E4]  md:p-3.5" placeholder="john@example.com" />
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
            <Label className="text-[#3E4947] font-medium text-[14px]">Password</Label>
            <Input className="bg-[#ECF5F4] shadow-none border border-[#92F0E4]  md:p-3.5" placeholder="Enter your password" />
            <FieldError />
          </TextField>
          <div >
            <Button className="w-full bg-[#C64728] rounded-xl text-white" type="submit">
              Sign In
            </Button>
          </div>
        </Form>

          <div className=" flex items-center justify-center gap-5 text-[12px] font-semibold mt-8 md:mt-16 text-[#BDC9C6]">
             <Separator className="w-10 md:w-14"  />
             <p>OR CONTINUE WITH</p>  
              <Separator className="w-10 md:w-14 "  />  
          </div>

          <Button className=" text-[#3E4947] mt-8 md:mt-16 w-full rounded-xl bg-transparent border border-[#BDC9C6] flex items-center gap-2"><FcGoogle />Continue With Google</Button>

          <p className="mt-8 md:mt-16 text-[#3E4947] text-center">Dont have an account ?  <span className="text-[14px] font-bold text-[#00655C]">Register</span></p>
      </div>
    </div>
  );
};

export default LoginPage;
