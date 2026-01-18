import { createContext } from "react";
import { FEATURES } from "../data/features.data";

export const FeatureContext = createContext([]);

export const FeatureProvider = ({ children }) => {
    console.log('Provider', FEATURES);
    return (
        <FeatureContext.Provider value={FEATURES}>
            {children}
        </FeatureContext.Provider>
    );
}