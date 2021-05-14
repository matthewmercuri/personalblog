import styles from '../styles/ContactForm.module.css'

export default function ContactForm () {
  return (
    <div className={styles.contactForm}>
      <h4>Please fill out this form if you have any questions, suggestions, or business inquiries.</h4>
      <form name='contactForm'>
        <label>Name:
          <input name='senderName' />
        </label>
      </form>
    </div>
  )
}
