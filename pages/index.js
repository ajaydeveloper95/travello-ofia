import ConnectWithUs from "@/component/ConnectWithUs";
import CustomerFeedBack from "@/component/CustomerFeedBack";
import FeaturedCitiesHomePage from "@/component/FeaturedCitiesHomePage";
import HomePageSliderImg from "@/component/HomePageSliderImg";
import PackageInfo from "@/component/PackageInfo";
import QuerySectionHomePage from "@/component/QuerySectionHomePage";
import WhyChooseUs from "@/component/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HomePageSliderImg />
      <PackageInfo />
      <WhyChooseUs />
      <FeaturedCitiesHomePage />
      <CustomerFeedBack />
      <ConnectWithUs/>
      <QuerySectionHomePage />
    </main>
  );
}
