import { NFTWebSocketService } from '../websocket';

// Mock WebSocket
global.WebSocket = jest.fn().mockImplementation(() => ({
  onopen: null,
  onmessage: null,
  onerror: null,
  onclose: null,
  close: jest.fn(),
  readyState: WebSocket.OPEN,
})) as any;

describe('NFTWebSocketService', () => {
  let service: NFTWebSocketService;

  beforeEach(() => {
    service = new NFTWebSocketService();
  });

  afterEach(() => {
    service.disconnect();
  });

  it('should create WebSocket connection', () => {
    const onMessage = jest.fn();
    service.connect(onMessage);

    expect(WebSocket).toHaveBeenCalledWith('wss://ws.coincap.io/prices?assets=ethereum');
  });

  it('should disconnect properly', () => {
    const onMessage = jest.fn();
    service.connect(onMessage);

    service.disconnect();

    expect(service.isConnected()).toBe(false);
  });
});