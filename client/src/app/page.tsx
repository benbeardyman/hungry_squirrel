import Image from "next/image";
import logo from "public/images/hs_logo.png";

export default function Home() {
  return (
    <header className="flex gap-1 flex-col items-center justify-center">
      <Image src={logo} alt={""} />
      <h1>Hello hungry squirrel, what can we feed you tonight?</h1>
    </header>
  );
}
