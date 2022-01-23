import { ApolloClient, InMemoryCache } from "@apollo/client"


const client = new ApolloClient({
    
    uri:"https://api-ap-south-1.graphcms.com/v2/ckxm8bu5s4mjk01xp5gqe28nq/master",

    cache:new InMemoryCache(),
})



export default client