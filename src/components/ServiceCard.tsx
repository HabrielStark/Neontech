import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  features: string[];
}

export function ServiceCard({ title, description, Icon, features }: ServiceCardProps) {
  return (
    <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}