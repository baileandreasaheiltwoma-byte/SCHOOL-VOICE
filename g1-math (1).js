/* ═══════════════════════════════════════════════════════════
   SCHOOL VOICE — content/g1-math.js
   © 2025 BaileAndrea · All Rights Reserved
   Subject  : Grade 1 Mathematics
   Contains : Subject registry + Topic 1 full notes
   ═══════════════════════════════════════════════════════════

   HOW TO ADD MORE TOPICS:
   ────────────────────────
   1. Add a new entry to the topics[] array below.
   2. Add a new entry to window.TOPIC_CONTENT with
      both a "preview" (shown to guests) and a "body"
      (shown to logged-in users).
   3. Upload this file to GitHub → Vercel deploys in 60 sec.

   ═══════════════════════════════════════════════════════════ */

/* ── Subject Registry ── */
window.SUBJECTS = window.SUBJECTS || {};

window.SUBJECTS['g1-math'] = {
  section:  'Grade School',
  grade:    'Grade 1',
  subject:  'Mathematics',
  readTime: '40 min read',
  topics: [
    { title: 'Numbers 1 to 10',             free: true  },
    { title: 'Numbers 11 to 20',            free: false },
    { title: 'Counting and Ordering',       free: false },
    { title: 'Introduction to Addition',    free: false },
    { title: 'Introduction to Subtraction', free: false },
    { title: 'Shapes Around Us',            free: false },
  ]
};

/* ── Topic Content Registry ── */
window.TOPIC_CONTENT = window.TOPIC_CONTENT || {};

/* ════════════════════════════════════════════════════════════
   TOPIC 1 — Numbers 1 to 10
════════════════════════════════════════════════════════════ */

