import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="New age tool to put your life on track by using Twitter in DND mode"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ textAlign: "left", display: "flex", alignItems: "flex-start" }}
        className={[styles.main, inter.className].join(" ")}
      >
        <h1>Twitter DND 🐦🚫</h1>
        <h2 style={{ width: "40rem" }}>
          saves humans from instant gratification by infite scrolling and ad
          flashes which reduces focusing abilities and puts our race in danger
        </h2>
        <div>
          <s>
            <h4>reduce crime rates</h4>
          </s>
          <s>
            <h4>protect earth from global warming</h4>
          </s>
          <s>
            <h4>stop us from making a nuclear holocaust</h4>
          </s>
          <s>
            <h4>make humans multi plnetary species</h4>
          </s>
        </div>
        <footer>
          <h6>
            &copy; saving humans from mass destruction since{" "}
            <u
              onClick={() =>
                alert(`Yes goddamn it, we use ${`new Date().getFullYear()`}`)
              }
            >
              {new Date().getFullYear()}
            </u>
          </h6>
        </footer>
      </main>
    </>
  );
}