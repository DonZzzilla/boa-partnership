# Information Architecture Diagram — BOA Knowledge Base

**Document Version:** 1.0
**Format:** Text-based site structure visualization

---

## Full Site Structure

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                        BOA PARTNERSHIP KNOWLEDGE BASE                       ║
║                              (Root: /kb/)                                   ║
╚══════════════════════════════════════════════════════════════════════════════╝
                                    │
        ┌───────────┬───────────┬────┴────┬───────────┬───────────┐
        │           │           │         │           │           │
        ▼           ▼           ▼         ▼           ▼           ▼
   ┌─────────┐ ┌─────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌──────────┐
   │  HOME   │ │ONBOARD- │ │  SOPs  │ │  FAQs  │ │VOLUNTEER│ │ARCHIVES  │
   │         │ │  ING    │ │        │ │        │ │RESOURCES│ │          │
   └─────────┘ └────┬────┘ └───┬────┘ └───┬────┘ └────┬───┘ └────┬─────┘
                    │          │          │           │          │
        ┌───────┬──┴──┐   ┌───┴───┐  ┌──┴──┐   ┌───┴───┐  ┌───┴───┐
        │       │     │   │       │  │     │   │       │  │       │
        ▼       ▼     ▼   ▼       ▼  ▼     ▼   ▼       ▼  ▼       ▼
     ┌──────┐┌─────┐┌───┐┌────┐┌───┐┌───┐┌──┐┌────┐┌───┐┌────┐┌──────┐
     │PART- ││VOL- ││STA││EVEN││FIN││GEN││EVN││SIGN││ROLE││MIN- ││REPORT│
     │NER   ││UNTEE││FF ││TS  ││ANCE││ERL││TS  ││UP  ││GUID││UTES  ││S     │
     └──┬───┘└──┬──┘└─┬─┘└─┬──┘└─┬─┘└─┬─┘└─┬─┘└─┬──┘└─┬─┘└─┬──┘└──┬───┘
        │       │     │    │     │    │    │    │     │    │      │
   ┌────┼────┐ ┌┼───┐ │ ┌─┼──┐ ┌┼──┐ │ ┌─┼──┐ ┌┼──┐ ┌─┼──┐ ┌┼───┐ ┌┼──┐
   │    │    │ ││   │ │ │ │  │ ││  │ │ │ │  │ ││  │ │ │  │ ││   │ ││  │
   ▼    ▼    ▼ ▼▼   │ │ ▼ ▼  ▼ ▼▼  │ │ ▼ ▼  ▼ ▼▼  ▼ ▼ ▼  ▼ ▼▼   ▼ ▼▼  │
 ┌────┐┌───┐┌──┐┌──┐│┌──┐┌──┐┌──┐┌──┐│┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐
 │Wel-││Fir││Ke││Ha│││Tr││To││Ev││Bu│││Ev││Vo││Fi││Ev││Re││Ph││Fi││Im│
 │come││st ││y ││nd│││ai││ol││en││dg│││en││lu││na││en││gi││ot││na││pa│
 │    ││30 ││Co││bo│││ni││s ││t ││et│││ts ││nt││nc││t ││st││os││nc││ct│
 │    ││Day││nt││ok│││ng││& ││Pl││Re│││   ││ee││e ││Se││er││  ││e ││   │
 │    ││s  ││ac││  │││  ││Sy││an││qu│││   ││r ││  ││tu││De││  ││  ││   │
 │    ││   ││ts││  │││  ││st││ni││es│││   ││  ││  ││p ││sk││  ││  ││   │
 │    ││   ││  ││  │││  ││em││ng││ts│││   ││  ││  ││Cr││  ││  ││  ││   │
 │    ││   ││  ││  │││  ││s ││  ││  │││   ││  ││  ││ew││  ││  ││  ││   │
 └────┘└───┘└──┘└──┘│└──┘└──┘└──┘└──┘│└──┘└──┘└──┘└──┘└──┘└──┘└──┘└──┘
                     │
                     │    ┌──────────────────────────────────────────┐
                     │    │           LEADERSHIP (/kb/leadership/)    │
                     │    └──────────────────┬───────────────────────┘
                     │                       │
                     │     ┌─────────┬───────┼───────┬─────────┐
                     │     │         │       │       │         │
                     │     ▼         ▼       ▼       ▼         ▼
                     │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
                     │  │GOVER-│ │STRAT-│ │ORG   │ │FINANCE│ │LEGAL │
                     │  │NANCE │ │EGY   │ │STRUCT│ │      │ │      │
                     │  └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘
                     │     │        │        │        │        │
                     │  ┌──┴──┐ ┌──┴──┐ ┌──┴──┐ ┌──┴──┐ ┌──┴──┐
                     │  │     │ │     │ │     │ │     │ │     │
                     │  ▼     ▼ ▼     ▼ ▼     ▼ ▼     ▼ ▼     ▼
                     │┌────┐┌───┐┌───┐┌──┐┌───┐┌──┐┌───┐┌───┐┌────┐
                     ││By- ││Cha││Cur││OKR││Org││RA││Bud││Aud││Part│
                     ││law ││rte││rnt││s  ││Ch-││CI││get││it ││ner │
                     ││s   ││r  ││Pla││   ││art││  ││   ││   ││Agrm│
                     │└────┘└───┘└───┘└──┘└───┘└──┘└───┘└───┘└────┘
                     │
                     ▼
              ┌──────────────┐
              │    META      │
              │  (/kb/meta/) │
              └──────┬───────┘
                     │
          ┌──────┬───┴───┬──────┬──────┐
          │      │       │      │      │
          ▼      ▼       ▼      ▼      ▼
       ┌─────┐┌─────┐┌─────┐┌─────┐┌─────┐
       │Guide││Style││Templ││Review││Change│
       │     ││Guide││ates ││Sched ││log  │
       └─────┘└─────┘└─────┘└─────┘└─────┘
