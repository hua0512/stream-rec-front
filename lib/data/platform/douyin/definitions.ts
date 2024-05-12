import {z} from "zod";
import {baseDownloadConfig} from "@/lib/data/streams/definitions";
import {globalPlatformConfig} from "@/lib/data/platform/definitions";


export enum DouyinQuality {
  origin = "origin",
  uhd = "uhd",
  hd = "hd",
  sd = "sd",
  ld = "ld",
  md = "md",
  ao = "ao"
}

export const douyinGlobalConfig = globalPlatformConfig.extend({
  cookies: z.string().nullish(),
  quality: z.nativeEnum(DouyinQuality).nullish(),
  partedDownloadRetry: z.number().min(0).nullish(),
  sourceFormat: z.enum(["flv", "hls"]).nullish(),
});

export const douyinDownloadConfig = baseDownloadConfig.merge(douyinGlobalConfig)

export type DouyinGlobalConfig = z.infer<typeof douyinGlobalConfig>
export type DouyinDownloadConfig = z.infer<typeof douyinDownloadConfig>

