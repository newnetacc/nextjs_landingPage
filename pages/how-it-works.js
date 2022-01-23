import Faq from "../src/components/Faq";
import Features from "../src/components/Features";
import Demo12blog1 from "../src/components/olmo/demo12/Demo12blog1";

import Demo12content7 from "../src/components/olmo/demo12/Demo12content7";
import Demo12cta11 from "../src/components/olmo/demo12/Demo12cta11";
import Demo12features4 from "../src/components/olmo/demo12/Demo12features4";
import Demo12hero12 from "../src/components/olmo/demo12/Demo12hero12";
import Demo12newsletter2 from "../src/components/olmo/demo12/Demo12newsletter2";
import Demo12projects2 from "../src/components/olmo/demo12/Demo12projects2";
import Demo12statistic2 from "../src/components/olmo/demo12/Demo12statistic2";
import CustomersReviews from "../src/components/CustomersReviews";
import Layout from "../src/layout/Layout";
import { GraphQLClient, gql } from "graphql-request";

const HowItWorks = ({ reviews }) => {
  return (
    <Layout
      btnCustomHover="btn-violet-red tra-grey-hover"
      navHoverColor="nav-violet-red-hover"
    >
      <Demo12hero12 />
      <Features />
      <Demo12content7 />
      <hr className="divider" />
      <Demo12statistic2 />
      <hr className="divider" />
      <CustomersReviews reviews={reviews} />
      <Faq />
      <hr className="divider" />
      <Demo12blog1 />
      <Demo12cta11 />
    </Layout>
  );
};

export default HowItWorks;

export async function getStaticProps() {
  const endpoint = "https://api-ap-south-1.graphcms.com/v2/ckxm8bu5s4mjk01xp5gqe28nq/master";

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
  customerReviews {
  text
  image {
    url
  }
  fullName
  socialHandle
  ratings 
}
    }
  `;


  const data = await graphQLClient.request(query);

  const reviews = data.customerReviews
 

  return {
    props: {
      reviews,
    },
  };
}