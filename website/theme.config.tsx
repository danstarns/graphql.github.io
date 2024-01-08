import { DocsThemeConfig } from "nextra-theme-docs"
import NextLink from "next/link"

export default {
  banner: {
    content: (
      <>
        📣 GraphQL Conf 2023 • Sept 19-21 • San Francisco •{" "}
        <NextLink href="/conf" className="underline">
          Watch the videos
        </NextLink>
        !
      </>
    ),
  },
  logo: "GraphQL",
  docsRepositoryBase: "https://github.com/graphql/graphql.github.io",
} satisfies DocsThemeConfig
