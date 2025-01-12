"use client"
import { ClerkProvider, useAuth } from '@clerk/nextjs'


const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {


    return (
        <ClerkProvider>
                {children}
        </ClerkProvider>
    );
};

export default AppProviders;