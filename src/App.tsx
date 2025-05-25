import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modal from './components/Modal';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import ComingSoon from './components/ComingSoon';

function App() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
  };

  const handleSignUpClick = () => {
    setIsSignUpModalOpen(true);
  };

  const handleCloseSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const handleCloseSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const handleAuthSuccess = () => {
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(false);
    setIsAuthenticated(true);
  };

  // If user is authenticated, show coming soon page
  if (isAuthenticated) {
    return <ComingSoon />;
  }

  return (
    <div className="min-h-screen bg-dark-800 text-white">
      <Navbar />
      
      <Hero 
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
      />
      
      {/* Sign In Modal */}
      <Modal
        isOpen={isSignInModalOpen}
        onClose={handleCloseSignInModal}
        title="Sign In"
      >
        <SignInForm onSuccess={handleAuthSuccess} />
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <button 
              onClick={() => {
                handleCloseSignInModal();
                handleSignUpClick();
              }}
              className="text-primary-400 hover:text-primary-300 font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </Modal>
      
      {/* Sign Up Modal */}
      <Modal
        isOpen={isSignUpModalOpen}
        onClose={handleCloseSignUpModal}
        title="Create Account"
      >
        <SignUpForm onSuccess={handleAuthSuccess} />
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <button 
              onClick={() => {
                handleCloseSignUpModal();
                handleSignInClick();
              }}
              className="text-primary-400 hover:text-primary-300 font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default App;