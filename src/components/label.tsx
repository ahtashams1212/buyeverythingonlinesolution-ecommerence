import Image from "next/image";
import Express from "../../public/Image/expressdelivery.webp"
import Delivery from "../../public/Image/003-cash-on-delivery.webp"
import Headphone from "../../public/Image/004-headphones.webp"
import Seller from "../../public/Image/006-best-seller.webp"

export default function Label(){
return (<div className="p-5 gap-11 text-yellow-500   flex justify-between  items-center">
    
          <div className="flex items-center">
               <Image className="w-10 h-10 rounded-full flex justify-center items-center"
               src = {Express}
                alt = ""
               width={100}
               height={10000}
              />
              <label htmlFor="">Express Delivery</label>
          <div/>
        <div className="flex items-center">
               <Image className="w-10 h-10 rounded-full flex justify-center items-center"
               src = {Delivery}
                alt = ""
               width={10000}
               height={100}
              />
              <label htmlFor="">Express Delivery</label>
         <div/>
         <div className="flex items-center">
               <Image className="w-10 h-10 rounded-full flex justify-center items-center"
               src = {Headphone}
                alt = ""
               width={10000}
               height={100}
              />
              <label htmlFor="">Express Delivery</label>
         <div/>
         <div className="flex items-center">
               <Image className="w-10 h-10 rounded-full flex justify-center items-center"
               src = {Seller}
                alt = ""
               width={10000}
               height={100}
              />
              <label htmlFor="">Express Delivery</label>
         <div/>
  </div>
  </div>
  </div>
  </div>
</div>
)
};