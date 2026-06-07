import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import NoticeTicker from "../components/NoticeTicker";

export default function Home() {
  const { notices, newsEvents, gallery, faculty, language, t } = useContext(AppContext);
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Get active notices (take first 3)
  const recentNotices = notices.slice(0, 3);
  // Get active news (take first 2)
  const recentNews = newsEvents.slice(0, 2);
  // Get gallery items (take first 3)
  const recentGallery = gallery.slice(0, 3);

  const bentoLinks = [
    { labelHi: "प्रवेश", labelEn: "Admission", path: "/admission", icon: "school", color: "border-secondary text-secondary bg-secondary/5" },
    { labelHi: "सूचना पटल", labelEn: "Notice Board", path: "/student-corner", icon: "campaign", color: "border-primary text-primary bg-primary/5" },
    { labelHi: "समय सारणी", labelEn: "Time Table", path: "/student-corner", icon: "calendar_month", color: "border-secondary text-secondary bg-secondary/5" },
    { labelHi: "परीक्षा", labelEn: "Exam Details", path: "/student-corner", icon: "edit_calendar", color: "border-primary text-primary bg-primary/5" },
    { labelHi: "परिणाम", labelEn: "Exam Results", path: "/student-corner", icon: "task_alt", color: "border-secondary text-secondary bg-secondary/5" },
    { labelHi: "छात्रवृत्ति", labelEn: "Scholarship", path: "/student-corner", icon: "payments", color: "border-primary text-primary bg-primary/5" },
    { labelHi: "डाउनलोड", labelEn: "Downloads", path: "/downloads", icon: "download", color: "border-secondary text-secondary bg-secondary/5" },
    { labelHi: "संपर्क", labelEn: "Contact Us", path: "/contact", icon: "contact_support", color: "border-primary text-primary bg-primary/5" }
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 space-y-8 flex-1">
      {/* Notice Board Ticker */}
      <NoticeTicker />

      {/* Hero Banner Section */}
      <section className="relative h-[380px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg group">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA72eXokI1lfD95EVEcAR3osAynjp5wfvMvtugkG0bOK_1g7YRvPOwJ9wt9EJEZ3Y_BmjOJaIOxTaTTAvU5DXyuczs0S2DFGtNUoqki8h5n4vVrke8WF1PhFl1l-JCcRYdRvFwUK4JeXDTYSNJfu3QYoW78eZe6BHq7D86Cz2tSUTBb36y99fbjn7vNRs9HjRIxAKwB-ZVe43KBDGY5iP0Y3NY5TBsYHSzTW-XRE9yDpqIV4ABK9EMBoWzT1uHO4Fi6fYj4KIqe6lg"
          alt="Government Naveen College Saragaon Campus"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-3 py-1 bg-secondary text-white rounded-full text-xs font-bold mb-3">
              ESTD: 2021 | Govt of Chhattisgarh
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-hindi leading-tight mb-3">
              {t("welcomeTitle")}
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 font-medium max-w-xl">
              {t("welcomeDesc")}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/admission")}
                className="bg-secondary text-white px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-md hover:scale-[1.02]"
              >
                {t("applyNow")} | अभी आवेदन करें
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button
                onClick={() => navigate("/student-corner")}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
              >
                {t("viewNotices")} | सूचनाएं देखें
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Bento Grid */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b-2 border-primary/20 pb-2">
          <span className="material-symbols-outlined">explore</span>
          {t("quickLinks")} | त्वरित लिंक्स
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {bentoLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`p-5 rounded-2xl border-t-4 shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center justify-center ${item.color}`}
            >
              <span className="material-symbols-outlined text-3xl mb-3 transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <span className="font-bold text-xs sm:text-sm text-on-surface">
                {language === "hi" ? item.labelHi : item.labelEn}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* College Info & Principal Message Side by Side */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
        {/* Short Introduction */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2">
            <span className="material-symbols-outlined">info</span>
            {language === "hi" ? "महाविद्यालय का परिचय" : "About Our College"}
          </h2>
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm leading-relaxed space-y-4 text-justify">
            <p className="text-sm sm:text-base text-on-surface-variant">
              {t("aboutShortIntro")}
            </p>
            <p className="text-sm text-on-surface-variant opacity-90">
              {language === "hi" 
                ? "यह महाविद्यालय जांजगीर-चांपा जिले के सारागांव क्षेत्र में ग्रामीण विद्यार्थियों को सुलभ एवं उच्च कोटि की शिक्षा प्रदान करने के लिए प्रतिबद्ध है। आधुनिक पुस्तकालय, प्रयोगात्मक विज्ञान प्रयोगशाला और सुसज्जित क्रीड़ा परिसर के साथ विद्यार्थियों का सर्वांगीण विकास हमारा ध्येय है।"
                : "This college is committed to providing affordable and high-quality higher education to rural students in the Saragaon region. With a modern library, science labs, and sports facilities, we focus on the holistic development of our students."}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-primary hover:text-secondary font-bold text-sm hover:translate-x-1 transition-all mt-2"
            >
              {language === "hi" ? "विस्तृत विवरण पढ़ें" : "Read Full Profile"}
              <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </Link>
          </div>

          {/* Core Streams Section */}
          <h2 className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2 pt-4">
            <span className="material-symbols-outlined">auto_stories</span>
            {t("coursesOffered")} | संचालित संकाय
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant hover:border-secondary hover:shadow transition-all text-center">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <h4 className="text-base font-bold text-primary mb-1">Arts | कला</h4>
              <p className="text-xs text-on-surface-variant">BA - Literature, Sociology, Pol. Sci, History</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant hover:border-secondary hover:shadow transition-all text-center">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                <span className="material-symbols-outlined">biotech</span>
              </div>
              <h4 className="text-base font-bold text-primary mb-1">Science | विज्ञान</h4>
              <p className="text-xs text-on-surface-variant">BSc - Physics, Chemistry, Maths, Bio, Zoology</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant hover:border-secondary hover:shadow transition-all text-center">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <h4 className="text-base font-bold text-primary mb-1">Commerce | वाणिज्य</h4>
              <p className="text-xs text-on-surface-variant">BCom - Corporate Acc, Business Eco, Tax</p>
            </div>
          </div>
        </div>

        {/* Principal message card */}
        <div className="bg-primary-container text-on-primary rounded-3xl overflow-hidden shadow-md border border-primary/20">
          <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-square w-full bg-surface-variant relative overflow-hidden">
            <img
              src="/principal.jpg"
              alt="Principal Prof. B. K. Patel"
              className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-secondary px-6 py-2">
              <p className="font-bold text-sm text-white">{t("principalName")}</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-secondary-container border-b border-on-primary-container/20 pb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined">chat_bubble</span>
              {t("principalMessageTitle")} | प्राचार्य संदेश
            </h3>
            <p className="italic text-xs sm:text-sm text-white/95 leading-relaxed">
              "{t("principalMessageText")}"
            </p>
            <div className="pt-2 text-right">
              <Link
                to="/administration"
                className="text-xs font-bold text-secondary-container hover:underline"
              >
                {language === "hi" ? "प्राचार्य प्रोफाइल देखें" : "View Principal Profile"} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Staff Slider */}
      <section className="space-y-4 pt-4">
        <div className="flex justify-between items-center border-b border-outline-variant pb-2">
          <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined">groups</span>
            {language === "hi" ? "हमारे समर्पित संकाय और स्टाफ" : "Our Dedicated Faculty & Staff"}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-outline-variant hover:bg-primary hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
              title="Scroll Left"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-outline-variant hover:bg-primary hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
              title="Scroll Right"
            >
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 py-4 px-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {faculty.map((fac) => (
            <div
              key={fac.id}
              className="min-w-[260px] max-w-[260px] bg-white p-5 rounded-3xl border border-outline-variant/60 shadow-sm hover:shadow-md hover:border-secondary transition-all snap-start flex flex-col items-center text-center space-y-4 group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-secondary transition-all shadow-inner">
                <img
                  src={fac.photoUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuASu860rwU_J3qXiuLE_I5HtOlHyL0uuIzE7nBbtQv3LB3CHGsQcaHOVdVEjMg4CIkDiQ_VEqdt-zFAoVx9CepHUV45AaX88Sum1Fize-5P68db1e13gFimHEl0ivfASQsVmTthyUzcGasoIl0Kr45PrrJNWDvEQq6yq9l1X7C91TCee_UACX5tF5n8aRTZy80Ps6V5LqGd2dP0pXQ2ryiSNZc_YgRtgIY6_AvSBL7ulAPHhrEzfaipPhfmdasVFWTWlmFSAMLt3HM"}
                  alt={fac.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="space-y-1 w-full">
                <h4 className="font-bold text-base text-primary group-hover:text-secondary transition-colors truncate">
                  {fac.name}
                </h4>
                <p className="text-xs text-secondary font-bold uppercase truncate">{fac.designation}</p>
                <span className="inline-block text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded-full font-bold">
                  {fac.department}
                </span>
              </div>
              <div className="w-full text-xs text-on-surface-variant leading-relaxed line-clamp-2 italic border-t border-outline-variant/50 pt-3">
                "{language === "hi" ? fac.bioHindi : fac.bioEnglish}"
              </div>
              <div className="w-full border-t border-outline-variant/50 pt-3 flex justify-center gap-4 text-xs">
                <a href={`mailto:${fac.email}`} className="flex items-center gap-1 text-on-surface-variant hover:text-secondary font-semibold">
                  <span className="material-symbols-outlined text-base">mail</span>
                  Email
                </a>
                <a href={`tel:${fac.phone}`} className="flex items-center gap-1 text-on-surface-variant hover:text-secondary font-semibold">
                  <span className="material-symbols-outlined text-base">call</span>
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notices & Events Split Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter pt-4">
        {/* Notice Feed */}
        <div className="bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant">
          <div className="flex justify-between items-center mb-6 border-b border-outline-variant/60 pb-3">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">notifications_active</span>
              {language === "hi" ? "नवीनतम सूचनाएं" : "Latest Notices"}
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full uppercase">
              Notice Board
            </span>
          </div>
          <ul className="space-y-4">
            {recentNotices.map((notice) => (
              <li
                key={notice.id}
                className="flex items-start gap-4 pb-4 border-b border-outline-variant/40 last:border-b-0 last:pb-0"
              >
                <div className="bg-secondary/10 text-secondary p-2 rounded-xl font-bold text-center min-w-[52px]">
                  <span className="block text-sm leading-none">
                    {notice.publishDate ? notice.publishDate.split("-")[2] : "01"}
                  </span>
                  <span className="block text-[10px] uppercase mt-1 leading-none">
                    {notice.publishDate
                      ? new Date(notice.publishDate).toLocaleString("default", { month: "short" })
                      : "Jun"}
                  </span>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-bold text-xs sm:text-sm text-on-surface hover:text-secondary cursor-pointer">
                    <Link to="/student-corner">
                      {language === "hi" ? notice.titleHindi : notice.titleEnglish}
                    </Link>
                  </p>
                  <span className="inline-block text-[10px] bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded-full font-bold">
                    {notice.category}
                  </span>
                </div>
                {notice.fileUrl && (
                  <a
                    href={notice.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-all"
                    title="Download PDF"
                  >
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/student-corner")}
            className="mt-6 w-full py-3 bg-white hover:bg-primary hover:text-white border border-primary text-primary font-bold rounded-xl text-xs sm:text-sm transition-all"
          >
            {t("allNotices")} | सभी सूचनाएं देखें
          </button>
        </div>

        {/* News Feed */}
        <div className="bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant">
          <div className="flex justify-between items-center mb-6 border-b border-outline-variant/60 pb-3">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">newspaper</span>
              {t("newsEvents")} | कॉलेज समाचार
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full uppercase">
              Updates
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recentNews.map((news) => (
              <div key={news.id} className="bg-white rounded-2xl overflow-hidden border border-outline-variant/60 shadow-sm flex flex-col group cursor-pointer" onClick={() => navigate("/gallery")}>
                <div className="aspect-[16/10] w-full overflow-hidden bg-surface-container">
                  <img
                    src={news.imageUrl}
                    alt={news.titleEnglish}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[10px] text-secondary font-bold uppercase tracking-wider block">
                      {news.eventDate}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-on-surface line-clamp-2 mt-1 group-hover:text-secondary transition-all">
                      {language === "hi" ? news.titleHindi : news.titleEnglish}
                    </h4>
                  </div>
                  <p className="text-[11px] text-on-surface-variant line-clamp-3">
                    {language === "hi" ? news.descriptionHindi : news.descriptionEnglish}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="space-y-4 pt-4">
        <div className="flex justify-between items-center border-b border-outline-variant pb-2">
          <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined">photo_library</span>
            {language === "hi" ? "चित्र दीर्घा (फोटो गैलरी)" : "Campus Gallery"}
          </h3>
          <Link to="/gallery" className="text-xs font-bold text-primary hover:underline">
            {language === "hi" ? "गैलरी देखें" : "View Gallery"} &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recentGallery.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm border border-outline-variant/60 cursor-pointer"
              onClick={() => navigate("/gallery")}
            >
              <img
                src={item.imageUrl}
                alt={item.albumTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-all">
                <h5 className="font-bold text-xs line-clamp-1">{item.albumTitle}</h5>
                <p className="text-[10px] text-white/80 line-clamp-2 mt-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
