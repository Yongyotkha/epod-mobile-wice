// iOS-specific environment settings
export const environment = {
  production: true,
  platform: 'ios',
  apiUrl: 'https://api.example.com',
  bundleId: 'com.yourcompany.app.ios',
  iosSpecific: {
    enableWKWebView: true,
    useNativeStatusBar: true
  }
};
