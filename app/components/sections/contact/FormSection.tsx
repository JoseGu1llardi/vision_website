"use client";

import { useContactForm } from "./hooks/useContactForm";
import { FormField } from "./components/FormField";
import { ServiceSelector } from "./components/ServiceSelector";
import { SuccessModal } from "./components/SuccessModal";
import { MAX_MESSAGE_LENGTH } from "./constants";

export function FormSection() {
  const { form, showModal, setShowModal, onSubmit, submitError, isSubmitting } =
    useContactForm();

  const {
    register,
    control,
    watch,
    formState: { errors },
  } = form;

  const messageLength = (watch("message") ?? "").length;

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-widest text-foreground/60 font-medium uppercase">
              Get in Touch
            </span>
            <div className="h-px bg-foreground/20 mt-2 w-16 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-foreground/2 rounded-lg p-10 md:p-12 border border-foreground/10">
            <form
              onSubmit={onSubmit}
              className="space-y-8"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: "none" }}>
                <input name="bot-field" />
              </div>

              <FormField
                label="Name"
                htmlFor="name"
                required
                error={errors.name?.message}
              >
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                  className={`w-full px-0 py-3 bg-transparent border-b-2 outline-none transition-all text-foreground placeholder:text-foreground/30 ${
                    errors.name
                      ? "border-red-500 focus:border-red-600"
                      : "border-foreground/20 focus:border-foreground/60"
                  }`}
                />
              </FormField>

              <FormField
                label="Email"
                htmlFor="email"
                required
                error={errors.email?.message}
              >
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className={`w-full px-0 py-3 bg-transparent border-b-2 outline-none transition-all text-foreground placeholder:text-foreground/30 ${
                    errors.email
                      ? "border-red-500 focus:border-red-600"
                      : "border-foreground/20 focus:border-foreground/60"
                  }`}
                />
              </FormField>

              <FormField
                label="Contact Number"
                htmlFor="phone"
                error={errors.phone?.message}
              >
                <input
                  id="phone"
                  type="tel"
                  placeholder="+353 00 000 0000"
                  {...register("phone")}
                  className={`w-full px-0 py-3 bg-transparent border-b-2 outline-none transition-all text-foreground placeholder:text-foreground/30 ${
                    errors.phone
                      ? "border-red-500 focus:border-red-600"
                      : "border-foreground/20 focus:border-foreground/60"
                  }`}
                />
              </FormField>

              <FormField label="Location" htmlFor="location" align="center">
                <input
                  id="location"
                  type="text"
                  placeholder="Dublin, Ireland"
                  {...register("location")}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-foreground/20 focus:border-foreground/60 outline-none transition-all text-foreground placeholder:text-foreground/30"
                />
              </FormField>

              <ServiceSelector control={control} />

              <FormField
                label="Tell us more about your project"
                htmlFor="message"
                error={errors.message?.message}
              >
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Describe your vision, project scope, timeline..."
                  maxLength={MAX_MESSAGE_LENGTH}
                  {...register("message")}
                  className="w-full px-4 py-4 bg-transparent border-2 border-foreground/20 rounded-lg focus:border-foreground/60 outline-none transition-all text-foreground resize-none placeholder:text-foreground/30"
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-foreground/50">
                    Design - We do not do in-house Landscape design, but we will
                    put you in touch with are Landscape partners.
                  </p>
                  <p
                    className={`text-xs shrink-0 ml-4 ${
                      messageLength > MAX_MESSAGE_LENGTH * 0.9
                        ? "text-amber-600"
                        : "text-foreground/50"
                    }`}
                  >
                    {messageLength}/{MAX_MESSAGE_LENGTH}
                  </p>
                </div>
              </FormField>

              {submitError && (
                <p className="text-red-500 text-sm text-center">{submitError}</p>
              )}

              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-48 shrink-0" />
                <div className="flex-1 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-4 bg-foreground text-background rounded-lg hover:bg-green-600 disabled:bg-foreground/50 disabled:cursor-not-allowed transition-all font-medium tracking-wide hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
}
