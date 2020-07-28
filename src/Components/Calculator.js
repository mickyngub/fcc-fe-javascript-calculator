import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
const Calculator = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "lightblue",
        height: "60vh",
        marginTop: "10vh",
      }}
    >
      Numbers go boop boop beep
      <Grid container spacing={0} style={{ display: "grid" }}>
        <Grid item xs={3}>
          <Button color="primary" variant="outlined">
            First
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" variant="outlined">
            Second
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button color="primary" variant="outlined">
            Third
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" variant="outlined">
            Fourth
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            style={{ width: "100%", height: "100%" }}
          >
            First
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            style={{ width: "100%", height: "100%" }}
          >
            Second
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            style={{ width: "100%", height: "100%" }}
          >
            Third
          </Button>
        </Grid>
        <Grid item xs={3} container direction="column">
          <Button color="primary" variant="outlined">
            Fourth
          </Button>
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="outlined"
              style={{ width: "100%" }}
            >
              Fifth
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" variant="outlined">
            First
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            style={{ width: "100%", height: "100%" }}
          >
            Second
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button color="primary" variant="outlined">
            Third
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
