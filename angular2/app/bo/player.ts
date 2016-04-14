export interface Player {
    playing: boolean
    loadVideoById(id: string): void
    playVideo(): void
    pauseVideo(): void
    getCurrentTime(): string
    getDuration(): string
    seekTo(position: number): void
}