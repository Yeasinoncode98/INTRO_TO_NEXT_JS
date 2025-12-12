const { RSC_CACHE_WRAPPER_ALIAS } = require("next/dist/lib/constants");

RSC_CACHE_WRAPPER_ALIAS;
import Link from "next/link";

export default function StoryCard({ story }) {
  const shortStory = story.story.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
      {/* Image */}
      <div className="flex items-center gap-4">
        <img
          src={story.image}
          alt={story.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg">{story.name}</h2>
          <p className="text-sm text-gray-600">{story.designation}</p>
          <p className="text-sm text-blue-600">{story.company}</p>
        </div>
      </div>

      {/* Story */}
      <p className="mt-4 text-gray-700 text-sm">{shortStory}</p>

      {/* Button */}
      <Link
        href={`/stories/${story.id}`}
        className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
      >
        Read Full Story
      </Link>
    </div>
  );
}
