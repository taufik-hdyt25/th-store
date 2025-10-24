"use client";

import { HStack, IconButton, Button } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const generatePageNumbers = () => {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <HStack spacing={2} justify="center" pb={2}>
      <IconButton
        aria-label="Previous page"
        icon={<ChevronLeft style={{ color: "var(--text)" }} size={18} />}
        onClick={handlePrev}
        isDisabled={currentPage === 1}
        variant="outline"
        size="sm"
        rounded="md"
      />

      {generatePageNumbers().map((page) => {
        return (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            size="sm"
            variant={page === currentPage ? "solid" : "outline"}
            colorScheme={page === currentPage ? "blue" : "gray"}
            rounded="md"
            color={page === currentPage ? "white" : "myColor.text-inActive"}
          >
            {page}
          </Button>
        );
      })}

      <IconButton
        aria-label="Next page"
        icon={<ChevronRight style={{ color: "var(--text)" }} size={18} />}
        onClick={handleNext}
        isDisabled={currentPage === totalPages}
        variant="outline"
        size="sm"
        rounded="md"
      />
    </HStack>
  );
};

export default Pagination;
