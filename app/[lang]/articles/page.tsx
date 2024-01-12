import LocaleSwitcher from "@/components/home/locale-switcher"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/get-dictionary'
import Link from "next/link"

export default async function Articles({
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
                    <div className="flex items-center flex-wrap">
                        <div className="flex justify-normal">
                            <Avatar className="h-28 w-28">
                                <AvatarImage src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=fmi1qv4AAAAJ&citpid=2" alt="@Google Scholar" />
                                <AvatarFallback>Maria do Socorro Pires e Cruz</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="text-teal-500 text-2xl p-2">Maria do Socorro Pires e Cruz</div>
                    </div>

                    <div className="p-2">
                        <Link className="no-underline hover:underline text-lg text-blue-800" href={'https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=fmi1qv4AAAAJ&citation_for_view=fmi1qv4AAAAJ:Y0pCki6q_DkC'} target="_blank">
                            Genotypes of the mannan-binding lectin gene and susceptibility to visceral leishmaniasis and clinical complications
                        </Link>
                        <div className="flex flex-col text-sm">
                            <span>D Peres Alonso, AFB Ferreira, PEM Ribolla, IKF de Miranda Santos, ...</span>
                            <span> The Journal of infectious diseases 195 (8), 1212-1217</span>
                        </div>
                    </div>

                    <div className="p-2">
                        <Link className="no-underline hover:underline text-lg text-blue-800" href={'https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=fmi1qv4AAAAJ&citation_for_view=fmi1qv4AAAAJ:u5HHmVD_uO8C'} target="_blank">
                            Cardiac and pulmonary alterations in symptomatic and asymptomatic dogs infectednaturally with Leishmania (Leishmania) chagasi
                        </Link>
                        <div className="flex flex-col text-sm">
                            <span>GBB Alves, FA Pinho, S Silva, MSP Cruz, FAL Costa</span>
                            <span>Brazilian Journal of Medical and Biological Research 43, 310-315</span>
                        </div>
                    </div>
                </div>  
            </div>
 
        </>
    )
}