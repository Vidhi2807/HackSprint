import { createContext, useContext } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const value = {
    appName: 'NeuroLens AI',
    version: '1.0.0',
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export default AppContext;
