'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

// A curated cross-sector selection from all logo folders for the marquee strip
const logoImages = [
  '/logos/01_Retail_and_Food/bmmi.png',
  '/logos/01_Retail_and_Food/freshly-foods.png',
  '/logos/01_Retail_and_Food/unilever.jpeg',
  '/logos/01_Retail_and_Food/nestle.png',
  '/logos/02_Banking_and_Finance/visa.png',
  '/logos/02_Banking_and_Finance/rfi-global.png',
  '/logos/02_Banking_and_Finance/american-express.png',
  '/logos/02_Banking_and_Finance/bupa.png',
  '/logos/02_Banking_and_Finance/sabb.png',
  '/logos/03_Real_Estate_and_Construction/emaar.png',
  '/logos/03_Real_Estate_and_Construction/dmcc.png',
  '/logos/03_Real_Estate_and_Construction/dubai-south.png',
  '/logos/03_Real_Estate_and_Construction/wj-towell.png',
  '/logos/04_Industrial/jotun.png',
  '/logos/04_Industrial/amiantit-oman.png',
  '/logos/04_Industrial/sadolin.png',
  '/logos/04_Industrial/twiga.png',
  '/logos/05_Oil_and_Gas/pdo.png',
  '/logos/05_Oil_and_Gas/emirates-gas.png',
  '/logos/05_Oil_and_Gas/emarat.png',
  '/logos/05_Oil_and_Gas/shell.png',
  '/logos/05_Oil_and_Gas/gasco.png',
  '/logos/06_Logistics_and_Transportation/bridgestone.png',
  '/logos/06_Logistics_and_Transportation/ford.png',
  '/logos/06_Logistics_and_Transportation/mercedes.png',
  '/logos/06_Logistics_and_Transportation/volvo.png',
  '/logos/06_Logistics_and_Transportation/gm.png',
  '/logos/07_Telecom_and_ICT/barco.png',
  '/logos/07_Telecom_and_ICT/etisalat.png',
  '/logos/07_Telecom_and_ICT/epson.png',
  '/logos/07_Telecom_and_ICT/maroc-telecom.png',
  '/logos/07_Telecom_and_ICT/lg.png',
]

export default function LogoStrip() {
  const stripRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const posRef = useRef(0)

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    const speed = 0.6

    const animate = () => {
      if (strip) {
        posRef.current -= speed
        const totalWidth = strip.scrollWidth / 2
        if (Math.abs(posRef.current) >= totalWidth) {
          posRef.current = 0
        }
        strip.style.transform = `translateX(${posRef.current}px)`
      }
      animRef.current = requestAnimationFrame(animate)
    }
    animRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animRef.current)
  }, [])


  const allLogos = [...logoImages, ...logoImages]

  return (
    <div className="overflow-hidden">
      <div
        ref={stripRef}
        className="flex items-center gap-8 whitespace-nowrap will-change-transform py-3"
      >
        {allLogos.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center w-44 h-20 px-5 py-4"
          >
            <Image
              src={src}
              alt="Client logo"
              width={160}
              height={72}
              className="object-contain w-full h-full select-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
