import { groq } from "next-sanity";
import { SanityClient } from "next-sanity";
import { clientsFields, pageFieldsWithImage, postFields, settings } from "./fields";
import { ClientPayLoad, HomePageLoad, PostPayLoad, SettingsPayload } from "../../../types";





export const homeQuery = groq`
{
  "home": *[_type == "home"][0]{
    role[], 
    ${pageFieldsWithImage}
  },
  "settings": *[_type == "settings"][0]{
    ${settings}
  },
"recentClient": *[_type == "client"][0]{
${clientsFields}
},
"recentArticles": *[_type == "post"] | order(pusblishedAt desc)[0...2]{
    content,
    ${postFields}
  }
}`


export async function getHomePage(
  client: SanityClient,
): Promise<{
  home: HomePageLoad;
  recentArticles: PostPayLoad[];
  recentClient: ClientPayLoad;
  settings: SettingsPayload
}> {
  const data = await client.fetch(homeQuery)
  return data;
}
