"use client";

import { Layout } from "@/components";
import { TableCustom } from "@/components/Table";
import { Column } from "@/components/Table/Table";
import { IBaseParams } from "@/interfaces/IBaseParams";
import { pushUrlParam } from "@/utils/redirectParam";

import { TableContainer } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard: React.FC<IBaseParams> = ({ params }) => {
  const router = useRouter();
  const products = [
    {
      id: 1,
      name: "MacBook Pro 14",
      category: "Laptop",
      price: 27999000,
      stock: 8,
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      category: "Smartphone",
      price: 23999000,
      stock: 15,
    },
    {
      id: 3,
      name: "iPad Air 11",
      category: "Tablet",
      price: 12999000,
      stock: 12,
    },
    {
      id: 4,
      name: "AirPods Pro 2",
      category: "Aksesoris",
      price: 3799000,
      stock: 20,
    },
    {
      id: 5,
      name: "Apple Watch Ultra 2",
      category: "Wearable",
      price: 13999000,
      stock: 6,
    },
    {
      id: 6,
      name: "Magic Keyboard",
      category: "Aksesoris",
      price: 2899000,
      stock: 18,
    },
    {
      id: 7,
      name: "HomePod Mini",
      category: "Speaker",
      price: 1499000,
      stock: 10,
    },
    { id: 8, name: "Apple TV 4K", category: "Media", price: 2499000, stock: 5 },
    {
      id: 9,
      name: "MagSafe Charger",
      category: "Aksesoris",
      price: 749000,
      stock: 25,
    },
    {
      id: 10,
      name: "Studio Display",
      category: "Monitor",
      price: 25999000,
      stock: 2,
    },
  ];

  const columns: Column<any>[] = [
    { key: "id", label: "ID", styleHeader: { w: 0 } },
    { key: "name", label: "Nama Produk" },
    { key: "category", label: "Kategori" },
    {
      key: "price",
      label: "Harga (Rp)",
    },
    {
      key: "stock",
      label: "Stok",
    },
  ];
  return (
    <Layout type="admin">
      <TableContainer bg={"white"}>
        <TableCustom
          data={products}
          columns={columns}
          totalItems={products?.length}
          page={params?.page || 1}
          totalPages={100}
          onPageChange={(e) => {
            pushUrlParam(router, {
              page: e,
            });
          }}
        />
      </TableContainer>
    </Layout>
  );
};

export default Dashboard;
