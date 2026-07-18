import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HiSearch, 
  HiHeart, 
  HiShare, 
  HiBookmark, 
  HiEye, 
  HiClock,
  HiUser,
  HiTag,
  HiTrendingUp,
  HiCalendar
} from 'react-icons/hi';

const BlogPlatformDemo: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'technology', name: 'Technology', count: 8 },
    { id: 'design', name: 'Design', count: 6 },
    { id: 'business', name: 'Business', count: 5 },
    { id: 'lifestyle', name: 'Lifestyle', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      author: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 124,
      views: 2340,
      featured: true
    },
    {
      id: 2,
      title: 'Mastering Modern CSS: Grid, Flexbox, and Beyond',
      excerpt: 'A comprehensive guide to modern CSS layout techniques that every developer should know.',
      author: 'Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2025-01-12',
      readTime: '8 min read',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 89,
      views: 1890,
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn how to structure and build React applications that can scale with your business needs.',
      author: 'Emily Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2025-01-10',
      readTime: '12 min read',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 156,
      views: 3210,
      featured: true
    },
    {
      id: 4,
      title: 'The Art of Minimalist Design in Digital Products',
      excerpt: 'Discover how minimalist design principles can improve user experience and engagement.',
      author: 'David Kim',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 78,
      views: 1560,
      featured: false
    },
    {
      id: 5,
      title: 'Entrepreneurship in the Digital Age: A Complete Guide',
      excerpt: 'Everything you need to know about starting and scaling a digital business in today\'s market.',
      author: 'Lisa Wang',
      authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2025-01-05',
      readTime: '15 min read',
      category: 'business',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 203,
      views: 4120,
      featured: true
    }
  ];

  const trendingTopics = [
    'React 18', 'TypeScript', 'Web3', 'AI/ML', 'Responsive Design', 
    'Performance', 'Accessibility', 'PWA', 'Microservices', 'DevOps'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">BlogSpace</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Categories</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Authors</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">About</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Featured Post */}
      {featuredPost && (
        <section className="relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${featuredPost.image})` }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Article
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                {featuredPost.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8 text-gray-200"
              >
                {featuredPost.excerpt}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-6"
              >
                <div className="flex items-center">
                  <img
                    src={featuredPost.authorImage}
                    alt={featuredPost.author}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">{featuredPost.author}</div>
                    <div className="text-gray-300 text-sm">{featuredPost.date}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <span className="flex items-center">
                    <HiClock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                  <span className="flex items-center">
                    <HiEye className="h-4 w-4 mr-1" />
                    {featuredPost.views}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-300'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author}</div>
                          <div className="text-xs text-gray-500">{post.date}</div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors duration-200">
                          <HiHeart className="h-4 w-4 mr-1" />
                          {post.likes}
                        </button>
                        <span className="flex items-center text-gray-500">
                          <HiEye className="h-4 w-4 mr-1" />
                          {post.views}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-500 hover:text-purple-600 transition-colors duration-200">
                          <HiBookmark className="h-5 w-5" />
                        </button>
                        <button className="text-gray-500 hover:text-purple-600 transition-colors duration-200">
                          <HiShare className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Trending Topics */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <HiTrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                Trending Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition-colors duration-200"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Popular Authors */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Authors</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-center">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{post.author}</div>
                      <div className="text-sm text-gray-500">{post.views} views</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="ml-3 text-2xl font-bold">BlogSpace</span>
            </div>
            <p className="text-gray-400 mb-4">
              A modern blogging platform for sharing knowledge and insights.
            </p>
            <p className="text-gray-500">
              © 2025 BlogSpace. All rights reserved. Powered by modern CMS technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPlatformDemo;
