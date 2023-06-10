import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-4">
      <Link href="/">
        <h1 className="text-4xl">{`Sangmin's Blog`}</h1>
      </Link>
      <nav className="flex gap-4 uppercase text-lg">
        <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/posts"}>posts</Link>
        <Link href={"/contact"}>contact</Link>
      </nav>
    </header>
  );
}
