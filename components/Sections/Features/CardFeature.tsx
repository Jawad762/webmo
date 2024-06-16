import Link from "next/link";

interface Props {
  imageSrc: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function CardFeature({
  imageSrc,
  icon,
  title,
  description,
  href
}: Props) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center justify-start transition-all border rounded-lg bg-neutral-50 hover:shadow">
        <div className="w-full rounded-t-lg h-[180px] border-b"></div>
        <div className="flex flex-col items-start justify-start w-full px-4 py-2">
          <div className="flex flex-row items-center justify-start gap-1">
            {icon}
            <p className="text-lg font-medium">{title}</p>
          </div>
          <p className="text-neutral-500">{description}</p>
        </div>
      </div>
    </Link>
  );
}
