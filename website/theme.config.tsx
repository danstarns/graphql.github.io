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
  logo: (
    <span className="text-[#e10098] flex gap-2 items-center text-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="currentColor"
        className="size-8"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 6.90308L87.323 28.4515V71.5484L50 93.0968L12.677 71.5484V28.4515L50 6.90308ZM16.8647 30.8693V62.5251L44.2795 15.0414L16.8647 30.8693ZM50 13.5086L18.3975 68.2457H81.6025L50 13.5086ZM77.4148 72.4334H22.5852L50 88.2613L77.4148 72.4334ZM83.1353 62.5251L55.7205 15.0414L83.1353 30.8693V62.5251Z"
        />
        <circle cx="50" cy="9.3209" r="8.82" />
        <circle cx="85.2292" cy="29.6605" r="8.82" />
        <circle cx="85.2292" cy="70.3396" r="8.82" />
        <circle cx="50" cy="90.6791" r="8.82" />
        <circle cx="14.7659" cy="70.3396" r="8.82" />
        <circle cx="14.7659" cy="29.6605" r="8.82" />
      </svg>
      GraphQL
    </span>
  ),
  docsRepositoryBase: "https://github.com/graphql/graphql.github.io",
  color: {
    hue: 319,
  },
} satisfies DocsThemeConfig
