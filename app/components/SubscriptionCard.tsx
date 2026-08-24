"use client";

import { useState, FormEvent } from "react";

type SubmissionState = "idle" | "loading" | "success" | "already_subscribed" | "error";

export function SubscriptionCard() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [college, setCollege] = useState("");
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const [state, setState] = useState<SubmissionState>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const normalized = email.trim().toLowerCase();

    // Client-side quick email validation
    if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      setState("error");
      setFeedbackMessage("Please enter a valid email address.");
      return;
    }

    setState("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalized,
          name: name.trim() || undefined,
          whatsapp: whatsapp.trim() || undefined,
          branch: branch.trim() || undefined,
          year: year.trim() || undefined,
          college: college.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (data.status === "already_subscribed") {
          setState("already_subscribed");
          setFeedbackMessage(data.message || "You're already on the list.");
        } else {
          setState("success");
          setFeedbackMessage(data.message || "You're in. We'll keep you updated.");
          setEmail("");
          setName("");
          setWhatsapp("");
          setBranch("");
          setYear("");
          setCollege("");
        }
      } else {
        setState("error");
        setFeedbackMessage(data.error || "Please enter a valid email address.");
      }
    } catch (error) {
      console.error("[Subscription Form Error]", error);
      setState("error");
      setFeedbackMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section aria-label="Subscribe to AIML Club OCT updates" className="animate-fade-up delay-300">
      <div className="card p-5 sm:p-6 flex flex-col gap-4 border border-[rgba(var(--border-default))] bg-[rgba(var(--bg-surface),0.9)] relative overflow-hidden">
        {/* Ambient Lime-Cyan Glow accent */}
        <div
          className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[rgba(var(--accent-lime),0.10)] blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col gap-3.5">
          {/* Header row: Icon & Tag */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-[rgba(var(--accent-lime-glow))] border border-[rgba(var(--border-accent))]"
                aria-hidden="true"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(var(--accent-lime-bright))"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-[rgb(var(--text-secondary))]">
                Official Newsletter
              </span>
            </div>

            <span className="text-[10px] font-mono text-[rgb(var(--text-muted))]">
              Free Updates
            </span>
          </div>

          {/* Title & Copy */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[rgb(var(--text-primary))]">
              Stay in the loop.
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[rgb(var(--text-secondary))]">
              Get important AIML Club OCT updates, events, workshops, opportunities and announcements straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 pt-1" noValidate>
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state === "error") {
                      setState("idle");
                      setFeedbackMessage("");
                    }
                  }}
                  placeholder="Your Email Address *"
                  disabled={state === "loading"}
                  required
                  aria-label="Enter your email address for AIML Club OCT updates"
                  className="w-full h-11 px-4 text-xs sm:text-sm rounded-xl bg-[rgba(var(--bg-input))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-muted))] focus:outline-none focus:border-[rgb(var(--accent-lime-bright))] focus:ring-1 focus:ring-[rgb(var(--accent-lime-bright))] transition-all duration-200 disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={state === "loading"}
                className="h-11 px-6 text-xs sm:text-sm font-extrabold rounded-xl bg-[linear-gradient(135deg,rgb(var(--accent-lime-bright)),rgb(var(--accent-cyan)))] text-black hover:opacity-95 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 shadow-sm flex-shrink-0"
              >
                {state === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Optional Details Expander Toggle */}
            <div>
              <button
                type="button"
                onClick={() => setShowOptionalFields(!showOptionalFields)}
                className="text-[11px] font-bold text-[rgb(var(--accent-cyan))] hover:underline flex items-center gap-1 transition-all"
              >
                <span>{showOptionalFields ? "− Hide Optional Details" : "+ Add Optional Details (Name, WhatsApp, Branch, Year, College)"}</span>
              </button>
            </div>

            {/* Optional Fields Container */}
            {showOptionalFields && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 rounded-xl bg-[rgba(var(--bg-card),0.5)] border border-[rgba(var(--border-default))] animate-fade-in">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase text-[rgb(var(--text-muted))] mb-1">
                    Full Name <span className="font-normal lowercase opacity-70">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Umesh Kumar"
                    disabled={state === "loading"}
                    className="w-full h-9 px-3 text-xs rounded-lg bg-[rgba(var(--bg-input))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-muted))] focus:outline-none focus:border-[rgb(var(--accent-cyan))]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase text-[rgb(var(--text-muted))] mb-1">
                    WhatsApp No. <span className="font-normal lowercase opacity-70">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="e.g. +91 9876543210"
                    disabled={state === "loading"}
                    className="w-full h-9 px-3 text-xs rounded-lg bg-[rgba(var(--bg-input))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-muted))] focus:outline-none focus:border-[rgb(var(--accent-cyan))]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase text-[rgb(var(--text-muted))] mb-1">
                    Branch <span className="font-normal lowercase opacity-70">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    placeholder="e.g. AIML, CSE, IT"
                    disabled={state === "loading"}
                    className="w-full h-9 px-3 text-xs rounded-lg bg-[rgba(var(--bg-input))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-muted))] focus:outline-none focus:border-[rgb(var(--accent-cyan))]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase text-[rgb(var(--text-muted))] mb-1">
                    Year <span className="font-normal lowercase opacity-70">(optional)</span>
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    disabled={state === "loading"}
                    className="w-full h-9 px-3 text-xs rounded-lg bg-[rgba(var(--bg-input))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-primary))] focus:outline-none focus:border-[rgb(var(--accent-cyan))]"
                  >
                    <option value="">Select Year (Optional)</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Alumni / Other">Alumni / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase text-[rgb(var(--text-muted))] mb-1">
                    College <span className="font-normal lowercase opacity-70">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="e.g. OCT Bhopal"
                    disabled={state === "loading"}
                    className="w-full h-9 px-3 text-xs rounded-lg bg-[rgba(var(--bg-input))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-muted))] focus:outline-none focus:border-[rgb(var(--accent-cyan))]"
                  />
                </div>
              </div>
            )}

            {/* Dynamic Status Feedback Banner */}
            {state !== "idle" && state !== "loading" && feedbackMessage && (
              <div
                role="status"
                aria-live="polite"
                className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all animate-fade-in ${
                  state === "success"
                    ? "bg-[rgba(132,204,22,0.15)] border border-[rgba(132,204,22,0.35)] text-[rgb(var(--accent-lime-bright))]"
                    : state === "already_subscribed"
                    ? "bg-[rgba(34,211,238,0.15)] border border-[rgba(34,211,238,0.35)] text-[rgb(var(--accent-cyan))]"
                    : "bg-[rgba(239,68,68,0.15)] border border-[rgba(239,68,68,0.35)] text-red-400"
                }`}
              >
                {state === "success" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
                {state === "already_subscribed" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                )}
                {state === "error" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                )}
                <span>{feedbackMessage}</span>
              </div>
            )}

            {/* Privacy Disclaimer Note */}
            <p className="text-[11px] text-[rgb(var(--text-muted))] leading-normal pt-0.5">
              By subscribing, you agree to receive updates from AIML Club OCT. You can unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
