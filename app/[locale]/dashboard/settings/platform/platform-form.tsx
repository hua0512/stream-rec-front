'use client'
import {Form} from "@/components/new-york/ui/form";
import {useForm, useFormState} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/new-york/ui/tabs";
import {PlatformType} from "@/lib/data/platform/definitions";
import {GlobalConfig, globalConfigSchema} from "@/lib/data/config/definitions";
import {HuyaTabContent, HuyaTabString} from "@/app/[locale]/dashboard/settings/platform/tabs/huya-tab";
import {DouyinQuality, DouyinTabContent, DouyinTabString} from "@/app/[locale]/dashboard/settings/platform/tabs/douyin-tab";
import {toast} from "sonner";
import {updateConfig} from "@/lib/data/config/apis";
import {useRouter} from "@/i18n";
import {LoadingButton} from "@/components/new-york/ui/loading-button";
import DouyuTabContent, {DouyuQuality, DouyuTabString} from "@/app/[locale]/dashboard/settings/platform/tabs/douyu-tab";


export type PlatformFormValues = {
  defaultValues: GlobalConfig,
  save: string,
  huyaStrings: HuyaTabString
  douyinStrings: DouyinTabString
  douyinQualityOptions: DouyinQuality[]
  douyuStrings: DouyuTabString
  douyuQualityOptions: DouyuQuality[]
}

export default function PlatformForm({
                                       defaultValues,
                                       save,
                                       huyaStrings,
                                       douyinStrings,
                                       douyinQualityOptions,
                                       douyuStrings,
                                       douyuQualityOptions
                                     }: PlatformFormValues) {

  const form = useForm<GlobalConfig>({
    resolver: zodResolver(globalConfigSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  })

  const router = useRouter()

  const {isSubmitting} = useFormState({control: form.control})

  async function onSubmit(data: GlobalConfig) {
    toast.promise(updateConfig(data), {
      loading: "Updating config...",
      success: () => {
        router.refresh()
        return "Config updated";
      },
      error: (error) => toast.error(error.message)
    })
  }

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs defaultValue="huya">
            <TabsList className="ml-auto">
              <TabsTrigger value={PlatformType.HUYA}
                           className="text-zinc-600 dark:text-zinc-200">{huyaStrings.platform}</TabsTrigger>
              <TabsTrigger value={PlatformType.DOUYIN}
                           className="text-zinc-600 dark:text-zinc-200">{douyinStrings.platform}</TabsTrigger>
              <TabsTrigger value={PlatformType.DOUYU}
                           className="text-zinc-600 dark:text-zinc-200">{douyuStrings.platform}</TabsTrigger>
            </TabsList>

            <div>
              <TabsContent value={PlatformType.HUYA}>
                <HuyaTabContent controlPrefix={"huyaConfig"} control={form.control} showCookies showMaxBitrate
                                showPartedDownloadRetry huyaStrings={huyaStrings}/>
              </TabsContent>
              <TabsContent value={PlatformType.DOUYIN}>
                <DouyinTabContent controlPrefix={"douyinConfig"} control={form.control} showCookies
                                  showPartedDownloadRetry douyinStrings={douyinStrings}
                                  qualityOptions={douyinQualityOptions}/>
              </TabsContent>
              <TabsContent value={PlatformType.DOUYU}>
                <DouyuTabContent controlPrefix={"douyuConfig"} control={form.control} showCookies
                                 showPartedDownloadRetry strings={douyuStrings}
                                 qualityOptions={douyuQualityOptions}/>
              </TabsContent>
            </div>
          </Tabs>
          <LoadingButton loading={isSubmitting} type="submit">{save}</LoadingButton>
        </form>
      </Form>
  );
}