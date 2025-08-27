import {
  Banner,
  CategoriesSection,
  HomeCollectionSection,
} from "../components";
import DesignerShowcase from "../components/DesginerSection";
import VideoPlayer from "./VideoPlayer";

const Landing = () => {
  return (
    <>
      <VideoPlayer/>
      {/* <Banner /> */}
      <DesignerShowcase/>
      <VideoPlayer/>
      <CategoriesSection />
      <VideoPlayer/>
      <HomeCollectionSection />
    </>
  );
};
export default Landing;
