declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      GITHUB_ID: string
      GITHUB_SECRET: string
      RESEND_API_KEY: string
    }
  }
}

// eslint-disable-next-line prettier/prettier
export { }
