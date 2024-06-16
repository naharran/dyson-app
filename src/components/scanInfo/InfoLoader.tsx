import { Stack, Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const InfoLoader = () => {
  return (
    <Stack className="w-full mt-32">
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </Stack>
  );
};

export default InfoLoader;
