import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  explanation?: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function ExerciseCard({ title, description, explanation, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-200/40 via-blue-50/0 to-blue-50/0"></div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
        <p className="text-slate-600 text-sm mb-3 h-16 overflow-y-auto flex-grow">{description}</p>
        {explanation && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-300">
            <p className="text-xs text-blue-600 font-medium mb-1">练习内容说明：</p>
            <p className="text-xs text-slate-600 leading-relaxed">{explanation}</p>
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
          <div className="font-medium text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
            查看练习 &rarr;
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
      <div className="relative bg-gradient-to-br from-white via-sky-50 to-blue-50 rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-blue-200/60 group-hover:shadow-2xl border border-blue-100">
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
            {cardContent}
          </Link>
        ) : (
          <div className="flex flex-col h-full">{cardContent}</div>
        )}
      </div>
    </div>
  );
} 