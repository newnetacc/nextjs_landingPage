import About2 from "../src/components/about/About2";
import Aboutbrands2 from "../src/components/about/Aboutbrands2";
import Aboutcontent3 from "../src/components/about/Aboutcontent3";
import Aboutcontent5 from "../src/components/about/Aboutcontent5";
import Aboutcta5 from "../src/components/about/Aboutcta5";
import Aboutfeatures4 from "../src/components/about/Aboutfeatures4";
import Aboutfeatures8 from "../src/components/about/Aboutfeatures8";
import Aboutreviews1 from "../src/components/about/Aboutreviews1";
import Aboutstatistic4 from "../src/components/about/Aboutstatistic4";
import Aboutteam1 from "../src/components/about/Aboutteam1";
import Layout from "../src/layout/Layout";

const about = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <About2 />
      <Aboutfeatures4 />
      <hr className="divider" />
      <Aboutstatistic4 />
      <hr className="divider" />
      <Aboutcontent3 />
      <Aboutfeatures8 />
      <Aboutcontent5 />
      <Aboutteam1 />
      <Aboutreviews1 />
      <hr className="divider" />
      <Aboutbrands2 />
      <Aboutcta5 />
    </Layout>
  );
};

export default about;
