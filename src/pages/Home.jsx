import React from 'react'
import Input from '../components/Input'
import Api from '../components/Api'
import ApiAxios from '../components/ApiAxios'

function Home() {
  return (
    <div>
        <div className="container ptb-default">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <Input />
              <Api/>
              <ApiAxios/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home