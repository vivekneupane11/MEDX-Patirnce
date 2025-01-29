import React from 'react';

interface DurationInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const DurationInput: React.FC<DurationInputProps> = ({
  value,
  onChange,
  className = '',
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Durée d'utilisation (heures/jour)
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${className}`}
        required
        min="1"
        max="24"
      />
    </div>
  );
};

export default DurationInput;