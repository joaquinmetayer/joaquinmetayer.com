"use client";
import Link from "next/link";
import data from "../../../assets/data.json";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Debes ingresar un email");
      return;
    }

    setIsSubscribing(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscripción exitosa");
        setEmail("");
      } else {
        const errorData = await response.json();
        if (errorData.error === "El email ya se encuentra subscripto") {
          setMessage("Email is already subscribed");
        } else {
          setMessage(`Error de subscripción`);
        }
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("Error de subscripción");
    } finally {
      setIsSubscribing(false);
      window.location.reload()
    }
  };

  return (
    <>
      <img
        src={`/images/${data.heroImage}`}
        alt="joaquinmetayer"
        style={{ width: `${data.heroWidth}`, paddingTop: "5px" }}
      />
      <p>
        <Link href="/">Joaquin Metayer</Link>
        {" / "}
        {data.links.map((link, index) => (
          <span key={index}>
            <Link key={index} href={link.url} target="_blank">
              {link.platform}
            </Link>{" "}
          </span>
        ))}
      </p>

      <hr />
    </>
  );
}

//<div style={{ width: `${data.heroWidth}` }}>
//  <input
//    type="email"
//    placeholder="tuemail@email.com"
//    value={email}
//    onChange={(e) => setEmail(e.target.value)}
//    disabled={isSubscribing}
//  />
//  <p>
//    <button onClick={handleSubscribe} disabled={isSubscribing || !email}>
//      {isSubscribing ? "Subscribiendo..." : "Subscribirme"}
//    </button>
//  </p>
//  {message && <p>{message}</p>}
//</div>;
