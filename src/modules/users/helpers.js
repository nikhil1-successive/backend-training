

export function generateRandomId(): string {
    return Math.random().toString(36).substring(7);
  }
  
  export function formatTimestamp(timestamp: Date): string {
    return timestamp.toISOString();
  }
  