/* Preview shown to guests (blurred behind lock gate) */
window.TOPIC_CONTENT['Numbers 1 to 10'] = {

preview: `
<h2>1. What Are Numbers?</h2>
<p>A <strong>number</strong> is a mathematical symbol we use to count, measure and label
things around us. Numbers tell us <em>how many</em> of something there are.</p>
<p>Every day you use numbers without thinking about it. You count your fingers,
your pencils, your classmates and your steps. Numbers are the very language
of mathematics — everything begins with them.</p>
<h2>2. The Numbers 1 to 10</h2>
<p>The first ten counting numbers are 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10.
Each one has a name, a symbol, and a value that tells us exactly how many...</p>
`,

/* Full notes shown to logged-in users */
body: `
<div class="content-body">

<!-- ───────────────────────────────────────
     SECTION 1 — WHAT ARE NUMBERS
─────────────────────────────────────── -->
<h2>1. What Are Numbers?</h2>

<div class="def-box">
  <div class="def-label">Definition</div>
  <p>A <strong>number</strong> is a mathematical symbol used to count, measure
  and label things. Numbers tell us <em>how many</em> of something exist.</p>
</div>

<p>Every day you use numbers without even thinking about it. You count your
fingers, your pencils, your classmates and your steps. Numbers are the very
language of mathematics — everything in maths begins with them.</p>

<p>Before humans had writing, they used marks on bones and stones to count.
Today we use digits — the symbols 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 — to write
every number that has ever existed, no matter how large or small.</p>

<div class="note-box">
  <span class="note-icon">💡</span>
  <span class="note-txt">
    <strong>Key idea:</strong> Numbers 1 to 10 are called the
    <em>first ten counting numbers</em>. They are the building blocks for
    all of mathematics. Master these and everything else becomes easier.
  </span>
</div>

<!-- ───────────────────────────────────────
     SECTION 2 — THE NUMBERS 1 TO 10
─────────────────────────────────────── -->
<h2>2. The Numbers 1 to 10</h2>

<p>Study the table below carefully. Learn the numeral (the figure you write),
the word (how you spell it in English), and the dot picture (how many objects
it represents).</p>

<table class="tbl">
  <thead>
    <tr>
      <th>Numeral</th>
      <th>Word</th>
      <th>Dot picture</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>One</td>  <td>●</td><td>A single object</td></tr>
    <tr><td><strong>2</strong></td><td>Two</td>  <td>● ●</td><td>A pair of objects</td></tr>
    <tr><td><strong>3</strong></td><td>Three</td><td>● ● ●</td><td>A trio of objects</td></tr>
    <tr><td><strong>4</strong></td><td>Four</td> <td>● ● ● ●</td><td>Four separate objects</td></tr>
    <tr><td><strong>5</strong></td><td>Five</td> <td>● ● ● ● ●</td><td>Five objects — like the fingers on one hand</td></tr>
    <tr><td><strong>6</strong></td><td>Six</td>  <td>● ● ● ● ● ●</td><td>Six objects</td></tr>
    <tr><td><strong>7</strong></td><td>Seven</td><td>● ● ● ● ● ● ●</td><td>Seven objects</td></tr>
    <tr><td><strong>8</strong></td><td>Eight</td><td>● ● ● ● ● ● ● ●</td><td>Eight objects</td></tr>
    <tr><td><strong>9</strong></td><td>Nine</td> <td>● ● ● ● ● ● ● ● ●</td><td>Nine objects</td></tr>
    <tr><td><strong>10</strong></td><td>Ten</td> <td>● ● ● ● ● ● ● ● ● ●</td><td>Ten objects — like all fingers on both hands</td></tr>
  </tbody>
</table>

<div class="note-box">
  <span class="note-icon">✋</span>
  <span class="note-txt">
    <strong>Remember:</strong> You have 5 fingers on each hand.
    Both hands together give you exactly <strong>10</strong> fingers —
    a perfect way to remember what ten means!
  </span>
</div>

<!-- ───────────────────────────────────────
     SECTION 3 — COUNTING OBJECTS
─────────────────────────────────────── -->
<h2>3. How to Count Objects</h2>

<p>Counting is the act of assigning one number to each object in a group,
in order, without skipping any or counting any twice.
The <strong>last number</strong> you say tells you the total.</p>

<h3>The Three Rules of Counting</h3>
<ul>
  <li><strong>One-to-one:</strong> Point to each object exactly once.</li>
  <li><strong>In order:</strong> Always count 1, 2, 3 … — never skip or go back.</li>
  <li><strong>Last number wins:</strong> The final number you say is the total count.</li>
</ul>

<div class="ex-box">
  <div class="ex-label">Example 1 — Count the apples</div>
  <div class="ex-q">🍎 🍎 🍎 🍎 🍎 &nbsp;&nbsp; How many apples are there?</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Point to the first apple and say <strong>one</strong>.</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Point to the second apple and say <strong>two</strong>.</div></div>
  <div class="step"><div class="step-n">3</div>
    <div class="step-t">Continue: <strong>three, four, five</strong>.</div></div>
  <div class="step"><div class="step-n">4</div>
    <div class="step-t">The last number said is <strong>five</strong>.
    &nbsp;∴ There are <strong>5 apples</strong>. ✓</div></div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 2 — Count the stars</div>
  <div class="ex-q">⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ &nbsp;&nbsp; How many stars?</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Count each star one at a time: 1, 2, 3, 4, 5, 6, 7, 8.</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">The last number is <strong>8</strong>.
    &nbsp;∴ There are <strong>8 stars</strong>. ✓</div></div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 3 — Count the books</div>
  <div class="ex-q">📗 📗 📗 📗 📗 📗 📗 📗 📗 📗 &nbsp;&nbsp; How many books?</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Count carefully: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">The last number is <strong>10</strong>.
    &nbsp;∴ There are <strong>10 books</strong>. ✓</div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 4 — ORDERING NUMBERS
─────────────────────────────────────── -->
<h2>4. Ordering Numbers</h2>

<p>Numbers follow a fixed, unchanging order. Each number is exactly
<strong>one more</strong> than the number before it and
<strong>one less</strong> than the number after it.</p>

<div class="formula">
  <div class="formula-lbl">Ascending Order — Smallest to Largest</div>
  <div class="formula-txt">1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10</div>
</div>

<div class="formula" style="margin-top:10px">
  <div class="formula-lbl">Descending Order — Largest to Smallest</div>
  <div class="formula-txt">10 → 9 → 8 → 7 → 6 → 5 → 4 → 3 → 2 → 1</div>
</div>

<div class="def-box" style="margin-top:18px">
  <div class="def-label">Definitions</div>
  <p>
    <strong>Ascending order</strong> means arranging numbers from the
    <em>smallest to the largest</em> (going up).<br/>
    <strong>Descending order</strong> means arranging numbers from the
    <em>largest to the smallest</em> (going down).
  </p>
</div>

<div class="ex-box">
  <div class="ex-label">Example 4 — Ascending order</div>
  <div class="ex-q">Arrange these numbers from smallest to largest:
  &nbsp; 7, 2, 9, 4, 1</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Find the smallest number in the group: <strong>1</strong></div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Find the next smallest remaining: <strong>2</strong></div></div>
  <div class="step"><div class="step-n">3</div>
    <div class="step-t">Continue picking the next smallest: <strong>4</strong></div></div>
  <div class="step"><div class="step-n">4</div>
    <div class="step-t">Then: <strong>7</strong>, then <strong>9</strong></div></div>
  <div class="step"><div class="step-n">5</div>
    <div class="step-t">Answer: &nbsp;<strong>1, 2, 4, 7, 9</strong> ✓</div></div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 5 — Descending order</div>
  <div class="ex-q">Arrange these numbers from largest to smallest:
  &nbsp; 3, 8, 5, 10, 6</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Find the largest number: <strong>10</strong></div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Next largest: <strong>8</strong></div></div>
  <div class="step"><div class="step-n">3</div>
    <div class="step-t">Then: <strong>6</strong>, then <strong>5</strong>,
    then <strong>3</strong></div></div>
  <div class="step"><div class="step-n">4</div>
    <div class="step-t">Answer: &nbsp;<strong>10, 8, 6, 5, 3</strong> ✓</div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 5 — COMPARING NUMBERS
─────────────────────────────────────── -->
<h2>5. Comparing Numbers</h2>

<p>When we place two numbers side by side, we compare them to find out
which is bigger, which is smaller, or whether they are equal.
We use three special symbols to show this relationship.</p>

<table class="tbl">
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Name</th>
      <th>Meaning</th>
      <th>Read as</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-size:20px;font-weight:700">&gt;</td>
      <td>Greater than</td>
      <td>The left number is bigger</td>
      <td>"is greater than"</td>
      <td><strong>8 &gt; 3</strong></td>
    </tr>
    <tr>
      <td style="font-size:20px;font-weight:700">&lt;</td>
      <td>Less than</td>
      <td>The left number is smaller</td>
      <td>"is less than"</td>
      <td><strong>2 &lt; 7</strong></td>
    </tr>
    <tr>
      <td style="font-size:20px;font-weight:700">=</td>
      <td>Equal to</td>
      <td>Both numbers are the same</td>
      <td>"is equal to"</td>
      <td><strong>5 = 5</strong></td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  <span class="note-icon">🐊</span>
  <span class="note-txt">
    <strong>Crocodile trick:</strong> Think of the symbol as a hungry
    crocodile's open mouth. The crocodile always opens its mouth toward
    the <em>bigger</em> number because it wants to eat the larger meal!
    &nbsp; So &nbsp; 8 <strong>&gt;</strong> 3 &nbsp; means the mouth
    opens toward 8 — the bigger number.
  </span>
</div>

<div class="ex-box">
  <div class="ex-label">Example 6 — Fill in the correct symbol</div>
  <div class="ex-q">Place &gt;, &lt; or = between each pair of numbers:</div>
  <div class="step"><div class="step-n">a</div>
    <div class="step-t">6 __ 4 &nbsp;→&nbsp; 6 is bigger than 4
    &nbsp;→&nbsp; <strong>6 &gt; 4</strong></div></div>
  <div class="step"><div class="step-n">b</div>
    <div class="step-t">3 __ 9 &nbsp;→&nbsp; 3 is smaller than 9
    &nbsp;→&nbsp; <strong>3 &lt; 9</strong></div></div>
  <div class="step"><div class="step-n">c</div>
    <div class="step-t">7 __ 7 &nbsp;→&nbsp; 7 is the same as 7
    &nbsp;→&nbsp; <strong>7 = 7</strong></div></div>
  <div class="step"><div class="step-n">d</div>
    <div class="step-t">1 __ 10 &nbsp;→&nbsp; 1 is smaller than 10
    &nbsp;→&nbsp; <strong>1 &lt; 10</strong></div></div>
  <div class="step"><div class="step-n">e</div>
    <div class="step-t">10 __ 2 &nbsp;→&nbsp; 10 is bigger than 2
    &nbsp;→&nbsp; <strong>10 &gt; 2</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 6 — BEFORE AND AFTER
─────────────────────────────────────── -->
<h2>6. The Number Before and After</h2>

<p>Every number (except 1) has a number that comes just
<strong>before</strong> it, and every number (except 10) has a
number that comes just <strong>after</strong> it.</p>

<table class="tbl">
  <thead>
    <tr>
      <th>One before</th>
      <th>Number</th>
      <th>One after</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>—</td><td><strong>1</strong></td><td>2</td></tr>
    <tr><td>1</td><td><strong>2</strong></td><td>3</td></tr>
    <tr><td>2</td><td><strong>3</strong></td><td>4</td></tr>
    <tr><td>3</td><td><strong>4</strong></td><td>5</td></tr>
    <tr><td>4</td><td><strong>5</strong></td><td>6</td></tr>
    <tr><td>5</td><td><strong>6</strong></td><td>7</td></tr>
    <tr><td>6</td><td><strong>7</strong></td><td>8</td></tr>
    <tr><td>7</td><td><strong>8</strong></td><td>9</td></tr>
    <tr><td>8</td><td><strong>9</strong></td><td>10</td></tr>
    <tr><td>9</td><td><strong>10</strong></td><td>—</td></tr>
  </tbody>
</table>

<div class="ex-box">
  <div class="ex-label">Example 7 — Before and after</div>
  <div class="ex-q">Fill in the missing numbers:</div>
  <div class="step"><div class="step-n">a</div>
    <div class="step-t">__ , 5, __ &nbsp;→&nbsp;
    One before 5 is <strong>4</strong>. One after 5 is <strong>6</strong>.
    &nbsp; Answer: <strong>4, 5, 6</strong></div></div>
  <div class="step"><div class="step-n">b</div>
    <div class="step-t">__ , 9, __ &nbsp;→&nbsp;
    One before 9 is <strong>8</strong>. One after 9 is <strong>10</strong>.
    &nbsp; Answer: <strong>8, 9, 10</strong></div></div>
  <div class="step"><div class="step-n">c</div>
    <div class="step-t">__ , 3, __ &nbsp;→&nbsp;
    One before 3 is <strong>2</strong>. One after 3 is <strong>4</strong>.
    &nbsp; Answer: <strong>2, 3, 4</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 7 — ZERO
─────────────────────────────────────── -->
<h2>7. Zero — The Number of Nothing</h2>

<div class="def-box">
  <div class="def-label">Definition</div>
  <p><strong>Zero (0)</strong> means <em>none</em> or <em>nothing at all</em>.
  It is the number that comes just before 1 and is smaller than every
  counting number.</p>
</div>

<p>If there are no pencils on the table, we say there are <strong>0 pencils</strong>.
Zero is extremely important in mathematics. Without it, we cannot write
numbers like 10, 20, 100 or 1,000 — the zero holds the empty place.</p>

<p>On the number line, zero is the starting point to the left of 1:</p>

<div class="formula">
  <div class="formula-lbl">The Number Line — 0 to 10</div>
  <div class="formula-txt">0 — 1 — 2 — 3 — 4 — 5 — 6 — 7 — 8 — 9 — 10</div>
</div>

<div class="note-box">
  <span class="note-icon">⚠️</span>
  <span class="note-txt">
    <strong>Important:</strong> Zero is <em>not</em> a counting number —
    we do not count objects starting from zero. But zero is a whole number
    and plays a vital role in place value, addition and subtraction.
  </span>
</div>

<!-- ───────────────────────────────────────
     SECTION 8 — SUMMARY
─────────────────────────────────────── -->
<h2>8. Summary</h2>

<table class="tbl">
  <thead>
    <tr><th>Concept</th><th>What it means</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Counting</td>
      <td>Assigning one number to each object in order</td>
      <td>🍎🍎🍎 → 3 apples</td>
    </tr>
    <tr>
      <td>Ascending order</td>
      <td>Smallest → Largest</td>
      <td>2, 4, 6, 8, 10</td>
    </tr>
    <tr>
      <td>Descending order</td>
      <td>Largest → Smallest</td>
      <td>10, 8, 6, 4, 2</td>
    </tr>
    <tr>
      <td>Greater than (&gt;)</td>
      <td>Left number is bigger</td>
      <td>9 &gt; 3</td>
    </tr>
    <tr>
      <td>Less than (&lt;)</td>
      <td>Left number is smaller</td>
      <td>2 &lt; 8</td>
    </tr>
    <tr>
      <td>Equal to (=)</td>
      <td>Both numbers are the same</td>
      <td>6 = 6</td>
    </tr>
    <tr>
      <td>Zero (0)</td>
      <td>Nothing / none / empty</td>
      <td>0 pencils on the table</td>
    </tr>
  </tbody>
</table>

<!-- ───────────────────────────────────────
     ACTIVITY SECTION
─────────────────────────────────────── -->
<div class="activity">
  <div class="act-head">
    <span class="act-icon">✏️</span>
    <div>
      <div class="act-title">Activity — Do These in Your Exercise Book</div>
      <div class="act-note">
        Write only the question number and your answer in your book.
        Do not copy the questions. Show all your working clearly.
      </div>
    </div>
  </div>

  <ol class="act-qs">

    <li class="act-q">
      <span class="act-qn">1.</span>
      <span>Write the numbers <strong>1 to 10</strong> in words.
      (Example: 1 = One, 2 = Two … continue to 10)</span>
    </li>

    <li class="act-q">
      <span class="act-qn">2.</span>
      <span>Count the objects and write the number:
        <br/>
        (a) &nbsp; 🌟 🌟 🌟 🌟 🌟 🌟 🌟
        <br/>
        (b) &nbsp; 🍊 🍊 🍊
        <br/>
        (c) &nbsp; 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">3.</span>
      <span>Arrange in <strong>ascending order</strong> (smallest to largest):
        <br/>
        (a) &nbsp; 5, 1, 9, 3, 7, 2
        <br/>
        (b) &nbsp; 10, 4, 8, 6, 2
        <br/>
        (c) &nbsp; 9, 3, 1, 7, 5, 8
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">4.</span>
      <span>Arrange in <strong>descending order</strong> (largest to smallest):
        <br/>
        (a) &nbsp; 4, 8, 6, 10, 1
        <br/>
        (b) &nbsp; 7, 2, 9, 5, 3
        <br/>
        (c) &nbsp; 1, 6, 4, 9, 2, 8
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">5.</span>
      <span>Fill in <strong>&gt;, &lt; or =</strong> between each pair:
        <br/>
        (a) 8 __ 5 &nbsp;&nbsp;&nbsp;
        (b) 3 __ 6 &nbsp;&nbsp;&nbsp;
        (c) 9 __ 9 &nbsp;&nbsp;&nbsp;
        (d) 1 __ 10 &nbsp;&nbsp;&nbsp;
        (e) 7 __ 4 &nbsp;&nbsp;&nbsp;
        (f) 6 __ 6 &nbsp;&nbsp;&nbsp;
        (g) 2 __ 8 &nbsp;&nbsp;&nbsp;
        (h) 10 __ 1
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">6.</span>
      <span>Write the number that comes just <strong>before</strong>:
        <br/>
        (a) __ 7 &nbsp;&nbsp;&nbsp;
        (b) __ 4 &nbsp;&nbsp;&nbsp;
        (c) __ 10 &nbsp;&nbsp;&nbsp;
        (d) __ 2
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">7.</span>
      <span>Write the number that comes just <strong>after</strong>:
        <br/>
        (a) 5 __ &nbsp;&nbsp;&nbsp;
        (b) 8 __ &nbsp;&nbsp;&nbsp;
        (c) 1 __ &nbsp;&nbsp;&nbsp;
        (d) 9 __
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">8.</span>
      <span>Fill in the missing numbers in each sequence:
        <br/>
        (a) 1, 2, __, 4, __, 6
        <br/>
        (b) __, 5, 6, __, 8, __
        <br/>
        (c) 7, __, 9, __
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">9.</span>
      <span>Answer the following in full sentences in your book:
        <br/>
        (a) What is the <strong>greatest</strong> number from 1 to 10?
        <br/>
        (b) What is the <strong>smallest</strong> counting number?
        <br/>
        (c) Which number means "nothing" or "none"?
        <br/>
        (d) What number is one more than 9?
        <br/>
        (e) What number is one less than 5?
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">10.</span>
      <span>
        <strong>Draw in your book:</strong> Draw dots (●) to show each of
        these numbers: &nbsp; 2, &nbsp; 5, &nbsp; 7, &nbsp; 9, &nbsp; 10.
        <br/>
        Under each group of dots, write the numeral and the word.
        <br/>
        <em>Example: ● ● ● &nbsp; → &nbsp; 3 &nbsp; → &nbsp; Three</em>
      </span>
    </li>

  </ol>
</div>

</div>
`
};

