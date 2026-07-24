# PRD — ZED Core Enterprise Operations Platform Website

## Document Control

- Product: ZED Core
- Domain: `zedcore.ir`
- Category: Enterprise operations and asset management platform
- Status: Draft
- Owner: Product / Marketing / Engineering
- Last Updated: 2026-07-24

## 1. Product Summary

ZED Core is a configurable enterprise platform designed to help organizations digitize, automate, and optimize operational processes across assets, maintenance, inventory, workflow approvals, and reporting.

The website must position ZED Core as a modern enterprise operations platform rather than a narrow maintenance-only solution. It should communicate business value clearly, establish trust with enterprise buyers, and generate qualified demo requests.

## 2. Problem Statement

Traditional operational software often isolates maintenance, workflows, inventory, forms, and reporting into disconnected tools. This creates fragmented processes, inconsistent visibility, and slower operational decision-making.

ZED Core addresses this by providing a unified operational foundation that connects enterprise processes with configurable digital workflows.

## 3. Product Vision

ZED Core is the digital operational platform for enterprise organizations.

It enables teams to:

- manage assets and maintenance operations
- automate workflows and approvals
- configure digital forms without heavy development effort
- monitor inventory and operational activity
- access shared reporting and enterprise visibility

## 4. Positioning Statement

ZED Core helps enterprise organizations manage assets, automate operations, and connect teams through one scalable platform.

### Positioning Message

- Not: another maintenance software
- Instead: a configurable operational platform for enterprise transformation

## 5. Target Audience

### Primary Audience

- large industrial organizations
- manufacturing companies
- energy and utilities
- banking and financial institutions
- government organizations
- facility management providers
- transportation companies
- healthcare organizations

### Buying and Influencing Roles

- maintenance leadership
- asset management office
- IT and enterprise systems stakeholders
- operations management
- procurement and vendor governance teams
- facilities and administration leaders

## 6. Website Objectives

The website must:

1. position ZED Core as an enterprise-ready platform
2. build trust with enterprise decision-makers
3. explain product capabilities in a clear and structured way
4. demonstrate measurable operational value
5. support lead generation for enterprise demos
6. support future international marketing expansion

## 7. Brand Strategy

### Brand Attributes

- enterprise-grade
- reliable
- intelligent
- configurable
- secure
- scalable
- future-ready

### Brand Tone

The brand voice should feel confident, professional, structured, and operationally credible.

## 8. Functional Requirements

### 8.1 Homepage Requirements

The homepage must include:

- a strong hero section with headline, subheadline, and primary/secondary CTAs
- a dashboard-style visual representation of enterprise operations
- a value proposition section for enterprise confidence
- platform capability modules
- dashboard preview section
- industry section
- trust/CTA section
- footer navigation and contact link structure

### 8.2 Navigation Requirements

The website navigation must support:

- Home
- Platform
- Modules
- Solutions
- Industries
- About
- Contact / Request Demo

### 8.3 Content Requirements

The site must communicate the following capabilities clearly:

- asset management
- maintenance workflows
- operational automation
- inventory management
- dynamic forms
- business rules and notifications
- reporting and analytics

## 9. Information Architecture

```text
/
├── Home
├── Platform
│   ├── Architecture
│   ├── Capabilities
│   └── Technology
├── Solutions
│   ├── Asset Management
│   ├── Maintenance Excellence
│   ├── Operational Automation
│   └── Digital Transformation
├── Modules
│   ├── EAM
│   ├── Workflow
│   ├── Forms
│   ├── Inventory
│   ├── Inbox
│   └── Reporting
├── Industries
├── Why ZED
├── About
└── Contact
```

## 10. Homepage Content Requirements

### Hero Section

- Title: ZED Core
- Secondary title: Enterprise Operations Platform
- Subtitle: A unified platform for managing assets, automating workflows, and transforming enterprise operations.
- Primary CTA: Request Enterprise Demo
- Secondary CTA: Explore Platform

### Hero Visual

The hero visual should present an enterprise dashboard with the following signals:

- asset health score
- maintenance KPIs
- open work orders
- workflow approvals
- inventory alerts
- operational notifications

### Visual Style

The visual style should feel aligned with modern enterprise systems such as:

- ServiceNow
- SAP Fiori
- Microsoft Dynamics

## 11. Core Capabilities

### 11.1 Asset Management

The platform should support:

- asset registry
- asset hierarchy
- locations
- technical specifications
- asset history
- lifecycle tracking

### 11.2 Maintenance Management

The platform should support:

