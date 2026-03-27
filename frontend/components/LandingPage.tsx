import React from 'react';
import {
  Brain, FileText, CheckCircle, Shield, Clock, Search, Phone, Star, ShieldCheck, UserCheck, Stethoscope, 
  ArrowRight, Activity, FileCheck, MessageSquare, MapPin, ChevronRight, Lock, Eye, AlertTriangle
} from 'lucide-react';

interface LandingPageProps {
  onLoginClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* ===== HEADER ===== */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-50/50 transition-all">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-blue-600 stroke-[2.5]" />
            <span className="text-2xl font-bold text-blue-600 tracking-tight outfit">
              MedZora
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
            <a href="#problem" className="hover:text-blue-600 transition-colors">Why MedZora</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={onLoginClick}
              className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={onLoginClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium shadow-md shadow-blue-500/20 transition-all active:scale-95 flex items-center gap-2 text-sm"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 container mx-auto px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl z-0 pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10 w-full">
          <div className="w-full lg:w-[55%] xl:w-[50%] pt-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100 rounded-full py-1.5 px-4 mb-6 shadow-sm">
              <span className="flex w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">New Era of Healthcare</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-slate-900 tracking-tight outfit mb-6 leading-[1.15] max-w-xl">
              Get AI-Powered Medical Reports — <br className="hidden xl:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent">Verified by Real Doctors</span>
            </h1>
            
            <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed">
              Describe your symptoms, get instant AI pre-diagnosis analysis, and receive structured, doctor-approved medical reports directly to your device.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                onClick={onLoginClick} 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 flex justify-center items-center gap-2"
              >
                <Search className="w-5 h-5"/> Start Diagnosis
              </button>
              <button 
                onClick={onLoginClick} 
                className="w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-blue-200 hover:bg-blue-50 text-slate-700 px-8 py-4 rounded-full font-semibold transition-all flex justify-center items-center gap-2"
              >
                <Stethoscope className="w-5 h-5 text-blue-500"/> Login as Doctor
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-[45%] xl:w-[50%] relative flex justify-center lg:justify-end items-center animate-fade-in-up mt-8 lg:mt-0" style={{animationDelay: '0.2s'}}>
            {/* Split Screen Concept UI representation */}
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <img 
                src="/images/dashboard.png" 
                alt="Medzora Dashboard" 
                className="w-full h-auto rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-200/60 hover:-translate-y-2 hover:rotate-1 transition-transform duration-700 ease-in-out relative z-20 bg-white"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2669&auto=format&fit=crop";
                }}
              />
              <div className="absolute -left-4 -bottom-6 sm:-left-10 lg:-left-16 sm:bottom-10 bg-white p-4 sm:p-5 rounded-2xl shadow-xl z-30 border border-slate-100 w-[280px] sm:w-[320px] animate-bounce" style={{animationDuration: '3s'}}>
                <div className="flex items-center gap-4 mb-1">
                  <div className="w-12 h-12 bg-green-50 text-green-500 border border-green-100 rounded-full flex items-center justify-center shadow-sm">
                    <CheckCircle className="w-6 h-6"/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base">Report Verified</h4>
                    <p className="text-xs sm:text-sm text-slate-500">Dr. Sarah Jenkins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. PROBLEM -> SOLUTION SECTION ===== */}
      <section id="problem" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 outfit">The Healthcare Challenge</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Bridging the gap between patient uncertainty and clinical accuracy.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch max-w-5xl mx-auto">
            {/* Problem card */}
            <div className="bg-red-50/50 border border-red-100 rounded-3xl p-8 lg:p-12 hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="text-red-500" /> The Problem
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="min-w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600"><Clock className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Long Waiting Time</h4>
                    <p className="text-sm text-slate-600 mt-1">Patients wait weeks for an initial consultation, increasing anxiety.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="min-w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600"><FileText className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Unstructured Symptoms</h4>
                    <p className="text-sm text-slate-600 mt-1">Explaining scattered symptoms leads to miscommunication.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="min-w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600"><UserCheck className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Doctor Overload</h4>
                    <p className="text-sm text-slate-600 mt-1">Physicians spend valuable time charting initial data rather than treating.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Solution card */}
            <div className="bg-blue-600 text-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-blue-500/20 hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="text-blue-200" /> The Medzora Solution
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="min-w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"><Activity className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold">Instant AI Pre-diagnosis</h4>
                    <p className="text-sm text-blue-100 mt-1">Get immediate, accurate insights into your health within seconds.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="min-w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"><FileCheck className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold">Structured Medical Report</h4>
                    <p className="text-sm text-blue-100 mt-1">Clean, organized PDFs ready for clinical consumption.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="min-w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"><ShieldCheck className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold">Doctor Verification</h4>
                    <p className="text-sm text-blue-100 mt-1">Reports are validated by licensed professionals before finalization.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. HOW IT WORKS (CORE SECTION) ===== */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 outfit">How MedZora Works</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A seamless orchestration between advanced AI and human medical expertise.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
            {/* Patient Flow */}
            <div className="relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8 inline-block">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><UserCheck className="text-blue-500"/> For Patients</h3>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-100 before:to-slate-100 z-0">
                
                {[
                  { icon: MessageSquare, title: "Enter Symptoms", desc: "Use natural language to explain what you're feeling." },
                  { icon: Brain, title: "Get AI Analysis", desc: "MedZora instantly predicts potential conditions." },
                  { icon: ShieldCheck, title: "Doctor Verifies", desc: "A licensed doctor reviews and approves the AI report." },
                  { icon: FileText, title: "Download PDF & Chat", desc: "Get your official report and clarify doubts via chat." }
                ].map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-6 z-10 group">
                    <div className="w-12 h-12 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex-grow hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-800">{step.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Doctor Flow */}
            <div className="relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8 inline-block">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Stethoscope className="text-indigo-500"/> For Doctors</h3>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-100 before:to-slate-100 z-0">
                
                {[
                  { icon: Eye, title: "Review AI Reports", desc: "Access auto-generated patient symptom structured data." },
                  { icon: FileCheck, title: "Edit Diagnosis", desc: "Make clinical adjustments based on expertise." },
                  { icon: CheckCircle, title: "Verify & Send", desc: "Digitally sign and dispatch the authorized report." },
                  { icon: MessageSquare, title: "Chat with Patient", desc: "Provide follow-up advice directly through the app." }
                ].map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-6 z-10 group">
                    <div className="w-12 h-12 bg-white border-2 border-indigo-500 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-indigo-50 transition-all">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex-grow hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-800">{step.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. AI TECHNOLOGY HIGHLIGHT ===== */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-700/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/80 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto bg-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-blue-700/50">
              <Brain className="w-8 h-8 text-blue-300" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold outfit mb-8 leading-tight">
              Not just AI &mdash; <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Hybrid Intelligence for Accurate Diagnosis</span>
            </h2>
            
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
              We combine specialized predictive models for ultra-fast disease recognition with powerful large language models to deliver detailed, empathetic, and medically sound reasoning.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 p-6 rounded-2xl text-left">
                <Activity className="w-6 h-6 text-blue-300 mb-3"/>
                <h4 className="font-bold text-lg mb-2">Fast Disease Prediction</h4>
                <p className="text-sm text-blue-200">Statistical pattern matching recognizes underlying conditions with incredible speed.</p>
              </div>
              <div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 p-6 rounded-2xl text-left">
                <FileText className="w-6 h-6 text-blue-300 mb-3"/>
                <h4 className="font-bold text-lg mb-2">Detailed Medical Reasoning</h4>
                <p className="text-sm text-blue-200">Advanced cognitive processing constructs a cohesive, readable clinical narrative.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. LIVE FEATURES SHOWCASE ===== */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 outfit">Experience the Product</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Intuitive tools designed for modern healthcare delivery.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="h-64 bg-slate-200 relative overflow-hidden flex items-center justify-center p-6">
                 <img 
                    src="/images/report.png" 
                    alt="AI Generated Report Preview" 
                    className="w-full h-full object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop";
                    }}
                  />
              </div>
              <div className="p-8 flex-1">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">AI-Generated Reports</h3>
                <p className="text-slate-500 text-sm mb-4">Preview comprehensive medical reports including symptom timeline and differential diagnosis instantly.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="h-64 bg-slate-200 relative overflow-hidden flex items-center justify-center p-6">
                 <img 
                    src="/images/chat.png" 
                    alt="Patient-Doctor Chat" 
                    className="w-full h-full object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500 object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1627885741635-c3f2d216f9ec?q=80&w=2670&auto=format&fit=crop";
                    }}
                  />
              </div>
              <div className="p-8 flex-1">
                <MessageSquare className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Patient-Doctor Chat</h3>
                <p className="text-slate-500 text-sm mb-4">Secure messaging system for post-diagnosis clarification without scheduling another appointment.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-50 relative overflow-hidden flex items-center justify-center p-6">
                 <div className="bg-white p-6 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500 w-full text-center">
                    <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h4 className="font-bold text-slate-800">Pharmacy Locator</h4>
                 </div>
              </div>
              <div className="p-8 flex-1">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Nearby Medical Shops</h3>
                <p className="text-slate-500 text-sm mb-4">Future update will locate nearest pharmacies to fulfill prescriptions derived from the authorized reports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. TRUST & SAFETY SECTION ===== */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-300">
            <div className="p-6 md:p-8">
              <Lock className="w-10 h-10 text-slate-700 mx-auto mb-4"/>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Data Privacy First</h3>
              <p className="text-sm text-slate-500">Your symptom inputs and medical histories are encrypted and anonymized securely.</p>
            </div>
            <div className="p-6 md:p-8">
              <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4"/>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Doctor Verified</h3>
              <p className="text-sm text-slate-500">Zero automated prescriptions. Every report requires a professional signature.</p>
            </div>
            <div className="p-6 md:p-8">
              <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-4"/>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Disclaimer</h3>
              <p className="text-sm text-slate-500">MedZora AI acts as an assistant. It is strictly not a replacement for emergency consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. TESTIMONIALS ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 outfit">Trusted by Patients & Professionals</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Review 1 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="flex text-amber-400 mb-4">
                <Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/>
              </div>
              <p className="text-slate-700 text-lg italic mb-6">"Saved me hours of waiting before seeing the doctor. My doctor already knew exactly what was wrong based on the structured AI report!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold">JD</div>
                <div>
                  <h4 className="font-bold text-slate-900">John Doe</h4>
                  <p className="text-xs text-slate-500">Patient</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="flex text-amber-400 mb-4">
                <Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/>
              </div>
              <p className="text-slate-700 text-lg italic mb-6">"MedZora has drastically cut down charting time. When the patient walks in, I already have the symptom history structured logically."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 font-bold">DR</div>
                <div>
                  <h4 className="font-bold text-slate-900">Dr. Emily Chen</h4>
                  <p className="text-xs text-slate-500">General Physician</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. CALL TO ACTION ===== */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
            {/* Visual elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold outfit mb-6">Ready to Transform Your Healthcare Journey?</h2>
              <p className="text-blue-100 mb-10 text-lg">Join thousands of patients receiving faster, more accurate medical guidance today.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={onLoginClick}
                  className="w-full sm:w-auto bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 text-lg flex justify-center items-center gap-2"
                >
                  Start Your First Diagnosis
                </button>
                <button 
                  onClick={onLoginClick}
                  className="w-full sm:w-auto bg-transparent border-2 border-blue-300 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1 text-lg flex justify-center items-center gap-2"
                >
                  <Stethoscope className="w-5 h-5"/> Join as a Doctor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. FOOTER ===== */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Activity className="w-6 h-6 text-blue-500 stroke-[2.5]" />
              <span className="text-xl font-bold text-white tracking-tight outfit">MedZora</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">About MedZora</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm border-t border-slate-800/50 pt-8 opacity-60">
            &copy; {new Date().getFullYear()} MedZora Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
