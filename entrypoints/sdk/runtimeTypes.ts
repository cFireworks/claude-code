// Stub for sdk/runtimeTypes.ts - internal Anthropic types
// These are non-serializable types (callbacks, interfaces)
export type SDKRuntimeConfig = Record<string, unknown>
export type SDKEventCallback = (...args: unknown[]) => unknown