/* ════════════════════════════════════════════════════════════
   TOPIC 2 — Numbers 11 to 20  (FULL NOTES)
════════════════════════════════════════════════════════════ */
window.TOPIC_CONTENT['Numbers 11 to 20'] = {

preview: `
<h2>Numbers 11 to 20</h2>
<p>In this topic we extend our counting beyond ten. The numbers 11 to 20 are
built by combining the word "teen" with the earlier numbers — thirteen,
fourteen, fifteen and so on. We will also study their order, spelling and how
to count objects in groups larger than ten...</p>
`,

body: `
<div class="content-body">

<!-- ───────────────────────────────────────
     SECTION 1 — BEYOND TEN
─────────────────────────────────────── -->
<h2>1. Counting Beyond Ten</h2>

<div class="def-box">
  <div class="def-label">Definition</div>
  <p>The numbers <strong>11 to 20</strong> are the second group of counting
  numbers. They come directly after 10 and are built by adding more units
  on top of ten. The group from 11 to 19 is called the <em>teen numbers</em>.
  The number 20 means <em>two tens</em>.</p>
</div>

<p>In Topic 1 you learned numbers 1 to 10. Now we go further. Every number
from 11 to 20 is made of <strong>ten plus a little more</strong>. For example,
11 is ten plus one, 12 is ten plus two, and so on all the way to 20, which is
ten plus ten.</p>

<div class="note-box">
  <span class="note-icon">💡</span>
  <span class="note-txt">
    <strong>Key idea:</strong> Once you know 1 to 10 perfectly, learning
    11 to 20 is straightforward — you simply add each number from 1 to 10
    on top of ten. The pattern is regular and predictable.
  </span>
</div>

<!-- ───────────────────────────────────────
     SECTION 2 — THE NUMBERS 11 TO 20
─────────────────────────────────────── -->
<h2>2. The Numbers 11 to 20</h2>

<p>Study every row of this table carefully. Pay close attention to the
spelling of each number word — several of them have irregular spellings
that you must memorise.</p>

<table class="tbl">
  <thead>
    <tr>
      <th>Numeral</th>
      <th>Word</th>
      <th>Meaning (ten + ?)</th>
      <th>Dot picture</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><strong>11</strong></td><td>Eleven</td>  <td>Ten + One</td>  <td>●●●●●●●●●● ●</td></tr>
    <tr><td><strong>12</strong></td><td>Twelve</td>  <td>Ten + Two</td>  <td>●●●●●●●●●● ●●</td></tr>
    <tr><td><strong>13</strong></td><td>Thirteen</td><td>Ten + Three</td><td>●●●●●●●●●● ●●●</td></tr>
    <tr><td><strong>14</strong></td><td>Fourteen</td><td>Ten + Four</td> <td>●●●●●●●●●● ●●●●</td></tr>
    <tr><td><strong>15</strong></td><td>Fifteen</td> <td>Ten + Five</td> <td>●●●●●●●●●● ●●●●●</td></tr>
    <tr><td><strong>16</strong></td><td>Sixteen</td> <td>Ten + Six</td>  <td>●●●●●●●●●● ●●●●●●</td></tr>
    <tr><td><strong>17</strong></td><td>Seventeen</td><td>Ten + Seven</td><td>●●●●●●●●●● ●●●●●●●</td></tr>
    <tr><td><strong>18</strong></td><td>Eighteen</td><td>Ten + Eight</td><td>●●●●●●●●●● ●●●●●●●●</td></tr>
    <tr><td><strong>19</strong></td><td>Nineteen</td><td>Ten + Nine</td> <td>●●●●●●●●●● ●●●●●●●●●</td></tr>
    <tr><td><strong>20</strong></td><td>Twenty</td>  <td>Ten + Ten</td>  <td>●●●●●●●●●● ●●●●●●●●●●</td></tr>
  </tbody>
</table>

<div class="note-box">
  <span class="note-icon">⚠️</span>
  <span class="note-txt">
    <strong>Spelling warning:</strong> Eleven and twelve do <em>not</em>
    follow the "teen" pattern — they have their own unique names.
    Thirteen, fifteen and eighteen have slightly different spellings
    from what you might expect. Learn them by heart.
  </span>
</div>

<!-- ───────────────────────────────────────
     SECTION 3 — IRREGULAR SPELLINGS
─────────────────────────────────────── -->
<h2>3. Tricky Spellings to Memorise</h2>

<p>Most teen numbers are formed simply by adding <em>-teen</em> to the base
number. However, four numbers break this rule and must be memorised
individually:</p>

<table class="tbl">
  <thead>
    <tr>
      <th>Number</th>
      <th>What you might expect</th>
      <th>Correct spelling</th>
      <th>Remember this</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>11</strong></td>
      <td>Oneteen ✗</td>
      <td><strong>Eleven</strong></td>
      <td>Completely unique — just memorise it</td>
    </tr>
    <tr>
      <td><strong>12</strong></td>
      <td>Twoteen ✗</td>
      <td><strong>Twelve</strong></td>
      <td>Completely unique — just memorise it</td>
    </tr>
    <tr>
      <td><strong>13</strong></td>
      <td>Threeteen ✗</td>
      <td><strong>Thirteen</strong></td>
      <td>"Three" loses its 'e' → Thir + teen</td>
    </tr>
    <tr>
      <td><strong>15</strong></td>
      <td>Fiveteen ✗</td>
      <td><strong>Fifteen</strong></td>
      <td>"Five" becomes "Fif" → Fif + teen</td>
    </tr>
    <tr>
      <td><strong>18</strong></td>
      <td>Eightteen ✗</td>
      <td><strong>Eighteen</strong></td>
      <td>Only one 't' — Eight + een (not eightteen)</td>
    </tr>
    <tr>
      <td><strong>20</strong></td>
      <td>Twoty ✗</td>
      <td><strong>Twenty</strong></td>
      <td>Special name for two tens — memorise it</td>
    </tr>
  </tbody>
</table>

<!-- ───────────────────────────────────────
     SECTION 4 — COUNTING OBJECTS 11-20
─────────────────────────────────────── -->
<h2>4. Counting Objects from 11 to 20</h2>

<p>When counting more than 10 objects, it helps to first make a group of 10,
then count the remaining ones separately. This avoids mistakes and builds
the foundation for understanding place value.</p>

<div class="ex-box">
  <div class="ex-label">Example 1 — Count in two groups</div>
  <div class="ex-q">
    🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋 🍋🍋🍋
    &nbsp;&nbsp; How many lemons are there?
  </div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Count the first group: <strong>10 lemons</strong></div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Count the second group: <strong>3 lemons</strong></div></div>
  <div class="step"><div class="step-n">3</div>
    <div class="step-t">Add them: 10 + 3 = <strong>13 lemons</strong> ✓</div></div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 2 — Count all objects</div>
  <div class="ex-q">
    🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼
    &nbsp;&nbsp; How many flowers?
  </div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Count one by one: 1, 2, 3 … 10, 11, 12, 13, 14, 15, 16</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">The last number is <strong>16</strong>.
    &nbsp;∴ There are <strong>16 flowers</strong>. ✓</div></div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 3 — Count and write the word</div>
  <div class="ex-q">
    🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝
    &nbsp;&nbsp; How many bees? Write the number and the word.
  </div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Count carefully: …17, 18, 19</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Numeral: <strong>19</strong> &nbsp;|&nbsp;
    Word: <strong>Nineteen</strong> ✓</div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 5 — ORDERING 11 TO 20
─────────────────────────────────────── -->
<h2>5. Ordering Numbers 11 to 20</h2>

<div class="formula">
  <div class="formula-lbl">Ascending Order — 11 to 20</div>
  <div class="formula-txt">11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20</div>
</div>

<div class="formula" style="margin-top:10px">
  <div class="formula-lbl">Descending Order — 20 to 11</div>
  <div class="formula-txt">20 → 19 → 18 → 17 → 16 → 15 → 14 → 13 → 12 → 11</div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 4 — Ascending order</div>
  <div class="ex-q">Arrange from smallest to largest: &nbsp; 17, 11, 20, 14, 19</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Smallest first: <strong>11</strong></div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Then: <strong>14</strong></div></div>
  <div class="step"><div class="step-n">3</div>
    <div class="step-t">Then: <strong>17</strong></div></div>
  <div class="step"><div class="step-n">4</div>
    <div class="step-t">Then: <strong>19</strong></div></div>
  <div class="step"><div class="step-n">5</div>
    <div class="step-t">Largest last: <strong>20</strong></div></div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">Answer: &nbsp;<strong>11, 14, 17, 19, 20</strong></div></div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 5 — Descending order</div>
  <div class="ex-q">Arrange from largest to smallest: &nbsp; 13, 20, 15, 18, 11</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Largest first: <strong>20</strong></div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Then: <strong>18, 15, 13, 11</strong></div></div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">Answer: &nbsp;<strong>20, 18, 15, 13, 11</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 6 — COMPARING 11 TO 20
─────────────────────────────────────── -->
<h2>6. Comparing Numbers 11 to 20</h2>

<p>We use the same symbols as before — <strong>&gt;</strong>,
<strong>&lt;</strong> and <strong>=</strong> — to compare numbers
from 11 to 20.</p>

<div class="ex-box">
  <div class="ex-label">Example 6 — Fill in &gt;, &lt; or =</div>
  <div class="ex-q">Place the correct symbol between each pair:</div>
  <div class="step"><div class="step-n">a</div>
    <div class="step-t">15 __ 12 &nbsp;→&nbsp; 15 is bigger than 12
    &nbsp;→&nbsp; <strong>15 &gt; 12</strong></div></div>
  <div class="step"><div class="step-n">b</div>
    <div class="step-t">11 __ 19 &nbsp;→&nbsp; 11 is smaller than 19
    &nbsp;→&nbsp; <strong>11 &lt; 19</strong></div></div>
  <div class="step"><div class="step-n">c</div>
    <div class="step-t">17 __ 17 &nbsp;→&nbsp; Equal
    &nbsp;→&nbsp; <strong>17 = 17</strong></div></div>
  <div class="step"><div class="step-n">d</div>
    <div class="step-t">20 __ 14 &nbsp;→&nbsp; 20 is bigger than 14
    &nbsp;→&nbsp; <strong>20 &gt; 14</strong></div></div>
  <div class="step"><div class="step-n">e</div>
    <div class="step-t">13 __ 16 &nbsp;→&nbsp; 13 is smaller than 16
    &nbsp;→&nbsp; <strong>13 &lt; 16</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 7 — BEFORE AND AFTER
─────────────────────────────────────── -->
<h2>7. The Number Before and After</h2>

<table class="tbl">
  <thead>
    <tr>
      <th>One before</th>
      <th>Number</th>
      <th>One after</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>10</td><td><strong>11</strong></td><td>12</td></tr>
    <tr><td>11</td><td><strong>12</strong></td><td>13</td></tr>
    <tr><td>12</td><td><strong>13</strong></td><td>14</td></tr>
    <tr><td>13</td><td><strong>14</strong></td><td>15</td></tr>
    <tr><td>14</td><td><strong>15</strong></td><td>16</td></tr>
    <tr><td>15</td><td><strong>16</strong></td><td>17</td></tr>
    <tr><td>16</td><td><strong>17</strong></td><td>18</td></tr>
    <tr><td>17</td><td><strong>18</strong></td><td>19</td></tr>
    <tr><td>18</td><td><strong>19</strong></td><td>20</td></tr>
    <tr><td>19</td><td><strong>20</strong></td><td>21 (next topic)</td></tr>
  </tbody>
</table>

<div class="ex-box">
  <div class="ex-label">Example 7 — Fill in the missing numbers</div>
  <div class="ex-q">Write the number before and after each given number:</div>
  <div class="step"><div class="step-n">a</div>
    <div class="step-t">__ , 14, __ &nbsp;→&nbsp;
    <strong>13</strong>, 14, <strong>15</strong></div></div>
  <div class="step"><div class="step-n">b</div>
    <div class="step-t">__ , 18, __ &nbsp;→&nbsp;
    <strong>17</strong>, 18, <strong>19</strong></div></div>
  <div class="step"><div class="step-n">c</div>
    <div class="step-t">__ , 11, __ &nbsp;→&nbsp;
    <strong>10</strong>, 11, <strong>12</strong></div></div>
  <div class="step"><div class="step-n">d</div>
    <div class="step-t">__ , 20, __ &nbsp;→&nbsp;
    <strong>19</strong>, 20, <strong>21</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 8 — NUMBER LINE 0 TO 20
─────────────────────────────────────── -->
<h2>8. The Number Line from 0 to 20</h2>

<p>A number line shows all numbers in order from left to right.
Numbers increase as you move <strong>right</strong> and decrease
as you move <strong>left</strong>.</p>

<div class="formula">
  <div class="formula-lbl">Number Line — 0 to 20</div>
  <div class="formula-txt">0–1–2–3–4–5–6–7–8–9–10–11–12–13–14–15–16–17–18–19–20</div>
</div>

<div class="note-box">
  <span class="note-icon">📏</span>
  <span class="note-txt">
    <strong>Reading a number line:</strong> Any number to the
    <em>right</em> of another number is always greater.
    Any number to the <em>left</em> is always smaller.
    So 17 is to the right of 12, meaning 17 &gt; 12.
  </span>
</div>

<div class="ex-box">
  <div class="ex-label">Example 8 — Use the number line to compare</div>
  <div class="ex-q">Using the number line, which is greater — 16 or 13?</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Find 16 on the number line.</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Find 13 on the number line.</div></div>
  <div class="step"><div class="step-n">3</div>
    <div class="step-t">16 is to the <strong>right</strong> of 13.</div></div>
  <div class="step"><div class="step-n">4</div>
    <div class="step-t">∴ <strong>16 &gt; 13</strong>. Sixteen is greater. ✓</div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 9 — SUMMARY
─────────────────────────────────────── -->
<h2>9. Summary</h2>

<table class="tbl">
  <thead>
    <tr><th>Concept</th><th>Details</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Teen numbers</td>
      <td>11 to 19 — ten plus a little more</td>
      <td>14 = ten + four</td>
    </tr>
    <tr>
      <td>Twenty</td>
      <td>Two complete tens</td>
      <td>20 = ten + ten</td>
    </tr>
    <tr>
      <td>Irregular spellings</td>
      <td>Eleven, Twelve, Thirteen, Fifteen, Eighteen, Twenty</td>
      <td>11 = Eleven (not Oneteen)</td>
    </tr>
    <tr>
      <td>Ascending order</td>
      <td>Smallest → Largest</td>
      <td>11, 13, 16, 18, 20</td>
    </tr>
    <tr>
      <td>Descending order</td>
      <td>Largest → Smallest</td>
      <td>20, 18, 16, 13, 11</td>
    </tr>
    <tr>
      <td>Number line</td>
      <td>Right = greater, Left = smaller</td>
      <td>17 is right of 14, so 17 &gt; 14</td>
    </tr>
  </tbody>
</table>

<!-- ───────────────────────────────────────
     ACTIVITY SECTION
─────────────────────────────────────── -->
<div class="activity">
  <div class="act-head">
    <span class="act-icon">✏️</span>
    <div>
      <div class="act-title">Activity — Do These in Your Exercise Book</div>
      <div class="act-note">
        Write only the question number and your answer.
        Do not copy the questions. Show all working clearly.
      </div>
    </div>
  </div>

  <ol class="act-qs">

    <li class="act-q">
      <span class="act-qn">1.</span>
      <span>Write the numbers <strong>11 to 20</strong> in words.
      (Example: 11 = Eleven, 12 = Twelve … continue to 20)</span>
    </li>

    <li class="act-q">
      <span class="act-qn">2.</span>
      <span>Write the numeral for each word:
        <br/>(a) Fourteen &nbsp;&nbsp;
        (b) Seventeen &nbsp;&nbsp;
        (c) Twelve &nbsp;&nbsp;
        (d) Nineteen &nbsp;&nbsp;
        (e) Twenty &nbsp;&nbsp;
        (f) Eleven &nbsp;&nbsp;
        (g) Fifteen &nbsp;&nbsp;
        (h) Eighteen
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">3.</span>
      <span>Count the objects and write the numeral and the word:
        <br/>(a) &nbsp; 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎
        <br/>(b) &nbsp; ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
        <br/>(c) &nbsp; 🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">4.</span>
      <span>Arrange in <strong>ascending order</strong>:
        <br/>(a) &nbsp; 16, 11, 19, 13, 20
        <br/>(b) &nbsp; 18, 14, 12, 17, 15
        <br/>(c) &nbsp; 20, 11, 15, 13, 18, 16
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">5.</span>
      <span>Arrange in <strong>descending order</strong>:
        <br/>(a) &nbsp; 12, 19, 14, 17, 11
        <br/>(b) &nbsp; 20, 13, 16, 11, 18
        <br/>(c) &nbsp; 15, 11, 20, 17, 13, 19
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">6.</span>
      <span>Fill in <strong>&gt;, &lt; or =</strong>:
        <br/>(a) 14 __ 11 &nbsp;&nbsp;
        (b) 18 __ 20 &nbsp;&nbsp;
        (c) 15 __ 15 &nbsp;&nbsp;
        (d) 19 __ 12 &nbsp;&nbsp;
        (e) 11 __ 17 &nbsp;&nbsp;
        (f) 20 __ 20 &nbsp;&nbsp;
        (g) 13 __ 16 &nbsp;&nbsp;
        (h) 20 __ 11
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">7.</span>
      <span>Write the number that comes just <strong>before</strong>:
        <br/>(a) __ 15 &nbsp;&nbsp;
        (b) __ 20 &nbsp;&nbsp;
        (c) __ 12 &nbsp;&nbsp;
        (d) __ 18
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">8.</span>
      <span>Write the number that comes just <strong>after</strong>:
        <br/>(a) 13 __ &nbsp;&nbsp;
        (b) 17 __ &nbsp;&nbsp;
        (c) 11 __ &nbsp;&nbsp;
        (d) 19 __
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">9.</span>
      <span>Fill in the missing numbers in each sequence:
        <br/>(a) 11, 12, __, 14, __, 16
        <br/>(b) __, 15, 16, __, 18, __
        <br/>(c) 17, __, 19, __
        <br/>(d) __, 13, __, 15, 16, __
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">10.</span>
      <span><strong>Word problem:</strong>
        There are 20 students in a class. 11 of them are girls.
        <br/>(a) Write the number 20 in words.
        <br/>(b) Write the number 11 in words.
        <br/>(c) Which number is greater — 20 or 11? Write a number sentence using &gt;.
      </span>
    </li>

  </ol>
</div>

</div>
`
};

