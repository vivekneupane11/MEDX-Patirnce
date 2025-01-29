import React from 'react';

interface InstructionsInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const InstructionsInput: React.FC<InstructionsInputProps> = ({
  value,
  onChange,
  className = '',
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Instructions particulières
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${className}`}
        placeholder="Instructions supplémentaires..."
      />
    </div>
  );
};

export default InstructionsInput;