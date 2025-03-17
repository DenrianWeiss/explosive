// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Explosive Computers',
            defaultLocale: 'zh-cn',
            social: {
                github: 'https://github.com/DenrianWeiss/explosive',
            },
            sidebar: [
                {
                    label: '厂商',
                    autogenerate: { directory: 'vendors' }
                }
            ],
        }),
    ],

    adapter: cloudflare({
        platformProxy: {
            enabled: true
        }
    }),
});