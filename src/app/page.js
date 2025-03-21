import Accounts from "@/Components/Accounts";
import Bond from "@/Components/Bond";
import Cash from "@/Components/Cash";
import Earning from "@/Components/Earning";
import Funds from "@/Components/Funds";
import Help from "@/Components/Help";
import Hero from "@/Components/Hero";
import Investment from "@/Components/Investment";
import Moments from "@/Components/Moments";
import Options from "@/Components/Options";
import Queue from "@/Components/Queue";
import Research from "@/Components/Research";
import Security from "@/Components/Security";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <Hero/>
     <Investment/>
     <Bond/>
     <Options/>
     <Cash/>
     <Moments/>
     <Queue/>
     <Earning/>
     <Research/>
     <Security/>
     <Accounts/>
     <Help/>
     <Funds/>
    </div>
  );
}
