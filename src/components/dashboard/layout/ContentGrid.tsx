import React from 'react';

interface ContentGridProps {
  children: React.ReactNode;
  className?: string;
}

const ContentGrid: React.FC<ContentGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${className}`}>
      {children}
    </div>
  );
};

export default ContentGrid;