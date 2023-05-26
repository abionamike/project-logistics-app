import React, { ReactNode, createContext, useContext, useState } from 'react'

interface LocationStateContextProvider {
    children: ReactNode
}

type UserLocation = {
    coords: {
        latitude: number,
        longitude: number
    }
}

const useLocationStateContext = () => {
    const [userLocation, setUserLocation] = useState<UserLocation>();

    return { userLocation, setUserLocation }
}

type UserLocationStateContextValue = ReturnType<typeof useLocationStateContext>;

const UserLocationStateContext = createContext<UserLocationStateContextValue | null>(null);

export const UserLocationStateContextProvider = ({ children }: LocationStateContextProvider) => {
    const userLocationStateContextValue = useLocationStateContext();

    return (
        <UserLocationStateContext.Provider value={userLocationStateContextValue}>
            {children}
        </UserLocationStateContext.Provider>
    )
}

export const useUserLocationStateContext = () => {
    const context = useContext(UserLocationStateContext);

    if(!context) {
        throw new Error(
            "userUserLocationStateContext must be used insider UserLocationStateContextProvider"
        )
    }

    return context;
}