interface Props
  extends Pick<HTMLImageElement, 'src' | 'alt' | 'width' | 'height'> {
  className?: string
}

export function Image({ src, alt, width, height, className = '' }: Props) {
  function getImageUrl() {
    return new URL(`../../assets/images/${src}`, import.meta.url).href
  }

  return (
    <img
      className={`object-contain ${className}`}
      src={getImageUrl()}
      width={width}
      height={height}
      alt={alt}
    />
  )
}
