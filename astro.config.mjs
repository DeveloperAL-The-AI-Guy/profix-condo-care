import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://profixcondocare.ca',
  integrations: [tailwind({ applyBaseStyles: false })],
});
