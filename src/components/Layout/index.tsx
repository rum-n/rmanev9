import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full max-w-6xl relative md:max-w-full sm:max-w-full mx-auto px-6xl md:px-xl sm:px-md">
      {children}
    </div>
  );
};
