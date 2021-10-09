/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Card from "../components/Card"
export default function Benefit() {
  return (
    <section className="py-28">
      <div className="flex mb-20">
        <div className="w-4/12">
          <img src="/illustrations/pathKiri.png" />
        </div>
        <div className="w-4/12">
          <p className="text-3xl text-center text-serif font-extrabold mb-10 text-yellow-500">
            Apa yang bisa didapatkan?
          </p>
        </div>
        <div className="w-4/12">
          <img src="/illustrations/pathKanan.png" />
        </div>
      </div>
      <div className="container mx-auto py-5">
        <div className="flex">
          <Card
            img="/illustrations/tanganTambah.png"
            title="Menjaga Kesehatan"
            text="Lorem ipsum dolor sit amet"
          />
          <Card
            img="/illustrations/gejala.png"
            title="Identifikasi Gejala"
            text="Lorem ipsum dolor sit amet"
          />
          <Card
            img="/illustrations/penyakit.png"
            title="Pencegahan Penyakit"
            text="Lorem ipsum dolor sit amet"
          />
          <Card
            img="/illustrations/mental.png"
            title="Treatment Mental dan Fisik"
            text="Lorem ipsum dolor sit amet"
          />
        </div>
      </div>
    </section>
  )
}