/* ════════════════════════════════════════════════════════════
   TOPIC 3 — Counting and Ordering  (FULL NOTES)
════════════════════════════════════════════════════════════ */
window.TOPIC_CONTENT['Counting and Ordering'] = {

preview: `
<h2>Counting and Ordering</h2>
<p>This topic deepens your understanding of counting — including counting
forward, counting backward, counting by 2s, and placing any set of numbers
into the correct order. We will work with both small and larger groups of
objects and numbers up to 20...</p>
`,

body: `
<div class="content-body">

<!-- ───────────────────────────────────────
     SECTION 1 — WHAT IS COUNTING
─────────────────────────────────────── -->
<h2>1. What is Counting?</h2>

<div class="def-box">
  <div class="def-label">Definition</div>
  <p><strong>Counting</strong> is the process of saying numbers in their
  correct order while matching one number to one object.
  Counting tells us <em>how many</em> objects are in a group.</p>
</div>

<p>In Topics 1 and 2 you learned all the numbers from 0 to 20 and their
spellings. In this topic we go deeper — you will learn to count
<strong>forward</strong>, count <strong>backward</strong>,
count in <strong>steps of 2</strong>, count in <strong>steps of 5</strong>,
count in <strong>steps of 10</strong>, and arrange numbers in the
correct order.</p>

<div class="note-box">
  <span class="note-icon">💡</span>
  <span class="note-txt">
    <strong>Why does ordering matter?</strong> When numbers are in order
    it becomes easy to find the smallest, the largest, the one in the
    middle, and any missing number. Ordering is used every day — in
    queues, on clocks, on rulers, and in every branch of mathematics.
  </span>
</div>

<!-- ───────────────────────────────────────
     SECTION 2 — COUNTING FORWARD
─────────────────────────────────────── -->
<h2>2. Counting Forward</h2>

<div class="def-box">
  <div class="def-label">Definition</div>
  <p><strong>Counting forward</strong> means starting at a number and
  saying each number that comes <em>after</em> it, one at a time,
  going upward.</p>
</div>

<div class="formula">
  <div class="formula-lbl">Counting Forward — 1 to 20</div>
  <div class="formula-txt">1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20</div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 1 — Count forward from 6</div>
  <div class="ex-q">Start at 6 and count forward to 13.</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Begin at 6.</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Add 1 each time: <strong>6, 7, 8, 9, 10, 11, 12, 13</strong></div></div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">You counted forward 7 steps from 6 to reach 13.</div></div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 2 — Fill in the missing numbers</div>
  <div class="ex-q">14, __, __, 17, __, 19</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Each number is 1 more than the one before it.</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">14 + 1 = <strong>15</strong></div></div>
  <div class="step"><div class="step-n">3</div>
    <div class="step-t">15 + 1 = <strong>16</strong> &nbsp;→&nbsp; already given: 17</div></div>
  <div class="step"><div class="step-n">4</div>
    <div class="step-t">17 + 1 = <strong>18</strong></div></div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">Answer: &nbsp;<strong>14, 15, 16, 17, 18, 19</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 3 — COUNTING BACKWARD
─────────────────────────────────────── -->
<h2>3. Counting Backward</h2>

<div class="def-box">
  <div class="def-label">Definition</div>
  <p><strong>Counting backward</strong> means starting at a number and
  saying each number that comes <em>before</em> it, one at a time,
  going downward. We subtract 1 each time.</p>
</div>

<div class="formula">
  <div class="formula-lbl">Counting Backward — 20 to 1</div>
  <div class="formula-txt">20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1</div>
</div>

<div class="note-box">
  <span class="note-icon">🚀</span>
  <span class="note-txt">
    <strong>Real-world example:</strong> A rocket launch countdown
    uses backward counting — 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    <em>Blast off!</em> Counting backward is just as important as
    counting forward.
  </span>
</div>

<div class="ex-box">
  <div class="ex-label">Example 3 — Count backward from 15</div>
  <div class="ex-q">Start at 15 and count backward to 9.</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Begin at 15.</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Subtract 1 each time:
    <strong>15, 14, 13, 12, 11, 10, 9</strong></div></div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">You counted backward 6 steps from 15 to reach 9.</div></div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 4 — Fill in the missing numbers (backward)</div>
  <div class="ex-q">18, __, 16, __, 14, __</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Each number is 1 less than the one before it.</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">18 − 1 = <strong>17</strong></div></div>
  <div class="step"><div class="step-n">3</div>
    <div class="step-t">16 − 1 = <strong>15</strong></div></div>
  <div class="step"><div class="step-n">4</div>
    <div class="step-t">14 − 1 = <strong>13</strong></div></div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">Answer: &nbsp;<strong>18, 17, 16, 15, 14, 13</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 4 — COUNTING IN 2s
─────────────────────────────────────── -->
<h2>4. Counting in Steps of 2</h2>

<div class="def-box">
  <div class="def-label">Definition</div>
  <p><strong>Counting in 2s</strong> means skipping one number each time
  and adding 2. This produces the pattern of
  <em>even numbers</em> when we start at 0 or 2, and
  <em>odd numbers</em> when we start at 1.</p>
</div>

<table class="tbl">
  <thead>
    <tr>
      <th>Starting at 0 → Even numbers</th>
      <th>Starting at 1 → Odd numbers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20</td>
      <td>1, 3, 5, 7, 9, 11, 13, 15, 17, 19</td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  <span class="note-icon">👟</span>
  <span class="note-txt">
    <strong>Memory aid:</strong> Think of counting your shoes — you
    always count them in pairs: 2, 4, 6, 8… because shoes come in twos!
  </span>
</div>

<div class="ex-box">
  <div class="ex-label">Example 5 — Count in 2s starting at 2</div>
  <div class="ex-q">Fill in the sequence: 2, 4, __, 8, __, 12, __, 16, __, 20</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Add 2 each time.</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">4 + 2 = <strong>6</strong> &nbsp;|&nbsp;
    8 + 2 = <strong>10</strong> &nbsp;|&nbsp;
    12 + 2 = <strong>14</strong> &nbsp;|&nbsp;
    16 + 2 = <strong>18</strong></div></div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">Answer: <strong>2, 4, 6, 8, 10, 12, 14, 16, 18, 20</strong></div></div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 6 — Count in 2s starting at 1 (odd numbers)</div>
  <div class="ex-q">Fill in: 1, 3, __, 7, __, 11, __, 15, __, 19</div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">Answer: <strong>1, 3, 5, 7, 9, 11, 13, 15, 17, 19</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 5 — COUNTING IN 5s
─────────────────────────────────────── -->
<h2>5. Counting in Steps of 5</h2>

<div class="def-box">
  <div class="def-label">Definition</div>
  <p><strong>Counting in 5s</strong> means adding 5 each time.
  This is useful for counting fingers, tally marks and money.</p>
</div>

<div class="formula">
  <div class="formula-lbl">Counting in 5s</div>
  <div class="formula-txt">0 → 5 → 10 → 15 → 20</div>
</div>

<div class="note-box">
  <span class="note-icon">✋</span>
  <span class="note-txt">
    <strong>Memory aid:</strong> You have 5 fingers on one hand.
    One hand = 5. Two hands = 10. Three hands = 15. Four hands = 20.
    Counting in 5s matches counting hands!
  </span>
</div>

<div class="ex-box">
  <div class="ex-label">Example 7 — Count in 5s</div>
  <div class="ex-q">Fill in the sequence: 0, 5, __, 15, __</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">0 + 5 = 5 &nbsp;|&nbsp; 5 + 5 = <strong>10</strong>
    &nbsp;|&nbsp; 15 + 5 = <strong>20</strong></div></div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">Answer: <strong>0, 5, 10, 15, 20</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 6 — COUNTING IN 10s
─────────────────────────────────────── -->
<h2>6. Counting in Steps of 10</h2>

<div class="def-box">
  <div class="def-label">Definition</div>
  <p><strong>Counting in 10s</strong> means adding 10 each time.
  This forms the basis of our entire number system — every new
  decade (10, 20, 30…) is one more group of ten.</p>
</div>

<div class="formula">
  <div class="formula-lbl">Counting in 10s</div>
  <div class="formula-txt">0 → 10 → 20 → 30 → 40 → 50 → 60 → 70 → 80 → 90 → 100</div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 8 — Count in 10s</div>
  <div class="ex-q">Start at 10 and count in 10s up to 50.</div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t"><strong>10, 20, 30, 40, 50</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 7 — ORDERING NUMBERS
─────────────────────────────────────── -->
<h2>7. Ordering Numbers 1 to 20</h2>

<p>Ordering means placing a group of numbers into a sequence —
either ascending (smallest to largest) or descending
(largest to smallest). You already practised this in Topics 1 and 2.
Now we combine both ranges and work with larger sets.</p>

<div class="ex-box">
  <div class="ex-label">Example 9 — Order a mixed set</div>
  <div class="ex-q">Arrange in ascending order:
  &nbsp; 14, 3, 18, 7, 11, 1, 20, 9</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Find the smallest: <strong>1</strong></div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">Then: <strong>3, 7, 9, 11, 14, 18, 20</strong></div></div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">Answer: <strong>1, 3, 7, 9, 11, 14, 18, 20</strong></div></div>
</div>

<div class="ex-box">
  <div class="ex-label">Example 10 — Find the missing number in a sequence</div>
  <div class="ex-q">4, 6, __, 10, __, 14</div>
  <div class="step"><div class="step-n">1</div>
    <div class="step-t">Find the pattern: 6 − 4 = 2 &nbsp;→&nbsp;
    the sequence increases by <strong>2</strong> each time.</div></div>
  <div class="step"><div class="step-n">2</div>
    <div class="step-t">6 + 2 = <strong>8</strong> &nbsp;|&nbsp;
    10 + 2 = <strong>12</strong></div></div>
  <div class="step"><div class="step-n">✓</div>
    <div class="step-t">Answer: <strong>4, 6, 8, 10, 12, 14</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 8 — EVEN AND ODD NUMBERS
─────────────────────────────────────── -->
<h2>8. Even and Odd Numbers</h2>

<table class="tbl">
  <thead>
    <tr>
      <th>Type</th>
      <th>Definition</th>
      <th>Numbers 1–20</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Even</strong></td>
      <td>A number that can be divided into two equal groups.
      Always ends in 0, 2, 4, 6 or 8.</td>
      <td>2, 4, 6, 8, 10, 12, 14, 16, 18, 20</td>
    </tr>
    <tr>
      <td><strong>Odd</strong></td>
      <td>A number that cannot be divided into two equal groups.
      Always ends in 1, 3, 5, 7 or 9.</td>
      <td>1, 3, 5, 7, 9, 11, 13, 15, 17, 19</td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  <span class="note-icon">🧦</span>
  <span class="note-txt">
    <strong>Easy test:</strong> Look at the last digit only.
    If it ends in 0, 2, 4, 6 or 8 → even.
    If it ends in 1, 3, 5, 7 or 9 → odd.
    So 18 is even (ends in 8) and 13 is odd (ends in 3).
  </span>
</div>

<div class="ex-box">
  <div class="ex-label">Example 11 — Identify even or odd</div>
  <div class="ex-q">State whether each number is even or odd:</div>
  <div class="step"><div class="step-n">a</div>
    <div class="step-t">16 &nbsp;→&nbsp; ends in 6 &nbsp;→&nbsp; <strong>Even</strong></div></div>
  <div class="step"><div class="step-n">b</div>
    <div class="step-t">9  &nbsp;→&nbsp; ends in 9 &nbsp;→&nbsp; <strong>Odd</strong></div></div>
  <div class="step"><div class="step-n">c</div>
    <div class="step-t">20 &nbsp;→&nbsp; ends in 0 &nbsp;→&nbsp; <strong>Even</strong></div></div>
  <div class="step"><div class="step-n">d</div>
    <div class="step-t">7  &nbsp;→&nbsp; ends in 7 &nbsp;→&nbsp; <strong>Odd</strong></div></div>
  <div class="step"><div class="step-n">e</div>
    <div class="step-t">14 &nbsp;→&nbsp; ends in 4 &nbsp;→&nbsp; <strong>Even</strong></div></div>
</div>

<!-- ───────────────────────────────────────
     SECTION 9 — SUMMARY
─────────────────────────────────────── -->
<h2>9. Summary</h2>

<table class="tbl">
  <thead>
    <tr><th>Concept</th><th>Rule</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td>Counting forward</td><td>Add 1 each time</td><td>5, 6, 7, 8, 9</td></tr>
    <tr><td>Counting backward</td><td>Subtract 1 each time</td><td>12, 11, 10, 9, 8</td></tr>
    <tr><td>Counting in 2s</td><td>Add 2 each time</td><td>2, 4, 6, 8, 10</td></tr>
    <tr><td>Counting in 5s</td><td>Add 5 each time</td><td>0, 5, 10, 15, 20</td></tr>
    <tr><td>Counting in 10s</td><td>Add 10 each time</td><td>10, 20, 30, 40</td></tr>
    <tr><td>Ascending order</td><td>Smallest → Largest</td><td>3, 7, 11, 15, 19</td></tr>
    <tr><td>Descending order</td><td>Largest → Smallest</td><td>19, 15, 11, 7, 3</td></tr>
    <tr><td>Even numbers</td><td>End in 0, 2, 4, 6, 8</td><td>2, 4, 6, 8, 10…</td></tr>
    <tr><td>Odd numbers</td><td>End in 1, 3, 5, 7, 9</td><td>1, 3, 5, 7, 9…</td></tr>
  </tbody>
</table>

<!-- ───────────────────────────────────────
     ACTIVITY SECTION
─────────────────────────────────────── -->
<div class="activity">
  <div class="act-head">
    <span class="act-icon">✏️</span>
    <div>
      <div class="act-title">Activity — Do These in Your Exercise Book</div>
      <div class="act-note">
        Write only the question number and your answer.
        Do not copy the questions. Show all working clearly.
      </div>
    </div>
  </div>

  <ol class="act-qs">

    <li class="act-q">
      <span class="act-qn">1.</span>
      <span>Count <strong>forward</strong> and fill in the missing numbers:
        <br/>(a) 3, 4, __, 6, __, 8
        <br/>(b) 11, __, 13, __, 15, __
        <br/>(c) 7, 8, __, __, 11, 12, __
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">2.</span>
      <span>Count <strong>backward</strong> and fill in the missing numbers:
        <br/>(a) 10, 9, __, 7, __, 5
        <br/>(b) 20, __, 18, __, 16, __
        <br/>(c) 15, 14, __, __, 11, 10, __
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">3.</span>
      <span>Count in <strong>steps of 2</strong> and fill in the missing numbers:
        <br/>(a) 0, 2, __, 6, __, 10
        <br/>(b) 1, 3, __, 7, __, 11
        <br/>(c) 10, 12, __, 16, __, 20
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">4.</span>
      <span>Count in <strong>steps of 5</strong>:
        <br/>(a) 0, __, 10, __, 20
        <br/>(b) 5, 10, __, __, 25
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">5.</span>
      <span>Arrange each set in <strong>ascending order</strong>:
        <br/>(a) 12, 5, 18, 3, 9, 15
        <br/>(b) 20, 1, 11, 7, 14, 4
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">6.</span>
      <span>Arrange each set in <strong>descending order</strong>:
        <br/>(a) 6, 14, 2, 19, 10, 17
        <br/>(b) 8, 16, 3, 13, 20, 5
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">7.</span>
      <span>Write <strong>even</strong> or <strong>odd</strong> for each number:
        <br/>(a) 4 &nbsp;&nbsp; (b) 11 &nbsp;&nbsp; (c) 18 &nbsp;&nbsp;
        (d) 7 &nbsp;&nbsp; (e) 20 &nbsp;&nbsp; (f) 13 &nbsp;&nbsp;
        (g) 6 &nbsp;&nbsp; (h) 19
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">8.</span>
      <span>Find the <strong>pattern</strong> and fill in the missing numbers:
        <br/>(a) 2, 4, 6, __, __, 12
        <br/>(b) 1, 3, 5, __, __, 11
        <br/>(c) 3, 6, 9, __, 15
        <br/>(d) 20, 15, __, 5, __
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">9.</span>
      <span>Write all the <strong>even numbers</strong> between 1 and 20.
        <br/>Then write all the <strong>odd numbers</strong> between 1 and 20.
      </span>
    </li>

    <li class="act-q">
      <span class="act-qn">10.</span>
      <span><strong>Word problem:</strong>
        A farmer has chickens standing in a line numbered
        2, 4, 6, 8 and 10.
        <br/>(a) What type of numbers are these — even or odd?
        <br/>(b) What is the next number in the pattern?
        <br/>(c) Arrange the numbers 10, 4, 8, 2, 6 in descending order.
      </span>
    </li>

  </ol>
</div>

</div>
`
};

