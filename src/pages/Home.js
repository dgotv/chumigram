import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Chumigram tu app de fotos de mascotas' subtitle='Con Chumigram encontraras fotos muy Cheveres'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>

  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
