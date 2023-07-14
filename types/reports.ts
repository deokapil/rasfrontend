import { type } from "os"

export interface features {
  id: number
  type: string
  geometry: {
    type: string
    coordinates: [number, number]
  }
  properties: {
    name: string
    active_from: string
    active_to?: string
    is_active: boolean
  }
}

export interface site {
  id: number
  name: string
  site_type: string
  site_geo?: {
    type: string
    features: [features]
  }
}

export type RealTimeAQI = {
  bucket: string
  Aqi: number
}
export type TSReportUnit = {
  bucket: string
  unit: number
}
export type RealTimeSA = {
  Industry: number
  Other: number
  Biomass: number
  Vehicle: number
  Secondary: number
  Pm: number
  Coal: number
  Construction: number
  Roaddust: number
  MSW: number
  Domestic: number
  bucket: string
}

export type PIData = {
  name: string
  y: number
}

export type BarData = {
  name: string
  y: number
}

export type DashboardData = {
  aqi_daily: TSReportUnit[]
  aqi_monthly: TSReportUnit[]
}
