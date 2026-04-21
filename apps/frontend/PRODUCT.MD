# YuhLearn — Product Overview

## Vision
YuhLearn helps young people (15–25) build essential financial literacy skills,
directly embedded in the Yuh banking app ecosystem.

## Target Users
- Primary : 15–25 year olds, new to financial independence
- Context : first job, first salary, first apartment, first taxes
- Entry point : Yuh app notification after account creation

## Core Concepts

### Firsts
A "First" is a major life milestone requiring financial knowledge.
Each First is a learning module containing :
- A series of short vertical videos (YouTube embed, Shorts-style)
- A quiz tile at the end (all questions must be answered correctly to complete)
- A completion reward (interest boost on a Goal pocket)

Firsts are organized by level :
- Beginner (15–25) : First Budget, First Salary, First Taxes, First Apartment,
  First Car, First Investment, First Credit, First Insurance, First Crypto
- Intermediate : First Stock, First Real Estate, First Company, First Pension
- Advanced : First Angel Investment, First Tax Optimization, First Inheritance

### Goals
A Goal is a savings target linked to a Yuh pocket.
- User defines : name, target amount, start date, end date
- Progress is pulled from the mock Yuh API (src/data/yuh-mock.json)
- Goals are displayed on the Home screen
- Completing a First unlocks a 1% interest boost on a chosen Goal pocket
  for 14 days (capped at CHF 500 interest)

### Onboarding
Already built. Not in scope for this project.
Entry point of the app post-onboarding = Home screen.

## Rewards
When a user completes a First for the first time :
- A reward card is shown : "Boost unlocked !"
- User selects which Goal pocket to apply the boost to
- Boost : +1% interest for 14 days, max CHF 500 interest
- Stored in localStorage

## Out of scope (v1)
- Real Yuh API integration
- Backend / database
- Authentication
- Onboarding screens
- i18n (English only)
- Desktop layout