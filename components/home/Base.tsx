import React from "react"

import { SiteHeader } from "../site-header"

interface SiteLayoutProps {
  children: React.ReactNode
}

const Base = ({ children }: SiteLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="container">
        <SiteHeader />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default Base
