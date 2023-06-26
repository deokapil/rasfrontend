"use client"

import { Icon } from "leaflet"

import { site } from "@/types/reports"
import { getSites } from "@/lib/consumer"

import "leaflet/dist/leaflet.css"
import React, { useEffect } from "react"
import { MapPin } from "lucide-react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

type Props = {}

const DynamicMapCard = async (props: Props) => {
  const sites: site[] = await getSites()
  const customIcon = new Icon({
    iconUrl: "/leaflet/images/marker-icon.png",
    iconSize: [25, 25],
  })

  const markers = sites.map((site) => {
    return site.site_geo?.features.map((feature) => {
      console.log(feature.geometry.coordinates)
      return (
        <Marker
          key={feature.id}
          position={[
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0],
          ]}
          icon={customIcon}
        >
          <Popup></Popup>
        </Marker>
      )
    })
  })
  return (
    <MapContainer
      style={{ width: "100%", height: "100%" }}
      center={[28.63164, 77.23736]}
      zoom={10}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </MapContainer>
  )
}

export default DynamicMapCard
