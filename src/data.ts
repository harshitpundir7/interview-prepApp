export type SectionInfo = {
    id: string;
    title: string;
    icon: string;
    color: string;
    description: string;
};

export type Question = {
    id: number;
    text: string;
    sectionId: string;
};

export type SituationalQuestion = {
    id: number;
    question: string;
    answer: string;
};

export const sections: SectionInfo[] = [
    {
        id: 'java',
        title: 'Java Core & OOP',
        icon: 'Coffee',
        color: 'from-orange-400 to-amber-600',
        description: '30 Most Asked Questions for Technical Project Associate Role.'
    },
    {
        id: 'sql',
        title: 'SQL & Database',
        icon: 'Database',
        color: 'from-blue-400 to-indigo-600',
        description: 'Joins, Aggregations, Window Functions, Indexing & ACID.'
    },
    {
        id: 'dsa',
        title: 'Data Structures',
        icon: 'Code2',
        color: 'from-emerald-400 to-teal-600',
        description: 'Arrays, Strings, HashMaps, Linked Lists, Stacks & Queues.'
    },
    {
        id: 'situational',
        title: 'Situational Based',
        icon: 'Users',
        color: 'from-purple-400 to-pink-600',
        description: '25 Situational-based interview questions for Sales & Technical Project Associate roles.'
    }
];

