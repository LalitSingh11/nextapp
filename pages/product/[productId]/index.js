import { useRouter } from "next/router";

function ProductId() {
  const router = useRouter();
  const { productId } = router.query;
  return <div>Product detail for {productId}</div>;
}

export default ProductId;
