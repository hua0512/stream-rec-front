import {z} from "zod";
import {huyaRegex} from "@/lib/data/platform/huya/constants";
import {douyinRegex} from "@/lib/data/platform/douyin/constants";
import {douyuRegex} from "@/lib/data/platform/douyu/constants";
import {twitchRegex} from "@/lib/data/platform/twitch/constants";
import {pandatvRegex} from "@/lib/data/platform/pandatv/constants";

export const globalPlatformConfig = z.object({
  partedDownloadRetry: z.number().min(0).nullish(),
  fetchDelay: z.number().min(0).nullish(),
})

export type GlobalPlatformConfig = z.infer<typeof globalPlatformConfig>


export enum PlatformType {
  HUYA = "huya",
  DOUYIN = "douyin",
  DOUYU = "douyu",
  TWITCH = "twitch",
  PANDATV = "pandatv",
  TEMPLATE = "template"
}

export const platformRegexes = [
  {platformType: PlatformType.HUYA, regex: huyaRegex},
  {platformType: PlatformType.DOUYIN, regex: douyinRegex},
  {platformType: PlatformType.DOUYU, regex: douyuRegex},
  {platformType: PlatformType.TWITCH, regex: twitchRegex},
  {platformType: PlatformType.PANDATV, regex: pandatvRegex}
];
