import Demo18brands2 from "../src/components/olmo/demo18/Demo18brands2";
import Demo18content1 from "../src/components/olmo/demo18/Demo18content1";
import Demo18content10 from "../src/components/olmo/demo18/Demo18content10";
import Demo18content2 from "../src/components/olmo/demo18/Demo18content2";
import Demo18content3 from "../src/components/olmo/demo18/Demo18content3";
import Demo18content5 from "../src/components/olmo/demo18/Demo18content5";
import Demo18content6 from "../src/components/olmo/demo18/Demo18content6";
import Demo18cta1 from "../src/components/olmo/demo18/Demo18cta1";
import Demo18faqs2 from "../src/components/olmo/demo18/Demo18faqs2";
import Demo18features1 from "../src/components/olmo/demo18/Demo18features1";
import Demo18features4 from "../src/components/olmo/demo18/Demo18features4";
import Demo18hero18 from "../src/components/olmo/demo18/Demo18hero18";
import Demo18pricing3 from "../src/components/olmo/demo18/Demo18pricing3";
import Demo18reviews3 from "../src/components/olmo/demo18/Demo18reviews3";
import Demo18statistic4 from "../src/components/olmo/demo18/Demo18statistic4";
import Layout from "../src/layout/Layout";
const Demo18 = () => {
  return (
    <Layout btnCustomHover="btn-skyblue tra-grey-hover">
      <Demo18hero18 />
      <Demo18features1 />
      <Demo18content3 />
      <Demo18features4 />
      <Demo18content6 />
      <Demo18content2 />
      <Demo18content1 />
      <hr className="divider" />
      <Demo18statistic4 />
      <hr className="divider" />
      <Demo18content10 />
      <Demo18content5 />
      <Demo18reviews3 />
      <Demo18brands2 />
      <Demo18pricing3 />
      <Demo18faqs2 />
      <Demo18cta1 />
    </Layout>
  );
};

export default Demo18;
