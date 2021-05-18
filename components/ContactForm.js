import styles from '../styles/ContactForm.module.css'

export default function ContactForm () {
  return (
    <div className={styles.contactForm}>
      <h4>Please fill out this form if you have any questions, suggestions, or business inquiries.</h4>
      <form name='contactForm' method='POST' action='/success' encType='application/x-www-form-urlencoded' data-netlify='true' data-netlify-recaptcha='true' netlify-honeypot='bot-field'>
        <p class={styles.hidden}>
          <label>Don’t fill this out if you’re human: <input name='bot-field' /></label>
        </p>
        <p class={styles.hidden}>
          <label><input name='form-name' /></label>
        </p>
        <p>
          <label>Your Name: <input type='text' name='senderName' placeholder='name' maxLength='35' required /></label>
        </p>
        <p>
          <label>Your Email: <input type='email' name='senderEmail' placeholder='email' maxLength='35' required /></label>
        </p>
        <p>
          <label>Message: <textarea name='message' placeholder='type your message here...' maxLength='750' required /></label>
        </p>
        <div data-netlify-recaptcha='true' />
        <p>
          <button name='submitButton' type='submit'>Send</button>
        </p>
      </form>
    </div>
  )
}
