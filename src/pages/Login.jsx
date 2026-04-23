import React, { useState } from 'react';
import { MdOutlinePerson, MdOutlineLock, MdOutlineLockOpen } from 'react-icons/md';
import logo from '../assets/logo3.svg';

const ChowTapAdminLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isPasswordEntered = password.length > 0;
  const buttonBg = isPasswordEntered ? 'bg-[#DC781B]' : 'bg-[#393939]';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation (you can expand this later with real API call)
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    setIsLoading(true);

    // Simulate a small network delay (feels more real)
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(); // ← This triggers the route to Dashboard in App.jsx
    }, 800);
  };

  return (
    <div className="bg-[#0e0e0e] text-white h-screen flex flex-col antialiased overflow-hidden relative">
      
      {/* BRAND LOGO */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 flex items-center gap-2 z-50">
        <img src={logo} alt="ChowTap Logo" className="h-7 w-auto md:h-9" />
        <span className="font-bold text-lg md:text-xl tracking-[-1px] text-[#F8B42C]">CHOWTAP</span>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 w-full">
        <div className="w-full max-w-[400px] md:max-w-[420px]">
          
          <div className="text-center mb-3 md:mb-5">
            <span className="font-semibold text-[13px] md:text-[15px] uppercase tracking-[2px] text-[#EAEAEA]">
              ADMINISTRATIVE PORTAL
            </span>
          </div>

          <div className="relative bg-[#1a1a1a] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="absolute inset-0 rounded-3xl border border-[#484847] opacity-15 pointer-events-none" />

            <div className="mb-6 md:mb-8">
              <h1 className="text-[18px] md:text-[20px] font-bold tracking-tight text-left">ChowTap Admin Login</h1>
              <div className="h-[3px] bg-[#ff9238] w-20 md:w-24 mt-2.5 rounded-full" />
            </div>

            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              
              {/* EMAIL FIELD */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="block text-[11px] md:text-xs font-semibold uppercase tracking-[1.5px] text-[#adaaaa]">
                  EMAIL
                </label>
                <div className="relative">
                  <MdOutlinePerson className="absolute left-4 top-1/2 -translate-y-1/2 text-[#adaaaa] text-xl md:text-2xl z-10 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border border-[#484847]/40 focus:border-[#ff9238] rounded-xl md:rounded-2xl pl-11 md:pl-12 pr-4 md:pr-5 py-3 md:py-3.5 text-white placeholder:text-[#adaaaa]/60 outline-none text-sm md:text-[15px] transition-all
                    [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#1a1a1a]
                    [&:-webkit-autofill]:[-webkit-text-fill-color:white]
                    [&:-webkit-autofill]:text-white"
                    style={{ WebkitTransition: "background-color 5000s ease-in-out 0s" }}
                  />
                </div>
              </div>

              {/* PASSWORD FIELD */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="block text-[11px] md:text-xs font-semibold uppercase tracking-[1.5px] text-[#adaaaa]">
                  PASSWORD
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#adaaaa] text-xl md:text-2xl z-20 cursor-pointer hover:text-[#ff9238] transition-colors"
                  >
                    {showPassword ? <MdOutlineLockOpen /> : <MdOutlineLock />}
                  </button>

                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full bg-transparent border border-[#484847]/40 focus:border-[#ff9238] rounded-xl md:rounded-2xl pl-11 md:pl-12 pr-4 md:pr-5 py-3 md:py-3.5 text-white placeholder:text-[#adaaaa]/60 outline-none text-sm md:text-[15px] transition-all
                    [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#1a1a1a]
                    [&:-webkit-autofill]:[-webkit-text-fill-color:white]
                    [&:-webkit-autofill]:text-white"
                    style={{ WebkitTransition: "background-color 5000s ease-in-out 0s" }}
                  />
                </div>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full mt-2 md:mt-3 ${buttonBg} hover:opacity-90 active:scale-[0.98] text-white font-bold text-xs md:text-sm uppercase tracking-[1px] py-3.5 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center gap-2`}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                    LOGGING IN...
                  </>
                ) : (
                  'LOGIN'
                )}
              </button>
            </form>
          </div>

          {/* FOOTER - Moved directly under the login box */}
          <footer className="text-[#adaaaa] text-[10px] md:text-[11px] tracking-widest text-center  mt-6 md:mt-8">
            Authorized Personnel only
          </footer>

        </div>
      </main>

    </div>
  );
};

export default ChowTapAdminLogin;