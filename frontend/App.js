import 'regenerator-runtime/runtime';
import React from 'react';
import { useEffect, useState } from 'react'

// import components 
import ListCrowdfunds from './components/ListCrowdfunds'
import CreateCrowdfund from './components/CreateCrowdfund'

// import css
import './assets/global.css';



export default function App({ isSignedIn, HelloNEAR, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // Get blockchian state once on component load
  const [crowdfunds, setCrowdfunds] = useState([])
  const [toggleModal, setToggleModal] = useState(false)
  
  function addProject() {
    setToggleModal(!toggleModal)
  
  }


  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    return (
      <main>
        <h1>Welcome</h1>
        <p style={{ textAlign: 'center' }}>
          Click the button below to sign in:
        </p>
        <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
          <button onClick={() => wallet.signIn()}>Sign in</button>
        </p>
      </main>
    )
  }
  return (
    <>
      {/* <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()}/> */}
      <main className={uiPleaseWait ? 'please-wait' : ''}>
          <header>
            <div className="logo"></div>
            <button className="link" style={{ float: 'right' }}  onClick={() => wallet.signOut()}>
              Sign out <span className="id">{window.accountId}</span>
            </button>
          </header>
          <button onClick={addProject}>Add a project</button>
          <CreateCrowdfund toggleModal={toggleModal} />
          <section>
            {crowdfunds.map((project, id) => {
              return (
                <div key={id}>
                  <ListCrowdfunds project={project} />
                </div>
              )
            })}
          </section>
        </main>
    
    </>
  );
}
