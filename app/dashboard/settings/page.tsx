import {Separator} from "@/components/new-york/ui/separator";
import GlobalFormWrapper from "@/app/dashboard/settings/global-form-wrapper";

export default function Settings() {
  return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Global settings</h3>
          <p className="text-sm text-muted-foreground">
            This is where you can update your global settings.
          </p>
        </div>
        <Separator/>
        <GlobalFormWrapper/>
      </div>
  )
}