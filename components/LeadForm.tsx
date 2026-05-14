"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/lib/config";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  phone: z.string().min(10, "Valid phone number required"),
  service: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  compact?: boolean;
  prefillService?: string;
  source?: string;
}

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
      <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
        <p className="text-green-800 font-semibold text-lg">Got it &mdash; we&apos;ll call you shortly.</p>
        <p className="text-green-700 text-sm mt-1">
          Most callbacks happen within 2 hours during business hours.
        </p>

      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="John Smith"
          {...register("name")}
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(209) 555-0100"
          {...register("phone")}
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      {!compact && (
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Needed
          </label>
          <select
            id="service"
            {...register("service")}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">— Select a service —</option>
            {siteConfig.services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded py-3 px-4 text-sm font-bold tracking-wide text-white transition-colors disabled:opacity-60"
        style={{ backgroundColor: "oklch(72% 0.18 65)" }}
      >
        {status === "sending" ? "Sending..." : "Get a Free Estimate"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-xs text-center">
          Something went wrong. Call us directly:{" "}
          <a href={siteConfig.phoneHref} className="underline">
            {siteConfig.phone}
          </a>
        </p>
      )}
    </form>
  );
}
