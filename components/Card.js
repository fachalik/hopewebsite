/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Card({ className, img, title, text }) {
  const addClassName = className ? `${className}` : ""
  return (
    <div className="w-3/12 mx-5">
      <div className="bg-white shadow-card p-8 flex-row-reverse text-center rounded-lg">
        <img className={`w-16 mx-auto ${addClassName}`} src={img} />
        <div className="mt-5">
          <h4 className="font-bold">{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
