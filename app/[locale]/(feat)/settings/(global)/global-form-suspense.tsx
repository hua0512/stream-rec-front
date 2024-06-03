import React, {Suspense} from "react";
import {GlobalSettingSkeleton} from "@/app/[locale]/(feat)/settings/(global)/global-setting-skeleton";
import {fetchConfig, updateConfig} from "@/lib/data/config/apis";
import {useGlobalSettingsTranslations} from "@/app/hooks/translations/global-settings-translations";
import {GlobalForm} from "@/app/[locale]/(feat)/settings/(global)/global-form";

export const GlobalFormSuspense = () => {

  const configPromise = fetchConfig()
  const appConfig = React.use(configPromise)
  const translations = useGlobalSettingsTranslations()

  return (
      <Suspense fallback={<GlobalSettingSkeleton/>}>
        <GlobalForm appConfig={appConfig} update={updateConfig} strings={translations}/>
      </Suspense>
  )
}