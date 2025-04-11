'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa';

export function Breadcrumbs() {
  const pathname = usePathname();
  
  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(path => path);
    
    const breadcrumbs = paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join('/')}`;
      const label = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return { href, label };
    });

    return [{ href: '/', label: 'Inicio' }, ...breadcrumbs];
  };

  const breadcrumbs = getBreadcrumbs();
  
  if (pathname === '/') return null;

  return (
    <nav aria-label="Breadcrumb" className="py-2 px-4 tablet:px-6">
      <ol className="flex items-center flex-wrap gap-2 text-sm tablet:text-base">
        {breadcrumbs.map((breadcrumb, index) => (
          <Fragment key={breadcrumb.href}>
            {index === 0 ? (
              <li>
                <Link
                  href={breadcrumb.href}
                  className="text-[#391502] hover:text-[#c44400] transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#c44400] rounded p-1"
                  aria-label={index === 0 ? "Ir a la página de inicio" : `Ir a ${breadcrumb.label}`}
                >
                  <FaHome className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">Inicio</span>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  href={breadcrumb.href}
                  className="text-[#391502] hover:text-[#c44400] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c44400] rounded p-1"
                >
                  {breadcrumb.label}
                </Link>
              </li>
            )}
            {index < breadcrumbs.length - 1 && (
              <li aria-hidden="true">
                <FaChevronRight className="w-3 h-3 text-[#391502]/60" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}