import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car } from "lucide-react";
import { GoldTitle, GrayTitle, SectionLabel } from "@/components/resusables";
export default function Home() {
  return (
    <>
    <section className="pt-28 sm:pt-32">

     <Button  variant={"gold"}>Subsrcibe</Button>
     <GrayTitle >Gray Title</GrayTitle>
     <GoldTitle>Gold Title</GoldTitle>
     <SectionLabel>Section Label</SectionLabel>
    </section>

    
    </>
   
  );
}
