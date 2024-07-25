"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "@/components/CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Separator } from "./ui/separator";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gab-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1 ">
          <Image
            src="/icons/logo.svg"
            width={40}
            height={40}
            alt="Money da Vinci logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Money da Vinci
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {" "}
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink*/}</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {type === "sign-up" && (
              <>
                <CustomInput
                  control={form.control}
                  name="firstname"
                  label="First Name"
                  placeholder="Enter your first name"
                />
                <CustomInput
                  control={form.control}
                  name="lastname"
                  label="Last Name"
                  placeholder="Enter your last name"
                />
                <CustomInput
                  control={form.control}
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                />
                <CustomInput
                  control={form.control}
                  name="country"
                  label="Country"
                  placeholder="Ex. USA"
                />
              </>
            )}
            ;
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email address"
            />
            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            <>
              <CustomInput
                control={form.control}
                name="password"
                label="Confirm Password"
                placeholder="confirm your password"
              />
            </>
            <div className="flex flex-col gap-4">
              <Button type="submit" disabled={isLoading} className="form-btn">
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spine" /> &nbsp;
                    Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>
        </Form>
      )}
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "sign-in"
            ? "Don’t have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="form-link"
        >
          {type === "sign-in" ? "Sign Up" : "Sign In"}
        </Link>
      </footer>
      <article>
        {/**continue with google and facebook authentication */}
        <div className="flex justify-between items-center">
          <div>
            &nbsp; <span className="text-gray-400"> or continue with </span>
            <div>&nbsp;</div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AuthForm;
