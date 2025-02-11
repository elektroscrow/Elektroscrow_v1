# Elektroscrow Backend

![Elektroscrow Banner](assets/banner.png)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Audit: SolidProof](https://img.shields.io/badge/Audit-SolidProof-green.svg)](https://solidproof.io)

Elektroscrow is the first fully decentralized escrow service built to operate across multiple blockchain networks. This repository contains the backend implementation—comprising Solidity smart contracts and comprehensive test suites—that powers the Elektroscrow platform.

Elektroscrow eliminates reliance on centralized intermediaries by leveraging immutable, self-executing smart contracts. It provides secure, trustless, and private escrow transactions where funds are only released when both parties reach a consensus.

---

## Table of Contents

- [Features](#features)
- [How It Works](#how-it-works)
  - [Escrow Process Overview](#escrow-process-overview)
  - [Decentralization & Security](#decentralization--security)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Compiling Contracts](#compiling-contracts)
  - [Running Tests](#running-tests)
  - [Deployment](#deployment)
- [Audit and KYC](#audit-and-kyc)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Decentralized Escrow Service:**  
  Fully trustless and autonomous contracts that remove the need for third-party moderators.

- **Enhanced Privacy:**  
  Users only need to share their wallet addresses. No personal data is stored, and transaction purposes remain confidential.

- **Automated Dispute Resolution:**  
  The escrow funds are only released when both buyer and seller agree on the outcome—either to complete the transaction or refund.

- **Safety Deposit Mechanism:**  
  Both parties are required to deposit safety funds (equal to the escrow amount) to enforce commitment and enable secure fund management.

- **Multi-Network Support:**  
  Primarily deployed on the BNB network, with compatibility on various Ethereum derivative networks.

- **Immutable Smart Contracts:**  
  Once deployed, the contracts are unalterable, ensuring consistent and secure operation.

- **Audited & Verified:**  
  Code audited and developers KYC verified by [SolidProof](https://solidproof.io).

---

## How It Works

### Escrow Process Overview

Elektroscrow is designed to facilitate secure escrow transactions with the following steps:

1. **Initiate Escrow:**  
   - **Buyer:** Initiates a new escrow by providing the seller’s wallet address, token type, and transaction amount.
   - **Data Entry:** The buyer fills out the escrow details through the user interface and creates a new escrow contract.

2. **Funding & Approvals:**  
   - Both parties must deposit the required funds into the escrow contract.  
   - **Safety Deposit:** Each party deposits a safety deposit equal to the escrow amount.
   - **Token Approval:** The contract is authorized to spend the specified tokens from the user’s wallet.

3. **Escrow Decisions:**  
   - Once fully funded, both buyer and seller are prompted with three options: `Accept`, `Decline`, and `Refund`.
   - The contract executes the transaction only when both parties agree on either releasing funds (upon a successful transaction) or refunding the deposits (in case of disputes).

4. **Finalization:**  
   - **Successful Transaction:** Funds (minus protocol fees) are transferred to the seller, and safety deposits are refunded.
   - **Refund:** Both parties retrieve their deposits, adjusted for any protocol fee.
   - **Pending Resolution:** If either party declines, funds remain in the contract until a mutual decision is made.

### Decentralization & Security

- **Trustless Execution:**  
  Smart contracts enforce all rules without human intervention, eliminating risks associated with centralized control.

- **Immutable Code:**  
  Once deployed, the contracts cannot be altered, guaranteeing consistent behavior and integrity of the escrow process.

- **User Autonomy:**  
  Users maintain control over their funds until a consensus is reached, ensuring privacy and reducing exposure to fraud.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js (>= 14.x)](https://nodejs.org/)
- npm or yarn package manager
- [Hardhat](https://hardhat.org/) or [Truffle](https://www.trufflesuite.com/) (depending on your preferred development environment)
- Solidity compiler (version >= 0.8.x)
- Access to an Ethereum-compatible network (e.g., BNB Chain, Ethereum testnets)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/elektroscrow/Elektroscrow_v1.git
cd Elektroscrow_v1
npm install
# or, if you prefer yarn:
# yarn install
