import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { NavRoutes } from '@/lib/routes'

const Header = () => {
  return (
    <div className=' w-full h-16 flex items-center justify-center'>
        {NavRoutes.map((route, index) => (
            <Button key={index} variant={'ghost'}>
                <Link href={route.href}>
                    {route.label}
                </Link>
            </Button>
        ))}
    </div>
  )
}

export default Header
