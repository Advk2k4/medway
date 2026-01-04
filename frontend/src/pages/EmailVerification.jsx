import { useState, useRef, useEffect } from 'react';

export default function EmailVerification() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value[0];
    }

    if (!/^\d*$/.test(value)) {
      return;
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError('');

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) {
      return;
    }

    const newCode = [...code];
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newCode[i] = pastedData[i];
    }
    setCode(newCode);
    
    const nextEmptyIndex = newCode.findIndex(val => !val);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = async () => {
    const verificationCode = code.join('');
    
    if (verificationCode.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsVerifying(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Verifying code:', verificationCode);
      alert('Verification successful! Redirecting to medical profile...');
    } catch (err) {
      setError('Invalid verification code. Please try again.');
      setIsVerifying(false);
    }
  };

  const handleResend = () => {
    setCode(['', '', '', '', '', '']);
    setError('');
    inputRefs.current[0]?.focus();
    console.log('Resending verification code...');
  };

  return (
    <div className="min-h-screen" style={{ display: 'flex', position: 'relative' }}>
      <div style={{ width: '50%', background: '#E8D7BE', position: 'fixed', top: 0, bottom: 0, left: 0 }}></div>
      <div style={{ width: '50%', background: '#1A5239', position: 'fixed', top: 0, bottom: 0, right: 0 }}></div>
      
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', padding: '0 1rem' }}>
        <div className="bg-[#F8F5F0] rounded-3xl shadow-2xl px-12 py-24 max-w-2xl w-full" style={{ minHeight: '80vh' }}>
          <div className="flex justify-center mb-10">
            <div className="w-48 h-36 flex items-center justify-center">
              <svg 
                viewBox="0 0 280 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect 
                  x="30" 
                  y="30" 
                  width="220" 
                  height="140" 
                  rx="12" 
                  stroke="#6B9080" 
                  strokeWidth="12" 
                  fill="white"
                />
                <path 
                  d="M30 42 L140 120 L250 42" 
                  stroke="#6B9080" 
                  strokeWidth="12" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-center text-gray-900 mb-5">
            Please Verify Account
          </h1>
          
          <p className="text-center text-gray-700 mb-10 text-xl leading-relaxed">
            Enter the 6-digit code we sent to your email address to verify your new Medway account.
          </p>

          <div className="flex justify-center gap-3 mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-16 text-center text-2xl font-semibold border-2 border-gray-400 rounded-xl focus:border-[#1A5239] focus:outline-none focus:ring-2 focus:ring-[#1A5239] focus:ring-opacity-50 transition-all bg-[#EBE3D5]"
              />
            ))}
          </div>

          {error && (
            <p className="text-red-600 text-center mb-6 text-lg">
              {error}
            </p>
          )}

          <div className="flex justify-center mb-6">
            <button
              onClick={handleVerify}
              disabled={isVerifying}
              className="bg-[#1A5239] text-white px-24 py-5 rounded-xl text-2xl font-semibold hover:bg-[#245c42] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg w-full max-w-md"
            >
              {isVerifying ? 'Verifying...' : 'Verify & Continue'}
            </button>
          </div>

          <div className="text-center">
            <button 
              className="text-[#1A5239] hover:underline text-lg font-medium"
              onClick={handleResend}
            >
              Didn't receive the code? Resend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
