import Navbar from "@/components/common ui/navbar/Navbar";
import Banner from "@/components/home/Banner";
import PopCategories from "@/components/home/PopCategories";
import TopSales from "@/components/home/TopSales";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopSales />
      <PopCategories />
      
    </div>
  );
}
