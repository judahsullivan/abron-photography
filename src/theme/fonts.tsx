import { Global } from '@emotion/react'

export const FontsGlobal = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'PlayFair Display';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/playFair/PFD.woff2') format('woff'),
            url('/assets/fonts/PFD_Bold.woff') format('woff');
      }
      @font-face {
        font-family: 'Cascadia';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/.woff2') format('woff2'),
            url('/assets/fonts/.woff') format('woff');
      }
    `}
  />
)
