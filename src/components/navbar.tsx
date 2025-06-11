// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, User } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/book', label: 'Book', icon: Calendar },
    { href: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-transparent shadow-inner border-t border-gray-800 flex justify-around py-2">
      {navItems.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link href={href} key={href} className="flex flex-col items-center text-xs">
            <div
              className={`relative h-15 w-15 flex flex-col items-center justify-center${
                isActive
                  ? 'text-white bg-orange-400 p-2 rounded-full'
                  : 'text-yellow-900 p-2'
              }`}
            >
              <Icon size={25} className={isActive ? 'text-white' : 'text-yellow-900'}/>
              <span className={`${isActive ? 'text-white' : 'text-yellow-900'} mt-1`}>
                {label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
