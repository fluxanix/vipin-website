import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-md bg-primary flex items-center justify-center">
        <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-sm bg-primary-foreground"></div>
      </div>
    </div>
  );
};

export default Logo;
