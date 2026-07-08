import { getProductById } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.product);
  
  if (!product) return { title: 'Product Not Found | FAIE' };

  return {
    title: `${product.name} | FAIE Shop`,
    description: product.description,
    openGraph: {
      title: `${product.name} | FAIE Shop`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.product);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
