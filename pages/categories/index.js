import Categoriespage from '@/components/templates/Categoriespage'
import React from 'react'

function Categories({ data }) {
  console.log(data)

  return (
    <Categoriespage data={data} />
  )
}

export default Categories

export async function getServerSideProps(context) {

  const { query: {difficulty, time} } = context
  const res = await fetch("http://localhost:3005/data")

  const json = await res.json()

  const filtredData = json.filter(item => {
    
    const difficultyResult = item.details.filter(detail => detail.Difficulty && detail.Difficulty === difficulty)
    const timeResult = item.details.filter((detail) => {

      const cookingTime = detail["Cooking Time"] || ""

      const [timeDetail] = cookingTime.split(" ")

      if (time === "less" && timeDetail && +timeDetail <= 30) {

        return detail

      } else if (time === "more" && +timeDetail > 30) {

        return detail
      }
    })
    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item
    } else if (!time && difficulty && difficultyResult.length) {
      return item
    } else if (time && !difficulty && timeResult.length) {
      return item
    }
  })

  return {
    props: { data: filtredData }
  }
}


