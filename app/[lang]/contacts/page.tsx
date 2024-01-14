import ContactForm from "@/components/home/contacts"
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
            <div className="container w-[400px] border rounded-md pt-4 shadow-2xl p-2 mt-10">
                <ContactForm idioma={dictionary} />
            </div>
 
        </>
    )
}