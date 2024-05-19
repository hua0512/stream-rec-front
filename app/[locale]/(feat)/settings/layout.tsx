import React from "react";
import {SidebarNav} from "@/app/[locale]/(feat)/settings/components/sidebar-nav";
import {unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";
import {ContentLayout} from "@/components/dashboard/content-layout";


export default function SettingsLayout({params: {locale}, children}: { params: { locale: string }, children: React.ReactNode }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("SettingsPage");
  const webT = useTranslations("WebSettingPage");

  const sidebarNavItems = [
    {
      title: t("globalSettings"),
      href: "/settings",
    },
    {
      title: t("platformSettings"),
      href: "/settings/platform",
    },
    {
      title: t("themeSettings"),
      href: "/settings/appearance",
    },
    {
      title: webT("title"),
      href: "/settings/web",
    }
  ]

  return (
      <>
        <ContentLayout title={t("globalSettings")}>
          <div className="space-y-6 p-8 pb-16">
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <aside className="lg:w-1/8">
                <SidebarNav items={sidebarNavItems}/>
              </aside>
              <div className="flex-1 lg:max-w-2xl">{children}</div>
            </div>
          </div>
        </ContentLayout>

      </>
  )
}