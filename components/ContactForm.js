import styles from '../styles/ContactForm.module.css'

export default function ContactForm () {
  return (
    <div className={styles.contactForm}>
      <h4>Please fill out this form if you have any questions, suggestions, or business inquiries.</h4>
      <form name='contact' action='/success' method='POST' netlify-honeypot='bot-field' data-netlify='true'>
        <p className={styles.hidden}>
          <label>Don’t fill this out if you’re human: <input name='bot-field' /></label>
        </p>
        <input type='hidden' name='form-name' value='contact' />
        <p>
          <label>Your Name: <input type='text' id='YourName' name='senderName' placeholder='name' maxLength='35' required /></label>
        </p>
        <p>
          <label>Your Email: <input type='email' id='YourEmail' name='senderEmail' placeholder='email' maxLength='35' required /></label>
        </p>
        <p>
          <label>Message: <textarea id='yourmessage' name='message' placeholder='type your message here...' maxLength='750' required /></label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </div>
  )
}