- preventive maintenance
- work orders
- maintenance planning
- inspection management
- failure analysis
- maintenance history

### 11.3 Workflow Automation

The platform should support:

- visual workflow design
- approval processes
- rules engine
- conditional logic
- SLA management
- notifications
- task inbox

### 11.4 Dynamic Forms

The platform should support:

- form builder
- dynamic fields
- custom attributes
- templates
- digital documents
- data collection

### 11.5 Inventory Management

The platform should support:

- warehouses
- stock management
- spare parts control
- consumption tracking
- inventory transactions

### 11.6 Enterprise Inbox

The platform should support:

- tasks
- approvals
- notifications
- pending actions

### 11.7 Reporting and Analytics

The platform should support:

- dashboards
- KPIs
- reports
- asset performance monitoring
- maintenance analytics

## 12. Why ZED Core

ZED Core is built for enterprise complexity.

### Key Value Drivers

- Configurable: adapt processes without changing software
- Scalable: designed for large organizations and multiple operational domains
- Secure: enterprise-grade security architecture
- Integrated: connect with existing enterprise systems
- Extensible: ready for future modules and custom solutions

## 13. Competitive Differentiation

| Area                   | Traditional EAM | ZED Core |
| ---------------------- | --------------- | -------- |
| Asset Management       | Yes             | Yes      |
| Workflow Engine        | Limited         | Yes      |
| Dynamic Forms          | Limited         | Yes      |
| Business Rules         | Limited         | Yes      |
| Configurable Processes | Limited         | Yes      |
| Enterprise Inbox       | No              | Yes      |
| Multi-domain Platform  | No              | Yes      |

## 14. Industry Relevance

The site should support the following industry narratives:

- Manufacturing
- Energy
- Banking
- Government
- Healthcare

## 15. Enterprise Trust Requirements

The site should reinforce mission-critical trust by communicating:

- enterprise architecture
- security-first design
- audit trail support
- configurable processes
- integration readiness
- scalable database architecture

## 16. Technical Requirements

### Frontend

- Vue 3
- Vite
- TypeScript
- Composition API
- Tailwind CSS
- PWA-ready architecture

### Project Structure

```text
src/
├── components/
├── common/
├── sections/
├── cards/
├── diagrams/
├── layouts/
├── pages/
├── data/
├── router/
├── assets/
└── i18n/
```

### Localization and Expansion

The implementation should support:

- Persian / English
- RTL / LTR layouts
- CMS integration
- future documentation portal support

## 17. Success Criteria

The website is successful if it:

1. clearly explains the ZED Core platform and value
2. creates an enterprise-grade impression
3. supports demo request conversion
4. scales gracefully for future content and localization expansion

## 18. Open Questions and Notes

- final domain strategy for production deployment
- localization priority for Persian vs English content
- detailed content ownership for marketing and product copy
- final CTA destination and lead capture workflow

✓ API Ready

15. Technical Foundation
    Modern Enterprise Architecture

Show:

Frontend

Vue 3

        |

API Layer

.NET Enterprise Services

        |

Domain Layer

CQRS + Clean Architecture

        |

Data Layer

SQL Server

Capabilities:

Modular Architecture
Domain Driven Design
Extensible Platform
API First 16. Future Roadmap

Future capabilities:

Mobile Application
AI Assisted Maintenance
Predictive Analytics
IoT Integration
Customer Portal
API Marketplace
Enterprise Marketplace 17. Required Components

Reusable Components:

Navbar

HeroSection

PlatformArchitecture

CapabilityCard

ModuleCard

DashboardPreview

IndustryCard

ComparisonTable

TrustSection

CTASection

Footer

18. Design System

Style:

Enterprise Minimal

Colors:

Primary:

ZED Blue / Deep Navy

Supporting:

White
Gray
Dark Mode

Typography:

Modern enterprise style

Avoid:

Startup style gradients
Excessive animations
Consumer SaaS appearance 19. Animation

Use:

Fade
Slide
Smooth scrolling
Dashboard interactions

Avoid:

Heavy animations.

20. SEO

Title:

ZED Core | Enterprise Operations Platform

Description:

ZED Core is an enterprise platform for asset management, maintenance operations, workflow automation and digital transformation.

Keywords:

Enterprise Asset Management
EAM Software
CMMS
Maintenance Management
Workflow Automation
Asset Lifecycle Management
Enterprise Operations Platform 21. Development Phase 1

Implement:

Vue 3 + Vite project
Tailwind configuration
Responsive enterprise layout
Home page
Platform page
Module pages
Architecture diagrams
Mock enterprise dashboards
Dark mode
Routing
