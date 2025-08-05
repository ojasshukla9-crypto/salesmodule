import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Download, BookOpen } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  description: string;
  thumbnail?: string;
  videoUrl?: string;
  duration?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  description,
  thumbnail,
  videoUrl,
  duration = "15:30"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(930);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = async () => {
    if (!isVideoLoaded) {
      // Simulate video loading
      setIsVideoLoaded(true);
      
      // Create a functional video player window
      const videoWindow = window.open('', '_blank', 'width=1400,height=900');
      if (videoWindow) {
        videoWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${title} - Training Video</title>
              <style>
                body { 
                  margin: 0; 
                  padding: 20px; 
                  background: #000; 
                  color: white;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                .video-container { 
                  max-width: 1200px; 
                  margin: 0 auto; 
                  background: #111;
                  border-radius: 10px;
                  overflow: hidden;
                }
                .video-player {
                  position: relative;
                  width: 100%;
                  height: 600px;
                  background: linear-gradient(45deg, #1e3a8a, #7c3aed);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                }
                .play-button {
                  width: 80px;
                  height: 80px;
                  background: rgba(255,255,255,0.9);
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  transition: all 0.3s;
                  margin-bottom: 20px;
                }
                .play-button:hover { transform: scale(1.1); }
                .video-title { font-size: 24px; margin-bottom: 10px; text-align: center; }
                .video-duration { color: #ccc; text-align: center; }
                .controls {
                  background: #222;
                  padding: 15px 20px;
                  display: flex;
                  align-items: center;
                  gap: 15px;
                }
                .progress-bar {
                  flex: 1;
                  height: 6px;
                  background: #444;
                  border-radius: 3px;
                  cursor: pointer;
                  position: relative;
                }
                .progress-fill {
                  height: 100%;
                  background: #3b82f6;
                  border-radius: 3px;
                  width: 0%;
                  transition: width 0.1s;
                }
                .control-btn {
                  background: none;
                  border: none;
                  color: white;
                  cursor: pointer;
                  padding: 8px;
                  border-radius: 4px;
                  transition: background 0.3s;
                }
                .control-btn:hover { background: #444; }
                .time-display { color: #ccc; font-size: 14px; min-width: 100px; }
                .content {
                  padding: 30px;
                  background: #111;
                }
                .notes-section {
                  background: #222;
                  padding: 20px;
                  border-radius: 8px;
                  margin-top: 20px;
                }
                .notes-textarea {
                  width: 100%;
                  height: 100px;
                  background: #333;
                  border: 1px solid #555;
                  color: white;
                  padding: 10px;
                  border-radius: 4px;
                  resize: vertical;
                }
                .btn {
                  background: #3b82f6;
                  color: white;
                  border: none;
                  padding: 10px 20px;
                  border-radius: 6px;
                  cursor: pointer;
                  margin: 5px;
                  transition: background 0.3s;
                }
                .btn:hover { background: #2563eb; }
                .btn-secondary {
                  background: #6b7280;
                }
                .btn-secondary:hover { background: #4b5563; }
              </style>
            </head>
            <body>
              <div class="video-container">
                <div class="video-player" id="videoPlayer">
                  <div class="play-button" onclick="startVideo()">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div class="video-title">${title}</div>
                  <div class="video-duration">${duration}</div>
                </div>
                
                <div class="controls">
                  <button class="control-btn" onclick="togglePlayPause()" id="playPauseBtn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" id="playIcon">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  
                  <div class="progress-bar" onclick="seek(event)">
                    <div class="progress-fill" id="progressFill"></div>
                  </div>
                  
                  <div class="time-display" id="timeDisplay">0:00 / ${duration}</div>
                  
                  <button class="control-btn" onclick="toggleMute()" id="muteBtn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                    </svg>
                  </button>
                  
                  <button class="control-btn" onclick="toggleFullscreen()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div class="content">
                <h2>${title}</h2>
                <p>${description}</p>
                
                <div class="notes-section">
                  <h3>Take Notes</h3>
                  <textarea class="notes-textarea" placeholder="Write your notes here..." id="notesArea"></textarea>
                  <br>
                  <button class="btn" onclick="saveNotes()">Save Notes</button>
                  <button class="btn btn-secondary" onclick="downloadNotes()">Download Notes</button>
                </div>
                
                <div style="margin-top: 20px;">
                  <button class="btn" onclick="downloadResources()">Download Resources</button>
                  <button class="btn btn-secondary" onclick="window.close()">Close Video</button>
                </div>
              </div>
              
              <script>
                let isPlaying = false;
                let isMuted = false;
                let currentTime = 0;
                let duration = ${totalDuration};
                let videoInterval;
                
                function startVideo() {
                  document.getElementById('videoPlayer').innerHTML = 
                    '<div style="font-size: 18px; text-align: center;">▶️ Video Playing: ${title}<br><br>This is a demo video player. In a real implementation, this would show the actual training video content.</div>';
                  togglePlayPause();
                }
                
                function togglePlayPause() {
                  isPlaying = !isPlaying;
                  const playIcon = document.getElementById('playIcon');
                  
                  if (isPlaying) {
                    playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
                    startVideoTimer();
                  } else {
                    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
                    stopVideoTimer();
                  }
                }
                
                function startVideoTimer() {
                  videoInterval = setInterval(() => {
                    if (currentTime < duration) {
                      currentTime++;
                      updateProgress();
                    } else {
                      togglePlayPause();
                    }
                  }, 1000);
                }
                
                function stopVideoTimer() {
                  clearInterval(videoInterval);
                }
                
                function updateProgress() {
                  const progress = (currentTime / duration) * 100;
                  document.getElementById('progressFill').style.width = progress + '%';
                  
                  const currentMins = Math.floor(currentTime / 60);
                  const currentSecs = currentTime % 60;
                  const totalMins = Math.floor(duration / 60);
                  const totalSecs = duration % 60;
                  
                  document.getElementById('timeDisplay').textContent = 
                    currentMins + ':' + currentSecs.toString().padStart(2, '0') + ' / ' +
                    totalMins + ':' + totalSecs.toString().padStart(2, '0');
                }
                
                function seek(event) {
                  const progressBar = event.currentTarget;
                  const rect = progressBar.getBoundingClientRect();
                  const clickX = event.clientX - rect.left;
                  const percentage = clickX / rect.width;
                  currentTime = Math.floor(duration * percentage);
                  updateProgress();
                }
                
                function toggleMute() {
                  isMuted = !isMuted;
                  const muteBtn = document.getElementById('muteBtn');
                  if (isMuted) {
                    muteBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
                  } else {
                    muteBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>';
                  }
                }
                
                function toggleFullscreen() {
                  if (document.fullscreenElement) {
                    document.exitFullscreen();
                  } else {
                    document.documentElement.requestFullscreen();
                  }
                }
                
                function saveNotes() {
                  const notes = document.getElementById('notesArea').value;
                  localStorage.setItem('video_notes_${title.replace(/\s+/g, '_')}', notes);
                  alert('Notes saved successfully!');
                }
                
                function downloadNotes() {
                  const notes = document.getElementById('notesArea').value;
                  const blob = new Blob([notes], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = '${title.replace(/\s+/g, '_')}_notes.txt';
                  a.click();
                  URL.revokeObjectURL(url);
                }
                
                function downloadResources() {
                  alert('Downloading training resources for ${title}...');
                  // In a real implementation, this would download actual resources
                }
                
                // Load saved notes
                window.onload = function() {
                  const savedNotes = localStorage.getItem('video_notes_${title.replace(/\s+/g, '_')}');
                  if (savedNotes) {
                    document.getElementById('notesArea').value = savedNotes;
                  }
                }
              </script>
            </body>
          </html>
        `);
        videoWindow.document.close();
      }
    } else {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative aspect-video bg-gray-900">
        {/* Video Element (hidden for demo, would contain actual video) */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => {
            if (videoRef.current) {
              setTotalDuration(videoRef.current.duration);
            }
          }}
        >
          {/* In a real implementation, you would have video sources here */}
        </video>
        
        {/* Thumbnail/Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Play className="text-white ml-1" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/80">{duration}</p>
          </div>
        </div>

        {/* Play Button Overlay */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
        >
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            {isPlaying ? (
              <Pause className="text-gray-800" size={24} />
            ) : (
              <Play className="text-gray-800 ml-1" size={24} />
            )}
          </div>
        </button>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <div className="flex-1">
              <input
                type="range"
                min="0"
                max={totalDuration}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            
            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(totalDuration)}
            </span>
            
            <button
              onClick={toggleMute}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            
            <button className="text-white hover:text-blue-400 transition-colors">
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Take Notes
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Download Resources
          </button>
        </div>
      </div>
    </div>
  );
};