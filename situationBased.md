
A feature is delayed — how will you track & escalate?

“First, I will check the task tracking tool like Jira to see the exact status. Then I’ll talk to the developer to understand the reason for delay — whether it’s a technical issue, dependency, or requirement confusion.

If it’s a blocker, I’ll try to resolve it by coordinating with the BA or other team members. If the delay can impact the sprint or release, I’ll immediately inform the Technical Manager with clear facts — not assumptions.

I believe in early escalation rather than last-minute surprises.”

2️⃣ Sprint ending in 2 days but only 55–60% complete

“In that case, I’ll first review all remaining tasks and categorize them into critical and non-critical items.

Then I’ll discuss with the team what can realistically be completed in the remaining time without compromising quality.

I’ll communicate the actual progress to stakeholders and, if required, move lower-priority items to the next sprint with proper re-estimation.

I prefer delivering stable features instead of rushing incomplete work.”

3️⃣ Developer consistently missing estimates

“I would first schedule a one-on-one discussion to understand the reason. Maybe the tasks are not clearly defined, or maybe there is a technical gap.

I’ll help them break tasks into smaller, manageable parts so estimation becomes more accurate.

If needed, I’ll suggest pairing with a senior developer or improving requirement clarity.

My goal is improvement and support, not blaming.”

4️⃣ Mid-sprint major requirement change

“First, I’ll understand the impact of the change — how much rework is required and whether it affects completed tasks.

Then I’ll discuss with the BA and Technical Manager. If it’s business-critical, we may adjust sprint priorities. Otherwise, I’ll suggest adding it to the next sprint backlog.

I believe scope changes should always be documented and agreed upon, not done informally.”

5️⃣ Major risk identified before release

“If I identify a major risk, I’ll immediately document it and inform the Technical Manager.

Then I’ll analyze the impact — whether it affects timeline, performance, or data integrity.

After that, I’ll propose mitigation steps, like additional testing, hotfix planning, or timeline adjustment.

Early visibility helps prevent bigger issues later.”

6️⃣ Critical production bug on weekend

“First, I’ll acknowledge the issue and try to reproduce it.

Then I’ll check logs, database entries, and API responses to identify the root cause.

If needed, I’ll inform relevant team members and coordinate quickly.

If a permanent fix takes time, I’ll apply a temporary patch to reduce impact and keep the client updated regularly.

In production issues, communication is as important as fixing the bug.”

7️⃣ Multiple features running behind schedule

“I’ll prioritize based on business impact and release deadlines.

High-impact features will get immediate focus.

I’ll track daily progress through short sync meetings and remove blockers quickly.

If resources are limited, I’ll discuss reallocation or scope adjustment with stakeholders.”

8️⃣ Client asks for new feature not in sprint scope

“I’ll appreciate the request and gather complete details.

Then I’ll analyze the effort and impact on the current sprint.

I’ll inform the client that it will go through proper change management and backlog prioritization.

I won’t commit immediately without checking feasibility.”

🔥 Debugging Section (Very Important for This Role)
9️⃣ Client reports API error

“My approach is systematic.

First, I try to reproduce the issue using Postman.
Then I check the status code — whether it’s a 400, 401, or 500 error.

After that, I check backend logs and verify request payload and authentication tokens.

I also run database queries to ensure data consistency.

Once fixed, I test again and inform the client only after verification.”

🔟 Client says dashboard data is incorrect

“First, I’ll clarify exactly which data is incorrect.

Then I’ll verify in this order:
Database → API response → Frontend rendering.

I’ll run SQL queries to check actual values.
Then compare them with API responses.
Then check if filters, date range, or aggregation logic is wrong.

This step-by-step debugging avoids confusion.”

1️⃣ Client says data is not reflecting correctly in dashboard

“My approach is step-by-step verification.

First, I’ll understand exactly which data is incorrect — date range, filters, totals, or specific records.

Then I’ll verify in this order:
Database → API → Frontend.

I’ll run a query in the database to check actual stored values.
Then I’ll check the API response using Postman.
Then I’ll verify if the frontend is applying any incorrect filters or aggregation logic.

This structured approach helps identify whether the issue is in backend logic, API layer, or UI.”

2️⃣ Client complains about slow API response after deployment

“First, I’ll confirm the issue by testing the API response time myself.

Then I’ll check:

Server logs

Database query performance

Any new code changes in deployment

Increased load or traffic

If needed, I’ll compare response time before and after deployment.

It could be due to inefficient queries, missing indexes, or heavy logic added recently.

If impact is high, I’ll inform the team immediately and consider rollback while fixing the root cause.”

3️⃣ Client demands urgent hotfix in production

“First, I’ll understand the severity — is it blocking business operations?

If it’s critical, I’ll inform the Technical Manager and relevant developers immediately.

We’ll reproduce the issue, fix it in a controlled branch, test it properly in staging, and then deploy carefully to production.

Even in urgent cases, I will avoid directly editing production without testing.

