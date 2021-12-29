import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
  Box,
} from "@chakra-ui/react"
import { Card } from "./Card"
import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <Box maxW="md" mx="auto">
      <h1>Login</h1>
      <Card>
        <Form
          schema={Login}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            try {
              const user = await loginMutation(values)
              props.onSuccess?.(user)
            } catch (error: any) {
              if (error instanceof AuthenticationError) {
                return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
              } else {
                return {
                  [FORM_ERROR]:
                    "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
                }
              }
            }
          }}
        >
          <Stack spacing="6">
            <FormControl id="email">
              <LabeledTextField name="email" label="Email" placeholder="Email" />
            </FormControl>
            <LabeledTextField
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
            />
            <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
              Sign in
            </Button>
          </Stack>
        </Form>
        <div>
          <Link href={Routes.ForgotPasswordPage()}>
            <a>Forgot your password?</a>
          </Link>
        </div>

        <Button style={{ marginTop: "1rem" }} colorScheme="blue" size="lg" fontSize="md">
          Or <Link href={Routes.SignupPage()}>Sign Up</Link>
        </Button>
      </Card>
    </Box>
  )
}

export default LoginForm
