import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"

const Works = () => {
  return <div>works</div>
}

const WorksPage: BlitzPage = () => {
  return (
    <>
      <title>Works</title>
      <h1>works</h1>
      <ul>
        <li>英単語作成App</li>
        <li>家庭教師授業App</li>
        <li>conetto</li>
      </ul>
    </>
  )
}

WorksPage.getLayout = (page) => <Layout>{page}</Layout>

export default WorksPage
