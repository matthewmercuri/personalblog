import Link from 'next/link'

export default function BackToBlog () {
  return (
    <div className='back'>
      <hr className='rule' />
      <Link href='/blog'><p>Back to Blog</p></Link>
      <style jsx>{`
        .back {
            text-align: center;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            color: #0d21a1;
          }
        
        .back:hover {
        color: #011638;
        }

        .rule {
            border: 0;
            height: 1px;
            background: #333;
            background-image: linear-gradient(to right, #ccc, #333, #ccc);
            margin: 10px 0px
        }

        @media only screen and (max-width: 750px) {
            .back {
                font-size: 16px
            }
        }
      `}
      </style>
    </div>
  )
}
