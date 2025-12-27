export class NFTWebSocketService {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 3000;

  connect(onMessage: (data: any) => void, onError?: (error: Error) => void) {
    try {
      // Use a more reliable endpoint or add error handling
      this.ws = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum');

      this.ws.onopen = () => {
        if (process.env.NODE_ENV === 'development') {
          console.log('WebSocket connected');
        }
        this.reconnectAttempts = 0;
      };

      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          onMessage(data);
        } catch (error) {
          if (process.env.NODE_ENV === 'development') {
            console.error('WebSocket message parse error:', error);
          }
        }
      };

      this.ws.onerror = (event) => {
        if (process.env.NODE_ENV === 'development') {
          console.error('WebSocket error:', event);
        }
        // Don't trigger reconnection immediately on error, let onclose handle it
      };

      this.ws.onclose = () => {
        if (process.env.NODE_ENV === 'development') {
          console.log('WebSocket disconnected');
        }
        this.handleReconnect(onMessage, onError);
      };
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('WebSocket connection error:', error);
      }
      if (onError) onError(error as Error);
    }
  }

  private handleReconnect(
    onMessage: (data: any) => void,
    onError?: (error: Error) => void
  ) {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      setTimeout(() => {
        this.connect(onMessage, onError);
      }, this.reconnectDelay);
    }
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  isConnected(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }
}