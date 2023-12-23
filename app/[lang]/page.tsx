import LocaleSwitcher from '@/components/home/locale-switcher'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/get-dictionary'

export default async function IndexPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <LocaleSwitcher />
      <p className="text-2xl font-bold m-4 p-4">
        {dictionary['current-locale']}: {lang}
      </p>
      <p className="font-bold m-4 p-4 border rounded-md bg-slate-300">
        Server Component: {dictionary['server-component'].welcome}
      </p>
    </div>
  )
}