Communication with the client during the process is very important.”

4️⃣ Client unhappy with recent delivery

“First, I’ll listen carefully without interrupting.

I’ll understand all concerns clearly — whether it’s quality, performance, missing features, or communication issues.

Then I’ll acknowledge the concerns and assure corrective steps.

Internally, I’ll review what went wrong — estimation issue, testing gap, or requirement misunderstanding.

Then I’ll share a corrective action plan with clear timelines.”

5️⃣ Same issue reported by 3 clients at same time

“That indicates it might be a system-level issue.

First, I’ll check if the issue is reproducible.

Then I’ll assess impact — how many users affected and how critical the feature is.

Since multiple clients are impacted, I’ll treat it as high priority and escalate immediately.

I’ll coordinate with backend and DevOps team and keep all clients informed with updates.”

6️⃣ Client sends vague error message

“In that case, I won’t assume anything.

I’ll politely ask for:

Steps to reproduce

Screenshot or screen recording

API request details

Time when issue occurred

Meanwhile, I’ll check logs around that time.

Clear information helps faster resolution.”

🎤 Daily Stand-up & Agile Ceremonies
7️⃣ How do you run daily stand-up (10 dev + 1 BA)?

“I’ll keep it structured and time-bound, around 15 minutes.

Each person answers 3 questions:

What did you do yesterday?

What will you do today?

Any blockers?

If discussion becomes technical or long, I’ll take it offline after stand-up.

Main goal is visibility and blocker identification, not problem-solving during the meeting.”

8️⃣ One person dominates stand-up with technical details

“I’ll respectfully interrupt and say,

‘Let’s take detailed discussion offline to keep stand-up short.’

Stand-up is for status updates, not deep technical discussion.

After meeting, I’ll arrange a separate call if needed.”

9️⃣ Team comes unprepared, Jira not updated

“I’ll remind the team that updating Jira before stand-up is important for transparency.

If it continues, I’ll set a rule that Jira must be updated before meeting.

Over time, I’ll build discipline by explaining how it helps in tracking and reduces confusion.”

🔟 Team not vocal in Sprint Retrospective

“I’ll create a safe and positive environment.

Instead of open questions, I’ll use structured format like:

What went well?

What didn’t go well?

What can we improve?

I may also use anonymous feedback tools to encourage honesty.

The goal is continuous improvement, not blaming anyone.”

🎤 Team Coordination & Conflict Resolution
1️⃣1️⃣ Conflict between Developer and QA (bug vs expected behaviour)

“First, I’ll review the requirement document or acceptance criteria.

Then I’ll understand both perspectives calmly.

If the behavior matches requirement, then it’s not a bug.
If requirement is unclear, I’ll involve the BA for clarification.

Decision should be based on documented requirements, not opinions.

My role is to ensure alignment, not take sides.”

1️⃣ You need urgent help from another team but they are fully occupied. How do you manage?

“In that situation, first I’ll clearly explain the urgency and business impact to the other team’s lead.

If it is truly critical, I’ll request at least partial support or guidance instead of full involvement.

If they are still unavailable, I’ll check internally whether someone from our team can temporarily handle it.

At the same time, I’ll inform my Technical Manager about the dependency risk.

My goal is not to pressure the other team, but to communicate priority clearly and find an alternative solution.”

2️⃣ A new team member is slowing down the sprint because they are learning

“I understand that onboarding takes time.

I’ll assign them smaller and well-defined tasks initially.

I may pair them with a senior developer for knowledge transfer.

I’ll also ensure they understand the overall architecture and data flow clearly.

In the short term, sprint speed may reduce slightly, but in the long term, it strengthens the team.

Supporting them properly is important for team stability.”

3️⃣ Two senior developers disagree on technical approach

“First, I’ll let both explain their approach with pros and cons.

Then we’ll evaluate based on:

Performance

Scalability

Maintainability

Timeline impact

If needed, we can create a small proof-of-concept or consult the Technical Manager.

The final decision should be based on business and technical impact, not personal preference.

My role is to ensure constructive discussion and alignment.”

🎤 Jira, Tools & Stakeholder Reporting
4️⃣ P1 (Critical) ticket stuck in “In Review” for 4 days

“For a P1 ticket, 4 days is too long.

First, I’ll check why it’s stuck — is the reviewer unavailable? Are changes requested?

Then I’ll directly follow up with the reviewer and explain the criticality.

If required, I’ll escalate to the Technical Manager to prioritize the review.

For critical issues, I may arrange a quick live review call to speed up the process.

P1 tickets should always get immediate visibility.”

5️⃣ Stakeholder asks for consolidated status of 3 parallel projects

“I’ll prepare a structured summary including:

Overall progress percentage

Completed milestones

Current sprint focus

Risks or blockers

Expected completion dates

I’ll avoid too many technical details and focus on business-level updates.

If possible, I’ll present it in a simple dashboard format — green for on-track, yellow for risk, red for delayed.

Stakeholders need clarity, not complexity.”