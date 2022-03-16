import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
		<Container>
			<Section
				title='Model S'
				description='Order Online for Touchless Delievery'
				backgroundImg='model-s.jpg'
				leftBtnText='Custom Order'
				rightBtnText='Existing Inventor'
			/>
			<Section
				title='Model S'
				description='Order Online for Touchless Delievery'
				backgroundImg='model-y.jpg'
				leftBtnText='Custom Order'
				rightBtnText='Existing Inventor'
			/>
			<Section
				title='Model 3'
				description='Order Online for Touchless Delievery'
				backgroundImg='model-3.jpg'
				leftBtnText='Custom Order'
				rightBtnText='Existing Inventor'
			/>
			<Section
				title='Model X'
				description='Order Online for Touchless Delievery'
				backgroundImg='model-x.jpg'
				leftBtnText='Custom Order'
				rightBtnText='Existing Inventor'
			/>
			<Section
				title='Lowest Cost Solar Panels in America'
				description='Money-back gurantee'
				backgroundImg='solar-panel.jpg'
				leftBtnText='Custom Order'
				rightBtnText='Existing Inventor'
			/>
			<Section
				title='Solar for New Roofs'
				description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
				backgroundImg='solar-panel.jpg'
				leftBtnText='Custom Order'
				rightBtnText='Existing Inventor'
			/>
		</Container>
	)
}

export default Home

const Container = styled.div`
    height: 100vh;
`