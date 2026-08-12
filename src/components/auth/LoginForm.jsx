"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Heading, Input, Paragraph } from "../ui";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to API
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8">
        <div className="flex justify-center">
          <Image src="/images/logo.png" alt="Webpoka" width={220} height={70} />
        </div>

        <Heading as={3} className="mt-6 text-center">
          Welcome back
        </Heading>
        <Paragraph className="text-center">Sign in to your account</Paragraph>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="my-4 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button variant="secondary" type="submit" className="w-full justify-center text-center rounded-lg mt-4">
            Log in
          </Button>
        </form>

        <Paragraph className="mt-6 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-primary hover:underline">
            Sign up
          </Link>
        </Paragraph>
      </div>
    </div>
  );
};

export default LoginForm;