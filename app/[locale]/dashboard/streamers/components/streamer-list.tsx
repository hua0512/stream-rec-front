import React from "react";
import {deleteStreamer, fetchStreamers} from "@/lib/data/streams/streamer-apis";
import StreamerListWrapper from "@/app/[locale]/dashboard/streamers/components/streamer-list-wrapper";

export default async function StreamerList() {
  const streamerData = fetchStreamers("non-template");
  const templateStreamersData = fetchStreamers("template");

  const [streamers, templateStreamers] = await Promise.all([streamerData, templateStreamersData])

  return (
      <>
        <StreamerListWrapper streamers={streamers} templateStreamers={templateStreamers} deleteStreamer={deleteStreamer}/>
      </>
  )
}