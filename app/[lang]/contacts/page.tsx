import LocaleSwitcher from "@/components/home/locale-switcher"
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/get-dictionary'

export default async function Contact({
    params: { lang }
  }: {
    params: { lang: Locale }
  }){
    const dictionary = await getDictionary(lang)

    return(
        <>
            <LocaleSwitcher idioma={dictionary} />
            <div className="container mx-auto">
                <h1 className="text-4xl text-gray-400 p-2">
                    {dictionary['article'].scientificArticles}
                </h1>
                <div className="p-4 rounded-md border border-spacing-4 border-gray-500 ">
                    <h1 className="text-5xl sm:text-7xl text-white uppercase pt-12">Contact</h1>
                </div>  
            </div>
 
        </>
    )
}