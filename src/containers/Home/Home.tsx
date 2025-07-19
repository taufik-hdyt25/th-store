"use client";

import { IPagesParams } from "@/interfaces/IBaseParams";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const Home: React.FC<IPagesParams> = ({ params }) => {
  const { data: session, status } = useSession();

  return (
    <div>
      <p>
        Hai {session?.user.name} - ID: {session?.user.id}
      </p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Home;
