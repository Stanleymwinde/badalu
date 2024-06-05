import React from "react";
import CHeading from "../common/c-heading";
import { Box, Button, SimpleGrid, Stack } from "@chakra-ui/react";
import BlogCard from "../common/blog-card";
import { marginX } from "@/utils/constants";

const HomeBlogs = () => {
  return (
    <Stack mb="3rem" mt="4rem" marginX={marginX}>
      <CHeading h={"Latest News"} />

      <SimpleGrid mt="1.5rem" columns={{ base: 1, md: 3 }} spacing={6}>
        {[1, 2, 3].map((_, i) => (
          <BlogCard key={i} />
        ))}
      </SimpleGrid>
      <Button w="fit-content" mx="auto" colorScheme="secondary" mt="2rem">
        View More Blogs
      </Button>
    </Stack>
  );
};

export default HomeBlogs;
