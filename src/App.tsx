import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { Dashboard } from './components/Dashboard';
import { VerifyEmailPage } from './components/VerifyEmailPage';
import { ForgotPasswordPage } from './components/ForgotPasswordPage';
import { ResetPasswordPage } from './components/ResetPasswordPage';

export type Page = 'landing' | 'login' | 'signup' | 'dashboard' | 'verify-email' | 'forgot-password' | 'reset-password';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  organization?: {
    name?: string;
    type?: string;
  };
  profile?: {
    avatar?: string;
    phone?: string;
  };
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in on app start
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token and get user info
      fetch('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUser(data.data.user);
          setIsLoggedIn(true);
          setCurrentPage('dashboard');
        } else {
          localStorage.removeItem('token');
        }
      })
      .catch(() => {
        localStorage.removeItem('token');
      })
      .finally(() => {
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }

    // Handle URL parameters for verification and reset
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    
    if (window.location.pathname === '/verify-email' || urlParams.get('verify')) {
      setCurrentPage('verify-email');
    } else if (window.location.pathname === '/reset-password' || urlParams.get('reset')) {
      setCurrentPage('reset-password');
    }
  }, []);

  const handleLogin = (userData: User, token: string) => {
    localStorage.setItem('token', token);
    setUser(userData);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <LandingPage
            onNavigate={handleNavigation}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            user={user}
          />
        );
      case 'login':
        return (
          <LoginPage
            onNavigate={handleNavigation}
            onLogin={handleLogin}
          />
        );
      case 'signup':
        return (
          <SignupPage
            onNavigate={handleNavigation}
            onLogin={handleLogin}
          />
        );
      case 'dashboard':
        return isLoggedIn ? (
          <Dashboard
            onNavigate={handleNavigation}
            onLogout={handleLogout}
            user={user}
          />
        ) : (
          <LoginPage onNavigate={handleNavigation} onLogin={handleLogin} />
        );
      case 'verify-email':
        return (
          <VerifyEmailPage
            onNavigate={handleNavigation}
            onLogin={handleLogin}
          />
        );
      case 'forgot-password':
        return (
          <ForgotPasswordPage
            onNavigate={handleNavigation}
          />
        );
      case 'reset-password':
        return (
          <ResetPasswordPage
            onNavigate={handleNavigation}
          />
        );
      default:
        return (
          <LandingPage
            onNavigate={handleNavigation}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            user={user}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderPage()}
    </div>
  );
}
