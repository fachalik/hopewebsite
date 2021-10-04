export default function NavItem({ children }) {
  return (
    <li className="text-yellow-500 text-lg font-semibold">
      <a>{children}</a>
    </li>
  )
}
