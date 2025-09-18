import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Leaf, 
  LogOut, 
  TrendingUp, 
  Building, 
  Globe, 
  BarChart3,
  Plus,
  Eye,
  Settings,
  Bell,
  User,
  Award,
  TreePine
} from 'lucide-react';
import { Page, User as UserType } from '../App';

interface DashboardProps {
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  user: UserType | null;
}

interface Project {
  _id: string;
  projectId: string;
  title: string;
  projectType: string;
  status: string;
  carbonCredits: {
    estimatedAnnual: number;
    generated: number;
    issued: number;
    traded: number;
    retired: number;
  };
  location: {
    state: string;
    district?: string;
  };
}

interface DashboardStats {
  totalProjects: number;
  totalCredits: number;
  tradedCredits: number;
  revenue: number;
}

export function Dashboard({ onNavigate, onLogout, user }: DashboardProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    totalCredits: 0,
    tradedCredits: 0,
    revenue: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API calls (replace with real API calls when backend routes are ready)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mock data for demo
        setTimeout(() => {
          setProjects([
            {
              _id: '1',
              projectId: 'ICR-2024-001',
              title: 'Solar Farm Project - Rajasthan',
              projectType: 'Renewable Energy',
              status: 'Active',
              carbonCredits: {
                estimatedAnnual: 1250,
                generated: 980,
                issued: 850,
                traded: 200,
                retired: 50
              },
              location: {
                state: 'Rajasthan',
                district: 'Jodhpur'
              }
            },
            {
              _id: '2',
              projectId: 'ICR-2024-002',
              title: 'Forest Conservation - Kerala',
              projectType: 'Forestry',
              status: 'Under Review',
              carbonCredits: {
                estimatedAnnual: 850,
                generated: 1200,
                issued: 1100,
                traded: 300,
                retired: 100
              },
              location: {
                state: 'Kerala',
                district: 'Wayanad'
              }
            }
          ]);

          setStats({
            totalProjects: 4,
            totalCredits: 4200,
            tradedCredits: 650,
            revenue: 975000 // ₹9.75 Lakh
          });

          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Active': { color: 'bg-green-100 text-green-800 border-green-200', icon: '✅' },
      'Under Review': { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', icon: '⏳' },
      'Verified': { color: 'bg-blue-100 text-blue-800 border-blue-200', icon: '🔍' },
      'Pending': { color: 'bg-gray-100 text-gray-800 border-gray-200', icon: '⏸️' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Pending'];
    
    return (
      <Badge className={config.color}>
        {config.icon} {status}
      </Badge>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-semibold text-primary">India Carbon Registry</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            
            {user && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="text-sm">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-gray-500 capitalize">{user.role}</div>
                </div>
              </div>
            )}

            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your carbon registry activities
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                  <p className="text-2xl font-bold text-primary">{stats.totalProjects}</p>
                </div>
                <Building className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Carbon Credits</p>
                  <p className="text-2xl font-bold text-primary">{stats.totalCredits.toLocaleString()}</p>
                </div>
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Credits Traded</p>
                  <p className="text-2xl font-bold text-primary">{stats.tradedCredits}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold text-primary">₹{(stats.revenue / 100000).toFixed(1)}L</p>
                </div>
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Projects</CardTitle>
                    <CardDescription>
                      Manage and track your carbon credit projects
                    </CardDescription>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {projects.length > 0 ? (
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project._id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-primary">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {project.projectId} • {project.location.state}
                            </p>
                          </div>
                          {getStatusBadge(project.status)}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                          <div>
                            <span className="text-muted-foreground">Type:</span>
                            <p className="font-medium">{project.projectType}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Credits Issued:</span>
                            <p className="font-medium">{project.carbonCredits.issued}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Credits Traded:</span>
                            <p className="font-medium">{project.carbonCredits.traded}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold text-primary mb-2">No projects yet</h3>
                    <p className="text-muted-foreground mb-4">Get started by registering your first carbon project</p>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Register First Project
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Register New Project
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Trading Platform
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Globe className="h-4 w-4 mr-2" />
                  Browse Registry
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Profile Settings
                </Button>
              </CardContent>
            </Card>

            {/* Achievement Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl mb-2">🌱</div>
                  <h3 className="font-semibold text-primary">Green Pioneer</h3>
                  <p className="text-sm text-muted-foreground">
                    Welcome to India Carbon Registry! You're helping build a sustainable future.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => onNavigate('landing')}
            className="mr-4"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
