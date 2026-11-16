/** 
 * next.config.ts 
 * BREAKOFF e-commerce — Next.js 16 configuration. 
 * - Images: remote Unsplash/Pexels with strict domains + local public/images. 
 * - No dynamic params, fully static-route-friendly. 
 * - baseUrl in tsconfig for local development 
 */ 
import type { NextConfig } from "next"; 

const nextConfig: NextConfig = { 
  // Suppress React 19 hydration/strict-mode noise that is harmless in prod. 
  reactStrictMode: true, 
  // TypeScript/ESM handling is default in Next 16. 
  // Image domains we serve remotely (Unsplash + Pexels). 
  images: { 
    remotePatterns: [ 
      { 
        protocol: "https", 
        hostname: "images.unsplash.com", 
      }, 
      { 
        protocol: "https", 
        hostname: "plus.unsplash.com", 
      }, 
      { 
        protocol: "https", 
        hostname: "images.pexels.com", 
      }, 
    ], 
    // Local images from public/images are served by Next under /_next/image automatically. 
    minimumCacheTTL: 60, 
    dangerouslyAllowSVG: true, 
  }, 
}; 

export default nextConfig;