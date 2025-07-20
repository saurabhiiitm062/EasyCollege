// app/(auth)/register/page.tsx

"use client";

import React, { useState } from "react";    
import { useAppDispatch } from "../../../lib/hooks";
import { registerUser } from "@/features/auth/authSlice";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rank: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#01024D]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-black p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Create an Account</h2>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />
        </div>
        <div>
          <Label htmlFor="rank">Enter Your Rank</Label>
          <Input
            id="rank"
            type="text"
            name="rank"
            value={form.rank}
            onChange={handleChange}
            placeholder="Enter Your Rank"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Register
        </Button>

        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
