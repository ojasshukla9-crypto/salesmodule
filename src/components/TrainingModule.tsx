import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Play, Clock, Users, BookOpen, Video } from 'lucide-react';

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
      // Simulate module loading with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a modal or new window for the training content
      const moduleWindow = window.open('', '_blank', 'width=1200,height=800');
      if (moduleWindow) {
        moduleWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${title} - Training Module</title>
              <style>
                body { 
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  margin: 0; 
                  padding: 40px; 
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  color: white;
                  min-height: 100vh;
                }
                .container { 
                  max-width: 800px; 
                  margin: 0 auto; 
                  background: rgba(255,255,255,0.1);
                  padding: 40px;
                  border-radius: 20px;
                  backdrop-filter: blur(10px);
                }
                h1 { color: #fff; margin-bottom: 20px; }
                .progress-bar {
                  width: 100%;
                  height: 8px;
                  background: rgba(255,255,255,0.2);
                  border-radius: 4px;
                  margin: 20px 0;
                }
                .progress-fill {
                  height: 100%;
                  background: #4ade80;
                  border-radius: 4px;
                  width: 0%;
                  transition: width 0.3s ease;
                }
                .content {
                  background: rgba(255,255,255,0.1);
                  padding: 30px;
                  border-radius: 15px;
                  margin: 20px 0;
                  line-height: 1.6;
                }
                .btn {
                  background: #3b82f6;
                  color: white;
                  border: none;
                  padding: 12px 24px;
                  border-radius: 8px;
                  cursor: pointer;
                  font-size: 16px;
                  margin: 10px 5px;
                  transition: background 0.3s;
                }
                .btn:hover { background: #2563eb; }
                .quiz {
                  background: rgba(255,255,255,0.1);
                  padding: 20px;
                  border-radius: 10px;
                  margin: 20px 0;
                }
                .quiz-option {
                  display: block;
                  margin: 10px 0;
                  padding: 10px;
                  background: rgba(255,255,255,0.1);
                  border: none;
                  color: white;
                  border-radius: 5px;
                  cursor: pointer;
                  width: 100%;
                  text-align: left;
                }
                .quiz-option:hover { background: rgba(255,255,255,0.2); }
                .correct { background: #10b981 !important; }
                .incorrect { background: #ef4444 !important; }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>${title}</h1>
                <p><strong>Level:</strong> ${level} | <strong>Duration:</strong> ${duration}</p>
                <div class="progress-bar">
                  <div class="progress-fill" id="progressFill"></div>
                </div>
                <p id="progressText">Progress: 0%</p>
                
                <div class="content" id="moduleContent">
                  <h2>Module Overview</h2>
                  <p>${description}</p>
                  <p>This comprehensive training module will guide you through essential concepts and practical applications. Click "Start Learning" to begin your journey.</p>
                </div>
                
                <button class="btn" onclick="startModule()">Start Learning</button>
                <button class="btn" onclick="window.close()">Close Module</button>
                
                <script>
                  let currentProgress = 0;
                  let currentSection = 0;
                  
                  const sections = [
                    {
                      title: "Introduction",
                      content: "Welcome to the ${title} module. In this section, we'll cover the fundamental concepts and why they're crucial for your success in sales."
                    },
                    {
                      title: "Core Concepts",
                      content: "Let's dive into the key principles that will form the foundation of your understanding. These concepts are essential for mastering ${title.toLowerCase()}."
                    },
                    {
                      title: "Practical Applications",
                      content: "Now we'll explore how to apply these concepts in real-world scenarios. You'll learn specific techniques and strategies."
                    },
                    {
                      title: "Interactive Exercise",
                      content: "Time to put your knowledge to the test with this interactive exercise.",
                      isQuiz: true
                    },
                    {
                      title: "Advanced Techniques",
                      content: "For ${level.toLowerCase()} level learners, here are some advanced strategies to take your skills to the next level."
                    },
                    {
                      title: "Module Summary",
                      content: "Congratulations! You've completed the ${title} module. Here's a summary of what you've learned and next steps."
                    }
                  ];
                  
                  function updateProgress(progress) {
                    currentProgress = progress;
                    document.getElementById('progressFill').style.width = progress + '%';
                    document.getElementById('progressText').textContent = 'Progress: ' + progress + '%';
                  }
                  
                  function startModule() {
                    currentSection = 0;
                    showSection();
                  }
                  
                  function showSection() {
                    const section = sections[currentSection];
                    const progress = Math.round((currentSection / sections.length) * 100);
                    updateProgress(progress);
                    
                    let content = '<h2>' + section.title + '</h2><p>' + section.content + '</p>';
                    
                    if (section.isQuiz) {
                      content += '<div class="quiz"><h3>Quick Assessment</h3>';
                      content += '<p>What is the most important aspect of ' + '${title}'.toLowerCase() + '?</p>';
                      content += '<button class="quiz-option" onclick="answerQuiz(this, true)">Building genuine connections and trust</button>';
                      content += '<button class="quiz-option" onclick="answerQuiz(this, false)">Memorizing sales scripts</button>';
                      content += '<button class="quiz-option" onclick="answerQuiz(this, false)">Pushing for immediate sales</button>';
                      content += '<button class="quiz-option" onclick="answerQuiz(this, false)">Focusing only on product features</button>';
                      content += '</div>';
                    }
                    
                    document.getElementById('moduleContent').innerHTML = content;
                    
                    if (currentSection < sections.length - 1) {
                      content += '<button class="btn" onclick="nextSection()">Continue</button>';
                    } else {
                      content += '<button class="btn" onclick="completeModule()">Complete Module</button>';
                    }
                    
                    document.getElementById('moduleContent').innerHTML = content;
                  }
                  
                  function answerQuiz(button, isCorrect) {
                    const options = document.querySelectorAll('.quiz-option');
                    options.forEach(opt => opt.disabled = true);
                    
                    if (isCorrect) {
                      button.classList.add('correct');
                      setTimeout(() => {
                        alert('Correct! Well done.');
                        nextSection();
                      }, 1000);
                    } else {
                      button.classList.add('incorrect');
                      setTimeout(() => {
                        alert('Not quite right. The correct answer focuses on building genuine connections and trust.');
                        nextSection();
                      }, 1000);
                    }
                  }
                  
                  function nextSection() {
                    currentSection++;
                    if (currentSection < sections.length) {
                      showSection();
                    } else {
                      completeModule();
                    }
                  }
                  
                  function completeModule() {
                    updateProgress(100);
                    document.getElementById('moduleContent').innerHTML = 
                      '<h2>🎉 Module Completed!</h2>' +
                      '<p>Congratulations! You have successfully completed the ${title} module.</p>' +
                      '<p>You can now close this window and continue with other training modules.</p>' +
                      '<button class="btn" onclick="window.close()">Close & Return</button>';
                  }
                </script>
              </div>
            </body>
          </html>
        `);
        moduleWindow.document.close();
      }
      
      onStart();
    } catch (error) {
      console.error('Error loading module:', error);
      alert('Error loading module. Please try again.');
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