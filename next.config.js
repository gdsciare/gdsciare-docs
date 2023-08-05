const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
    staticImage: true,
    flexsearch: {
        codeblocks: true,
    },
    defaultShowCopyCode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    font: false,
});

module.exports = withNextra();
