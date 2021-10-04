/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Button from "./Button"
export default function Thumbnail() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-7/12 flex-row-reverse ">
        <h1 className="text-4xl text-yellow-500 font-semibold font-mono">
          Halo, aku HOPE!
        </h1>
        <h1 className="text-2xl text-black">
          Asisten kesehatan pribadi kamu Siap membantu kamu 24/7 dalam menjaga
          kesehatan mental dan fisik.
        </h1>
        <div className="h-10" />
        <h1 className="text-sm text-black">
          Yuk ikuti perjalanan HOPE dalam memberikan harapan kepada masyarakat
          Indonesia!
        </h1>
        <Button variant="yellow" href="google.com" className="mt-5">
          Get Started
        </Button>
      </div>
      <div className="w-5/12">
        <img src="/illustrations/illustration1.png" className="full" />
      </div>
    </div>
  )
}
