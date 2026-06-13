import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Departments() {
  const { departments, faculty, language, t } = useContext(AppContext);
  const [activeDeptId, setActiveDeptId] = useState("dept-arts");

  const activeDept = departments.find((d) => d.id === activeDeptId) || departments[0];

  // Filter faculty members in the active department
  // The department name in faculty is matching 'Arts', 'Science', 'Commerce'
  const activeDeptKey = activeDeptId === "dept-arts" ? "Arts" : activeDeptId === "dept-science" ? "Science" : "Commerce";
  const deptFaculty = faculty.filter((f) => f.department.toLowerCase() === activeDeptKey.toLowerCase());

  const mockActivities = {
    "dept-arts": [
      { date: "2026-04-12", textEn: "Slogan writing competition on Child Rights by Sociology Dept", textHi: "समाजशास्त्र विभाग द्वारा बाल अधिकारों पर नारा लेखन प्रतियोगिता" },
      { date: "2026-03-08", textEn: "Guest lecture on Modern Hindi Literature by Hindi Dept", textHi: "हिंदी विभाग द्वारा आधुनिक हिंदी साहित्य पर अतिथि व्याख्यान" }
    ],
    "dept-science": [
      { date: "2026-02-28", textEn: "National Science Day Exhibition & Model Display", textHi: "राष्ट्रीय विज्ञान दिवस प्रदर्शनी एवं मॉडल प्रदर्शन" },
      { date: "2026-01-18", textEn: "Field visit to Biodiversity park by Zoology students", textHi: "प्राणीशास्त्र के छात्रों द्वारा जैव विविधता पार्क का क्षेत्र दौरा" }
    ],
    "dept-commerce": [
      { date: "2026-03-15", textEn: "Workshop on e-Filing of Income Tax Returns in India", textHi: "भारत में आयकर रिटर्न की ई-फाइलिंग पर कार्यशाला" },
      { date: "2026-02-10", textEn: "Commerce quiz competition on union budget analysis", textHi: "केंद्रीय बजट विश्लेषण पर वाणिज्य प्रश्नोत्तरी प्रतियोगिता" }
    ]
  };

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "शैक्षणिक विभाग" : "Academic Departments"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Faculty, Subjects & Syllabus
        </p>
      </section>

      {/* Main Tab Toggle Panel */}
      <section className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Sidebar Stream Selectors */}
        <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 shrink-0">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDeptId(dept.id)}
              className={`w-full text-left px-5 py-4 rounded-2xl border font-bold text-sm transition-all whitespace-nowrap flex items-center justify-between gap-3 ${
                activeDeptId === dept.id
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white hover:bg-surface-container text-on-surface border-outline-variant/60"
              }`}
            >
              <span>{language === "hi" ? dept.nameHindi : dept.nameEnglish}</span>
              <span className="material-symbols-outlined text-lg">arrow_forward_ios</span>
            </button>
          ))}
        </div>

        {/* Selected Department Details */}
        {activeDept && (
          <div className="flex-1 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-6 w-full">
            {/* Header info */}
            <div className="border-b border-outline-variant/60 pb-4 space-y-2">
              <span className="text-[10px] bg-secondary text-white px-2 py-0.5 rounded-full font-bold uppercase">
                {activeDeptKey} stream
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                {language === "hi" ? activeDept.nameHindi : activeDept.nameEnglish}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {language === "hi" ? activeDept.descriptionHindi : activeDept.descriptionEnglish}
              </p>
            </div>

            {/* HOD and Subjects Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant">
                <span className="text-[10px] text-secondary font-bold uppercase tracking-wider block">
                  Head of Department | विभागाध्यक्ष
                </span>
                <h4 className="font-bold text-base text-primary mt-1">{activeDept.hodName}</h4>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  {language === "hi"
                    ? "समग्र विभागीय संचालन, शैक्षणिक कैलेंडर समन्वय और व्याख्यान अनुसूची नियोजन के लिए जिम्मेदार।"
                    : "Coordinates department operations, curriculum distribution, assessments, and seminar schedules."}
                </p>
              </div>

              <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant">
                <span className="text-[10px] text-secondary font-bold uppercase tracking-wider block">
                  Core Subjects | विषय
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {activeDept.subjects?.map((sub, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white border border-outline-variant px-3 py-1 rounded-full text-on-surface font-semibold"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Faculty Profiles inside this Department */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-primary uppercase border-b border-outline-variant/40 pb-1.5">
                {t("facultyList")} | संकाय सदस्य
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deptFaculty.length === 0 ? (
                  <p className="text-xs text-on-surface-variant italic">No faculty details found.</p>
                ) : (
                  deptFaculty.map((fac) => (
                    <div
                      key={fac.id}
                      className="p-4 rounded-2xl border border-outline-variant bg-white flex gap-4 hover:border-secondary hover:shadow-sm transition-all"
                    >
                      <div className="w-14 h-14 bg-surface-container rounded-full overflow-hidden shrink-0 border border-outline-variant">
                        <img
                          src={
                            fac.photoUrl ||
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuASu860rwU_J3qXiuLE_I5HtOlHyL0uuIzE7nBbtQv3LB3CHGsQcaHOVdVEjMg4CIkDiQ_VEqdt-zFAoVx9CepHUV45AaX88Sum1Fize-5P68db1e13gFimHEl0ivfASQsVmTthyUzcGasoIl0Kr45PrrJNWDvEQq6yq9l1X7C91TCee_UACX5tF5n8aRTZy80Ps6V5LqGd2dP0pXQ2ryiSNZc_YgRtgIY6_AvSBL7ulAPHhrEzfaipPhfmdasVFWTWlmFSAMLt3HM"
                          }
                          alt={fac.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-bold text-sm text-primary">{fac.name}</h5>
                        <p className="text-xs text-secondary font-semibold">{fac.designation}</p>
                        <p className="text-[11px] text-on-surface-variant font-medium">
                          {fac.qualification}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Department Activities */}
            <div className="pt-2">
              {/* Departmental Activities List */}
              <div className="space-y-3 bg-surface-container-low p-5 rounded-2xl border border-outline-variant/50">
                <h4 className="font-bold text-sm text-primary uppercase border-b border-outline-variant/40 pb-1.5 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">celebration</span>
                  {language === "hi" ? "विभागीय गतिविधियां" : "Departmental Activities"}
                </h4>
                <ul className="space-y-2.5">
                  {mockActivities[activeDeptId]?.map((act, idx) => (
                    <li key={idx} className="text-xs text-on-surface-variant flex gap-2 leading-relaxed">
                      <span className="text-secondary font-bold shrink-0">{act.date} :</span>
                      <span>{language === "hi" ? act.textHi : act.textEn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
