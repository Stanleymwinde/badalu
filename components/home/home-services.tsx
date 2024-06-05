import { marginX, serviceData } from "@/utils/constants";
import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import CHeading from "../common/c-heading";
import ServiceCard from "../common/service-card";

const HomeServices = () => {
  return (
    <Stack marginX={marginX} spacing={4} mt="3rem" mb="5rem">
      <CHeading h="Our Services" />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {serviceData.map((service, i) => (
          <ServiceCard service={service} key={i} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default HomeServices;
