import React from 'react';

const BlogCard = ({ post }) => {
  return (
    <a 
      href={post.url} 
      target="_blank" 
      rel="noreferrer"
      className="group relative flex flex-col sm:flex-row gap-6 bg-surface-container p-5 sm:p-6 rounded-3xl border border-outline-variant/20 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Thumbnail */}
      <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 bg-slate-900 rounded-2xl flex items-center justify-center p-4 border border-outline-variant/10 overflow-hidden relative">
        <span className="material-symbols-outlined text-6xl text-slate-500 group-hover:text-primary transition-colors duration-500 opacity-50 group-hover:opacity-100 group-hover:scale-110">
          {post.thumbnail}
        </span>
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow justify-center py-2">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="font-label text-xs text-slate-500 uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-md">
            {post.date}
          </span>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
               <span key={tag} className="font-label text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20">
                 {tag}
               </span>
            ))}
          </div>
        </div>

        <h3 className="font-headline font-bold text-xl sm:text-2xl mb-3 text-on-surface group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
          {post.snippet}
        </p>

        <div className="mt-auto flex items-center gap-2 text-primary font-label font-bold text-sm">
          <span className="relative z-10 group-hover:pr-2 transition-all">Read More</span>
          <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-2">arrow_right_alt</span>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
