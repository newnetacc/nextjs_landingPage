import Demo13content3 from "../src/components/olmo/demo13/Demo13content3";
import Demo13cta6 from "../src/components/olmo/demo13/Demo13cta6";
import Demo13hero13 from "../src/components/olmo/demo13/Demo13hero13";
import CustomersReviews from "../src/components/CustomersReviews";
import Layout from "../src/layout/Layout";
const Demo13 = () => {
  return (
    <Layout
      btnCustomHover="btn-violet-red tra-violet-red-hover"
      navHoverColor="nav-violet-red-hover"
    >
      <Demo13hero13 />
      <hr className="divider" />
      <Demo13content3 />
      <CustomersReviews/>
      <Demo13cta6 />
    </Layout>
  );
};

export default Demo13;