export const questionsData: Question[] = [
    // JAVA section
    { id: 1, sectionId: 'java', text: 'What are the four pillars of OOP? Explain each with a real-life example.' },
    { id: 2, sectionId: 'java', text: 'Explain Abstraction in Java. How is it achieved? (Abstract class vs Interface).' },
    { id: 3, sectionId: 'java', text: 'Explain Encapsulation. Why is it called data hiding? How do you implement it?' },
    { id: 4, sectionId: 'java', text: 'What is Inheritance? List all types of inheritance supported in Java.' },
    { id: 5, sectionId: 'java', text: 'What is Polymorphism? Differentiate between Compile-time (Overloading) and Runtime (Overriding).' },
    { id: 6, sectionId: 'java', text: 'What is the difference between Method Overloading and Method Overriding?' },
    { id: 7, sectionId: 'java', text: 'Can we override a static method in Java? Why or why not?' },
    { id: 8, sectionId: 'java', text: 'What is the difference between Abstract Class and Interface?' },
    { id: 9, sectionId: 'java', text: 'Why doesn\'t Java support multiple inheritance with classes? How do we achieve it?' },
    { id: 10, sectionId: 'java', text: 'What is the Diamond Problem? How does Java solve it?' },
    { id: 11, sectionId: 'java', text: 'Explain this and super keywords with examples.' },
    { id: 12, sectionId: 'java', text: 'What is the final keyword? Explain its use on variable, method, and class.' },
    { id: 13, sectionId: 'java', text: 'What is the difference between == and .equals()?' },
    { id: 14, sectionId: 'java', text: 'Why is String immutable in Java? What is String Pool / String Constant Pool? Advantages?' },
    { id: 15, sectionId: 'java', text: 'Difference between String, StringBuilder, and StringBuffer?' },
    { id: 16, sectionId: 'java', text: 'Difference between ArrayList and LinkedList? When to use which one?' },
    { id: 17, sectionId: 'java', text: 'Difference between HashMap and Hashtable?' },
    { id: 18, sectionId: 'java', text: 'Explain the contract between equals() and hashCode(). Why is it important?' },
    { id: 19, sectionId: 'java', text: 'What is Exception Handling? Differentiate Checked vs Unchecked Exceptions.' },
    { id: 20, sectionId: 'java', text: 'Difference between throw and throws keyword.' },
    { id: 21, sectionId: 'java', text: 'Explain try-with-resources with example. Why was it introduced?' },
    { id: 22, sectionId: 'java', text: 'What is the difference between final, finally, and finalize()?' },
    { id: 23, sectionId: 'java', text: 'What is a Constructor? Types of constructors? Can a constructor be private?' },
    { id: 24, sectionId: 'java', text: 'Explain static keyword in detail (static variable, method, block, nested class).' },
    { id: 25, sectionId: 'java', text: 'What are Access Modifiers in Java? Give scope table for public, protected, default, private.' },
    { id: 26, sectionId: 'java', text: 'Explain Garbage Collection in Java (basic working, when it runs, System.gc()).' },
    { id: 27, sectionId: 'java', text: 'What are Wrapper Classes? Explain Autoboxing and Unboxing with example.' },
    { id: 28, sectionId: 'java', text: 'What is Singleton Class? Write code for a thread-safe Singleton.' },
    { id: 29, sectionId: 'java', text: 'What are Generics in Java? Why do we use them? Give one example.' },
    { id: 30, sectionId: 'java', text: 'Explain Composition vs Inheritance. Which is preferred and why?' },

    // SQL section
    { id: 31, sectionId: 'sql', text: 'Write a query to find the 2nd highest salary from Employee table.' },
    { id: 32, sectionId: 'sql', text: 'Difference between INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL OUTER JOIN?' },
    { id: 33, sectionId: 'sql', text: 'Write a query using SELF JOIN to find manager names for each employee.' },
    { id: 34, sectionId: 'sql', text: 'Write a query to find all employees who have no manager (NULL handling).' },
    { id: 35, sectionId: 'sql', text: 'Difference between JOIN and UNION?' },
    { id: 36, sectionId: 'sql', text: 'Write a query to get total sales amount by region (basic aggregation + join).' },
    { id: 37, sectionId: 'sql', text: 'How do you handle NULL values in joins? (COALESCE, IS NULL).' },
    { id: 38, sectionId: 'sql', text: 'Write a query using CROSS JOIN (cartesian product) – when is it used?' },
    { id: 39, sectionId: 'sql', text: 'Explain Equi Join vs Non-Equi Join.' },
    { id: 40, sectionId: 'sql', text: 'Write a query to find duplicate records in a Sales table.' },
    { id: 41, sectionId: 'sql', text: 'Explain GROUP BY + HAVING with a real example.' },
    { id: 42, sectionId: 'sql', text: 'Difference between WHERE and HAVING clause?' },
    { id: 43, sectionId: 'sql', text: 'Write a query to find top 5 regions by total sales amount.' },
    { id: 44, sectionId: 'sql', text: 'Write a query to find departments where average salary > overall average salary.' },
    { id: 45, sectionId: 'sql', text: 'Use aggregate functions: COUNT, SUM, AVG, MIN, MAX with GROUP BY.' },
    { id: 46, sectionId: 'sql', text: 'How to find number of employees in each department who joined in 2024.' },
    { id: 47, sectionId: 'sql', text: 'Write a query to get monthly sales trend (GROUP BY month/year).' },
    { id: 48, sectionId: 'sql', text: 'Explain ROLLUP and CUBE operators.' },
    { id: 49, sectionId: 'sql', text: 'Write a query using correlated subquery to find employees earning more than their department average.' },
    { id: 50, sectionId: 'sql', text: 'Difference between Subquery and Common Table Expression (CTE)?' },
    { id: 51, sectionId: 'sql', text: 'Use RANK(), DENSE_RANK(), ROW_NUMBER() to find top 3 highest paid employees per department.' },
    { id: 52, sectionId: 'sql', text: 'Write a query to find employees who are also managers.' },
    { id: 53, sectionId: 'sql', text: 'Use LAG() / LEAD() to show previous month sales comparison.' },
    { id: 54, sectionId: 'sql', text: 'How to delete duplicate rows from a table (using ROW_NUMBER or self-join).' },
    { id: 55, sectionId: 'sql', text: 'Write a query using EXISTS vs IN (performance difference).' },
    { id: 56, sectionId: 'sql', text: 'What is Normalization? Explain 1NF, 2NF, 3NF, BCNF with example.' },
    { id: 57, sectionId: 'sql', text: 'What are Indexes? Types (Clustered vs Non-Clustered)? Advantages and disadvantages.' },
    { id: 58, sectionId: 'sql', text: 'Explain ACID properties in detail.' },
    { id: 59, sectionId: 'sql', text: 'Difference between TRUNCATE, DELETE and DROP?' },
    { id: 60, sectionId: 'sql', text: 'What is a View? Difference between Simple View and Complex View? When to use materialized view?' },

    // DSA section
    { id: 61, sectionId: 'dsa', text: 'Reverse an array / string (in-place).' },
    { id: 62, sectionId: 'dsa', text: 'Check if a string is a palindrome.' },
    { id: 63, sectionId: 'dsa', text: 'Check if two strings are anagrams.' },
    { id: 64, sectionId: 'dsa', text: 'Find all duplicates in an array (return list or count).' },
    { id: 65, sectionId: 'dsa', text: 'Two Sum – find indices of two numbers that add up to target.' },
    { id: 66, sectionId: 'dsa', text: 'Remove duplicates from a sorted array (in-place, return new length).' },
    { id: 67, sectionId: 'dsa', text: 'Find the second largest / second smallest element in an array.' },
    { id: 68, sectionId: 'dsa', text: 'Rotate an array by k steps (right/left).' },
    { id: 69, sectionId: 'dsa', text: 'Best Time to Buy and Sell Stock (maximum profit – one transaction).' },
    { id: 70, sectionId: 'dsa', text: 'Find the missing number in an array.' },
    { id: 71, sectionId: 'dsa', text: 'Move all zeros to the end of the array (in-place).' },
    { id: 72, sectionId: 'dsa', text: 'Maximum subarray sum (Kadane’s algorithm).' },
    { id: 73, sectionId: 'dsa', text: 'First non-repeating character in a string.' },
    { id: 74, sectionId: 'dsa', text: 'Intersection of two arrays (or common elements with frequency).' },
    { id: 75, sectionId: 'dsa', text: 'Contains Duplicate (return true if any value appears at least twice).' },
    { id: 76, sectionId: 'dsa', text: 'Group Anagrams (group strings that are anagrams).' },
    { id: 77, sectionId: 'dsa', text: 'Find the majority element (appears > n/2 times).' },
    { id: 78, sectionId: 'dsa', text: 'Count frequency of each element.' },
    { id: 79, sectionId: 'dsa', text: 'Reverse a singly linked list (iterative + recursive both expected).' },
    { id: 80, sectionId: 'dsa', text: 'Detect a cycle in linked list (Floyd’s tortoise-hare).' },
    { id: 81, sectionId: 'dsa', text: 'Find the middle of a linked list.' },
    { id: 82, sectionId: 'dsa', text: 'Remove duplicates from an unsorted linked list.' },
    { id: 83, sectionId: 'dsa', text: 'Merge two sorted linked lists.' },
    { id: 84, sectionId: 'dsa', text: 'Delete a node when only pointer to that node is given (no head).' },
    { id: 85, sectionId: 'dsa', text: 'Valid Parentheses (check balanced brackets).' },
    { id: 86, sectionId: 'dsa', text: 'Implement Stack using Queues (or Queue using Stacks).' },
    { id: 87, sectionId: 'dsa', text: 'Next Greater Element (for each element in array).' },
    { id: 88, sectionId: 'dsa', text: 'Min Stack (push, pop, top, getMin in O(1)).' },
    { id: 89, sectionId: 'dsa', text: 'Implement Binary Search on a sorted array.' },
    { id: 90, sectionId: 'dsa', text: 'Explain time & space complexity of common data structures and sorting algorithms.' }
];

