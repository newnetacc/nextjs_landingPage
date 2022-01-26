import Demo15blog1 from "../src/components/olmo/demo15/Demo15blog1";
import Demo15brands1 from "../src/components/olmo/demo15/Demo15brands1";
import Demo15cta11 from "../src/components/olmo/demo15/Demo15cta11";
import Demo15features7 from "../src/components/olmo/demo15/Demo15features7";
import Demo15hero15 from "../src/components/olmo/demo15/Demo15hero15";
import Layout from "../src/layout/Layout";
import CustomersReviews from "../src/components/CustomersReviews";
import Faq from "../src/components/Faq";
import { GraphQLClient, gql } from "graphql-request";
const Demo15 = ({reviews}) => {
  return (
    <Layout
      btnCustomHover="btn-tra-white orange-red-hover"
      navHoverColor="nav-orange-red-hover"
      whiteLogo
      navLight
    >
      <Demo15hero15 />
      <hr className="divider" />
      <Demo15features7 />
     <CustomersReviews reviews={reviews}/>
      <Demo15brands1 />
      <Faq/>
      {/* <Demo15blog1 /> */}
      <Demo15cta11 />
    </Layout>
  );
};

export default Demo15;

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

