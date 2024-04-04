import Box from "@/components/Box";
import Navbar from "@/components/Navbar";
import "../styles/Home.css"

export default function Home() {
  return (
    <div className="home">
      {/* <Navbar /> */}
      <div className="boxes">
        <Box color="white" />
        <Box color="white" />
        <Box color="white" />
        <Box color="white"/>
      </div>
    </div>
  );
}
