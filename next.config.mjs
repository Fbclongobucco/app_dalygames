/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/api/dalygames",
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "sujeitoprogramador.com"
            }
        ]

    }
};

export default nextConfig;
