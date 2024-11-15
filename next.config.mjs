/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "thirtysixstudio.com",
              port: '',
              pathname: '/**',
            },
          ],
    }

};

export default nextConfig;
