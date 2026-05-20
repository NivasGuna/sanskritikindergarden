import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
};

export default function SEO({
  title,
  description,
  canonical,
  robots = "index,follow",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Head>
  );
}
