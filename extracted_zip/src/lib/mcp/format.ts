import { isPlaceholder, type Maybe } from "@/content/types";

/**
 * Returns a confirmed value, or a `{ pending: reason }` marker so MCP clients
 * never present unverified clinic data as fact.
 */
export function value<T>(v: Maybe<T> | undefined): T | { pending: string } {
  if (v === undefined) return { pending: "Not supplied by the clinic yet" };
  if (isPlaceholder(v)) return { pending: v.label };
  return v as T;
}

export function json(data: unknown) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
    structuredContent: data as Record<string, unknown>,
  };
}

export function notFound(message: string) {
  return { content: [{ type: "text" as const, text: message }], isError: true };
}
