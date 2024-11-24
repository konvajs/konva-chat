"use client";

import { useEdgeRuntime } from "@assistant-ui/react";
import { Thread } from "@assistant-ui/react";
import { makeMarkdownText } from "@assistant-ui/react-markdown";
import { ThreadPrimitive } from "@assistant-ui/react";

const Suggestion = () => {
  return (
    <ThreadPrimitive.Suggestion
      prompt="I need help with product search"
      method="replace"
      autoSend
    />
  );
};

const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  const runtime = useEdgeRuntime({ api: "/api/chat" });

  return (
    <Thread
      runtime={runtime}
      assistantMessage={{ components: { Text: MarkdownText } }}
      welcome={{
        suggestions: [
          { prompt: "How do I create a draggable rectangle with Konva?" },
          { prompt: "How to add image with react-konva?" },
        ],
      }}
    />
  );
}
