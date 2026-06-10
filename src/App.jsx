import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

// Common Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Administration from "./pages/Administration";
import Departments from "./pages/Departments";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";
import StudentCorner from "./pages/StudentCorner";
import FacultyCorner from "./pages/FacultyCorner";
import BiodataViewer from "./pages/BiodataViewer";
import IQAC from "./pages/IQAC";
import Research from "./pages/Research";
import Library from "./pages/Library";
import Gallery from "./pages/Gallery";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";

// Secure Admin Dashboard & Auth Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function AppContent() {
  return (
    <Router>
      <Header />
      <main className="flex-1 bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/faculty-corner" element={<FacultyCorner />} />
          <Route path="/biodata/:id" element={<BiodataViewer />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/research" element={<Research />} />
          <Route path="/library" element={<Library />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
