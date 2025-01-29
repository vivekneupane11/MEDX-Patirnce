import React from 'react';

interface FrequencyInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const FrequencyInput: React.FC<FrequencyInputProps> = ({
  value,
  onChange,
  className = '',
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Fréquence
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${className}`}
        placeholder="Ex: 3 fois par jour"
        required
      />
    </div>
  );
};

export default FrequencyInput;