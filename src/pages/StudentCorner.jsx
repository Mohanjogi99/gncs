import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function StudentCorner() {
  const { notices, downloads, language, t } = useContext(AppContext);
  const [filterCategory, setFilterCategory] = useState("All");
  const [activeLabTab, setActiveLabTab] = useState("physics");

  const labFacilities = [
    {
      id: "physics",
      nameEn: "Physics Lab",
      nameHi: "भौतिकी प्रयोगशाला",
      descEn: "Equipped with high-precision optical, electrical, and thermal instruments, including a dark room for spectrometer and Newton's rings experiments.",
      descHi: "स्पेक्ट्रोमीटर और न्यूटन के वलयों के प्रयोगों के लिए डार्क रूम सहित उच्च-सटीकता वाले ऑप्टिकल, इलेक्ट्रिकल और थर्मल उपकरणों से सुसज्जित।",
      experiments: [
        { sno: 1, nameEn: "Verification of Ohm's Law and determination of specific resistance.", nameHi: "ओम के नियम का सत्यापन और विशिष्ट प्रतिरोध का निर्धारण।", resourcesEn: "Potentiometer, Battery, Voltmeter, Ammeter", resourcesHi: "विभवमापी, बैटरी, वोल्टमीटर, अमीटर" },
        { sno: 2, nameEn: "Determination of acceleration due to gravity (g) using a Bar Pendulum.", nameHi: "बार पेंडुलम का उपयोग करके गुरुत्वीय त्वरण (g) का निर्धारण।", resourcesEn: "Bar Pendulum, Stopwatch, Vernier Calipers", resourcesHi: "बार पेंडुलम, स्टॉपवॉच, वर्नियर कैलीपर्स" },
        { sno: 3, nameEn: "Measurement of focal length of convex lens using u-v method.", nameHi: "u-v विधि का उपयोग करके उत्तल लेंस की फोकस दूरी का मापन।", resourcesEn: "Optical Bench, Convex Lens, Pins", resourcesHi: "ऑप्टिकल बेंच, उत्तल लेंस, पिन" },
        { sno: 4, nameEn: "Determination of wavelength of sodium light using Newton's Rings.", nameHi: "न्यूटन के वलयों का उपयोग करके सोडियम प्रकाश के तरंगदैर्घ्य का निर्धारण।", resourcesEn: "Sodium Lamp, Microscope, Glass Plates", resourcesHi: "सोडियम लैंप, सूक्ष्मदर्शी, कांच की प्लेटें" },
        { sno: 5, nameEn: "Calibration of voltmeter/ammeter using a potentiometer.", nameHi: "विभवमापी (potentiometer) का उपयोग करके वोल्टमीटर/अमीटर का अंशांकन।", resourcesEn: "Potentiometer, Daniel/Leclanche Cell, Galvanometer", resourcesHi: "विभवमापी, डेनियल/लेक्लांचे सेल, गैल्वेनोमीटर" }
      ]
    },
    {
      id: "chemistry",
      nameEn: "Chemistry Lab",
      nameHi: "रसायन शास्त्र प्रयोगशाला",
      descEn: "Features standard reagent benches, safety hoods, gas pipelines, and experimental setups for volumetric and organic synthesis.",
      descHi: "वॉल्यूमेट्रिक और कार्बनिक संश्लेषण के लिए मानक अभिकर्मक बेंच, सुरक्षा हुड, गैस पाइपलाइनों और प्रयोगात्मक सेटअप की सुविधा।",
      experiments: [
        { sno: 1, nameEn: "Systematic qualitative analysis of inorganic salt mixtures (Acidic/Basic radicals).", nameHi: "अकार्बनिक लवण मिश्रणों का व्यवस्थित गुणात्मक विश्लेषण (अम्लीय/क्षारीय मूलक)।", resourcesEn: "Reagents, Test Tubes, Burner", resourcesHi: "अभिकर्मक, परखनलियां, बर्नर" },
        { sno: 2, nameEn: "Acid-Base titration using phenolphthalein indicator.", nameHi: "फिनोलफथलीन संकेतक का उपयोग करके अम्ल-क्षार अनुमापन (titration)।", resourcesEn: "Burette, Pipette, Conical Flask, NaOH, HCl", resourcesHi: "ब्यूरेट, पिपेट, शंक्वाकार फ्लास्क, NaOH, HCl" },
        { sno: 3, nameEn: "Determination of surface tension of given liquid using stalagmometer.", nameHi: "स्टैलेग्मोमीटर का उपयोग करके दिए गए द्रव के पृष्ठ तनाव का निर्धारण।", resourcesEn: "Stalagmometer, Specific gravity bottle, Water", resourcesHi: "स्टैलेग्मोमीटर, विशिष्ट गुरुत्व बोतल, पानी" },
        { sno: 4, nameEn: "Preparation of organic compound - Benzanilide/Aspirin.", nameHi: "कार्बनिक यौगिक का निर्माण - बेंजानिलाइड/एस्पिरिन।", resourcesEn: "Aniline, Benzoyl chloride, Water bath, Chemicals", resourcesHi: "एनिलिन, बेंज़ोयल क्लोराइड, वॉटर बाथ, रसायन" },
        { sno: 5, nameEn: "Determination of viscosity of liquid using Ostwald's viscometer.", nameHi: "ओस्टवाल्ड विस्कोमीटर का उपयोग करके द्रव की श्यानता (viscosity) का निर्धारण।", resourcesEn: "Ostwald's Viscometer, Stopwatch, Liquids", resourcesHi: "ओस्टवाल्ड विस्कोमीटर, स्टॉपवॉच, द्रव" }
      ]
    },
    {
      id: "botany",
      nameEn: "Botany Lab",
      nameHi: "वनस्पति विज्ञान प्रयोगशाला",
      descEn: "Equipped with compound microscopes, plant specimens, herbarium cabinets, and physiological demonstration kits.",
      descHi: "संयुक्त सूक्ष्मदर्शी, पादप नमूनों, हर्बेरियम अलमारियों और शारीरिक प्रदर्शन किटों से सुसज्जित।",
      experiments: [
        { sno: 1, nameEn: "Study of cellular structure and cell division in onion root tip.", nameHi: "प्याज की जड़ की नोक में कोशिकीय संरचना और कोशिका विभाजन का अध्ययन।", resourcesEn: "Microscope, Onion root, Acetocarmine stain", resourcesHi: "सूक्ष्मदर्शी, प्याज की जड़, एसीटोकारमाइन स्टेन" },
        { sno: 2, nameEn: "Taxonomy study of families: Solanaceae, Fabaceae, and Liliaceae.", nameHi: "कुलों का वर्गीकरण अध्ययन: सोलानेसी, फैबेसी और लिलिएसी।", resourcesEn: "Flowers, Dissecting microscope, Needles", resourcesHi: "फूल, विच्छेदन सूक्ष्मदर्शी, सुइयां" },
        { sno: 3, nameEn: "Demonstration of osmosis using potato osmoscope.", nameHi: "आलू ऑस्मोस्कोप का उपयोग करके परासरण (osmosis) का प्रदर्शन।", resourcesEn: "Potato, Sugar solution, Beaker, Pins", resourcesHi: "आलू, चीनी का घोल, बीकर, पिन" },
        { sno: 4, nameEn: "Study of stomatal distribution on upper and lower leaves surfaces.", nameHi: "पत्तियों की ऊपरी और निचली सतहों पर रंध्र (stomata) के वितरण का अध्ययन।", resourcesEn: "Leaf, Glycerine, Microscope, Slides", resourcesHi: "पत्ती, ग्लिसरीन, सूक्ष्मदर्शी, स्लाइड" },
        { sno: 5, nameEn: "Analysis of plant specimens - Algae, Fungi, and Bryophytes.", nameHi: "पादप नमूनों का विश्लेषण - शैवाल, कवक और ब्रायोफाइट्स।", resourcesEn: "Preserved specimens, Slides, Hand lens", resourcesHi: "संरक्षित नमूने, स्लाइड, हैंड लेंस" }
      ]
    },
    {
      id: "zoology",
      nameEn: "Zoology Lab",
      nameHi: "प्राणी विज्ञान प्रयोगशाला",
      descEn: "Houses dissection trays, microscopic slides of tissues, permanent mounts, and models representing human and animal anatomy.",
      descHi: "विच्छेदन ट्रे, ऊतकों की सूक्ष्मदर्शीय स्लाइड, स्थायी माउंट और मानव एवं जंतु शरीर रचना का प्रतिनिधित्व करने वाले मॉडल उपलब्ध हैं।",
      experiments: [
        { sno: 1, nameEn: "Dissection and study of nervous system/digestive system of Earthworm/Prawn.", nameHi: "केंचुए/झींगे के तंत्रिका तंत्र/पाचन तंत्र का विच्छेदन और अध्ययन।", resourcesEn: "Dissection kit, Specimen, Wax tray", resourcesHi: "विच्छेदन किट, नमूना, मोम की ट्रे" },
        { sno: 2, nameEn: "Microscopic examination of permanent slides (Amoeba, Paramecium, Hydra).", nameHi: "स्थायी स्लाइडों का सूक्ष्मदर्शीय परीक्षण (अमीबा, पैरामीशियम, हाइड्रा)।", resourcesEn: "Compound Microscope, Permanent slides", resourcesHi: "संयुक्त सूक्ष्मदर्शी, स्थायी स्लाइड" },
        { sno: 3, nameEn: "Estimation of hemoglobin percentage in blood sample.", nameHi: "रक्त के नमूने में हीमोग्लोबिन प्रतिशत का आकलन।", resourcesEn: "Sahli's Hemoglobinometer, Blood lancet, HCl", resourcesHi: "साहली का हीमोग्लोबिनोमीटर, रक्त लैंसेट, HCl" },
        { sno: 4, nameEn: "Study of animal fossils and evolutionary adaptations.", nameHi: "जंतु जीवाश्मों और विकासवादी अनुकूलन का अध्ययन।", resourcesEn: "Fossil specimens, Charts", resourcesHi: "जीवाश्म नमूने, चार्ट" },
        { sno: 5, nameEn: "Identification of mammalian tissues through histological slides.", nameHi: "हिस्टोलॉजिकल स्लाइडों के माध्यम से स्तनधारी ऊतकों की पहचान।", resourcesEn: "Microscope, Histology slides", resourcesHi: "सूक्ष्मदर्शी, हिस्टोलॉजी स्लाइड" }
      ]
    },
    {
      id: "geography",
      nameEn: "Geography Lab",
      nameHi: "भूगोल प्रयोगशाला",
      descEn: "Features standard surveying equipment, 3D topographical models, satellite mapping references, and weather reading devices.",
      descHi: "मानक सर्वेक्षण उपकरण, 3D स्थलाकृतिक मॉडल, उपग्रह मानचित्रण संदर्भ और मौसम रीडिंग उपकरण उपलब्ध हैं।",
      experiments: [
        { sno: 1, nameEn: "Map reading, scale conversions (Representative Fraction, Linear Scale).", nameHi: "मानचित्र पठन, पैमाना रूपांतरण (निरूपक भिन्न, रैखिक पैमाना)।", resourcesEn: "Topographical sheets, Rulers, Calculators", resourcesHi: "स्थलाकृतिक शीट, रूलर, कैलकुलेटर" },
        { sno: 2, nameEn: "Study and drawing of weather symbols and weather map interpretation.", nameHi: "मौसम प्रतीकों का अध्ययन और मौसम मानचित्र की व्याख्या।", resourcesEn: "Daily Weather Reports, Drawing sheets", resourcesHi: "दैनिक मौसम रिपोर्ट, ड्राइंग शीट" },
        { sno: 3, nameEn: "Construction of map projections (Cylindrical, Conical, Zenithal).", nameHi: "मानचित्र प्रक्षेपों का निर्माण (बेलनाकार, शंक्वाकार, खमध्य)।", resourcesEn: "Drawing instruments, Mathematical tables", resourcesHi: "चित्रण उपकरण (ड्राइंग टूल्स), गणितीय तालिकाएँ" },
        { sno: 4, nameEn: "Surveying using Chain and Tape method / Prismatic Compass.", nameHi: "जरीब और फीता (Chain and Tape) सर्वेक्षण / प्रिज्मीय कम्पास।", resourcesEn: "Survey chain, Tape, Arrows, Ranging rods", resourcesHi: "सर्वेक्षण श्रृंखला, फीता, तीर, रेंजिंग रॉड्स" },
        { sno: 5, nameEn: "Representation of demographic data using bar graphs and pie charts.", nameHi: "बार ग्राफ़ और पाई चार्ट का उपयोग करके जनसांख्यिकीय डेटा का निरूपण।", resourcesEn: "Census data sheets, Graph paper, Colors", resourcesHi: "जनगणना डेटा पत्रक, ग्राफ पेपर, रंग" }
      ]
    }
  ];

  // Get active student corner categories
  // Notices category: "Admission", "Scholarship", "Examination", "Event", "Academic"
  const categories = ["All", "Examination", "Scholarship", "Academic", "Event"];

  const filteredNotices = notices.filter((notice) => {
    if (filterCategory === "All") return true;
    return notice.category.toLowerCase() === filterCategory.toLowerCase();
  });

  const studentDownloads = downloads.filter((down) =>
    ["Academic Calendar", "Syllabus", "Scholarship Forms"].includes(down.category)
  );

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "छात्र कोना" : "Student Corner"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Time Tables, Exams, Scholarships & Activities
        </p>
      </section>

      {/* Quick Access Utility Actions */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          href="https://snpv.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl border border-outline-variant/60 bg-white hover:border-secondary hover:shadow-sm transition-all flex items-center gap-4 group"
        >
          <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-105 transition-all">
            badge
          </span>
          <div>
            <h4 className="font-bold text-sm text-primary">Download Admit Card</h4>
            <p className="text-[11px] text-on-surface-variant">Click to visit SNPV portal for UG Admit cards</p>
          </div>
        </a>

        <a
          href="https://www.snpvraigarh.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl border border-outline-variant/60 bg-white hover:border-secondary hover:shadow-sm transition-all flex items-center gap-4 group"
        >
          <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-105 transition-all">
            task_alt
          </span>
          <div>
            <h4 className="font-bold text-sm text-primary">Check Exam Results</h4>
            <p className="text-[11px] text-on-surface-variant">Annual & semester exam results check link</p>
          </div>
        </a>

        <a
          href="http://postmatric-scholarship.cg.nic.in"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl border border-outline-variant/60 bg-white hover:border-secondary hover:shadow-sm transition-all flex items-center gap-4 group"
        >
          <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-105 transition-all">
            payments
          </span>
          <div>
            <h4 className="font-bold text-sm text-primary">State Scholarship Portal</h4>
            <p className="text-[11px] text-on-surface-variant">Apply online for CG Post-Matric Scholarship</p>
          </div>
        </a>
      </section>

      {/* Main Student Notices and Resources Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Notice Board with Filtering */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-outline-variant pb-4 gap-4">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">feed</span>
              Student Circulars & Notice Board | सूचनाएं
            </h3>
          </div>

          {/* Filter Categories Pill Grid */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold border transition-all ${
                  filterCategory === cat
                    ? "bg-secondary text-white border-secondary shadow-sm"
                    : "bg-surface hover:bg-surface-container border-outline-variant/60 text-on-surface-variant"
                }`}
              >
                {cat === "All"
                  ? language === "hi"
                    ? "सभी श्रेणियां"
                    : "All Categories"
                  : cat}
              </button>
            ))}
          </div>

          {/* Notices feed */}
          <div className="space-y-4">
            {filteredNotices.length === 0 ? (
              <p className="text-xs text-on-surface-variant italic py-6 text-center">
                No announcements posted in this category.
              </p>
            ) : (
              filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="p-5 rounded-2xl border border-outline-variant bg-surface-container-low/30 hover:border-primary/20 hover:bg-white transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] bg-secondary-container text-on-secondary-container font-bold px-2 py-0.5 rounded-full">
                        {notice.category}
                      </span>
                      {notice.isImportant && (
                        <span className="text-[10px] bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded-full uppercase animate-pulse">
                          Important
                        </span>
                      )}
                      <span className="text-[10px] text-on-surface-variant font-medium">
                        Posted: {notice.publishDate}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-primary">
                      {language === "hi" ? notice.titleHindi : notice.titleEn || notice.titleEnglish}
                    </h4>
                  </div>
                  {notice.fileUrl && (
                    <a
                      href={notice.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary/5 hover:bg-primary hover:text-white text-primary px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border border-primary/10 transition-all shrink-0 sm:self-center"
                    >
                      <span className="material-symbols-outlined text-sm">download</span>
                      Download Circular
                    </a>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Student Resources Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Downloads */}
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">folder_zip</span>
              Useful Documents
            </h3>
            {studentDownloads.length === 0 ? (
              <p className="text-xs text-on-surface-variant italic">No resources uploaded.</p>
            ) : (
              <div className="divide-y divide-outline-variant/50">
                {studentDownloads.map((down) => (
                  <div key={down.id} className="py-3 flex justify-between items-center text-xs gap-3">
                    <div className="overflow-hidden">
                      <span className="font-bold text-on-surface block truncate">
                        {language === "hi" ? down.titleHindi : down.titleEnglish}
                      </span>
                      <span className="text-[10px] text-on-surface-variant">{down.category}</span>
                    </div>
                    <a
                      href={down.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-secondary font-bold shrink-0 flex items-center gap-0.5"
                    >
                      <span className="material-symbols-outlined text-base">download</span>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* NSS/NCC Activities */}
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">volunteer_activism</span>
              NSS & Cultural Units
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {language === "hi"
                ? "महाविद्यालय में राष्ट्रीय सेवा योजना (NSS) की एक सक्रिय इकाई संचालित है, जिसके तहत वृक्षारोपण, स्वास्थ्य शिविर, स्वच्छता अभियान और साक्षरता रैलियां आयोजित की जाती हैं। नवीन सत्र के प्रवेशार्थी इकाई समन्वयक डॉ. कमलेश चंद्र से संपर्क कर पंजीयन करा सकते हैं।"
                : "The college runs a highly active NSS unit promoting community welfare, health camps, tree plantation, and cleanliness drives. New students can enroll by contacting the NSS Programme Coordinator Dr. Kamlesh Chandra."}
            </p>
          </div>
        </div>
      </section>

      {/* Lab Facilities & Experiments Section */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-6">
        <div className="border-b border-outline-variant pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">biotech</span>
            {language === "hi" ? "प्रयोगशाला सुविधाएं एवं प्रयोगों की सूची" : "Laboratory Facilities & Experiments List"}
          </h3>
          <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase">
            Science & Humanities Labs
          </span>
        </div>

        {/* Tab Controls for Labs */}
        <div className="flex flex-wrap gap-2 justify-start border-b border-outline-variant/40 pb-4">
          {labFacilities.map((lab) => (
            <button
              key={lab.id}
              onClick={() => setActiveLabTab(lab.id)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                activeLabTab === lab.id
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-surface hover:bg-surface-container border-outline-variant/60 text-on-surface-variant"
              }`}
            >
              <span className="material-symbols-outlined text-base">science</span>
              {language === "hi" ? lab.nameHi : lab.nameEn}
            </button>
          ))}
        </div>

        {/* Selected Lab Detail and Experiments Table */}
        {(() => {
          const selectedLab = labFacilities.find((lab) => lab.id === activeLabTab);
          if (!selectedLab) return null;
          return (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/50 space-y-2">
                <h4 className="font-bold text-base text-primary">
                  {language === "hi" ? selectedLab.nameHi : selectedLab.nameEn}
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {language === "hi" ? selectedLab.descHi : selectedLab.descEn}
                </p>
              </div>

              {/* Experiments Table */}
              <div className="overflow-x-auto border border-outline-variant/60 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm min-w-[650px] border-collapse">
                  <thead className="bg-surface-container-low border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                    <tr>
                      <th className="px-4 py-3 text-center w-16">SNo. / क्र.सं.</th>
                      <th className="px-4 py-3">{language === "hi" ? "प्रयोग का विवरण" : "Experiment Name & Description"}</th>
                      <th className="px-4 py-3">{language === "hi" ? "आवश्यक उपकरण/संसाधन" : "Required Instruments/Resources"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/40 bg-white">
                    {selectedLab.experiments.map((exp) => (
                      <tr key={exp.sno} className="hover:bg-surface-container-lowest transition-colors">
                        <td className="px-4 py-3.5 text-center font-bold text-on-surface-variant">{exp.sno}</td>
                        <td className="px-4 py-3.5 space-y-1">
                          <span className="font-bold text-primary block leading-snug">
                            {language === "hi" ? exp.nameHi : exp.nameEn}
                          </span>
                          <span className="text-[10px] text-on-surface-variant font-medium block">
                            {language === "hi" ? exp.nameEn : exp.nameHi}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 font-semibold text-secondary leading-snug">
                          {language === "hi" ? exp.resourcesHi : exp.resourcesEn}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })()}
      </section>
    </div>
  );
}
