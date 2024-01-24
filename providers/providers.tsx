'use client'

import { LanguageProvider } from "@/context"


export const Providers = ({ children }: { children:React.ReactNode }) => {
    return(
        <>
            <LanguageProvider>
                { children }
            </LanguageProvider>
        </>
    )
}