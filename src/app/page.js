import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center flex-col">
 <h1 className="text-[23px] md:text-2xl lg:text-4xl font-bold pt-6  ">Welcome to Guide-U App today!</h1>
    
 <p className="text-lg pl-7 pt-4 pb-6 ">Travel Guide App helps travelers discover destinations, plan trips, and explore local experiences.It's fast,responsive,and easy to use making travel planning simple and enjoyable.</p>
      
  <button className="bg-green-500 p-4 rounded-2xl text-xl ">Downlod App</button>
     
    {/* <div className="pt-5 w-[350px] h-[350px] md:h-[550px] md:w-full md:p-10 lg:h-[600px] lg:p-8">
  <Image
    src="/images/Backgroundimg.jpeg"
    alt="Beautiful travel destination"
    width={1200}
    height={500}
    className="rounded-lg w-full h-auto object-cover"
    priority
  />
</div> */}
      </div>

  

      
  
    </div>
  );
}
