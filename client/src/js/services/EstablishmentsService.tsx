import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

import axios from "axios";

interface EstablishmentsServiceType {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  getEstablishmentsByCity: (city: string) => void;
  clearCity: () => void;
  establishments: Establishment[];
  setEstablishments: (establishments: Establishment[]) => void;
}

interface Establishment {
  _id: string;
  establishmentName: string;
  establishmentType: string;
  establishmentCity: string;
  establishmentZipcode: string;
  establishmentAddress: string;
  establishmentSpecials: any;
}

interface MyComponentProps {
  children: ReactNode;
}

const EstablishmentsServiceContext = createContext<
  EstablishmentsServiceType | undefined
>(undefined);

export const useEstablishmentsService = () => {
  const context = useContext(EstablishmentsServiceContext);
  if (!context) {
    throw new Error(
      "useEstablishmentsService must be used within an EstablishmentsServiceProvider"
    );
  }
  return context;
};

export const EstablishmentsServiceProvider: React.FC<MyComponentProps> = ({
  children,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [establishments, setEstablishments] = useState<Establishment[]>([]);

  const getEstablishmentsByCity = useCallback(async (city: string) => {
    try {
      setEstablishments([] as Establishment[]);
      const response = await axios.get<Establishment[]>(
        `https://find-happy-hour.onrender.com/api/establishments-by-city/${city}`
      );
      setEstablishments(response.data);
    } catch (error) {
      console.error("Error fetching establishments:", error);
    }
  }, []);

  const clearCity = () => setSelectedCity("");

  return (
    <EstablishmentsServiceContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        clearCity,
        establishments,
        setEstablishments,
        getEstablishmentsByCity,
      }}
    >
      {children}
    </EstablishmentsServiceContext.Provider>
  );
};
