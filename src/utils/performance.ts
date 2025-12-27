class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  private isProduction = process.env.NODE_ENV === 'production';

  measure(name: string, callback: () => void) {
    if (this.isProduction) {
      callback();
      return;
    }

    const start = performance.now();
    callback();
    const end = performance.now();
    const duration = end - start;

    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }

    this.metrics.get(name)!.push(duration);

    // Warn if slow (60 FPS = 16.67ms per frame)
    if (duration > 16.67) {
      console.warn(`Slow operation: ${name} took ${duration.toFixed(2)}ms`);
    }
  }

  measureAsync<T>(name: string, callback: () => Promise<T>): Promise<T> {
    if (this.isProduction) {
      return callback();
    }

    const start = performance.now();
    return callback().then((result) => {
      const end = performance.now();
      const duration = end - start;

      if (!this.metrics.has(name)) {
        this.metrics.set(name, []);
      }

      this.metrics.get(name)!.push(duration);

      if (duration > 100) {
        console.warn(`Slow async operation: ${name} took ${duration.toFixed(2)}ms`);
      }

      return result;
    }).catch((error) => {
      const end = performance.now();
      const duration = end - start;

      if (!this.metrics.has(name)) {
        this.metrics.set(name, []);
      }

      this.metrics.get(name)!.push(duration);

      if (duration > 100) {
        console.warn(`Slow async operation: ${name} took ${duration.toFixed(2)}ms`);
      }

      throw error;
    });
  }

  getMetrics(name: string) {
    const times = this.metrics.get(name) || [];
    if (times.length === 0) return null;

    const avg = times.reduce((a, b) => a + b, 0) / times.length;
    const max = Math.max(...times);
    const min = Math.min(...times);

    return { avg, max, min, count: times.length };
  }

  report() {
    if (this.isProduction) return;

    console.log('Performance Report:');
    console.table(
      Array.from(this.metrics.entries()).map(([name, times]) => ({
        Operation: name,
        'Avg (ms)': (times.reduce((a, b) => a + b, 0) / times.length).toFixed(2),
        'Max (ms)': Math.max(...times).toFixed(2),
        'Min (ms)': Math.min(...times).toFixed(2),
        Count: times.length,
      }))
    );
  }

  clear() {
    this.metrics.clear();
  }
}

export const perfMonitor = new PerformanceMonitor();

// Autoreport every 30 seconds in development
if (process.env.NODE_ENV === 'development') {
  setInterval(() => {
    perfMonitor.report();
  }, 30000);
}