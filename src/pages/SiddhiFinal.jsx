import React from "react";

export default function SiddhiFinal({ onRoadmap }) {
  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      <div className="w-[340px] h-[680px] bg-white rounded-[40px] shadow-2xl border-[6px] border-slate-900 p-6 flex flex-col justify-between">
        
        <div>
          <div className="text-sm text-slate-400 mb-6">
            Nexora
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Your Career Journey
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            You've explored your interests and completed activities.
          </p>

          <div className="mt-8 p-5 bg-indigo-50 rounded-2xl">
            <h2 className="font-bold text-indigo-900">
              Your next step
            </h2>

            <p className="text-sm text-indigo-700 mt-2">
              Explore your personalized career roadmap.
            </p>
          </div>
        </div>

        <button
          onClick={onRoadmap}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold"
        >
          Roadmap
        </button>

      </div>
    </div>
  );
}