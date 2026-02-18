import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'column' | 'row';
  gap?: "0" | "4" | "8" | "12" | "16" | "20" | "24" | "32";
  center?: boolean;
  fillWidth?: boolean;
  padding?: string;
  paddingX?: string;
  paddingY?: string;
  vertical?: 'center' | 'start' | 'end';
}

export const Flex = ({ 
  children, 
  direction = 'row', 
  gap = "0", 
  center, 
  fillWidth, 
  vertical, 
  padding,
  paddingX,
  paddingY,
  className, 
  ...props 
}: FlexProps) => {
  return (
    <div 
      className={cn(
        "flex",
        direction === 'column' ? "flex-col" : "flex-row",
        center && "justify-center items-center",
        vertical === 'center' && "items-center",
        fillWidth && "w-full",
        // Map padding props to Tailwind classes
        paddingX === "20" && "px-5",
        paddingY === "12" && "py-3",
        paddingY === "24" && "py-6",
        gap === "8" && "gap-2",
        gap === "12" && "gap-3",
        gap === "16" && "gap-4",
        gap === "24" && "gap-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const Column = (props: FlexProps) => <Flex direction="column" {...props} />;
export const Row = (props: FlexProps) => <Flex direction="row" {...props} />;