```

---

## Hierarchical Tree View (Simplified)

```
BOA Knowledge Base
│
├── 🏠 Home
│   ├── Welcome & Overview
│   ├── Quick Links (Top 5 Resources)
│   ├── Recently Updated
│   └── Announcements
│
├── 🚀 Onboarding
│   ├── Partner Onboarding
│   │   ├── Welcome Guide
│   │   ├── Partnership Agreement Template
│   │   ├── First 30 Days Checklist
│   │   ├── Key Contacts Directory
│   │   └── Systems Access Request
│   ├── Volunteer Onboarding
│   │   ├── Volunteer Handbook
│   │   ├── Role Descriptions
│   │   │   ├── Event Coordinator
│   │   │   ├── Communications Lead
│   │   │   ├── Finance Tracker
│   │   │   └── Outreach Representative
│   │   ├── Training Modules
│   │   │   ├── BOA Overview
│   │   │   ├── Tools & Systems
│   │   │   ├── Code of Conduct
│   │   │   └── Safety & Compliance
│   │   └── Welcome Checklist
│   └── Staff Onboarding
│       ├── Team Structure Overview
│       ├── Tool & Credentials Setup
│       └── First Week Schedule
│
├── 📋 SOPs
│   ├── Events
│   │   ├── Event Planning
│   │   ├── Venue Setup
│   │   ├── Day-of Execution
│   │   └── Post-Event Wrap-Up
│   ├── Finance
│   │   ├── Budget Requests
│   │   ├── Expense Reporting
│   │   ├── Sponsorship Agreements
│   │   └── Refund Processing
│   ├── Communications
│   │   ├── Social Media Posting
│   │   ├── Press Releases
│   │   ├── Internal Newsletters
│   │   └── Escalation Matrix
│   ├── Partnerships
│   │   ├── Partner Intake
│   │   ├── Agreement Renewal
│   │   └── Communication Cadence
│   └── HR & Volunteers
│       ├── Volunteer Recruitment
│       ├── Volunteer Scheduling
│       ├── Incident Reporting
│       └── Recognition Program
│
├── ❓ FAQs
│   ├── General Partnership FAQ
│   ├── Events FAQ
│   ├── Volunteer FAQ
│   ├── Finance FAQ
│   └── Technical Systems FAQ
│
├── 🤝 Volunteer Resources
│   ├── Volunteer Portal
│   │   ├── How to Sign Up
│   │   ├── Shift Calendar
│   │   └── Hour Tracking
│   ├── Role Guides
│   │   ├── Event Setup Crew
│   │   ├── Registration Desk
│   │   ├── Photography Team
│   │   └── Social Media Runners
│   ├── Training Library
│   │   ├── Video Tutorials Index
│   │   ├── Quick Reference Cards
│   │   └── Certification Checklists
│   ├── Recognition
│   │   ├── Volunteer of the Month
│   │   ├── Annual Awards
│   │   └── Milestone Badges
│   └── Feedback
│       ├── How to Submit Feedback
│       ├── Suggestion Form Template
│       └── Quarterly Survey Archive
│
├── 📜 Historical Archives
│   ├── Meeting Minutes
│   │   ├── Board Meetings
│   │   ├── Partner Meetings
│   │   └── Committee Meetings
│   ├── Annual Reports
│   │   ├── Year in Review
│   │   ├── Financial Summaries
│   │   └── Impact Reports
│   ├── Past Events
│   │   ├── Event Photos
│   │   ├── Event Reports
│   │   ├── Attendance Records
│   │   └── Lessons Learned
│   ├── Partnership History
│   │   ├── Partner Timelines
│   │   ├── Agreement Versions
│   │   └── Renewal History
│   └── Retrospectives
│       ├── Post-Event Retrospectives
│       ├── Quarterly Retrospectives
│       └── Strategic Planning Retrospectives
│
├── 👑 Leadership
│   ├── Governance
│   │   ├── Bylaws
│   │   ├── Board Charter
│   │   ├── Committee Structure
│   │   └── Decision-Making Framework
│   ├── Strategic Plans
│   │   ├── Current Strategic Plan
│   │   ├── Roadmap / Gantt
│   │   ├── OKRs
│   │   └── Previous Strategic Plans
│   ├── Org Structure
│   │   ├── Org Chart
│   │   ├── Reporting Lines
│   │   ├── RACI Matrix
│   │   └── Succession Plan
│   ├── Finance Overview
│   │   ├── Annual Budget
│   │   ├── Funding Sources
│   │   └── Audit Reports
│   └── Legal
│       ├── Partnership Agreements Archive
│       ├── Compliance Requirements
│       └── Insurance Documents
│
└── 🔧 Meta
    ├── Knowledge Base Guide (How to Use This KB)
    ├── Style Guide & Writing Standards
    ├── Page Template Library
    ├── Content Review Schedule
    └── Changelog
