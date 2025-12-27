// Add TransformStream polyfill for older Node.js versions or test environments
if (typeof TransformStream === 'undefined') {
  global.TransformStream = require('stream/web').TransformStream;
}