'use client'

import { i18n } from '@/i18n-config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Image from 'next/image'
import localimagebrasil from '../../public/flags/brasil.png'
import localimageespanha from '../../public/flags/espanha.png'
import localimageusa from '../../public/flags/usa.png'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              SandFly
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Publications
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Contacts
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                About
              </a>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center gap-2">
            <ul className="flex gap-4">
              {i18n.locales.map((locale) => {
                return (
                  <li key={locale}>
                    <Link href={redirectedPathName(locale)}>
                      {' '}
                      <Image
                        src={
                          locale === 'pt'
                            ? localimagebrasil
                            : locale === 'es'
                              ? localimageespanha
                              : localimageusa
                        }
                        alt="Flag"
                        width={40}
                        height={40}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
