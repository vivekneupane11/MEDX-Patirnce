import React from 'react';
import { ResponsiveContainer } from 'recharts';

interface ChartContainerProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  height?: number;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  description,
  children,
  height = 300
}) => {
  return (
    <div className="chart-container">
      {title && <h4 className="chart-title">{title}</h4>}
      {description && <p className="chart-description">{description}</p>}
      <div style={{ height: `${height}px` }}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartContainer;