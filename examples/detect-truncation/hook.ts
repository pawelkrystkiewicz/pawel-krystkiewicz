import { type RefObject, useEffect, useRef, useState } from 'react'

interface UseDetectedTruncation<RefType> {
  ref: RefObject<RefType>
  isTruncated: boolean
}

export const useDetectedTruncation = <
  RefType extends HTMLElement,
>(): UseDetectedTruncation<RefType | null> => {
  const [isTruncated, setIsTruncated] = useState(false)
  const elementRef = useRef<RefType | null>(null)

  const checkTruncation = () => {
    if (elementRef.current) {
      const { scrollWidth, clientWidth } = elementRef.current
      const isTruncated = scrollWidth > clientWidth
      setIsTruncated(isTruncated)
    }
  }

  useEffect(() => {
    checkTruncation()
    const currentElement = elementRef.current

    const resizeObserver = new ResizeObserver(checkTruncation)

    if (currentElement) {
      resizeObserver.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        resizeObserver.unobserve(currentElement)
      }
    }
  }, [])

  return { ref: elementRef, isTruncated }
}
