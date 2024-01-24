import { createContext, useCallback, useContext, useState } from "react"

const LanguageContext = createContext({})

export const LanguageProvider = ({ children }: { children:React.ReactNode }) => {
    const [lang, setLang] = useState('pt')

    const handleLangChange = useCallback((lang: string) => {
        setLang(lang)
    }, [])

    return(
        <LanguageContext.Provider value={{ lang, handleLangChange }}>
            { children }
         </LanguageContext.Provider>
    ) 
}

export const useLanguageContext = () => useContext(LanguageContext)