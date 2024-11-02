interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export function TestimonialCard({ content, author, role, company, image }: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
      <div className="relative">
        <div className="absolute -top-4 -left-4 text-6xl text-blue-500/20">"</div>
        <p className="text-gray-300 relative z-10 mb-6">{content}</p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-gray-400">{role}</div>
          <div className="text-sm text-gray-400">{company}</div>
        </div>
      </div>
    </div>
  );
}