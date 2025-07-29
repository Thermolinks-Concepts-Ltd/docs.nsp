# Nigeria Startup Portal (NSP) Ecosystem - Complete User Guide

> **Unlocking Nigeria's Innovation Potential with the Nigeria Startup Act**

## 🚨 Important Note

This documentation covers the **complete NSP ecosystem** consisting of:
- **nsp-admin**: Admin Dashboard (✅ Available)
- **nsp-api**: Backend API Services (✅ Available)  
- **NSP**: User-Facing Portal (❌ Missing/Incomplete)

The user-facing portal component appears to be missing from the current deployment, which is a critical gap in the ecosystem.

## Table of Contents

### Ecosystem Overview
1. [Ecosystem Overview](#ecosystem-overview)
2. [Getting Started](#getting-started)
3. [Technical Architecture](#technical-architecture)

### Backend API (nsp-api)
4. [Backend API Services](#backend-api-services)
5. [Database & Data Models](#database--data-models)
6. [API Endpoints Reference](#api-endpoints-reference)

### Admin Dashboard (nsp-admin)
7. [Authentication & User Management](#authentication--user-management)
8. [Dashboard & Analytics](#dashboard--analytics)
9. [Application Management](#application-management)
10. [User & Directory Management](#user--directory-management)
11. [Labelling Committee Features](#labelling-committee-features)
12. [Verification System](#verification-system)
13. [Nomination & Awards System](#nomination--awards-system)
14. [Messaging & Communication](#messaging--communication)
15. [Support System](#support-system)
16. [Settings & Configuration](#settings--configuration)
17. [File Management](#file-management)
18. [Programs Management](#programs-management)
19. [Profile Management](#profile-management)
20. [Export & Reporting](#export--reporting)

### System Integration & Deployment
21. [Advanced Features](#advanced-features)
22. [Missing User Portal](#missing-user-portal)
23. [Deployment Guide](#deployment-guide)
24. [Troubleshooting](#troubleshooting)

---

## Ecosystem Overview

The Nigeria Startup Portal (NSP) is a comprehensive ecosystem designed to manage Nigeria's startup landscape according to the Nigeria Startup Act. The system consists of three main components working together to provide a complete solution for startup labelling, verification, and ecosystem management.

### System Components

#### 1. Backend API (nsp-api) ✅
**NestJS-based API server** providing:
- Multi-entity user management (Startups, AIIs, VCs, Angel Investors)
- Application processing and labelling workflows
- Authentication and authorization services
- Email and SMS notification systems
- File management and document processing
- Analytics and reporting services
- Forum and content management
- Support ticketing system

#### 2. Admin Dashboard (nsp-admin) ✅  
**Next.js-based admin interface** providing:
- Application review and approval workflows
- User and entity management
- Labelling committee coordination
- Analytics and reporting dashboards
- System configuration and settings
- Content moderation and management
- Support ticket management

#### 3. User Portal (NSP) ❌ MISSING
**Expected user-facing portal** should provide:
- User registration and profile management
- Application submission interfaces
- Document upload capabilities
- Application status tracking
- Program discovery and registration
- Forum participation
- Article reading and interaction

### Current Ecosystem Status
- **Backend Infrastructure**: ✅ Fully implemented and robust
- **Admin Management**: ✅ Comprehensive admin capabilities
- **User Experience**: ❌ Missing critical user-facing components

### Key Features Across Ecosystem
- ✅ **Multi-entity Support**: Startups, AIIs, VCs, and angel investors
- ✅ **Role-based Access Control**: Comprehensive permission system
- ✅ **Application Processing**: Complete backend workflow for label applications
- ✅ **Committee Management**: Distributed review system
- ✅ **Real-time Analytics**: Live metrics and reporting
- ✅ **Document Management**: Secure file handling via AWS S3
- ✅ **Communication System**: Email, SMS, and broadcast messaging
- ✅ **Verification Workflows**: Multi-step verification processes
- ✅ **Export Capabilities**: Data export and reporting
- ❌ **User Interface**: Missing user-facing portal

---

## Getting Started

### System Requirements
- **Node.js**: Version 18 or higher
- **Git**: For version control (optional for non-contributors)
- **OpenSSL**: For generating secure keys (optional)

### Installation

1. **Clone the Repository**
   ```bash
   git clone git@github.com:Thermolinks-Concepts-Ltd/nsp-admin.git
   cd nsp-admin
   ```

2. **Environment Setup**
   ```bash
   # Copy environment template
   cp .env.local.example .env.local
   
   # Generate a secure secret key
   openssl rand -base64 12
   ```

3. **Configure Environment Variables**
   ```env
   # .env.local
   NEXTAUTH_SECRET={your-random-string-here}
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Install Dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

5. **Run Development Server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

6. **Access the Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

### Development Tools

For contributors, additional tools are available:

```bash
# Pre-commit hooks
pre-commit install

# Code formatting
yarn format

# Linting
yarn lint
yarn lint:fix
```

---

## Technical Architecture

### Technology Stack

**Frontend Framework**
- **Next.js 14**: React framework with App Router
- **React 18**: Latest React version with concurrent features
- **TypeScript**: Type-safe development

**UI & Styling**
- **Material-UI (MUI) v5**: Complete component library
- **Tailwind CSS**: Utility-first CSS framework
- **Emotion**: CSS-in-JS styling solution

**State Management**
- **Zustand**: Lightweight state management
- **React Query (TanStack Query)**: Server state management
- **React Hook Form**: Form state management

**Authentication & Security**
- **NextAuth.js**: Complete authentication solution
- **JWT**: Secure token-based authentication
- **Role-based Access Control**: Comprehensive permission system

**Data Visualization**
- **MUI Charts**: Material-UI chart components
- **Recharts**: Composable chart library

**Development Tools**
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **Pre-commit**: Automated code quality checks

### API Integration

**Backend Services**
- **Main API**: `https://nsa-api-g42te.ondigitalocean.app/api/v1`
- **Upload Server**: `https://api.startup.gov.ng`
- **Request Library**: Axios with custom error handling

**Image Optimization**
- **Next.js Image**: Automatic image optimization
- **CDN Integration**: Cloudflare IPFS and AWS S3 support

---

## Backend API Services

### Overview
The nsp-api serves as the backbone of the NSP ecosystem, providing comprehensive backend services built with NestJS. It handles all business logic, data persistence, authentication, and third-party integrations.

### Core Modules

#### Authentication Module
- **JWT-based authentication** with access and refresh tokens
- **Multi-strategy login**: Email and phone number support
- **Password management**: Reset, change, and validation
- **Account activation** with email verification
- **API key authentication** for external services

#### User Management Module
- **Multi-entity registration**: Startups, AIIs, VCs, Angel Investors
- **Profile management** with comprehensive business details
- **Role-based access control** (RBAC)
- **User connections** and networking features
- **State-based location management** for Nigerian states

#### Application Module
- **Labelling application workflows** for all entity types
- **Document validation** and management
- **Status tracking** (PENDING, APPROVED, DECLINED)
- **Approval workflows** with committee routing
- **Action logging** for audit trails

#### Communication Modules
- **Admin Messaging**: Broadcast and targeted communications
- **Email Service**: Template-based notifications
- **SMS Service**: Twilio integration for phone verification
- **Forum System**: Topics, replies, and reactions
- **Newsletter**: Subscription management

#### Content Management
- **Article system** with approval workflows
- **Comment and reaction** systems
- **Content moderation** capabilities
- **Rich text support** with validation

#### Support System
- **Ticketing system** with department routing
- **Priority management** (HIGH, MEDIUM, LOW)
- **Status tracking** (PENDING, IN_REVIEW, RESOLVED)
- **Admin assignment** and response tracking

#### Analytics Module
- **Application metrics** by status and type
- **User analytics** and engagement tracking
- **Export capabilities** for reporting
- **Dashboard data** aggregation

### Database Schema (PostgreSQL + Prisma)

#### Core Entities
- **Users**: Multi-type user management
- **Companies**: Business entity profiles
- **Applications**: Labelling applications
- **Documents**: File management and validation
- **Programs**: Program management and registration
- **Articles**: Content management
- **Tickets**: Support system
- **Messages**: Communication system

#### Key Relationships
- Users → Companies (one-to-many)
- Companies → Applications (one-to-many)
- Applications → Documents (one-to-many)
- Users → Tickets (one-to-many)
- Companies → Programs (one-to-many)

### File Management
- **AWS S3 integration** for secure storage
- **Document type validation**
- **File size restrictions** by type
- **Virus scanning** capabilities
- **CDN distribution** for performance

---

## Database & Data Models

### User Entity Types
```typescript
enum CompanyType {
  STARTUP = 'startup'
  AII = 'aii'  // Accelerator, Incubator, Innovation Institution
  VC = 'vc'   // Venture Capitalist
  ANGEL_INVESTOR = 'angel-investor'
  ANGEL_INDIVIDUAL = 'angel-individual'
}
```

### Application Statuses
```typescript
enum ApplicationStatus {
  PENDING = 'PENDING'
  APPROVED = 'APPROVED'
  DECLINED = 'DECLINED'
  RETURNED = 'RETURNED'
}
```

### Key Data Models

#### User Profile Structure
- Personal information and contact details
- Company affiliation and role
- Authentication credentials
- Profile completion tracking
- Verification status

#### Company Profile Structure
- Business registration details (RC number, CAC)
- Industry and sector classification
- Financial information (for investment entities)
- Products and services offered
- Geographic presence and contact information

#### Application Structure
- Entity type and classification
- Required documentation checklist
- Review workflow status
- Committee assignments
- Approval/rejection reasoning

---

## API Endpoints Reference

### Authentication Endpoints
```
POST /v1/auth/email/signin           # Email login
POST /v1/auth/phone/signin           # Phone login
POST /v1/auth/password/reset         # Request password reset
POST /v1/auth/password/change        # Change password
POST /v1/auth/activate               # Account activation
```

### User Management Endpoints
```
GET  /v1/users                       # List users (admin)
POST /v1/users                       # Create user (admin)
GET  /v1/users/profile               # Get user profile
PUT  /v1/users/profile               # Update profile
POST /v1/users/connections          # User connections
```

### Application Endpoints
```
GET  /v1/application/startup         # Startup applications
POST /v1/application/startup         # Submit startup application
GET  /v1/application/aii             # AII applications
POST /v1/application/aii             # Submit AII application
GET  /v1/application/vc              # VC applications
POST /v1/application/vc              # Submit VC application
GET  /v1/application/angel-investor  # Angel investor applications
POST /v1/application/angel-investor  # Submit angel application
```

### Program Management Endpoints
```
GET  /v1/programs                    # List programs
POST /v1/programs                    # Create program
PUT  /v1/programs/{id}               # Update program
GET  /v1/programs/{id}               # Get program details
POST /v1/programs/{id}/approve       # Approve program
```

### Content Management Endpoints
```
GET  /v1/articles                    # List articles
POST /v1/articles                    # Create article
PUT  /v1/articles/{id}               # Update article
POST /v1/articles/{id}/approve       # Approve article
GET  /v1/forum/topics                # Forum topics
POST /v1/forum/topics                # Create topic
```

### Support System Endpoints
```
GET  /v1/tickets                     # List tickets
POST /v1/tickets                     # Create ticket
PUT  /v1/tickets/{id}                # Update ticket
POST /v1/tickets/{id}/responses      # Add response
GET  /v1/departments                 # List departments
```

### Analytics Endpoints
```
GET  /v1/analytics/summary           # Dashboard summary
GET  /v1/analytics/applications      # Application metrics
GET  /v1/analytics/users             # User metrics
GET  /v1/analytics/export/{type}     # Export data
```

### File Management Endpoints
```
POST /v1/files/upload                # Upload file
GET  /v1/files/{id}                  # Download file
GET  /v1/documents/types             # Document types
POST /v1/documents/toggle-upload     # Toggle uploads
```

---

## Authentication & User Management

### User Roles System

The platform supports multiple user types with specific permissions:

**Administrative Roles**
- **`admin`**: Super administrator with full system access
- **`portal-coordinator`**: Manages applications and verifications
- **`portal-assistant`**: Limited admin access for support tasks
- **`labelling-committee`**: Reviews and approves labelling applications

**Committee Sub-groups**
- **`group-one`**: First committee group for application review
- **`group-two`**: Second committee group for application review  
- **`group-three`**: Third committee group for application review

**Business Entity Roles**
- **`startup`**: Startup companies applying for labels
- **`aii`**: Accelerators, Innovation Hubs, and Incubators
- **`angel-investor`**: Company-based angel investors
- **`angel-individual`**: Individual angel investors
- **`vc`**: Venture Capitalists

### Authentication Features

**Login System**
- Email and password authentication
- Session-based login with JWT tokens
- Automatic session renewal
- Secure logout functionality

**Password Management**
- Secure password reset via email
- Password strength requirements
- Change password functionality
- Account lockout protection

**Session Management**
- Persistent login sessions
- Automatic token refresh
- Secure session storage
- Route protection middleware

### User Account Features

**Profile Management**
- Personal information updates
- Profile photo upload and management
- Contact information management
- Account status control

**Security Settings**
- Two-factor authentication (UI prepared)
- Password change functionality
- Session management
- Login activity tracking

---

## Dashboard & Analytics

### Main Dashboard Overview

The dashboard provides role-specific views with comprehensive metrics:

**Admin Dashboard Features**
- Real-time application statistics
- User registration metrics by entity type
- Application status distribution
- Committee performance analytics
- Recent activity feeds

**Committee Dashboard Features**
- Assigned applications queue
- Review progress tracking
- Group performance metrics
- Pending actions summary

### Analytics & Metrics

**Application Analytics**
- Total applications by entity type
- Status distribution (pending, approved, rejected, returned)
- Application processing times
- Monthly/yearly trends

**User Analytics**
- User registration statistics
- Entity type distributions
- Geographic distribution
- User activity metrics

**Committee Analytics**
- Review performance by group
- Individual committee member statistics
- Approval rates and trends
- Processing time analytics

### Data Visualization

**Chart Types Available**
- Bar charts for comparative data
- Pie charts for distribution analysis
- Line charts for trend analysis
- Area charts for cumulative data

**Interactive Features**
- Drill-down capabilities
- Date range filtering
- Export chart data
- Real-time updates

### API Endpoints

```typescript
// Analytics endpoints
GET /api/analytics/application-summary
GET /api/analytics/group-status-count
GET /api/analytics/individual-count
```

---

## Application Management

### Application Types Supported

The system processes applications for the following entity types:

**Startup Applications**
- Company registration and business details
- Product/service information
- Team and founder details
- Financial information
- Business documents

**AII (Accelerators, Innovation Hubs, Incubators) Applications**
- Organization details and registration
- Program offerings and structure
- Portfolio companies
- Success metrics
- Certification documents

**Venture Capitalist Applications**
- Investment firm details
- Fund information and size
- Investment thesis and sectors
- Portfolio companies
- Regulatory compliance documents

**Angel Investor Applications**
- Individual or company investor details
- Investment capacity and history
- Sector preferences
- Track record documentation
- Financial verification

### Application Workflow

**1. Application Submission**
- Users submit applications through the portal
- System validates required information
- Documents are uploaded and verified
- Initial status set to "pending"

**2. Administrative Review**
- Portal coordinators review submissions
- Verify completeness and accuracy
- Update status to "verified" if approved
- Return for corrections if needed

**3. Committee Assignment**
- Verified applications assigned to committee groups
- Load balancing across committee members
- Notification sent to assigned reviewers
- Status updated to "under review"

**4. Committee Review**
- Committee members review assigned applications
- Add comments and feedback
- Vote on approval/rejection
- Track review progress

**5. Final Decision**
- Applications approved/rejected based on committee votes
- Notifications sent to applicants
- Labels issued for approved applications
- Appeals process available for rejections

### Application Status Management

**Status Definitions**
- **`pending`**: Newly submitted applications awaiting review
- **`verified`**: Verified by coordinators, ready for committee
- **`approved`**: Approved by committee, label issued
- **`rejected`**: Rejected by committee
- **`returned`**: Returned for corrections or additional information
- **`yet-to-apply`**: Registered entities that haven't applied

**Status Actions Available**
- Verify application (coordinator only)
- Approve application (committee/admin)
- Reject application (committee/admin)
- Return application (any reviewer)
- Pick for review (committee members)
- Bulk operations (admin only)

### Application Management Features

**Search & Filtering**
- Search by company name, RC number, or contact
- Filter by status, date range, entity type
- Sort by various criteria
- Advanced filter combinations

**Bulk Operations**
- Bulk approve multiple applications
- Bulk assign to committee groups
- Bulk status updates
- Bulk export functionality

**Application Details**
- Complete application information view
- Document viewing and download
- Comment history and timeline
- Reviewer notes and feedback

### API Endpoints

```typescript
// Application management endpoints
GET /api/startup/label/applications
GET /api/aii/label/applications
GET /api/vc/label/applications
GET /api/angel-investor/label/applications

// Application actions
POST /api/startup/label/applications/{id}/verify
POST /api/startup/label/applications/{id}/approve
POST /api/startup/label/applications/{id}/deny
PUT /api/startup/label/applications/{id}/pick

// Bulk operations
POST /api/startup/label/applications/approve
```

---

## User & Directory Management

### User Administration

**User Creation & Management**
- Create new admin users with specific roles
- Edit user information and contact details
- Assign and modify user roles
- Activate/deactivate user accounts
- Delete users (with proper safeguards)

**Role Assignment**
- Assign multiple roles to users
- Role-based permission inheritance
- Custom role definitions
- Non-transferable business entity roles

**User Profile Management**
- Personal information updates
- Contact details management
- Profile photo handling
- Account settings configuration

### Directory Features

The directory provides a comprehensive view of all registered entities:

**Entity Types in Directory**
- Startups with complete business profiles
- AIIs (Accelerators, Innovation Hubs, Incubators)
- Venture Capitalists with fund information
- Angel Investors (both company and individual)

**Directory Information Displayed**
- Company name and registration details
- Business category and description
- Contact information and office address
- Logo and branding materials
- Products and services offered
- Investment information (for investors)
- Label status and verification level

**Search & Discovery**
- Global search across all entities
- Filter by entity type and status
- Geographic filtering by location
- Industry and sector filtering
- Advanced search combinations

### Directory Management Features

**Profile Completeness**
- Monitor profile completion rates
- Identify missing information
- Send reminders for incomplete profiles
- Validate business information

**Status Tracking**
- Track label status for each entity
- Monitor verification progress
- View application history
- Update entity status

### API Endpoints

```typescript
// User management endpoints
GET /api/users
POST /api/users
PUT /api/users/{id}
DELETE /api/users/{id}

// Role management
GET /api/roles-permissions/roles
POST /api/users/{id}/roles
```

---

## Labelling Committee Features

### Committee Structure

**Committee Groups**
The system supports multiple committee groups for distributed review:
- **Group One**: First review group with specific expertise
- **Group Two**: Second review group for balanced perspectives
- **Group Three**: Third review group for specialized sectors

**Committee Member Management**
- Add committee members to specific groups
- Assign review responsibilities
- Track individual performance
- Manage committee member availability

### Application Assignment

**Distribution Methods**
- Automatic assignment based on workload
- Manual assignment for specialized reviews
- Round-robin distribution for fairness
- Sector-based assignment for expertise

**Workload Management**
- Monitor assignments per committee member
- Balance workload across groups
- Track review completion rates
- Identify bottlenecks in the process

### Review Process

**Individual Review Features**
- View assigned applications in queue
- Access complete application details
- Add review comments and feedback
- Submit approval/rejection decisions
- Track review progress and status

**Group Collaboration**
- View other group members' reviews
- Discuss applications within groups
- Consensus building tools
- Escalation procedures for disputes

### Committee Analytics

**Performance Metrics**
- Individual committee member statistics
- Group performance comparisons
- Review completion times
- Approval rate analysis

**Reporting Features**
- Monthly committee performance reports
- Individual member scorecards
- Application processing metrics
- Trend analysis and insights

### API Endpoints

```typescript
// Committee management endpoints
GET /api/labelling-committee/groups
GET /api/labelling-committee/assignments
POST /api/labelling-committee/assign
```

---

## Verification System

### Multi-entity Verification

The platform supports verification processes for different entity types:

**Startup Verification**
- Business registration verification
- Founder identity verification
- Product/service validation
- Financial information verification
- References and testimonials

**AII Verification**
- Organization registration verification
- Program validation and accreditation
- Portfolio company verification
- Impact metrics validation
- Regulatory compliance checks

**Investor Verification**
- Identity and capacity verification
- Financial capability assessment
- Investment history validation
- References and track record
- Regulatory compliance verification

### Verification Workflow

**1. Document Submission**
- Upload required documents
- Verify document authenticity
- Check document completeness
- Validate information accuracy

**2. Identity Verification**
- Verify personal/organizational identity
- Cross-reference with official databases
- Validate contact information
- Confirm business addresses

**3. Financial Verification**
- Verify financial statements
- Confirm investment capacity
- Validate funding sources
- Check credit and financial standing

**4. Reference Verification**
- Contact provided references
- Verify business relationships
- Confirm track record claims
- Validate testimonials

**5. Final Verification**
- Compile verification results
- Make final verification decision
- Issue verification certificates
- Update entity status

### Verification Status Management

**Status Levels**
- **Unverified**: Initial status for new entities
- **Pending**: Verification in progress
- **Verified**: Successfully verified entity
- **Rejected**: Failed verification process
- **Suspended**: Temporarily suspended verification

**Verification Actions**
- Initiate verification process
- Request additional documentation
- Approve/reject verification
- Update verification status
- Renew expired verifications

---

## Nomination & Awards System

### Nomination Categories

**Award Categories Management**
- Create and manage award categories
- Define category criteria and requirements
- Set nomination periods and deadlines
- Configure voting parameters

**Category Types**
- Best Startup of the Year
- Most Innovative Product/Service
- Outstanding Founder Award
- Best Accelerator/Incubator
- Top Investor Award
- Excellence in Innovation

### Nomination Process

**Nominee Management**
- Add nominees to categories
- Edit nominee information
- Remove nominees if needed
- Validate nominee eligibility

**Participant Selection**
- Choose eligible participant types
- Define voting permissions
- Set participant criteria
- Manage voter registration

**Voting System**
- Real-time vote counting
- Secure voting mechanisms
- Vote validation and verification
- Results compilation and reporting

### Nomination Features

**Category Administration**
- Activate/deactivate nomination categories
- Set nomination deadlines
- Configure voting periods
- Manage category visibility

**Export Capabilities**
- Export nominee lists
- Generate voting reports
- Create award certificates
- Export voting analytics

### API Endpoints

```typescript
// Nomination management endpoints
GET /api/nominations/categories
POST /api/nominations/categories
PUT /api/nominations/categories/{id}

// Nominee management
GET /api/nominations/categories/{id}/nominees
POST /api/nominations/categories/{id}/nominees

// Voting system
POST /api/nominations/categories/{id}/activate
GET /api/nominations/categories/{id}/votes
```

---

## Messaging & Communication

### Admin Messaging System

**Message Types**
- **Broadcast Messages**: System-wide announcements to all users
- **Targeted Messages**: Messages to specific user types
- **Direct Messages**: Personal messages to individual entities
- **System Notifications**: Automated system alerts

**Message Features**
- Rich text editor for message composition
- File and document attachments
- Message templates for common communications
- Scheduled message delivery
- Message status tracking (sent, delivered, read)

### Broadcast Messaging

**Audience Selection**
- All registered users
- Specific entity types (startups, AIIs, VCs, etc.)
- Users by status (verified, pending, etc.)
- Geographic targeting
- Custom user segments

**Message Composition**
- Rich text formatting options
- Image and document embedding
- Template-based messaging
- Preview functionality
- Draft save and resume

### Message Management

**Message Status Tracking**
- Draft messages
- Scheduled messages
- Sent messages
- Delivery confirmations
- Read receipts

**Message Analytics**
- Delivery rates
- Open rates
- Click-through rates
- Response rates
- Engagement metrics

### API Endpoints

```typescript
// Messaging endpoints
GET /api/admin/admin-messages
POST /api/admin/admin-messages
PUT /api/admin/admin-messages/{id}

// Email notifications
POST /api/mail/send-user-notification
```

---

## Support System

### Ticket Management

**Ticket Creation & Processing**
- Users can create support tickets
- Categorize tickets by department
- Set priority levels (high, medium, low)
- Assign tickets to admin staff
- Track ticket resolution progress

**Ticket Categories**
- Technical support
- Application assistance
- Account issues
- General inquiries
- Bug reports
- Feature requests

### Ticket Workflow

**1. Ticket Creation**
- User submits support request
- System generates unique ticket ID
- Automatic categorization based on issue type
- Initial priority assignment

**2. Ticket Assignment**
- Automatic assignment based on category
- Manual assignment by admin staff
- Workload balancing across support team
- Escalation for high-priority issues

**3. Ticket Resolution**
- Admin staff respond to tickets
- Add internal notes and comments
- Update ticket status and priority
- Request additional information if needed

**4. Ticket Closure**
- Resolution confirmation
- User satisfaction feedback
- Ticket archival
- Performance metrics collection

### Ticket Features

**Status Management**
- **Pending**: Newly created tickets
- **In Review**: Being processed by admin
- **Resolved**: Issue resolved
- **Cancelled**: Ticket cancelled by user
- **Escalated**: Escalated to higher priority

**Communication Features**
- Comment system for ticket updates
- File attachment support
- Email notifications for updates
- Internal notes for admin staff

### Department Management

**Support Departments**
- Technical Support
- Application Review
- Account Management
- General Support
- Billing Support

**Department Features**
- Assign tickets to specific departments
- Department-specific workflows
- Specialized response templates
- Department performance metrics

### API Endpoints

```typescript
// Ticket management endpoints
GET /api/admin/tickets
POST /api/tickets
PUT /api/tickets/{id}

// Ticket responses
GET /api/admin/tickets/{id}/responses
POST /api/admin/tickets/{id}/responses
```

---

## Settings & Configuration

### System Configuration

**General Settings**
- Application configuration
- System-wide parameters
- Feature toggles
- Maintenance mode settings

**Document Management Settings**
- Document type definitions
- File upload configurations
- Storage settings
- Security parameters

### Upload Configuration

**File Upload Settings**
- Enable/disable file uploads
- Supported file formats (PDF, DOCX, JPG, PNG)
- File size limitations
- Upload server configuration

**Document Types**
- Registration documents
- Financial statements
- Identity documents
- Business licenses
- Product documentation

### Business Configuration

**Entity Type Settings**
- Startup type definitions
- Business category management
- Industry classifications
- Sector definitions

**Application Settings**
- Required field configurations
- Validation rules
- Approval workflows
- Review criteria

### API Endpoints

```typescript
// Settings management endpoints
GET /api/documents/document-types
POST /api/documents/document-types

// Upload configuration
POST /api/documents/toggle-on-upload
POST /api/documents/toggle-off-upload
```

---

## File Management

### File Upload System

**Supported File Types**
- **Documents**: PDF, DOCX, DOC
- **Images**: JPG, JPEG, PNG, GIF
- **Spreadsheets**: XLS, XLSX
- **Presentations**: PPT, PPTX

**File Size Restrictions**
- Images: Maximum 3MB
- Documents: Maximum 1MB
- System configurable limits
- Compression for large files

### Upload Features

**Upload Interface**
- Drag and drop functionality
- Multiple file selection
- Upload progress tracking
- Error handling and retry

**File Processing**
- Automatic file validation
- Image compression and optimization
- Document scanning and indexing
- Virus scanning and security checks

### File Storage

**Storage Integration**
- AWS S3 integration for secure storage
- CDN distribution for fast access
- Backup and redundancy
- Geographic distribution

**File Organization**
- Entity-based file organization
- Application-specific folders
- Document type categorization
- Secure access controls

### File Security

**Access Control**
- Role-based file access
- Secure download links
- Time-limited access tokens
- Audit trail for file access

**Security Features**
- File type validation
- Malware scanning
- Encryption at rest
- Secure transmission protocols

### API Endpoints

```typescript
// File upload endpoints
POST /api/uploads
GET /api/uploads/{id}
DELETE /api/uploads/{id}
```

---

## Programs Management

### Program Features

**Program Creation & Management**
- Create new programs and initiatives
- Define program objectives and criteria
- Set program timelines and deadlines
- Manage program categories and types

**Program Types**
- Incubation programs
- Acceleration programs
- Funding programs
- Mentorship programs
- Skills development programs
- Market access programs

### Program Administration

**Program Approval Workflow**
- Submit program proposals
- Administrative review process
- Approval/rejection decisions
- Program publication and visibility

**Program Configuration**
- Program details and descriptions
- Eligibility criteria
- Application requirements
- Selection processes

### Program Features

**Schedule Management**
- Program start and end dates
- Demo day scheduling
- Milestone tracking
- Event calendar integration

**Registration Management**
- External registration URLs
- Application form integration
- Participant tracking
- Registration analytics

### API Endpoints

```typescript
// Program management endpoints
GET /api/programs
POST /api/programs
PUT /api/programs/{id}

// Program actions
POST /api/programs/{id}/approve
POST /api/programs/{id}/decline
```

---

## Profile Management

### User Profile Features

**Personal Information**
- Name and contact details
- Professional information
- Organization affiliation
- Role and responsibilities

**Account Settings**
- Email preferences
- Notification settings
- Privacy controls
- Account status

### Security Settings

**Password Management**
- Change password functionality
- Password strength requirements
- Password history tracking
- Account lockout protection

**Two-Factor Authentication**
- 2FA setup and configuration
- Backup codes generation
- Recovery options
- Security notifications

### Profile Customization

**Appearance Settings**
- Theme selection (light/dark mode)
- Interface preferences
- Language settings
- Accessibility options

**Profile Photo**
- Upload profile pictures
- Image cropping and resizing
- Avatar generation
- Photo management

### API Endpoints

```typescript
// Profile management endpoints
GET /api/profile
PUT /api/profile
POST /api/profile/photo

// Security settings
POST /api/profile/change-password
POST /api/profile/2fa/setup
```

---

## Export & Reporting

### Data Export Features

**Export Formats**
- CSV for spreadsheet analysis
- Excel for advanced data manipulation
- PDF for official reports
- JSON for data integration

**Export Types**
- Application data export
- User directory export
- Analytics data export
- Custom filtered exports

### Report Generation

**Automated Reports**
- Daily application summaries
- Weekly performance reports
- Monthly analytics reports
- Annual comprehensive reports

**Custom Reports**
- User-defined parameters
- Date range selection
- Filter-based reports
- Scheduled report generation

### Export Options

**Data Selection**
- Select specific data fields
- Filter by date ranges
- Choose entity types
- Apply status filters

**Delivery Methods**
- Direct download
- Email delivery
- Scheduled exports
- API-based retrieval

### API Endpoints

```typescript
// Export endpoints
GET /api/export/applications/csv
GET /api/export/users/csv
GET /api/export/analytics/{type}

// Report generation
POST /api/reports/generate
GET /api/reports/{id}/download
```

---

## Missing User Portal

### Critical Gap Analysis

The NSP ecosystem is currently missing its **user-facing portal component**, which represents a significant gap in the complete solution. While the backend API (nsp-api) and admin dashboard (nsp-admin) are fully implemented, users currently have no way to:

### Missing User Functionality
❌ **User Registration**: No interface for entities to register  
❌ **Application Submission**: No way to submit labelling applications  
❌ **Profile Management**: No user-facing profile editing  
❌ **Document Upload**: No interface for required document submission  
❌ **Status Tracking**: No way to track application progress  
❌ **Program Discovery**: No interface to browse available programs  
❌ **Forum Participation**: No user interface for community discussions  
❌ **Article Reading**: No platform for consuming content  
❌ **Support Requests**: No user-friendly ticket submission  

### Impact on User Experience
- **Registration Bottleneck**: Users cannot self-register, requiring manual admin creation
- **Application Delays**: Applications must be submitted through admin interface
- **Poor User Engagement**: No direct user interaction with the platform
- **Support Overhead**: All user actions require admin intervention
- **Limited Adoption**: Barrier to entry prevents ecosystem growth

### Required User Portal Features

#### 1. User Registration & Onboarding
- Multi-step registration forms for each entity type
- Email and phone verification workflows
- Profile completion guidance
- Welcome tutorials and orientation

#### 2. Dashboard & Profile Management
- Personalized user dashboard
- Profile editing and management
- Company information updates
- Document management interface

#### 3. Application Management
- Application submission interfaces
- Document upload with progress tracking
- Application status monitoring
- Resubmission capabilities for returned applications

#### 4. Program Discovery & Registration
- Browse available programs
- Filter by industry, type, and location
- Program registration and tracking
- Calendar integration for important dates

#### 5. Community Features
- Forum participation interface
- Article reading and commenting
- User connections and networking
- Event notifications and updates

#### 6. Support & Communication
- Support ticket creation and tracking
- Message center for admin communications
- Notification management
- Help documentation and FAQs

### Technical Requirements for User Portal

#### Recommended Technology Stack
- **Framework**: Next.js 14 (consistency with admin dashboard)
- **UI Library**: Material-UI v5 (shared component library)
- **Authentication**: NextAuth.js with JWT integration
- **State Management**: Zustand + React Query
- **Forms**: React Hook Form with validation
- **File Upload**: React Dropzone with progress tracking

#### Integration Requirements
- **API Integration**: Full integration with existing nsp-api endpoints
- **Shared Authentication**: JWT token compatibility with admin dashboard
- **Responsive Design**: Mobile-first approach for accessibility
- **Performance**: Optimized for users with varying internet speeds

#### Development Priority
1. **Phase 1**: Core registration and profile management
2. **Phase 2**: Application submission and tracking
3. **Phase 3**: Program discovery and community features
4. **Phase 4**: Advanced features and optimizations

### Immediate Action Required
The missing user portal represents a **critical blocker** for the NSP ecosystem launch. Without it, the platform cannot serve its intended purpose of facilitating Nigeria's startup ecosystem according to the Startup Act.

**Recommended Next Steps:**
1. **Assess existing user portal code** (if available in different repository)
2. **Plan user portal development** with phased approach
3. **Establish shared component library** between admin and user interfaces
4. **Implement user authentication flow** compatible with existing backend
5. **Develop core user registration and application workflows**

---

## Advanced Features

### Real-time Updates

**Live Data Synchronization**
- Real-time application status updates
- Live notification system
- Instant messaging delivery
- Dynamic dashboard updates

**WebSocket Integration**
- Real-time event streaming
- Live notification delivery
- Instant status synchronization
- Dynamic content updates

### State Management

**Application State**
- Zustand for local state management
- React Query for server state
- Persistent state storage
- Optimistic updates

**Performance Optimization**
- Code splitting and lazy loading
- Image optimization and caching
- Bundle size optimization
- Performance monitoring

### Search & Filtering

**Advanced Search Features**
- Global search across all data
- Intelligent autocomplete
- Fuzzy search capabilities
- Search result highlighting

**Filter Combinations**
- Multiple filter criteria
- Saved filter presets
- Dynamic filter options
- Filter result caching

### Pagination & Performance

**Efficient Data Loading**
- Server-side pagination
- Virtual scrolling for large datasets
- Lazy loading of components
- Optimized database queries

**Caching Strategy**
- React Query caching
- Browser storage utilization
- CDN integration
- API response caching

---

## Deployment Guide

### Production Deployment

**Docker Deployment**
The application includes Docker configuration for easy deployment:

```dockerfile
# Build and run with Docker
docker build -t nsp-admin .
docker run -p 3000:3000 nsp-admin
```

**Docker Compose**
For staging environments:

```yaml
# docker-compose.staging.yaml
version: "3.8"
services:
  nsp-admin:
    build: ./
    image: nsp-admin:latest
    container_name: nsp-admin
    environment:
      - NODE_ENV=production
    env_file:
      - .env.local
    restart: always
```

### Environment Configuration

**Production Environment Variables**
```env
# Production configuration
NODE_ENV=production
NEXTAUTH_SECRET={secure-production-secret}
NEXTAUTH_URL=https://your-domain.com

# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://nsa-api-g42te.ondigitalocean.app/api/v1
NEXT_PUBLIC_UPLOAD_SERVER=https://api.startup.gov.ng

# Additional production settings
NEXT_TELEMETRY_DISABLED=1
```

### Deployment Steps

**1. Build Process**
```bash
# Install production dependencies
yarn install --production

# Build the application
yarn build

# Start production server
yarn start
```

**2. Server Configuration**
- Configure reverse proxy (Nginx/Apache)
- Set up SSL certificates
- Configure domain and DNS
- Set up monitoring and logging

**3. Database Setup**
- Configure database connections
- Run database migrations
- Set up database backups
- Configure connection pooling

### Performance Optimization

**Build Optimization**
- Bundle analysis and optimization
- Code splitting configuration
- Static asset optimization
- CDN configuration

**Runtime Optimization**
- Memory management
- CPU optimization
- Network optimization
- Caching strategies

---

## Troubleshooting

### Common Issues

**Authentication Issues**
- **Problem**: Login failures
- **Solution**: Check NEXTAUTH_SECRET and URL configuration
- **Prevention**: Verify environment variables are properly set

**File Upload Issues**
- **Problem**: Upload failures
- **Solution**: Check file size limits and network connectivity
- **Prevention**: Implement proper error handling and user feedback

**Performance Issues**
- **Problem**: Slow loading times
- **Solution**: Enable caching and optimize queries
- **Prevention**: Monitor performance metrics and optimize regularly

### Error Handling

**Client-side Errors**
- Error boundary implementation
- User-friendly error messages
- Error reporting and logging
- Graceful degradation

**Server-side Errors**
- API error handling
- Database connection issues
- Network timeout handling
- Retry mechanisms

### Development Issues

**Build Errors**
- TypeScript compilation issues
- Dependency conflicts
- Environment configuration problems
- Missing dependencies

**Runtime Errors**
- Memory leaks
- Performance bottlenecks
- State management issues
- Component lifecycle problems

### Support & Maintenance

**Regular Maintenance**
- Security updates
- Dependency updates
- Performance monitoring
- Backup verification

**Monitoring & Logging**
- Application performance monitoring
- Error tracking and reporting
- User activity logging
- System health monitoring

---

## API Reference

### Authentication Endpoints

```typescript
// Authentication
POST /api/auth/signin          // User login
POST /api/auth/signout         // User logout
POST /api/auth/reset-password  // Password reset
```

### Application Management Endpoints

```typescript
// Applications
GET    /api/applications              // List applications
GET    /api/applications/{id}         // Get application details
PUT    /api/applications/{id}         // Update application
POST   /api/applications/{id}/approve // Approve application
POST   /api/applications/{id}/reject  // Reject application
```

### User Management Endpoints

```typescript
// Users
GET    /api/users                 // List users
POST   /api/users                 // Create user
GET    /api/users/{id}           // Get user details
PUT    /api/users/{id}           // Update user
DELETE /api/users/{id}           // Delete user
```

### Analytics Endpoints

```typescript
// Analytics
GET /api/analytics/summary        // Dashboard summary
GET /api/analytics/applications   // Application metrics
GET /api/analytics/users         // User metrics
GET /api/analytics/committee     // Committee metrics
```

---

## Conclusion

The Nigeria Startup Portal Admin Dashboard is a comprehensive platform designed to efficiently manage Nigeria's startup ecosystem according to the Nigeria Startup Act. With its robust feature set, role-based access control, and scalable architecture, it provides all the tools necessary for effective administration of startup labelling, verification, and management processes.

### Key Benefits

- **Comprehensive Management**: Complete workflow for all aspects of startup ecosystem management
- **Scalable Architecture**: Built to handle growing numbers of applications and users
- **Security First**: Robust security measures and role-based access control
- **User-Friendly Interface**: Intuitive design for efficient daily operations
- **Real-time Analytics**: Live insights for data-driven decision making
- **Mobile Responsive**: Access from any device, anywhere
- **Export Capabilities**: Comprehensive reporting and data export features

### Future Enhancements

The platform is designed for continuous improvement with planned enhancements including:
- Enhanced AI-powered application review assistance
- Advanced analytics and predictive insights
- Mobile application for on-the-go access
- Integration with additional government databases
- Expanded internationalization support
- Enhanced automation capabilities

---

*For technical support or questions about this documentation, please contact the development team or create a support ticket through the platform.*

**Version**: 1.0  
**Last Updated**: January 2025  
**Documentation Maintained By**: NSP Development Team
