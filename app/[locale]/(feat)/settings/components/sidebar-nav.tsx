"use client"

import Link from "next/link"

import {cn} from "@/lib/utils"
import {buttonVariants} from "@/components/new-york/ui/button";
import React from "react";
import {usePathname} from "@/i18n";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({className, items, ...props}: SidebarNavProps) {
  const pathname = usePathname()

  return (
      <nav
          className={cn(
              "flex flex-col md:flex-row space-x-0 md:space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
              className
          )}
          {...props}
      >
        {items.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className={cn(
                    buttonVariants({variant: "ghost"}),
                    pathname === item.href
                        ? "bg-muted hover:bg-muted"
                        : "hover:bg-transparent hover:underline",
                    "justify-start"
                )}
            >
              {item.title}
            </Link>
        ))}
      </nav>
  )
}