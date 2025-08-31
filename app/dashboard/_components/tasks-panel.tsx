"use client";

import React, { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

type TaskPriority = "Low" | "Medium" | "High";

interface TaskItem {
  id: string;
  title: string;
  completed: boolean;
  priority: TaskPriority;
  dueDate?: string;
}

const defaultTasks: TaskItem[] = [
  {
    id: "t1",
    title: "Review onboarding PR",
    completed: false,
    priority: "High",
    dueDate: "2025-09-05",
  },
  {
    id: "t2",
    title: "Prepare Q3 metrics export",
    completed: true,
    priority: "Medium",
    dueDate: "2025-09-01",
  },
  {
    id: "t3",
    title: "Follow up with billing issue #1423",
    completed: false,
    priority: "Low",
    dueDate: "2025-09-10",
  },
];

export function TasksPanel() {
  const [tasks, setTasks] = useState<TaskItem[]>(defaultTasks);

  const remainingCount = useMemo(
    () => tasks.filter((t) => !t.completed).length,
    [tasks]
  );

  function toggleTaskCompletion(taskId: string) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function priorityVariant(priority: TaskPriority) {
    if (priority === "High") return "default" as const;
    if (priority === "Medium") return "outline" as const;
    return "secondary" as const;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>
          {remainingCount} open {remainingCount === 1 ? "task" : "tasks"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-start justify-between gap-4 rounded-lg border p-3"
          >
            <div className="flex items-start gap-3">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTaskCompletion(task.id)}
                aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  {task.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  Due {task.dueDate ?? "—"}
                </span>
              </div>
            </div>
            <Badge variant={priorityVariant(task.priority)}>{task.priority}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default TasksPanel;

