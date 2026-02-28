"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "../schema";

export function useContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<ContactFormValues, any, ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      services: [],
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setSubmitError(null);

    try {
      const params = new URLSearchParams();
      params.append("form-name", "contact");
      params.append("bot-field", ""); // honeypot — must be empty for Netlify to accept the submission

      Object.entries(data).forEach(([key, value]) => {
        params.append(key, Array.isArray(value) ? value.join(", ") : (value ?? ""));
      });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      form.reset();
      setShowModal(true);
    } catch {
      setSubmitError("There was an error submitting the form. Please try again.");
    }
  });

  return {
    form,
    showModal,
    setShowModal,
    onSubmit,
    submitError,
    isSubmitting: form.formState.isSubmitting,
  };
}
