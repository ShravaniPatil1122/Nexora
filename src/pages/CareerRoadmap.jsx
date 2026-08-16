import React from "react";

export default function CareerRoadmap({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md min-h-[680px] bg-white rounded-[40px] shadow-2xl border-[6px] border-slate-900 p-6">
        
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="text-slate-600 text-xl"
          >
            ←
          </button>

          <h1 className="font-bold text-lg">
            Career Roadmap
          </h1>

          <div className="w-5"></div>
        </div>

        <div className="text-center mt-20">
          <div className="text-5xl mb-4">
            🗺️
          </div>

          <h2 className="text-xl font-bold text-slate-900">
            Your Career Roadmap
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Your personalized career journey will appear here.
          </p>
        </div>

      </div>
    </div>
  );
}