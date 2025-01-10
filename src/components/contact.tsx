"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ValidationError } from "@formspree/react";
import { useForm as useReactFormHook } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { ContactFormSchema } from "@/lib/schemas";

export default function ContactForm() {
  const [formState, handleSubmit] = useForm("mdkkykwp");

  const form = useReactFormHook<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  if (formState.succeeded) {
    return (
      <section className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold">Message sent!</h2>
        <p className="text-center">
          Thank you for reaching out. I will get back to you as soon as
          possible.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-background/95 rounded-xl flex flex-col items-center mx-auto w-[60vw] p-5">
      <h2 className="text-2xl font-semibold">Share your vision!</h2>
      <Form {...form}>
        <form
          id="contact"
          className="w-full m-10 flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input id="name" placeholder="Name" type="text" {...field} />
                </FormControl>
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={formState.errors}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="Email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={formState.errors}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="min-h-20"
                    placeholder="Enter a message..."
                    id="message"
                    {...field}
                  />
                </FormControl>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={formState.errors}
                />
              </FormItem>
            )}
          />
          <Button disabled={formState.submitting} type="submit">
            {formState.submitting ? <>Sending...</> : <>Send</>}
          </Button>
        </form>
      </Form>
    </section>
  );
}
