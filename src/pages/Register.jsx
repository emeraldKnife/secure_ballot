import React, { useState, useEffect } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { useNavigate } from 'react-router-dom';

// Azure AD app configuration (replace with your actual values)
const msalConfig = {
  auth: {
    clientId: 'YOUR_AZURE_AD_CLIENT_ID',
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID',
    redirectUri: 'http://localhost:3000/register' // Update for production
  }
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGeneratingKeys, setIsGeneratingKeys] = useState(false);
  const [status, setStatus] = useState('');
  const [msalInstance, setMsalInstance] = useState(null);
  const navigate = useNavigate();

  // Initialize MSAL on component mount
  useEffect(() => {
    const msal = new PublicClientApplication(msalConfig);
    setMsalInstance(msal);
    
    // Check for redirect response
    msal.handleRedirectPromise()
      .then(response => {
        if (response) {
          handleAuthResponse(response);
        }
      })
      .catch(err => {
        setStatus(`Authentication error: ${err.message}`);
      });
  }, []);

  const handleAuthResponse = (response) => {
    setEmail(response.account.username);
    setIsAuthenticated(true);
    setStatus('Successfully authenticated with Microsoft');
  };

  const handleMicrosoftLogin = async () => {
    if (!msalInstance) {
      setStatus('Authentication service not ready');
      return;
    }
    
    try {
      setStatus('Redirecting to Microsoft login...');
      await msalInstance.loginRedirect({
        scopes: ['openid', 'profile', 'email']
      });
    } catch (err) {
      setStatus(`Login error: ${err.message}`);
    }
  };

  const generateKeyPair = async () => {
    try {
      setIsGeneratingKeys(true);
      setStatus('Generating cryptographic keys...');
      
      // Generate RSA key pair
      const keyPair = await window.crypto.subtle.generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: 2048,
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: "SHA-256",
        },
        true,
        ["encrypt", "decrypt"]
      );

      // Export and format keys
      const [pubKey, privKey] = await Promise.all([
        window.crypto.subtle.exportKey("spki", keyPair.publicKey),
        window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey)
      ]);

      const publicKeyPem = formatAsPem(
        btoa(String.fromCharCode(...new Uint8Array(pubKey))), 
        'PUBLIC'
      );
      const privateKeyPem = formatAsPem(
        btoa(String.fromCharCode(...new Uint8Array(privKey))), 
        'PRIVATE'
      );

      setPublicKey(publicKeyPem);
      setPrivateKey(privateKeyPem);
      setStatus('Keys generated successfully!');
      
    } catch (error) {
      console.error('Key generation failed:', error);
      setStatus('Key generation failed. Please try again.');
    } finally {
      setIsGeneratingKeys(false);
    }
  };

  const formatAsPem = (keyStr, type) => {
    return `-----BEGIN ${type} KEY-----\n` +
      keyStr.match(/.{1,64}/g).join('\n') +
      `\n-----END ${type} KEY-----\n`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setStatus('Copied to clipboard!'))
      .catch(() => setStatus('Failed to copy'));
  };

  const submitRegistration = async () => {
    if (!email || !publicKey) return;
    
    setStatus('Registering voter...');
    
    try {
      // In production, send to your backend
      console.log('Would submit to server:', { email, publicKey });
      setStatus('Registration successful!');
      setTimeout(() => navigate('/vote'), 2000);
    } catch (error) {
      console.error('Registration error:', error);
      setStatus('Registration error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 rounded-xl p-8 border border-emerald-500/30 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-emerald-400">
          Voter Registration
        </h1>
        
        {!isAuthenticated ? (
          <div className="text-center">
            <p className="mb-6 text-gray-300">
              Please authenticate with your Microsoft account to register as a voter.
            </p>
            <button
              onClick={handleMicrosoftLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 23 23">
                <path d="M11.55 21.3h-.32a10.57 10.57 0 0 1-7.81-3.5 10.73 10.73 0 0 1-2.77-8.04A10.69 10.69 0 0 1 6.3 3.5a10.83 10.83 0 0 1 8-3.2h.25a10.87 10.87 0 0 1 7.82 3.5 10.73 10.73 0 0 1 2.77 8.04 10.69 10.69 0 0 1-3.24 7.26 10.83 10.83 0 0 1-8 3.2zm-7.1-6.7a9.42 9.42 0 0 0 6.94 3.11h.31a9.52 9.52 0 0 0 7-3.11 9.39 9.39 0 0 0 2.85-6.36 9.43 9.43 0 0 0-2.44-7 9.54 9.54 0 0 0-6.94-3.11h-.31a9.52 9.52 0 0 0-7 3.11 9.39 9.39 0 0 0-2.85 6.36 9.43 9.43 0 0 0 2.44 7z"/>
                <path d="M11.55 17.7a6.16 6.16 0 0 1-6.1-6.2 6.16 6.16 0 0 1 6.1-6.2 6.16 6.16 0 0 1 6.1 6.2 6.16 6.16 0 0 1-6.1 6.2zm0-10.9a4.71 4.71 0 0 0-4.66 4.7 4.71 4.71 0 0 0 4.66 4.7 4.71 4.71 0 0 0 4.66-4.7 4.71 4.71 0 0 0-4.66-4.7z"/>
              </svg>
              Sign in with Microsoft
            </button>
          </div>
        ) : !publicKey ? (
          <div className="text-center">
            <div className="mb-6 p-4 bg-gray-800 rounded-lg">
              <p className="font-medium text-emerald-400">Authenticated as:</p>
              <p className="text-gray-300 break-all">{email}</p>
            </div>
            <p className="mb-6 text-gray-300">
              Generate your unique cryptographic keys for secure voting.
            </p>
            <button
              onClick={generateKeyPair}
              disabled={isGeneratingKeys}
              className={`bg-emerald-600 hover:bg-emerald-700 text-black font-bold py-3 px-6 rounded-lg w-full transition duration-300 ${
                isGeneratingKeys ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isGeneratingKeys ? 'Generating Keys...' : 'Generate Keys'}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="font-medium text-emerald-400 mb-2">Public Key:</p>
              <div className="relative">
                <pre className="text-xs text-gray-300 break-all font-mono p-2 bg-gray-700 rounded overflow-x-auto max-h-40">
                  {publicKey}
                </pre>
                <button
                  onClick={() => copyToClipboard(publicKey)}
                  className="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white text-xs px-2 py-1 rounded"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="font-medium text-emerald-400 mb-2">Private Key (Save Securely):</p>
              <div className="relative">
                <pre className="text-xs text-gray-300 break-all font-mono p-2 bg-gray-700 rounded overflow-x-auto max-h-40">
                  {privateKey}
                </pre>
                <button
                  onClick={() => copyToClipboard(privateKey)}
                  className="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white text-xs px-2 py-1 rounded"
                >
                  Copy
                </button>
              </div>
            </div>

            <p className="text-sm text-red-400">
              ⚠️ Save your private key securely! You'll need it to vote.
            </p>

            <button
              onClick={submitRegistration}
              className="bg-emerald-600 hover:bg-emerald-700 text-black font-bold py-3 px-6 rounded-lg w-full transition duration-300"
            >
              Complete Registration
            </button>
          </div>
        )}

        {status && (
          <p className={`mt-6 text-center ${
            status.toLowerCase().includes('error') || status.toLowerCase().includes('fail') 
              ? 'text-red-400' 
              : 'text-emerald-400'
          }`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;