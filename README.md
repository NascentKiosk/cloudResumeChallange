![Azure](https://img.shields.io/badge/Azure-Cloud-blue)
![Python](https://img.shields.io/badge/Python-3.11-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

# Cloud Resume Challenge – Azure
A complete implementation of the Cloud Resume Challenge on Azure using a serverless architecture, Infrastructure as Code, automated testing, and CI/CD pipelines.
IBuilt using an Azure for Students subscription, with deployment workflows adapted to work within Microsoft Entra ID limitations.

---

## Project Overview

This project showcases the end-to-end development and deployment of a cloud-native application. It combines frontend development, backend APIs, database integration, automated deployments, and infrastructure provisioning to demonstrate practical cloud engineering skills.

The application consists of:

-  A static resume website
-  A serverless API for tracking visitors
-  A database that stores the visitor count
-  A CI/CD pipeline for automated deployments
-  Infrastructure as Code for repeatable Azure provisioning

---

## Architecture Diagram
This diagram provides an overview of the Azure services and deployment workflows used to build and automate the solution.
<p align="center">
  <img src="images/architecture.png"
       alt="Cloud Resume Challenge Azure Architecture"
       width="1000">
</p>


## Application Flow

```text
User visits the resume website
        ↓
Frontend sends a request to the visitor counter API
        ↓
Azure Function retrieves the current count from Cosmos DB
        ↓
The count is incremented and updated in the database
        ↓
The updated visitor count is returned to the frontend
        ↓
The website displays the latest visitor count
```
## Sequence Diagram

This diagram illustrates how a visitor request flows through the application and how the visitor counter is updated.
<p align="center">
  <img src="images/sequencediagram.png"
       alt="Cloud Resume Challenge Azure Sequence Diagram"
       width="1000">
</p>
---

## Repository Structure

```text
.
├── frontend/          # Static website files
├── backend/           # Azure Function and tests
├── images/            # Diagrams and screenshots
└── .github/workflows/ # CI/CD pipelines
```

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- Azure Static Web Apps

### Backend
- Azure Functions
- HTTP Trigger Functions
- Azure SDK

### Database
- Azure Cosmos DB (SQL API)

### DevOps & Automation
- GitHub Actions
- CI/CD Pipelines
- GitHub Secrets

### Infrastructure as Code
- Terraform / Bicep

### Version Control
- Git
- GitHub

---
## Azure Services Used

| Service | Purpose |
|----------|----------|
| Azure Static Web Apps | Hosts the resume frontend |
| Azure Functions | Provides the visitor counter API |
| Azure Cosmos DB | Stores visitor count data |
| GitHub Actions | Automates deployment workflows |
| Terraform / Bicep | Provisions Azure infrastructure |

---

## Cosmos DB Design

### Database

```text
resume-db
```
## CI/CD Pipeline

This project uses GitHub Actions to automate deployments.

### Frontend Deployment

Triggered when changes are pushed to:

```text
frontend/**
```

Workflow:

```text
Checkout Code
    ↓
Build (if required)
    ↓
Deploy to Azure Static Web Apps
```

---

### API Deployment

Triggered when changes are pushed to:

```text
api/**
```

Workflow:

```text
Checkout Code
    ↓
Install Dependencies
    ↓
Run Tests
    ↓
Deploy Azure Function
```
## Azure for Students Challenges

The Azure for Students subscription restricted Microsoft Entra ID permissions required for Service Principals and OIDC authentication.
To maintain automated deployments:
- Backend deployments use an Azure Function publish profile stored as a GitHub Secret.
- Frontend deployments authenticate using Azure Storage Account Access Keys.
- No credentials are committed to source control.</br>

This experience reinforced the importance of adapting solutions to real-world constraints while maintaining secure and automated workflows.

---

## Security Considerations

This project follows several cloud security best practices:

- Secrets are stored securely using GitHub Secrets.
- Sensitive credentials are never committed to source control.
- CORS is configured to restrict API access to the frontend domain.
- Managed Identity can be used to eliminate the need for database keys.
- Infrastructure changes are version-controlled and auditable.

---

## Future Improvements

Potential enhancements include:

- Custom domain configuration
- HTTPS certificate management
- Azure Application Insights monitoring
- Managed Identity authentication
- Automated testing coverage
- Enhanced frontend styling and responsiveness
- Infrastructure validation and policy checks

---

## Skills Demonstrated

Through this project, I demonstrate experience with:

- Cloud Architecture
- Microsoft Azure
- Serverless Computing
- REST APIs
- Frontend Development
- Azure Cosmos DB
- Infrastructure as Code
- CI/CD Automation
- GitHub Actions
- DevOps Practices
- Security Best Practices

---

## Contact

If you'd like to connect or discuss this project, feel free to reach out through the contact information provided on the resume website.

---

> This project was built as a hands-on demonstration of designing, deploying, and automating a complete cloud-native application using Azure services and modern DevOps practices.
