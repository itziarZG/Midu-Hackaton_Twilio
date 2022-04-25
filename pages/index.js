import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

import useField from "../hooks/useField.js";
import { connectUser } from "../utils/video.js";

export default function Home() {
  const userNameField = useField({ type: "text", name: "username" });
  const [errorMessage, setErrorMessage] = useState("");

  function handleFormSignIn(ev) {
    ev.preventDefault();

    connectUser(userNameField.value)
      .then((resp) => {
        console.log(resp)
        if (resp.status === 200) {

        } else {
          setErrorMessage(resp.message);
          setTimeout(() => setErrorMessage(""), 3000);
        }
      })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Meet clone with Twilio</title>
        <meta name="description" content="Meet clone with Twilio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Meet Clone with Twilio
        </h1>
        <form className="signIn_form" onSubmit={handleFormSignIn}>
          <label htmlFor="name" className="form_label">
            Name
          </label>
          <input
            {...userNameField}
            placeholder="Enter your name"
            className="form_input"
          />

          <input type="submit" value="Join Room" className="signIn_btn" />
        </form>
        {errorMessage !== "" ? (
          <p style={{ color: "red" }}>{errorMessage}</p>
        ) : (
          <></>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
