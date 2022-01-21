import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Logo from "../logo/Logo.jsx";
import styles from "./Example.module.scss";
import classNames from "classnames";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
          <Logo type={'default'} /> 
      </Container>
    </div>
  );
}
