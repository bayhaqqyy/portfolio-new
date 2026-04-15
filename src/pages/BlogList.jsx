import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import blogData from '../data/blogData';

const BlogList = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Extract unique tags from data
  const allTags = ['All', ...new Set(blogData.flatMap(post => post.tags))];

  const filteredPosts = blogData.filter(post => 
    activeFilter === 'All' || post.tags.includes(activeFilter)
  );

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-8">
      <div className="absolute inset-0 dot-grid pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
             <span className="w-8 h-1 bg-primary rounded-full"></span>
             <h1 className="font-headline text-4xl sm:text-5xl font-black text-on-surface">Transmission <span className="text-primary italic">Logs</span></h1>
          </div>
          <p className="font-label text-slate-400 text-lg max-w-2xl">
            Technical insights, infrastructure concepts, and operational notes parsed from the field.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {allTags.map((tag) => (
            <button 
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-xl font-label text-sm font-bold transition-all border ${
                activeFilter === tag 
                  ? 'bg-primary/10 text-primary border-primary/30 shadow-[0_0_10px_rgba(70,241,197,0.1)]' 
                  : 'bg-surface-container border-outline-variant/20 text-slate-400 hover:text-on-surface hover:border-slate-500'
              }`}
            >
              # {tag}
            </button>
          ))}
        </motion.div>

        {/* Post List */}
        <motion.div layout className="flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div 
                layout
                key={post.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
            
            {filteredPosts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center font-label text-slate-500"
              >
                No transmissions found for this filter.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogList;
