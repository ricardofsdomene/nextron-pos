import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Flex, Text, Icon, Input } from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>Nextron</title>
      </Head>
      <Flex
        flexDir="column"
        bg="#202123"
        h="100vh"
        justify="center"
        align="center"
      >
        <Flex
          p="8"
          boxShadow="rgba(255, 255, 255, 0.1) 0 0 2px"
          flexDir="column"
        >
          <Text color="#FFF" fontSize="1.5rem">
            Entrar
          </Text>
          <Input
            mt="4"
            w={300}
            placeholder="Email"
            style={{
              color: "#FFF",
              borderRadius: 0,
            }}
          />
          <Input
            mt="4"
            w={300}
            placeholder="Senha"
            style={{
              color: "#FFF",
              borderRadius: 0,
            }}
          />
          <Flex
            onClick={() => router.push("/home")}
            cursor="pointer"
            justify="center"
            align="center"
            mt="4"
            py="2"
            bg="#FFF"
            w={300}
            h="-webkit-fit-content"
          >
            <Text color="#000" fontSize="1rem">
              Entrar
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </React.Fragment>
  );
}

export default Home;
