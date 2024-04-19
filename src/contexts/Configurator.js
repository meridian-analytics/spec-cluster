import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [renderMode, setRenderMode] = useState(0);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [scaleZ, setScaleZ] = useState(1);

  return (
    <ConfiguratorContext.Provider
      value={{
        renderMode,
        setRenderMode,
        scaleX,
        setScaleX,
        scaleY,
        setScaleY,
        scaleZ,
        setScaleZ,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
