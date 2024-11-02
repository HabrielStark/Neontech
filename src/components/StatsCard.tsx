import { ReactNode } from 'react';
import { AnimatedCounter } from './AnimatedCounter';

interface StatsCardProps {
  value: string;
  label: string;
  icon: ReactNode;
}

export function StatsCard({ value, label, icon }: StatsCardProps) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  return (
    <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <AnimatedCounter end={numericValue} suffix={suffix} />
          </div>
          <div className="text-gray-400 mt-1">{label}</div>
        </div>
      </div>
    </div>
  );
}