import React, { createContext, ReactNode, useContext, useState } from 'react';
import { NetworkData } from './NetworkData';

type NetworkContextType = {
  selectedNetwork: NetworkData | null;
  setSelectedNetwork: React.Dispatch<React.SetStateAction<NetworkData | null>>;
};

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

export const NetworkProvider = ({ children }: { children: ReactNode }) => {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkData | null>(null);

  return (
    <NetworkContext.Provider value={{ selectedNetwork, setSelectedNetwork }}>
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetwork = (): NetworkContextType => {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
};
