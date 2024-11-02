import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export function BlogCard({ title, excerpt, date, readTime, image, category }: BlogCardProps) {
  return (
    <div className="group relative rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>
          <button className="group/btn flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-300">
            Read More
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}