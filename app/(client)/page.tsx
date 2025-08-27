import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/ProductGrid";
import { getCategories } from "@/sanity/queries";

export default async function Home() {

  const categories = await getCategories();

  return (
    <Container className="bg-shop-light-pink-300">
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories={categories} />
      {/* <ShopByBrands /> */}
      <LatestBlog />
    </Container>
  );
}
