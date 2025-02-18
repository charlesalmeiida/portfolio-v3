import Image from "next/image"
import Link from "next/link"

export function BlogCard() {
  return (
    <Link href={"/pt/blog"}>
      <Image
        src={"/img/thumb-blog.png"}
        width={280}
        height={190}
        alt="Thumb de post do Blog"
      />
      <div className="space-y-3 mt-3">
        <span className="font-inter text-base text-gray03 opacity-80">
          Company
        </span>
        <h3 className="font-semibold max-w-[280px]">
          Wrapped 2022: Look back on a year of progress
        </h3>
        <p className="opacity-80 text-gray03">
          <strong className="font-medium">Charles Almeida</strong> - 20/12/2024
        </p>
      </div>
    </Link>
  )
}
