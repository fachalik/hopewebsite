/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react"
import onContentIndexClick from "../utils/scroll.js"

export default function Footer() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-500">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-white">
            Jika kamu menginginkan kebahagiaan, mulailah dengan pikiran positif.
            Start with helloHope to keep your mind in positivity
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between">
            <div className="">
              <img src="/illustrations/logo.png" className="w-40" />
            </div>
            <a
              onClick={() => onContentIndexClick("apaItuHope")}
              className="hidden md:block cursor-pointer text-white hover:text-white uppercase"
            >
              Apa itu HOPE?
            </a>
            <a
              onClick={() => onContentIndexClick("tentangKami")}
              className="hidden md:block cursor-pointer text-white hover:text-white uppercase"
            >
              Tentang Kami
            </a>
            <a
              onClick={() => onContentIndexClick("hubungiKami")}
              className="hidden md:block cursor-pointer text-white hover:text-white uppercase"
            >
              Hubungi Kami
            </a>
            <div className="flex flex-row space-x-8 items-center justify-between">
              <a href="https://www.instagram.com/hellohope.life/">
                <Icon icon="akar-icons:instagram-fill" className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/company/hello-hope/about/">
                <Icon icon="akar-icons:linkedin-fill" className="text-3xl" />
              </a>
              <a className="cursor-not-allowed">
                <Icon icon="akar-icons:facebook-fill" className="text-3xl" />
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-12 text-white">
            Copyright © 2021 HelloHope
          </p>
        </div>
      </div>
    </div>
  )
}