export const situationalData: SituationalQuestion[] = [
    {
        id: 1,
        question: 'A feature is delayed — how will you track & escalate?',
        answer: 'First, I will check the task tracking tool like Jira to see the exact status. Then I\'ll talk to the developer to understand the reason for delay — whether it\'s a technical issue, dependency, or requirement confusion.\n\nIf it\'s a blocker, I\'ll try to resolve it by coordinating with the BA or other team members. If the delay can impact the sprint or release, I\'ll immediately inform the Technical Manager with clear facts — not assumptions.\n\nI believe in early escalation rather than last-minute surprises.'
    },
    {
        id: 2,
        question: 'Sprint ending in 2 days but only 55–60% complete — what will you do?',
        answer: 'In that case, I\'ll first review all remaining tasks and categorize them into critical and non-critical items.\n\nThen I\'ll discuss with the team what can realistically be completed in the remaining time without compromising quality.\n\nI\'ll communicate the actual progress to stakeholders and, if required, move lower-priority items to the next sprint with proper re-estimation.\n\nI prefer delivering stable features instead of rushing incomplete work.'
    },
    {
        id: 3,
        question: 'Developer consistently missing estimates — how do you handle it?',
        answer: 'I would first schedule a one-on-one discussion to understand the reason. Maybe the tasks are not clearly defined, or maybe there is a technical gap.\n\nI\'ll help them break tasks into smaller, manageable parts so estimation becomes more accurate.\n\nIf needed, I\'ll suggest pairing with a senior developer or improving requirement clarity.\n\nMy goal is improvement and support, not blaming.'
    },
    {
        id: 4,
        question: 'Mid-sprint major requirement change — how do you handle it?',
        answer: 'First, I\'ll understand the impact of the change — how much rework is required and whether it affects completed tasks.\n\nThen I\'ll discuss with the BA and Technical Manager. If it\'s business-critical, we may adjust sprint priorities. Otherwise, I\'ll suggest adding it to the next sprint backlog.\n\nI believe scope changes should always be documented and agreed upon, not done informally.'
    },
    {
        id: 5,
        question: 'Major risk identified before release — what do you do?',
        answer: 'If I identify a major risk, I\'ll immediately document it and inform the Technical Manager.\n\nThen I\'ll analyze the impact — whether it affects timeline, performance, or data integrity.\n\nAfter that, I\'ll propose mitigation steps, like additional testing, hotfix planning, or timeline adjustment.\n\nEarly visibility helps prevent bigger issues later.'
    },
    {
        id: 6,
        question: 'Critical production bug on weekend — how do you respond?',
        answer: 'First, I\'ll acknowledge the issue and try to reproduce it.\n\nThen I\'ll check logs, database entries, and API responses to identify the root cause.\n\nIf needed, I\'ll inform relevant team members and coordinate quickly.\n\nIf a permanent fix takes time, I\'ll apply a temporary patch to reduce impact and keep the client updated regularly.\n\nIn production issues, communication is as important as fixing the bug.'
    },
    {
        id: 7,
        question: 'Multiple features running behind schedule — how do you prioritize?',
        answer: 'I\'ll prioritize based on business impact and release deadlines.\n\nHigh-impact features will get immediate focus.\n\nI\'ll track daily progress through short sync meetings and remove blockers quickly.\n\nIf resources are limited, I\'ll discuss reallocation or scope adjustment with stakeholders.'
    },
    {
        id: 8,
        question: 'Client asks for new feature not in sprint scope — how do you respond?',
        answer: 'I\'ll appreciate the request and gather complete details.\n\nThen I\'ll analyze the effort and impact on the current sprint.\n\nI\'ll inform the client that it will go through proper change management and backlog prioritization.\n\nI won\'t commit immediately without checking feasibility.'
    },
    {
        id: 9,
        question: 'Client reports an API error — how do you debug it?',
        answer: 'My approach is systematic.\n\nFirst, I try to reproduce the issue using Postman. Then I check the status code — whether it\'s a 400, 401, or 500 error.\n\nAfter that, I check backend logs and verify request payload and authentication tokens.\n\nI also run database queries to ensure data consistency.\n\nOnce fixed, I test again and inform the client only after verification.'
    },
    {
        id: 10,
        question: 'Client says dashboard data is incorrect — how do you investigate?',
        answer: 'First, I\'ll clarify exactly which data is incorrect.\n\nThen I\'ll verify in this order: Database → API response → Frontend rendering.\n\nI\'ll run SQL queries to check actual values. Then compare them with API responses. Then check if filters, date range, or aggregation logic is wrong.\n\nThis step-by-step debugging avoids confusion.'
    },
    {
        id: 11,
        question: 'Client says data is not reflecting correctly in dashboard — walkthrough your approach.',
        answer: 'My approach is step-by-step verification.\n\nFirst, I\'ll understand exactly which data is incorrect — date range, filters, totals, or specific records.\n\nThen I\'ll verify in this order: Database → API → Frontend.\n\nI\'ll run a query in the database to check actual stored values. Then I\'ll check the API response using Postman. Then I\'ll verify if the frontend is applying any incorrect filters or aggregation logic.\n\nThis structured approach helps identify whether the issue is in backend logic, API layer, or UI.'
    },
    {
        id: 12,
        question: 'Client complains about slow API response after deployment — what do you check?',
        answer: 'First, I\'ll confirm the issue by testing the API response time myself.\n\nThen I\'ll check: Server logs, Database query performance, Any new code changes in deployment, Increased load or traffic.\n\nIf needed, I\'ll compare response time before and after deployment.\n\nIt could be due to inefficient queries, missing indexes, or heavy logic added recently.\n\nIf impact is high, I\'ll inform the team immediately and consider rollback while fixing the root cause.'
    },
    {
        id: 13,
        question: 'Client demands urgent hotfix in production — how do you handle it?',
        answer: 'First, I\'ll understand the severity — is it blocking business operations?\n\nIf it\'s critical, I\'ll inform the Technical Manager and relevant developers immediately.\n\nWe\'ll reproduce the issue, fix it in a controlled branch, test it properly in staging, and then deploy carefully to production.\n\nEven in urgent cases, I will avoid directly editing production without testing.\n\nCommunication with the client during the process is very important.'
    },
    {
        id: 14,
        question: 'Client unhappy with recent delivery — how do you respond?',
        answer: 'First, I\'ll listen carefully without interrupting.\n\nI\'ll understand all concerns clearly — whether it\'s quality, performance, missing features, or communication issues.\n\nThen I\'ll acknowledge the concerns and assure corrective steps.\n\nInternally, I\'ll review what went wrong — estimation issue, testing gap, or requirement misunderstanding.\n\nThen I\'ll share a corrective action plan with clear timelines.'
    },
    {
        id: 15,
        question: 'Same issue reported by 3 clients at the same time — how do you handle it?',
        answer: 'That indicates it might be a system-level issue.\n\nFirst, I\'ll check if the issue is reproducible.\n\nThen I\'ll assess impact — how many users affected and how critical the feature is.\n\nSince multiple clients are impacted, I\'ll treat it as high priority and escalate immediately.\n\nI\'ll coordinate with backend and DevOps team and keep all clients informed with updates.'
    },
    {
        id: 16,
        question: 'Client sends a vague error message — what do you do?',
        answer: 'In that case, I won\'t assume anything.\n\nI\'ll politely ask for: Steps to reproduce, Screenshot or screen recording, API request details, Time when issue occurred.\n\nMeanwhile, I\'ll check logs around that time.\n\nClear information helps faster resolution.'
    },
    {
        id: 17,
        question: 'How do you run a daily stand-up with 10 developers and 1 BA?',
        answer: 'I\'ll keep it structured and time-bound, around 15 minutes.\n\nEach person answers 3 questions: What did you do yesterday? What will you do today? Any blockers?\n\nIf discussion becomes technical or long, I\'ll take it offline after stand-up.\n\nMain goal is visibility and blocker identification, not problem-solving during the meeting.'
    },
    {
        id: 18,
        question: 'One person dominates stand-up with technical details — how do you handle it?',
        answer: 'I\'ll respectfully interrupt and say, \'Let\'s take detailed discussion offline to keep stand-up short.\'\n\nStand-up is for status updates, not deep technical discussion.\n\nAfter meeting, I\'ll arrange a separate call if needed.'
    },
    {
        id: 19,
        question: 'Team comes unprepared and Jira is not updated before stand-up — what do you do?',
        answer: 'I\'ll remind the team that updating Jira before stand-up is important for transparency.\n\nIf it continues, I\'ll set a rule that Jira must be updated before meeting.\n\nOver time, I\'ll build discipline by explaining how it helps in tracking and reduces confusion.'
    },
    {
        id: 20,
        question: 'Team is not vocal in Sprint Retrospective — how do you improve engagement?',
        answer: 'I\'ll create a safe and positive environment.\n\nInstead of open questions, I\'ll use structured format like: What went well? What didn\'t go well? What can we improve?\n\nI may also use anonymous feedback tools to encourage honesty.\n\nThe goal is continuous improvement, not blaming anyone.'
    },
    {
        id: 21,
        question: 'Conflict between Developer and QA — developer says it\'s expected behavior, QA says it\'s a bug — how do you resolve it?',
        answer: 'First, I\'ll review the requirement document or acceptance criteria.\n\nThen I\'ll understand both perspectives calmly.\n\nIf the behavior matches requirement, then it\'s not a bug. If requirement is unclear, I\'ll involve the BA for clarification.\n\nDecision should be based on documented requirements, not opinions.\n\nMy role is to ensure alignment, not take sides.'
    },
    {
        id: 22,
        question: 'You need urgent help from another team but they are fully occupied — how do you manage?',
        answer: 'In that situation, first I\'ll clearly explain the urgency and business impact to the other team\'s lead.\n\nIf it is truly critical, I\'ll request at least partial support or guidance instead of full involvement.\n\nIf they are still unavailable, I\'ll check internally whether someone from our team can temporarily handle it.\n\nAt the same time, I\'ll inform my Technical Manager about the dependency risk.\n\nMy goal is not to pressure the other team, but to communicate priority clearly and find an alternative solution.'
    },
    {
        id: 23,
        question: 'A new team member is slowing down the sprint because they are learning — how do you handle it?',
        answer: 'I understand that onboarding takes time.\n\nI\'ll assign them smaller and well-defined tasks initially.\n\nI may pair them with a senior developer for knowledge transfer.\n\nI\'ll also ensure they understand the overall architecture and data flow clearly.\n\nIn the short term, sprint speed may reduce slightly, but in the long term, it strengthens the team.\n\nSupporting them properly is important for team stability.'
    },
    {
        id: 24,
        question: 'Two senior developers disagree on technical approach — how do you resolve it?',
        answer: 'First, I\'ll let both explain their approach with pros and cons.\n\nThen we\'ll evaluate based on: Performance, Scalability, Maintainability, Timeline impact.\n\nIf needed, we can create a small proof-of-concept or consult the Technical Manager.\n\nThe final decision should be based on business and technical impact, not personal preference.\n\nMy role is to ensure constructive discussion and alignment.'
    },
    {
        id: 25,
        question: 'Stakeholder asks for a consolidated status of 3 parallel projects — how do you present it?',
        answer: 'I\'ll prepare a structured summary including: Overall progress percentage, Completed milestones, Current sprint focus, Risks or blockers, Expected completion dates.\n\nI\'ll avoid too many technical details and focus on business-level updates.\n\nIf possible, I\'ll present it in a simple dashboard format — green for on-track, yellow for risk, red for delayed.\n\nStakeholders need clarity, not complexity.'
    }
];