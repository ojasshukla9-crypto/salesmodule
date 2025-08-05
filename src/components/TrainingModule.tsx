import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Play, Clock, Users } from 'lucide-react';

interface TrainingModuleProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  progress?: number;
  isCompleted?: boolean;
  onStart: () => void;
}

export const TrainingModule: React.FC<TrainingModuleProps> = ({
  icon: Icon,
  title,
  description,
  level,
  duration,
  progress = 0,
  isCompleted = false,
  onStart
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = async () => {
    setIsLoading(true);
    try {
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1000));
      onStart();
    } catch (error) {
      console.error('Error loading module:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="text-blue-600" size={24} />
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            level === 'Beginner' ? 'bg-green-100 text-green-700' :
            level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {level}
          </span>
          {isCompleted && <CheckCircle className="text-green-500" size={20} />}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {progress > 0 && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock size={16} />
          <span>{duration}</span>
        </div>
        <button 
          onClick={handleStart}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Loading...
            </>
          ) : (
            <>
              {progress > 0 ? 'Continue' : 'Start Module'}
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};