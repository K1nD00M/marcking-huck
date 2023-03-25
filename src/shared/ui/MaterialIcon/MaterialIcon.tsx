import * as MaterialIcons from 'react-icons/md'
import { TypeMaterialIconName } from './MaterialIcon.types'

interface Props {
   name: TypeMaterialIconName,
   className?: string
}

export const MaterialIcon = ({ name, className }: Props) => {
   const IconComponent = MaterialIcons[name]

   return <IconComponent className={className} /> || <MaterialIcons.MdDragIndicator className={className} />
}