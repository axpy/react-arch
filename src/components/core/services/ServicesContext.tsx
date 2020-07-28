import React, { ReactNode, createContext, useState, useContext, useMemo } from 'react';
import { ServicesList } from '../../../services/servicesInitializator';

type Props = {
  children: ReactNode,
  services: ServicesList
};

const ServicesContext = createContext<ServicesList | null>(null);

const ServicesProvider = ({
  children,
  services: {
    authService,
    userService,
    approvedItemsService,
    formDataValidatorService
  }
}: Props) => {
  return (
    <ServicesContext.Provider
      value={{
        authService,
        userService,
        approvedItemsService,
        formDataValidatorService
      }}
    >
      {children}
    </ServicesContext.Provider>
  )
}

const useService = () => useContext(ServicesContext);

export { ServicesProvider, useService }
