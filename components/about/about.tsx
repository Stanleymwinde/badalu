import { marginX } from "@/utils/constants";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";

const About = () => {
  return (
    //margin X
    <Stack margin={marginX} spacing={4} direction="column" align="center" p={5}>
      <SimpleGrid columns={2} spacing={14} height="60vh" alignItems="center">
        <div className="lets-try">
          <Heading as="h4" fontSize="md" textColor={"brand.yellow"}>
            About Badalu
          </Heading>
          <Heading as="h1" size="xl" color="brand.black">
            We’re Take Care of Your Problems Carefully
          </Heading>
          <Text
            color="brand.black"
            fontSize={{ base: "sm", md: "lg" }}
            fontWeight="500"
          >
            Around Africa On Motorcycle is a historic endeavor aiming to raise
            funds for the LOGOS Educational Endowment Fund. This trip will see
            the first ever motorcycle rides around the entire coastline of
            Africa, covering 35,000 km in six months. Comprising of five core
            riders, the crew will be joined by bikers from various African
            countries. The trip will culminate in reaching the four extreme
            points of Africa, celebrating personal milestones, and promoting
            education and eternity.
          </Text>
          <Text color={"brand.blue"}>Badalu Home Care</Text>
          <Slider aria-label="slider-ex-6" defaultValue={80} isDisabled>
            <SliderMark
              value={80}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {80}%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text color={"brand.blue"}>Badalu School</Text>
          <Slider aria-label="slider-ex-6" defaultValue={80} isDisabled>
            <SliderMark
              value={80}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {80}%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text color="brand.yellow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            blanditiis similique commodi, eveniet sunt, voluptas culpa vero quae
            at fuga assumenda. Exercitationem autem saepe assumenda dolores
            officia! Iusto, perferendis enim?
          </Text>
          <Flex justify="space-between" align="center">
            <Button borderRadius="25px" textColor="white" bgColor="brand.blue">
              Our Services
            </Button>
            <Stack gap={0}>
              <Heading as="h2" size="md">
                Cleofa M.
              </Heading>
              <Text color={"brand.yellow"}>Founder Badalu</Text>
            </Stack>
          </Flex>
        </div>

        <Grid
          h="65vh"
          gridTemplateRows="repeat(2, 1fr)"
          gridTemplateColumns="auto 35%"
          gap={4}
          overflow={"hidden"}
        >
          <GridItem
            rowSpan={2}
            bgImage={
              "https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/2021/12/portrait-of-happy-asian-disabled-senior-elderly-male-on-wheelchair-enjoy-stay-home-nursing-care--e1638524820916.jpg"
            }
            objectFit={"cover"}
            borderRadius={"xl"}
          />

          <GridItem
            bgImage={
              "https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/female-nurse-posing-in-clinic-pgx1ontlkk2n61u1uivv20t6bn9t8z805xxpccd1qa.jpg"
            }
            borderRadius={"xl"}
          />
          <GridItem
            bgImage={
              "https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/female-nurse-talking-with-an-old-woman-e1638524560913-pgyr3cgr5ac0qeox03s9a5wi7f38hzhirtci86k3r6.jpg"
            }
            borderRadius={"xl"}
          />
        </Grid>
      </SimpleGrid>
    </Stack>
  );
};

export default About;

1 / 2;
