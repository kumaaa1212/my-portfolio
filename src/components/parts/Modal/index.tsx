import { Button, Modal, ModalBody, ModalCloseButton, ModalContent } from '@chakra-ui/react'
import { ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'

interface Props {
  open: boolean
  onClose: () => void
}

export default function ModalBase(props: Props) {
  const { open, onClose } = props
  return (
    <>
      <Modal isOpen={open} onClose={onClose} variant="gray">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <div>ffff</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
