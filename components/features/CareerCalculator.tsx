"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const services = [
    { id: "cv", name: "Professional CV", price: 50000 },
    { id: "letter", name: "Cover Letter", price: 30000 },
    { id: "full", name: "Full App Support", price: 100000 },
];

export function CareerCalculator() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleService = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const total = selected.reduce((acc, id) => {
        const service = services.find((s) => s.id === id);
        return acc + (service ? service.price : 0);
    }, 0);

    return (
        <div className="bg-brand-card border border-slate-800 p-8 rounded-xl">
            <h3 className="font-mono text-xl font-bold text-white mb-6">Package Estimator</h3>
            <div className="space-y-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={cn(
                            "flex items-center justify-between p-4 border rounded cursor-pointer transition-all",
                            selected.includes(service.id)
                                ? "border-brand-green bg-brand-green/10"
                                : "border-slate-700 bg-slate-900/50 hover:border-brand-green/50"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={cn(
                                    "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                                    selected.includes(service.id)
                                        ? "bg-brand-green border-brand-green"
                                        : "border-slate-500"
                                )}
                            >
                                {selected.includes(service.id) && <CheckCircle weight="fill" className="text-white text-xs" />}
                            </div>
                            <span className="font-bold text-white">{service.name}</span>
                        </div>
                        <span className="text-brand-green font-mono">₦{service.price.toLocaleString()}</span>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-between items-center bg-black p-4 rounded border border-slate-800">
                <span className="text-slate-500 text-sm uppercase font-bold">Total Estimate</span>
                <span className="text-2xl font-mono font-bold text-white">₦{total.toLocaleString()}</span>
            </div>
        </div>
    );
}
