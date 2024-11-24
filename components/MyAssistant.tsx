"use client";

import { useEdgeRuntime } from "@assistant-ui/react";
import { Thread } from "@assistant-ui/react";
import { makeMarkdownText } from "@assistant-ui/react-markdown";

const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  const runtime = useEdgeRuntime({ api: "/api/chat" });

  return (
    <Thread
      runtime={runtime}
      assistantMessage={{ components: { Text: MarkdownText } }}
      welcome={{
        message:
          "Hello! I'm Kai, your konva assistant. How can I help you today?",
        suggestions: [
          { prompt: "How do I create a draggable rectangle with Konva?" },
          { prompt: "How to add image with react-konva?" },
        ],
      }}
    />
  );
}
