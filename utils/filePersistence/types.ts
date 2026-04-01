// filePersistence/types.ts - types for file persistence module
export type TurnStartTime = number
export type PersistedFile = {
  fileId: string
  path: string
}
export type FailedPersistence = {
  path: string
  error: string
}
export type FilesPersistedEventData = {
  persistedFiles: PersistedFile[]
  failedFiles: FailedPersistence[]
  durationMs: number
}
export const DEFAULT_UPLOAD_CONCURRENCY = 5
export const FILE_COUNT_LIMIT = 100
export const OUTPUTS_SUBDIR = 'outputs'
