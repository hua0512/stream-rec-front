import React, {Suspense} from "react";
import StatsSkeleton from "@/app/[locale]/dashboard/(overview)/(stats)/stats-skeleton";
import {TotalStatsCard, WeeklyStatsCard} from "@/app/[locale]/dashboard/(overview)/(stats)/dashboard-cards";


export default async function StatsCardWrapper() {

  return (
      <>
        <div className="space-y-4 lg:col-span-1">
          <Suspense fallback={<StatsSkeleton/>}>
            <TotalStatsCard/>
          </Suspense>
        </div>
        <div className="space-y-4 lg:col-span-1">
          <Suspense fallback={<StatsSkeleton/>}>
            <WeeklyStatsCard/>
          </Suspense>
        </div>
      </>
  )
}