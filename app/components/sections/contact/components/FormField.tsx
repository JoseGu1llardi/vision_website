interface FormFieldProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  align?: "start" | "center";
  children: React.ReactNode;
}

export function FormField({
  label,
  htmlFor,
  required = false,
  error,
  align = "start",
  children,
}: FormFieldProps) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
        align === "start" ? "md:items-start" : "md:items-center"
      }`}
    >
      <label
        htmlFor={htmlFor}
        className={`text-foreground/80 font-medium md:w-48 shrink-0 ${
          align === "start" ? "pt-3" : ""
        }`}
      >
        {label}
        {required && "*"}
      </label>

      <div className="flex-1">
        {children}

        {error && (
          <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
            <svg
              className="w-4 h-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
