import React from "react";
import { Input } from "@nextui-org/react";
import Layout from "@/components/layout/page";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Layout>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="email" label="Email" />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="password" label="Password" />
        </div>
        <Button className=" mt-2" color="success">
          SignIn
        </Button>
        <Link className=" block mt-2" href="/register">
          Don't have an account?SignUp
        </Link>
      </Layout>
    </>
  );
}
