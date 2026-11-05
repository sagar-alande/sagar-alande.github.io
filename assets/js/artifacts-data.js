/* Artifact cards and detail popups for artifacts.html.
   To add an artifact, copy one object and edit it. Section fields are optional;
   a section can be plain text, a list of paragraphs, or a list of [label, text] pairs. */
window.ARTIFACTS = [
  {
    title: `RoleWise`,
    fullTitle: `RoleWise: An AI Career Agent That Only Uses Facts You Verified`,
    label: `FULL-STACK APP`, emoji: `🎯🧾`,
    accent: `#4f46e5`, dark: `#1e1b4b`,
    blurb: `A full-stack AI career agent that matches you to real jobs, explains every score, and fact-checks every resume line it writes.`,
    intro: `RoleWise reads a resume, matches the person to real job postings, explains every score, and shows exactly where they fall short. It was built for AIML-515: AI Integration Capstone at Indiana Wesleyan University. The rule behind every feature is that it uses only facts the person has verified, never facts it invented.`,
    objective: `Build a working system around one flow: verified profile, job requirements, explainable match, evidence, gap analysis, and the user's decision. It had to stay honest about what it knows and never speak for the user.`,
    process: [
      `I built a FastAPI and SQLAlchemy backend with a background worker, a Next.js frontend, and Postgres with pgvector, all running locally through Docker Compose. Every fact parsed from a resume starts as unverified and is not used until the person confirms it.`,
      `Match scores come from fixed rules in code. The language model only labels how important a requirement is and writes the explanation after the score exists, so it never sets the number. Generated resumes and cover letters must cite a verified fact for every line, and a fact checker removes anything it cannot trace.`,
      `I then ran a QA pass and a security audit, fixed what they found, and deployed the system to AWS with real Google Sign-In.`
    ],
    tools: [`Python`, `FastAPI`, `SQLAlchemy`, `Next.js`, `TypeScript`, `Postgres + pgvector`, `AWS ECS`, `Amazon Bedrock`, `Cognito`, `S3 + SQS`, `AWS CDK`, `Docker`],
    value: [
      [`Unique Value`, `This project shows that I can build a complete AI product, from data model and matching engine to frontend, authentication, and cloud deployment. It also shows a clear design position: AI output should be checked by code, not trusted because it sounds right.`],
      [`Relevance`, `In financial data work, a number has to be explainable. RoleWise applies that habit to AI by keeping the score deterministic, showing its full breakdown, and tying each generated claim to a source.`]
    ],
    audience: [
      [`Adaptations Made`, `The interface shows one percentage with a plain alignment label and avoids verdicts such as "not recommended." Gaps appear beside strengths, and hard blockers such as no sponsorship are flagged instead of hidden in the score.`],
      [`Relevance`, `A job seeker can see why a match scored as it did and decide for themselves. There is no apply button, so nothing is ever sent on their behalf.`]
    ],
    reflection: [
      [`Significance`, `This is the most complete system I have built, and it brought together the data, AI, security, and cloud skills from my program.`],
      [`Lessons Learned`, `Testing with a real resume found what fixtures had missed. One upload produced 17 skills but no roles or education. Reproducing it against the real PDF exposed several separate bugs that had been hiding one another. After the fixes, the same resume produced all 4 roles and 3 education entries.`]
    ],
    feedback: [
      [`Self-Review`, `A QA checklist of 72 items run across every feature found 5 real bugs, and a 13-area security audit found 5 issues.`],
      [`Revisions`, `I fixed all 5 QA bugs, including raw technical errors shown to users. From the audit, I fixed the top 3: making the auth bypass fail closed, limiting resume uploads, and guarding against prompt injection in resumes. The two remaining findings were low severity and stayed open.`]
    ],
    links: [
      [`🔍 Dive Deep →`, `rolewise.html`],
      [`💻 View the Code on GitHub →`, `https://github.com/sagar-alande/RoleWise`]
    ]
  },
  {
    title: `CodeTrace`,
    fullTitle: `CodeTrace: Residential Building-Code Research From Official Sources`,
    label: `FULL-STACK APP`, emoji: `🏗️🔎`,
    accent: `#1d4ed8`, dark: `#0f1e33`,
    blurb: `A full-stack research tool that answers residential building-code questions using only official municipal websites, with a source for every answer.`,
    intro: `CodeTrace is a residential building-code research tool. A person picks one of five U.S. cities and a topic, asks a question, and gets a concise answer with supporting official sources. It is a research aid only and says so clearly. It does not certify compliance or replace inspectors, engineers, architects, or municipal authorities.`,
    objective: `Build a research tool that can be trusted because of its limits. It accepts results only from each city's approved government domains, and it says when it does not have enough information instead of guessing.`,
    process: [
      `I built the client with React, TypeScript, Vite, and Tailwind, and the backend on Supabase with Postgres row-level security and an Edge Function. The Edge Function runs the Tavily search, so the API key stays on the server.`,
      `Every result has to pass checks before it is shown. It must use HTTPS on an approved domain, duplicates are removed, and specific measurements must appear in a retained source. Section numbers are shown only when the source states them, never inferred.`,
      `I wrote automated security tests and a testing report, added Google Sign-In and guest access, and packaged the app in Docker with deployment to AWS through GitHub Actions.`
    ],
    tools: [`React`, `TypeScript`, `Vite`, `Tailwind CSS`, `Supabase`, `Postgres RLS`, `Edge Functions`, `Tavily`, `Docker`, `AWS ECS`, `GitHub Actions`],
    value: [
      [`Unique Value`, `This project shows that I can build a retrieval tool that treats source quality as the product. A lookalike domain such as nyc.gov.attacker.com is rejected, and a result that cannot be supported becomes an honest "insufficient information" response.`],
      [`Relevance`, `Regulated work needs answers that can be traced to an authority. The same pattern applies to financial and compliance data: limit the sources, verify the claim, and show the evidence.`]
    ],
    audience: [
      [`Adaptations Made`, `The tool is written for homeowners and contractors who are not code experts. Topics are plain choices such as decks, basements, permits, and zoning, and a blueprint drawing highlights the part of a house each topic covers.`],
      [`Relevance`, `A clear disclaimer, official-source badges, and a source viewer help a reader check an answer rather than rely on it blindly.`]
    ],
    reflection: [
      [`Significance`, `CodeTrace taught me that much of the work in an AI search product happens around the search itself, in the checks that decide what can be shown.`],
      [`Lessons Learned`, `An answer can sound right and still be unsupported, so numbers need their own check. A failed search also needs careful wording. The app never lets an error suggest that no building-code requirement exists.`]
    ],
    links: [
      [`🔍 Dive Deep →`, `codetrace.html`],
      [`▶️ Watch the Demo →`, `https://youtu.be/9Te8NNeMaos`],
      [`💻 View the Code on GitHub →`, `https://github.com/sagar-alande/codetrace`]
    ]
  },
  {
      title: `How LLMs Are Trained`,
      fullTitle: `How a Large Language Model Is Trained: The Steps, the Resources, and What They Cost`,
      label: `MODEL DEVELOPMENT`, emoji: `📚⚡`,
      accent: `#0f766e`, dark: `#0f1e33`,
      blurb: `An infographic and slide deck that follow an LLM from raw text to deployment, with the data, compute, energy, and time each step takes.`,
      intro: `This artifact explains how a large language model goes from raw text to a product people use. It was developed for AIML-501 Model Development and has two parts. The first is a one-page infographic that gives the whole picture at a glance. The second is a 17-slide presentation that covers the same content in more depth with charts, tables, and speaker notes.`,
      objective: `Create a visual artifact that shows the key steps of training a generative AI model from data collection to deployment. It shows the main resources each step uses, which are datasets, computing power, energy, and time, and compares real models such as GPT-4, Claude, and Llama using the training numbers their developers share.`,
      process: [
        `This was an individual assignment. I started with the course resources from Stephen Wolfram and IBM to understand what training actually does. The model learns to produce a reasonable continuation of text one token at a time. I then gathered numbers for seven models from model cards, technical reports, and research papers.`,
        `I grouped training into eight steps across four phases, which are Prepare the Data, Pretrain, Align, and Test and Release. I tagged each step with the resources it uses most and gave each resource its own card with a bar chart and a short note on why it matters for performance and cost.`,
        `Before submitting, I checked every number one by one against its source. I changed GPT-4's hardware to a range, added limits to the DeepSeek-V3 comparison, fixed a chart bar that overstated BLOOM's emissions, and rewrote the data card to say that quality, diversity, filtering, and training methods all shape what a model learns.`
      ],
      tools: [`Infographic (HTML and CSS)`, `PowerPoint native charts`, `Model cards and technical reports`, `Generative AI (concept clarification)`, `Course resources`, `APA 7th edition`],
      value: [
        [`Unique Value`, `This artifact shows that I can take a complex technical process, check the facts behind it, and present it so a reader with no background can follow it. Every number traces to a source, every outside estimate is marked in gray italic text, and every value a developer did not share says Not disclosed, so missing data never looks like zero.`],
        [`Relevance`, `In financial services, every number in a report has to hold up and every comparison has to be fair. This project trained the same habits. DeepSeek-V3 used about 11 times fewer GPU hours than Llama 3.1 405B, but that figure counts only its final run on different chips, and I put that context right next to the number.`]
      ],
      audience: [
        [`Adaptations Made`, `The artifact is built for a reader with no background in AI. Each resource has one color and one icon that repeat everywhere it appears, the layout follows the order of the training process, and each card leads with one large number such as 52× or 1,287 MWh. A short panel explains how to read GPU hours, CO₂e, and estimates.`],
        [`Relevance`, `The infographic serves a reader who wants the full picture in a minute, and the presentation serves an instructor or business reader who wants each step explained with charts and notes. Both use the same numbers and sources.`]
      ],
      reflection: [
        [`Significance`, `I selected this artifact because it joins research, fact checking, and visual design. It made me understand not only what each training step does but also what it costs and why.`],
        [`Lessons Learned`, `Pretraining is where the money goes, since about 96% of DeepSeek-V3's GPU hours went to it. Where a model trains matters as much as how big it is. BLOOM and GPT-3 are about the same size, but BLOOM emitted 25 tonnes of CO₂e against GPT-3's 552 because it used newer chips and a cleaner power grid.`]
      ],
      feedback: [
        [`Feedback`, `Feedback on my first version said the content was strong but the page felt dense, and that a few model entries relied on partial public information. It also asked me to verify the precise numbers individually and to correct the idea that data quantity alone decides what a model knows.`],
        [`Revisions`, `I cut text and raised font sizes about 15%, labeled every estimate, and checked each claim against its source. I rewrote the data card and added the limits of the DeepSeek-V3 comparison directly on the artifact.`]
      ],
      references: `Wolfram, S. (2023). What is ChatGPT doing … and why does it work? · IBM Technology. (2023). How large language models work [Video]. · Patterson, D., et al. (2021). Carbon emissions and large neural network training. · Luccioni, A. S., Viguier, S., &amp; Ligozat, A.-L. (2023). Estimating the carbon footprint of BLOOM. · DeepSeek-AI. (2024). DeepSeek-V3 technical report. · Llama Team, AI @ Meta. (2024). The Llama 3 herd of models.`,
      links: [
        [`🔍 Dive Deep →`, `llm-training.html`],
        [`🖼️ View the Infographic →`, `llm-training-infographic.html`]
      ]
    },
  {
    title: `Neural Network Architecture`,
    fullTitle: `Neural Network Architecture Explained Through Hands-On Training and a Visual Presentation`,
    label: `MODEL DEVELOPMENT`, emoji: `🧠🔗`,
    accent: `#1d4ed8`, dark: `#0f1e33`,
    blurb: `How a neural network is built and how it learns, shown through ten hands-on training runs and a zooming visual deck.`,
    intro: `This artifact explains how a neural network is built and how it learns. It was developed for AIML-501 Model Development and has two parts. In the first part, I trained ten small networks by hand in the TensorFlow Neural Network Playground. In the second part, I built a visual presentation that breaks the architecture into six components and zooms into each one inside a single network diagram.`,
    objective: `Create a visual presentation that defines layers, neurons, weights, activation functions, loss functions, and optimization algorithms. It shows how data flows from the input layer through the hidden layers to the output layer, explains each part next to its visual, and ends with why visualizing a neural network matters.`,
    process: [
      `This was an individual assignment. I started in the TensorFlow Playground with a baseline network on the circle dataset, with two hidden layers of 4 and 2 neurons, a learning rate of 0.03, and tanh activation. For each run after that, I changed one setting, stopped near 500 epochs, and recorded the test loss and the training loss. The ten runs tested the dataset, noise, the number of layers and neurons, the input features, and the learning rate.`,
      `Next, I built one architecture diagram with an input layer, any number of hidden layers, an output layer, a loss function, and an optimizer joined by a backpropagation loop. Numbered markers show every place each component applies, including the weights in every gap between layers.`,
      `Finally, I turned the diagram into a slide deck. PowerPoint Morph zooms into one numbered marker per slide, and the definition, how it works, key types, and a real use case appear beside it. The deck ends with how one training step uses all six components and a summary of why visualizing a network matters.`
    ],
    tools: [`TensorFlow Neural Network Playground`, `PowerPoint Morph transitions`, `Architecture diagram`, `Visual design tool`, `Generative AI (concept clarification)`, `Course resources`, `APA 7th edition`],
    value: [
      [`Unique Value`, `This artifact shows that I can explain a technical system by testing it and by drawing it. The Playground runs give real evidence, and the diagram turns six abstract terms into parts a reader can point to. Seeing each component in place makes it clear that the forward pass makes a prediction, and the loss function and optimizer help the network learn from it.`],
      [`Relevance`, `In financial services, I work with models whose results have to be explained to people who do not build them. Knowing what each layer, weight, and learning rate does helps me see why a model fails and explain the fix in plain terms. In one run, a learning rate of 3 made the test loss jump from 0.032 to 1.016, and the diagram shows exactly why. The optimizer took steps that were too large.`]
    ],
    audience: [
      [`Adaptations Made`, `The deck is built for a reader with no background in neural networks. Each component has its own color and number, and the same number appears on the diagram, so the reader always knows where they are. Every component slide follows the same order of definition, how it works, key types, and a use case, and the speaker notes carry the spoken explanation.`],
      [`Relevance`, `These choices let an instructor or a business reader follow the full learning loop without reading any code. The zoom keeps attention on one part at a time without losing sight of the whole network.`]
    ],
    reflection: [
      [`Significance`, `I selected this artifact because it joins hands-on testing with clear explanation. The Playground showed me what each setting does, and the diagram made me place every component exactly where it acts.`],
      [`Lessons Learned`, `Learning lives in the weights, and every gap between layers has its own set. Activation functions are what make depth useful, because without them any number of layers still draws a straight line. My most useful lesson came from a mistake. I meant to test only squared inputs but left X₁ and X₂ turned on, and the test loss was 0.506. With only X₁² and X₂², it dropped to 0.001 on the same model, which showed me how much the choice of inputs matters.`]
    ],
    feedback: [
      [`Self-Review`, `My first version was a slide deck that reported my experiment results. When I checked it against the brief, it described what I did instead of explaining the architecture, and the diagram showed weights in only one place.`],
      [`Revisions`, `I rebuilt the work as one landscape poster with numbered markers everywhere each component applies, showed that a network can have any number of hidden layers and neurons, and added a summary. I then turned the poster into a deck that zooms into each component with Morph.`]
    ],
    references: `Google for Developers. (n.d.). Neural networks. Machine Learning Crash Course. · Smilkov, D., &amp; Carter, S. (n.d.). TensorFlow Neural Network Playground.`,
    links: [
      [`▶️ Watch the Presentation →`, `https://youtu.be/Nbrgo0VI84U`],
      [`📊 Open the PowerPoint →`, `https://onedrive.live.com/:p:/g/personal/F95832A95155F5A7/IQBqin4fZTimQZ1pTUU3Z8EdATNWK4vQV-l6w_4F3L470AY?resid=F95832A95155F5A7!s1f7e8a6a386541a69d694d453767c11d&ithint=file%2Cpptx&e=kpCYKs&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy9mOTU4MzJhOTUxNTVmNWE3L0lRQnFpbjRmWlRpbVFaMXBUVVUzWjhFZEFUTldLNHZRVi1sNndfNEYzTDQ3MEFZP2U9a3BDWUtz`],
      [`🔍 Explore the Network Activity →`, `neural-network.html`]
    ]
  },
  {
    title: `ML Algorithm Map`,
    fullTitle: `Machine Learning Algorithm Map — A Visual Framework for Twelve ML Algorithms`,
    label: `MODEL DEVELOPMENT`, emoji: `🗺️⚙️`,
    accent: `#15803d`, dark: `#14532d`,
    blurb: `Twelve ML algorithms mapped by how they learn, their model family, and where they are used.`,
    intro: `This artifact is a visual framework that organizes twelve machine learning algorithms by how they learn, which model family they belong to, and where they are used. It was developed for AIML-501: Model Development and is paired with an APA paper that explains how each algorithm was classified and reflects on what I learned while building the map.`,
    objective: `Create an infographic that classifies each algorithm by learning type, application domain (Tabular Data, Computer Vision, NLP, Generative AI), real-world use cases, and a brief explanation of how it works, while clearly showing how the algorithms relate to and differ from one another.`,
    process: [
      `This was an individual assignment. I selected twelve algorithms so that every learning type and every domain was covered: linear and logistic regression, decision trees, random forests, support vector machines, and k nearest neighbors for classical supervised learning; k-means and PCA for classical unsupervised learning; and CNNs, RNNs, transformers, and GANs for deep learning.`,
      `I classified each algorithm on three levels: how it learns (supervised, unsupervised, or self-supervised), which model family it belongs to (classical ML or deep learning), and the algorithm itself. A concept map shows that hierarchy at a glance, and a numbered comparison chart lets the reader compare type, domains, how it works, and example uses down each column.`,
      `Three algorithms needed careful judgment. The transformer received its own self-supervised branch, drawn with a dashed outline, because its pretraining has no human labels. The GAN was placed under unsupervised because it learns from unlabeled images. The RNN was limited to NLP because time series is sequence data, not tabular data. A domain is marked only where the algorithm is commonly used today, not where it could be applied in theory.`
    ],
    tools: [`Visual design tool`, `Concept map`, `Comparison chart`, `Generative AI (concept clarification)`, `Course resources`, `APA 7th edition`],
    value: [
      [`Unique Value`, `This artifact shows that I can turn a long list of algorithms into one connected picture. It organizes the field around a few clear decisions, makes the exceptions visible instead of hiding them, and highlights relationships such as decision tree to random forest, RNN to transformer, and KNN versus k-means.`],
      [`Relevance`, `In financial services, most of my data is tabular, such as collateral and margin records. The classical side of the map, especially random forests and k-means, fits problems like flagging unusual records or grouping similar positions for review, while the deep learning side connects to the transformer-based applications I build. The map helps me choose a model based on the problem rather than on what is popular.`]
    ],
    audience: [
      [`Adaptations Made`, `The map is designed to be read from top to bottom, then used as a reference. Each algorithm is numbered so the reader can move from the concept map to its row in the comparison chart. Learning types are color-coded, domains are tagged on every algorithm, and a small nested diagram shows how AI, machine learning, deep learning, and generative AI fit inside one another.`],
      [`Relevance`, `These choices let a reader compare twelve algorithms quickly without prior knowledge of each one, while still giving enough detail to explain how each algorithm works and where it is used.`]
    ],
    reflection: [
      [`Significance`, `Rebuilding the infographic as a concept map changed how I think about the subject. Instead of memorizing algorithms one at a time, I started seeing a small number of decisions that sort all of them.`],
      [`Lessons Learned`, `Real algorithms do not respect clean categories. I learned to define each category by a test I can apply consistently, such as whether the model needs human labels, and then make the exceptions visible. Seeing the decision tree next to the random forest also connected back to the earlier fruit classification activity and showed me why ensembles exist: many trees voting together reduce the overfitting of a single tree.`]
    ],
    feedback: [
      [`Self-Review`, `My first version was a grid of cards, one per algorithm. Each card was accurate, but when I checked it against the goal of showing how the algorithms relate, it presented twelve separate facts rather than one connected picture.`],
      [`Revisions`, `I rebuilt it as a color-coded concept map with a connections panel and a comparison chart. I also used a generative AI tool to clarify how transformers are trained and checked those answers against the assigned resources before using them.`]
    ],
    references: `Cloud Simplified. (2024, April 29). What is generative AI | Unraveling the differences between AI, ML, DL, and GenAI [Video]. YouTube. · Costa, B., &amp; Trojahan, M. (2024, August 28). What are the differences between AI, ML, DL, and Gen AI? e-Core.`,
    links: [
      [`🔍 Dive Deep →`, `ml-algorithm-map.html`],
      [`🗺️ View the Infographic →`, `https://sagar-alande.github.io/ml-algorithm-map/`]
    ]
  },
  {
    title: `Enterprise RAG System`,
    fullTitle: `Enterprise Retrieval-Augmented Generation (RAG) System for FreshBite Foods`,
    label: `ENTERPRISE AI`, emoji: `🤖📊`,
    accent: `#2f80ed`, dark: `#1b3a5c`,
    blurb: `RAG-based knowledge retrieval solution designed for FreshBite Foods.`,
    intro: `This artifact presents the design of an Enterprise Retrieval-Augmented Generation (RAG) system for FreshBite Foods. The objective was to improve how employees access trusted business information across the organization. The project combines enterprise architecture and knowledge management to solve a real business problem. I selected this artifact because it demonstrates both my technical understanding of RAG systems and my ability to design enterprise AI solutions.`,
    objective: `The objective of this project was to design an Enterprise Retrieval-Augmented Generation (RAG) system for FreshBite Foods. The system helps employees retrieve accurate and trusted information from enterprise documents instead of spending time searching through multiple sources. The goal was to improve productivity, support better decision-making, and reduce the risk of incorrect or outdated information.`,
    process: `This was an individual project. I started by identifying business problems in the food and beverage industry where a RAG system could provide measurable value. I then defined the use cases, key stakeholders, and business objectives. Next, I designed the system architecture and created a workflow that showed how a user query moves through the RAG system. Finally, I evaluated stakeholder feedback, identified areas for improvement, and documented the overall solution in a case study.`,
    tools: [`Generative AI (ChatGPT)`, `NotebookLM`, `Lucidchart`, `Retrieval-Augmented Generation (RAG)`, `Enterprise AI Architecture`, `Vector Database concepts`, `Embeddings`, `Semantic Search`, `Hybrid Retrieval`, `Role-Based Access Control (RBAC)`],
    value: [
      [`Unique Value`, `This artifact demonstrates my ability to connect business needs with enterprise AI solutions. It shows that I can design more than just an AI application. I can also design the supporting architecture, security, governance, and business processes needed for successful implementation. It reflects both technical understanding and strategic thinking.`],
      [`Relevance`, `This artifact shows how I approach enterprise AI solutions. I focused on solving a real business problem instead of only designing a technical solution. It also reflects my approach of building governance, security, and business value into the solution from the beginning.`]
    ],
    audience: [
      [`Adaptations Made`, `I designed this artifact for business and technical audiences. I used simple language to explain the RAG architecture and avoided unnecessary technical details. I also connected each technical component to a business benefit, so the overall solution is easier to understand.`],
      [`Relevance`, `These changes make the artifact useful for key stakeholders like managers, architects, and business leaders. They can understand how the solution works and how it supports business goals without needing deep technical knowledge.`]
    ],
    reflection: [
      [`Significance`, `I selected this artifact because it brings together many of the concepts covered in this course. It shows my understanding of enterprise AI, RAG, security, governance, and system architecture. More importantly, it shows how I approach AI projects by starting with the business problem and then designing the solution.`],
      [`Lessons Learned`, `This project helped me understand that building a RAG system is more than connecting an AI model to a knowledge base. Data quality and strong governance play a crucial role in deciding the quality of the solution. I also learned how each part of the architecture supports accurate and reliable AI responses.`]
    ],
    feedback: [
      [`Feedback`, `The feedback I received encouraged me to think beyond the technical design. I improved the architecture by adding stronger governance, security controls, hybrid retrieval, document validation, and monitoring. I also explained the business value of each major component more clearly.`],
      [`Revisions`, `Based on the feedback, I refined the architecture, expanded the workflow, and strengthened the stakeholder analysis. These changes made the final solution more practical and better aligned with enterprise AI best practices.`]
    ],
    references: `AI-assisted discussions were conducted using ChatGPT and NotebookLM to explore RAG concepts and validate the proposed architecture.`,
    links: [[`📄 View Full Case Study (WS3) →`, `https://docs.google.com/document/d/1ykdica8-AFqmgxHrD2Hn5f7Ycl4VicXV/edit?usp=sharing&ouid=114690808503887997417&rtpof=true&sd=true`]]
  },
  {
    title: `EduSphere AI`,
    fullTitle: `EduSphere AI — Student Success Copilot: System Architecture and Working Prototype`,
    label: `EDTECH AI`, emoji: `🎓🤖`,
    accent: `#1fa88c`, dark: `#0f5c50`,
    blurb: `Student Success Copilot — architecture and working AI prototype.`,
    intro: `This artifact documents EduSphere AI, an AI-powered Student Success Copilot developed during our team's R.3 Hack-a-Thon in the Large Language Models &amp; Generative AI course. Created from the perspective of the Chief Technology Officer of EduSphere, the artifact translates a real business problem — universities failing to identify struggling students until it is too late to help them — into a defensible system architecture and a working interactive prototype with a live language-model integration.`,
    objective: `Design a professional-grade system architecture for an AI academic-support product, and build a functioning prototype demonstrating it end to end: a personalized, retrieval-augmented student assistant and a role-scoped, configurable early-warning dashboard for faculty.`,
    process: `This was a group project; my role was architecture and technical implementation lead. I evaluated implementation options layer by layer (data ingestion, retrieval, the predictive risk model, orchestration, access control, infrastructure) and documented trade-offs and a recommendation for each. I then built the prototype in iterative passes: mocked responses to validate the interface, real role-based access control behind an actual login, a genuine knowledge base and module-performance model, and finally a live API integration so the assistant's answers and quizzes are generated in real time rather than scripted.`,
    tools: [`React`, `Claude API`, `Retrieval-style knowledge base`, `Recharts`, `Hand-built SVG`, `Documentation tools`],
    value: [
      [`Unique Value`, `This artifact demonstrates the ability to keep sensitive and general data separate by design, translate that decision into working access control, and debug a real production issue (an LLM output-truncation bug breaking quiz generation) rather than only designing on paper.`],
      [`Relevance`, `It aligns with my goal of leading applied-AI product and engineering work where technical decisions must hold up under real constraints such as data privacy, faculty trust, and student wellbeing, not only in a slide deck.`]
    ],
    audience: [
      [`Adaptations Made`, `The architecture reasoning was written so a non-engineering reviewer, such as an instructor or business stakeholder, could follow each trade-off without needing to trust it blindly, while the student-facing side of the prototype was written in supportive, non-clinical language appropriate for the students who actually use it.`],
      [`Relevance`, `These adaptations make the artifact legible to both technical and non-technical audiences at once, which mirrors the reality of a technical leadership role.`]
    ],
    reflection: [
      [`Significance`, `I selected this artifact because it best represents full-cycle ownership: business problem, architecture, working prototype, real API integration, and iterative hardening based on feedback, rather than analysis alone.`],
      [`Lessons Learned`, `This project strengthened my understanding that a design principle only becomes real once implemented and tested, and that structured output from a language model needs to be engineered for graceful degradation, not just correctness.`]
    ],
    feedback: [
      [`Feedback`, `Feedback focused on scoping faculty visibility to their own courses and students, making at-risk thresholds configurable per course, softening the student assistant's tone, reducing unnecessary visuals, and fixing a quiz feature that was failing outright.`],
      [`Revisions`, `I implemented row-level, course-scoped access control for faculty; added a faculty-configurable alert threshold; rewrote student-facing language to frame weak areas as growth opportunities; made charts and diagrams appear only when requested; and rebuilt quiz generation into a real ten-question flow with graceful recovery from incomplete model output.`]
    ],
    references: `Anthropic. (2025). Claude API documentation. · Recharts: A composable charting library built on React components. · Lucide icon library documentation.`,
    links: [[`📄 View Full Case Study →`, `https://claude.ai/public/artifacts/bd5df271-dcc7-49cb-a47a-1981c88634bc`]]
  },
  {
    title: `AI Evolution Timeline`,
    fullTitle: `AI Evolution Timeline — Key Milestones in the History of Artificial Intelligence`,
    label: `AI HISTORY`, emoji: `🕰️🧠`,
    accent: `#b7791f`, dark: `#6b4510`,
    blurb: `Key milestones in AI history, from early research to modern deep learning.`,
    intro: `The AI Evolution Timeline is an interactive visual artifact that highlights major milestones and breakthroughs in the development of artificial intelligence, from early research to modern deep learning breakthroughs.`,
    objective: `I created this artifact to present the history of AI in a clear, engaging, and easy-to-understand format that makes technical progress more approachable.`,
    process: `I identified key historical events in AI, organized them chronologically, and designed a timeline-based visual presentation that improves readability and engagement for viewers.`,
    tools: [`Claude Artifacts`, `Generative AI-assisted design`, `Content organization`, `Timeline structuring`, `Visual storytelling`],
    value: `This artifact shows my ability to translate complex technical history into a polished visual experience that supports learning, presentation, and communication.`,
    links: [[`🔍 Dive Deep →`, `ai-evolution.html`], [`🔗 Explore the Timeline →`, `https://claude.ai/public/artifacts/50ec449b-a242-4d48-bad4-ad53ae4cb503`]]
  },
  {
    title: `TripForge Chatbot`,
    fullTitle: `TripForge — GPT-Powered USA Travel Planning Chatbot`,
    label: `CUSTOM GPT`, emoji: `✈️🗺️`,
    accent: `#ea580c`, dark: `#9a3412`,
    blurb: `A GPT-powered chatbot that plans USA trips, routes, and itineraries.`,
    intro: `TripForge is a GPT-based travel companion chatbot built to help users plan trips within the United States, including road trips, stop suggestions, and personalized itineraries.`,
    objective: `I created this artifact to demonstrate how generative AI can be turned into a practical, user-friendly travel assistant that simplifies trip planning and improves decision-making.`,
    process: `I designed the chatbot concept, structured the travel-planning workflow, defined prompt behavior, and organized the responses so the chatbot could provide clear, relevant, and helpful recommendations for different trip scenarios.`,
    tools: [`ChatGPT`, `Custom GPT configuration`, `Prompt engineering`, `Conversational UX design`, `Structured travel-planning logic`],
    value: `This artifact demonstrates my ability to build applied AI solutions that combine creativity, usability, and problem solving to deliver value in a real-world context.`,
    links: [[`🔍 Dive Deep →`, `tripforge.html`], [`💬 Try TripForge →`, `https://chatgpt.com/g/g-69ac8a2b37f8819192c9693f2dcd6e5c-tripforge`]]
  },
  {
    title: `Interactive ML Learning`,
    fullTitle: `Interactive ML Learning with the Machine Learning Training Methods Coach`,
    label: `GUIDED LEARNING`, emoji: `🧠📈`,
    accent: `#4f46e5`, dark: `#312e81`,
    blurb: `Machine learning concepts explored through guided questioning with an AI coach.`,
    intro: `This artifact represents an interactive learning activity carried out using the Machine Learning Training Methods Coach, where core machine learning concepts were explored through guided questioning and step-by-step explanations.`,
    objective: `I created this artifact to strengthen my understanding of machine learning concepts in a structured way and to demonstrate how complex topics can be broken down into simpler, intuitive explanations through active learning.`,
    process: `I accessed the AI coach through the provided link and explored machine learning concepts by asking direct conceptual questions, follow-up questions, and simplification requests. The session progressed from understanding basic definitions to breaking concepts into smaller components such as nodes, hidden layers, training, and prediction. I repeatedly refined the explanations by asking for simpler wording, examples, and essay-style structure so that the concepts became easier to understand and communicate.`,
    tools: [`Machine Learning Training Methods Coach (AI chatbot)`, `Web browser`, `Prompt-based learning`, `Interactive concept exploration`],
    value: `This artifact demonstrates my ability to learn complex technical topics independently, ask meaningful questions, and convert difficult machine learning concepts into clear, structured, and easy-to-understand insights.`,
    links: [[`🔍 Dive Deep →`, `interactive-learning.html`], [`🔗 Explore the Session →`, `https://student.schoolai.com/student-space?sessionId=cmmxnrhlx03ad5wxc2nbb0xdf`]]
  },
  {
    title: `Data Challenges in AI`,
    fullTitle: `Data Challenges in AI — Scenario-Based Learning with an AI Coach`,
    label: `DATA QUALITY`, emoji: `🧹📊`,
    accent: `#0e7490`, dark: `#164e63`,
    blurb: `Missing, noisy, imbalanced, and time-series data, worked through four scenarios.`,
    intro: `A scenario-based learning artifact built through guided interaction with an AI coach on real-world machine learning data challenges: missing data, noisy data, imbalanced datasets, and time-series gaps.`,
    objective: `To build a stronger, decision-driven approach to diagnosing, solving, and validating data problems in machine learning.`,
    process: [
      `I worked through four guided scenarios using a consistent flow: understand, validate, decide, implement, evaluate, and refine.`,
      `<strong>Scenario 1:</strong> Missing values in housing features were handled through diagnosis, imputation choices, and model-based validation.`,
      `<strong>Scenario 2:</strong> Noisy churn features were analyzed using profiling, outlier checks, and business validation before cleaning.`,
      `<strong>Scenario 3:</strong> Loan default imbalance was explored using baseline checks, resampling, class weights, and minority-class focused evaluation.`,
      `<strong>Scenario 4:</strong> Time-series gaps were handled through reindexing, interpolation, seasonal reasoning, and hold-out validation.`
    ],
    tools: [`School AI`, `ChatGPT`, `Python concepts`, `Pandas`, `Scikit-learn`, `Z-score`, `IQR`, `STL`, `ACF`, `SMOTE`],
    value: `This artifact shows a structured, production-oriented way of approaching data challenges using validation, business context, and measurable decisions.`,
    reflection: [[`Lessons Learned`, `The biggest shift was moving from applying techniques directly to making informed choices based on context, impact, and validation.`]],
    links: [[`🔍 Dive Deep →`, `data-challenges.html`], [`🔗 Explore the Session →`, `https://student.schoolai.com/student-space?sessionId=cmn58u180017jqw60aq8ywb7x`]]
  },
  {
    title: `Self-Assessment Journey`,
    fullTitle: `Self-Assessment Journey — Growth Across the AIML Course`,
    label: `REFLECTION`, emoji: `🪞📝`,
    accent: `#475569`, dark: `#1e293b`,
    blurb: `How my leadership, AI/ML understanding, and direction evolved during the course.`,
    intro: `This artifact presents my self-assessment journey from the start to the end of the AIML course. It captures how my thinking, confidence, and leadership perspective evolved over time.`,
    objective: `I created this artifact to reflect on my growth during the course and to clearly show how my understanding of AI/ML, leadership, communication, and professional direction developed through learning and self-evaluation.`,
    process: `I compared my start-of-course and end-of-course self-assessments, identified the most important growth areas, and organized them into a structured reflection. The focus was not only on how my scores changed, but also on how my mindset changed in areas such as communication, AI/ML application, leadership, and iterative learning.`,
    tools: [`Self-assessment forms`, `Reflective analysis`, `Structured comparison`, `Google Sites`, `Portfolio design`],
    value: `This artifact adds depth to my portfolio by showing not just what I learned, but how I evolved. It highlights self-awareness, reflection, and the ability to connect learning with long-term professional growth.`,
    reflection: [[`What Changed`, `The biggest shift for me was moving from mainly focusing on technical execution to thinking more about communication, leadership, AI/ML application in real systems, and the impact of the solutions I build.`]],
    links: [[`🔍 Dive Deep →`, `self-assessment.html`]]
  },
  {
    title: `AI Industry Newsletter`,
    fullTitle: `AI Industry Newsletter — A Monthly Publication on Applied Business AI`,
    label: `PUBLICATION`, emoji: `📰📬`,
    accent: `#be185d`, dark: `#831843`,
    blurb: `A live monthly publication on how businesses across industries apply AI.`,
    intro: `This artifact is a live AI industry newsletter designed as a recurring monthly publication. It focuses on how AI is being used in real business settings across industries rather than only covering technical announcements.`,
    objective: `I created this artifact to analyze current AI developments through a business lens and present them in a professional, readable, and engaging format. The goal was to move beyond general AI news and focus on practical business impact.`,
    process: `I researched current AI products, industry developments, and real-world implementations, selected relevant use cases across industries, analyzed their business value, and structured the findings into a clean digital publication. I then published it as a live web-based artifact to make it scalable and reusable as a monthly series.`,
    tools: [`AI research workflows`, `Web publishing`, `GitHub Pages`, `Structured content design`, `Trend analysis`, `Newsletter-style digital presentation`],
    value: `This artifact demonstrates my ability to translate technical AI developments into business-focused insights, design content as a repeatable digital product, and present analysis in a format that is both professional and scalable.`,
    reflection: [[`Lessons Learned`, `The biggest shift for me was moving from simply reading AI updates to actively interpreting how those developments affect workflows, decisions, and business value in real-world environments.`]],
    links: [[`🔍 Dive Deep →`, `newsletter.html`], [`📰 Open the Newsletter →`, `https://sagar-alande.github.io/newsletter-site/`]]
  },
  {
    title: `EAED Framework`,
    fullTitle: `Enterprise AI Ethical Decision-Making Framework for Responsible Generative AI Adoption`,
    label: `AI GOVERNANCE`, emoji: `⚖️🧭`,
    accent: `#7c4de0`, dark: `#4a2e6b`,
    blurb: `Enterprise AI Ethical Decision-Making framework for responsible adoption.`,
    intro: `This artifact documents the Enterprise AI Ethical Decision-Making (EAED) Framework developed during Week 5 of the Generative AI course. Created from the perspective of the Chief Technology Officer of NovaTech Solutions, the framework provides a practical process for making ethical and strategic AI decisions. It transforms ethical principles into operational governance through decision rules, approval criteria, escalation paths, and governance checkpoints.`,
    objective: `Design a repeatable enterprise framework that helps executive leaders balance innovation, business value, ethics, governance, security, and compliance when approving AI initiatives.`,
    process: `This was an individual assignment. I researched enterprise AI governance, responsible AI frameworks, and ethical decision-making. I designed the framework, validated it using multiple enterprise scenarios, refined it through several iterations, and produced a reusable executive decision model.`,
    tools: [`Generative AI`, `Enterprise AI Governance Frameworks`, `RAG Concepts`, `Enterprise Architecture Principles`, `Scholarly Research`, `APA Sources`],
    value: [
      [`Unique Value`, `This artifact demonstrates executive leadership, strategic planning, ethical decision-making, enterprise AI governance, and the ability to convert research into a practical governance framework.`],
      [`Relevance`, `It aligns with my professional goal of leading enterprise AI initiatives that deliver measurable business value while maintaining security, compliance, and stakeholder trust.`]
    ],
    audience: [
      [`Adaptations Made`, `The artifact was written for executive leaders rather than technical specialists. Technical concepts were translated into business language and supported with practical enterprise scenarios.`],
      [`Relevance`, `These adaptations make the framework relevant to technology executives, AI governance committees, and organizations adopting generative AI.`]
    ],
    reflection: [
      [`Significance`, `I selected this artifact because it best represents my leadership approach to enterprise AI. It demonstrates my ability to develop a practical governance framework instead of simply analyzing AI concepts.`],
      [`Lessons Learned`, `This assignment strengthened my understanding of enterprise AI governance, executive decision-making, and responsible AI adoption. It also improved my ability to transform research into a reusable framework that organizations can apply across different industries.`]
    ],
    feedback: [
      [`Feedback`, `Feedback focused on making the framework operational instead of theoretical. It also emphasized clearer governance checkpoints, decision rules, and executive accountability.`],
      [`Revisions`, `I expanded the framework by adding approval criteria, escalation paths, governance checkpoints, documentation requirements, practical enterprise scenarios, and biblical stewardship principles that complement modern AI governance.`]
    ],
    references: `Floridi, L., Cowls, J., et al. (2018). AI4People: An ethical framework for a good AI society. · Jobin, A., Ienca, M., &amp; Vayena, E. (2019). The global landscape of AI ethics guidelines. · NIST. Artificial Intelligence Risk Management Framework (AI RMF 1.0). · OECD AI Principles. · European Union AI Act.`,
    // TODO: replace with the EAED case study link (currently the same document as the RAG case study).
    links: [[`📄 View Full Case Study →`, `https://docs.google.com/document/d/1ykdica8-AFqmgxHrD2Hn5f7Ycl4VicXV/edit?usp=sharing&ouid=114690808503887997417&rtpof=true&sd=true`]]
  }
];
