'use client';
import StreamerCard from "@/app/dashboard/(overview)/(streamers)/streamer";
import React from "react";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/new-york/ui/collapsible";
import {Button} from "@/components/new-york/ui/button";
import {CaretSortIcon} from "@radix-ui/react-icons";
import {StreamerSchema} from "@/app/lib/data/streams/definitions";

type RecordListProps = {
  title: string,
  streamers: StreamerSchema[]
}

export function RecordList({streamers, title}: RecordListProps) {

  const [isOpen, setIsOpen] = React.useState(true)

  return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className={"space-y-2"}>
        <div className="flex items-center space-x-4 justify-between">
          <h3 className="text-xm font-semibold"> {title}</h3>
          <h3 className="text-xs px-2 py-0.5 bg-muted rounded-md">{streamers.length}</h3>

          <div className={"flex-1"}>
            <CollapsibleTrigger className={"float-end"} asChild>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4"/>
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

        </div>

        <CollapsibleContent className="space-y-4">
          <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:gap-4"}>
            {
              streamers.map(streamer => (
                  <StreamerCard
                      key={streamer.name}
                      streamer={streamer.name}
                      isActivated={streamer.isActivated}
                      streamerId={streamer.id}
                      isLive={streamer.isLive}
                      streamerAvatar={streamer.avatar}
                      lastStream={streamer.lastStream}
                      description={streamer.description}
                      platform={streamer.platform!!.toLowerCase()}
                  />
              ))
            }
          </div>

        </CollapsibleContent>
      </Collapsible>
  )

}
