import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function About() {
  const { t, language } = useContext(AppContext);

  const profileDetails = [
    { labelHi: "स्थापना वर्ष", labelEn: "Established Year", value: "2021" },
    { labelHi: "संबद्ध विश्वविद्यालय", labelEn: "Affiliated University", value: language === "hi" ? "शहीद नंदकुमार पटेल विश्वविद्यालय, रायगढ़ (छ.ग.)" : "Shaheed Nandkumar Patel Vishwavidyalaya, Raigarh (C.G.)" },
    { labelHi: "महाविद्यालय कोड", labelEn: "College Code", value: "808" },
    { labelHi: "प्रकार", labelEn: "Institution Type", value: language === "hi" ? "शासकीय (सह-शिक्षा)" : "Government (Co-Education)" },
    { labelHi: "यूजीसी मान्यता", labelEn: "UGC Status", value: "Registered under 2(f) and 12(B) of UGC Act" },
    { labelHi: "संचालित पाठ्यक्रम", labelEn: "Programs Offered", value: "B.A., B.Sc. (Bio/Maths), B.Com." },
    { labelHi: "जिला", labelEn: "District", value: language === "hi" ? "जांजगीर-चांपा, छत्तीसगढ़" : "Janjgir-Champa, Chhattisgarh" },
    { labelHi: "पिन कोड", labelEn: "Pin Code", value: "495686" }
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Page Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "महाविद्यालय के बारे में" : "About the College"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • {t("districtName")}
        </p>
      </section>

      {/* Intro & History Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2">
            <span className="material-symbols-outlined text-secondary">history</span>
            {t("history")} | महाविद्यालय का इतिहास
          </h3>
          <div className="text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-4">
            <p>
              {language === "hi"
                ? "शासकीय नवीन महाविद्यालय, सारागांव की स्थापना छत्तीसगढ़ शासन, उच्च शिक्षा विभाग द्वारा वर्ष 2021 में की गई थी। इस महाविद्यालय का मुख्य उद्देश्य सारागांव क्षेत्र के अंतर्गत आने वाले सुदूर ग्रामीण एवं आर्थिक रूप से कमजोर वर्ग के छात्र-छात्राओं को उच्च शिक्षा की मुख्यधारा से जोड़ना है।"
                : "Government Naveen College, Saragaon was established in 2021 by the Department of Higher Education, Government of Chhattisgarh. The main objective of the college is to connect students from remote rural and economically weaker sections under the Saragaon region to mainstream higher education."}
            </p>
            <p>
              {language === "hi"
                ? "प्रारंभ से ही यह महाविद्यालय उच्च शिक्षा के क्षेत्र में गुणवत्ता और अनुशासन के लिए प्रयासरत रहा है। वर्तमान में यह शहीद नंदकुमार पटेल विश्वविद्यालय, रायगढ़ से संबद्ध होकर कला, विज्ञान और वाणिज्य संकायों में स्नातक डिग्री प्रदान कर रहा है।"
                : "Since its inception, the college has been striving for quality and discipline in higher education. Currently, it is affiliated to Shaheed Nandkumar Patel Vishwavidyalaya, Raigarh, offering undergraduate degrees in Arts, Science, and Commerce streams."}
            </p>
          </div>
        </div>

        {/* Profile Card Table */}
        <div className="lg:col-span-4 bg-surface-container-low p-6 rounded-3xl border border-outline-variant flex flex-col justify-between">
          <h3 className="text-base sm:text-lg font-bold text-primary flex items-center gap-2 border-b border-outline-variant/60 pb-3 mb-4">
            <span className="material-symbols-outlined text-secondary">description</span>
            {t("profile")}
          </h3>
          <div className="divide-y divide-outline-variant/60">
            {profileDetails.map((detail, idx) => (
              <div key={idx} className="py-2.5 flex justify-between gap-4 text-xs">
                <span className="font-bold text-on-surface-variant">
                  {language === "hi" ? detail.labelHi : detail.labelEn}
                </span>
                <span className="text-right text-on-surface font-semibold">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter pt-4">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">visibility</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-primary border-b border-outline-variant/40 pb-2">
            {t("vision")}
          </h3>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {language === "hi"
              ? "ग्रामीण पृष्ठभूमि के छात्र-छात्राओं में वैज्ञानिक चेतना, नैतिक मूल्यों और सामाजिक दायित्वों का संचार करते हुए उन्हें वैश्विक चुनौतियों के अनुकूल उत्कृष्ट मानव संसाधन के रूप में विकसित करना।"
              : "To develop students from rural backgrounds into excellent human resources capable of facing global challenges, by instilling scientific consciousness, ethical values, and civic duties."}
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-secondary/5 text-secondary rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">target</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-primary border-b border-outline-variant/40 pb-2">
            {t("mission")}
          </h3>
          <ul className="text-sm sm:text-base text-on-surface-variant leading-relaxed list-disc list-inside space-y-2">
            {language === "hi" ? (
              <>
                <li>गुणवत्तापूर्ण एवं सुलभ शिक्षा प्रदान करना।</li>
                <li>छात्रों में तार्किक क्षमता और रचनात्मकता को बढ़ावा देना।</li>
                <li>खेलकूद, एनएसएस एवं सांस्कृतिक गतिविधियों द्वारा व्यक्तित्व विकास।</li>
              </>
            ) : (
              <>
                <li>To provide quality, affordable, and accessible higher education.</li>
                <li>To foster logical thinking, creativity, and analytical skills.</li>
                <li>To promote personality development through sports, NSS, and cultural programs.</li>
              </>
            )}
          </ul>
        </div>
      </section>

      {/* Institutional Objectives */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2">
          <span className="material-symbols-outlined text-secondary">verified_user</span>
          {t("objectives")} | महाविद्यालय के मुख्य उद्देश्य
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm sm:text-base text-on-surface-variant leading-relaxed pt-2">
          <div className="space-y-2">
            <h4 className="font-bold text-primary">1. Academic Inclusivity</h4>
            <p className="text-xs sm:text-sm">
              {language === "hi"
                ? "सभी वर्गों के विद्यार्थियों को जाति, लिंग या आर्थिक स्थिति के भेदभाव के बिना समान अवसर प्रदान करना।"
                : "Providing equal learning opportunities to all students irrespective of caste, gender, or economic background."}
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-primary">2. Modern Learning</h4>
            <p className="text-xs sm:text-sm">
              {language === "hi"
                ? "पारंपरिक पाठ्यक्रमों के साथ कंप्यूटर, इंटरनेट एवं प्रयोगात्मक विज्ञान शिक्षण को बढ़ावा देना।"
                : "Promoting digital learning, internet research, and experimental scientific work alongside curriculum."}
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-primary">3. Ethical Leadership</h4>
            <p className="text-xs sm:text-sm">
              {language === "hi"
                ? "छात्रों में राष्ट्र प्रेम, पर्यावरण के प्रति संवेदनशीलता और नैतिक आचरण का विकास करना।"
                : "Fostering patriotism, environmental consciousness, and clean moral conduct among the youth."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
