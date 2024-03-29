import {cookies} from "next/headers";
import Image from "next/image";
import {DashboardLayout} from "@/app/[locale]/dashboard/(overview)/dashboard";
import React, {useMemo} from "react";
import {unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";


export default function Layout({params: {locale}, children}: { params: { locale: string }, children: React.ReactNode }) {

  unstable_setRequestLocale(locale);

  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  const dashboardT = useTranslations("Dashboard")
  const streamersT = useTranslations("StreamersPage")
  const recordsT = useTranslations("RecordsPage")
  const settingsT = useTranslations("SettingsPage")
  const loginT = useTranslations("LoginPage")
  const uploadT = useTranslations("UploadsPage")

  const accounts = [
    {
      label: cookies().get('username')?.value || "stream-rec",
      email: cookies().get('username')?.value || "stream-rec",
      icon: <Image src={"/stream-rec.png"} width={40} height={40} alt={"Stream rec icon"}/>,
    },
  ]

  const strings = useMemo(() => {
    return {
      dashboard: dashboardT("title"),
      streamers: streamersT("title"),
      records: recordsT("title"),
      settings: settingsT("title"),
      uploads: uploadT("title"),
      logout: loginT("logout"),
    }
  }, [dashboardT, streamersT, recordsT, settingsT, uploadT, loginT])

  return (
      <DashboardLayout accounts={accounts} defaultLayout={defaultLayout} defaultCollapsed={defaultCollapsed} navCollapsedSize={4}
                       strings={strings}>{children}
      </DashboardLayout>
  );
}