"use client";
import React from "react";
import { useFormik } from "formik";
import Layot from "@/components/layout/page";
import { Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const registerUser = async (values) => {
    const res = await fetch("http://localhost:5000/register/", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (res.status == 200) {
      router.push("/login");
    }
    toast(data.msg);
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      registerUser(values);
    },
  });
  return (
    <Layot>
      <h2 className="text-center text-2xl font-bold mt-5 mb-3">
        Create an account
      </h2>
      <div className="relative flex flex-col w-1/2 mx-auto text-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="relative flex w-full flex-wrap mb-2 md:flex-nowrap gap-4">
            <Input
              type="text"
              label="User Name"
              id="userName"
              name="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.userName && formik.errors.userName && (
              <p className="error-message absolute left-full text-red-500 text-sm">
                {formik.errors.userName}
              </p>
            )}
          </div>
          <div className="relative flex w-full flex-wrap mb-2 md:flex-nowrap gap-4">
            <Input
              type="email"
              label="Email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="error-message absolute left-full text-red-500 text-sm">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="relative flex w-full flex-wrap mb-2 md:flex-nowrap gap-4">
            <Input
              type="password"
              label="Password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="error-message absolute left-full text-red-500 text-sm">
                {formik.errors.password}
              </p>
            )}
          </div>
          <div className="relative flex w-full flex-wrap mb-2 md:flex-nowrap gap-4">
            <Input
              type="text"
              label="Role"
              id="role"
              name="role"
              onChange={formik.handleChange}
              value={formik.values.role}
              onBlur={formik.handleBlur}
            />
            {/* Display any role-specific error here if needed */}
          </div>
          <button className="bg-green-200 px-4 py-3 rounded-xl" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layot>
  );
};

export default SignupForm;
