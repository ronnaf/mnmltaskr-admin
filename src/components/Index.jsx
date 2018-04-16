import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Menubar from './Menubar'
import ReportsViewContainer from '../containers/ReportsViewContainer'
import LoginContainer from '../containers/LoginContainer'
import { Container } from 'semantic-ui-react'

const Index = (props) => {
  const user = localStorage.getItem('user')

  return (
    <div>
      { user
        ? <div><Menubar />
          <Container style={{ marginTop: '5rem' }}>
            <ReportsViewContainer />
          </Container>
        </div>
        : <LoginContainer />
      }
    </div>
  )
}

export default Index