/* ════════════════════════════════════════════════════════════
   TOPIC 4 — Introduction to Addition  (preview only)
════════════════════════════════════════════════════════════ */
window.TOPIC_CONTENT['Introduction to Addition'] = {
preview: `
<h2>Introduction to Addition</h2>
<p>Addition is the process of bringing two or more numbers together to make a
larger number. We use the plus sign (+) and the equals sign (=) to write
addition sentences. In this topic you will learn what addition means, how to
add using objects, fingers and number lines, and how to write and solve
addition number sentences...</p>
`
};

/* ════════════════════════════════════════════════════════════
   TOPIC 5 — Introduction to Subtraction  (preview only)
════════════════════════════════════════════════════════════ */
window.TOPIC_CONTENT['Introduction to Subtraction'] = {
preview: `
<h2>Introduction to Subtraction</h2>
<p>Subtraction means taking away. When we remove objects from a group, the
total becomes smaller. We use the minus sign (−) to write subtraction
sentences. This topic covers what subtraction means, how to subtract using
objects and number lines, and how to check your answer using addition...</p>
`
};

/* ════════════════════════════════════════════════════════════
   TOPIC 6 — Shapes Around Us  (preview only)
════════════════════════════════════════════════════════════ */
window.TOPIC_CONTENT['Shapes Around Us'] = {
preview: `
<h2>Shapes Around Us</h2>
<p>Mathematics is not only about numbers — it is also about shapes.
Everything around you has a shape. In this topic we will identify and name
the basic 2D shapes: circle, square, rectangle and triangle. We will count
their sides and corners, describe them, and find them in everyday objects
around the classroom and home...</p>
`
};
