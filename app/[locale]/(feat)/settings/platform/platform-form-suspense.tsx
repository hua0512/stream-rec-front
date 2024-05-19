import {fetchConfig} from "@/lib/data/config/apis";
import {Suspense} from "react";
import {PlatformFormSkeleton} from "@/app/[locale]/(feat)/settings/platform/platform-form-skeleton";
import {PlatformFormWrapper} from "@/app/[locale]/(feat)/settings/platform/platform-form-wrapper";


export default async function PlatformFormSuspense() {

  const configPromise = fetchConfig()

  return <>
    <Suspense fallback={<PlatformFormSkeleton/>}>
      <PlatformFormWrapper configPromise={configPromise}/>
    </Suspense>
  </>
}