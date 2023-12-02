import ConnectWithUs from "@/component/ConnectWithUs";
import CustomerFeedBack from "@/component/CustomerFeedBack";
import FeaturedCitiesHomePage from "@/component/FeaturedCitiesHomePage";
import HomePageSliderImg from "@/component/HomePageSliderImg";
import PackageInfo from "@/component/PackageInfo";
import QuerySectionHomePage from "@/component/QuerySectionHomePage";
import WhyChooseUs from "@/component/WhyChooseUs";

export default function Home({ data }) {
  return (
    <>
      <HomePageSliderImg />
      <PackageInfo data={data} />
      <WhyChooseUs />
      <FeaturedCitiesHomePage />
      <CustomerFeedBack />
      <ConnectWithUs />
      <QuerySectionHomePage />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.thebagpacker.in/admin/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
