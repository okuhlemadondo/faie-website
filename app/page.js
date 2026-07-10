import Hero from '@/components/Hero/Hero';
import BrandStatement from '@/components/BrandStatement/BrandStatement';
import FeaturedIn from '@/components/FeaturedIn/FeaturedIn';
import VisionSplit from '@/components/VisionSplit/VisionSplit';
import Testimonials from '@/components/Testimonials/Testimonials';
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ProductShowcase />
      <FeaturedIn />
      <VisionSplit />
      <Testimonials />
    </>
  );
}
