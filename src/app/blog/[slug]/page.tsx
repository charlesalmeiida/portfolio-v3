import { builder } from "@builder.io/sdk"
import { RenderBuilderContent } from "../../../components/builder"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  const builderModelName = "page"

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: `/blog/${slug}`,
      },
    })
    .toPromise()

  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  )
}
