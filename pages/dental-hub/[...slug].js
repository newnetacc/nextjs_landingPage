import React from 'react'
import { GraphQLClient, gql } from "graphql-request";
import Singlepost from '../single-post';
import moment from 'moment';


function BlogPage({ post }) {

    return (
      <Singlepost post={post} category={post?.category.name} title={post?.title} author={post?.author.name} date={moment(post.createdAt).format("MMM DD, YYYY")} content={post?.content.markdown} image={post?.author.photo.url} bio={post?.author.bio }/>
    )
}

export default BlogPage




export async function getStaticPaths() {

  const endpoint = "https://api-ap-south-1.graphcms.com/v2/ckxm8bu5s4mjk01xp5gqe28nq/master";

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      posts{
    slug
  }
    }
  `;

  const data = await graphQLClient.request(query);
 
  const {posts} = data
  
    const paths = posts.map(post => ({
        params:{slug:[post.slug]}
    }))

    
    return {paths,fallback:false}

}








export async function getStaticProps({ params }) { 
  const slug = params.slug[0]
  
  const endpoint = "https://api-ap-south-1.graphcms.com/v2/ckxm8bu5s4mjk01xp5gqe28nq/master";

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    query Post($slug:String!){
      posts (where :{slug:$slug}) {
        title
        slug
        createdAt
        category {
          name
        }
        exerpt
        content {
          markdown
        }
        featuredImage {
          url
        }
         author{
           bio
           name
           photo {
            url
            }  
         }
        }
         }
    
  `

  const data = await graphQLClient.request(query,{slug});
    const { posts } = data
    
    const post = posts[0]



  return {
    props: {
      post,
    },
  };
}