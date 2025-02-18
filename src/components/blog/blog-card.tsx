import { formatDate } from "@/utils/format-date"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  title: string
  image: string
  slug: string
  date: string
  categorie: string
  author: string
}

export function BlogCard({
  title,
  image,
  slug,
  date,
  categorie,
  author,
}: BlogCardProps) {
  return (
    <Link href={`/pt/blog/${slug}`}>
      <Image
        src={`${image}`}
        width={280}
        height={190}
        alt="Thumb de post do Blog"
      />
      <div className="space-y-3 mt-3">
        <span className="font-inter text-base text-gray03 opacity-80">
          {categorie}
        </span>
        <h3 className="font-semibold max-w-[280px]">{title}</h3>
        <p className="opacity-80 text-gray03">
          <strong className="font-medium">{author}</strong> - {formatDate(date)}
        </p>
      </div>
    </Link>
  )
}
