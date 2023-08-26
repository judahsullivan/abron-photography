import Head from 'next/head';


/**
 * All the shared stuff that goes into <head> on `(personal)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */
export default function Seo({
  baseTitle,
  description,
  image,
  title,
}: {
  baseTitle?: string;
  description?: string;
  image?: any;
  title?: string;
}) {
  const metaTitle = [baseTitle ? baseTitle : 'AB Photgraphy ', title].filter(Boolean).join(' | ');



  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      {image && (
        <>

          <link rel="apple-touch-icon" sizes="180x180" href={image} />
          <link rel="shortcut icon" href={image} type="images/icon" />
        </>
      )}
      <link rel="shortcut icon" href={image} />
      <meta name="theme-color" content="blue" />
      {description && <meta key="description" name="description" content={description} />}
      {image && <meta property="og:image" content={image} />}
    </Head>
  );
}
