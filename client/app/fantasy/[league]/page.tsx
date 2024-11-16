"use client";

import { usePathname } from "next/navigation";

const League = () => {
  const pathname = usePathname();
  const league = pathname.replace("/fantasy/", "");
  console.log(league);
  return <div>League</div>;
};

export default League;
