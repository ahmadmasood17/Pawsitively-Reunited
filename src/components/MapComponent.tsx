import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'


type MapType = google.maps.Map | null

const containerStyle = {
  width: '360px',
  height: '300px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

const MapComponent: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY', 
  })

  const [map, setMap] = useState<MapType>(null)

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >

      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MapComponent)
