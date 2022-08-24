import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

interface LocationProps{
    text: string
}

const LocationPin = ({ text }: LocationProps) => (
    <div className="pin">
      <Icon icon={locationIcon} className="map-pin" width="24" />
      <p className="pin-text">{text}</p>
    </div>
  )

 export default LocationPin 