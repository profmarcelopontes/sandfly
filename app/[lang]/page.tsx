import CreateAccountForm from '@/components/home/auth/create-account-form'
import LoginAccountForm from '@/components/home/auth/login-accourt-form'
import LocaleSwitcher from '@/components/home/locale-switcher'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/get-dictionary'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
//import { RedirectType, redirect } from 'next/navigation'
import { RedirectType } from 'next/dist/client/components/redirect'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  let loggedIn = false
  try {
    const supabase = createServerComponentClient({ cookies })
    const {
      data: { session }
    } = await supabase.auth.getSession()

    if (session) loggedIn = true
  } catch (error) {
    console.log('Error página Home', error)
  } finally {
    if (loggedIn) redirect('/user-app', RedirectType.replace)
  }

  return (
    <div>
      <div>
        <LocaleSwitcher idioma={dictionary} />
        <p className="font-bold m-1 p-1 border rounded-md bg-slate-300">
          {dictionary['server-component'].welcome}
        </p>
      </div>

      <div className="flex flex-col h-screen w-full justify-center items-center ">
        <Tabs
          defaultValue="login"
          className="w-[400px] border rounded-md pb-4 shadow-2xl"
        >
          <TabsList className="flex justify-around items-center rounded-b-none h-14 bg-teal-500">
            <TabsTrigger
              value="create-account"
              className="transition-all delay-150"
            >
              {dictionary['option-account']}
            </TabsTrigger>
            <TabsTrigger value="login" className="transition-all delay-150">
              Login
            </TabsTrigger>
          </TabsList>
          <TabsContent value="create-account">
            <CreateAccountForm idioma={dictionary} />
          </TabsContent>
          <TabsContent value="login">
            <LoginAccountForm idioma={dictionary} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
