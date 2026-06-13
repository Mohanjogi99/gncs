import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function AdminLogin() {
  const { login, sendResetEmail, currentUser, language, t } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Forgot Password States
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotError, setForgotError] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);

  // If already logged in, go to dashboard
  React.useEffect(() => {
    if (currentUser) {
      navigate("/admin-dashboard");
    }
  }, [currentUser, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setErrorMsg("");

    try {
      const result = await login(email, password);
      if (result.success) {
        navigate("/admin-dashboard");
      } else {
        setErrorMsg(result.message);
      }
    } catch (err) {
      setErrorMsg(err.message || "An error occurred / एक त्रुटि हुई");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotLoading(true);
    setForgotError("");
    setForgotSuccess("");

    try {
      const res = await sendResetEmail(forgotEmail);
      if (res.success) {
        setForgotSuccess(
          language === "hi" 
            ? "पासवर्ड रीसेट लिंक आपके ईमेल पर भेज दिया गया है!" 
            : "Password reset link sent to your email!"
        );
        setForgotEmail("");
      } else {
        setForgotError(res.message);
      }
    } catch (err) {
      setForgotError(
        language === "hi" 
          ? "ईमेल भेजने में विफल रहा। कृपया पुनः प्रयास करें।" 
          : "Failed to send email. Please try again."
      );
    } finally {
      setForgotLoading(false);
    }
  };

  const handleQuickLogin = (roleEmail) => {
    setEmail(roleEmail);
    if (roleEmail === "mohan.jogi@live.com") {
      setPassword("Mohan@2026!Private");
    } else if (roleEmail === "govtcollegesaragaon@gmail.com") {
      setPassword("PatelBK@2026!Admin");
    } else if (roleEmail === "kaushikpraveen90@gmail.com") {
      setPassword("Kaushik!Faculty@90");
    } else if (roleEmail === "chandrassi@gmail.com") {
      setPassword("chandra!ssi@28India");
    } else if (roleEmail === "navalajgalley101@gmail.com") {
      setPassword("naval101@56Bharat");
    } else if (roleEmail === "yogeshkumarsahurc@gmail.com") {
      setPassword("yogesh26!Saragaon@");
    } else if (roleEmail === "ppradeep730@gmail.com") {
      setPassword("pradeep!730!India");
    } else if (roleEmail === "ashishpatel6358@gmail.com") {
      setPassword("Ashish!Sports@63");
    } else {
      setPassword("password123");
    }
    setErrorMsg("");
  };

  const quickAccounts = [
    { role: "Super Admin", email: "mohan.jogi@live.com", icon: "shield" },
    { role: "Principal", email: "govtcollegesaragaon@gmail.com", icon: "school" },
    { role: "Faculty", email: "kaushikpraveen90@gmail.com", icon: "person" },
    { role: "Office Staff", email: "staff@saragaoncollege.in", icon: "support_agent" }
  ];

  const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

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
            {t("adminPortal")} | {showForgot ? (language === "hi" ? "पासवर्ड भूल गए" : "Forgot Password") : "लॉगिन"}
          </p>
        </div>

        {showForgot ? (
          /* Forgot Password Form */
          <form onSubmit={handleForgotSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">
                {language === "hi" ? "पंजीकृत ईमेल दर्ज करें" : "Enter registered email"}
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="e.g. admin@saragaoncollege.in"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
                />
                <span className="material-symbols-outlined text-outline absolute left-3 top-3.5 text-base">mail</span>
              </div>
            </div>

            {forgotError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                {forgotError}
              </div>
            )}

            {forgotSuccess && (
              <div className="p-3 bg-green-50 border border-green-200 text-green-600 rounded-xl text-xs font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-base">check_circle</span>
                {forgotSuccess}
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowForgot(false);
                  setForgotError("");
                  setForgotSuccess("");
                }}
                className="flex-1 bg-surface border border-outline-variant hover:bg-outline-variant/20 text-on-surface py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                {language === "hi" ? "वापस जाएँ" : "Back"}
              </button>
              
              <button
                type="submit"
                disabled={forgotLoading}
                className="flex-1 bg-primary hover:bg-primary-container text-on-primary py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow disabled:opacity-50"
              >
                {forgotLoading ? (
                  <>
                    <span className="material-symbols-outlined text-base animate-spin">sync</span>
                    {language === "hi" ? "भेज रहा है..." : "Sending..."}
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-base">send</span>
                    {language === "hi" ? "लिंक भेजें" : "Send Link"}
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Regular Login Form */
          <>
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                {errorMsg}
              </div>
            )}

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
                <div className="flex justify-between items-center">
                  <label className="font-bold text-on-surface">{t("password")}</label>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgot(true);
                      setErrorMsg("");
                      setForgotError("");
                      setForgotSuccess("");
                    }}
                    className="text-[11px] font-bold text-primary hover:underline"
                  >
                    {language === "hi" ? "पासवर्ड भूल गए?" : "Forgot Password?"}
                  </button>
                </div>
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
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined text-base animate-spin">sync</span>
                    {language === "hi" ? "प्रवेश कर रहा है..." : "Logging in..."}
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-base">login</span>
                    {t("loginBtn")} | प्रवेश करें
                  </>
                )}
              </button>
            </form>
          </>
        )}

        {/* Quick Profiles Selector for Testing (Only visible on localhost) */}
        {isLocal && !showForgot && (
          <div className="border-t border-outline-variant/60 pt-5 space-y-3">
            <h4 className="text-[11px] font-bold text-outline uppercase tracking-wider text-center">
              Demo Access Profiles (Click to login - Local Dev Only)
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
        )}
      </div>
    </div>
  );
}
