import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Leaf, Shield, TrendingUp, Users, BarChart3, Globe, Award, TreePine } from 'lucide-react';
import { Page, User } from '../App';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  user: User | null;
}

export function LandingPage({ onNavigate, isLoggedIn, onLogout, user }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-border px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-semibold text-primary">India Carbon Registry</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-green-600 transition-colors">Features</a>
            <a href="#stats" className="text-foreground hover:text-green-600 transition-colors">Statistics</a>
            <a href="#about" className="text-foreground hover:text-green-600 transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-green-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn && user ? (
              <>
                <Button variant="outline" onClick={() => onNavigate('dashboard')}>
                  Dashboard
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm text-muted-foreground">{user.name}</span>
                </div>
                <Button variant="ghost" onClick={onLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => onNavigate('login')}>
                  Login
                </Button>
                <Button onClick={() => onNavigate('signup')}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-green-100 text-green-800 border-green-200">
                🇮🇳 Government of India Initiative
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                India's Official Carbon Credit Registry Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Register, monitor, and trade verified carbon credits with transparency and trust. 
                Supporting India's net-zero ambitions through blockchain-verified carbon accounting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => onNavigate('signup')} className="bg-green-600 hover:bg-green-700">
                  🚀 Register Project
                </Button>
                <Button variant="outline" size="lg" onClick={() => onNavigate('dashboard')}>
                  📊 View Registry
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8 border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <TreePine className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">2.5M+</div>
                    <div className="text-sm text-muted-foreground">Credits Registered</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">1,234</div>
                    <div className="text-sm text-muted-foreground">Active Projects</div>
                  </div>
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">28</div>
                    <div className="text-sm text-muted-foreground">States Covered</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">456</div>
                    <div className="text-sm text-muted-foreground">Organizations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Real-time Carbon Registry Statistics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track India's progress towards carbon neutrality with live data from across the nation
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">₹847 Cr</div>
                <div className="text-muted-foreground">Carbon Market Value</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
                <div className="text-muted-foreground">Verification Rate</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">156 Mt</div>
                <div className="text-muted-foreground">CO₂ Reduced</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-muted-foreground">Live Monitoring</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              🏆 World-Class Platform
            </Badge>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Comprehensive Carbon Registry Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for India's diverse carbon market with state-wise tracking, 
              real-time monitoring, and transparent trading mechanisms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Government Verified Registry</CardTitle>
                <CardDescription className="text-base">
                  Official government-backed verification system ensuring authenticity of all carbon credits with blockchain security
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Real-time Analytics</CardTitle>
                <CardDescription className="text-base">
                  Live monitoring and reporting of carbon emissions and credit generation across all Indian states with AI insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Secure Trading Platform</CardTitle>
                <CardDescription className="text-base">
                  Advanced marketplace for buying and selling verified carbon credits with price transparency and smart contracts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">State-wise Tracking</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive coverage across all 28 Indian states with localized carbon accounting and regional insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl">Multi-stakeholder Platform</CardTitle>
                <CardDescription className="text-base">
                  Supporting corporates, NGOs, government bodies, and individual project developers in their carbon journey
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">International Compliance</CardTitle>
                <CardDescription className="text-base">
                  Aligned with international standards and India's regulatory framework for global carbon credit recognition
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Register Your Carbon Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join India's largest carbon registry platform and contribute to our net-zero goals.
            Get started today and make a difference for tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate('signup')}
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              🚀 Start Registration
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('login')}
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              📱 View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-green-500" />
                <span className="text-lg font-semibold text-white">India Carbon Registry</span>
              </div>
              <p className="text-sm">
                Official platform for carbon credit registration and trading in India.
                Building a sustainable future together.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-3">Platform</h3>
              <div className="space-y-2 text-sm">
                <div>Register Projects</div>
                <div>Trade Credits</div>
                <div>View Analytics</div>
                <div>Verification</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-3">Support</h3>
              <div className="space-y-2 text-sm">
                <div>Documentation</div>
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>Status</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-3">Government</h3>
              <div className="space-y-2 text-sm">
                <div>Ministry of Environment</div>
                <div>Carbon Policy</div>
                <div>Regulatory Framework</div>
                <div>Official Guidelines</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>© 2024 India Carbon Registry. All rights reserved. | Built for India's Carbon Neutral Future 🌱</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
