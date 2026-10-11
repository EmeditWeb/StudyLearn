import type { Task } from './data';

export const additionalModules: Task[] = [
  {
    "id": "algebra-like-terms",
    "trackId": "algebra",
    "title": "Collect like terms",
    "concept": "Expressions",
    "minutes": 15,
    "description": "Simplify the expression without treating the constant as another x term.",
    "goal": "Simplify the expression without treating the constant as another x term.",
    "code": "3x + 2x - 4",
    "clarification": "Simplify the expression without treating the constant as another x term. Explain each step using the example shown.",
    "hints": [
      "Separate variable terms from the constant.",
      "Add the coefficients of 3x and 2x; keep -4 separate.",
      "The result is 5x - 4. Try x = 2 in both versions to confirm they agree."
    ],
    "question": "Which expression is equivalent?",
    "options": [
      "5x - 4",
      "x - 4",
      "5x - 20"
    ],
    "answer": 0,
    "source": "https://openstax.org/details/books/elementary-algebra-2e"
  },
  {
    "id": "algebra-distribute",
    "trackId": "algebra",
    "title": "Open the brackets",
    "concept": "Distributive property",
    "minutes": 15,
    "description": "Expand the bracket, solve for x and check the result.",
    "goal": "Expand the bracket, solve for x and check the result.",
    "code": "3(x + 2) = 18",
    "clarification": "Expand the bracket, solve for x and check the result. Explain each step using the example shown.",
    "hints": [
      "The 3 multiplies every term inside the bracket.",
      "Expand to 3x + 6 = 18, then subtract 6 from both sides.",
      "3x = 12, so x = 4. Check 3(4 + 2) = 18."
    ],
    "question": "What is x?",
    "options": [
      "6",
      "4",
      "16"
    ],
    "answer": 1,
    "source": "https://openstax.org/details/books/elementary-algebra-2e"
  },
  {
    "id": "algebra-both-sides",
    "trackId": "algebra",
    "title": "Bring variables together",
    "concept": "Linear equations",
    "minutes": 15,
    "description": "Solve an equation with variables on both sides.",
    "goal": "Solve an equation with variables on both sides.",
    "code": "5x - 4 = 2x + 11",
    "clarification": "Solve an equation with variables on both sides. Explain each step using the example shown.",
    "hints": [
      "Choose one x term to remove from both sides.",
      "Subtract 2x to obtain 3x - 4 = 11, then add 4.",
      "3x = 15, so x = 5. Both original sides equal 21 when x = 5."
    ],
    "question": "What is x?",
    "options": [
      "3",
      "15",
      "5"
    ],
    "answer": 2,
    "source": "https://openstax.org/details/books/elementary-algebra-2e"
  },
  {
    "id": "algebra-inequality",
    "trackId": "algebra",
    "title": "Watch the inequality sign",
    "concept": "Inequalities",
    "minutes": 15,
    "description": "Solve the inequality and test a value that satisfies it.",
    "goal": "Solve the inequality and test a value that satisfies it.",
    "code": "-2x < 6",
    "clarification": "Solve the inequality and test a value that satisfies it. Explain each step using the example shown.",
    "hints": [
      "Notice that the coefficient of x is negative.",
      "Dividing an inequality by a negative number reverses its direction.",
      "Divide by -2 to get x > -3. For example, x = 0 gives 0 < 6."
    ],
    "question": "Which is the solution?",
    "options": [
      "x > -3",
      "x < -3",
      "x > 3"
    ],
    "answer": 0,
    "source": "https://openstax.org/details/books/elementary-algebra-2e"
  },
  {
    "id": "algebra-word-problem",
    "trackId": "algebra",
    "title": "Turn a story into an equation",
    "concept": "Modelling",
    "minutes": 15,
    "description": "Use p for the pen price, write an equation and find both prices.",
    "goal": "Use p for the pen price, write an equation and find both prices.",
    "code": "A notebook costs 200 units more than a pen.\nTogether they cost 800 units.",
    "clarification": "Use p for the pen price, write an equation and find both prices. Explain each step using the example shown.",
    "hints": [
      "Represent the notebook price using p and the extra 200.",
      "The total is p + (p + 200) = 800.",
      "2p = 600, so the pen costs 300 and the notebook 500. Add them to check the total."
    ],
    "question": "Which equation represents the total?",
    "options": [
      "p + 200 = 800",
      "2p + 200 = 800",
      "2p = 800"
    ],
    "answer": 1,
    "source": "https://openstax.org/details/books/elementary-algebra-2e"
  },
  {
    "id": "geometry-area",
    "trackId": "geometry",
    "title": "Separate area from perimeter",
    "concept": "Measurement",
    "minutes": 15,
    "description": "Calculate area and perimeter with the correct units.",
    "goal": "Calculate area and perimeter with the correct units.",
    "code": "Rectangle: length 8 cm, width 3 cm.",
    "clarification": "Calculate area and perimeter with the correct units. Explain each step using the example shown.",
    "hints": [
      "Area covers the inside; perimeter measures the boundary.",
      "Multiply 8 by 3 for area; add 8 + 3 + 8 + 3 for perimeter.",
      "The area is 24 square centimetres and the perimeter is 22 centimetres."
    ],
    "question": "What is the area?",
    "options": [
      "22 cm²",
      "11 cm²",
      "24 cm²"
    ],
    "answer": 2,
    "source": "https://openstax.org/details/books/elementary-algebra-2e"
  },
  {
    "id": "geometry-pythagoras",
    "trackId": "geometry",
    "title": "Find a right triangle side",
    "concept": "Pythagorean theorem",
    "minutes": 15,
    "description": "Find the hypotenuse and explain why you do not add the lengths directly.",
    "goal": "Find the hypotenuse and explain why you do not add the lengths directly.",
    "code": "Right triangle legs: 3 cm and 4 cm.",
    "clarification": "Find the hypotenuse and explain why you do not add the lengths directly. Explain each step using the example shown.",
    "hints": [
      "The hypotenuse is opposite the right angle.",
      "Use c² = 3² + 4² = 9 + 16.",
      "c² = 25, so c = 5 cm. The theorem applies to right triangles."
    ],
    "question": "How long is the hypotenuse?",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm"
    ],
    "answer": 0,
    "source": "https://openstax.org/details/books/elementary-algebra-2e"
  },
  {
    "id": "geometry-scale",
    "trackId": "geometry",
    "title": "Read a scale drawing",
    "concept": "Similar figures",
    "minutes": 15,
    "description": "Convert a drawing length into the actual wall length.",
    "goal": "Convert a drawing length into the actual wall length.",
    "code": "A drawing uses 1 cm for 2 metres.\nA wall is 4 cm long in the drawing.",
    "clarification": "Convert a drawing length into the actual wall length. Explain each step using the example shown.",
    "hints": [
      "Apply the same scale to each centimetre on the drawing.",
      "Multiply the drawing length, 4, by the scale value, 2 metres per cm.",
      "The wall is 8 metres long. Keep drawing units and real units separate."
    ],
    "question": "What is the actual wall length?",
    "options": [
      "2 metres",
      "8 metres",
      "6 metres"
    ],
    "answer": 1,
    "source": "https://openstax.org/details/books/elementary-algebra-2e"
  },
  {
    "id": "statistics-mean",
    "trackId": "statistics",
    "title": "Check the mean",
    "concept": "Averages",
    "minutes": 15,
    "description": "Calculate the mean and explain the role of the number of observations.",
    "goal": "Calculate the mean and explain the role of the number of observations.",
    "code": "Values: 4, 6, 8, 10",
    "clarification": "Calculate the mean and explain the role of the number of observations. Explain each step using the example shown.",
    "hints": [
      "Find the total of all four values.",
      "The sum is 28. Divide by the count, 4.",
      "The mean is 7. Check that your answer lies between the smallest and largest values."
    ],
    "question": "What is the mean?",
    "options": [
      "28",
      "4",
      "7"
    ],
    "answer": 2,
    "source": "https://openstax.org/details/books/introductory-statistics-2e"
  },
  {
    "id": "statistics-range",
    "trackId": "statistics",
    "title": "Describe the spread",
    "concept": "Variability",
    "minutes": 15,
    "description": "Find the range and explain what it tells you about the data.",
    "goal": "Find the range and explain what it tells you about the data.",
    "code": "Values: 3, 4, 4, 10",
    "clarification": "Find the range and explain what it tells you about the data. Explain each step using the example shown.",
    "hints": [
      "Identify the smallest and largest values.",
      "Range is maximum minus minimum, not the number of values.",
      "10 - 3 = 7. The range does not describe how often intermediate values occur."
    ],
    "question": "What is the range?",
    "options": [
      "7",
      "4",
      "13"
    ],
    "answer": 0,
    "source": "https://openstax.org/details/books/introductory-statistics-2e"
  },
  {
    "id": "statistics-probability",
    "trackId": "statistics",
    "title": "Count equally likely outcomes",
    "concept": "Probability",
    "minutes": 15,
    "description": "Find the probability of rolling an even number.",
    "goal": "Find the probability of rolling an even number.",
    "code": "A fair six-sided die has faces 1 through 6.",
    "clarification": "Find the probability of rolling an even number. Explain each step using the example shown.",
    "hints": [
      "List the even faces before calculating.",
      "The even faces are 2, 4 and 6: three favourable outcomes out of six.",
      "The probability is 3/6 = 1/2. This relies on the die being fair."
    ],
    "question": "What is the probability?",
    "options": [
      "1/6",
      "1/2",
      "2/3"
    ],
    "answer": 1,
    "source": "https://openstax.org/details/books/introductory-statistics-2e"
  },
  {
    "id": "physics-acceleration",
    "trackId": "physics",
    "title": "Notice a change in velocity",
    "concept": "Acceleration",
    "minutes": 15,
    "description": "Calculate average acceleration and include units.",
    "goal": "Calculate average acceleration and include units.",
    "code": "Velocity rises from 2 m/s to 10 m/s in 4 s.\nMotion is along the same straight-line direction.",
    "clarification": "Calculate average acceleration and include units. Explain each step using the example shown.",
    "hints": [
      "Find the change in velocity first.",
      "The change is 10 - 2 = 8 m/s. Divide by 4 seconds.",
      "Average acceleration is 2 m/s². This is a rate of change, not a speed."
    ],
    "question": "What is the average acceleration?",
    "options": [
      "8 m/s²",
      "32 m/s²",
      "2 m/s²"
    ],
    "answer": 2,
    "source": "https://openstax.org/details/books/physics"
  },
  {
    "id": "physics-force",
    "trackId": "physics",
    "title": "Connect force and acceleration",
    "concept": "Newton’s second law",
    "minutes": 15,
    "description": "Calculate the net force on the object.",
    "goal": "Calculate the net force on the object.",
    "code": "Mass: 3 kg. Acceleration: 2 m/s².",
    "clarification": "Calculate the net force on the object. Explain each step using the example shown.",
    "hints": [
      "Use the relationship between net force, mass and acceleration.",
      "Newton’s second law is F = ma for this constant-mass example.",
      "3 × 2 = 6 newtons. The result is net force, after forces are combined."
    ],
    "question": "What is the net force?",
    "options": [
      "6 N",
      "1.5 N",
      "5 N"
    ],
    "answer": 0,
    "source": "https://openstax.org/details/books/physics"
  },
  {
    "id": "physics-units",
    "trackId": "physics",
    "title": "Convert before comparing",
    "concept": "Units",
    "minutes": 15,
    "description": "Express the speed in metres per second.",
    "goal": "Express the speed in metres per second.",
    "code": "A runner moves at 36 km/h.",
    "clarification": "Express the speed in metres per second. Explain each step using the example shown.",
    "hints": [
      "Convert kilometres to metres and hours to seconds.",
      "36 km/h = 36000 metres / 3600 seconds.",
      "The result is 10 m/s. Check why multiplying by 1000 alone is not enough."
    ],
    "question": "Which speed is equivalent?",
    "options": [
      "36 m/s",
      "10 m/s",
      "36000 m/s"
    ],
    "answer": 1,
    "source": "https://openstax.org/details/books/physics"
  },
  {
    "id": "data-analysis-duplicates",
    "trackId": "data-analysis",
    "title": "Find duplicate records",
    "concept": "Data cleaning",
    "minutes": 15,
    "description": "Identify the duplicate ID and decide what must be checked before removing a row.",
    "goal": "Identify the duplicate ID and decide what must be checked before removing a row.",
    "code": "Rows: ID 101, ID 102, ID 101.\nThe dataset defines ID as a unique record identifier.",
    "clarification": "Identify the duplicate ID and decide what must be checked before removing a row. Explain each step using the example shown.",
    "hints": [
      "Look for an ID appearing more than once.",
      "101 appears twice. Compare the two complete records before deciding how to deduplicate.",
      "Investigate why ID 101 repeats and document your rule. Repeated values in other columns are not automatically duplicates."
    ],
    "question": "Which ID needs investigation?",
    "options": [
      "102",
      "Every ID",
      "101"
    ],
    "answer": 2,
    "source": "https://openstax.org/details/books/introductory-statistics-2e"
  },
  {
    "id": "data-analysis-percentages",
    "trackId": "data-analysis",
    "title": "Use the right denominator",
    "concept": "Percentages",
    "minutes": 15,
    "description": "Calculate the completion percentage and state its denominator.",
    "goal": "Calculate the completion percentage and state its denominator.",
    "code": "12 of 40 learners completed an exercise.",
    "clarification": "Calculate the completion percentage and state its denominator. Explain each step using the example shown.",
    "hints": [
      "Write the completed count as a fraction of all 40 learners.",
      "12/40 = 0.3. Multiply by 100 for a percentage.",
      "Completion is 30%. Explain why dividing by only the 12 completers would be misleading."
    ],
    "question": "What percentage completed?",
    "options": [
      "30%",
      "12%",
      "40%"
    ],
    "answer": 0,
    "source": "https://openstax.org/details/books/introductory-statistics-2e"
  },
  {
    "id": "data-analysis-comparison",
    "trackId": "data-analysis",
    "title": "Compare rates fairly",
    "concept": "Comparisons",
    "minutes": 15,
    "description": "Compare completion rates rather than only raw completion counts.",
    "goal": "Compare completion rates rather than only raw completion counts.",
    "code": "Group A: 18 completed out of 20.\nGroup B: 30 completed out of 50.",
    "clarification": "Compare completion rates rather than only raw completion counts. Explain each step using the example shown.",
    "hints": [
      "The groups have different total sizes.",
      "A has 18/20 = 90%; B has 30/50 = 60%.",
      "A has the higher observed rate. This comparison alone does not establish what caused the difference."
    ],
    "question": "Which group has the higher observed completion rate?",
    "options": [
      "Group B",
      "Group A",
      "They are equal"
    ],
    "answer": 1,
    "source": "https://openstax.org/details/books/introductory-statistics-2e"
  },
  {
    "id": "system-design-cache",
    "trackId": "system-design",
    "title": "Know when a cache helps",
    "concept": "Caching",
    "minutes": 15,
    "description": "Explain what caching could save and how stale content might occur.",
    "goal": "Explain what caching could save and how stale content might occur.",
    "code": "The same public course description is requested 1000 times.\nThe description changes only occasionally.",
    "clarification": "Explain what caching could save and how stale content might occur. Explain each step using the example shown.",
    "hints": [
      "Identify which repeated work could be avoided.",
      "A cache can reuse a previous response, but updates must eventually refresh it.",
      "Cache the public description with a refresh or invalidation strategy. Do not assume private learner responses can be shared."
    ],
    "question": "What is a key caching trade-off?",
    "options": [
      "Freshness versus reuse",
      "More buttons versus fewer icons",
      "Dark mode versus light mode"
    ],
    "answer": 0,
    "source": "https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/"
  },
  {
    "id": "system-design-availability",
    "trackId": "system-design",
    "title": "Remove one failure point",
    "concept": "Reliability",
    "minutes": 15,
    "description": "Suggest a way to reduce the impact of one instance failing.",
    "goal": "Suggest a way to reduce the impact of one instance failing.",
    "code": "One application instance serves every request.\nIf it stops, the service is unavailable.",
    "clarification": "Suggest a way to reduce the impact of one instance failing. Explain each step using the example shown.",
    "hints": [
      "Trace what happens when the only instance fails.",
      "Multiple healthy instances behind traffic routing can reduce that particular risk.",
      "Use more than one instance with health checks and routing. Shared dependencies can still fail, so this is not a complete guarantee."
    ],
    "question": "Which change addresses the single application instance risk?",
    "options": [
      "Add only a bigger logo",
      "Use multiple instances with health-aware routing",
      "Store every request in the browser"
    ],
    "answer": 1,
    "source": "https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/"
  },
  {
    "id": "system-design-queues",
    "trackId": "system-design",
    "title": "Separate immediate work from background work",
    "concept": "Queues",
    "minutes": 15,
    "description": "Explain how a queue could keep the upload response quick without losing track of the job.",
    "goal": "Explain how a queue could keep the upload response quick without losing track of the job.",
    "code": "An image upload triggers a slow thumbnail-generation task.",
    "clarification": "Explain how a queue could keep the upload response quick without losing track of the job. Explain each step using the example shown.",
    "hints": [
      "Distinguish accepting the upload from finishing the thumbnail.",
      "Put the thumbnail job in a queue and let a worker process it.",
      "Return a pending status and process the queued job separately. Plan for retries without creating duplicate outputs."
    ],
    "question": "What should the immediate response communicate?",
    "options": [
      "The thumbnail is definitely finished",
      "The job no longer exists",
      "The upload was accepted and processing is pending"
    ],
    "answer": 2,
    "source": "https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/"
  },
  {
    "id": "javascript-map",
    "trackId": "javascript",
    "title": "Transform each array item",
    "concept": "Arrays",
    "minutes": 15,
    "description": "Predict the transformed array and distinguish map from changing the original array.",
    "goal": "Predict the transformed array and distinguish map from changing the original array.",
    "code": "const values = [2, 4, 6];\nconst doubled = values.map(value => value * 2);",
    "clarification": "Predict the transformed array and distinguish map from changing the original array. Explain each step using the example shown.",
    "hints": [
      "Apply the callback to each number in order.",
      "Double 2, then 4, then 6.",
      "doubled is [4, 8, 12]. This callback does not change values itself."
    ],
    "question": "What is doubled?",
    "options": [
      "[4, 8, 12]",
      "[2, 4, 6]",
      "[4, 6, 8]"
    ],
    "answer": 0,
    "source": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
  },
  {
    "id": "javascript-return",
    "trackId": "javascript",
    "title": "Return the calculated value",
    "concept": "Functions",
    "minutes": 15,
    "description": "Fix the function so its caller receives the sum.",
    "goal": "Fix the function so its caller receives the sum.",
    "code": "function add(a, b) {\n  a + b;\n}\nconst result = add(2, 3);",
    "clarification": "Fix the function so its caller receives the sum. Explain each step using the example shown.",
    "hints": [
      "An expression inside a function is not automatically returned.",
      "Use return with the expression a + b.",
      "Write return a + b; inside the function. The caller then receives 5."
    ],
    "question": "Which line supplies the result?",
    "options": [
      "console.log(a + b);",
      "return a + b;",
      "const sum = a + b;"
    ],
    "answer": 1,
    "source": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
  },
  {
    "id": "javascript-filter",
    "trackId": "javascript",
    "title": "Keep only matching items",
    "concept": "Array filtering",
    "minutes": 15,
    "description": "Predict which values remain after filtering.",
    "goal": "Predict which values remain after filtering.",
    "code": "const scores = [30, 60, 80];\nconst passing = scores.filter(score => score >= 50);",
    "clarification": "Predict which values remain after filtering. Explain each step using the example shown.",
    "hints": [
      "Evaluate the condition separately for each score.",
      "30 fails the condition; 60 and 80 satisfy it.",
      "The result is [60, 80]. Filter retains matching values rather than transforming every value."
    ],
    "question": "What is passing?",
    "options": [
      "[30]",
      "[true, true]",
      "[60, 80]"
    ],
    "answer": 2,
    "source": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
  },
  {
    "id": "html-css-box-sizing",
    "trackId": "html-css",
    "title": "Fit a box inside its width",
    "concept": "Box model",
    "minutes": 15,
    "description": "Explain which measurements are included in the specified width.",
    "goal": "Explain which measurements are included in the specified width.",
    "code": "A box has width: 200px, padding: 10px, border: 1px.\nUse box-sizing: border-box.",
    "clarification": "Explain which measurements are included in the specified width. Explain each step using the example shown.",
    "hints": [
      "Consider both left and right padding and borders.",
      "Border-box includes content, padding and border within the specified width.",
      "The outer border width stays 200px; margins are outside that width. Compare this with content-box."
    ],
    "question": "What is the outer border width?",
    "options": [
      "200px",
      "222px",
      "180px"
    ],
    "answer": 0,
    "source": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
  },
  {
    "id": "html-css-responsive",
    "trackId": "html-css",
    "title": "Let a grid shrink safely",
    "concept": "Responsive layout",
    "minutes": 15,
    "description": "Describe a small-screen rule that changes the grid to one column.",
    "goal": "Describe a small-screen rule that changes the grid to one column.",
    "code": ".cards { display: grid; grid-template-columns: 1fr 1fr; }\nOn a narrow phone the two cards feel cramped.",
    "clarification": "Describe a small-screen rule that changes the grid to one column. Explain each step using the example shown.",
    "hints": [
      "The issue is the number of columns at narrow widths.",
      "Use a media query that applies grid-template-columns: 1fr at a suitable breakpoint.",
      "Stack cards in one column on narrow screens and test the real content for overflow."
    ],
    "question": "Which change directly addresses cramped columns?",
    "options": [
      "Increase every font to 80px",
      "Use one grid column at narrow widths",
      "Set body width to 1200px"
    ],
    "answer": 1,
    "source": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"
  },
  {
    "id": "html-css-semantics",
    "trackId": "html-css",
    "title": "Choose an element for an action",
    "concept": "Semantic HTML",
    "minutes": 15,
    "description": "Choose a native element appropriate for an in-page action.",
    "goal": "Choose a native element appropriate for an in-page action.",
    "code": "A clickable div is used to open a learning task.",
    "clarification": "Choose a native element appropriate for an in-page action. Explain each step using the example shown.",
    "hints": [
      "Distinguish an action from navigation to another URL.",
      "A button provides native keyboard activation and an appropriate role.",
      "Use a button for opening the task, give it a clear name and preserve visible focus."
    ],
    "question": "Which element best represents this action?",
    "options": [
      "span",
      "img",
      "button"
    ],
    "answer": 2,
    "source": "https://www.w3.org/WAI/ARIA/apg/patterns/button/"
  },
  {
    "id": "typescript-union",
    "trackId": "typescript",
    "title": "Narrow a union before using it",
    "concept": "Union types",
    "minutes": 15,
    "description": "Check the type before calling a string-only method.",
    "goal": "Check the type before calling a string-only method.",
    "code": "function label(value: string | number) {\n  // Return uppercase text for strings.\n}",
    "clarification": "Check the type before calling a string-only method. Explain each step using the example shown.",
    "hints": [
      "Not every possible value is a string.",
      "typeof value === \"string\" narrows this branch to string.",
      "Call value.toUpperCase() inside the string branch; handle the number branch separately."
    ],
    "question": "Which check narrows value to string?",
    "options": [
      "typeof value === \"string\"",
      "value === true",
      "value.length > 0"
    ],
    "answer": 0,
    "source": "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"
  },
  {
    "id": "typescript-optional",
    "trackId": "typescript",
    "title": "Handle an optional value",
    "concept": "Optional properties",
    "minutes": 15,
    "description": "Explain why learner.name may need a fallback before use.",
    "goal": "Explain why learner.name may need a fallback before use.",
    "code": "type Learner = { name?: string };\nconst learner: Learner = {};",
    "clarification": "Explain why learner.name may need a fallback before use. Explain each step using the example shown.",
    "hints": [
      "The question mark allows the property to be absent.",
      "An absent name gives undefined, so choose a suitable fallback.",
      "learner.name ?? \"Learner\" supplies a fallback when the name is nullish."
    ],
    "question": "What can learner.name be when absent?",
    "options": [
      "Always an empty string",
      "undefined",
      "Always zero"
    ],
    "answer": 1,
    "source": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"
  },
  {
    "id": "typescript-shape",
    "trackId": "typescript",
    "title": "Describe the shape of a task",
    "concept": "Object types",
    "minutes": 15,
    "description": "Describe title and completed with suitable property types.",
    "goal": "Describe title and completed with suitable property types.",
    "code": "const task = { title: \"Practice\", completed: false };",
    "clarification": "Describe title and completed with suitable property types. Explain each step using the example shown.",
    "hints": [
      "Read the value of each property separately.",
      "title holds text; completed holds a true-or-false value.",
      "Use { title: string; completed: boolean }. Explain which accidental assignment the types would reject."
    ],
    "question": "Which type matches completed?",
    "options": [
      "number",
      "string",
      "boolean"
    ],
    "answer": 2,
    "source": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"
  },
  {
    "id": "sql-sort",
    "trackId": "sql",
    "title": "Order the matching rows",
    "concept": "Ordering",
    "minutes": 15,
    "description": "Sort learners by score from highest to lowest.",
    "goal": "Sort learners by score from highest to lowest.",
    "code": "SELECT name, score FROM learners;",
    "clarification": "Sort learners by score from highest to lowest. Explain each step using the example shown.",
    "hints": [
      "Filtering and sorting are different operations.",
      "ORDER BY selects the sort column; DESC gives descending order.",
      "Add ORDER BY score DESC. If ties need a consistent order, add another sort key."
    ],
    "question": "Which clause sorts highest scores first?",
    "options": [
      "ORDER BY score DESC",
      "WHERE score DESC",
      "GROUP BY score ASC"
    ],
    "answer": 0,
    "source": "https://www.postgresql.org/docs/current/tutorial.html"
  },
  {
    "id": "sql-count",
    "trackId": "sql",
    "title": "Count rows in a table",
    "concept": "Aggregation",
    "minutes": 15,
    "description": "Explain what COUNT(*) measures.",
    "goal": "Explain what COUNT(*) measures.",
    "code": "SELECT COUNT(*) FROM attempts;",
    "clarification": "Explain what COUNT(*) measures. Explain each step using the example shown.",
    "hints": [
      "Think about the number of rows, not a sum of their values.",
      "COUNT(*) counts rows in the result, including rows with null values in some columns.",
      "For five matching rows the result is 5. Contrast this with COUNT(column), which excludes null column values."
    ],
    "question": "What does COUNT(*) count?",
    "options": [
      "Only distinct titles",
      "Rows",
      "The sum of all columns"
    ],
    "answer": 1,
    "source": "https://www.postgresql.org/docs/current/tutorial-agg.html"
  },
  {
    "id": "sql-join",
    "trackId": "sql",
    "title": "Connect related records",
    "concept": "Joins",
    "minutes": 15,
    "description": "Identify which fields should connect the two tables.",
    "goal": "Identify which fields should connect the two tables.",
    "code": "learners(id, name)\nattempts(id, learner_id)\nEach attempt belongs to a learner.",
    "clarification": "Identify which fields should connect the two tables. Explain each step using the example shown.",
    "hints": [
      "Match the foreign-key-like learner_id with the learner identifier.",
      "The relationship is attempts.learner_id = learners.id.",
      "Join on those fields to associate each attempt with its learner. Learner names are not reliable unique identifiers."
    ],
    "question": "Which join condition matches the relationship?",
    "options": [
      "attempts.id = learners.id",
      "attempts.id = learners.name",
      "attempts.learner_id = learners.id"
    ],
    "answer": 2,
    "source": "https://www.postgresql.org/docs/current/tutorial-join.html"
  },
  {
    "id": "git-staging",
    "trackId": "git",
    "title": "Choose what belongs in a commit",
    "concept": "Staging",
    "minutes": 15,
    "description": "Stage the intended file and inspect the staged changes.",
    "goal": "Stage the intended file and inspect the staged changes.",
    "code": "You changed lesson.ts and notes.txt.\nOnly lesson.ts should be included in the next commit.",
    "clarification": "Stage the intended file and inspect the staged changes. Explain each step using the example shown.",
    "hints": [
      "Do not stage every changed file without reviewing it.",
      "git add lesson.ts stages that file.",
      "Run git add lesson.ts, then git diff --staged. Review the result before committing."
    ],
    "question": "Which command stages just lesson.ts?",
    "options": [
      "git add lesson.ts",
      "git add .",
      "git status"
    ],
    "answer": 0,
    "source": "https://git-scm.com/docs/git-add"
  },
  {
    "id": "git-history",
    "trackId": "git",
    "title": "Inspect a project’s history",
    "concept": "History",
    "minutes": 15,
    "description": "Choose a command that shows the commit history compactly.",
    "goal": "Choose a command that shows the commit history compactly.",
    "code": "You want to review recent commit messages.",
    "clarification": "Choose a command that shows the commit history compactly. Explain each step using the example shown.",
    "hints": [
      "History is different from current working-tree status.",
      "git log displays commits; --oneline gives a compact summary.",
      "Use git log --oneline to inspect recent commits. It does not change files."
    ],
    "question": "Which command shows compact history?",
    "options": [
      "git add --all",
      "git log --oneline",
      "git checkout ."
    ],
    "answer": 1,
    "source": "https://git-scm.com/docs/git-log"
  },
  {
    "id": "git-conflict",
    "trackId": "git",
    "title": "Resolve both intentions",
    "concept": "Merge conflicts",
    "minutes": 15,
    "description": "Explain how to resolve conflicting copy without leaving conflict markers.",
    "goal": "Explain how to resolve conflicting copy without leaving conflict markers.",
    "code": "<<<<<<< HEAD\nStart your next attempt\n=======\nContinue learning\n>>>>>>> feature-copy",
    "clarification": "Explain how to resolve conflicting copy without leaving conflict markers. Explain each step using the example shown.",
    "hints": [
      "Read what each side intended before deciding the final wording.",
      "Choose a reviewed final line, remove the markers and inspect the diff.",
      "Keep the agreed wording, remove all markers, test the affected page and stage the resolution. Do not silently discard another contributor’s intent."
    ],
    "question": "What must a resolved file no longer contain?",
    "options": [
      "Any readable text",
      "Its filename",
      "Conflict markers"
    ],
    "answer": 2,
    "source": "https://git-scm.com/docs/git-merge"
  },
  {
    "id": "algorithms-binary-search",
    "trackId": "algorithms",
    "title": "Check the search prerequisite",
    "concept": "Binary search",
    "minutes": 15,
    "description": "Explain why sorted order lets binary search discard half of the remaining search interval.",
    "goal": "Explain why sorted order lets binary search discard half of the remaining search interval.",
    "code": "Values: [2, 5, 9, 14, 20]\nTarget: 14",
    "clarification": "Explain why sorted order lets binary search discard half of the remaining search interval. Explain each step using the example shown.",
    "hints": [
      "Compare the target with the middle value.",
      "Here the middle value is 9, so 14 must lie to its right if present.",
      "Continue within the right half. This reasoning requires an ordered list, not arbitrary unsorted data."
    ],
    "question": "What is the key prerequisite?",
    "options": [
      "Sorted data",
      "Exactly five items",
      "Every value is even"
    ],
    "answer": 0,
    "source": "https://docs.python.org/3/library/bisect.html"
  },
  {
    "id": "algorithms-stack",
    "trackId": "algorithms",
    "title": "Follow the last item added",
    "concept": "Stacks",
    "minutes": 15,
    "description": "Predict the removed item using last-in, first-out order.",
    "goal": "Predict the removed item using last-in, first-out order.",
    "code": "Push A, then B, then C onto a stack.\nNow pop once.",
    "clarification": "Predict the removed item using last-in, first-out order. Explain each step using the example shown.",
    "hints": [
      "Trace the top of the stack after each push.",
      "C is the most recently added item.",
      "The pop removes C, leaving A and B. Explain why this differs from a queue."
    ],
    "question": "Which item is removed?",
    "options": [
      "A",
      "C",
      "B"
    ],
    "answer": 1,
    "source": "https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks"
  },
  {
    "id": "algorithms-queue",
    "trackId": "algorithms",
    "title": "Follow the first item added",
    "concept": "Queues",
    "minutes": 15,
    "description": "Predict the removed item using first-in, first-out order.",
    "goal": "Predict the removed item using first-in, first-out order.",
    "code": "Enqueue A, then B, then C.\nNow dequeue once.",
    "clarification": "Predict the removed item using first-in, first-out order. Explain each step using the example shown.",
    "hints": [
      "Track which item has waited longest.",
      "A entered first, before B and C.",
      "The dequeue removes A. Contrast this with popping from a stack."
    ],
    "question": "Which item is removed?",
    "options": [
      "C",
      "B",
      "A"
    ],
    "answer": 2,
    "source": "https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-queues"
  },
  {
    "id": "product-planning-prioritise",
    "trackId": "product-planning",
    "title": "Choose the smallest useful release",
    "concept": "Prioritisation",
    "minutes": 15,
    "description": "Choose the feature that directly addresses the stated learner need.",
    "goal": "Choose the feature that directly addresses the stated learner need.",
    "code": "Learners need to save a lesson. Suggested features: saved lessons, animated avatars, a colour theme.",
    "clarification": "Choose the feature that directly addresses the stated learner need. Explain each step using the example shown.",
    "hints": [
      "Restate the problem before comparing features.",
      "Which feature lets someone return to a lesson?",
      "Select saved lessons, then test whether learners can find them again."
    ],
    "question": "Which feature best addresses this need?",
    "options": [
      "Saved lessons",
      "Animated avatars",
      "A colour theme"
    ],
    "answer": 0,
    "source": "https://www.gov.uk/service-manual/user-research"
  },
  {
    "id": "product-planning-success",
    "trackId": "product-planning",
    "title": "Define a useful success measure",
    "concept": "Outcome measures",
    "minutes": 15,
    "description": "Choose a measure tied to the learner outcome.",
    "goal": "Choose a measure tied to the learner outcome.",
    "code": "Goal: help learners resume an unfinished lesson. Candidate measures: visits, logo clicks, successful resumptions.",
    "clarification": "Choose a measure tied to the learner outcome. Explain each step using the example shown.",
    "hints": [
      "Measure the change you want learners to experience.",
      "A visit does not prove a lesson was resumed.",
      "Count successful resumptions and compare with a baseline."
    ],
    "question": "Which measure best matches the goal?",
    "options": [
      "Logo clicks",
      "Successful lesson resumptions",
      "Total page visits"
    ],
    "answer": 1,
    "source": "https://www.gov.uk/service-manual/user-research"
  },
  {
    "id": "product-planning-assumption",
    "trackId": "product-planning",
    "title": "Test a risky assumption",
    "concept": "Small experiments",
    "minutes": 15,
    "description": "Choose an experiment that directly tests the assumption.",
    "goal": "Choose an experiment that directly tests the assumption.",
    "code": "Assumption: learners understand the label Resume. You can observe five people using a simple prototype.",
    "clarification": "Choose an experiment that directly tests the assumption. Explain each step using the example shown.",
    "hints": [
      "Identify what you do not yet know.",
      "Watch whether people locate their unfinished lesson.",
      "Ask them to resume a lesson without telling them which button to use."
    ],
    "question": "Which test provides the most relevant evidence?",
    "options": [
      "Ask if the logo looks good",
      "Add ten more features",
      "Observe learners trying to resume a lesson"
    ],
    "answer": 2,
    "source": "https://www.gov.uk/service-manual/user-research"
  },
  {
    "id": "research-neutral",
    "trackId": "research",
    "title": "Ask a neutral question",
    "concept": "Interview questions",
    "minutes": 15,
    "description": "Replace the leading question with one about a specific experience.",
    "goal": "Replace the leading question with one about a specific experience.",
    "code": "Draft question: Do you love how easy our new learning app is?",
    "clarification": "Replace the leading question with one about a specific experience. Explain each step using the example shown.",
    "hints": [
      "Avoid putting your preferred answer in the question.",
      "Ask about a recent event rather than a hypothetical compliment.",
      "Ask someone to describe the last time they tried to return to a lesson."
    ],
    "question": "Which question is most neutral?",
    "options": [
      "Tell me about the last time you returned to a lesson.",
      "Our app is easy, right?",
      "Would you praise our brilliant app?"
    ],
    "answer": 0,
    "source": "https://www.gov.uk/service-manual/user-research/using-in-depth-interviews"
  },
  {
    "id": "research-observation",
    "trackId": "research",
    "title": "Separate observation from interpretation",
    "concept": "Research evidence",
    "minutes": 15,
    "description": "Identify the statement that describes directly observed behaviour.",
    "goal": "Identify the statement that describes directly observed behaviour.",
    "code": "Observation: a learner tapped three labels before finding a saved lesson. Interpretation: the labels may be unclear.",
    "clarification": "Identify the statement that describes directly observed behaviour. Explain each step using the example shown.",
    "hints": [
      "Separate what happened from your explanation of it.",
      "Taps can be observed; confusion is an interpretation.",
      "Record the three taps, then investigate why they happened."
    ],
    "question": "Which is an observation?",
    "options": [
      "The learner dislikes learning",
      "The learner tapped three labels",
      "The learner has poor motivation"
    ],
    "answer": 1,
    "source": "https://www.gov.uk/service-manual/user-research/using-in-depth-interviews"
  },
  {
    "id": "research-consent",
    "trackId": "research",
    "title": "Respect participant choice",
    "concept": "Research consent",
    "minutes": 15,
    "description": "Choose a response that respects their decision.",
    "goal": "Choose a response that respects their decision.",
    "code": "A participant says they want to stop an interview halfway through.",
    "clarification": "Choose a response that respects their decision. Explain each step using the example shown.",
    "hints": [
      "Participation should remain voluntary.",
      "Completing your interview is less important than their choice.",
      "Stop the interview and explain how their information will be handled."
    ],
    "question": "What should the researcher do?",
    "options": [
      "Insist on finishing",
      "Record secretly",
      "Stop and respect their choice"
    ],
    "answer": 2,
    "source": "https://www.gov.uk/service-manual/user-research/using-in-depth-interviews"
  },
  {
    "id": "pm-dependency",
    "trackId": "pm",
    "title": "Spot a task dependency",
    "concept": "Task sequencing",
    "minutes": 15,
    "description": "Place the tasks in a sequence that respects their dependencies.",
    "goal": "Place the tasks in a sequence that respects their dependencies.",
    "code": "Task A: agree the lesson requirements. Task B: build the agreed lesson. Task C: review the result.",
    "clarification": "Place the tasks in a sequence that respects their dependencies. Explain each step using the example shown.",
    "hints": [
      "Find which task produces something another task needs.",
      "Building depends on agreed requirements.",
      "Agree requirements, build, then review the built result."
    ],
    "question": "Which sequence respects these dependencies?",
    "options": [
      "A, B, C",
      "C, A, B",
      "B, C, A"
    ],
    "answer": 0,
    "source": "https://scrumguides.org/scrum-guide.html#product-goal"
  },
  {
    "id": "writing-paragraph",
    "trackId": "writing",
    "title": "Build a focused paragraph",
    "concept": "Topic sentences",
    "minutes": 15,
    "description": "Choose an opening sentence that matches the supporting detail.",
    "goal": "Choose an opening sentence that matches the supporting detail.",
    "code": "Paragraph topic: short study sessions can help learners resume practice. Supporting detail: a ten-minute task is easier to schedule.",
    "clarification": "Choose an opening sentence that matches the supporting detail. Explain each step using the example shown.",
    "hints": [
      "A topic sentence should name the main idea.",
      "Keep the sentence tied to scheduling and practice.",
      "State that short sessions can make regular practice easier to schedule."
    ],
    "question": "Which opening best fits?",
    "options": [
      "Computers have many parts.",
      "Short study sessions can make regular practice easier to schedule.",
      "Every learner studies the same way."
    ],
    "answer": 1,
    "source": "https://owl.purdue.edu/owl/general_writing/academic_writing/index.html"
  },
  {
    "id": "writing-evidence",
    "trackId": "writing",
    "title": "Support a claim carefully",
    "concept": "Evidence and claims",
    "minutes": 15,
    "description": "Choose a claim that stays within the evidence.",
    "goal": "Choose a claim that stays within the evidence.",
    "code": "A small survey finds 8 of 10 respondents prefer reminders. The writer claims every learner needs reminders.",
    "clarification": "Choose a claim that stays within the evidence. Explain each step using the example shown.",
    "hints": [
      "Check the size and scope of the sample.",
      "Ten respondents cannot represent every learner.",
      "Describe the result for the surveyed group without claiming universality."
    ],
    "question": "Which claim is supported?",
    "options": [
      "Reminders work for everyone.",
      "No learner dislikes reminders.",
      "Eight of the ten respondents preferred reminders."
    ],
    "answer": 2,
    "source": "https://owl.purdue.edu/owl/general_writing/academic_writing/index.html"
  },
  {
    "id": "writing-revision",
    "trackId": "writing",
    "title": "Revise for clarity",
    "concept": "Clear sentences",
    "minutes": 15,
    "description": "Choose a clearer sentence that keeps the meaning.",
    "goal": "Choose a clearer sentence that keeps the meaning.",
    "code": "Draft: Due to the fact that the lesson was difficult, I made the decision to ask for a hint.",
    "clarification": "Choose a clearer sentence that keeps the meaning. Explain each step using the example shown.",
    "hints": [
      "Look for phrases that can be shortened.",
      "Due to the fact that can become because.",
      "Keep the difficulty and the decision to ask for a hint."
    ],
    "question": "Which revision is clearest?",
    "options": [
      "Because the lesson was difficult, I asked for a hint.",
      "Lesson difficult decision fact hint.",
      "I asked for a hint because all lessons are impossible."
    ],
    "answer": 0,
    "source": "https://owl.purdue.edu/owl/general_writing/academic_writing/index.html"
  },
  {
    "id": "public-speaking-structure",
    "trackId": "public-speaking",
    "title": "Give your talk a clear shape",
    "concept": "Talk structure",
    "minutes": 15,
    "description": "Choose an order that helps the audience follow your point.",
    "goal": "Choose an order that helps the audience follow your point.",
    "code": "A two-minute talk explains one study habit, gives an example, and ends with a practical action.",
    "clarification": "Choose an order that helps the audience follow your point. Explain each step using the example shown.",
    "hints": [
      "Introduce the idea before illustrating it.",
      "An example makes the idea concrete.",
      "Finish with a small action the audience can try."
    ],
    "question": "Which order is clearest?",
    "options": [
      "Action, unrelated story, title",
      "Main idea, example, practical action",
      "Three unrelated examples"
    ],
    "answer": 1,
    "source": "https://www.toastmasters.org/resources/public-speaking-tips"
  },
  {
    "id": "public-speaking-pace",
    "trackId": "public-speaking",
    "title": "Make room for a key point",
    "concept": "Speaking pace",
    "minutes": 15,
    "description": "Choose a delivery adjustment that makes the takeaway easier to follow.",
    "goal": "Choose a delivery adjustment that makes the takeaway easier to follow.",
    "code": "You reach the main takeaway while speaking quickly. The audience needs time to absorb it.",
    "clarification": "Choose a delivery adjustment that makes the takeaway easier to follow. Explain each step using the example shown.",
    "hints": [
      "Important points benefit from a clear pace.",
      "A short pause can give the audience processing time.",
      "Slow down for the takeaway, then pause briefly."
    ],
    "question": "What is the most useful adjustment?",
    "options": [
      "Speed up further",
      "Read every slide at once",
      "Slow down and pause after the takeaway"
    ],
    "answer": 2,
    "source": "https://www.toastmasters.org/resources/public-speaking-tips"
  },
  {
    "id": "public-speaking-audience",
    "trackId": "public-speaking",
    "title": "Choose a relatable example",
    "concept": "Audience awareness",
    "minutes": 15,
    "description": "Choose an example that connects to a familiar activity.",
    "goal": "Choose an example that connects to a familiar activity.",
    "code": "You are explaining a task board to beginners who have never used project software.",
    "clarification": "Choose an example that connects to a familiar activity. Explain each step using the example shown.",
    "hints": [
      "Start with something your audience already understands.",
      "Avoid introducing several new terms at once.",
      "Use a checklist for planning a class assignment."
    ],
    "question": "Which example is most accessible for these beginners?",
    "options": [
      "A checklist for a class assignment",
      "An unexplained enterprise portfolio model",
      "A list of technical acronyms"
    ],
    "answer": 0,
    "source": "https://www.toastmasters.org/resources/public-speaking-tips"
  },
  {
    "id": "accessibility-alt-text",
    "trackId": "accessibility",
    "title": "Describe an informative image",
    "concept": "Alternative text",
    "minutes": 15,
    "description": "Choose text that conveys the useful information in the image.",
    "goal": "Choose text that conveys the useful information in the image.",
    "code": "An image shows a bar chart: Course A completion 80%, Course B 50%. The surrounding text does not give these values.",
    "clarification": "Choose text that conveys the useful information in the image. Explain each step using the example shown.",
    "hints": [
      "Describe the meaning rather than just saying image.",
      "Include the comparison and values when they matter.",
      "Mention that completion is 80% for A and 50% for B."
    ],
    "question": "Which alternative text is most informative?",
    "options": [
      "Nice chart",
      "Course completion: A 80%, B 50%.",
      "Image123.png"
    ],
    "answer": 1,
    "source": "https://www.w3.org/WAI/tutorials/images/decision-tree/"
  },
  {
    "id": "accessibility-keyboard",
    "trackId": "accessibility",
    "title": "Keep actions reachable by keyboard",
    "concept": "Keyboard access",
    "minutes": 15,
    "description": "Choose an interaction that supports keyboard users.",
    "goal": "Choose an interaction that supports keyboard users.",
    "code": "A hint opens only when a learner hovers with a mouse. Some learners navigate using a keyboard.",
    "clarification": "Choose an interaction that supports keyboard users. Explain each step using the example shown.",
    "hints": [
      "Hover alone does not cover keyboard interaction.",
      "Use an action with a focusable control.",
      "A labelled button can be reached and activated with a keyboard."
    ],
    "question": "Which change improves keyboard access?",
    "options": [
      "Make hover faster",
      "Hide the hint",
      "Use a labelled keyboard-operable button"
    ],
    "answer": 2,
    "source": "https://www.w3.org/WAI/ARIA/apg/patterns/button/"
  },
  {
    "id": "accessibility-contrast",
    "trackId": "accessibility",
    "title": "Avoid colour-only instructions",
    "concept": "Multiple visual cues",
    "minutes": 15,
    "description": "Choose a way to communicate status without relying only on colour.",
    "goal": "Choose a way to communicate status without relying only on colour.",
    "code": "A task is marked complete only by changing its dot from red to green.",
    "clarification": "Choose a way to communicate status without relying only on colour. Explain each step using the example shown.",
    "hints": [
      "Colour differences are not equally visible to everyone.",
      "Add a text cue with the colour.",
      "Show a Completed label and an appropriate status icon."
    ],
    "question": "Which change communicates status more clearly?",
    "options": [
      "Add a Completed text label",
      "Use a slightly different green",
      "Remove all status information"
    ],
    "answer": 0,
    "source": "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html"
  },
  {
    "id": "study-skills-retrieval",
    "trackId": "study-skills",
    "title": "Check what you remember",
    "concept": "Retrieval practice",
    "minutes": 15,
    "description": "Choose a next step that reveals what you can recall.",
    "goal": "Choose a next step that reveals what you can recall.",
    "code": "You have read a short explanation of fractions and want to check your understanding.",
    "clarification": "Choose a next step that reveals what you can recall. Explain each step using the example shown.",
    "hints": [
      "Recognition while reading can feel easier than recall.",
      "Try remembering without looking first.",
      "Close the notes, explain the idea, then check and correct it."
    ],
    "question": "Which activity best checks recall?",
    "options": [
      "Keep the notes open and copy them",
      "Explain the idea with notes closed, then check",
      "Only highlight the title"
    ],
    "answer": 1,
    "source": "https://learningcenter.unc.edu/tips-and-tools/"
  },
  {
    "id": "study-skills-small-goal",
    "trackId": "study-skills",
    "title": "Make the next attempt concrete",
    "concept": "Manageable study goals",
    "minutes": 15,
    "description": "Choose a smaller action you can attempt and review.",
    "goal": "Choose a smaller action you can attempt and review.",
    "code": "Your goal says finish everything about algebra tonight. You have twenty minutes.",
    "clarification": "Choose a smaller action you can attempt and review. Explain each step using the example shown.",
    "hints": [
      "Define one observable piece of work.",
      "Match the scope to the time available.",
      "Solve two linear equations and explain each step."
    ],
    "question": "Which goal is most actionable?",
    "options": [
      "Understand everything immediately",
      "Never make a mistake",
      "Solve two linear equations and explain the steps"
    ],
    "answer": 2,
    "source": "https://learningcenter.unc.edu/tips-and-tools/"
  },
  {
    "id": "study-skills-reflect",
    "trackId": "study-skills",
    "title": "Use a mistake to choose the next step",
    "concept": "Reflection",
    "minutes": 15,
    "description": "Choose a reflection that identifies a useful next attempt.",
    "goal": "Choose a reflection that identifies a useful next attempt.",
    "code": "You solved 2x + 3 = 11 as x = 7 after subtracting incorrectly.",
    "clarification": "Choose a reflection that identifies a useful next attempt. Explain each step using the example shown.",
    "hints": [
      "Name the step that needs checking.",
      "First subtract three from both sides, then divide by two.",
      "Practise keeping both sides balanced and verify x = 4 in the original equation."
    ],
    "question": "Which reflection supports progress?",
    "options": [
      "I will balance both sides and check my answer in the original equation.",
      "I am incapable of algebra.",
      "I will ignore the working."
    ],
    "answer": 0,
    "source": "https://learningcenter.unc.edu/tips-and-tools/"
  },
  {
    "id": "react-conditional",
    "trackId": "react",
    "title": "Show a helpful empty state",
    "concept": "Conditional rendering",
    "minutes": 15,
    "description": "Work out what the learner sees when the list is empty.",
    "goal": "Work out what the learner sees when the list is empty.",
    "code": "const lessons = [];\nreturn lessons.length > 0 ? <LessonList /> : <p>No lessons yet.</p>;",
    "clarification": "Work out what the learner sees when the list is empty. Explain each step using the example shown.",
    "hints": [
      "Evaluate the condition before choosing a branch.",
      "An empty array has length zero.",
      "Zero is not greater than zero, so the second branch renders."
    ],
    "question": "What renders for this empty list?",
    "options": [
      "LessonList",
      "No lessons yet.",
      "Both branches"
    ],
    "answer": 1,
    "source": "https://react.dev/learn/conditional-rendering"
  },
  {
    "id": "go-slice-loop",
    "trackId": "go",
    "title": "Visit each item in a Go slice",
    "concept": "Range loops",
    "minutes": 15,
    "description": "Identify the values printed by this range loop.",
    "goal": "Identify the values printed by this range loop.",
    "code": "scores := []int{4, 7, 9}\nfor _, score := range scores {\n    fmt.Println(score)\n}",
    "clarification": "Identify the values printed by this range loop. Explain each step using the example shown.",
    "hints": [
      "Range visits each slice element in order.",
      "The underscore discards the index, while score holds the value.",
      "The values printed are four, seven, then nine."
    ],
    "question": "What does this loop print?",
    "options": [
      "0, 1, 2",
      "Only 9",
      "4, 7, 9"
    ],
    "answer": 2,
    "source": "https://go.dev/tour/moretypes/16"
  }
];
