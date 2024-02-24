import CardFemale1 from "@/components/product-card/Women/cardfe1";
import CardMale1 from "@/components/product-card/Man/cardmal1";
import CardKid1 from "@/components/product-card/child/cardkid1";

export default function AllProduct(){
    return(     <div className=" text-yellow-500 flex justify-between  items-center">
                   <div>
                     <CardFemale1/>
                </div> 
                  <CardMale1/>  <CardKid1/> 
                   </div>
    );
}