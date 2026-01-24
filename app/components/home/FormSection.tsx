"use client";

import { useState } from "react";

export function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-2 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-widest text-foreground/60 font-medium uppercase">
              Get in Touch
            </span>
            <div className="h-px bg-foreground/20 mt-2 w-16 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Ready to transform your outdoor space? Let's discuss your vision and
            bring your dream landscape to life.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-foreground/2 rounded-lg p-10 md:p-12 border border-foreground/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <label className="text-foreground/70 font-medium md:w-48 shrink-0">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="flex-1 px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground/50 outline-none transition-colors text-foreground"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <label className="text-foreground/70 font-medium md:w-48 shrink-0">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="flex-1 px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground/50 outline-none transition-colors text-foreground"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <label className="text-foreground/70 font-medium md:w-48 shrink-0">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground/50 outline-none transition-colors text-foreground"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <label className="text-foreground/70 font-medium md:w-48 shrink-0">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="flex-1 px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground/50 outline-none transition-colors text-foreground"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <label className="text-foreground/70 font-medium md:w-48 shrink-0">
                  What service are you interested in?
                </label>
                <div className="flex-1 flex flex-wrap gap-6">
                  {["Design", "Collection", "Planting", "Other"].map(
                    (service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={handleChange}
                          className="w-4 h-4 accent-foreground"
                        />
                        <span className="text-foreground/70 group-hover:text-foreground transition-colors">
                          {service}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <label className="text-foreground/70 font-medium md:w-48 shrink-0 pt-1">
                  Tell us more about your project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="flex-1 px-4 py-4 bg-transparent border border-foreground/20 rounded-lg focus:border-foreground/50 outline-none transition-colors text-foreground resize-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-48 shrink-0"></div>
                <div className="flex-1 flex justify-end">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-12 py-4 bg-foreground text-background rounded-lg hover:bg-green-600 transition-all font-medium tracking-wide hover:shadow-lg"
                  >
                    Send Message
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
