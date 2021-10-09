import onContentIndexClick from "../utils/scroll.js"
export default function NavItem({ children, id }) {
  return (
    <li className="text-yellow-500 text-lg font-semibold cursor-pointer">
      <a onClick={() => onContentIndexClick(id)}>{children}</a>
    </li>
  )
}
