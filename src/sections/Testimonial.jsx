import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const AchievementCard = ({ image, name, designation, company, testimonial }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="rounded-full bg-white/10"
          width="40"
          height="40"
          alt={name}
          src={image}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/60">
            {designation} · {company}
          </p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-white/90">
        {testimonial}
      </blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start c-space -mt-8 md:-mt-16">
      <h2 className="text-heading">Certifications &amp; Achievements</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-6 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((item, index) => (
            <AchievementCard key={`${item.name}-${index}`} {...item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((item, index) => (
            <AchievementCard key={`${item.name}-${index}`} {...item} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
