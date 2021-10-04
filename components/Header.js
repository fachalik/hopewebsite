import Nav from "../components/Nav"
export default function Header() {
  return (
    <div className="flex items-center">
      <div className="w-3/12">
        <img src="/illustrations/logo.png" className="w-40" />
      </div>
      <div className="w-9/12">
        <Nav />
      </div>
    </div>
  )
}
