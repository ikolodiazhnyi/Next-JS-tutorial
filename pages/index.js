import Link from "next/link";
import MainLayout from "./components/MainLayout";

export default function Index() {
  return (
    <MainLayout title="Home">
      <h1>Index Page</h1>
      <p>
        <Link href="/about">
          <a>About page</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
    </MainLayout>
  );
}
