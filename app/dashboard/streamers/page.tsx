import React from "react";
import {placeholderStreamers} from "@/app/lib/data/placeholder-data";
import StreamerCard from "@/app/dashboard/(overview)/(streamers)/streamer";
import {Button} from "@/components/new-york/ui/button";
import {PlusCircledIcon} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page() {
  return <div className="flex-1 flex-col space-y-8 p-8 md:flex">

    <div className="flex flex-col md:flex-row space-x-0 md:items-center justify-between space-y-2">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Streamers</h2>
        <p className="text-muted-foreground">
          List of streamers and their status.
        </p>
      </div>
      <Link href={"/dashboard/streamers/new"}>
        <Button>
          <PlusCircledIcon className="mr-2 h-4 w-4"/>
          Add streamer
        </Button>
      </Link>
    </div>

    <div className={"grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7"}>
      {
        placeholderStreamers.map(streamer => {
          return <div key={streamer.id} className={"col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1"}>
            <StreamerCard key={streamer.url} streamer={streamer.name} streamerId={streamer.id} streamerAvatar={streamer.avatar}
                          isLive={streamer.isLive}
                          isActivated={streamer.isActivated} platform={streamer.platform} lastStream={streamer.lastStream}
                          description={streamer.description}
            />
          </div>
        })
      }
    </div>
  </div>
}