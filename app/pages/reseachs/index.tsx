import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"

const Works = () => {
  return <div>works</div>
}

const WorksPage: BlitzPage = () => {
  return (
    <>
      <title>Reseaches</title>
      <h1>researches</h1>
      <ul>
        <li>メチオニンの微生物学の研究</li>
      </ul>
    </>
  )
}

WorksPage.getLayout = (page) => <Layout>{page}</Layout>

export default WorksPage
