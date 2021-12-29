import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"

const Works = () => {
  return <div>works</div>
}

const WorksPage: BlitzPage = () => {
  return (
    <>
      <title>Skills</title>
      <h1>プログラミング言語</h1>
      <ul>
        <li>css</li>
        <li>javascript</li>
        <li>python</li>
      </ul>
      <h1>フレームワーク</h1>
      <ul>
        <li>laravel</li>
        <li>Rails</li>
      </ul>
    </>
  )
}

WorksPage.getLayout = (page) => <Layout>{page}</Layout>

export default WorksPage
