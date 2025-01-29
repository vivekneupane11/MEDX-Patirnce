import { PatientComment } from '../types';

export const extractKeywords = (comments: PatientComment[]): { text: string; value: number; }[] => {
  const words = comments
    .map(comment => comment.text.toLowerCase())
    .join(' ')
    .split(/\s+/)
    .filter(word => word.length > 3);

  const frequencies: { [key: string]: number } = {};
  words.forEach(word => {
    frequencies[word] = (frequencies[word] || 0) + 1;
  });

  return Object.entries(frequencies)
    .map(([text, value]) => ({ text, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 20);
};

export const calculateSatisfactionStats = (comments: PatientComment[]) => {
  const total = comments.length;
  const averageRating = comments.reduce((acc, curr) => acc + curr.rating, 0) / total;
  const satisfiedCount = comments.filter(c => c.rating >= 4).length;
  
  return {
    averageRating,
    satisfactionRate: (satisfiedCount / total) * 100,
    totalResponses: total
  };
};