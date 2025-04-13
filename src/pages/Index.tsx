import React from 'react';
import { 
  Check, 
  X, 
  Award,
  Users,
  BarChart,
  QrCode,
  Brain,
  Lightbulb,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Scissors,
  Store,
  Wrench,
  Hotel,
  Code,
  Globe,
  Building,
  ClipboardSignature,
  ShoppingCart,
  HelpCircle,
  BookOpen
} from 'lucide-react';

const Index = () => {
  return (
    <div className="container mx-auto px-4">
      <div id="html-container">
      {/* The HTML landing page is loaded directly in index.html */}
    </div>
      
      {/* Q&A Section */}
      <section id="qna" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Sigmetic and how it can help your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-800">What is Sigmetic?</h3>
              </div>
              <p className="text-gray-600 ml-9">
                Sigmetic is a comprehensive business intelligence platform that helps companies make data-driven decisions through advanced analytics, real-time dashboards, and predictive modeling.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-800">How does Sigmetic work?</h3>
              </div>
              <p className="text-gray-600 ml-9">
                Sigmetic connects to your existing data sources, processes and analyzes the information, and presents actionable insights through intuitive dashboards and reports customized for your specific business needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-800">Is Sigmetic suitable for small businesses?</h3>
              </div>
              <p className="text-gray-600 ml-9">
                Absolutely! Sigmetic offers scalable solutions that can be tailored to businesses of all sizes. Our Small Business package provides essential analytics features at an affordable price point.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-800">How long does implementation take?</h3>
              </div>
              <p className="text-gray-600 ml-9">
                The implementation timeline varies based on your business complexity and requirements. Typically, our clients see their first dashboards within 2-4 weeks, with full deployment completed within 1-3 months.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-800">Do you offer training and support?</h3>
              </div>
              <p className="text-gray-600 ml-9">
                Yes, all Sigmetic packages include comprehensive training and ongoing support. Our customer success team ensures that your team can fully leverage our platform to maximize ROI.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <BookOpen className="text-primary w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-800">How secure is my data with Sigmetic?</h3>
              </div>
              <p className="text-gray-600 ml-9">
                Security is our top priority. Sigmetic employs enterprise-grade encryption, regular security audits, and complies with industry standards including GDPR, HIPAA, and SOC 2 to ensure your data remains protected.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">Don't see your question here?</p>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
