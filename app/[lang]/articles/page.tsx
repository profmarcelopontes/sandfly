import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { RedirectType } from 'next/dist/client/components/redirect'
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

export default async function Articles(){
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
    return(
        <h1>List Articles</h1>
    )
}