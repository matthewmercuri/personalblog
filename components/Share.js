import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon
} from 'next-share'

import styles from './blogstyles/Share.module.css'

export default function Share ({ data }) {
  const slug = data.title.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
  const url = `www.matthewmercuri.com/blog/post/${slug}`
  return (
    <div className={styles.share}>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton
        url={url}
        title={data.title}
        windowWidth={660}
        windowHeight={460}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <FacebookShareButton
        url={url}
        quote={data.title}
        hashtag='#blog'
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={data.title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  )
}
