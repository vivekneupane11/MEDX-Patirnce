import React, { useMemo } from 'react';
import { PatientComment } from '../../../types';

interface WordCloudProps {
  comments: PatientComment[];
  period: 'month' | 'semester' | 'year';
}

interface WordFrequency {
  text: string;
  value: number;
}

const WordCloud: React.FC<WordCloudProps> = ({ comments, period }) => {
  const wordFrequencies = useMemo(() => {
    // Extract words from comments
    const words = comments
      .map(comment => comment.text.toLowerCase())
      .join(' ')
      .split(/\s+/)
      .filter(word => word.length > 3); // Filter out small words

    // Count word frequencies
    const frequencies: { [key: string]: number } = {};
    words.forEach(word => {
      frequencies[word] = (frequencies[word] || 0) + 1;
    });

    // Convert to array and sort by frequency
    return Object.entries(frequencies)
      .map(([text, value]) => ({ text, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 20); // Keep top 20 words
  }, [comments]);

  // Calculate font sizes based on frequency
  const maxFrequency = Math.max(...wordFrequencies.map(w => w.value));
  const minFontSize = 14;
  const maxFontSize = 36;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium mb-4">Mots les plus fréquents</h3>
      <div className="flex flex-wrap gap-4 justify-center items-center min-h-[200px]">
        {wordFrequencies.map((word, index) => {
          const fontSize = minFontSize + (maxFontSize - minFontSize) * (word.value / maxFrequency);
          const opacity = 0.5 + 0.5 * (word.value / maxFrequency);
          
          return (
            <div
              key={index}
              className="transition-transform hover:scale-110 cursor-default"
              style={{
                fontSize: `${fontSize}px`,
                opacity,
                color: `hsl(${Math.random() * 360}, 70%, 50%)`,
              }}
              title={`${word.text} (${word.value} occurrences)`}
            >
              {word.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WordCloud;