"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import LeadForm from "@/components/LeadForm";

type EstimateKey = keyof typeof siteConfig.calculator.estimates;

function formatMoney(n: number) {
  return "$" + n.toLocaleString("en-US");
}

export default function Calculator() {
  const inputs = siteConfig.calculator.inputs;
  const [values, setValues] = useState<Record<string, string>>({});

  const allSelected = inputs.every((i) => values[i.id]);

  let estimate: [number, number] | null = null;
  if (allSelected) {
    const { roofSize, material, condition } = values as {
      roofSize: EstimateKey;
      material: string;
      condition: string;
    };
    try {
      estimate = siteConfig.calculator.estimates[roofSize]?.[material]?.[condition] ?? null;
    } catch {
      estimate = null;
    }
  }

  function handleChange(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Inputs */}
      <div className="grid grid-cols-1 gap-5 mb-8">
        {inputs.map((input) => (
          <div key={input.id}>
            <label
              htmlFor={input.id}
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              {input.label}
            </label>
            <select
              id={input.id}
              value={values[input.id] ?? ""}
              onChange={(e) => handleChange(input.id, e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">— Select —</option>
              {input.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Result */}
      {estimate ? (
        <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-6 mb-8 text-center">
          <p className="text-sm text-amber-700 font-medium mb-1">Estimated Cost in {siteConfig.city}</p>
          <p className="text-4xl font-extrabold text-gray-900">
            {formatMoney(estimate[0])} – {formatMoney(estimate[1])}
          </p>
          <p className="text-xs text-gray-500 mt-2">{siteConfig.calculator.laborNote}</p>
        </div>
      ) : (
        <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-6 mb-8 text-center">
          <p className="text-gray-400 text-sm">Select all options above to see your estimate</p>
        </div>
      )}

      {/* Lead form below result */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-1">Get an Accurate Quote</h3>
        <p className="text-sm text-gray-500 mb-4">
          Estimates vary by roof pitch and access. A local roofer will give you an exact number.
        </p>
        <LeadForm source="calculator" prefillService="Roof Replacement" />
      </div>
    </div>
  );
}
