import { Circle, Icon } from '@chakra-ui/react'
import { BiExpandAlt } from 'react-icons/bi'
import { MdClose, MdRemove } from 'react-icons/md'

export enum WindowSizeButtonType {
  CLOSE = 'CLOSE',
  MINIMIZE = 'MINIMIZE',
  MAXIMIZE = 'MAXIMIZE',
}

interface IWindowSizeButtonProps {
  type: WindowSizeButtonType
}

const WindowSizeButton = ({ type }: IWindowSizeButtonProps) => {
  let WindowIcon = MdClose
  const colorIntensity = 400
  let color = 'red'
  switch (type) {
    case WindowSizeButtonType.CLOSE:
      break
    case WindowSizeButtonType.MINIMIZE:
      WindowIcon = MdRemove
      color = 'yellow'
      break
    case WindowSizeButtonType.MAXIMIZE:
      WindowIcon = BiExpandAlt
      color = 'green'
      break
    default:
      console.warn('Invalid WindowSizeButtonType')
      break
  }
  color = `${color}.${colorIntensity}`

  return (
    <Circle
      color='transparent'
      size='3'
      bg={color}
      _groupHover={{
        color: 'black',
      }}
      transition='color 0.1s'
    >
      <Icon as={WindowIcon} w='80%' h='80%' />
    </Circle>
  )
}

export default WindowSizeButton
