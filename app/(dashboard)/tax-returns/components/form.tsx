import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Typography,
  Button,
  Link,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const TaxReturnForm = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Basic" />
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    placeholder="Leonard Carter"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    placeholder="carterleonard@gmail.com"
                    helperText="You can use letters, numbers & periods"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="form-layouts-basic-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      label="Password"
                      id="form-layouts-basic-password"
                      type="password"
                      aria-describedby="form-layouts-basic-password-helper"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                          ></IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText id="form-layouts-basic-password-helper">
                      Use 8 or more characters with a mix of letters, numbers &
                      symbols
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="form-layouts-confirm-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      label="Confirm Password"
                      id="form-layouts-confirm-password"
                      aria-describedby="form-layouts-confirm-password-helper"
                      type="password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                          ></IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText id="form-layouts-confirm-password-helper">
                      Make sure to type the same password as above
                    </FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel>Address Type</FormLabel>
                    <RadioGroup
                      row
                      defaultValue="home"
                      aria-label="address type"
                      name="form-layouts-collapsible-address-radio"
                    >
                      <FormControlLabel
                        value="home"
                        control={<Radio />}
                        label="Home (All day delivery)"
                      />
                      <FormControlLabel
                        value="office"
                        control={<Radio />}
                        label="Office (Delivery between 10 AM - 5 PM)"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Basic" />
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    placeholder="Leonard Carter"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    placeholder="carterleonard@gmail.com"
                    helperText="You can use letters, numbers & periods"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="form-layouts-basic-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      label="Password"
                      id="form-layouts-basic-password"
                      type="password"
                      aria-describedby="form-layouts-basic-password-helper"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                          ></IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText id="form-layouts-basic-password-helper">
                      Use 8 or more characters with a mix of letters, numbers &
                      symbols
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="form-layouts-confirm-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      label="Confirm Password"
                      id="form-layouts-confirm-password"
                      aria-describedby="form-layouts-confirm-password-helper"
                      type="password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                          ></IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText id="form-layouts-confirm-password-helper">
                      Make sure to type the same password as above
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      gap: 5,
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button type="submit" variant="contained" size="large">
                      Get Started!
                    </Button>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ mr: 2 }}>
                        Already have an account?
                      </Typography>
                      <Link href="/" onClick={(e) => e.preventDefault()}>
                        Log in
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaxReturnForm;
