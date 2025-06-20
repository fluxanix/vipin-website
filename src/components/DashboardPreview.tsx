import React, { useState, useEffect } from 'react';
import TaskBoard from './TaskBoard';

const DashboardPreview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use IntersectionObserver to trigger animation when component enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('dashboard');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="dashboard" className="w-full py-12 sm:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        <div 
          className={`text-center space-y-3 sm:space-y-4 max-w-xl sm:max-w-3xl mx-auto transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter">
            Intuitive task management interface
          </h2>
          <p className="text-base sm:text-lg text-cosmic-muted">
            A powerful dashboard that adapts to how your team works
          </p>
        </div>
        <div 
          className={`cosmic-glow relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm bg-cosmic-darker/70 shadow-[0_0_15px_rgba(203,255,77,0.15)] transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Mock Dashboard */}
          <div className="bg-cosmic-darker/80 backdrop-blur-md w-full">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 border-b border-cosmic-light/10 gap-2 sm:gap-0">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-md bg-cosmic-light/20 flex items-center justify-center">
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-sm bg-cosmic-accent"></div>
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Marketing Campaign Q2</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-cosmic-light/30 border-2 border-cosmic-darker"></div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-cosmic-light/20 border-2 border-cosmic-darker"></div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-cosmic-light/40 border-2 border-cosmic-darker"></div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-cosmic-accent/20 border-2 border-cosmic-darker flex items-center justify-center text-xs text-cosmic-accent">+3</div>
                </div>
                <div className="h-7 sm:h-8 px-2 sm:px-3 rounded-md bg-cosmic-light/10 flex items-center justify-center text-white text-xs sm:text-sm">
                  Share
                </div>
              </div>
            </div>
            {/* Dashboard Content */}
            <div className="flex flex-col md:flex-row h-[350px] sm:h-[500px] overflow-x-auto overflow-y-hidden">
              {/* Sidebar */}
              <div className="w-full md:w-64 border-r border-cosmic-light/10 p-2 sm:p-4 space-y-2 sm:space-y-4 flex-shrink-0">
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xs text-cosmic-muted uppercase">Navigation</div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md bg-cosmic-light/10 text-white text-xs sm:text-base">
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-sm bg-cosmic-accent"></div>
                      <span>Board</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5 text-xs sm:text-base">
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-sm bg-cosmic-muted/30"></div>
                      <span>Timeline</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5 text-xs sm:text-base">
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-sm bg-cosmic-muted/30"></div>
                      <span>Calendar</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5 text-xs sm:text-base">
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-sm bg-cosmic-muted/30"></div>
                      <span>Files</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2 pt-2 sm:pt-4">
                  <div className="text-xs text-cosmic-muted uppercase">Teams</div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5 text-xs sm:text-base">
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-cosmic-accent/80"></div>
                      <span>Marketing</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5 text-xs sm:text-base">
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-purple-400/80"></div>
                      <span>Design</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-cosmic-muted hover:bg-cosmic-light/5 text-xs sm:text-base">
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-blue-400/80"></div>
                      <span>Development</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-2 sm:p-4 min-w-0">
                {/* Board Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-3 sm:mb-6 gap-2 sm:gap-0">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <h3 className="font-medium text-sm sm:text-base">Tasks</h3>
                    <span className="text-xs bg-cosmic-light/20 px-1.5 sm:px-2 py-0.5 rounded-full text-cosmic-muted">23</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-md bg-cosmic-light/10 flex items-center justify-center text-cosmic-muted">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-md bg-cosmic-light/10 flex items-center justify-center text-cosmic-muted">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9L17 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 17L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="h-7 sm:h-8 px-2 sm:px-3 rounded-md bg-cosmic-accent text-cosmic-darker flex items-center justify-center text-xs sm:text-sm font-medium">
                      New Task
                    </div>
                  </div>
                </div>
                {/* Kanban Board - replaced static implementation with TaskBoard component */}
                <TaskBoard className="h-[250px] sm:h-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
