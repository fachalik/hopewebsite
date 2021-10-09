/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Card from "../components/Card"
export default function Benefit() {
  return (
    <section className="py-28">
      <div className="container mx-auto py-5">
        <div className="flex justify-start">
          <div className="w-6/12 mb-20">
            <p className="text-3xl text-center text-serif  font-extrabold mb-10 text-yellow-500">
              Apa yang bisa didapatkan?
            </p>
            <p className="text-xl text-center">
              Memberikan layanan yang merata dan terjangkau kepada seluruh
              masyarakat indonesia melalui teknologi kecerdasan buatan.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-6/12 mb-20">
            <p className="text-3xl text-center text-serif  font-extrabold mb-10 text-yellow-500">
              Misi
            </p>
            <ul className="list-disc w-7/12 mx-auto text-center">
              <li>
                Pengembangan artificial Intelligence guna memberikan layanan
                kesehatan yang sama dan setara
              </li>
              <li>
                Menyediakan layanan yang terjangkau secara harga dan lokasi bagi
                pengguna
              </li>
              <li>
                Penggunaan teknologi digital yang memudahkan pengguna mengakses
                layanan kesehatan kapan saja dan dimana saja
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-6/12 mb-20">
            <p className="text-3xl text-center text-serif font-extrabold mb-10 text-yellow-500">
              Nilai-nilai HOPE
            </p>
            <ul className="list-nonemx-auto text-center">
              <li>Social Impact</li>
              <li>Customer Centric</li>
              <li>Continuous Improvment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
