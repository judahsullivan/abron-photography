import { SanityClient, groq } from 'next-sanity'
import { clientsFields, pageFieldsWithImage, settings } from './fields';
import { ClientPayLoad, PageLoad, SettingsPayload } from '../../../types';



export const galleryQuery = groq`
{
"galleryPage": *[_type == "gallery"][0]{
${pageFieldsWithImage}
},
"client": *[_type == "client"]{
${clientsFields}
},
"settings": *[_type == "settings"][0]{
${settings}
} 
}`






export async function getClientPage(
  client: SanityClient,
): Promise<{
  galleryPage: PageLoad;
  settings: SettingsPayload;
  client: ClientPayLoad[];
}> {
  const data = await client.fetch(galleryQuery)
  return data;
}
