import Image from "next/image";
import Link from "next/link";
import AddToCart from "./components/AddToCart";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1> Mauby is the national drink of Trinidad </h1>
      <Link href="/users ">Users</Link>
      <ProductCard/>
    </main>
  );
}
