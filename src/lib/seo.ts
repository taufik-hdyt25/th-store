// lib/seo.ts
export function generateProductMetadata({
  nama,
  deskripsi,
  slug,
  gambar,
}: {
  nama: string;
  deskripsi: string;
  slug: string;
  gambar: string;
}) {
  // const url = configEnv/product/slug
  const url = `https://tokohebat.com/produk/${slug}`;
  return {
    title: nama,
    description: deskripsi,
    openGraph: {
      title: nama,
      description: deskripsi,
      type: "product",
      images: [{ url: gambar }],
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: nama,
      description: deskripsi,
      images: [gambar],
    },
    alternates: {
      canonical: url,
    },
  };
}
