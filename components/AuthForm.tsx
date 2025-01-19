"use client";
import React from "react";
import { DefaultValues, Field, useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{success: boolean, error?: string}>;
  type: "SIGN_IN" | "SIGN_UP";  
}

const AuthForm <T extends FieldValues>({ type, schema, defaultValues, onSubmit }: Props<T>) => {
  // 1. Define the form 
  const form: UseFormReturn<T> = useForm(props: {
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) =>{};

  return <div>AuthForm -- {type}</div>

  // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values)
//   }
}

export default AuthForm;
