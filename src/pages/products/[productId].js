import { useRouter } from "next/router";

function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>{product.id}</h2>
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
      <p>{product.body}</p>
    </div>
  );
}

export default Product;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  console.log(`Generating page for /products/${params.productId} `);

  return {
    props: {
      product: data,
    },
  };
}
