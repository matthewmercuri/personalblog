import styles from '../styles/ContactForm.module.css'

export default function ContactForm () {
  return (
    <div className={styles.contactForm}>
      <h4>Please fill out this form if you have any questions, suggestions, or business inquiries.</h4>
      <form name='contact' action='/success' method='POST' data-netlify='true' data-netlify-recaptcha='true' netlify-honeypot='bot-field'>
        <input type='hidden' name='form-name' value='contact' />
        <p className={styles.hidden}>
          <label>Don’t fill this out if you’re human: <input name='bot-field' /></label>
        </p>
        <p>
          <label>Your Name: <input type='text' id='senderName' name='senderName' placeholder='name' maxLength='35' required /></label>
        </p>
        <p>
          <label>Your Email: <input type='email' id='senderEmail' name='senderEmail' placeholder='email' maxLength='35' required /></label>
        </p>
        <p>
          <label>Message: <textarea id='message' name='message' placeholder='type your message here...' maxLength='750' required /></label>
        </p>
        <div data-netlify-recaptcha='true' />
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </div>
  )
}
