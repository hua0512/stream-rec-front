import React from "react";
import {useFormContext} from "react-hook-form";
import DouyuTabContent, {DouyuQuality, DouyuTabString} from "@/app/[locale]/dashboard/settings/platform/tabs/douyu-tab";

export type DouyuPlatformFormProps = {
  allowNone?: boolean
  strings: DouyuTabString,
  douyuQualityOptions: DouyuQuality[]
}

export const DouyuPlatformForm = ({allowNone, strings, douyuQualityOptions}: DouyuPlatformFormProps) => {

  const form = useFormContext()

  return <>
    <DouyuTabContent controlPrefix={"downloadConfig"} allowNone={allowNone} control={form.control} strings={strings}
                     qualityOptions={douyuQualityOptions}/>
  </>
}