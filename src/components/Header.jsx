import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Header() {
  const { language, setLanguage, t, currentUser, logout } = useContext(AppContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const navItems = [
    { path: "/", labelKey: "home", icon: "home" },
    { path: "/about", labelKey: "about", icon: "info" },
    { path: "/administration", labelKey: "administration", icon: "shield_person" },
    { path: "/departments", labelKey: "departments", icon: "account_tree" },
    { path: "/courses", labelKey: "courses", icon: "auto_stories" },
    { path: "/admission", labelKey: "admission", icon: "school" },
    { path: "/student-corner", labelKey: "studentCorner", icon: "person_search" },
    { path: "/iqac", labelKey: "iqac", icon: "verified" },
    { path: "/library", labelKey: "library", icon: "local_library" },
    { path: "/gallery", labelKey: "gallery", icon: "photo_library" },
    { path: "/downloads", labelKey: "downloads", icon: "download" },
    { path: "/contact", labelKey: "contact", icon: "contact_support" }
  ];

  const handleAdminAction = () => {
    if (currentUser) {
      navigate("/admin-dashboard");
    } else {
      navigate("/admin-login");
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Banner Bar for Contact & Affiliation Details */}
      <div className="bg-primary text-white text-xs py-2 px-margin-mobile md:px-margin-desktop border-b border-white/10">
        <div className="max-w-container-max mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-secondary-container">call</span>
              9893907415
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-secondary-container">mail</span>
              govtcollegesaragaon@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-secondary-container font-semibold">
              {t("subtitle")}
            </span>
          </div>
        </div>
      </div>

      {/* Main App Bar Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-outline-variant shadow-sm">
        <div className="max-w-container-max mx-auto flex justify-between items-center px-margin-mobile md:px-margin-desktop py-3">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-95">
            <img
              src="/logo.png"
              alt="Government Naveen College Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-hindi text-lg sm:text-xl font-bold text-primary leading-tight">
                  {language === "hi" ? "शासकीय नवीन महाविद्यालय, सारागांव" : "Govt Naveen College, Saragaon"}
                </h1>
                <span className="text-[10px] bg-secondary/15 text-secondary border border-secondary/35 font-bold px-2 py-0.5 rounded-full shrink-0">
                  {language === "hi" ? "महाविद्यालय कोड - 317" : "College Code - 317"}
                </span>
              </div>
              <p className="font-hindi text-xs sm:text-sm text-secondary font-medium leading-none mt-1">
                {t("hindiSubtitle")} • {t("districtName")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Toggle and Login Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold"
            >
              <span className="material-symbols-outlined text-sm">translate</span>
              {language === "en" ? "हिन्दी" : "English"}
            </button>

            {/* Admin Login/Dashboard Button */}
            <button
              onClick={handleAdminAction}
              className="bg-primary text-on-primary hover:bg-primary-container px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">
                {currentUser ? "dashboard" : "login"}
              </span>
              {currentUser ? t("dashboard") : t("adminLogin")}
            </button>
            {currentUser && (
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="bg-error/10 text-error hover:bg-error hover:text-on-error px-3 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition-all"
                title="Logout"
              >
                <span className="material-symbols-outlined text-sm">logout</span>
              </button>
            )}
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full border border-primary text-primary hover:bg-primary/5 transition-all"
              title="Language"
            >
              <span className="material-symbols-outlined text-lg">translate</span>
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 text-primary hover:bg-surface-container-high rounded"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>

        {/* Scrollable Desktop Nav links */}
        <div className="hidden lg:block border-t border-outline-variant bg-surface-container-lowest">
          <nav className="max-w-container-max mx-auto px-margin-desktop py-1.5 flex flex-wrap gap-1 justify-between">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  isActive(item.path)
                    ? "bg-secondary-container text-on-secondary-container font-bold border-b-2 border-secondary"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                <span className="material-symbols-outlined text-sm">{item.icon}</span>
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      <aside
        className={`fixed inset-y-0 right-0 z-[100] flex flex-col h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-outline-variant flex justify-between items-center bg-primary text-white">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl">school</span>
            <span className="font-bold text-sm">GNCS Main Menu</span>
          </div>
          <button onClick={() => setDrawerOpen(false)} className="text-white hover:opacity-80">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setDrawerOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive(item.path)
                  ? "bg-secondary-container text-on-secondary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              {t(item.labelKey)}
            </Link>
          ))}
          
          <div className="border-t border-outline-variant my-4 pt-4 px-2">
            <button
              onClick={() => {
                setDrawerOpen(false);
                handleAdminAction();
              }}
              className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">
                {currentUser ? "dashboard" : "login"}
              </span>
              {currentUser ? t("dashboard") : t("adminLogin")}
            </button>
            
            {currentUser && (
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  logout();
                  navigate("/");
                }}
                className="w-full mt-2 bg-error/10 text-error py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">logout</span>
                {t("logoutBtn")}
              </button>
            )}
          </div>
        </nav>
        
        <div className="p-4 border-t border-outline-variant bg-surface-container-low text-center text-xs text-on-surface-variant font-medium">
          <p>{t("hindiSubtitle")}</p>
          <p className="mt-1 opacity-70">Saragaon, Chhattisgarh</p>
        </div>
      </aside>
    </>
  );
}
