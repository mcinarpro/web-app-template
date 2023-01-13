"use client";

import { Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import TaxReturnForm from "../components/form";

function TaxReturnPage() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Stack
            paddingY={4}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5">Déclaration 2022</Typography>
            <Link href="/tax-returns">Back to list</Link>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <TaxReturnForm />
        </Grid>
      </Grid>
    </>
  );
}

export default TaxReturnPage;
