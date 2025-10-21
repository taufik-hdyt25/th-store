"use client";

import { Background, Layout } from "@/components";
import { IPagesParams } from "@/interfaces/IBaseParams";
import { Button } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const Home: React.FC<IPagesParams> = ({ params }) => {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <Background>
        <div>
          <p>
            Hai {session?.user?.name} - ID: {session?.user?.email}
          </p>
          <Button isLoading={status === "loading"} onClick={() => signOut()}>
            LOGOUT
          </Button>
        </div>
      </Background>
    </Layout>
  );
};

export default Home;
