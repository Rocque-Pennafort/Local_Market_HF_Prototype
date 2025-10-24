
import React from 'react';
import AppLayout from '@/componentes/AppLayout';
import { AppProvider } from '@/contextos/AppContext';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default Index;
