import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Flex, Text, Icon, Tooltip, Input, Avatar } from "@chakra-ui/react";
import {
  BiAdjust,
  BiChart,
  BiGroup,
  BiHome,
  BiMenu,
  BiMoneyWithdraw,
  BiPackage,
  BiStore,
} from "react-icons/bi";
import { FaAdjust, FaToggleOff, FaToolbox } from "react-icons/fa";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<
    "store" | "products" | "clients" | "payments" | "reports" | "settings"
  >("store");

  function Sidebar() {
    function SidebarTab({
      name,
      icon,
    }: {
      name:
        | "store"
        | "products"
        | "clients"
        | "payments"
        | "reports"
        | "settings";
      icon: any;
    }) {
      return (
        <Icon
          onClick={() => setActiveTab(name)}
          cursor="pointer"
          _hover={{
            color: "#EEE",
            transition: "0.3s",
          }}
          as={icon}
          fontSize="2rem"
          color={activeTab === name ? "#FFF" : "#999"}
          mt="8"
        />
      );
    }

    return (
      <Flex
        align="center"
        w={70}
        py="2"
        flexDir="column"
        h="100%"
        justify="space-between"
      >
        <Flex flexDir="column" w="100%" align="center">
          <Flex h={50} align="center">
            <Text fontWeight={700} fontSize="1.75rem" color="#EEE">
              St.
            </Text>
          </Flex>
          <Flex w="100%" h={1} bg="#EEE" my="2" />
          <SidebarTab name="store" icon={BiStore} />
          <SidebarTab name="products" icon={BiPackage} />
          <SidebarTab name="clients" icon={BiGroup} />
          <SidebarTab name="payments" icon={BiMoneyWithdraw} />
          <SidebarTab name="reports" icon={BiChart} />
        </Flex>

        <SidebarTab name="settings" icon={FaToggleOff} />
      </Flex>
    );
  }

  function Content() {
    return (
      <Flex flexDir="column" py="2" w="100%">
        <Flex h={50} justify="space-between" align="center" w="100%" px="4">
          <Input
            w={350}
            border="0px solid transparent"
            placeholder="Pesquise por coleção, produto ou cliente"
          />
          <Flex align="center">
            <Avatar name="Ricardo Fonseca" size="sm" />
          </Flex>
        </Flex>
        <Flex w="100%" h={1} bg="#EEE" my="2" />
      </Flex>
    );
  }

  return (
    <React.Fragment>
      <Head>
        <title>Nextron</title>
      </Head>
      <Flex bg="#202123" h="100vh">
        <Sidebar />
        <Content />
      </Flex>
    </React.Fragment>
  );
}

export default Home;

// esse é um software de gerenciamento de empresas locais e digitais
// esse software vai ser usado por empresas que vendem produtos e serviços e precisam de um software para gerenciar seus negócios em tarefas como
// gerenciar estoque, gerenciar vendas, gerenciar clientes, gerenciar fornecedores, gerenciar funcionários, gerenciar contas a pagar e a receber, gerenciar contas bancárias, gerenciar contas de e-mail, gerenciar contas de redes sociais, gerenciar contas de aplicativos, gerenciar contas de sites, gerenciar contas de

// requisitos funcionais
// 1. gerenciar estoque
// 2. gerenciar vendas
// 3. gerenciar clientes
// 4. gerenciar fornecedores
// 5. gerenciar funcionários
// 6. gerenciar contas a pagar e a receber
// 7. gerenciar contas bancárias

// histórias de usuarios
// 1. como um usuário eu quero poder cadastrar um novo produto no estoque
// 2. como um usuário eu quero poder cadastrar um novo cliente
// 3. como um usuário eu quero poder cadastrar um novo fornecedor
// 4. como um usuário eu quero poder cadastrar um novo funcionário
// 5. como um usuário eu quero poder cadastrar uma nova conta bancária
// 6. como um usuário eu quero poder cadastrar uma nova conta a pagar
// 7. como um usuário eu quero poder cadastrar uma nova conta a receber
// 8. como um usuário eu quero poder cadastrar uma nova venda
// 9. como um usuário eu quero poder cadastrar um novo pagamento
// 10. como um usuário eu quero poder cadastrar um novo recebimento
// 11. como um usuário eu quero poder cadastrar um novo usuário

// telas desse software
// 1. tela de login
// 2. tela de cadastro de usuário
// 3. tela de cadastro de produto
// 4. tela de cadastro de cliente
// 5. tela de cadastro de fornecedor
// 6. tela de cadastro de funcionário
// 7. tela de cadastro de conta bancária
// 8. tela de cadastro de conta a pagar
// 9. tela de cadastro de conta a receber
// 10. tela de cadastro de venda
// 11. tela de cadastro de pagamento
// 12. tela de cadastro de recebimento
// 13. tela de cadastro de usuário
// 14. tela de listagem de produtos
// 15. tela de listagem de clientes
// 16. tela de listagem de fornecedores
// 17. tela de listagem de funcionários
// 18. tela de listagem de contas bancárias
// 19. tela de listagem de contas a pagar
// 20. tela de listagem de contas a receber
// 21. tela de listagem de vendas
// 22. tela de listagem de pagamentos
// 23. tela de listagem de recebimentos
// 24. tela de listagem de usuários
// 25. tela de edição de produto
// 26. tela de edição de cliente
// 27. tela de edição de fornecedor
// 28. tela de edição de funcionário
// 29. tela de edição de conta bancária
// 30. tela de edição de conta a pagar
// 31. tela de edição de conta a receber
// 32. tela de edição de venda
// 33. tela de edição de pagamento
// 34. tela de edição de recebimento
// 35. tela de edição de usuário

// algoritmos necessários para esse software
// 1. algoritmo para calcular o lucro de uma venda
// 2. algoritmo para calcular o lucro de um pagamento
// 3. algoritmo para calcular o lucro de um recebimento
// 4. algoritmo para calcular o lucro de um produto
// 5. algoritmo para calcular o lucro de um cliente
// 6. algoritmo para calcular o lucro de um fornecedor
