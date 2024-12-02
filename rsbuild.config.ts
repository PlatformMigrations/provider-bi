import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
     pluginModuleFederation({
      name: 'federation_provider',
      exposes: {
        './button': './src/button.tsx',
        './basic': './src/pages/basic.tsx'
      },
      remotes: {
        federation_consumer: 'federation_consumer@http://localhost:8080/mf-manifest.json',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^18.0.0" },
        "react-dom": { singleton: true, eager: true, requiredVersion: "^18.0.0" },
      }
    }),
  ],
});
