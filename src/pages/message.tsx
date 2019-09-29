import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { Board } from '../components/minesweeper/Board'
import { missYou } from '../components/minesweeper/data'

const Message = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Board height={0} width={0} mines={0} data={missYou} debug={false} />
      </Container>
    </Page>
  </IndexLayout>
)

export default Message
