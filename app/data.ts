type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Electi.online 🗳',
    description:
      'HackCWRU - 1st place: Tool to visualize FEC donations to 2020 presidential election campaigns using MongoDB, Express, NodeJS, jQuery, Leaflet.JS',
    link: 'https://devpost.com/software/electi-online',
    video:
      'https://photos.app.goo.gl/rHsM48cgrwo845x4A',
    id: 'project1',
  },
  {
    name: 'E-i-e.io 🧑‍🌾',
    description: 'Boilermake - 1st place John Deere Challenge: Agricultural Simulator using React and JSX',
    link: 'https://devpost.com/software/e-i-e-io',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'Cleveland Women’s Orchestra 🎻',
    description: 'Assistant Principal Second Violin - Second-in-command of the second violin section',
    link: 'https://www.clevelandwomensorchestra.org/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Progressive Insurance',
    title: 'Software Engineer',
    start: 'Sep 2023',
    end: 'Present',
    link: 'https://drive.google.com/file/d/1uf1Kn4ZLS90AhtV6n57ggKPDUN1UgtXj/view?usp=sharing', 
    id: 'work1',
  },
  {
    company: 'Progressive Insurance',
    title: 'Associate Software Engineer',
    start: 'Jun 2022',
    end: 'Aug 2023',
    link: 'https://drive.google.com/file/d/1uf1Kn4ZLS90AhtV6n57ggKPDUN1UgtXj/view?usp=sharing', 
    id: 'work2',
  },
  {
    company: 'Progressive Insurance',
    title: 'Software Engineer Intern',
    start: 'May 2021',
    end: 'Aug 2021',
    link: 'https://drive.google.com/file/d/1uf1Kn4ZLS90AhtV6n57ggKPDUN1UgtXj/view?usp=sharing', 
    id: 'work3',
  },
  {
    company: 'KeyBank',
    title: 'Product Management Intern',
    start: 'May 2020',
    end: 'Jul 2020',
    link: 'https://drive.google.com/file/d/1uf1Kn4ZLS90AhtV6n57ggKPDUN1UgtXj/view?usp=sharing', 
    id: 'work4',
  },
  {
    company: 'Medical Mutual',
    title: 'Software Engineer Intern',
    start: 'May 2019',
    end: 'Aug 2019',
    link: 'https://drive.google.com/file/d/1uf1Kn4ZLS90AhtV6n57ggKPDUN1UgtXj/view?usp=sharing', 
    id: 'work5',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/emily-zhao',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/zhao-emily/',
  },
]

export const EMAIL = 'emily.zhao23@email.com'
