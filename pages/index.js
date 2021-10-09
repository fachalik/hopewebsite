import Header from "../components/Header"
import Benefit from "./Benefit"
import Footer from "./Footer"
import GetinTouch from "./GetinTouch"
import Motivasion from "./Motivasion"
import TentangKami from "./TentangKami"
import Thumbnail from "./Thumbnail"
import Tim from "./Tim"
import Vision from "./Vision"
export default function Home() {
  return (
    <>
      <Header />
      <Thumbnail />
      <TentangKami />
      <Benefit />
      <Motivasion />
      <Vision />
      <Tim />
      <GetinTouch />
      <Footer />
    </>
  )
}
