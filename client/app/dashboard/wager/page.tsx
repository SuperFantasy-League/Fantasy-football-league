// "use client";
// import { useState, useEffect } from "react";
// import TeamDisplay from "@/components/macro/TeamDisplay";

// export default function TeamsPage() {
//   const [teams, setTeams] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTeams = async () => {
//       try {
//         const response = await fetch(
//           "https://node-backend-7sxv.onrender.com/api/teams/get-teams?page=2"
//         );
//         const data = await response.json();
//         console.log(data?.data?.response?.data);
//         if (!data?.data?.response?.data) return;
//         setTeams(data?.data?.response?.data);
//       } catch (error) {
//         console.error("Error fetching teams:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeams();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return <TeamDisplay teams={teams} />;
// }


import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const page = () => {
    return (
        <section className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col items-center gap-4">
                <Image
                    src={'/bolt.svg'}
                    alt="bolt icon for coming soon"
                    width={250}
                    height={250}
                />
                <p className="text-3xl fo tracking-tighter">
                    Wager is Unavailable at this time, <br /> check out the fantasy Page
                </p>
                <Link href={'/fantasy'}>
                    <Button className="w-32 h-10">
                        Fantasy
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default page