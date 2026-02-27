# Appollo11-demo-api
Appollo11 Demo API

This is a minimal Node.js API created to simulate a realistic development environment for security testing and DevSecOps demonstrations.

The purpose of this repository is to demonstrate:

Dependency scanning (SCA)

Static analysis (SAST)

Secret detection

Container image security (via Docker)

Surface monitoring once deployed

Tech Stack

Node.js

Express

Docker

Why This Repo Exists

In real-world environments, security risks don’t stop at source code.
This repository is intentionally structured to represent a typical small production API that:

Contains third-party dependencies

Is containerized for deployment

Can be deployed publicly for surface exposure testing

This allows security platforms to demonstrate full lifecycle visibility:

Code → Build → Deploy → Expose

How to Run Locally

Install dependencies:

npm install

Start server:

node index.js

Server runs on port 3000.

Docker

Build the image:

docker build -t fullstack-demo-api .

Run:

docker run -p 3000:3000 fullstack-demo-api

Security Note

This repository is intended for demonstration and security testing purposes only
