import React, { createContext, useContext, useState, ReactNode } from "react";
import { websiteVersions, WebsiteVersion } from "../data/websiteVersions";

interface VersionContextType {
  currentVersion: WebsiteVersion;
  setCurrentVersion: (version: WebsiteVersion) => void;
  allVersions: WebsiteVersion[];
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export const useVersion = () => {
  const context = useContext(VersionContext);
  if (context === undefined) {
    throw new Error("useVersion must be used within a VersionProvider");
  }
  return context;
};

interface VersionProviderProps {
  children: ReactNode;
}

export const VersionProvider: React.FC<VersionProviderProps> = ({
  children,
}) => {
  const [currentVersion, setCurrentVersion] = useState<WebsiteVersion>(
    websiteVersions.find((v) => v.isCurrent) ||
      websiteVersions[websiteVersions.length - 1]
  );

  const value = {
    currentVersion,
    setCurrentVersion,
    allVersions: websiteVersions,
  };

  return (
    <VersionContext.Provider value={value}>{children}</VersionContext.Provider>
  );
};
