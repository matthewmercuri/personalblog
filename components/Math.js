import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

// https://arachnoid.com/latex/
export default function Math ({ mathInput }) {
  return (
    <div className='math'>
      <Latex>{mathInput}</Latex>
      <style jsx>{`
          .math {
              text-align: center;
              margin: 10px 0px 0px 10px
            }
        `}
      </style>
    </div>
  )
}
