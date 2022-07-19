import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: "z5bmwdmg",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

//run this to add expection for cors

//sanity cors add http://localhost:3000


export default client;