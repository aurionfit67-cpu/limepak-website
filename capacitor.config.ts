import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.limepak.app',
  appName: 'LIMEPAK',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    hostname: 'limepak.vercel.app',
    cleartext: true,
  },
  plugins: {
    // Add plugins here if needed
  },
};

export default config;
