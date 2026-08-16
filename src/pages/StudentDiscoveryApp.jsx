import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Bell,
  Home,
  Search,
  User,
  Map as MapIcon,
  Palette,
  Brain,
  Music2,
  PenTool,
  Lightbulb,
  Bookmark,
  Settings as SettingsIcon,
  Globe,
  Accessibility,
  HelpCircle,
  ChevronRight,
  Sparkles,
  Compass,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Brand palette — sampled from the approved reference.
// Kept as plain JS constants (exported) so every page, including ones your
// team adds later, can import the same values instead of re-guessing hexes.
// ---------------------------------------------------------------------------
export const COLORS = {
  primary: "#624ADB",
  bright: "#A285FB",
  lavender: "#E6D1FA",
  lavenderLight: "#F5F0FF",
  deepPurple: "#24134F",
  text: "#171323",
  textSecondary: "#6F6A78",
  white: "#FFFFFF",
  success: "#22C55E",
};

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------
const CLASS_OPTIONS = ["8th", "9th", "10th", "11th", "12th"];

const ACTIVITIES = [
  { id: 1, icon: Palette, title: "Logo Design Challenge", field: "Digital Arts", date: "Aug 3" },
  { id: 2, icon: Brain, title: "Understand Human Behavior", field: "Psychology", date: "Aug 6" },
  { id: 3, icon: Music2, title: "Create Your Own Rhythm", field: "Performing Arts", date: "Aug 9" },
  { id: 4, icon: Lightbulb, title: "Creative Thinking Challenge", field: "General", date: "Aug 12" },
];

const INTERESTS = [
  { icon: Palette, label: "Digital Arts" },
  { icon: Brain, label: "Psychology" },
  { icon: Music2, label: "Music" },
  { icon: PenTool, label: "Creative Writing" },
];

const SAVED_FIELDS = ["Digital Arts", "Psychology", "Architecture", "Animation"];

// ---------------------------------------------------------------------------
// Shared bits
// ---------------------------------------------------------------------------

function Thumb({ icon: Icon, gradient }) {
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
      style={{ background: gradient }}
    >
      <Icon size={22} color="#fff" />
    </div>
  );
}

function PillButton({ children, small, style, ...props }) {
  return (
    <button
      {...props}
      className={`whitespace-nowrap rounded-full font-semibold shadow-sm transition-transform active:scale-[0.97] ${
        small ? "px-4 py-1.5 text-xs" : "px-6 py-3.5 text-sm"
      }`}
      style={{ backgroundColor: COLORS.primary, color: COLORS.white, ...style }}
    >
      {children}
    </button>
  );
}

