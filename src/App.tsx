import React from 'react';
import { Building2, Mail, Calendar, Users, TrendingUp, Shield, Zap, Globe, ArrowRight, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Email Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        
        {/* Header */}
        <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Building2 className="h-8 w-8 text-blue-400" />
                <div>
                  <h1 className="text-2xl font-bold">Yonderland</h1>
                  <p className="text-blue-200 text-sm">Enterprise Architecture Insights</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-300">Issue #47</p>
                <p className="text-sm text-gray-300">March 2025</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Bar */}
          <div className="bg-slate-800 px-8 py-3">
            <nav className="flex space-x-6">
              <a href="#featured" className="text-blue-300 hover:text-blue-200 text-sm font-medium">Featured</a>
              <a href="#insights" className="text-gray-300 hover:text-white text-sm font-medium">Insights</a>
              <a href="#frameworks" className="text-gray-300 hover:text-white text-sm font-medium">Frameworks</a>
              <a href="#resources" className="text-gray-300 hover:text-white text-sm font-medium">Resources</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-8 py-8">
          
          {/* Welcome Message */}
          <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Welcome to EA Insights</h2>
            <p className="text-gray-700">Stay ahead of the curve with the latest enterprise architecture trends, best practices, and strategic insights from Yonderland's expert team.</p>
          </div>

          {/* Featured Article */}
          <section id="featured" className="mb-10">
            <div className="border-b-2 border-slate-200 pb-2 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                Featured Article
              </h2>
            </div>
            
            <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Modernizing Legacy Systems: A Strategic Roadmap for 2025
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover how leading enterprises are successfully transitioning from monolithic architectures to cloud-native solutions while maintaining business continuity and reducing technical debt.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        March 15, 2025
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        Sarah Chen, Principal Architect
                      </span>
                    </div>
                  </div>
                  <div className="ml-6 flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Globe className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </article>
          </section>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              
              {/* Industry Insights */}
              <section id="insights" className="mb-10">
                <div className="border-b-2 border-slate-200 pb-2 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
                    Industry Insights
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <article className="flex space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Shield className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Zero Trust Architecture Implementation</h3>
                      <p className="text-gray-600 text-sm mb-2">Best practices for implementing zero trust security models in distributed enterprise environments.</p>
                      <span className="text-xs text-gray-500">5 min read • Security</span>
                    </div>
                  </article>
                  
                  <article className="flex space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Microservices Governance at Scale</h3>
                      <p className="text-gray-600 text-sm mb-2">How to maintain architectural consistency and quality across hundreds of microservices.</p>
                      <span className="text-xs text-gray-500">7 min read • Architecture</span>
                    </div>
                  </article>
                  
                  <article className="flex space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">API Strategy & Management</h3>
                      <p className="text-gray-600 text-sm mb-2">Developing a comprehensive API strategy that drives business value and developer adoption.</p>
                      <span className="text-xs text-gray-500">6 min read • Strategy</span>
                    </div>
                  </article>
                </div>
              </section>

              {/* Framework Spotlight */}
              <section id="frameworks" className="mb-10">
                <div className="border-b-2 border-slate-200 pb-2 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Framework Spotlight</h2>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">TOGAF 10: What's New and Why It Matters</h3>
                  <p className="text-gray-700 mb-4">
                    The latest version of TOGAF introduces significant updates to address modern enterprise challenges including cloud-native architectures, agile methodologies, and digital transformation initiatives.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Enterprise Architecture</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">TOGAF</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Digital Transformation</span>
                  </div>
                  <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                    Learn More
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              
              {/* Quick Stats */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">This Month's Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Projects</span>
                    <span className="font-bold text-2xl text-blue-600">127</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Architecture Reviews</span>
                    <span className="font-bold text-2xl text-green-600">43</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Standards Updated</span>
                    <span className="font-bold text-2xl text-purple-600">8</span>
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Upcoming Events
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 text-sm">EA Community Call</h4>
                    <p className="text-xs text-gray-600">March 28, 2025 • 2:00 PM EST</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 text-sm">Cloud Architecture Workshop</h4>
                    <p className="text-xs text-gray-600">April 5, 2025 • 10:00 AM EST</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 text-sm">Security Architecture Review</h4>
                    <p className="text-xs text-gray-600">April 12, 2025 • 3:00 PM EST</p>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div id="resources" className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Featured Resources</h3>
                <div className="space-y-3">
                  <a href="#" className="block p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Architecture Decision Records Template</h4>
                    <p className="text-xs text-gray-600">Standardized template for documenting architectural decisions</p>
                  </a>
                  <a href="#" className="block p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Cloud Migration Checklist</h4>
                    <p className="text-xs text-gray-600">Comprehensive checklist for cloud migration projects</p>
                  </a>
                  <a href="#" className="block p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Security Assessment Framework</h4>
                    <p className="text-xs text-gray-600">Framework for evaluating architectural security posture</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Building2 className="h-6 w-6 text-gray-600" />
              <div>
                <p className="font-semibold text-gray-900">Yonderland Enterprise Architecture</p>
                <p className="text-sm text-gray-600">Transforming businesses through strategic architecture</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 text-sm">
                <Mail className="h-4 w-4 mr-1" />
                Contact Us
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Unsubscribe</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Archive</a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              © 2025 Yonderland Corporation. All rights reserved. | 
              <a href="#" className="hover:text-gray-700 ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-gray-700 ml-1">Terms of Service</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;