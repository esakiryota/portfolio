import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"

const Works = () => {
  return <div>works</div>
}

const FavoritesPage: BlitzPage = () => {
  return (
    <>
      <title>Favorites</title>
      <h1>Favorites</h1>
      <ul>
        <li>音楽</li>
        <li>アプリ制作</li>
        <li>お笑い</li>
        <li>プログラミング言語</li>
      </ul>
    </>
  )
}

FavoritesPage.getLayout = (page) => <Layout>{page}</Layout>

export default FavoritesPage
