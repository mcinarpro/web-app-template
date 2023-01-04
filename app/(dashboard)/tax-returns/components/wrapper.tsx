"use client";

import { Grid, Typography } from "@mui/material";

export type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
};

export default function PageWrapper({ title, subtitle, children }: Props) {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h5">Data Grid</Typography>
        {subtitle && <Typography variant="body2">{subtitle}</Typography>}
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}
