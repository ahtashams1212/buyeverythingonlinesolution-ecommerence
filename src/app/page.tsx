import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
 
import Hero from "@/components/hero";
import Image from "next/image";
import link from 'next/link';
import Label from "@/components/label";
import React from "react";
import CardFemale1 from "@/components/product-card/Women/cardfe1";
import Button from "@/components/button";
import Stats from "@/components/stat";
import CardMale1 from "@/components/product-card/Man/cardmal1";
import CardKid1 from "@/components/product-card/child/cardkid1";

export default function Home() {
  return (
    <div className=" min-h-screen mt-10">
      <Hero/>
      <h1 className="text-center gap-text-2xl font-bold  text-black sm:text-4xl">
      Online shopping made easy.
              </h1>
              <h2 className="text-center gap-2 text-2xl font-bold  text-gray-500 sm:text-2xl">
              Shop hundreds of products from sellers worldwide.
              </h2>

     <div className=" text-yellow-500 flex justify-between  items-center"><div><CardFemale1/></div> <CardMale1/><CardKid1/> </div>
     <div className="text-center gap-0 text-black s">
      <Button/>
       </div>
    <Stats/>

 </div>
  )
};