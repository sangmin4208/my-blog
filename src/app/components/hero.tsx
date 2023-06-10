import Image from "next/image"
import React from "react"
import profileImage from "../../../public/images/profile.png"
import Link from "next/link"
export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-2 text-center">
      <Image
        className="rounded-full"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="font-bold text-3xl ">{`Hi, I'm Sangmin.`}</h2>
      <h3>
        {`I'm a full stack developer, I love to learn new things and share what I've learned.`}
      </h3>
      <Link href="/contact">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Me
        </button>
      </Link>
    </section>
  )
}
