import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { useParams, useNavigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import "./Project.css";
import { RiArrowLeftLine } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const ProjectImage = ({ value }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="pb-8 max-w-3xl m-auto">
      <img
        className="min-w-full"
        src={urlFor(value).auto("format").url()}
        alt={value.alt || " "}
        // loading="lazy"
        style={{
          aspectRatio: width / height,
        }}
        
      />
      <p className="pt-2 px-4 md:px-0 text-gray-500 text-xs">{value.caption}</p>
    </div>
  );
};

const components = {
  types: {
    image: ProjectImage,
  },
  block: {
    normal: ({ children }) => (
        <p className="max-w-xl mx-4 sm:m-auto text-lg md:text-xl text-gray-900 pb-4">
          {children}
        </p>
    ),
  },
};

const Project = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            subtitle,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url,
                }
            },
            body
        }`
      )
      .then((data) => {
        setProject(data[0]);
        console.log(data);
      })
      .catch(console.error);
  }, [slug]);

  if (!project) return <div>Loading …</div>;
  return (
    <div className="mb-20">
      <div className="px-8">
        <span onClick={() => navigate(-1)} className="flex items-center py-8">
          <span className="padding-bottom">
            <RiArrowLeftLine />
          </span>
          <h4 className="ml-1">Back</h4>
        </span>
      </div>
      <div className={"relative mb-12"}>
        <img className="min-w-full"
          src={urlFor(project.mainImage).auto("format").url()}
        />
      </div>
      <div className="max-w-xl mx-4 sm:m-auto pb-4 md:pb-8">
        <h1 className="text-xl text-gray-400 border-b w-fit">
          {project.title}
        </h1>
        <h4 className="text-4xl md:text-5xl mt-2 w-fit">{project.subtitle}</h4>
      </div>
      <div>
        <PortableText
          value={project.body}
          projectId="t8mfu30c"
          dataset="production"
          components={components}
        />
      </div>
    </div>
  );
};

export default Project;
