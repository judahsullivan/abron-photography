import groq from 'groq';
import { SanityClient } from 'sanity';
import { pageFieldsWithImage, settings } from './fields';
import { PageLoad, SettingsPayload } from '../../../types';






export const aboutQuery = groq`
{
"aboutPage": *[_type == "about"][0]{
${pageFieldsWithImage}
},
  "settings": *[_type == "settings"][0]{
    ${settings}
}
}
`


export async function getAboutPage(
  client: SanityClient
): Promise<{
  aboutPage: PageLoad;
  settings: SettingsPayload;
}> {
  const data = await client.fetch(aboutQuery);
  return data;
}
