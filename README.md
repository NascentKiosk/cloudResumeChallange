
# Cloud Resume Challenge – Azure

A fully automated cloud-based resume website built on Microsoft Azure using serverless technologies, Infrastructure as Code, and CI/CD practices.

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

## Architecture

```text
User visits website
        │
        ▼
┌─────────────────────────┐
│ Azure Static Web Apps   │
│ Resume Frontend         │
└──────────┬──────────────┘
           │ HTTPS Request
           ▼
┌─────────────────────────┐
│ Azure Functions         │
│ Visitor Counter API     │
└──────────┬──────────────┘
           │ Azure SDK
           ▼
┌─────────────────────────┐
│ Azure Cosmos DB         │
│ Visitor Count Storage   │
└─────────────────────────┘
```

---

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

---

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

##  Repository Structure

```text
cloud-resume/
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│
├── api/
│   ├── visitor-counter/
│   ├── package.json
│   └── ...
│
├── infra/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── providers.tf
│
├── .github/
│   └── workflows/
│       ├── frontend.yml
│       ├── api.yml
│       └── infra.yml
│
└── README.md
```

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

### Container

```text
visitor-count
```

### Document Structure

```json
{
    "id": "homepage",
    "count": 0
}
```

### Partition Key

```text
/id
```

---

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

---

### Infrastructure Deployment

Triggered when changes are pushed to:

```text
infra/**
```

Workflow:

```text
Terraform Init
    ↓
Terraform Plan
    ↓
Terraform Apply
```

or

```text
Validate Bicep Templates
    ↓
Deploy Infrastructure
```

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
