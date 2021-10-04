export default function Button({ href, variant, className, children }) {
  const addClassName = className ? `${className}` : ""

  const variants = {
    outline: `border border-yellow-500 text-white`,
    yellow: `bg-yellow-500 text-white`
  }

  const pickedVariant = variants[variant]

  return (
    <a
      href={href}
      className={`py-2 px-6 rounded-full font-semibold text-lg inline-block ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  )
}
