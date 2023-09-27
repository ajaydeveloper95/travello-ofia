import CustomerFeedBack from "@/component/CustomerFeedBack";
import FeaturedCitiesHomePage from "@/component/FeaturedCitiesHomePage";
import HomePageSliderImg from "@/component/HomePageSliderImg";
import PackageInfo from "@/component/PackageInfo";
import QuerySectionHomePage from "@/component/QuerySectionHomePage";
import SearchToursHome from "@/component/SearchToursHome";
import WhyChooseUs from "@/component/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HomePageSliderImg/>
      <SearchToursHome />
      <PackageInfo/>
      <WhyChooseUs/>
      <FeaturedCitiesHomePage/>
      <CustomerFeedBack/>
      <QuerySectionHomePage/>
    </main>
  );
}
