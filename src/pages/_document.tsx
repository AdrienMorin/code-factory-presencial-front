import { Html, Head, Main, NextScript } from "next/document";
import MainTemplate from "@/components/templates/MainTemplate/index";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <MainTemplate>
          <Main />
          <NextScript />
        </MainTemplate>
      </body>
    </Html>
  );
}
