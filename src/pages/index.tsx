import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { Game } from '../components/minesweeper/Game'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Game />
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
