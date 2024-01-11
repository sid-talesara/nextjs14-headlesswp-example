import { Suspense } from "react";
import Loading from "../loading";

async function getPage() {
  const query = `
    query GetPrivacyPolicyPage {
      page(id: "/privacy-policy/", idType: URI) {
        title
        content
      }
    }
  `;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const responseBody = await res.json();

  if (responseBody && responseBody.data && responseBody.data.page) {
    return responseBody.data.page;
  } else {
    throw new Error("Failed to fetch the privacy policy page");
  }
}

export default async function PrivacyPolicy() {
  const page = await getPage();

  return (
    <main>
      <nav>
        <h1>{page.title}</h1>
      </nav>

      <Suspense fallback={<Loading />}>
        <div className="card">
          <p dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      </Suspense>
    </main>
  );
}
