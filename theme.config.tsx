import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><b>GDSC IARE </b>Open Source</span>,
  project: {
    link: 'https://github.com/gdsciare',
  },
  chat: {
    link: 'https://t.me/gdsciare',
    icon: (<svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
    </svg>)
  },
  docsRepositoryBase: 'https://github.com/gdsciare/gdsciare-docs',
  footer: {
    text: "GDSC IARE Open Source Platform",
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – GDSC IARE'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="GDSC IARE Open Source" />
      <meta property="og:description" content="We're building this Open Source Platform as a one-stop centre to know everything about GDSC IARE." />
      <link rel="icon" type="image/png" href="https://i.imgur.com/cC4h2X0.png"></link>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://i.imgur.com/e51ZK5D.png" />
      <meta name="twitter:site:domain" content="docs.gdsciare.club" />
      <meta name="twitter:url" content="https://gdsciare-docs.vercel.app" />
      <meta name="twitter:description" content="We're building this Open Source Platform as a one-stop centre to know everything about GDSC IARE." />
      <meta name="og:image" content="https://i.imgur.com/e51ZK5D.png" />
      <meta name="apple-mobile-web-app-title" content="GDSC IARE Open Source" />
    </>
  ),
  banner: {
    key: '1.0-release',
    text: (
      <a href="https://instagram.com/gdsciare" target="_blank">
        🎉 Check out our amazing posts and fun reels on Instagram →
      </a>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'light'
  }
}


export default config;

