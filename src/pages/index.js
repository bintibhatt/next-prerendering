import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users">
        <h2>Users</h2>
      </Link>
      <Link href="/posts">
        <h2>Posts</h2>
      </Link>
      <Link href="/products">
        <h2>Products</h2>
      </Link>
    </>
  );
}

export default Home;
