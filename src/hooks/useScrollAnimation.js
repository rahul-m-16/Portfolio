import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    // Use simpler intersection observer for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Disconnect after first trigger to save resources
          observer.disconnect()
        }
      },
      { 
        threshold,
        rootMargin: '50px' // Start animation slightly before element is visible
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.disconnect()
      }
    }
  }, [threshold])

  return [ref, isVisible]
}
