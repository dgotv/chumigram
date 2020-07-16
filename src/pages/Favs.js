import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => (
  <Layout title='tus favoritos' subtitle='Aqui están tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
