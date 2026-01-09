/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import PropTypes from "prop-types";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="/assets/close.svg" className="w-6 h-6" alt="Close" />
        </button>

        <img
          src={image}
          alt={title}
          className="w-full rounded-t-2xl max-h-[40vh] object-cover"
        />

        <div className="p-5 overflow-y-auto max-h-[50vh]">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p
              key={`${title}-sub-${index}`}
              className="mb-3 font-normal text-neutral-400"
            >
              {subDesc}
            </p>
          ))}
          <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) =>
                tag.path ? (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                ) : (
                  <span
                    key={tag.id}
                    className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/90 border border-white/10"
                  >
                    {tag.name}
                  </span>
                )
              )}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
            >
              View Project{" "}
              <img
                src="/assets/arrow-up.svg"
                className="size-4"
                alt="View Project"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

ProjectDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
  href: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ProjectDetails;
