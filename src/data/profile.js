export const profile = {
  name: 'Shagun Kimothi',
  headline: 'Cloud & Full-Stack Developer',
  location: 'Dehradun, India',
  email: 'shagunkimothi@gmail.com',
  phone: '+91 86504 46858',
  github: 'https://github.com/shagunkimothi',
  linkedin: 'https://www.linkedin.com/in/shagun-kimothi-490b7b329/',
  credly: 'https://www.credly.com/users/shagun-kimothi',
  resume: '/shagun_kimothi_resumefinal%20(2).pdf'
}

export const skills = {
  'Languages': ['C++', 'Python', 'JavaScript', 'Java', 'SQL'],
  'Cloud & AWS': ['EC2', 'S3', 'Lambda', 'IAM', 'API Gateway', 'CloudWatch', 'SNS', 'SQS', 'DynamoDB', 'Cognito', 'Rekognition', 'Bedrock'],
  'Frontend & Backend': ['React', 'HTML', 'CSS', 'Tailwind CSS', 'FastAPI', 'Flask', 'REST APIs', 'Axios', 'JWT', 'OAuth 2.0'],
  'DevOps & Infrastructure': ['Docker', 'Docker Compose', 'Jenkins', 'Git', 'GitHub Actions', 'Terraform', 'CI/CD'],
  'Data & AI': ['PostgreSQL', 'SQLAlchemy', 'Gemini', 'RAG', 'Embeddings'],
  'Core CS': ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'SDLC']
}

export const experience = [
  {
    company: 'Pheme Software Pvt. Ltd. — IBM Platinum Business Partner',
    role: 'Remote Mentoring Intern · Cloud-Based Log Aggregation & Alerting System',
    date: 'Jun 2026 — Aug 2026',
    points: [
      'Worked with AWS CloudWatch-based log ingestion and monitoring workflows.',
      'Contributed to log normalization, validation, and deduplication.',
      'Verified structured incident persistence in PostgreSQL and SNS notification delivery.',
      'Worked with IAM policies and cloud infrastructure configuration.'
    ],
    stack: 'AWS CloudWatch · IAM · SNS · PostgreSQL · Python'
  },
  {
    company: 'TechFuzeX Private Limited',
    role: 'Frontend Developer Intern · React & UI/UX',
    date: 'Jul 2026 — Sep 2026',
    points: [
      'Developed responsive, mobile-first interfaces using React.',
      'Translated design concepts into functional and reusable UI components.',
      'Worked on usability and visual consistency across frontend pages.'
    ],
    stack: 'React · JavaScript · HTML · CSS · Tailwind CSS'
  },
  {
    company: 'Mount Technics Consultancy',
    role: 'React Developer Intern',
    date: 'Jun 2025 — Jul 2025',
    points: [
      'Developed 15+ reusable React and Tailwind CSS components.',
      'Integrated REST APIs using Axios.',
      'Contributed to frontend responsiveness and performance improvements.'
    ],
    stack: 'React · JavaScript · Tailwind CSS · Axios · REST APIs'
  }
]

