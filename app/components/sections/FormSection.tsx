"use client";

import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
}

export function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true; // Optional field
    const re = /^[\d\s+()-]+$/;
    return re.test(phone) && phone.replace(/\D/g, "").length >= 7;
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim().length < 2
          ? "Name must be at least 2 characters"
          : "";
      case "email":
        if (!value.trim()) return "Email is required";
        return !validateEmail(value)
          ? "Please enter a valid email address"
          : "";
      case "phone":
        return !validatePhone(value) ? "Please enter a valid phone number" : "";
      default:
        return "";
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };

    // Mark all as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
    });

    // Check if there are errors
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setShowModal(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      service: "",
      message: "",
    });
    setErrors({});
    setTouched({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (touched[name] && errors[name as keyof FormErrors]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const maxMessageLength = 500;
  const messageLength = formData.message.length;

  return (
    <section className="py-10 px-4 bg-background">
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
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Name */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <label className="text-foreground/80 font-medium md:w-48 shrink-0 pt-3">
                  Name*
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    required
                    className={`w-full px-0 py-3 bg-transparent border-b-2 outline-none transition-all text-foreground placeholder:text-foreground/30 ${
                      touched.name && errors.name
                        ? "border-red-500 focus:border-red-600"
                        : "border-foreground/20 focus:border-foreground/60"
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <label className="text-foreground/80 font-medium md:w-48 shrink-0 pt-3">
                  Email*
                </label>
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    required
                    className={`w-full px-0 py-3 bg-transparent border-b-2 outline-none transition-all text-foreground placeholder:text-foreground/30 ${
                      touched.email && errors.email
                        ? "border-red-500 focus:border-red-600"
                        : "border-foreground/20 focus:border-foreground/60"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <label className="text-foreground/80 font-medium md:w-48 shrink-0 pt-3">
                  Contact Number
                </label>
                <div className="flex-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+353 00 000 0000"
                    className={`w-full px-0 py-3 bg-transparent border-b-2 outline-none transition-all text-foreground placeholder:text-foreground/30 ${
                      touched.phone && errors.phone
                        ? "border-red-500 focus:border-red-600"
                        : "border-foreground/20 focus:border-foreground/60"
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <label className="text-foreground/80 font-medium md:w-48 shrink-0">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Dublin, Ireland"
                  className="flex-1 px-0 py-3 bg-transparent border-b-2 border-foreground/20 focus:border-foreground/60 outline-none transition-all text-foreground placeholder:text-foreground/30"
                />
              </div>

              {/* Service Interest */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <label className="text-foreground/80 font-medium md:w-48 shrink-0">
                  What service are you interested in?
                </label>
                <div className="flex-1 flex flex-wrap gap-4">
                  {[
                    "Bespoke Garden Room",
                    "Softscaping",
                    "Hardscaping",
                    "Maintenance",
                    "Planting",
                    "Other",
                  ].map((service) => (
                    <label
                      key={service}
                      className="relative flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service}
                        checked={formData.service === service}
                        onChange={handleChange}
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 rounded-full border-2 border-foreground/30 peer-checked:border-green-600 peer-checked:bg-green-600 transition-all flex items-center justify-center group-hover:border-foreground/50">
                        {formData.service === service && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="text-foreground/80 group-hover:text-foreground transition-colors select-none">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <label className="text-foreground/80 font-medium md:w-48 shrink-0 pt-1">
                  Tell us more about your project
                </label>
                <div className="flex-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={maxMessageLength}
                    rows={6}
                    placeholder="Describe your vision, project scope, timeline..."
                    className="w-full px-4 py-4 bg-transparent border-2 border-foreground/20 rounded-lg focus:border-foreground/60 outline-none transition-all text-foreground resize-none placeholder:text-foreground/30"
                  />
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-foreground/50">
                      Optional - Help us understand your needs better
                    </p>
                    <p
                      className={`text-xs ${
                        messageLength > maxMessageLength * 0.9
                          ? "text-amber-600"
                          : "text-foreground/50"
                      }`}
                    >
                      {messageLength}/{maxMessageLength}
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-48 shrink-0"></div>
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
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
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

        {/* Success Modal */}
        {showModal && (
          <div
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-100 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-lg shadow-2xl max-w-md w-full p-8 md:p-10 animate-in zoom-in duration-300"
            >
              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Message */}
              <h3 className="text-2xl font-bold text-center mb-3">
                Thank You!
              </h3>
              <p className="text-foreground/70 text-center mb-8 leading-relaxed">
                Your message has been received. We'll get back to you shortly to
                discuss your landscape project.
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="w-full px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium tracking-wide"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
