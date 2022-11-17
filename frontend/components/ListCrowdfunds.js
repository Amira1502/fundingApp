// components/ListCrowdfunds.js
import React, { useState } from 'react'
const ONE_NEAR = 1_000_000_000_000_000_000_000_000
function ListCrowdfunds({ project }) {
  const [donationAmount, setDonationAmount] = useState(0)
  const [showDonateNotification, setShowDonateNotification] = useState(false)
  function donate(e) {
    e.preventDefault()
    console.log(donationAmount)
    window.contract.add_donation({ id: project.id, amount: donationAmount * 1 })
    setShowDonateNotification(!showDonateNotification)
  }
  return (
    <div className="project">
      <h2>{project.title}</h2>{' '}
      <span className="creator">{project.creator}</span>
      <h3>description:</h3>
      <p>{project.description}</p>
      <h4>target: {project.donation_target} NEAR</h4>
      <h4>Votes: {project.total_votes}</h4>
      <button
        onClick={() => {
          window.contract.add_vote({ id: project.id })
        }}
      >
        Vote
      </button>
      <h4>total donations: {project.total_donations / ONE_NEAR} NEAR</h4>
      <form onSubmit={donate}>
        <input
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        ></input>
        <button onClick={donate}>Donate</button>
      </form>
      {showDonateNotification && <DonateNotification />}
    </div>
  )
}
function DonateNotification() {
  return (
    <aside>
      <footer>
        <div>✔ Succeeded </div>
        <div>Donation was successful</div>
      </footer>
    </aside>
  )
}
export default ListCrowdfunds