export const projects = [
  {
    number: '01',
    slug: 'serverless-image-platform',
    name: 'Serverless Image Optimization & Analysis',
    type: 'CLOUD · SERVERLESS · AI',
    categories: ['Cloud & AWS'],
    description: 'A serverless AWS application for authenticated image uploads, optimization, AI analysis, and metadata management.',
    objective: 'Process uploaded images asynchronously and make optimized images and analysis available in a gallery and image details views.',
    problem: 'The app needs to handle authenticated uploads and image processing through separate API and event-driven paths while persisting searchable image metadata.',
    solution: 'A React frontend uses Cognito and API Gateway to request presigned S3 upload URLs. S3 events flow through SQS to a processor Lambda, which optimizes images with Pillow, calls Rekognition and Bedrock, and stores results in DynamoDB.',
    features: ['Cognito authentication and API Gateway HTTP API with JWT authorization', 'Presigned S3 uploads and asynchronous S3 → SQS → Lambda processing, with a dead-letter queue', 'Pillow image resizing and compression with WebP/JPEG/PNG output support where implemented', 'Amazon Rekognition labels and Amazon Bedrock Nova 2 Lite image descriptions', 'DynamoDB metadata, gallery and detail views, CloudWatch logs, Terraform, and GitHub Actions using OIDC'],
    stack: ['React', 'Vite', 'Python', 'Pillow', 'AWS Lambda', 'S3', 'SQS', 'DynamoDB', 'Cognito', 'API Gateway', 'Rekognition', 'Bedrock', 'Terraform', 'GitHub Actions'],
    github: 'https://github.com/shagunkimothi/eventdriven-imageapp',
    readme: 'https://github.com/shagunkimothi/eventdriven-imageapp#readme',
    architecture: ['React frontend', 'Cognito', 'API Gateway', 'Presign Lambda', 'S3 source bucket', 'SQS + DLQ', 'Processor Lambda + Pillow', 'S3 optimized bucket', 'Rekognition + Bedrock', 'DynamoDB'],
    implementation: 'The README documents separate presign, processor, and images API Lambda handlers; raw and optimized S3 storage; SQS buffering and a dead-letter queue; DynamoDB persistence; and Terraform-managed AWS infrastructure. GitHub Actions builds the frontend, validates Python and Terraform, and deploys using GitHub OIDC.',
    workflow: ['Sign in through Cognito', 'Request an upload URL through the protected API', 'Upload directly to the source S3 bucket', 'S3 sends the object event to SQS', 'The processor Lambda optimizes and analyzes the image', 'Store the optimized image and metadata, then display through the gallery API'],
    setup: ['Frontend: enter frontend/, run npm install, then npm run dev.', 'Infrastructure: enter backend/terraform/, then follow the README steps for terraform init, validate, plan, and apply.'],
    screenshots: [
      { src: 'https://raw.githubusercontent.com/shagunkimothi/eventdriven-imageapp/d569b44c015099578f951cd63faef9e04f90dcb3/assets/dashboard.png', alt: 'Serverless image application dashboard' },
      { src: 'https://raw.githubusercontent.com/shagunkimothi/eventdriven-imageapp/d569b44c015099578f951cd63faef9e04f90dcb3/assets/details-ai-analysis.png', alt: 'Image analysis details from the serverless image application' }
    ],
    challenges: 'The documented implementation separates authenticated upload URL creation, asynchronous image processing, and metadata retrieval. It also uses GitHub OIDC rather than long-lived AWS access keys for the deployment workflow.'
  },
  {
    number: '02',
    slug: 'daily-code',
    name: 'Daily Code — Developer Learning Platform',
    type: 'FULL-STACK · RAG · AI',
    categories: ['Full Stack', 'AI & RAG'],
    description: 'A developer learning platform for daily code snippets, a personal library, semantic search, and RAG-grounded questions.',
    objective: 'Combine daily programming learning with a searchable, personal snippet library and personalized learning activity.',
    problem: 'Code snippets and learning activity are more useful when learners can organize, search, revisit, and ask questions about authorized content.',
    solution: 'A React/Vite frontend calls a FastAPI backend that applies authentication and visibility rules, persists data in PostgreSQL, and uses pgvector-based semantic retrieval for search and RAG.',
    features: ['Daily public snippet, browsing, filters, personal library, favorites, and JSON/CSV/TXT bulk import', 'Keyword and semantic search using BAAI/bge-small-en-v1.5 embeddings and PostgreSQL/pgvector', 'RAG answers from authorized snippets with Gemini and displayed source snippets/similarity scores', 'JWT and Google OAuth authentication, guest access, and public/private snippet visibility', 'Learning dashboard, activity heatmap, analytics, topic preferences, and rule-based recommendations'],
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'React Router', 'Axios', 'Python 3.11', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'pgvector', 'Sentence Transformers', 'BAAI/bge-small-en-v1.5', 'Gemini', 'Docker Compose'],
    github: 'https://github.com/shagunkimothi/daily-code-snippet',
    readme: 'https://github.com/shagunkimothi/daily-code-snippet#readme',
    architecture: ['React pages + contexts', 'Axios API services', 'FastAPI routes + access rules', 'Sentence Transformers embeddings', 'PostgreSQL + pgvector', 'Authorized snippet retrieval', 'Gemini response + sources'],
    implementation: 'The active client is frontend-react/; the earlier vanilla frontend is archived. FastAPI and SQLAlchemy implement API and persistence. Semantic retrieval uses normalized 384-dimensional BAAI/bge-small-en-v1.5 embeddings with pgvector cosine similarity. RAG passes only authorized retrieved snippets to Gemini; the README explicitly says retrieval is implemented directly rather than with LangChain.',
    workflow: ['A learner searches by keyword or meaning, or asks a library question', 'The backend creates a BGE embedding for semantic retrieval', 'PostgreSQL/pgvector ranks snippets within the user’s access scope', 'For RAG, authorized matches are assembled as structured context', 'Gemini returns an answer with source snippets when context is found'],
    setup: ['Configure backend/.env with local database and required authentication settings; configure a Gemini API key for AI features.', 'Start the backend and database using the native or Docker Compose instructions in the README.', 'Enter frontend-react/, run npm ci, then npm run dev.'],
    screenshots: [
      { src: 'https://raw.githubusercontent.com/shagunkimothi/daily-code-snippet/c31e29e4963841d5d9f342cc8258ada21b56b781/assests/daily-code-home.png', alt: 'Daily Code learning home screen' },
      { src: 'https://raw.githubusercontent.com/shagunkimothi/daily-code-snippet/c31e29e4963841d5d9f342cc8258ada21b56b781/assests/ask-library-rag.png', alt: 'Daily Code Ask Library RAG response' }
    ],
    challenges: 'A key design requirement documented in the README is preserving authorization during retrieval: guests see public snippets, while signed-in users can also retrieve their own private snippets. Empty retrieval returns an explicit no-context response instead of asking the model to invent sources.'
  },
  {
    number: '03',
    slug: 'jenkins-cicd',
    name: 'CI/CD Demo App',
    type: 'DEVOPS · AUTOMATION',
    categories: ['DevOps'],
    description: 'A minimal Flask application packaged with Docker and a Jenkins pipeline that builds and pushes a Docker image.',
    objective: 'Demonstrate the basic application container build and Jenkins-based image publishing workflow.',
    problem: 'The project documents how a simple Flask app can be built into a Docker image and published through explicit Jenkins stages.',
    solution: 'A small Flask route is packaged with a Dockerfile. Docker Compose starts Jenkins, and the declarative Jenkinsfile checks out the repository, builds the image, logs in to Docker Hub using Jenkins credentials, and pushes it.',
    features: ['Minimal Flask endpoint at / returning a greeting', 'Python 3.10-slim Docker image', 'Docker Compose Jenkins service with persistent Jenkins volume', 'Declarative Jenkins stages for source checkout, image build, Docker Hub login, and image push', 'README setup steps and Jenkins screenshots'],
    stack: ['Python', 'Flask', 'Docker', 'Docker Compose', 'Jenkins', 'Docker Hub'],
    github: 'https://github.com/shagunkimothi/my-app',
    readme: 'https://github.com/shagunkimothi/my-app#readme',
    architecture: ['GitHub repository', 'Jenkins pipeline', 'Docker image build', 'Docker Hub registry'],
    implementation: 'The repository contains app.py, a python:3.10-slim Dockerfile, docker-compose.yml for Jenkins, and a declarative Jenkinsfile. The pipeline uses a Jenkins credential with ID dockerhub-token; the README instructs users to update the image name, Git source, and credentials for their environment.',
    workflow: ['Start Jenkins with docker-compose up -d', 'Configure a Jenkins pipeline job for the repository Jenkinsfile', 'Clone the source repository', 'Build the Docker image', 'Authenticate to Docker Hub with a Jenkins credential', 'Push the image to Docker Hub'],
    setup: ['Follow the README to run docker-compose up -d and complete Jenkins initial setup.', 'Create a pipeline job using Jenkinsfile; configure the documented Docker Hub credential and image settings before running it.', 'For a local app run, use docker build -t myapp:latest . then docker run -p 80:80 myapp:latest.'],
    screenshots: [
      { src: 'https://raw.githubusercontent.com/shagunkimothi/my-app/88fd9e58f1760a01033f38f99aa938484f6c453d/1.png', alt: 'Jenkins setup screenshot from CI/CD Demo App' },
      { src: 'https://raw.githubusercontent.com/shagunkimothi/my-app/88fd9e58f1760a01033f38f99aa938484f6c453d/4.png', alt: 'Jenkins dashboard screenshot from CI/CD Demo App' }
    ],
    challenges: 'The README calls out that IMAGE_NAME, the Git source URL, and the Docker Hub credentials must be configured for the user’s environment. It also warns that mounting the Docker socket into Jenkins should be handled carefully.'
  }
]

export const certifications = [
  'AWS Academy Graduate — Cloud Foundations',
  'AWS Academy Graduate — Cloud Architecting',
  'AWS Academy Graduate — Cloud Operations',
  'AWS Educate — Introduction to Generative AI'
]

export const achievements = [
  { title: 'GirlScript Summer of Code 2025', subtitle: 'Open Source Contributor', note: 'Global Rank #327 · 68 points' },
  { title: 'IEEE Computational Intelligence Society', subtitle: 'Associate Editorial Head', note: '2025–2026' }
]
