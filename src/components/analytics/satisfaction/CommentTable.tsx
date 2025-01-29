import React, { useState } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';
import { PatientComment } from '../../../types';
import StarRating from './StarRating';
import TablePagination from './TablePagination';

interface CommentTableProps {
  comments: PatientComment[];
}

const CommentTable: React.FC<CommentTableProps> = ({ comments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  
  const itemsPerPage = 5;

  // Filter and sort comments
  const filteredComments = comments
    .filter(comment => 
      (comment.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
       comment.patient.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (ratingFilter === 0 || comment.rating >= ratingFilter)
    )
    .sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      return (a.rating - b.rating) * order;
    });

  // Paginate comments
  const totalPages = Math.ceil(filteredComments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedComments = filteredComments.slice(startIndex, startIndex + itemsPerPage);

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b space-y-4">
        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Rechercher un commentaire..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value={0}>Toutes les notes</option>
            <option value={4}>4★ et plus</option>
            <option value={3}>3★ et plus</option>
            <option value={2}>2★ et plus</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Commentaire
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={toggleSort}>
                <div className="flex items-center space-x-1">
                  <span>Note</span>
                  {sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedComments.map((comment, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {comment.patient}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {comment.text}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <StarRating rating={comment.rating} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CommentTable;