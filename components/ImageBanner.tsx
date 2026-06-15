'use client'

import { useState } from "react"
import Image from "next/image"

export default function ImageBanner() {
  const [isloaded, setIsLoaded] = useState(false)

  return (
    <div className="banner-images">
      <Image className="low-res-img" src="/low_res/banner.jpeg" alt="banner-low-res"
        width={1920} height={600} style={{ width: '100%', height: 'auto' }} />
      <Image
        className="high-res-img"
        src="/med_res/banner.png"
        alt="banner-high-res"
        width={1920}
        height={600}
        style={{ opacity: isloaded ? 1 : 0, width: '100%', height: 'auto' }}
        onLoad={() => {
          setIsLoaded(true)
        }}
      />
      <div className="cta-btns-container">
        <div>
          <div>
            <h3>Welcome to</h3>
            <h1>The Naijastore</h1>
          </div>
          <div>
            <button>Shop stickers</button>
            <button>Shop planner</button>
          </div>
        </div>
      </div>
    </div>
  )
}
