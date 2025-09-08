import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiClock, HiLocationMarker, HiPhone } from 'react-icons/hi';

const RestaurantDemo: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('appetizers');

  const menuCategories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Bruschetta Trio',
        description: 'Three varieties of our signature bruschetta with fresh tomatoes, basil, and mozzarella',
        price: '$12.99',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Calamari Rings',
        description: 'Crispy fried calamari served with marinara sauce and lemon wedges',
        price: '$14.99',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    ],
    mains: [
      {
        name: 'Grilled Salmon',
        description: 'Fresh Atlantic salmon with herbs, served with roasted vegetables and rice pilaf',
        price: '$24.99',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Ribeye Steak',
        description: 'Premium 12oz ribeye steak grilled to perfection with garlic mashed potatoes',
        price: '$32.99',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    ],
    desserts: [
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
        price: '$8.99',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
        price: '$9.99',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    ],
    beverages: [
      {
        name: 'House Wine Selection',
        description: 'Red, white, or rosé from our carefully curated wine collection',
        price: '$8.99',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Craft Beer',
        description: 'Local craft beer selection on tap, ask your server for today\'s options',
        price: '$6.99',
        image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Bella Vista</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#menu" className="text-gray-600 hover:text-gray-900">Menu</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-5xl font-bold mb-4">Authentic Italian Cuisine</h2>
            <p className="text-xl mb-6">Experience the finest flavors of Italy in the heart of the city</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <HiStar className="h-5 w-5 text-yellow-400 mr-1" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <HiClock className="h-5 w-5 mr-1" />
                <span>Open until 11 PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Menu</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted dishes made with the finest ingredients and traditional recipes
            </p>
          </motion.div>

          {/* Menu Categories */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4 bg-white rounded-lg p-2 shadow-md">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {menuItems[selectedCategory as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-red-600">{item.price}</span>
                    </div>
