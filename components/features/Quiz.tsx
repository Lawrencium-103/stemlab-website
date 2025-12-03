"use client";

import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Button } from "@/components/ui/button";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Question {
    q: string;
    o: string[];
    a: number;
}

interface QuizProps {
    questions: Question[];
    color: string;
    title: string;
}

export function Quiz({ questions, color, title }: QuizProps) {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (index: number) => {
        if (index === questions[currentQ].a) {
            setScore(score + 1);
        }

        if (currentQ < questions.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            setShowResult(true);
        }
    };

    const chartData = {
        labels: ["Correct", "Incorrect"],
        datasets: [
            {
                data: [score, questions.length - score],
                backgroundColor: [color, "#334155"],
                borderWidth: 0,
            },
        ],
    };

    const chartOptions = {
        cutout: "75%",
        plugins: {
            legend: { display: false },
        },
    };

    return (
        <div className="bg-brand-card border border-slate-800 p-8 rounded-xl sticky top-24">
            <h3 className="font-mono text-xl font-bold text-white mb-2">{title}</h3>

            {!showResult ? (
                <>
                    <p className="text-xs text-slate-500 mb-6">
                        Question <span className="text-white">{currentQ + 1}</span>/{questions.length}
                    </p>
                    <div className="min-h-[60px] mb-6">
                        <p className="text-slate-300 font-medium">{questions[currentQ].q}</p>
                    </div>
                    <div className="space-y-3">
                        {questions[currentQ].o.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(idx)}
                                className="w-full text-left p-3 border border-slate-700 rounded hover:bg-slate-800 text-slate-300 text-sm transition-all focus:outline-none focus:border-brand-blue"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-center animate-fade-in">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                        <Doughnut data={chartData} options={chartOptions} />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-xl font-bold text-white">{Math.round((score / questions.length) * 100)}%</span>
                        </div>
                    </div>
                    <div className="font-bold text-xl mb-2" style={{ color }}>
                        {score === questions.length ? "Perfect Score!" : "Good Effort!"}
                    </div>
                    <p className="text-slate-500 text-sm mb-6">
                        {score === questions.length
                            ? "You are ready to take the next step."
                            : "We can help you reach 100% mastery."}
                    </p>
                    <Button onClick={() => { setCurrentQ(0); setScore(0); setShowResult(false); }} variant="outline" size="sm">
                        Retake Quiz
                    </Button>
                </div>
            )}
        </div>
    );
}
