import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import ResultCard from '../../components/categorySearch/resultCard'

export default function HorizontalResultCard(props, active) {
  const { data } = props
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {data.map((item, index) => (
          <ResultCard data={item} />
        ))}
        {/* <RegisterCard />
                <ResultCard data={data} /> */}
      </ItemsCarousel>
    </div>
  )
}
