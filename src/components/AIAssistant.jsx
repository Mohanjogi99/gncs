import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function AIAssistant() {
  const {
    courses,
    notices,
    newsEvents,
    departments,
    language,
    chatbotSettings
  } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Read Gemini API Key from environment
  const API_KEY = chatbotSettings?.apiKey || import.meta.env.VITE_GEMINI_API_KEY || "";
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Initial welcome message
  useEffect(() => {
    setMessages([
      {
        role: "model",
        text: language === "hi"
          ? "नमस्ते! मैं शासकीय नवीन महाविद्यालय सारागांव का AI सहायक हूँ। आप मुझसे कॉलेज के कोर्स, फीस, लाइब्रेरी नियम, परीक्षा लिंक या हालिया सूचनाओं के बारे में पूछ सकते हैं। मैं आपकी क्या मदद कर सकता हूँ?"
          : "Hello! I am the AI Assistant for Govt Naveen College, Saragaon. You can ask me about courses, fees, library rules, exam links, or recent notices. How can I help you today?"
      }
    ]);
  }, [language]);

  // Suggestion questions
  const suggestions = language === "hi" 
    ? [
        { label: "कोर्स की सूची", query: "महाविद्यालय में कौन-कौन से कोर्स उपलब्ध हैं?" },
        { label: "परीक्षा परिणाम", query: "परीक्षा परिणाम (Results) कैसे चेक करें?" },
        { label: "नवीनतम सूचनाएं", query: "कॉलेज की हालिया सूचनाएं (Notices) क्या हैं?" }
      ]
    : [
        { label: "Courses List", query: "What courses are available in the college?" },
        { label: "Exam Results", query: "How can I check my exam results?" },
        { label: "Recent Notices", query: "What are the latest college notices?" }
      ];

  // Construct dynamic knowledge base context
  const getSystemInstruction = () => {
    const coursesStr = (courses || []).map(c => `- ${c.nameEn} (${c.nameHi}): Duration: ${c.duration || "3 Years"}, Seats: ${c.seats || "Check website"}`).join("\n");
    const deptsStr = (departments || []).map(d => `- ${d.nameEn} (${d.nameHi})`).join("\n");
    const noticesStr = (notices || []).slice(0, 5).map(n => `- [${n.createdAt || "Recent"}] ${n.titleEnglish} / ${n.titleHindi} (${n.category})`).join("\n");
    const newsStr = (newsEvents || []).slice(0, 5).map(e => `- [${e.createdAt || "Recent"}] ${e.titleEnglish} / ${e.titleHindi}`).join("\n");

    return `
You are the official Student Support AI Assistant of Government Naveen College, Saragaon (शासकीय नवीन महाविद्यालय, सारागांव).
Your goal is to help students with accurate, helpful, and concise information in a friendly tone.
You must speak in the language the student asks (either Hindi, English, or a mix of both / Hinglish).

Here is the real-time information about the college:
- College Name: Government Naveen College, Saragaon (शासकीय नवीन महाविद्यालय, सारागांव)
- Affiliation: Shaheed Nandkumar Patel Vishwavidyalaya, Raigarh (शहीद नंदकुमार पटेल विश्वविद्यालय, रायगढ़) - SNPV
- Address: Ward No. 12, Janjgir-Champa District, Chhattisgarh, 495686.
- Campus: JDM Govt Girls School Campus.
- Contact Email: govtcollegesaragaon@gmail.com
- Contact Phone: 7722861400

Courses & Programs:
${coursesStr || "B.Sc. (Biology/Maths Group), B.Com., B.A."}

Departments:
${deptsStr || "Science, Commerce, Arts"}

Latest Notices & Announcements:
${noticesStr || "Please visit notice board for recent updates."}

Latest News & Events:
${newsStr || "Please visit news section."}

Useful Links (Give these links directly when students ask for results/admit cards):
- Download Admit Card: Visit SNPV portal (https://snpv.ac.in)
- Check Exam Results: Visit SNPV results checker (https://www.snpvraigarh.in/)
- State Scholarship Portal: Apply online for CG Post-Matric Scholarship (http://postmatric-scholarship.cg.nic.in)
`;
  };

  const handleSendMessage = async (textToSend = input) => {
    if (!textToSend.trim()) return;

    if (!API_KEY) {
      const warningMessage = language === "hi"
        ? "चैटबॉट काम नहीं कर रहा है क्योंकि API Key कॉन्फ़िगर नहीं की गई है।"
        : "The chatbot is offline because the API Key is not configured.";
      
      setMessages(prev => [
        ...prev,
        { role: "user", text: textToSend },
        { role: "model", text: warningMessage }
      ]);
      setInput("");
      return;
    }

    const userMessage = { role: "user", text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Build conversation history for Gemini API
      const contents = [
        ...messages.map(m => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.text }]
        })),
        { role: "user", parts: [{ text: textToSend }] }
      ];

      const response = await fetch(`${GEMINI_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: getSystemInstruction() }]
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errMsg = errorData.error?.message || `HTTP ${response.status}`;
        throw new Error(errMsg);
      }

      const data = await response.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!aiText) {
        throw new Error("No response content received from Gemini.");
      }

      setMessages(prev => [...prev, { role: "model", text: aiText }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      const errText = language === "hi"
        ? `माफ़ करें, कुछ तकनीकी समस्या आई। कृपया दोबारा कोशिश करें। (${error.message || "Connection failed"})`
        : `Sorry, something went wrong. Please try again. (${error.message || "Connection failed"})`;
      setMessages(prev => [
        ...prev,
        { role: "model", text: errText }
      ]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-white border border-outline-variant text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer relative group p-0.5"
        >
          <img src="/ai-assistant-logo.png" alt="AI Assistant" className="w-12 h-12 object-contain rounded-full" />
          {/* Pulsing notification badge */}
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white/95 backdrop-blur-md w-[350px] sm:w-[380px] h-[500px] rounded-3xl border border-outline-variant shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-3.5 flex items-center justify-between shadow">
            <div className="flex items-center gap-3">
              <img src="/ai-assistant-logo.png" alt="Logo" className="w-10 h-10 object-contain bg-white rounded-full p-0.5" />
              <div>
                <h4 className="font-bold text-sm leading-tight">
                  {language === "hi" ? "छात्र सहायता AI" : "Student Support AI"}
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-white/80 font-medium">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-white transition-all p-1 hover:bg-white/10 rounded-full cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Messages List Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface-container-lowest/20">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-150`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    m.role === "user"
                      ? "bg-primary text-white rounded-tr-none"
                      : "bg-surface-container-low text-on-surface border border-outline-variant/30 rounded-tl-none"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-surface-container-low text-on-surface border border-outline-variant/30 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary/70 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-primary/70 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-primary/70 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          {messages.length === 1 && (
            <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-outline-variant/40 bg-surface-container-lowest/30">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(s.query)}
                  className="text-[10px] sm:text-xs px-2.5 py-1 bg-surface-container-low hover:bg-surface-container border border-outline-variant/50 rounded-full text-primary font-semibold transition-all cursor-pointer"
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 border-t border-outline-variant/60 flex items-center gap-2 bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={language === "hi" ? "अपना प्रश्न यहाँ लिखें..." : "Type your question..."}
              className="flex-1 px-4 py-2.5 rounded-full border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="w-9 h-9 bg-primary hover:bg-primary-container text-white rounded-full flex items-center justify-center shadow transition-all cursor-pointer disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
