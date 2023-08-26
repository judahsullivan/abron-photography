import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { mergeWith } from '@chakra-ui/utils';

export function makeTheme(overrides: ThemeOverride = {}) {
  const theme = extendTheme({
    ...extendedTheme
  });
  return mergeWith(theme, overrides);
}

export const extendedTheme = extendTheme({
  fonts: {
    body: ` -apple-system."Segoe UI, Arial, san-serif"`
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('purple.100', 'purple.900')(props)
      }
    })
  }
});

export const theme = makeTheme();
