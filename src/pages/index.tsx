import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import { Board } from '../components/minesweeper/Board'
import { smile } from '../components/minesweeper/data'

import pookey from '../content/images/pookey.jpg'

const Message = () => (
  <Page>
    <Container>
      <Board height={0} width={0} mines={0} data={smile} debug={false} />
      <img src={pookey} height={'100px'} style={{ margin: '1rem auto 0 auto', display: 'block' }} alt="Logo" />
    </Container>
  </Page>
)

export default Message
