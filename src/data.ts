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
    subsection?: string;
};


export const sections: SectionInfo[] = [
    {
        id: 'java',
        title: 'Java Core & OOP',
        icon: 'Coffee',
        color: 'from-orange-400 to-amber-600',
        description: '30 Most Asked Questions for interview.'
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
        id: 'webdev',
        title: 'Web Dev FundaMental',
        icon: 'Globe',
        color: 'from-cyan-400 to-sky-600',
        description: '145 Web Development interview questions covering HTML, CSS, JavaScript, React, APIs, Git, System Concepts & HR.'
    },
    {
        id: 'systemdesign',
        title: 'System Design',
        icon: 'Server',
        color: 'from-purple-400 to-fuchsia-600',
        description: 'Top 40 Most Asked System Design Interview Questions across Fundamental Concepts, Databases, High-Level Design, and Scalability.'
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
    // Strings (6)
    { id: 61, sectionId: 'dsa', subsection: 'Strings', text: 'Reverse a string (or array) in-place without built-in reverse methods' },
    { id: 62, sectionId: 'dsa', subsection: 'Strings', text: 'Check if a string is a palindrome (ignore case, spaces, punctuation)' },
    { id: 63, sectionId: 'dsa', subsection: 'Strings', text: 'Check if two strings are anagrams (multiple variations)' },
    { id: 64, sectionId: 'dsa', subsection: 'Strings', text: 'Find the first non-repeating character in a string' },
    { id: 65, sectionId: 'dsa', subsection: 'Strings', text: 'Group Anagrams (group list of strings that are anagrams)' },
    { id: 66, sectionId: 'dsa', subsection: 'Strings', text: 'Valid Parentheses / Check balanced brackets (using stack)' },

    // Arrays (12)
    { id: 67, sectionId: 'dsa', subsection: 'Arrays', text: 'Remove duplicates from a sorted array (in-place, return new length)' },
    { id: 68, sectionId: 'dsa', subsection: 'Arrays', text: 'Remove duplicates from an unsorted array (or return unique elements)' },
    { id: 69, sectionId: 'dsa', subsection: 'Arrays', text: 'Move all zeros to the end of the array (in-place)' },
    { id: 70, sectionId: 'dsa', subsection: 'Arrays', text: 'Rotate an array by k steps (left or right, in-place preferred)' },
    { id: 71, sectionId: 'dsa', subsection: 'Arrays', text: 'Find the missing number in array (1 to n)' },
    { id: 72, sectionId: 'dsa', subsection: 'Arrays', text: 'Find intersection of two arrays (with/without frequency)' },
    { id: 73, sectionId: 'dsa', subsection: 'Arrays', text: 'Contains Duplicate (return true if any duplicate exists)' },
    { id: 74, sectionId: 'dsa', subsection: 'Arrays', text: 'Find all duplicates in an array (return list or count occurrences)' },
    { id: 75, sectionId: 'dsa', subsection: 'Arrays', text: 'Count frequency / occurrences of each element (using object/Map)' },
    { id: 76, sectionId: 'dsa', subsection: 'Arrays', text: 'Find the majority element (appears > n/2 times – Boyer-Moore)' },
    { id: 77, sectionId: 'dsa', subsection: 'Arrays', text: 'Find second largest / second smallest element in array' },
    { id: 78, sectionId: 'dsa', subsection: 'Arrays', text: 'Next Greater Element (for each element – monotonic stack)' },

    // Two Pointers & Sliding Window (3)
    { id: 79, sectionId: 'dsa', subsection: 'Two Pointers / Sliding Window', text: 'Two Sum (return indices that add to target – hashmap version)' },
    { id: 80, sectionId: 'dsa', subsection: 'Two Pointers / Sliding Window', text: 'Best Time to Buy and Sell Stock (max profit – one transaction)' },
    { id: 81, sectionId: 'dsa', subsection: 'Two Pointers / Sliding Window', text: 'Maximum subarray sum (Kadane’s algorithm)' },

    // Searching & Sorting (3)
    { id: 82, sectionId: 'dsa', subsection: 'Searching & Sorting', text: 'Implement Binary Search on a sorted array' },
    { id: 83, sectionId: 'dsa', subsection: 'Searching & Sorting', text: 'Find the middle element of a linked list (slow + fast pointer)' },
    { id: 84, sectionId: 'dsa', subsection: 'Searching & Sorting', text: 'Merge two sorted arrays (or merge into one array)' },

    // Linked List (5)
    { id: 85, sectionId: 'dsa', subsection: 'Linked List', text: 'Reverse a singly linked list (iterative + recursive both expected)' },
    { id: 86, sectionId: 'dsa', subsection: 'Linked List', text: 'Detect a cycle in linked list (Floyd’s tortoise-hare)' },
    { id: 87, sectionId: 'dsa', subsection: 'Linked List', text: 'Merge two sorted linked lists' },
    { id: 88, sectionId: 'dsa', subsection: 'Linked List', text: 'Remove duplicates from an unsorted linked list' },
    { id: 89, sectionId: 'dsa', subsection: 'Linked List', text: 'Delete a node when only pointer to that node is given (no head)' },

    // Stack & Queue (4)
    { id: 90, sectionId: 'dsa', subsection: 'Stack / Queue', text: 'Implement a simple Stack using array (push/pop/peek)' },
    { id: 236, sectionId: 'dsa', subsection: 'Stack / Queue', text: 'Implement a Queue using array' },
    { id: 237, sectionId: 'dsa', subsection: 'Stack / Queue', text: 'Implement Stack using Queues (or Queue using Stacks)' },
    { id: 238, sectionId: 'dsa', subsection: 'Stack / Queue', text: 'Min Stack (push, pop, top, getMin in O(1) time)' },

    // Classic Patterns (3)
    { id: 239, sectionId: 'dsa', subsection: 'Classic Easy Patterns', text: 'FizzBuzz (1 to n with 3/5 multiples)' },
    { id: 240, sectionId: 'dsa', subsection: 'Classic Easy Patterns', text: 'Factorial and Fibonacci (recursive vs iterative – recursion check)' },
    { id: 241, sectionId: 'dsa', subsection: 'Classic Easy Patterns', text: 'Valid Mountain Array (or similar pattern recognition)' },

    // WEBDEV section — HTML (7)
    { id: 91, sectionId: 'webdev', subsection: 'HTML', text: 'What is HTML?' },
    { id: 92, sectionId: 'webdev', subsection: 'HTML', text: 'What are semantic HTML elements?' },
    { id: 93, sectionId: 'webdev', subsection: 'HTML', text: 'Difference between div and span?' },
    { id: 94, sectionId: 'webdev', subsection: 'HTML', text: 'Difference between id and class?' },
    { id: 95, sectionId: 'webdev', subsection: 'HTML', text: 'What are meta tags?' },
    { id: 96, sectionId: 'webdev', subsection: 'HTML', text: 'What is localStorage vs sessionStorage?' },
    { id: 97, sectionId: 'webdev', subsection: 'HTML', text: 'What is SEO friendly HTML?' },

    // WEBDEV section — CSS (8)
    { id: 98, sectionId: 'webdev', subsection: 'CSS', text: 'What is CSS?' },
    { id: 99, sectionId: 'webdev', subsection: 'CSS', text: 'What is the box model?' },
    { id: 100, sectionId: 'webdev', subsection: 'CSS', text: 'Difference between margin and padding?' },
    { id: 101, sectionId: 'webdev', subsection: 'CSS', text: 'What is display property?' },
    { id: 102, sectionId: 'webdev', subsection: 'CSS', text: 'Difference between inline, block, inline-block?' },
    { id: 103, sectionId: 'webdev', subsection: 'CSS', text: 'What is flexbox?' },
    { id: 104, sectionId: 'webdev', subsection: 'CSS', text: 'What is CSS grid?' },
    { id: 105, sectionId: 'webdev', subsection: 'CSS', text: 'Difference between flexbox vs grid?' },

    // WEBDEV section — JavaScript: Basics (10)
    { id: 126, sectionId: 'webdev', subsection: 'JavaScript — Basics', text: 'What is JavaScript?' },
    { id: 127, sectionId: 'webdev', subsection: 'JavaScript — Basics', text: 'Difference between var, let, const?' },
    { id: 128, sectionId: 'webdev', subsection: 'JavaScript — Basics', text: 'What is hoisting?' },
    { id: 129, sectionId: 'webdev', subsection: 'JavaScript — Basics', text: 'What is scope in JS?' },
    { id: 130, sectionId: 'webdev', subsection: 'JavaScript — Basics', text: 'What is closure?' },
    { id: 131, sectionId: 'webdev', subsection: 'JavaScript — Basics', text: 'What is this keyword?' },
    { id: 132, sectionId: 'webdev', subsection: 'JavaScript — Basics', text: 'What is event bubbling?' },
    { id: 133, sectionId: 'webdev', subsection: 'JavaScript — Basics', text: 'What is event capturing?' },
    { id: 134, sectionId: 'webdev', subsection: 'JavaScript — Basics', text: 'Difference between == and ===?' },
    { id: 135, sectionId: 'webdev', subsection: 'JavaScript — Basics', text: 'What is NaN?' },

    // WEBDEV section — JavaScript: Intermediate (10)
    { id: 136, sectionId: 'webdev', subsection: 'JavaScript — Intermediate', text: 'What is callback function?' },
    { id: 137, sectionId: 'webdev', subsection: 'JavaScript — Intermediate', text: 'What is promise?' },
    { id: 138, sectionId: 'webdev', subsection: 'JavaScript — Intermediate', text: 'What is async/await?' },
    { id: 139, sectionId: 'webdev', subsection: 'JavaScript — Intermediate', text: 'What is event loop?' },
    { id: 140, sectionId: 'webdev', subsection: 'JavaScript — Intermediate', text: 'What is call stack?' },
    { id: 141, sectionId: 'webdev', subsection: 'JavaScript — Intermediate', text: 'What is setTimeout?' },
    { id: 142, sectionId: 'webdev', subsection: 'JavaScript — Intermediate', text: 'What is debouncing?' },
    { id: 143, sectionId: 'webdev', subsection: 'JavaScript — Intermediate', text: 'What is throttling?' },
    { id: 144, sectionId: 'webdev', subsection: 'JavaScript — Intermediate', text: 'What is prototype?' },
    { id: 145, sectionId: 'webdev', subsection: 'JavaScript — Intermediate', text: 'What is object destructuring?' },

    // WEBDEV section — JavaScript: Advanced (10)
    { id: 146, sectionId: 'webdev', subsection: 'JavaScript — Advanced', text: 'What is spread operator?' },
    { id: 147, sectionId: 'webdev', subsection: 'JavaScript — Advanced', text: 'What is rest operator?' },
    { id: 148, sectionId: 'webdev', subsection: 'JavaScript — Advanced', text: 'What is arrow function?' },
    { id: 149, sectionId: 'webdev', subsection: 'JavaScript — Advanced', text: 'Difference between map, filter, reduce?' },
    { id: 150, sectionId: 'webdev', subsection: 'JavaScript — Advanced', text: 'What is deep copy vs shallow copy?' },
    { id: 151, sectionId: 'webdev', subsection: 'JavaScript — Advanced', text: 'What is JSON?' },
    { id: 152, sectionId: 'webdev', subsection: 'JavaScript — Advanced', text: 'What is localStorage?' },
    { id: 153, sectionId: 'webdev', subsection: 'JavaScript — Advanced', text: 'What is sessionStorage?' },
    { id: 154, sectionId: 'webdev', subsection: 'JavaScript — Advanced', text: 'What is IIFE?' },
    { id: 155, sectionId: 'webdev', subsection: 'JavaScript — Advanced', text: 'What is currying?' },

    // WEBDEV section — JavaScript: Practical (10)
    { id: 156, sectionId: 'webdev', subsection: 'JavaScript — Practical', text: 'Reverse a string in JavaScript.' },
    { id: 157, sectionId: 'webdev', subsection: 'JavaScript — Practical', text: 'Find largest number in array.' },
    { id: 158, sectionId: 'webdev', subsection: 'JavaScript — Practical', text: 'Remove duplicates from array.' },
    { id: 159, sectionId: 'webdev', subsection: 'JavaScript — Practical', text: 'Flatten nested array.' },
    { id: 160, sectionId: 'webdev', subsection: 'JavaScript — Practical', text: 'Check palindrome in JavaScript.' },
    { id: 161, sectionId: 'webdev', subsection: 'JavaScript — Practical', text: 'Count character frequency in a string.' },
    { id: 162, sectionId: 'webdev', subsection: 'JavaScript — Practical', text: 'Sort array without sort().' },
    { id: 163, sectionId: 'webdev', subsection: 'JavaScript — Practical', text: 'Debounce function implementation.' },
    { id: 164, sectionId: 'webdev', subsection: 'JavaScript — Practical', text: 'Deep clone object.' },
    { id: 165, sectionId: 'webdev', subsection: 'JavaScript — Practical', text: 'Implement custom map function.' },

    // WEBDEV section — React: Basics (10)
    { id: 166, sectionId: 'webdev', subsection: 'React — Basics', text: 'What is React?' },
    { id: 167, sectionId: 'webdev', subsection: 'React — Basics', text: 'What is JSX?' },
    { id: 168, sectionId: 'webdev', subsection: 'React — Basics', text: 'What are components?' },
    { id: 169, sectionId: 'webdev', subsection: 'React — Basics', text: 'Difference between functional vs class components?' },
    { id: 170, sectionId: 'webdev', subsection: 'React — Basics', text: 'What are props?' },
    { id: 171, sectionId: 'webdev', subsection: 'React — Basics', text: 'What is state?' },
    { id: 172, sectionId: 'webdev', subsection: 'React — Basics', text: 'Difference between state vs props?' },
    { id: 173, sectionId: 'webdev', subsection: 'React — Basics', text: 'What is Virtual DOM?' },
    { id: 174, sectionId: 'webdev', subsection: 'React — Basics', text: 'What are keys in React?' },
    { id: 175, sectionId: 'webdev', subsection: 'React — Basics', text: 'What is React lifecycle?' },

    // WEBDEV section — React: Hooks (5)
    { id: 176, sectionId: 'webdev', subsection: 'React — Hooks', text: 'What is useState?' },
    { id: 177, sectionId: 'webdev', subsection: 'React — Hooks', text: 'What is useEffect?' },
    { id: 178, sectionId: 'webdev', subsection: 'React — Hooks', text: 'What is useContext?' },
    { id: 179, sectionId: 'webdev', subsection: 'React — Hooks', text: 'What is useRef?' },
    { id: 180, sectionId: 'webdev', subsection: 'React — Hooks', text: 'What is custom hook?' },

    // WEBDEV section — React: Advanced (5)
    { id: 181, sectionId: 'webdev', subsection: 'React — Advanced', text: 'What is React Router?' },
    { id: 182, sectionId: 'webdev', subsection: 'React — Advanced', text: 'What is Redux?' },
    { id: 183, sectionId: 'webdev', subsection: 'React — Advanced', text: 'What is Context API?' },
    { id: 184, sectionId: 'webdev', subsection: 'React — Advanced', text: 'What is lazy loading?' },
    { id: 185, sectionId: 'webdev', subsection: 'React — Advanced', text: 'What is code splitting?' },

    // WEBDEV section — React: Performance (4)
    { id: 186, sectionId: 'webdev', subsection: 'React — Performance', text: 'What is memoization in React?' },
    { id: 187, sectionId: 'webdev', subsection: 'React — Performance', text: 'What is React.memo?' },
    { id: 188, sectionId: 'webdev', subsection: 'React — Performance', text: 'What is useMemo?' },
    { id: 189, sectionId: 'webdev', subsection: 'React — Performance', text: 'What is useCallback?' },

    // WEBDEV section — React: Practical (6)
    { id: 190, sectionId: 'webdev', subsection: 'React — Practical', text: 'Fetch API in React.' },
    { id: 191, sectionId: 'webdev', subsection: 'React — Practical', text: 'Form handling in React.' },
    { id: 192, sectionId: 'webdev', subsection: 'React — Practical', text: 'Controlled vs uncontrolled components in React.' },
    { id: 193, sectionId: 'webdev', subsection: 'React — Practical', text: 'Error boundaries in React.' },
    { id: 194, sectionId: 'webdev', subsection: 'React — Practical', text: 'React folder structure best practices.' },
    { id: 195, sectionId: 'webdev', subsection: 'React — Practical', text: 'React optimization techniques.' },

    // WEBDEV section — API & Backend (10)
    { id: 196, sectionId: 'webdev', subsection: 'APIs & Backend', text: 'What is an API?' },
    { id: 197, sectionId: 'webdev', subsection: 'APIs & Backend', text: 'What is REST API?' },
    { id: 198, sectionId: 'webdev', subsection: 'APIs & Backend', text: 'Difference between REST and SOAP?' },
    { id: 199, sectionId: 'webdev', subsection: 'APIs & Backend', text: 'HTTP methods (GET, POST, PUT, DELETE)?' },
    { id: 200, sectionId: 'webdev', subsection: 'APIs & Backend', text: 'What is status code?' },
    { id: 201, sectionId: 'webdev', subsection: 'APIs & Backend', text: 'What is JWT authentication?' },
    { id: 202, sectionId: 'webdev', subsection: 'APIs & Backend', text: 'What is CORS?' },
    { id: 203, sectionId: 'webdev', subsection: 'APIs & Backend', text: 'What is fetch API?' },
    { id: 204, sectionId: 'webdev', subsection: 'APIs & Backend', text: 'What is axios?' },
    { id: 205, sectionId: 'webdev', subsection: 'APIs & Backend', text: 'What is rate limiting?' },

    // WEBDEV section — Git (10)
    { id: 206, sectionId: 'webdev', subsection: 'Git', text: 'What is Git?' },
    { id: 207, sectionId: 'webdev', subsection: 'Git', text: 'What is GitHub?' },
    { id: 208, sectionId: 'webdev', subsection: 'Git', text: 'Difference between git pull vs git fetch?' },
    { id: 209, sectionId: 'webdev', subsection: 'Git', text: 'What is branching in Git?' },
    { id: 210, sectionId: 'webdev', subsection: 'Git', text: 'What is merge conflict?' },
    { id: 211, sectionId: 'webdev', subsection: 'Git', text: 'What is git rebase?' },
    { id: 212, sectionId: 'webdev', subsection: 'Git', text: 'What is fork in Git?' },
    { id: 213, sectionId: 'webdev', subsection: 'Git', text: 'What is git stash?' },
    { id: 214, sectionId: 'webdev', subsection: 'Git', text: 'What is git reset?' },
    { id: 215, sectionId: 'webdev', subsection: 'Git', text: 'What is CI/CD?' },

    // WEBDEV section — TypeScript
    { id: 216, sectionId: 'webdev', subsection: 'TypeScript', text: 'What is TypeScript?' },
    { id: 217, sectionId: 'webdev', subsection: 'TypeScript', text: 'What is the difference between TypeScript and JavaScript?' },
    { id: 218, sectionId: 'webdev', subsection: 'TypeScript', text: 'What are types in TypeScript?' },
    { id: 219, sectionId: 'webdev', subsection: 'TypeScript', text: 'What is an interface in TypeScript?' },
    { id: 220, sectionId: 'webdev', subsection: 'TypeScript', text: 'What is the difference between interface and type?' },
    { id: 221, sectionId: 'webdev', subsection: 'TypeScript', text: 'What is the any type in TypeScript?' },
    { id: 222, sectionId: 'webdev', subsection: 'TypeScript', text: 'What is the unknown type in TypeScript?' },
    { id: 223, sectionId: 'webdev', subsection: 'TypeScript', text: 'What are union types in TypeScript?' },
    { id: 224, sectionId: 'webdev', subsection: 'TypeScript', text: 'What are intersection types in TypeScript?' },
    { id: 225, sectionId: 'webdev', subsection: 'TypeScript', text: 'What is type inference in TypeScript?' },
    { id: 226, sectionId: 'webdev', subsection: 'TypeScript', text: 'What are generics in TypeScript?' },
    { id: 227, sectionId: 'webdev', subsection: 'TypeScript', text: 'What is the never type?' },
    { id: 228, sectionId: 'webdev', subsection: 'TypeScript', text: 'What is type assertion in TypeScript?' },
    { id: 229, sectionId: 'webdev', subsection: 'TypeScript', text: 'What are enums in TypeScript?' },
    { id: 230, sectionId: 'webdev', subsection: 'TypeScript', text: 'What is the difference between null and undefined in TypeScript?' },

    // WEBDEV section — Next.js
    { id: 231, sectionId: 'webdev', subsection: 'Next.js', text: 'What is Next.js?' },
    { id: 232, sectionId: 'webdev', subsection: 'Next.js', text: 'What are the key features of Next.js?' },
    { id: 233, sectionId: 'webdev', subsection: 'Next.js', text: 'What is the difference between Next.js and React?' },
    { id: 234, sectionId: 'webdev', subsection: 'Next.js', text: 'What is server-side rendering (SSR) in Next.js?' },
    { id: 235, sectionId: 'webdev', subsection: 'Next.js', text: 'What is static site generation (SSG)?' },
    { id: 236, sectionId: 'webdev', subsection: 'Next.js', text: 'What is incremental static regeneration (ISR)?' },
    { id: 237, sectionId: 'webdev', subsection: 'Next.js', text: 'What is the difference between SSR and SSG?' },
    { id: 238, sectionId: 'webdev', subsection: 'Next.js', text: 'What are API routes in Next.js?' },
    { id: 239, sectionId: 'webdev', subsection: 'Next.js', text: 'What is file-based routing in Next.js?' },
    { id: 240, sectionId: 'webdev', subsection: 'Next.js', text: 'What is the App Router in Next.js?' },
    { id: 241, sectionId: 'webdev', subsection: 'Next.js', text: 'What is the difference between App Router and Pages Router?' },
    { id: 242, sectionId: 'webdev', subsection: 'Next.js', text: 'What are server components in Next.js?' },
    { id: 243, sectionId: 'webdev', subsection: 'Next.js', text: 'What are client components in Next.js?' },
    { id: 244, sectionId: 'webdev', subsection: 'Next.js', text: 'What is the getServerSideProps function?' },
    { id: 245, sectionId: 'webdev', subsection: 'Next.js', text: 'What is the getStaticProps function?' },

    // SYSTEM DESIGN section — Fundamental / Core Concepts (10)
    { id: 339, sectionId: 'systemdesign', subsection: '1. Fundamental / Core Concepts', text: 'What happens when you type a URL in the browser?' },
    { id: 340, sectionId: 'systemdesign', subsection: '1. Fundamental / Core Concepts', text: 'What is DNS and how does it work?' },
    { id: 341, sectionId: 'systemdesign', subsection: '1. Fundamental / Core Concepts', text: 'What is a CDN? Why do we use it?' },
    { id: 342, sectionId: 'systemdesign', subsection: '1. Fundamental / Core Concepts', text: 'What is load balancing? Types of load balancers?' },
    { id: 343, sectionId: 'systemdesign', subsection: '1. Fundamental / Core Concepts', text: 'What is horizontal vs vertical scaling?' },
    { id: 344, sectionId: 'systemdesign', subsection: '1. Fundamental / Core Concepts', text: 'What is caching? Types (browser, server, CDN)?' },
    { id: 345, sectionId: 'systemdesign', subsection: '1. Fundamental / Core Concepts', text: 'What is CAP theorem?' },
    { id: 346, sectionId: 'systemdesign', subsection: '1. Fundamental / Core Concepts', text: 'What is consistency vs availability?' },
    { id: 347, sectionId: 'systemdesign', subsection: '1. Fundamental / Core Concepts', text: 'What is sharding / partitioning?' },
    { id: 348, sectionId: 'systemdesign', subsection: '1. Fundamental / Core Concepts', text: 'What is replication?' },

    // SYSTEM DESIGN section — Database & Storage Design (10)
    { id: 349, sectionId: 'systemdesign', subsection: '2. Database & Storage Design', text: 'SQL vs NoSQL — when to use what?' },
    { id: 350, sectionId: 'systemdesign', subsection: '2. Database & Storage Design', text: 'What is indexing? How does it improve performance?' },
    { id: 351, sectionId: 'systemdesign', subsection: '2. Database & Storage Design', text: 'What is normalization vs denormalization?' },
    { id: 352, sectionId: 'systemdesign', subsection: '2. Database & Storage Design', text: 'How do you design a database for millions of users?' },
    { id: 353, sectionId: 'systemdesign', subsection: '2. Database & Storage Design', text: 'What is ACID vs BASE?' },
    { id: 354, sectionId: 'systemdesign', subsection: '2. Database & Storage Design', text: 'How do you handle database scaling?' },
    { id: 355, sectionId: 'systemdesign', subsection: '2. Database & Storage Design', text: 'What is eventual consistency?' },
    { id: 356, sectionId: 'systemdesign', subsection: '2. Database & Storage Design', text: 'How to avoid database bottlenecks?' },
    { id: 357, sectionId: 'systemdesign', subsection: '2. Database & Storage Design', text: 'What is connection pooling?' },
    { id: 358, sectionId: 'systemdesign', subsection: '2. Database & Storage Design', text: 'How do you design schema for a large system?' },

    // SYSTEM DESIGN section — High-Level Design Questions (10)
    { id: 359, sectionId: 'systemdesign', subsection: '3. High-Level Design Questions', text: 'Design a URL shortener (like bit.ly)' },
    { id: 360, sectionId: 'systemdesign', subsection: '3. High-Level Design Questions', text: 'Design a chat system (like WhatsApp)' },
    { id: 361, sectionId: 'systemdesign', subsection: '3. High-Level Design Questions', text: 'Design a social media feed (like Instagram/Facebook)' },
    { id: 362, sectionId: 'systemdesign', subsection: '3. High-Level Design Questions', text: 'Design a file storage system (like Google Drive)' },
    { id: 363, sectionId: 'systemdesign', subsection: '3. High-Level Design Questions', text: 'Design a video streaming platform (like YouTube)' },
    { id: 364, sectionId: 'systemdesign', subsection: '3. High-Level Design Questions', text: 'Design a ride-sharing system (like Uber)' },
    { id: 365, sectionId: 'systemdesign', subsection: '3. High-Level Design Questions', text: 'Design a food delivery system (like Zomato/Swiggy)' },
    { id: 366, sectionId: 'systemdesign', subsection: '3. High-Level Design Questions', text: 'Design a notification system' },
    { id: 367, sectionId: 'systemdesign', subsection: '3. High-Level Design Questions', text: 'Design a rate limiter' },
    { id: 368, sectionId: 'systemdesign', subsection: '3. High-Level Design Questions', text: 'Design a search system (like Google search)' },

    // SYSTEM DESIGN section — Performance & Scalability (10)
    { id: 369, sectionId: 'systemdesign', subsection: '4. Performance & Scalability', text: 'How to handle high traffic (millions of requests)?' },
    { id: 370, sectionId: 'systemdesign', subsection: '4. Performance & Scalability', text: 'How to reduce latency in a system?' },
    { id: 371, sectionId: 'systemdesign', subsection: '4. Performance & Scalability', text: 'How do you design for fault tolerance?' },
    { id: 372, sectionId: 'systemdesign', subsection: '4. Performance & Scalability', text: 'What is auto-scaling?' },
    { id: 373, sectionId: 'systemdesign', subsection: '4. Performance & Scalability', text: 'How to prevent system crashes?' },
    { id: 374, sectionId: 'systemdesign', subsection: '4. Performance & Scalability', text: 'How to handle spikes (e.g., sale on Flipkart)?' },
    { id: 375, sectionId: 'systemdesign', subsection: '4. Performance & Scalability', text: 'What is queue (Kafka/RabbitMQ) and why use it?' },
    { id: 376, sectionId: 'systemdesign', subsection: '4. Performance & Scalability', text: 'What is backpressure?' },
    { id: 377, sectionId: 'systemdesign', subsection: '4. Performance & Scalability', text: 'How to monitor system health?' },
    { id: 378, sectionId: 'systemdesign', subsection: '4. Performance & Scalability', text: 'How to design a highly available system?' }
];
