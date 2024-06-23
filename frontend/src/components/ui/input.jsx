import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, onKeyUp, ...props }, ref) => {
  const handleKeyUp = event => {
    if (event.key === 'Enter') {
      if (typeof onKeyUp === 'function') {
        onKeyUp(event);
      }
    }
  };
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border-2 border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      onKeyUp={handleKeyUp}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
