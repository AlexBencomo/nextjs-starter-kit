"use client";

import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionCards } from "./section-cards";
import { ChartAreaInteractive } from "./chart-interactive";
import { TasksPanel } from "./tasks-panel";

export function OverviewTabs() {
  const [tab, setTab] = useState<string>("overview");

  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="tasks">Tasks</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4 py-2">
        <SectionCards />
        <ChartAreaInteractive />
      </TabsContent>

      <TabsContent value="tasks" className="space-y-4 py-2">
        <TasksPanel />
      </TabsContent>
    </Tabs>
  );
}

export default OverviewTabs;

