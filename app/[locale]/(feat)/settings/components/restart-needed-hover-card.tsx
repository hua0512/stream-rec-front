import {HoverCard, HoverCardContent, HoverCardTrigger,} from "@/components/new-york/ui/hover-card"
import {AlertTriangleIcon, TriangleAlert} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/new-york/ui/alert";
import React from "react";

export type RestartNeededHoverCardProps = {
  title: string
  description: string
}

export function RestartNeededHoverCard({title, description}: RestartNeededHoverCardProps) {

  return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <TriangleAlert className="h-4 w-4 text-destructive dark:border-destructive [&>svg]:text-destructive"/>
        </HoverCardTrigger>
        <HoverCardContent className="w-100">
          <Alert variant={"destructive"} className={""}>
            <AlertTriangleIcon className="h-4 w-4"/>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
              {description}
            </AlertDescription>
          </Alert>
        </HoverCardContent>
      </HoverCard>
  )
}
