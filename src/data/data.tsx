import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
/*import InstagramIcon from '../components/Icon/InstagramIcon';*/
import LinkedInIcon from '../components/Icon/LinkedInIcon';
/*import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';*/
import plosCB from '../images/portfolio/plosCB.png';
import review from '../images/portfolio/review.jpg';
import harmonics from '../images/portfolio/harmonics.jpg';
import concussion from '../images/portfolio/concussion.jpg';
import neurofilament from '../images/portfolio/neurofilament.webp';
import deeplearning from '../images/portfolio/deeplearning.jpg';
import featureseizure from '../images/portfolio/features_seizures.png';
/*import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';*/
import bica from '../images/portfolio/bica.png';
import iconip from '../images/portfolio/iconip.png';
import ibex from '../images/portfolio/ibex.png';
/*import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';*/
import montreal from '../images/montreal_wide_darker.jpg';
import woodwave from '../images/woodwave_super.jpg';
/*import zion from '../images/zion_fx_sq.jpeg';*/
import profilepic from '../images/profile_adj.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sebastien Naze',
  description: "Personal webpage",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: montreal,
  name: `Sébastien Naze`,
  description: (
    <>
      <h2 className="prose-2xl text-stone-200 sm:prose-4xl lg:prose-6xl">
        <strong className="text-stone-100">Computational Neuroscientist at the Queensland Institute of Medical Research</strong>
      </h2>
      <p className="prose-base text-stone-200 sm:prose-base lg:prose-lg">
        Modeling brain-behavior associations in obsessive-compulsive disorder
      </p>
    </>
  ),
  actions: [
    {
      href: '/Resume_SNaze.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Computational neuroscience & machine learning specialist. Aside from working, I ride bicycles and walk slacklines.`,
  aboutItems: [
    {label: 'Location', text: 'Brisbane, Australia', Icon: MapIcon},
    {label: 'Age', text: '34', Icon: CalendarIcon},
    {label: 'Citizenship', text: 'French', Icon: FlagIcon},
    {label: 'Interests', text: 'Brain, Mind & Computers', Icon: SparklesIcon},
    {label: 'PhD', text: '2015', Icon: AcademicCapIcon},
    {label: 'Employments', text: 'IBM, QIMR Berghofer', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Computing',
    skills: [
      {
        name: 'High Performance Clusters',
        level: 9,
      },
      {
        name: 'Parallel & Distributed Computing',
        level: 8.5,
      },
      {
        name: 'Databases',
        level: 6.5,
      },
      {
        name: 'Cloud',
        level: 6,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'Graph Signal Processing',
        level: 9,
      },
      {
        name: 'Statistical Learning',
        level: 8.5,
      },
      {
        name: 'Fourier & Wavelets',
        level: 8,
      },
      {
        name: 'Neuroimaging',
        level: 7.5,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C/C++',
        level: 6,
      },
      {
        name: 'Java',
        level: 5,
      },
    ],
  },
  {
    name: 'Modeling',
    skills: [
      {
        name: 'Dynamical systems',
        level: 9,
      },
      {
        name: 'Bayesian Optimization',
        level: 8,
      },
      {
        name: 'Symbolic mathematics',
        level: 7,
      },
      
    ],
  },
  {
    name: 'Languages',
    skills: [
      {
        name: 'French',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Spanish',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Seizure Dynamics',
    description: 'Top-down computational modeling of seizure dynamics using coupled spiking and bursting neural network derived from the Epileptor model.',
    url: 'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004209',
    image: plosCB,
  },
  {
    title: 'Review: Modern Concepts in Seizure Modeling',
    description: 'Co-authored review on state-of-art seizure models.',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/B9780124186934000066?via%3Dihub',
    image: review,
  },
  {
    title: 'Connectome Harmonics',
    description: 'Sensitivity analysis of the connectome harmoics framework.',
    url: 'https://www.sciencedirect.com/science/article/pii/S1053811920308508',
    image: harmonics,
  },
  {
    title: 'Connectome Eigenmodes: Concussion',
    description: 'Applying the connectome eigenmodes framework to post-concussion/traumatic brain injury data from University Health Network, Toronto.',
    url: 'https://ieeexplore.ieee.org/abstract/document/9044786',
    image: concussion,
  },
  {
    title: 'Connectome Eigenmodes: Neurofilament',
    description: 'Use connectome eigenmodes framework to predict a blood biomarker.',
    url: 'https://www.nature.com/articles/s43856-021-00065-5',
    image: neurofilament,
  },
  {
    title: 'Deep learning applied to TMS Evoked Potentials',
    description: 'Classification of TMS evoked potentials using ERP time signatures and SVM versus deep learning.',
    url: 'https://ieeexplore.ieee.org/abstract/document/8857583',
    image: deeplearning,
  },
  {
    title: 'Seizure classification',
    description: 'Features importance in seizure classification using scalp EEG reduced to single timeseries',
    url: 'https://www.medrxiv.org/content/medrxiv/early/2021/07/31/2021.07.28.21261310.full.pdf',
    image: featureseizure,
  },
  {
    title: "Huntington's disease",
    description: 'Cortico-striatal cross-frequency coupling and gamma genesis disruptions in Huntington’s disease mouse and computational models',
    url: 'https://www.eneuro.org/content/5/6/ENEURO.0210-18.2018.abstract',
    image: ibex,
  },
  {
    title: 'Hebbian Learning in PTSD',
    description: 'A Computational Model for Development of Post-Traumatic Stress Disorders by Hebbian Learning',
    url: 'https://link.springer.com/chapter/10.1007/978-3-642-34481-7_18',
    image: iconip,
  },
  {
    title: 'Agent model of PTSD',
    description: 'A computational agent model for post-traumatic stress disorders',
    url: 'http://www.few.vu.nl/~wai/Papers/BICA11PTSD.pdf',
    image: bica,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2015',
    location: 'Aix-Marseille Université, Provence, France',
    title: 'PhD in Computational Neuroscience',
    content: ( <>
      <p>Thesis "Multiscale Modeling of Epileptic Seizure Dynamics" under the supervision 
      of Viktor Jirsa (theoretical physics) and Christophe Bernard (neurophysiology). </p>
      <p>Expertise: dynamical systems theory, high performance computing, neuroscience. </p>
      </>)
  },
  {
    date: '2011',
    location: 'Vrije Universiteit, Amsterdam, The Netherlands',
    title: 'MSc in Information Science',
    content: <p>Master degree with specialization in data engineering, business intelligence and machine learning. 
        Master thesis "Agent modeling of post-traumatic stress disorders" under supervision of Professor Jan Treur.</p>,
  },
  {
    date: '2009',
    location: 'Heriot-Watt Universty, Edinburgh, Scotland',
    title: 'BSc in Computer Science',
    content: <p>Bachelor Degree with specialization in software engineering & databases.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2021 - Present',
    location: 'Queensland Institute of Medical Research, Brisbane, Australia',
    title: 'Senior Researcher',
    content: (
      <p>Data engineering, analysis of multimodal dataset, and multiscale modeling of neurostimulation in obsessive-compulsive disorders.</p>
    ),
  },
  {
    date: '2019 - 2021',
    location: 'IBM Research, Melbourne, Australia',
    title: 'Research Scientist',
    content: (
      <>
        <p>- Design and implementation of an interface between brain modeling and machine learning algorithms in Python and C++.</p>
        <p>- Parameter optimization using evolutionary algorithms. Integration of libraries into service architecture for cloud computing.</p>
        <p>- Coordinated work accross four labs operating from multiple countries.</p>
      </>
    ),
  },
  {
        date: '2016 - 2019',
        location: 'IBM Research, New York, United States',
        title: 'Post-doctoral Researcher',
        content: (
          <>
            <p>- Delivered IBM Solutions in brain modeling to clients (CHDI, Pfizer) investigating Huntington’s disease phenotypes in-silico. </p>
            <p>- Delivered quarterly reports with client presentations and ThinkLab demonstrations at client’s events. </p>
            <p>- Developed software patches for IBM Neural Graph Simulator.</p>
            <p>- Co-lead IBM team on joint collaborative research projects with Stanford University Department of Medical Neuroscience and University Health Network, Toronto. </p>
          </>
        ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: woodwave,
  testimonials: [
    /*{
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },*/
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Contact me by email or drop a message here.',
  items: [
    {
      type: ContactType.Email,
      text: 'sebastien.naze@gmail.com',
      href: 'mailto:sebastien.naze@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'The Gap, Brisbane, Australia',
      href: 'https://www.google.com/maps/@-27.4482413,152.9328704,6315m/data=!3m1!1e3!5m1!1e4?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'sebnaze',
      href: 'https://github.com/sebnaze',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sebnaze'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'http://www.linkedin.com/in/sébastien-naze-228b15211'},
];
