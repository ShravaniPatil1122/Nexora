import React, { useState } from 'react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(5);
  const [selectedTheme, setSelectedTheme] = useState(1);
  
  const [stepsList, setStepsList] = useState([
    { id: 1, text: 'Research & Inspiration' },
    { id: 2, text: 'Sketch / Ideas' },
    { id: 3, text: 'Final Design' },
    { id: 4, text: 'Feedback & Improve' },
    { id: 5, text: 'Publish / Share' },
  ]);

  const moveUp = (index) => {
    if (index === 0) return;
    const newSteps = [...stepsList];
    const temp = newSteps[index];
    newSteps[index] = newSteps[index - 1];
    newSteps[index - 1] = temp;
    setStepsList(newSteps);
  };

  const moveDown = (index) => {
    if (index === stepsList.length - 1) return;
    const newSteps = [...stepsList];
    const temp = newSteps[index];
    newSteps[index] = newSteps[index + 1];
    newSteps[index + 1] = temp;
    setStepsList(newSteps);
  };

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center p-4 font-sans text-slate-800">
      
      {/* Navigation Controls for Screen 5, 6, and 7 */}
      <div className="mb-4 flex gap-2">
        <button 
          onClick={() => setCurrentStep(5)} 
          className={`px-3 py-1 text-xs rounded-full font-semibold transition ${currentStep === 5 ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600'}`}>
          Screen 5
        </button>
        <button 
          onClick={() => setCurrentStep(6)} 
          className={`px-3 py-1 text-xs rounded-full font-semibold transition ${currentStep === 6 ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600'}`}>
          Screen 6
        </button>
        <button 
          onClick={() => setCurrentStep(7)} 
          className={`px-3 py-1 text-xs rounded-full font-semibold transition ${currentStep === 7 ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600'}`}>
          Screen 7
        </button>
      </div>

      {/* Phone Mockup Frame */}
      <div className="w-[340px] h-[680px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-[6px] border-slate-900 flex flex-col justify-between relative">
        
        {/* Status Bar */}
        <div className="px-6 pt-3 flex justify-between items-center text-[10px] font-bold text-slate-800">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <span className="w-2 h-2 rounded-full bg-slate-800"></span>
            <span className="w-2 h-2 rounded-full bg-slate-800"></span>
          </div>
        </div>

        {/* SCREEN 5: Activity / Challenge */}
        {currentStep === 5 && (
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs mb-3 font-semibold">
                <span className="text-slate-800">Poster Design Challenge</span>
                <span className="text-slate-400">1/5</span>
              </div>

              <h2 className="font-bold text-sm text-slate-900 mb-1">Design a poster for a school eco-club event.</h2>
              <p className="text-[11px] text-slate-400 mb-5 leading-tight">Choose the best design that communicates the message effectively.</p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 1, title: 'SAVE OUR PLANET', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200', icon: '🌍' },
                  { id: 2, title: 'GO GREEN GO CLEAN', bg: 'bg-green-50 text-green-800 border-green-200', icon: '🌱' },
                  { id: 3, title: 'THINK GREEN', bg: 'bg-lime-50 text-lime-800 border-lime-200', icon: '💡' },
                  { id: 4, title: 'THE EARTH IS IN OUR HANDS', bg: 'bg-teal-50 text-teal-800 border-teal-200', icon: '🤲' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedTheme(item.id)}
                    className={`p-3 h-32 rounded-2xl border flex flex-col items-center justify-between text-center transition ${item.bg} ${
                      selectedTheme === item.id ? 'ring-2 ring-indigo-600' : ''
                    }`}
                  >
                    <span className="text-xs font-bold leading-tight uppercase">{item.title}</span>
                    <span className="text-3xl">{item.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentStep(6)}
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl text-xs shadow-md active:scale-95 transition"
            >
              Next
            </button>
          </div>
        )}

        {/* SCREEN 6: Activity in Progress */}
        {currentStep === 6 && (
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs mb-3 font-semibold">
                <span className="text-slate-800">Logic Puzzle Challenge</span>
                <span className="text-slate-400">3/5</span>
              </div>

              <h2 className="font-bold text-sm text-slate-900 mb-1">
                Arrange the following steps to complete a good design process.
              </h2>
              <p className="text-[11px] text-slate-400 mb-4">Drag and drop to reorder</p>

              <div className="space-y-2">
                {stepsList.map((step, idx) => (
                  <div key={step.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs font-medium">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-[9px]">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700 text-[11px]">{step.text}</span>
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => moveUp(idx)} className="px-1 bg-slate-200 text-slate-600 rounded text-[9px]">▲</button>
                      <button onClick={() => moveDown(idx)} className="px-1 bg-slate-200 text-slate-600 rounded text-[9px]">▼</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setCurrentStep(5)} className="w-1/3 py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl text-xs">
                Skip
              </button>
              <button onClick={() => setCurrentStep(7)} className="w-2/3 py-3 bg-indigo-600 text-white font-semibold rounded-xl text-xs shadow-md active:scale-95 transition">
                Next
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 7: Activity Complete / Result */}
        {currentStep === 7 && (
          <div className="p-5 flex-1 flex flex-col justify-between text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-2 bg-amber-50 rounded-full flex items-center justify-center text-3xl border border-amber-200">
                🏆
              </div>

              <h2 className="font-bold text-base text-slate-900">Great job, Bhumi! 🎉</h2>
              <p className="text-[11px] text-slate-400 mb-4">You've completed the challenge.</p>

              <div className="text-left mb-2">
                <span className="text-[11px] font-semibold text-slate-600">You demonstrated:</span>
              </div>

              <div className="space-y-2 text-left">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center text-[11px] font-semibold mb-1">
                    <span className="text-slate-700">🎨 Creativity</span>
                    <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[9px]">High</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center text-[11px] font-semibold mb-1">
                    <span className="text-slate-700">👁️ Visual Thinking</span>
                    <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[9px]">High</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center text-[11px] font-semibold mb-1">
                    <span className="text-slate-700">⚙️ Attention to Detail</span>
                    <span className="text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded text-[9px]">Medium</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={() => setCurrentStep(5)} className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl text-xs shadow-md active:scale-95 transition">
              Explore Related Fields
            </button>
          </div>
        )}

      </div>
    </div>
  );
}