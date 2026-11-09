import { useState } from "react";
import type { FormEvent } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";
import { profile } from "../data";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cf274ddc-7fe3-409b-8ae7-aca31d147f7c",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: `${profile.name} portfolio`,
        }),
      });

      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error("Submission was not accepted.");
      }

      setStatus("success");
      setFormData(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__head">
        <span className="mono-label">Send a note</span>
        <p>
          Tell me what you are building, what is stuck, or where you need an
          extra pair of hands.
        </p>
      </div>

      <div className="contact-form__grid">
        <div className="field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="A role, a project, or a question"
          required
          value={formData.subject}
          onChange={(event) => updateField("subject", event.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="A little context helps me reply properly."
          required
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </div>

      <input
        type="checkbox"
        name="botcheck"
        className="contact-form__honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        type="submit"
        className="button button--accent button--full contact-form__submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={17} className="spin" />
            Sending
          </>
        ) : (
          <>
            <Send size={16} />
            Send message
            <ArrowUpRight size={15} />
          </>
        )}
      </button>

      <div className="contact-form__status" aria-live="polite">
        {status === "success" && (
          <div className="form-message form-message--success">
            <CheckCircle2 size={17} />
            <span>
              Message sent. Thanks for reaching out — I&apos;ll reply by email.
            </span>
          </div>
        )}

        {status === "error" && (
          <div className="form-message form-message--error">
            <AlertCircle size={17} />
            <span>
              The form could not send.{" "}
              <a href={`mailto:${profile.email}`}>Email me directly</a> and I
              will pick it up there.
            </span>
          </div>
        )}
      </div>

      <p className="contact-form__note">
        Prefer email? <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
    </form>
  );
}
