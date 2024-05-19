import {TwitchQualityItem, TwitchTabContent, TwitchTabString} from "@/app/[locale]/(feat)/settings/platform/tabs/twitch-tab";
import {useFormContext} from "react-hook-form";
import React from "react";


export type TwitchPlatformFormProps = {
  allowNone?: boolean
  strings: TwitchTabString,
  qualities: TwitchQualityItem[]
}

export const TwitchPlatformForm = ({allowNone, strings, qualities}: TwitchPlatformFormProps) => {

  const form = useFormContext()

  return <>
    <TwitchTabContent controlPrefix={"downloadConfig"} control={form.control} strings={strings} qualityOptions={qualities} allowNone={allowNone}/>
  </>
}