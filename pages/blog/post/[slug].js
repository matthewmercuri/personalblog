// import { readdirSync, readFileSync } from 'fs'
import { join, resolve } from 'path'
import matter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'

export default function PostPage ({ params }) {
  return (
    <p>{params.slug}</p>
  )
}

// export const getStaticProps = async ({ params }) => {
//   const path = join(process.cwd(), 'posts')
//   const files = readdirSync(path).map((f) =>
//     join(path, f))
//   const sources = files.map(file =>
//     matter(readFileSync(file)))
//   console.log(sources)
//   //   console.log(path)
//   //   console.log(files)

//   //   const files = readdirSync(paths)
//   //   const slugs = files.map((file) =>
//   //     matter(readFileSync(file))
//   //   )
//   //   console.log(paths)
//   //   console.log(files)
//   //   console.log(slugs)
//   return {
//     props: {
//       source: 'hello'
//     }
//   }
// }

export const getStaticProps = async ({ params }) => {
  const path = join(process.cwd(), 'posts')
  const files = readdirSync(path).map((f) =>
    join(path, f))

  return {
    props: {
      params
    }
  }
}

export const getStaticPaths = async () => {
  const path = join(process.cwd(), 'posts')
  const files = readdirSync(path).map((f) =>
    join(path, f))
  const sources = files.map(file =>
    matter(readFileSync(file)))
  const paths = sources.map((source) => ({
    params: {
      slug: source.data.title.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
      // slug: encodeURI(source.data.title.toLowerCase())
    }
  })
  )
  console.log(paths)

  return {
    paths,
    fallback: false
  }
}
