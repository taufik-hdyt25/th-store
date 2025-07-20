"use client";

import { IPagesParams } from "@/interfaces/IBaseParams";
import { Box, Button } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const Home: React.FC<IPagesParams> = ({ params }) => {
  const { data: session } = useSession();

  return (
    <div>
      <p>
        Hai {session?.user?.name} - ID: {session?.user?.email}
      </p>
      <Button>oke</Button>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Home;
