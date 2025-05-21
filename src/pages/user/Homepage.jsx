import React from "react";
import bannerVideo from "../../assets/Mufasa.mp4";
import banner from '../../assets/ott3.webp';
import Slider from "../../components/slider/Slider";
import Languages from "../Languages";

const Homepage = () => {
  return (
    <div className="h-[85vh] w-screen relative" style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container_center w-[90%] h-full mx-auto flex items-center text-white relative z-10">
        <div className="left_container w-[40%]">
          <div className="flex gap-2 my-5">
            <p>History</p>
            <p>Action</p>
          </div>
          <h1 className="text-5xl font-bold my-5">Better Call Saul</h1>
          <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi beatae delectus eum, earum perspiciatis officia maiores architecto exercitationem ea! Doloremque qui, laborum dolorem minima ut et accusamus vero labore quasi animi error nemo possimus id, omnis impedit, provident assumenda nostrum reiciendis ipsum placeat velit cum. Nostrum corrupti illo at?</p>
          <div className="flex gap-2 my-5">
            <p>2hr:55mins</p>
            <p></p>
            <p>2hr:55mins</p>
            </div>
        </div>
      </div>
    </div>














    // <div className="bg-[#f4f4f6] text-[#1e1e1e] font-['Inter'] min-h-screen">
    //   {/* Banner Section */}
    //   <section className="w-screen overflow-hidden mt-2">
    //     <div className="w-full">
    //       <video
    //         src={bannerVideo}
    //         className="w-full h-[400px] object-cover"
    //         autoPlay
    //         muted
    //         loop
    //         playsInline
    //       />
    //     </div>
    //   </section>
    //   <Languages />
    //   <Slider title="Trending" />
    //   <Slider title="Action" />
    //   <Slider title="Drama" />
    //   <Slider title="Romance" />
    // </div>
  );
};

export default Homepage;