function BottomNav({ screen, setScreen }) {
  const items = [
    { key: "dashboard", label: "Home", icon: Home },
    { key: "explore", label: "Explore", icon: Search },
    { key: "profile", label: "Profile", icon: User },
    { key: "roadmap", label: "Roadmap", icon: MapIcon },
  ];
  return (
    <div
      className="fixed bottom-0 left-0 right-0 mx-auto max-w-md px-2 pb-2 pt-2"
      style={{ backgroundColor: COLORS.white, borderTop: "1px solid #EFEAFA" }}
    >
      <div className="flex items-center justify-between">
        {items.map(({ key, label, icon: Icon }) => {
          const active = screen === key;
          return (
            <button
              key={key}
              onClick={() => setScreen(key)}
              className="flex flex-1 flex-col items-center gap-0.5 py-1"
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 1.8} color={active ? COLORS.primary : "#B9B3C7"} />
              <span
                className="text-[10.5px]"
                style={{ color: active ? COLORS.primary : "#B9B3C7", fontWeight: active ? 600 : 400 }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Card({ children, className = "", style = {} }) {
  return (
    <div
      className={`rounded-2xl bg-white p-4 ${className}`}
      style={{ border: "1px solid #EFEAFA", boxShadow: "0 2px 10px rgba(98,74,219,0.06)", ...style }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <h4 className="mb-2 text-sm font-bold" style={{ color: COLORS.text }}>
      {children}
    </h4>
  );
}

// ---------------------------------------------------------------------------
// 1. Welcome Screen
// ---------------------------------------------------------------------------

function WelcomeScreen({ onBegin }) {
  return (
    <div
      className="relative flex h-full min-h-[640px] flex-col justify-between overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #1A0F3D 0%, #2C1A5E 28%, #5B3A8E 55%, #C97A6E 82%, #F0A868 100%)`,
      }}
    >
      <div className="relative z-10 px-8 pt-16">
        <h1 className="text-[38px] font-extrabold leading-[1.12] text-white">
          Let's
          <br />
          discover
          <br />
          yourself.
        </h1>
        <p className="mt-4 max-w-[230px] text-[15px] leading-relaxed" style={{ color: "#D9CFEF" }}>
          Explore. Try. Discover.
          <br />
          Find paths that truly fit you.
        </p>
      </div>

      {/* sun glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[54%] h-40 w-40 -translate-x-1/2 rounded-full blur-2xl"
        style={{ backgroundColor: "#F6B97A", opacity: 0.55 }}
      />

      {/* mountains + figure */}
      <svg viewBox="0 0 400 240" className="relative z-0 w-full" preserveAspectRatio="xMidYMax slice">
        <path d="M0 240 L0 150 L80 70 L150 150 L220 55 L290 140 L340 90 L400 150 L400 240 Z" fill="#3D2A66" opacity="0.7" />
        <path d="M0 240 L0 190 L70 130 L150 200 L210 120 L280 195 L350 140 L400 195 L400 240 Z" fill="#2A1B4F" />
        <g transform="translate(207,116)">
          <circle cx="0" cy="0" r="4" fill="#1A0F3D" />
          <path d="M0 4 L0 16 M0 8 L-6 13 M0 8 L6 4 M0 16 L-5 24 M0 16 L5 24" stroke="#1A0F3D" strokeWidth="2.2" strokeLinecap="round" />
        </g>
      </svg>

      <div className="relative z-10 px-6 pb-10 pt-4">
        <button
          onClick={onBegin}
          className="flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold shadow-lg transition-transform active:scale-[0.98]"
          style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
        >
          Let's Begin
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. Onboarding Screen
// ---------------------------------------------------------------------------

function OnboardingScreen({ name, setName, studentClass, setStudentClass, onStart }) {
  const canStart = name.trim().length > 0 && studentClass;
  return (
    <div
      className="flex h-full min-h-[640px] flex-col justify-between px-7 pb-8 pt-16"
      style={{ backgroundColor: COLORS.lavenderLight }}
    >
      <div>
        <h2 className="text-2xl font-extrabold" style={{ color: COLORS.text }}>
          Let's get to know you! 👋
        </h2>
        <p className="mt-2 text-sm" style={{ color: COLORS.textSecondary }}>
          Just a couple of things before we begin your journey.
        </p>

        <div className="mt-9">
          <label className="text-sm font-semibold" style={{ color: COLORS.text }}>
            What should we call you?
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-2 w-full rounded-2xl bg-white px-4 py-3.5 outline-none"
            style={{ border: "1px solid #E1D8F5", color: COLORS.text }}
            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 3px ${COLORS.lavender}`)}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        </div>

        <div className="mt-7">
          <label className="text-sm font-semibold" style={{ color: COLORS.text }}>
            Which class are you in?
          </label>
          <div className="mt-2 grid grid-cols-3 gap-2.5">
            {CLASS_OPTIONS.map((c) => {
              const active = studentClass === c;
              return (
                <button
                  key={c}
                  onClick={() => setStudentClass(c)}
                  className="rounded-2xl py-3 text-sm font-semibold transition-colors"
                  style={
                    active
                      ? { backgroundColor: COLORS.primary, color: COLORS.white, border: "1px solid transparent" }
                      : { backgroundColor: COLORS.white, color: COLORS.textSecondary, border: "1px solid #E1D8F5" }
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <button
        disabled={!canStart}
        onClick={onStart}
        className="flex items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold shadow-lg transition-all active:scale-[0.98]"
        style={{
          backgroundColor: canStart ? COLORS.primary : COLORS.lavender,
          color: canStart ? COLORS.white : "#B3A4D9",
        }}
      >
        Start Exploring
        <ArrowRight size={17} />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. Dashboard
// ---------------------------------------------------------------------------

function Dashboard({ name, hasHistory, onStartFirstTime, setScreen }) {
  return (
    <div className="min-h-[640px] pb-24 pt-6" style={{ backgroundColor: COLORS.lavenderLight }}>
      <div className="flex items-start justify-between px-6">
        <div>
          <h2 className="text-xl font-extrabold" style={{ color: COLORS.text }}>
            Good morning, {name || "Explorer"}! 👋
          </h2>
          <p className="mt-1 text-sm" style={{ color: COLORS.textSecondary }}>
            Ready to explore something new today?
          </p>
        </div>
        <div className="rounded-full bg-white p-2.5 shadow-sm">
          <Bell size={16} color={COLORS.text} />
        </div>
      </div>

      {!hasHistory ? (
        <div
          className="mx-6 mt-8 rounded-2xl p-6 text-white shadow-lg"
          style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.deepPurple})` }}
        >
          <Compass size={26} />
          <h3 className="mt-3 text-lg font-bold">Your journey starts here</h3>
          <p className="mt-1 text-sm" style={{ color: "#D8CDF5" }}>
            Try a quick activity and we'll start learning what fits you.
          </p>
          <button
            onClick={onStartFirstTime}
            className="mt-4 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold shadow"
            style={{ color: COLORS.primary }}
          >
            Start Exploring <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <>
          {/* Continue Exploring */}
          <div className="mx-6 mt-7">
            <SectionLabel>Continue Exploring</SectionLabel>
            <Card>
              <div className="flex items-center gap-3">
                <Thumb icon={Palette} gradient={`linear-gradient(135deg, ${COLORS.primary}, ${COLORS.deepPurple})`} />
                <div className="flex-1">
                  <p className="font-semibold" style={{ color: COLORS.text }}>
                    Digital Arts
                  </p>
                  <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                    Last activity: Poster Design Challenge
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: COLORS.lavender }}>
                  <div className="h-1.5 w-[60%] rounded-full" style={{ backgroundColor: COLORS.primary }} />
                </div>
                <span className="text-xs font-semibold" style={{ color: COLORS.textSecondary }}>
                  60%
                </span>
                <PillButton small>Continue</PillButton>
              </div>
            </Card>
          </div>

          {/* Recommended */}
          <div className="mx-6 mt-6">
            <SectionLabel>Recommended for You</SectionLabel>
            <Card>
              <div className="flex items-center gap-3">
                <Thumb icon={Brain} gradient={`linear-gradient(135deg, ${COLORS.bright}, ${COLORS.primary})`} />
                <div className="flex-1">
                  <p className="font-semibold" style={{ color: COLORS.text }}>
                    Psychology
                  </p>
                  <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                    Based on your interests in Human Behavior &amp; Communication
                  </p>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <PillButton small>Explore</PillButton>
              </div>
            </Card>
          </div>

          {/* Today's Challenge */}
          <div className="mx-6 mt-6">
            <SectionLabel>Today's Challenge</SectionLabel>
            <Card className="flex items-center gap-3">
              <Thumb icon={Lightbulb} gradient={`linear-gradient(135deg, ${COLORS.bright}, ${COLORS.primary})`} />
              <div className="flex-1">
                <p className="font-semibold" style={{ color: COLORS.text }}>
                  Creative Thinking Challenge
                </p>
                <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                  5 min activity
                </p>
              </div>
              <PillButton small>Start Now</PillButton>
            </Card>
          </div>

          {/* Journey stats — plain row, no card border, matches reference */}
          <div className="mx-6 mt-7">
            <SectionLabel>Your Journey</SectionLabel>
            <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4" style={{ border: "1px solid #EFEAFA" }}>
              <div className="flex items-center gap-2">
                <span className="text-lg">🧭</span>
                <div>
                  <p className="text-base font-extrabold leading-none" style={{ color: COLORS.text }}>
                    4
                  </p>
                  <p className="mt-0.5 text-[11px]" style={{ color: COLORS.textSecondary }}>
                    Fields Explored
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🧩</span>
                <div>
                  <p className="text-base font-extrabold leading-none" style={{ color: COLORS.text }}>
                    12
                  </p>
                  <p className="mt-0.5 text-[11px]" style={{ color: COLORS.textSecondary }}>
                    Activities Done
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🏅</span>
                <div>
                  <p className="text-base font-extrabold leading-none" style={{ color: COLORS.text }}>
                    3
                  </p>
                  <p className="mt-0.5 text-[11px]" style={{ color: COLORS.textSecondary }}>
                    Badges Earned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <BottomNav screen="dashboard" setScreen={setScreen} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Placeholder tabs for Explore & Roadmap (kept minimal — not specced yet)
// ---------------------------------------------------------------------------

function PlaceholderTab({ title, subtitle, icon: Icon, screen, setScreen }) {
  return (
    <div
      className="flex min-h-[640px] flex-col items-center justify-center px-8 pb-24 text-center"
      style={{ backgroundColor: COLORS.lavenderLight }}
    >
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <Icon size={30} color={COLORS.primary} />
      </div>
      <h3 className="mt-4 text-lg font-bold" style={{ color: COLORS.text }}>
        {title}
      </h3>
      <p className="mt-1 text-sm" style={{ color: COLORS.textSecondary }}>
        {subtitle}
      </p>
      <BottomNav screen={screen} setScreen={setScreen} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. Profile & its sub-pages
// ---------------------------------------------------------------------------

function ProfileHome({ name, studentClass, setScreen, setSub }) {
  const options = [
    { key: "activities", label: "My Activities", icon: Sparkles },
    { key: "interests", label: "My Interests", icon: Brain },
    { key: "saved", label: "Saved Fields", icon: Bookmark, count: SAVED_FIELDS.length },
    { key: "settings", label: "Settings", icon: SettingsIcon },
  ];
  return (
    <div className="min-h-[640px] pb-24 pt-12" style={{ backgroundColor: COLORS.lavenderLight }}>
      <div className="flex items-center gap-3 px-6">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold"
          style={{ backgroundColor: COLORS.lavender, color: COLORS.primary }}
        >
          {(name || "?").charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-lg font-extrabold" style={{ color: COLORS.text }}>
            {name || "Explorer"}
          </h2>
          <p className="text-sm" style={{ color: COLORS.textSecondary }}>
            Class {studentClass || "—"}
          </p>
        </div>
      </div>

      <div className="mt-8 px-6">
        <div className="rounded-2xl bg-white" style={{ border: "1px solid #EFEAFA" }}>
          {options.map(({ key, label, icon: Icon, count }, i) => (
            <button
              key={key}
              onClick={() => setSub(key)}
              className="flex w-full items-center gap-3 px-4 py-4 text-left"
              style={i !== options.length - 1 ? { borderBottom: "1px solid #F2EEFA" } : {}}
            >
              <Icon size={18} color={COLORS.primary} />
              <p className="flex-1 text-sm font-semibold" style={{ color: COLORS.text }}>
                {label}
              </p>
              {typeof count === "number" && (
                <span
                  className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                  style={{ backgroundColor: COLORS.lavenderLight, color: COLORS.textSecondary }}
                >
                  {count}
                </span>
              )}
              <ChevronRight size={16} color="#C7C0DA" />
            </button>
          ))}
        </div>
      </div>

      <BottomNav screen="profile" setScreen={setScreen} />
    </div>
  );
}

function SubPageHeader({ title, onBack }) {
  return (
    <div className="flex items-center gap-3 px-6 pt-12">
      <button onClick={onBack} className="rounded-full bg-white p-2 shadow-sm">
        <ArrowLeft size={18} color={COLORS.text} />
      </button>
      <h2 className="text-lg font-extrabold" style={{ color: COLORS.text }}>
        {title}
      </h2>
    </div>
  );
}

function MyActivities({ onBack }) {
  return (
    <div className="min-h-[640px] pb-10" style={{ backgroundColor: COLORS.lavenderLight }}>
      <SubPageHeader title="My Activities" onBack={onBack} />
      <p className="px-6 pt-4 text-sm font-semibold" style={{ color: COLORS.primary }}>
        {ACTIVITIES.length} Activities Completed
      </p>
      <div className="mt-4 space-y-3 px-6">
        {ACTIVITIES.map((a) => (
          <Card key={a.id} className="flex items-center gap-3">
            <Thumb icon={a.icon} gradient={`linear-gradient(135deg, ${COLORS.bright}, ${COLORS.primary})`} />
            <div className="flex-1">
              <p className="font-semibold" style={{ color: COLORS.text }}>
                {a.title}
              </p>
              <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                {a.field} · Completed {a.date}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MyInterests({ onBack }) {
  return (
    <div className="min-h-[640px] pb-10" style={{ backgroundColor: COLORS.lavenderLight }}>
      <SubPageHeader title="My Interests" onBack={onBack} />
      <div className="mt-4 grid grid-cols-2 gap-3 px-6">
        {INTERESTS.map((i) => (
          <Card key={i.label} className="flex flex-col items-center gap-2 py-5 text-center">
            <div className="rounded-full p-3" style={{ backgroundColor: COLORS.lavender }}>
              <i.icon size={20} color={COLORS.primary} />
            </div>
            <p className="text-sm font-semibold" style={{ color: COLORS.text }}>
              {i.label}
            </p>
          </Card>
        ))}
      </div>
      <div
        className="mx-6 mt-4 rounded-2xl p-4 text-sm"
        style={{ backgroundColor: COLORS.white, border: "1px solid #EFEAFA", color: COLORS.text }}
      >
        Based on your activities, you seem to enjoy creative and people-oriented fields.
      </div>
      <button
        className="mx-6 mt-5 w-[calc(100%-3rem)] rounded-full bg-white py-3 text-sm font-semibold"
        style={{ border: "1px solid #E1D8F5", color: COLORS.primary }}
      >
        Update Interests
      </button>
    </div>
  );
}

function SavedFields({ onBack }) {
  return (
    <div className="min-h-[640px] pb-10" style={{ backgroundColor: COLORS.lavenderLight }}>
      <SubPageHeader title="Saved Fields" onBack={onBack} />
      {SAVED_FIELDS.length === 0 ? (
        <div className="mt-16 px-8 text-center">
          <Bookmark size={26} className="mx-auto" color="#C9BEEB" />
          <p className="mt-3 font-semibold" style={{ color: COLORS.text }}>
            No saved fields yet.
          </p>
          <p className="mt-1 text-sm" style={{ color: COLORS.textSecondary }}>
            Explore different fields and save the ones you'd like to revisit.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3 px-6">
          {SAVED_FIELDS.map((f) => (
            <Card key={f} className="flex items-center justify-between">
              <p className="font-semibold" style={{ color: COLORS.text }}>
                {f}
              </p>
              <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: COLORS.primary }}>
                View Field <ChevronRight size={15} />
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function SettingsPage({ onBack }) {
  const rows = [
    { icon: Globe, label: "Language" },
    { icon: Bell, label: "Notifications" },
    { icon: Accessibility, label: "Accessibility" },
    { icon: HelpCircle, label: "Help & Support" },
  ];
  return (
    <div className="min-h-[640px] pb-10" style={{ backgroundColor: COLORS.lavenderLight }}>
      <SubPageHeader title="Settings" onBack={onBack} />
      <div className="mt-4 px-6">
        <div className="rounded-2xl bg-white" style={{ border: "1px solid #EFEAFA" }}>
          {rows.map(({ icon: Icon, label }, i) => (
            <button
              key={label}
              className="flex w-full items-center gap-3 px-4 py-4 text-left"
              style={i !== rows.length - 1 ? { borderBottom: "1px solid #F2EEFA" } : {}}
            >
              <Icon size={18} color={COLORS.textSecondary} />
              <p className="flex-1 text-sm font-semibold" style={{ color: COLORS.text }}>
                {label}
              </p>
              <ChevronRight size={16} color="#C7C0DA" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// App shell
// ---------------------------------------------------------------------------

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [profileSub, setProfileSub] = useState(null);
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [hasHistory, setHasHistory] = useState(false);

  const goProfile = (s) => {
    setScreen(s);
    if (s !== "profile") setProfileSub(null);
  };

  let content;
  if (screen === "welcome") {
    content = <WelcomeScreen onBegin={() => setScreen("onboarding")} />;
  } else if (screen === "onboarding") {
    content = (
      <OnboardingScreen
        name={name}
        setName={setName}
        studentClass={studentClass}
        setStudentClass={setStudentClass}
        onStart={() => setScreen("dashboard")}
      />
    );
  } else if (screen === "dashboard") {
    content = (
      <Dashboard name={name} hasHistory={hasHistory} onStartFirstTime={() => setHasHistory(true)} setScreen={goProfile} />
    );
  } else if (screen === "explore") {
    content = (
      <PlaceholderTab
        title="Explore"
        subtitle="Browse fields, industries and careers to try next."
        icon={Compass}
        screen="explore"
        setScreen={goProfile}
      />
    );
  } else if (screen === "roadmap") {
    content = (
      <PlaceholderTab
        title="Roadmap"
        subtitle="Your personalized path, mapped step by step."
        icon={MapIcon}
        screen="roadmap"
        setScreen={goProfile}
      />
    );
  } else if (screen === "profile") {
    if (profileSub === "activities") {
      content = <MyActivities onBack={() => setProfileSub(null)} />;
    } else if (profileSub === "interests") {
      content = <MyInterests onBack={() => setProfileSub(null)} />;
    } else if (profileSub === "saved") {
      content = <SavedFields onBack={() => setProfileSub(null)} />;
    } else if (profileSub === "settings") {
      content = <SettingsPage onBack={() => setProfileSub(null)} />;
    } else {
      content = <ProfileHome name={name} studentClass={studentClass} setScreen={goProfile} setSub={setProfileSub} />;
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-0 sm:p-6 font-sans" style={{ backgroundColor: "#E5E0EF" }}>
      <div className="relative w-full max-w-md overflow-hidden shadow-2xl sm:rounded-[2rem]" style={{ backgroundColor: COLORS.lavenderLight }}>
        {content}
      </div>
    </div>
  );
}
