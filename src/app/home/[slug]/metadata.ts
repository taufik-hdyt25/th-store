import { generateProductMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(`https://api.tokohebat.com/produk/${params.slug}`, {
    next: { revalidate: 60 }, // revalidate every 60 sec
  });

  if (!res.ok) return notFound();

  const produk = await res.json();

  return generateProductMetadata({
    nama: produk.nama,
    deskripsi: produk.deskripsi,
    slug: params.slug,
    gambar: produk.gambar,
  });
}
