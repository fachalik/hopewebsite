import NavItem from '../components/NavItem'
export default function Nav() {
  return (
    <ul className="flex justify-center items-end space-x-10">
      <NavItem id="apaItuHope">Apa itu Hope?</NavItem>
      <NavItem id="tentangKami">Tentang Kami</NavItem>
      <NavItem id="hubungiKami">Hubungi Kami</NavItem>
    </ul>
  )
}
