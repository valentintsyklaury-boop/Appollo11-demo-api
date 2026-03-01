🚀 Appollo11 API

Appollo11 is a minimal Node.js API designed to simulate a realistic production environment for DevSecOps and application security lifecycle demonstrations.

This repository exists to demonstrate how modern security tooling should provide visibility across the full software lifecycle:

Code → Build → Deploy → Expose

🎯 Purpose

Most teams begin security at the repository level.
However, risk propagates beyond source code into container images and publicly exposed infrastructure.

Appollo11 is structured to represent a small but production-like service that enables demonstration of:

Dependency vulnerability scanning (SCA)

Static analysis (SAST)

Secret detection

Container image scanning  

Surface / exposure monitoring (once deployed)

🛠 Tech Stack

Node.js

Express

Docker

🧩 Architecture Overview

The application:

Uses third-party npm dependencies

Is containerized using Docker

Can be deployed publicly to simulate production exposure

This allows testing and demonstration of end-to-end security coverage.

▶ Running Locally

Install dependencies:

npm install

Start server:

npm start

Server runs on port 3000.

🐳 Docker

Build image:

docker build -t appollo11-api .

Run container:

docker run -p 3000:3000 appollo11-api

🔐 Security Disclaimer

This project is intended strictly for demonstration and security testing purposes. 
