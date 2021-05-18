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

export default function Share ({ post }) {
  const url = `https://www.matthewmercuri.com/blog/post/${post.fields.blogSlug}`
  return (
    <div className={styles.share}>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton
        url={url}
        title={post.fields.blogTitle}
        windowWidth={660}
        windowHeight={460}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <FacebookShareButton
        url={url}
        quote={post.fields.blogTitle}
        hashtag='#blog'
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={post.fields.blogTitle}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  )
}
