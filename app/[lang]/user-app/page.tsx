import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { RedirectType } from 'next/dist/client/components/redirect'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import imageCicle from '@/public/cicle.svg'



export default async function UserApp() {

  let loggedIn = false
  try {
    const supabase = createServerComponentClient({ cookies })
    const {
      data: { session }
    } = await supabase.auth.getSession()

    if (session) loggedIn = true
  } catch (error) {
    console.log('UserApp', error)
  } finally {
    if (!loggedIn) redirect('/', RedirectType.replace)
  }

  return (
    <>
      <Image
        src={imageCicle}
        layout="responsive"
        alt="Picture of the author"
      />
    </>
  )
}