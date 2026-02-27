import { Controller, UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "../schema";
import { SERVICE_OPTIONS } from "../constants";

interface ServiceSelectorProps {
  control: UseFormReturn<ContactFormValues>["control"];
}

export function ServiceSelector({ control }: ServiceSelectorProps) {
  return (
    <Controller
      name="services"
      control={control}
      render={({ field }) => (
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <label className="text-foreground/80 font-medium md:w-48 shrink-0">
            What service are you interested in?
          </label>
          <div className="flex-1 flex flex-wrap gap-4">
            {SERVICE_OPTIONS.map((service) => {
              const isChecked = field.value.includes(service);
              return (
                <label
                  key={service}
                  className="relative flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {
                      const next = isChecked
                        ? field.value.filter((s) => s !== service)
                        : [...field.value, service];
                      field.onChange(next);
                    }}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 rounded border-2 border-foreground/30 peer-checked:border-green-600 peer-checked:bg-green-600 transition-all flex items-center justify-center group-hover:border-foreground/50">
                    {isChecked && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors select-none">
                    {service}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    />
  );
}
