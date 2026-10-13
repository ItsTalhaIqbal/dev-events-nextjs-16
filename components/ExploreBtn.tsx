"use client";

import Image from "next/image";
import Link from "next/link";

const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => {console.log("Cliecked")}}
    >
      <Link href={"#events"}>Explore events</Link>
      <Image  src={'/icons/arrow-down.svg'} alt="Arrow Icon" width={24} height={24}/>
    </button>
  );
};

export default ExploreBtn;
