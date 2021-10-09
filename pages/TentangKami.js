/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function TentangKami() {
  return (
    <section className="py-28 bg-gradient-to-r from-yellow-100 to-yellow-500">
      <div className="container mx-auto py-5 ">
        <p className="text-3xl text-center text-serif  font-extrabold mb-10">
          Apa itu HOPE?
        </p>
        <div className="flex justify-center items-center">
          <div className="w-6/12">
            <h1 className="text-center">
              HOPE adalah asisten kesehatan pribadi untuk menjaga, mencegah,
              mengobati, dan mengidentifikasi gejala mengenai kesehatan mental
              dan fisik melalui teknologi kecerdasan buatan (artificial
              intelligence)
            </h1>
          </div>
          <div className="w-6/12">
            <img src="/illustrations/logoNoText.png" className="w-40 mx-auto" />
          </div>
        </div>
        <div className="flex justify-center items-center mb-10">
          <div className="w-6/12">
            <img src="/illustrations/TanganHati.png" className="w-40 mx-auto" />
          </div>
          <div className="w-6/12">
            <h1 className="text-center">
              Memberikan "Harapan" menjadi semangat tersendiri bagi HOPE untuk
              dapat menyediakan layanan asisten kesehatan pribadi berbasis
              kecerdasan buatan agar seluruh masyarakat Indonesia dapat
              merasakan layanan kesehatan yang sama dan terjangkau.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
