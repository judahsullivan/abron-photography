import { MotionBox } from '@/components/animations/motionChakra';
import {
  Box,
  VStack,
  useColorModeValue,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Skeleton,
  Image
} from '@chakra-ui/react'
import { useState } from 'react';
import SlideShow from './slideShow';


export default function GalleryPhotoCard({
  image,
  description,
  name,
  coverimage,
  publishedAt
}: {
  image: string[];
  description: string;
  name: string;
  coverimage: string;
  publishedAt: string;

}) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const bg = useColorModeValue('purple.200', 'purple.800')
  return (
    <MotionBox
      py={12}
    >
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={bg}
        border={'none'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <MotionBox
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          whileHover={{
            scale: 1.03
          }}
          height={'230px'}
        >
          <Image
            fallback={<Skeleton w={"100%"} h={'100%'} />}
            rounded={'lg'}
            cursor={'pointer'}
            h={"100%"}
            w={'100%'}
            minH={230}
            maxW={282}
            objectFit={'cover'}
            objectPosition={'top center'}
            src={coverimage}
            alt={name}
            onClick={handleCardClick}
          />
        </MotionBox>
        <Text
          textTransform={'capitalize'}
          lineHeight={1.2}
        >{name}
        </Text>
      </Box>
      <Modal
        isCentered
        motionPreset='scale'
        size="full"
        isOpen={isModalOpen}
        onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent
          bg={bg}

        >
          <ModalHeader>
            <VStack>
              {image &&
                (
                  <SlideShow
                    image={image}
                    name={name}
                    description={description}
                    publishedAt={publishedAt}
                  />
                )}
            </VStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
        </ModalContent>
      </Modal>
    </MotionBox>
  )
}
