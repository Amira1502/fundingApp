use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
#[allow(unused_imports)]
use near_sdk::{env, near_bindgen};
use near_sdk::serde::{Deserialize, Serialize};


use crate::utils::{
    AccountId,
    Timestamp
};

#[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]

pub struct Crowdfund{
    id: i32,
  pub creator: AccountId,
    created_at: Timestamp,
    title: String,
    donation_target: u128,
    pub total_donations: u128,
   pub total_votes: i64,
    description: String,
   pub votes: Vec<String>
}


impl Crowdfund{
    pub fn new(id:i32, title: String, donation_target:u128, description: String) -> Self {
        
        Crowdfund{
            id,
            creator: env::signer_account_id().to_string(),
            created_at: env::block_timestamp(),
            title,
            donation_target,
            total_donations: 0,
            total_votes : 0,
            description,
            votes: vec![],
        }
    }
}

#[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Donation {
    donor: AccountId,
}

impl Donation {
    pub fn new() -> Self {        
      Donation{
        donor: env::predecessor_account_id().to_string(),
        }
    }  
}