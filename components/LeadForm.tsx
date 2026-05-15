"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/lib/config";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit phone number")
    .regex(/^\D*(\d\D*){10,}$/, "Enter a valid phone number"),
  service: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  compact?: boolean;
  prefillService?: string;
  source?: string;
}

const inputStyle = {
  width: "100%",
  backgroundColor: "var(--bg)",
  border: "1.5px solid var(--border)",
  borderRadius: "var(--radius-md)",
  padding: "10px 12px",
  fontSize: "0.9375rem",
  color: "var(--text)",
  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
  outline: "none",
  transition: "border-color 150ms ease",
};

const labelStyle = {
  display: "block",
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: "var(--text)",
  marginBottom: 4,
  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
};

export default function LeadForm({ compact = false, prefillService, source }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: prefillService },
  });

  async function onSubmit(data: FormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: source ?? "form" }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        style={{
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--success-bg)",
          border: "1.5px solid #86efac",
          padding: "20px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "var(--success)",
            fontWeight: 700,
            fontSize: "1.0625rem",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            marginBottom: 6,
          }}
        >
          Got it — we&apos;ll call you within 30 minutes.
        </p>
        <p
          style={{
            color: "var(--success)",
            fontSize: "0.8125rem",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          }}
        >
          Mon–Sat, 7am–8pm. Submitted after hours? We&apos;ll call first thing
          in the morning.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Name */}
      <div>
        <label htmlFor="lead-name" style={labelStyle}>
          Your Name <span style={{ color: "var(--ember)" }}>*</span>
        </label>
        <input
          id="lead-name"
          type="text"
          autoComplete="name"
          placeholder="John Smith"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "lead-name-error" : undefined}
          {...register("name")}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ember)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? "var(--error)" : "var(--border)")}
        />
        {errors.name && (
          <p
            id="lead-name-error"
            role="alert"
            style={{
              color: "var(--error)",
              fontSize: "0.75rem",
              marginTop: 4,
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            }}
          >
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="lead-phone" style={labelStyle}>
          Phone Number <span style={{ color: "var(--ember)" }}>*</span>
        </label>
        <input
          id="lead-phone"
          type="tel"
          autoComplete="tel"
          placeholder="(209) 555-0100"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "lead-phone-error" : undefined}
          {...register("phone")}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ember)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = errors.phone ? "var(--error)" : "var(--border)")}
        />
        {errors.phone && (
          <p
            id="lead-phone-error"
            role="alert"
            style={{
              color: "var(--error)",
              fontSize: "0.75rem",
              marginTop: 4,
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            }}
          >
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Service (optional) */}
      {!compact && (
        <div>
          <label htmlFor="lead-service" style={labelStyle}>
            Service Needed
          </label>
          <select
            id="lead-service"
            {...register("service")}
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ember)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <option value="">Select a service (optional)</option>
            {siteConfig.services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          width: "100%",
          backgroundColor: status === "sending" ? "var(--ember-hover)" : "var(--ember)",
          color: "#FFFFFF",
          border: "none",
          borderRadius: "var(--radius-md)",
          padding: "13px 16px",
          fontSize: "0.9375rem",
          fontWeight: 700,
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          transition: "background-color 150ms ease, transform 100ms ease",
          opacity: status === "sending" ? 0.7 : 1,
          marginTop: 4,
        }}
        onMouseEnter={(e) => {
          if (status !== "sending")
            e.currentTarget.style.backgroundColor = "var(--ember-hover)";
        }}
        onMouseLeave={(e) => {
          if (status !== "sending")
            e.currentTarget.style.backgroundColor = "var(--ember)";
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {status === "sending" ? "Sending..." : "Get My Free Estimate"}
      </button>

      {/* Error state */}
      {status === "error" && (
        <p
          role="alert"
          style={{
            color: "var(--error)",
            fontSize: "0.8125rem",
            textAlign: "center",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          }}
        >
          Something went wrong. Call us:{" "}
          <a
            href={siteConfig.phoneHref}
            style={{ color: "var(--error)", textDecoration: "underline" }}
          >
            {siteConfig.phone}
          </a>
        </p>
      )}

      {/* Trust row */}
      <p
        style={{
          textAlign: "center",
          color: "var(--muted-light)",
          fontSize: "0.75rem",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          marginTop: 2,
        }}
      >
        No spam &middot; 30-min callback &middot; Free estimate
      </p>
    </form>
  );
}
