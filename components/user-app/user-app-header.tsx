'use client'

import { UserNav } from "../common/user-nav"


export default function UserAppHeader(){
    return(
        <header className="bg-teal-500">
            <nav className="flex justify-between items-center p-4">
                <span className="font-extrabold text-white">SandFly</span>
                <UserNav />
            </nav>
        </header>
    )
}