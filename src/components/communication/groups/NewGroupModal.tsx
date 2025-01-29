import React, { useState } from 'react';
import { X, Upload, Users } from 'lucide-react';
import { ChatMember } from '../../../types';

interface NewGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (groupData: { name: string; description: string; members: number[] }) => void;
  availableMembers: ChatMember[];
}

const NewGroupModal: React.FC<NewGroupModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  availableMembers
}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    selectedMembers: [] as number[]
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      description: formData.description,
      members: formData.selectedMembers
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="relative bg-white rounded-lg max-w-lg w-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <Users className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium">Nouveau groupe</h3>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom du groupe
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Membres
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableMembers.map((member) => (
                  <label
                    key={member.id}
                    className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.selectedMembers.includes(member.id)}
                      onChange={(e) => {
                        const newMembers = e.target.checked
                          ? [...formData.selectedMembers, member.id]
                          : formData.selectedMembers.filter(id => id !== member.id);
                        setFormData({ ...formData, selectedMembers: newMembers });
                      }}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{member.role}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                disabled={!formData.name || formData.selectedMembers.length === 0}
              >
                Créer le groupe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}