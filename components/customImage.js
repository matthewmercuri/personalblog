import Image from 'next/image'

export default function CustomImage ({ src, alt, width, height }) {
  return (
    <div className='postimage'>
      <Image src={src} alt={alt} width={width} height={height} />
      <style jsx>{`
          .postimage {
              display: block;
              margin: 0 auto;
          }

    `}</style>
    </div>
  )
}
