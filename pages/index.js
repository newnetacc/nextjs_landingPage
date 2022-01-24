import CustomersReviews from "../src/components/CustomersReviews";
import Faq from "../src/components/Faq";
import Features from "../src/components/Features";
import Demo1content1 from "../src/components/olmo/demo1/Demo1content1";
import Demo1content3 from "../src/components/olmo/demo1/Demo1content3";
import Demo1content4 from "../src/components/olmo/demo1/Demo1content4";
import Demo1Hero1 from "../src/components/olmo/demo1/Demo1Hero1";
import Layout from "../src/layout/Layout";
import { GraphQLClient, gql } from "graphql-request";


const Index = ({ reviews }) => {

   return (
    <Layout navLight getStartText navHoverColor="nav-orange-red-hover">
      <Demo1Hero1 />
      <hr className="divider" />
      <Demo1content3 />
      <Features />
      <Demo1content1 />
      <CustomersReviews reviews={reviews}/>
      <Faq />
      {/* <hr className="divider" /> */}
      <Demo1content4 />
    </Layout>
  );
};

export default Index;

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