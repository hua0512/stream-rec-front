"use client"

import {LucideIcon} from "lucide-react"

import {cn} from "@/lib/utils"
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/new-york/ui/tooltip";
import {buttonVariants} from "@/components/new-york/ui/button";
import {clsx} from "clsx";
import {Link, usePathname} from "@/i18n";
import React from "react";

export type NavLink = {
  title: string
  label?: string
  href: string,
  action?: () => void
  icon: LucideIcon
}

interface NavProps {
  isCollapsed: boolean
  links: NavLink[]
}

export function Nav({links, isCollapsed}: NavProps) {

  const pathname = usePathname();

  const isCurrentLink = (link: string) => {
    if (pathname.startsWith("/dashboard/settings") && link === "/dashboard/settings" ||
        pathname.startsWith("/dashboard/streamers") && link === "/dashboard/streamers" ||
        pathname.startsWith("/dashboard/records") && link === "/dashboard/records" ||
        pathname.startsWith("/dashboard/uploads") && link === "/dashboard/uploads") {
      return true
    }
    return pathname === link
  };

  const computeVariant = (link: string) => {
    if (isCurrentLink(link)) return "default"
    return "ghost"
  };


  const collapsedIcon = (link: NavLink) => {
    return (
        <Tooltip key={link.title} delayDuration={0}>
          <TooltipTrigger asChild>
            {
              link.action ? (
                  <button
                      onClick={link.action}
                      className={clsx(
                          cn(
                              buttonVariants({variant: computeVariant(link.href), size: "icon"}),
                              "h-9 w-9",
                          ),
                          {
                            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white": isCurrentLink(link.href)
                          }
                      )}
                  >
                    <link.icon className="h-4 w-4"/>
                    <span className="sr-only">{link.title}</span>
                  </button>
              ) : (
                  <Link
                      href={link.href}
                      className={clsx(
                          cn(
                              buttonVariants({variant: computeVariant(link.href), size: "icon"}),
                              "h-9 w-9",
                          ),
                          {
                            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white": isCurrentLink(link.href)
                          }
                      )}
                  >
                    <link.icon className="h-4 w-4"/>
                    <span className="sr-only">{link.title}</span>
                  </Link>
              )
            }
          </TooltipTrigger>
          <TooltipContent side="right" className="flex items-center gap-4">
            {link.title}
            {link.label && (
                <span className="ml-auto text-muted-foreground">
                  {link.label}
                </span>
            )}
          </TooltipContent>
        </Tooltip>
    )
  }


  const expandedIcon = (link: NavLink) => {
    return (
        <>

          {
            link.action ? (
                <button
                    key={link.title}
                    onClick={link.action}
                    className={clsx(
                        cn(
                            buttonVariants({variant: computeVariant(link.href), size: "sm"}),
                            "justify-start"
                        ),
                        {
                          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white": isCurrentLink(link.href),
                        }
                    )}
                >
                  <link.icon className="mr-2 h-4 w-4"/>
                  {link.title}
                  {link.label && (
                      <span
                          className={clsx(
                              cn(
                                  "ml-auto",
                              ),
                              {"text-background dark:text-white": isCurrentLink(link.href)}
                          )}
                      >
                  {link.label}
                </span>
                  )}
                </button>
            ) : (
                <Link
                    key={link.title}
                    href={link.href}
                    className={clsx(
                        cn(
                            buttonVariants({variant: computeVariant(link.href), size: "sm"}),
                            "justify-start"
                        ),
                        {
                          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white": isCurrentLink(link.href),
                        }
                    )}
                >
                  <link.icon className="mr-2 h-4 w-4"/>
                  {link.title}
                  {link.label && (
                      <span
                          className={clsx(
                              cn(
                                  "ml-auto",
                              ),
                              {"text-background dark:text-white": isCurrentLink(link.href)}
                          )}
                      >
                  {link.label}
                </span>
                  )}
                </Link>
            )
          }
        </>
    )
  }

  return (
      <div
          data-collapsed={isCollapsed}
          className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) =>
              isCollapsed ? (
                  <React.Fragment key={index}>
                    {collapsedIcon(link)}
                  </React.Fragment>
              ) : (
                  <React.Fragment key={index}>
                    {expandedIcon(link)}
                  </React.Fragment>
              )
          )}
        </nav>
      </div>
  )
}