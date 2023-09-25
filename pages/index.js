import FeaturedCitiesHomePage from "@/component/FeaturedCitiesHomePage";
import PackageInfo from "@/component/PackageInfo";
import QuerySectionHomePage from "@/component/QuerySectionHomePage";
import SearchToursHome from "@/component/SearchToursHome";

export default function Home() {
  return (
    <main>
      <SearchToursHome />
      <PackageInfo/>
      <QuerySectionHomePage/>
      <FeaturedCitiesHomePage/>
    </main>
  );
}
