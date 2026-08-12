"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Heading, Input, Paragraph } from "../ui";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to API
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary py-6 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8">
        <div className="flex justify-center">
          <Image src="/images/logo.png" alt="Webpoka" width={220} height={70} />
        </div>

        <Heading as={3} className="mt-6 text-center">
          Create an account
        </Heading>
        <Paragraph className="text-center">Join Web Poka today!</Paragraph>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button variant="secondary" type="submit" className="mt-4 w-full justify-center rounded-lg">
            Sign up
          </Button>
        </form>

        <Paragraph className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-primary hover:underline">
            Log in
          </Link>
        </Paragraph>
      </div>
    </div>
  );
};

export default RegisterForm;