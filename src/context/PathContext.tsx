import { createContext, useState, ReactNode } from "react";

interface PathContextProps {
  currentPath: string;
  setPath: (newPath: string) => void;
}

const PathContext = createContext<PathContextProps | undefined>(undefined);

interface PathProviderProps {
  children: ReactNode;
}

const PathProvider = ({ children }: PathProviderProps) => {
  const [currentPath, setCurrentPath] = useState("/");

  const setPath = (newPath: string) => {
    setCurrentPath(newPath);
  };

  return (
    <PathContext.Provider value={{ currentPath, setPath }}>
      {children}
    </PathContext.Provider>
  );
};

export { PathProvider, PathContext };
