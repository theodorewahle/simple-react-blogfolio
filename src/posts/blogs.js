const blogs = {
  "3": {
    title: "the shortage of cs educators",
    subtitle: "30 august 2018",
    text: [
      "I don't think the shortage of computer science educators in the US will get better until the economics get a lot better for teachers.",
      "My little brother's high school CS class is all online. The teacher doesn't know the material.",
      `I think asking kids to "self-teach" CS in the classroom is OK, but my understanding is that it's hard to be TAUGHT math during one period and then be teaching themselves CS in the next.`,
      `Yes, CS can be self-learned, but the biggest problem with the lack of CS educators IMO is that CS students don't have mentors/role-models who can encourage them to stay with CS.`,
      `I purposely used the term "self-learned" instead of "self-taught." "Self-taught' is a misnomer. It's used to describe anyone who didn't take CS classes in high school or college. BUT most self-taughtcoders took online courses or watched a tutorial series with teachers who are often way more engaging than the in-person professionals.`,
      `Besides, there's a false dichotomy between self-taught or teacher-taught because CS classroom curricula comprise a fraction of the knowledge one needs to complete a project. To that end, all programmers I've met are mostly "self-learned."`
    ]
  },
  "2": {
    title: "knowledge debt in machine learning",
    subtitle: "2 september 2018",
    text: [
      "I've realized that – at least in computer science – 'knowledge debt' is just as evil as technical debt. You incur knowledge debt when you choose not to learn a concept that you come across while programming.",
      "For example, let's say you are learning Machine Learning through an online course, and you come across the concept of Linear Regression. You have two choices. You can:",
      "a) stop the course and take time to understand the concepts WITHIN linear regression (e.g. Least Squares Fitting)",
      "or",
      "b) you can understand the bare minimum to use a linear regression function (i.e. this line is the best fit for these points)",
      "Either choice is reasonable. The reality is, you may not NEED to understand linear regression to get your script working. By choosing to bypass understanding this concept, you're taking out a loan in the currency of time.",
      `We have such advanced ML packages that so much of the fundamental mathematics of ML have been abstracted out for casual programmers. Knowledge debt can be useful. Like real debt, it's a tool. It's good for momentum.`,
      `But I fear there will come a time when I will introduce bugs into my code because I am completely missing the fundamentals of some of these ML functions I'm working with.`,
      "As my learning advances, the topics I encounter will be increasingly complex. As a result, each new concept will take longer to learn than the last. If I choose not to acquire a fundamental understanding of these advanced concepts, I am taking out a big, risky loan and adding it to my knowledge debt.",
      `I think a good rule of thumb is: if you have time to learn something more thoroughly, do it.`
    ]
  },
  "1": {
    title: "mental model 1: inversion",
    subtitle: "15 december 2018",
    text: [
      "In order to build my personal decision-making abilities, I've decided to start writing about mental models.",
      "Mental models are lenses through which we approach decisions.",
      "One popular mental model is the 80/20 rule. The 80/20 rule states that, in many man-made and natural systems, a vast majority (80%) of the results come from a small minority (20%) of the work. Examples: 20% of the species in the Amazon Rainforest account for 80% of the biomass, 20% of the salespeople at a company bring in 80% of the revenue.",
      `Once equipped with the mental model of the 80/20 rule, I could approach the problem of "I want to be great at Python. How many of the built-in Python functions should I learn?"`,
      "In practice, a vast majority of Python's utility stems from a small subset of its functionality. To be 80% competent in Python, I can learn just 20% of the Python language, saving myself tons of wasted time.",
      "Now that I have shown what a mental model looks like, I will address today's mental model: inversion. Inversion is a useful mental model because it allows you to focus on the 20% of tasks that will produce 80% of results.",
      "Inversion is simple. Think of a goal. Now, hypothetically, if you didn't achieve your goal, what are the three most likely reasons for your failure? Think of those reasons for failure, and avoid them at all costs.",
      "I will walk through a real-life example. One of my goals in the next year is: get a software engineering internship. If I don't get an internship next year, there are three likely culprits:",
      "1. I didn't apply for enough jobs",
      "2. I didn't spend enough time on Leetcode preparing for interviews",
      "3. I didn't make enough side-projects for my resumé",
      "Now that I have articulated my reasons for failure, I can focus on avoiding them. The engine that powers inversion is this fact: you can't solve a problem you don't have. Most of my life's failures do not have complex, hidden causes. If I fail a math test, it's because I didn't study. If I don't make the team, it's because I didn't practice enough.",
      "Inversion is a useful compass. It gives us the three key things to focus on when trying to achieve a goal. If I fail, it will be because I didn't accomplish one of my three main tasks. I don't need to worry about the 1,000 other related tasks on which I can waste my time. To find an internship, I don't need to worry about networking with software engineers, taking the right classes, or optimizing every word on my resumé.",
      "Apply. Prepare. Code. That's all I need to do.",
      "____________",
      "(Credit to James Clear and Charlie Munger for the concept of mental models.)"
    ]
  }
};
export default blogs;
