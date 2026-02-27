interface SuccessModalProps {
  onClose: () => void;
}

export function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-100 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-background rounded-lg shadow-2xl max-w-md w-full p-8 md:p-10 animate-in zoom-in duration-300"
      >
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

        <h3 className="text-2xl font-bold text-center mb-3">Thank You!</h3>
        <p className="text-foreground/70 text-center mb-8 leading-relaxed">
          Your message has been received. We&apos;ll get back to you shortly to
          discuss your landscape project.
        </p>

        <button
          onClick={onClose}
          className="w-full px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium tracking-wide"
        >
          Close
        </button>
      </div>
    </div>
  );
}
