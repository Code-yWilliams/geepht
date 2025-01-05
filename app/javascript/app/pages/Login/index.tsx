import "@mantine/core/styles.css";

import {
  Anchor,
  Box,
  Button,
  Checkbox,
  MantineProvider,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./LoginImage.module.css";

const Login = () => {
  const authenticityToken =
    document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute("content") ?? "";

  return (
    <MantineProvider>
      <Box className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <form action="/login" method="POST">
            <input
              type="hidden"
              name="authenticity_token"
              value={authenticityToken}
            />
            <Title
              order={2}
              className={classes.title}
              ta="center"
              mt="md"
              mb={50}
            >
              Welcome back. I missed u.
            </Title>

            <TextInput
              label="Login"
              name="user[login]"
              placeholder="your username or email"
              autoComplete="email"
              size="md"
            />
            <PasswordInput
              label="Password"
              name="user[password]"
              placeholder="your password"
              autoComplete="current-password"
              mt="md"
              size="md"
            />
            <Checkbox
              label="Remember me"
              name="user[remember_me]"
              mt="xl"
              size="md"
            />
            <Button type="submit" fullWidth mt="xl" size="md">
              Login
            </Button>

            <Stack align="center" gap={2}>
              <Text mt="md">
                Don&apos;t have an account?{" "}
                <Anchor<"a"> href="/register" fw={700}>
                  Register
                </Anchor>
              </Text>
              <Anchor<"a"> href="/forgot-password/new" fw={700}>
                Forgot password?
              </Anchor>
            </Stack>
          </form>
        </Paper>
      </Box>
    </MantineProvider>
  );
};

export default Login;
