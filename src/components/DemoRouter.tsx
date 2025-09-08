import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import EcommerceDemo from '../demos/EcommerceDemo';
import RestaurantDemo from '../demos/RestaurantDemo';
import TaskManagerDemo from '../demos/TaskManagerDemo';
import CorporateWebsiteDemo from '../demos/CorporateWebsiteDemo';
import BlogPlatformDemo from '../demos/BlogPlatformDemo';

interface DemoRouterProps {
  demoId: string | null;
  onClose: () => void;
}

const DemoRouter: React.FC<DemoRouterProps> = ({ demoId, onClose }) => {
  if (!demoId) return null;

  const renderDemo = () => {
    switch (demoId) {
      case 'ecommerce':
        return <EcommerceDemo />;
      case 'restaurant':
        return <RestaurantDemo />;
      case 'task-manager':
        return <TaskManagerDemo />;
      case 'corporate-website':
        return <CorporateWebsiteDemo />;
      case 'blog-platform':
        return <BlogPlatformDemo />;
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Demo Not Found</h2>
              <p className="text-gray-600 mb-6">The requested demo could not be found.</p>
              <button
                onClick={onClose}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white overflow-auto"
    >
      {/* Demo Header */}
      <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <HiArrowLeft className="h-5 w-5" />
              <span>Back to Portfolio</span>
            </button>
            
            <div className="text-center">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Live Demo
              </span>
            </div>
            
            <div className="text-sm text-gray-500">
              Interactive Preview
            </div>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="demo-content">
        {renderDemo()}
      </div>
    </motion.div>
  );
};

export default DemoRouter;
