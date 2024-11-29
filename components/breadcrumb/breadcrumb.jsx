'use client'
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { FaHome } from "react-icons/fa";

  
  export function BreadcrumbDemo() {
    const path = usePathname();
    const pathSegments = path.split('/').filter(segment => segment);
    
    return (
      <Breadcrumb >
        <BreadcrumbList className='mb-3'>
        {path !== '/' && (

          <BreadcrumbItem>
            <BreadcrumbLink href="/"><FaHome className="w-5 h-5"/></BreadcrumbLink>
          </BreadcrumbItem>
        )}
          {pathSegments.map((segment, index) => (
            <Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem >
                <BreadcrumbLink href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                  {segment}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    )
  }
  