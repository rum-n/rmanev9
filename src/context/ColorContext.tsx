import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type TextColor = "original" | "blue" | "green" | "red" | "yellow";

interface ColorContextType {
  textColor: TextColor;
  setTextColor: (color: TextColor) => void;
  getTextColorValue: () => string;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};

interface ColorProviderProps {
  children: ReactNode;
}

const colorMap: Record<TextColor, string> = {
  original: "#b7b7b7", // Default text color
  blue: "#2563eb",
  green: "#16a34a",
  red: "#ef4444",
  yellow: "#eab308",
};

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [textColor, setTextColor] = useState<TextColor>(() => {
    // Check localStorage first
    const savedColor = localStorage.getItem("textColor") as TextColor;
    if (savedColor && colorMap[savedColor]) {
      return savedColor;
    }
    return "original";
  });

  const getTextColorValue = () => {
    return colorMap[textColor];
  };

  const handleSetTextColor = (color: TextColor) => {
    setTextColor(color);
    localStorage.setItem("textColor", color);
  };

  useEffect(() => {
    // Apply color to CSS custom property
    document.documentElement.style.setProperty(
      "--text-primary",
      getTextColorValue()
    );
  }, [textColor]);

  const value = {
    textColor,
    setTextColor: handleSetTextColor,
    getTextColorValue,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