```

---

## Content Flow Diagram

```
                    ┌──────────────────┐
                    │   NEW MEMBER      │
                    │   (Any Role)      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   ONBOARDING     │
                    │   HUB            │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
     ┌──────────────┐ ┌──────────┐ ┌──────────────┐
     │  VOLUNTEER   │ │ PARTNER  │ │    STAFF     │
     │  Track       │ │ Track    │ │    Track     │
     └──────┬───────┘ └────┬─────┘ └──────┬───────┘
            │              │              │
            ▼              ▼              ▼
     ┌──────────────┐ ┌──────────┐ ┌──────────────┐
     │  VOLUNTEER   │ │   SOPs   │ │  LEADERSHIP  │
     │  RESOURCES   │ │   HUB    │ │    DOCS      │
     └──────┬───────┘ └────┬─────┘ └──────┬───────┘
            │              │              │
            └──────────────┼──────────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │   FAQs           │
                  │   (Self-Service) │
                  └────────┬─────────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
     ┌──────────────┐ ┌────────┐ ┌──────────────┐
     │  HISTORICAL  │ │ SEARCH │ │    META      │
     │  ARCHIVES    │ │        │ │  (Governance)│
     └──────────────┘ └────────┘ └──────────────┘
```

---

## Cross-Linking Map

```
    Onboarding ──────► SOPs (relevant procedures)
         │                  │
         │                  ▼
         │              FAQs (common questions)
         │                  │
         ▼                  ▼
    Volunteer ◄──────────► Resources
         │
         ▼
    Historical Archives ◄── Retrospectives
         │
         ▼
    Leadership Docs ──────► Governance & Strategy
         │
         ▼
    Meta (style guide, templates, review schedule)
```

---

*This diagram represents the target state at full implementation (Phase 5). Phased rollout is detailed in the plan.md roadmap section.*
