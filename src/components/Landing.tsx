import {
  Banner,
  CategoriesSection,
  HomeCollectionSection,
} from ".";
import DesignerShowcase from "./DesginerSection";
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
