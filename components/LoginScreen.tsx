import React, { useState } from 'react';
import { UserRole } from '../types';
import { LanguageSelector } from './LanguageSelector';
import { Stethoscope, User, ArrowLeft, Activity } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (email: string, password: string) => Promise<boolean>;
  onSignUp: (data: any) => Promise<'SUCCESS' | 'ID_EXISTS' | 'INVALID_CODE'>;
  onBack: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onSignUp, onBack }) => {
  const [isPatientLogin, setIsPatientLogin] = useState(true);
  const [isSigningUp, setIsSigningUp] = useState(false);

  // Login State
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // SignUp State
  const [signUpName, setSignUpName] = useState('');
  const [signUpAge, setSignUpAge] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [signUpGender, setSignUpGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [signUpLanguage, setSignUpLanguage] = useState('en');
  const [signUpAddressLine1, setSignUpAddressLine1] = useState('');
  const [signUpAddressLine2, setSignUpAddressLine2] = useState('');
  const [signUpDistrict, setSignUpDistrict] = useState('');
  const [signUpState, setSignUpState] = useState('');
  const [signUpCountry] = useState('India');
  const [signUpDoctorCode, setSignUpDoctorCode] = useState('');

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  interface DoctorInfo {
    id: number;
    name: string;
    doctorCode: string;
    location: string;
    rating: number;
    imageUrl: string;
  }

  const [doctorsList, setDoctorsList] = useState<DoctorInfo[]>([]);

  React.useEffect(() => {
    const API_BASE = import.meta.env.VITE_API_URL || '/api';
    fetch(`${API_BASE}/doctors`)
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) setDoctorsList(data);
      })
      .catch(err => console.error("Failed to fetch doctors", err));
  }, []);

  const resetForm = () => {
    setError('');
    setSuccessMessage('');
    setId('');
    setPassword('');
    setSignUpName('');
    setSignUpAge('');
    setSignUpEmail('');
    setSignUpPassword('');
    setSignUpConfirmPassword('');
    setSignUpGender('Male');
    setSignUpLanguage('en');
    setSignUpAddressLine1('');
    setSignUpAddressLine2('');
    setSignUpDistrict('');
    setSignUpState('');
    setSignUpDoctorCode('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    const success = await onLogin(id, password);
    if (!success) {
      setError('Invalid ID or password.');
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    if (signUpPassword !== signUpConfirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!signUpName || !signUpPassword || !signUpEmail) {
      setError("All required fields must be filled.");
      return;
    }
    if (isPatientLogin && (!signUpAge || !signUpGender || !signUpDoctorCode)) {
      setError("Please fill in age, gender, and doctor connection code.");
      return;
    }
    if (!isPatientLogin && !signUpDoctorCode) {
      setError("Doctor Verification Code is required.");
      return;
    }

    try {
      const result = await onSignUp({
        password: signUpPassword,
        name: signUpName,
        age: signUpAge,
        gender: signUpGender,
        email: signUpEmail,
        preferredLanguage: signUpLanguage,
        role: isPatientLogin ? UserRole.PATIENT : UserRole.DOCTOR,
        addressLine1: signUpAddressLine1,
        addressLine2: signUpAddressLine2,
        district: signUpDistrict,
        state: signUpState,
        country: signUpCountry,
        doctorCode: signUpDoctorCode
      });

      if (result === 'ID_EXISTS') {
        setError('This email is already in use. Please use another.');
      } else if (result === 'INVALID_CODE') {
        setError('Invalid Doctor Verification Code. Please contact administration.');
      } else if (result === 'SUCCESS') {
        setSuccessMessage('Account created! Logging you in...');
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during sign up.");
    }
  };

  const inputClasses = "flex h-12 w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400 text-slate-800";
  const labelClasses = "text-sm font-semibold text-slate-500 mb-2 block";

  return (
    <div className="min-h-screen flex font-sans bg-slate-50/50">
      
      {/* ===== LEFT BRANDING SIDE ===== */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-1/2 flex-col justify-between items-center relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#eef5fc] to-[#e4f0fb] pt-20">
        {/* Soft huge background blur */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[100px] mix-blend-multiply transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[80px] mix-blend-multiply transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-8 xl:px-12 max-w-lg mb-10">
          <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-blue-50 flex items-center justify-center mb-8 transform hover:-translate-y-1 transition-transform duration-500">
            <Activity className="w-10 h-10 text-blue-600 stroke-[2.5]" />
          </div>
          
          <h1 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.15]">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Medzora</span>
          </h1>
          
          <p className="text-base xl:text-lg text-slate-500 font-medium leading-relaxed">
            AI-driven medical analysis. Structured insights for doctors, empowering clarity for patients.
          </p>
        </div>

        {/* Floating Images Showcase */}
        <div className="relative z-10 w-full flex-grow flex justify-center items-end px-8 xl:px-12 mt-4 transform translate-y-12">
           <div className="relative w-full max-w-[480px] transform hover:-translate-y-4 transition-transform duration-[800ms] ease-in-out group">
             {/* Main Dashboard Image */}
             <img 
               src="/images/dashboard.png" 
               alt="Dashboard Preview" 
               className="w-full h-auto rounded-t-[2rem] shadow-[0_-15px_60px_-15px_rgba(37,99,235,0.15)] border-t-4 border-x border-white bg-white relative z-20"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2669&auto=format&fit=crop";
               }}
             />
             
             {/* Floating Report Document */}
             <img 
               src="/images/report.png" 
               alt="Report Preview" 
               className="absolute -left-6 xl:-left-16 top-10 w-32 xl:w-44 rounded-2xl shadow-2xl border-4 border-white bg-slate-50 transform -rotate-6 transition-all duration-[800ms] z-10 group-hover:-rotate-12 group-hover:-translate-x-4"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop";
               }}
             />
             
             {/* Floating Chat Interface */}
             <img 
               src="/images/chat.png" 
               alt="Chat Preview" 
               className="absolute -right-6 xl:-right-12 top-20 w-40 xl:w-48 rounded-2xl shadow-2xl border-4 border-white bg-slate-50 transform rotate-6 transition-all duration-[800ms] z-30 group-hover:rotate-12 group-hover:translate-x-4 group-hover:-translate-y-2"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1627885741635-c3f2d216f9ec?q=80&w=2670&auto=format&fit=crop";
               }}
             />
           </div>
        </div>
      </div>

      {/* ===== RIGHT FORM SIDE ===== */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        <div className="w-full max-w-[440px] animate-fade-in-up">
          
          {/* Mobile Branding */}
          <div className="text-center mb-10 lg:hidden px-4">
            <div className="inline-flex w-20 h-20 bg-white rounded-3xl shadow-sm items-center justify-center mb-6">
              <Stethoscope className="w-10 h-10 text-blue-600 stroke-[2.5]" />
            </div>
            <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight mb-2">Medzora Intelligence</h1>
          </div>

          {/* Clean White Card */}
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-8 sm:p-10 relative">
            
            {/* Header / Back Button */}
            <div className="flex flex-col items-center mb-8 relative">
              <button
                onClick={onBack}
                className="absolute left-0 top-0 sm:-left-2 sm:-top-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              
              <h2 className="text-3xl font-extrabold text-slate-800 mt-14 sm:mt-12 text-center">
                {isSigningUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-slate-500 font-medium text-center mt-2">
                {isSigningUp ? 'Join Medzora to start receiving AI-driven insights.' : 'Log in to access your dashboard and reports.'}
              </p>
            </div>

            {/* Toggle switch */}
            <div className="flex bg-slate-50/80 rounded-2xl p-1.5 mb-8 border border-slate-100">
              <button
                type="button"
                onClick={() => { setIsPatientLogin(true); resetForm(); }}
                className={`w-1/2 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${isPatientLogin ? 'bg-white text-blue-600 shadow-sm border border-slate-100/50' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <User className="h-4 w-4" /> Patient
              </button>
              <button
                type="button"
                onClick={() => { setIsPatientLogin(false); resetForm(); }}
                className={`w-1/2 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${!isPatientLogin ? 'bg-white text-blue-600 shadow-sm border border-slate-100/50' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <Stethoscope className="h-4 w-4" /> Doctor
              </button>
            </div>

            {/* Forms */}
            {isSigningUp ? (
              <form onSubmit={handleSignUp} className="space-y-4">
                {error && <p className="text-sm text-red-600 font-medium text-center bg-red-50 p-2.5 rounded-xl border border-red-100">{error}</p>}
                
                <div>
                  <label htmlFor="signUpName" className={labelClasses}>Full Name</label>
                  <input id="signUpName" type="text" value={signUpName} onChange={(e) => setSignUpName(e.target.value)} className={inputClasses} placeholder={isPatientLogin ? "John Doe" : "Dr. Jane Smith"} required />
                </div>

                <div>
                  <label htmlFor="signUpEmail" className={labelClasses}>Email Address</label>
                  <input id="signUpEmail" type="email" value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} className={inputClasses} placeholder="abc@gmail.com" required />
                </div>

                {isPatientLogin && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="signUpAge" className={labelClasses}>Age</label>
                      <input id="signUpAge" type="number" value={signUpAge} onChange={(e) => setSignUpAge(e.target.value)} className={inputClasses} placeholder="e.g. 30" required={isPatientLogin} />
                    </div>
                    <div>
                      <label htmlFor="signUpGender" className={labelClasses}>Gender</label>
                      <select id="signUpGender" value={signUpGender} onChange={(e) => setSignUpGender(e.target.value as 'Male' | 'Female' | 'Other')} className={inputClasses} required={isPatientLogin}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 items-start">
                  {isPatientLogin && (
                    <div>
                      <label htmlFor="signUpLanguage" className={labelClasses}>Preferred Language</label>
                      <LanguageSelector
                        id="signUpLanguage"
                        value={signUpLanguage}
                        onChange={setSignUpLanguage}
                        autoTranslateOnSelect={false}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>

                {/* Address Section */}
                <div className="space-y-3 border border-blue-100 rounded-2xl p-4 bg-white/50">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</p>
                  <div>
                    <label htmlFor="signUpAddrLine1" className={labelClasses}>Address Line 1</label>
                    <input id="signUpAddrLine1" type="text" value={signUpAddressLine1} onChange={(e) => setSignUpAddressLine1(e.target.value)} placeholder="House / Flat No., Street" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="signUpAddrLine2" className={labelClasses}>Address Line 2 <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input id="signUpAddrLine2" type="text" value={signUpAddressLine2} onChange={(e) => setSignUpAddressLine2(e.target.value)} placeholder="Area, Landmark" className={inputClasses} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="signUpDistrict" className={labelClasses}>District</label>
                      <input id="signUpDistrict" type="text" value={signUpDistrict} onChange={(e) => setSignUpDistrict(e.target.value)} placeholder="e.g. Chennai" className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="signUpState" className={labelClasses}>State</label>
                      <input id="signUpState" type="text" value={signUpState} onChange={(e) => setSignUpState(e.target.value)} placeholder="e.g. Tamil Nadu" className={inputClasses} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="signUpCountry" className={labelClasses}>Country</label>
                    <input id="signUpCountry" type="text" value={signUpCountry} readOnly className={`${inputClasses} bg-slate-100 text-slate-500 cursor-not-allowed`} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="signUpPassword" className={labelClasses}>Password</label>
                    <input id="signUpPassword" type="password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} className={inputClasses} placeholder="Create password" required />
                  </div>
                  <div>
                    <label htmlFor="signUpConfirmPassword" className={labelClasses}>Confirm</label>
                    <input id="signUpConfirmPassword" type="password" value={signUpConfirmPassword} onChange={(e) => setSignUpConfirmPassword(e.target.value)} className={inputClasses} placeholder="Repeat password" required />
                  </div>
                </div>

                <div className="pt-2">
                  <label htmlFor="doctorCode" className={`${labelClasses} !text-blue-600 mb-3`}>
                    {isPatientLogin ? "Select your Preferred Doctor" : "Doctor Verification Code"}
                  </label>
                  {isPatientLogin ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
                      {doctorsList.map((doc, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => setSignUpDoctorCode(doc.doctorCode)}
                          className={`relative p-3 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-3 ${signUpDoctorCode === doc.doctorCode ? 'border-blue-500 bg-blue-50/50 shadow-sm' : 'border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50'}`}
                        >
                          {signUpDoctorCode === doc.doctorCode && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                          )}
                          <img src={doc.imageUrl} alt={doc.name} className="w-12 h-12 rounded-full bg-slate-100 object-cover border border-slate-200" />
                          <div className="flex-1 min-w-0 pr-4">
                            <h4 className="font-bold text-slate-800 text-sm truncate">Dr. {doc.name.replace('Dr. ', '')}</h4>
                            <div className="flex items-center gap-1 mt-0.5">
                              <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <span className="text-xs font-bold text-slate-700">{doc.rating}</span>
                              <span className="text-[10px] text-slate-400 truncate ml-1">{doc.location}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      {doctorsList.length === 0 && (
                        <div className="col-span-full p-4 text-center border-2 border-dashed border-slate-200 rounded-2xl text-slate-500 text-sm">
                          Loading available doctors...
                        </div>
                      )}
                    </div>
                  ) : (
                    <input
                      id="doctorCode"
                      type="text"
                      value={signUpDoctorCode}
                      onChange={(e) => setSignUpDoctorCode(e.target.value)}
                      placeholder="Enter secret verification code"
                      className={`${inputClasses} !bg-blue-50/50 !border-blue-200`}
                      required
                    />
                  )}
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-[0.98] mt-4">
                  Sign up as {isPatientLogin ? 'Patient' : 'Doctor'}
                </button>

                <p className="text-center text-sm pt-4">
                  <span className="text-slate-500">Already have an account? </span>
                  <button type="button" onClick={() => setIsSigningUp(false)} className="font-bold text-blue-600 hover:text-blue-800 transition-colors">Log In</button>
                </p>
              </form>
            ) : (
              <form onSubmit={handleLogin} className="space-y-5">
                {successMessage && <p className="text-sm text-green-700 font-medium text-center bg-green-50 p-3 rounded-xl border border-green-200">{successMessage}</p>}
                {error && <p className="text-sm text-red-600 font-medium text-center bg-red-50 p-3 rounded-xl border border-red-100">{error}</p>}

                <div>
                  <label htmlFor="id" className={labelClasses}>Email Address</label>
                  <input id="id" type="email" value={id} onChange={(e) => setId(e.target.value)} placeholder="abc@gmail.com" className={inputClasses} required />
                </div>
                
                <div>
                  <label htmlFor="password" className={labelClasses}>Password</label>
                  <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className={inputClasses} required />
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-[0.98] mt-2">
                  Log in as {isPatientLogin ? 'Patient' : 'Doctor'}
                </button>

                <p className="text-center text-sm pt-6 mt-2">
                  <span className="text-slate-500 font-medium">New to Medzora? </span>
                  <button type="button" onClick={() => { setIsSigningUp(true); resetForm(); }} className="font-bold text-blue-600 hover:text-blue-800 transition-colors">Sign Up for free</button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
