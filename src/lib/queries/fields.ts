import { groq } from "next-sanity";

export const settings = groq`
    pageLinks[] -> {
      _type, 
      title,

    },
 externalLinks[]{
"image": image.asset -> url, 
title, 
link
},
   "image": image.asset -> url, 
`

export const clientsFields = groq`
name,
description,
"coverimage": coverimage.asset -> url,
"image": image[].asset -> url,
publishedAt 
`;

export const pageFieldsWithImage = groq`
title, 
heading,
description, 
"image": image.asset -> url,
`


export const postFields = groq`
  _id,
  title,
  publishedAt, 
heading,
  description,
  _updatedAt,
  "mainImage": mainImage.asset -> url,
  "slug": slug.current,
  "author": author->{name},
  "category": category ->{title} 
`

export const imageFields = groq`
      "image": image.asset -> url,
`


export const technologiesFields = groq`
 title,
  description, 
  "image": image.asset -> url,
  link,
  type
`
