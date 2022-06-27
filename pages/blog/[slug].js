import React from "react";
import PortableText from "react-portable-text";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { sanityClient, urlFor } from "../../sanity";

function singlePost({ post }) {
  console.log(post);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <div className="relative max-w-6xl mx-auto py-5 ">
          <img
            src={urlFor(post.mainImage).url()}
            className="mx-auto w-full h-80 object-cover saturate-50"
          />
          <div className="absolute bottom-10 left-10 text-white shadow-xl space-y-2 ">
            <h1 className="text-4xl font-bold drop-shadow-xl uppercase ">
              {post.title}
            </h1>
            <p>{post.descriptionpost}</p>
            <p className="drop-shadow-xl  bg-blue-500 py-2 px-4 rounded-xl inline-block ">
              category
            </p>
            {/* {new Date(post._createAt).toLocaleString()} */}
            <p className="drop-shadow-xl">20 Juni 2022</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 mt-3 pb-5 max-w-3xl mx-auto">
          <img
            className="w-12 rounded-full h-12
             object-cover"
            src={urlFor(post.author.image).url()}
            alt="authorImage"
          />
          <p>
            Blog post by <span className="font-bold">{post.author.name}</span>{" "}
            published at {new Date(post.publishedAt).toLocaleString()}
          </p>
        </div>

        <article className="max-w-3xl mx-auto">
          <div className="">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={post.body}
              serializers={{
                h1: (props) => (
                  <h1 className="text-2xl font-bold my-5" {...props} />
                ),
                h2: (props) => (
                  <h1 className="text-xl font-bold my-5" {...props} />
                ),
                li: ({ children }) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children, blank }) => (
                  <a
                    target="_blank"
                    href={href}
                    className="text-red-500 hover:underline"
                  >
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default singlePost;

export async function getStaticPath() {}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const query = `*[_type == "post"] {
        _id,
        slug {
            current
        }
    }`;
  const posts = await sanityClient.fetch(query);

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    publishedAt,
     title,
     author-> {
     name,
     image
   },
   "comments": *[
    _type == "comment" &&
    post._ref == ^._id &&
    approved == true],
    descriptionpost,
    mainImage,
    slug,
    body
 }`;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}
