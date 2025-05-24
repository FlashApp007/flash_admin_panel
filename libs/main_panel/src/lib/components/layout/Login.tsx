import React, { useState } from 'react';
import { FaRegCopy, FaEye, FaEyeSlash } from 'react-icons/fa';
import loginImage from '../assets/loginwallpaper.png'; // Import image
import flash from '../assets/flashlog.jpg'; // Import image

// Custom styles
const styles = {
  greenPrimary: '#00A76F',
  greenSecondary: '#007B55',
  flashText: {
    color: '#007B55', // White color for contrast
    fontSize: '48px', // Increased font size
    fontWeight: 'bold', // Bold font weight
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adding a text shadow for better visibility
  },
};

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log({ email, password });
    
    // TODO: Replace this with actual authentication logic
    const isValidLogin = email === 'admin@admin.com' && password === '12345678';
    
    if (isValidLogin) {
      // Store authentication state (in a real app, you might use context or a state management solution)
      localStorage.setItem('isAuthenticated', 'true');
      onLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleCopyCredentials = () => {
    setEmail('admin@admin.com');
    setPassword('12345678');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000); // Hide after 2 seconds
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white relative">
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
          <div className="flex items-center mb-6 space-x-4">
            <img src={flash} alt="Flash Logo" className="w-[150px] h-[150px] rounded-full object-cover" />
            <h1 className="text-4xl font-normal italic text-green-500 drop-shadow-lg" style={styles.flashText}>Flash</h1>
 
          </div>
          <div className="text-center relative left-20">
            <h1 className="text-4xl font-normal mb-2">Your</h1>
            <h2 className="text-4xl font-normal mb-2">All Service</h2>
            <h3 className="text-3xl font-normal" style={{ color: styles.greenPrimary }}>In one field....</h3>
          </div>
        </div>
        <img src={loginImage} alt="Login illustration" className="w-full h-full object-cover" />
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-50 p-8 flex flex-col justify-center items-center">
        <div className="absolute top-4 right-4 text-xs text-gray-500">
          Software Version : 3.1
        </div>

        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mb-2">Admin Signin</h2>
          <p className="text-center text-gray-600 mb-8">Welcome back login to your panel.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@address.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="6+ characters required"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                />
                <span className="text-gray-700">Remember me</span>
              </label>
              <button 
                type="button" 
                onClick={() => { /* TODO: Implement forgot password functionality */ }}
                className="text-green-500 hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg relative">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-600">Email : admin@admin.com</div>
                <div className="text-gray-600">Password : 12345678</div>
              </div>
              <div className="flex items-center">
                {showCopied && (
                  <span className="text-green-500 text-sm mr-2">Copied!</span>
                )}
                <button
                  onClick={handleCopyCredentials}
                  className="p-2 text-green-500 hover:opacity-80 transition-opacity"
                  title="Click to auto-fill credentials"
                >
                  <FaRegCopy size={20} />
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              Click the copy icon to auto-fill the login form
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
