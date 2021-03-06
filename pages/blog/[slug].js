import React, { useState } from "react";
import PortableText from "react-portable-text";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { sanityClient, urlFor } from "../../sanity";
import { useForm } from "react-hook-form";

function SinglePost({ post }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

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
                <a href={href} className="text-red-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </article>
        {/* GARIS */}
        <hr className="max-w-lg my-5 mx-auto border border-blue-500" />
        {submitted ? (
          <div className="flex flex-col py-5 space-y-2 px-10 rounded-md border-blue-500 text-white max-w-lg mx-auto">
            <h1 className="text-2xl font-bold">Terima kasih sudah komen</h1>
            <h2 className="text-sm">
              setelah disetujui oleh moderator, komen akan tampil dibawah
              halaman postingan
            </h2>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col  max-w-2xl mx-auto mb-10"
          >
            <h3 className="text-sm">enjoyed this article?</h3>
            <h4 className="text-3xl font-bold">Leave a comment below</h4>
            <hr className="py-3 mt-3" />

            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />

            <label className="block mb-5 px-2">
              <span className="text-gray-500">Name</span>
              <input
                {...register("name", { required: true })}
                className="block w-full shadow border rounded-xl py-2 px-3 form-input mt-1 ring-blue-500 focus:ring outline-none"
                type="text"
                placeholder="Andiwardaya"
              />
            </label>

            <label className="block mb-5 px-2">
              <span className="text-gray-500">Email</span>
              <input
                {...register("email", { required: true })}
                className="block w-full shadow border rounded-xl py-2 px-3 form-input mt-1 ring-blue-500 focus:ring outline-none"
                type="text"
                placeholder="Andiwardaya"
              />
            </label>

            <label className="block mb-5 px-2">
              <span className="text-gray-500">Comment</span>
              <textarea
                {...register("comment", { required: true })}
                rows={8}
                className="block w-full shadow border rounded-xl py-2 px-3 form-input mt-1 ring-blue-500 focus:ring outline-none"
              ></textarea>
            </label>

            <div className="flex flex-col p-5">
              {errors.name && (
                <span className="text-red-500">nama harus dimasukan</span>
              )}
              {errors.email && (
                <span className="text-red-500">email harus dimasukan</span>
              )}
              {errors.comment && (
                <span className="text-red-500">comment harus dimasukan</span>
              )}
            </div>

            <input
              type="submit"
              className="shadow bg-blue-500 hover:bg-blue-400 rounded-lg focus:shadow-outline focus:outline-none py-2 px-4 cursor-pointer"
            />
          </form>
        )}

        {/* ======COMMENT ======== */}
        <div className="max-w-2xl mx-auto flex flex-col py-3 px-5 space-y-2 border border-blue-500">
          <h3 className="text-2xl  font-bold">Comments</h3>
          <hr />

          {post.comments.map((comment) => (
            <div key={comment._id}>
              <p>
                <span className="font-bold">{comment.name}</span>{" "}
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SinglePost;

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
