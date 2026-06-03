import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function AdminLogin() {
  const { login, currentUser, language, t } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // If already logged in, go to dashboard
  React.useEffect(() => {
    if (currentUser) {
      navigate("/admin-dashboard");
    }
  }, [currentUser, navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    const result = login(email, password);
    if (result.success) {
      navigate("/admin-dashboard");
    } else {
      setErrorMsg(result.message);
    }
  };

  const handleQuickLogin = (roleEmail) => {
    setEmail(roleEmail);
    setPassword("password123");
    setErrorMsg("");
  };

  const quickAccounts = [
    { role: "Super Admin", email: "superadmin@saragaoncollege.in", icon: "shield" },
    { role: "Principal", email: "principal@saragaoncollege.in", icon: "school" },
    { role: "Faculty", email: "faculty@saragaoncollege.in", icon: "person" },
    { role: "Office Staff", email: "staff@saragaoncollege.in", icon: "support_agent" }
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex-1 flex flex-col justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-outline-variant shadow-lg space-y-6">
        {/* Emblem & Title */}
        <div className="text-center space-y-2">
          <span className="material-symbols-outlined text-primary text-5xl">lock_person</span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary font-hindi">
            {language === "hi" ? "शासकीय नवीन महाविद्यालय सारागांव" : "Govt Naveen College Saragaon"}
          </h2>
          <p className="text-xs text-secondary font-bold uppercase tracking-wider">
            {t("adminPortal")} | लॉगिन
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-base">error</span>
            {errorMsg}
          </div>
        )}

        {/* Regular Login Form */}
        <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
          <div className="space-y-1.5">
            <label className="font-bold text-on-surface">{t("username")}</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. admin@saragaoncollege.in"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              />
              <span className="material-symbols-outlined text-outline absolute left-3 top-3.5 text-base">mail</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-on-surface">{t("password")}</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              />
              <span className="material-symbols-outlined text-outline absolute left-3 top-3.5 text-base">key</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow"
          >
            <span className="material-symbols-outlined text-base">login</span>
            {t("loginBtn")} | प्रवेश करें
          </button>
        </form>

        {/* Quick Profiles Selector for Testing (Crucial for Phase 1 Demo) */}
        <div className="border-t border-outline-variant/60 pt-5 space-y-3">
          <h4 className="text-[11px] font-bold text-outline uppercase tracking-wider text-center">
            Demo Access Profiles (Click to login)
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {quickAccounts.map((acc, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickLogin(acc.email)}
                className="p-3 text-left bg-surface hover:bg-secondary-container/20 border border-outline-variant/60 hover:border-secondary rounded-xl transition-all flex flex-col justify-between h-20 group"
              >
                <div className="flex justify-between items-center w-full">
                  <span className="material-symbols-outlined text-base text-primary group-hover:text-secondary">
                    {acc.icon}
                  </span>
                  <span className="text-[9px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded-full">
                    Demo
                  </span>
                </div>
                <div className="mt-1">
                  <span className="font-bold text-xs text-on-surface block leading-none">{acc.role}</span>
                  <span className="text-[9px] text-on-surface-variant truncate block mt-0.5">{acc.email.split("@")[0]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
