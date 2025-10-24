"use client";

import React, { JSX } from "react";
import {
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  type HTMLChakraProps,
} from "@chakra-ui/react";
import { Pagination } from "../Pagination";

export interface Column<T = any> {
  key: keyof T;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
  styleHeader?: HTMLChakraProps<"th">;
}

interface TableCustomProps<T = any> {
  data: T[];
  columns: Column<T>[] | Column<any>[];
  totalItems: number;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const TableCustom = <T extends object = any>({
  data,
  columns,
  totalItems,
  page,
  totalPages,
  onPageChange,
}: TableCustomProps<T>) => {
  return (
    <TableContainer bg="white" rounded="xl" shadow="sm" p={4} overflowX="auto">
      <Table
        variant="simple"
        size="sm"
        sx={{
          tableLayout: "auto",
          width: "100%",
        }}
      >
        <Thead bg="gray.50">
          <Tr h={10}>
            {columns?.map((col: Column) => (
              <Th key={String(col.key)} {...col?.styleHeader}>
                {col.label}
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <Tr key={rowIndex} _hover={{ bg: "gray.50" }} h={10}>
                {columns.map((col: any) => (
                  <Td key={String(col.key)}>
                    {col.render
                      ? col.render(row[col.key], row)
                      : (row[col.key] as React.ReactNode)}
                  </Td>
                ))}
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={columns.length} textAlign="center" py={6}>
                <Text color="gray.500">No data available</Text>
              </Td>
            </Tr>
          )}
        </Tbody>

        <TableCaption placement="bottom" mt={4}>
          <HStack justify="space-between" w="full" px={2}>
            <Text fontSize="sm" color="gray.600">
              Showing {(page - 1) * 10 + 1} to {Math.min(page * 10, totalItems)}{" "}
              of {totalItems}
            </Text>
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </HStack>
        </TableCaption>
      </Table>
    </TableContainer>
  );
};

export default TableCustom as <T extends object = any>(
  props: TableCustomProps<T>
) => JSX.Element;
