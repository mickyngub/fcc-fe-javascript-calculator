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
      <Grid container spacing={2}>
        <Grid item>
          <Button color="primary" variant="contained">
            First Item
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">
            Second Item
          </Button>
        </Grid>

        <Grid item>
          <Button color="primary" variant="contained">
            Third Item
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">
            Fourth Item
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
