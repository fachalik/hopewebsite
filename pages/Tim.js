/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Card from "../components/Card"
export default function Tim() {
  return (
    <section className="pb-28">
      <p className="text-3xl text-center text-serif  font-extrabold mb-10 text-yellow-500">
        Tentang Tim
      </p>

      <div className="container mx-auto py-5">
        <div className="flex">
          <Card
            className="rounded-full"
            img="/images/rifki.jpeg"
            title="Rifki Fardian Damanhari"
            text={`Co-founder & Chief Executive Officer`}
          />
          <Card
            className="rounded-full"
            img="/images/wira.jpeg"
            title="Rizky Wira Pranata"
            text={`Co-founder & Chief Product Officer`}
          />
          <Card
            className="rounded-full"
            img="/images/ezra.jpeg"
            title="M. Ezra Rizkiatama P."
            text={`Co-founder & Chief Technical Officer`}
          />
          <Card
            className="rounded-full"
            img="/images/chalik.jpeg"
            title="F.A. Chalik"
            text={`Co-founder & VP Developer`}
          />
        </div>
      </div>
    </section>
  )
}
