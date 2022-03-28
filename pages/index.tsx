import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";

// ui
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

// components
import { Sidebar } from "../components/sidebar";
import { Counter } from "../components/counter";

// styles
import styles from "../styles/Home.module.scss";
import TextField from "@mui/material/TextField";

const Home: NextPage = () => {
  // const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [match, setMatch] = useState<number | string>("");
  const [team, setTeam] = useState<number | undefined>();
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  // const handleSidebarToggle = () => {
  //   setShowSidebar(!showSidebar);
  // };

  /**
   * Set ability to submit.
   */
  useEffect(() => {
    const hasTeam = team !== undefined;
    const hasMatch = match !== "" && match !== undefined;
    setCanSubmit(hasTeam && hasMatch);
  }, [team, match]);

  /**
   * Record match number.
   */
  const handleMatchChange = (e: React.ChangeEvent) => {
    setMatch((e.currentTarget as HTMLInputElement).value);
  };

  /**
   * Record team number.
   */
  const handleTeamChange = (e: React.ChangeEvent) => {
    let teamNum = parseInt((e.currentTarget as HTMLInputElement).value, 10);
    if (!isNaN(teamNum)) {
      setTeam(teamNum);
    }

    setTeam(parseInt((e.currentTarget as HTMLInputElement).value, 10));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>FRC Match Scouting</title>
        <meta name="description" content="Tool to report bot performance in FRC competitions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>KwarQs Match Scouting</h1>
        </div>
        <div>
          <div>
            <div className={styles.label}>Match Info</div>
            <TextField label="Match Number" required onChange={handleMatchChange} value={match} />
            <TextField label="Team Number" required onChange={handleTeamChange} type="number" />
          </div>
          <div className={`${styles.container} ${styles.section}`}>
            <div className={styles.label}>Auto</div>
            <Counter label={"Shots Made"} />
            <Counter label={"Shots Missed"} />
          </div>
          <div className={`${styles.container} ${styles.section}`}>
            <div className={styles.label}>Teleop</div>
          </div>
          <Button disabled={!canSubmit} variant={"contained"}>
            Submit
          </Button>
        </div>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={showSidebar}
                inputProps={{ "aria-label": "controlled" }}
                onChange={handleSidebarToggle}
              />
            }
            label="Show sidebar"
          />
        </FormGroup> */}

        {/* <motion.div
          className={styles.sidebarContainer}
          animate={{ transform: showSidebar ? "translateX(-0%)" : "translateX(-200%)" }}
        >
          <Sidebar />
        </motion.div> */}
      </main>

      <footer className={styles.footer}>Put your footer here</footer>
    </div>
  );
};

export default Home;
