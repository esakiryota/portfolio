import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Flex,
  Spacer,
} from "@chakra-ui/react"
import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import styles from "./Index.module.css"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const BgImage = () => {
  return (
    <>
      <h1>RYOTA ESAKI</h1>
      <p>Welcome to my homepage!</p>
      <ul>
        <li>home</li>
        <li>works</li>
        <li>biography</li>
        <li>skills</li>
        <li>researchs</li>
        <li>favorites</li>
      </ul>
    </>
  )
}

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <Box>
        <Flex>
          <Box p="2">
            <Heading size="md">Chakra App</Heading>
          </Box>
          <Spacer />
          <Box>
            <Button
              colorScheme="teal"
              mr="4"
              className="button small"
              onClick={async () => {
                await logoutMutation()
              }}
            >
              Logout
            </Button>
            {/* <Button colorScheme="teal">
              User id: <code>{currentUser.id}</code>
            </Button>
            <Button colorScheme="teal">
              User role: <code>{currentUser.role}</code>
            </Button> */}
          </Box>
        </Flex>
      </Box>
    )
  } else {
    return (
      <>
        <Box>
          <Flex>
            <Box p="2">
              <Heading size="md">Chakra App</Heading>
            </Box>
            <Spacer />
            <Box>
              <Button colorScheme="teal" mr="4">
                <Link href={Routes.SignupPage()}>
                  <a className="button small">
                    <strong>Sign Up</strong>
                  </a>
                </Link>
              </Button>
              <Button colorScheme="teal">
                <Link href={Routes.LoginPage()}>
                  <a className="button small">
                    <strong>Login</strong>
                  </a>
                </Link>
              </Button>
            </Box>
          </Flex>
        </Box>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <BgImage />
      </Suspense>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
