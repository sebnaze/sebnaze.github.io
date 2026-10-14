import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  /*CalendarIcon,
  SparklesIcon,*/
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
/*import InstagramIcon from '../components/Icon/InstagramIcon';*/
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import anais from '../images/colleagues/anais_small.jpg';
import luca from '../images/colleagues/luca_cocchi_qimr_small.jpg';
/*import lilly from '../images/colleagues/lilly.jpg';
import OrcidIcon from '../components/Icon/OrcidIcon';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';*/
import montreal from '../images/montreal_wide_darker.jpg';
/*import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';*/
import bica from '../images/portfolio/bica.png';
import brain_thumbnail from '../images/portfolio/brain_thumbnail.png';
import concussion from '../images/portfolio/concussion.jpg';
import cross_freq from '../images/portfolio/cross_freq_coupling.png';
import ocd_modeling from '../images/portfolio/ctsc_ocd_simplified.jpg';
import deeplearning from '../images/portfolio/deeplearning.jpg';
/*import featureseizure from '../images/portfolio/features_seizures.png';*/
import feature_importance from '../images/portfolio/feature_importance.jpg';
import harmonics from '../images/portfolio/harmonics_only.jpg';
import ibex from '../images/portfolio/ibex.png';
import neurofilament from '../images/portfolio/neurofilament.webp';
import iconip from '../images/portfolio/ptsd_hebbian.jpg';
import review from '../images/portfolio/review_seizure_modeling.jpg';
/*import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import plosCB from '../images/portfolio/plosCB.png';*/
import seizure_params from '../images/portfolio/seizure_parameter_space.jpg';
import tms_ocd from '../images/portfolio/tms_frontal.jpg';
/*import zion from '../images/zion_fx_sq.jpeg';*/
import profilepic from '../images/Profile_Lyon_sm.jpg';
import woodwave from '../images/woodwave_super.jpg';
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
  description:
    'Computational Neuroscientist & AI Engineer modeling brain-behavior associations in psychiatric disorders and reverse-engineering Neuro-AI foundation models',
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

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: montreal,
  name: `Sébastien Naze`,
  description: (
    <>
      <h2 className="sm:prose-4xl lg:prose-6xl prose-2xl text-stone-200">
        <strong className="flex flex-wrap items-center justify-center gap-x-2 text-stone-100 sm:gap-x-4">
          <span>Computational Neuroscientist</span>
          <span className="hidden sm:inline">&</span>
          <span>AI Engineer</span>
        </strong>
      </h2>
      <p className="prose-base text-stone-200 sm:prose-base lg:prose-lg">
        Modeling brain-behavior associations in psychiatric disorders and decoding the internals of Neuro-AI foundation
        models.
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
  description: (
    <>
      <p>
        I spent the past 15 years reverse-engineering neural circuits underlying psychiatric and neurological disorders,
        from epilepsy to Huntington's disease to OCD, to help restore healthy cognitive function. I apply abstract
        theoretical frameworks to address real-world problems through data analysis, computational modeling, parameter
        inference and predictive evaluations. My work directly contributed to novel clinical interventions, such as a
        trial testing ultrasonic brain stimulation, and shaped new experimental hypotheses.
      </p>
      <p>
        Recently, I have been training AI models to solve complex neuroscientific tasks, dissecting their internal
        representations to uncover the mechanisms underlying their outputs, and interpreting their reasoning.
      </p>
      <p>In my spare time, I enjoy riding bicycles and walking on long or high slacklines.</p>
    </>
  ),
  aboutItems: [
    {label: 'Locations', text: 'United States, Australia, France', Icon: MapIcon},
    {label: 'Citizenship', text: 'France (Citizen), USA (Green card)', Icon: FlagIcon},
    /* {label: 'Professional interests', text: 'Neuroscience & AI', Icon: SparklesIcon}, */
    {label: 'Employment', text: 'QIMR Berghofer. Past: IBM Research', Icon: BuildingOffice2Icon},
    {label: 'PhD', text: 'Aix-Marseille University, 2015', Icon: AcademicCapIcon},
    /*{label: 'MSc', text: 'Information Science, Vrije Universiteit, Amsterdam, Netherlands, 2011', Icon: AcademicCapIcon},
    {label: 'BSc', text: 'Software Engineering, Heriot-Watt University, Edinburgh, UK, 2009', Icon: AcademicCapIcon},*/
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
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
    name: 'Machine Learning',
    skills: [
      {
        name: 'PyTorch',
        level: 8,
      },
      {
        name: 'SciPy',
        level: 9,
      },
      {
        name: 'DASK',
        level: 7,
      },
      {
        name: 'JAX',
        level: 6.5,
      },
    ],
  },
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
    name: 'Natural Languages',
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
    title: 'OCD Modeling',
    year: 2025,
    description: 'Modeling causal interventions in obsessive-compulsive disorder.',
    url: 'https://www.nature.com/articles/s41467-025-62190-2',
    image: ocd_modeling,
  },
  {
    title: 'TMS Clinical Trial',
    year: 2023,
    description: 'Probing the effect of transcranial magnetic brain stimulation in obsessive-compulsive disorder.',
    url: 'https://www.nature.com/articles/s44220-023-00094-0',
    image: tms_ocd,
  },
  {
    title: 'Fronto-striatal imbalance in OCD',
    year: 2023,
    description: 'Neuroimaging and dynamic causal modeling in obsessive-compulsive disorder.',
    url: 'https://academic.oup.com/brain/article-abstract/146/4/1322/6830574',
    image: brain_thumbnail,
  },
  {
    title: 'Connectome Eigenmodes: Neurofilament',
    year: 2022,
    description: 'Applying connectome eigenmodes to predict a blood biomarker.',
    url: 'https://www.nature.com/articles/s43856-021-00065-5',
    image: neurofilament,
  },
  {
    title: 'Connectome Harmonics',
    year: 2021,
    description: 'Sensitivity analysis of the connectome harmoics framework.',
    url: 'https://www.sciencedirect.com/science/article/pii/S1053811920308508',
    image: harmonics,
  },
  {
    title: 'Seizure classification',
    year: 2021,
    description: 'Features importance in seizure classification using scalp EEG reduced to single timeseries.',
    url: 'https://www.medrxiv.org/content/medrxiv/early/2021/07/31/2021.07.28.21261310.full.pdf',
    image: feature_importance,
  },
  {
    title: 'Connectome Eigenmodes: Concussion',
    year: 2020,
    description: 'Applying connectome eigenmodes to post-concussion/traumatic brain injury.',
    url: 'https://ieeexplore.ieee.org/abstract/document/9044786',
    image: concussion,
  },
  {
    title: 'Functional dynamics of CSTC systems in learning',
    year: 2020,
    description:
      'Modeling of cortico-striato-thalamo-cortical (CSTC) dynamics in a learning task: preliminary results.',
    url: 'https://www.biorxiv.org/content/10.1101/2020.07.20.211425v1',
    image: ibex,
  },
  {
    title: 'Deep learning applied to TMS Evoked Potentials',
    year: 2019,
    description: 'Classification of TMS evoked potentials using ERP time signatures and SVM versus deep learning.',
    url: 'https://ieeexplore.ieee.org/abstract/document/8857583',
    image: deeplearning,
  },
  {
    title: "Huntington's disease",
    year: 2018,
    description: 'Cortico-striatal cross-frequency coupling and gamma genesis disruptions in Huntington’s disease.',
    url: 'https://www.eneuro.org/content/5/6/ENEURO.0210-18.2018.abstract',
    image: cross_freq,
  },
  {
    title: 'Seizure Dynamics',
    year: 2015,
    description:
      'Top-down computational modeling of neural dynamics revealing the trajectory from status epilecticus to spontaneous seizures.',
    url: 'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004209',
    image: seizure_params,
  },
  {
    title: 'Modern Concepts in Seizure Modeling',
    year: 2014,
    description: 'Co-authored review on state-of-art seizure models.',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/B9780124186934000066?via%3Dihub',
    image: review,
  },
  {
    title: 'Hebbian Learning in PTSD',
    year: 2012,
    description: 'A Computational Model for Development of Post-Traumatic Stress Disorders by Hebbian Learning',
    url: 'https://link.springer.com/chapter/10.1007/978-3-642-34481-7_18',
    image: iconip,
  },
  {
    title: 'Agent model of PTSD',
    year: 2011,
    description: 'A computational agent model for post-traumatic stress disorders',
    url: 'http://www.few.vu.nl/~wai/Papers/BICA11PTSD.pdf',
    image: bica,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2015',
    location: 'Aix-Marseille Université, Provence, France',
    title: 'PhD in Computational Neuroscience',
    content: (
      <>
        <p>
          Thesis "Multiscale Modeling of Epileptic Seizure Dynamics" under the supervision of Viktor Jirsa (theoretical
          physics) and Christophe Bernard (neurophysiology).
        </p>
        <p>Expertise: dynamical systems theory, high performance computing, neuroscience. </p>
      </>
    ),
  },
  {
    date: '2011',
    location: 'Vrije Universiteit, Amsterdam, The Netherlands',
    title: 'MSc in Information Science',
    content: (
      <>
        <p>Master degree with specialization in data engineering, business intelligence and machine learning.</p>
        <p>
          Master thesis "Agent modeling of post-traumatic stress disorders" under supervision of Professor Jan Treur.
        </p>
      </>
    ),
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
    title: 'Senior Research Scientist',
    content: (
      <>
        <p>
          Data engineering, analysis of multimodal dataset, multiscale modeling, and funding acquisition for
          neurostimulation in obsessive-compulsive disorders.
        </p>
        <p>Development of Neuro-AI pipeline for clinical prediction and mechanistic interpretability.</p>
      </>
    ),
  },
  {
    date: '2019 - 2021',
    location: 'IBM Research, Melbourne, Australia',
    title: 'Research Scientist',
    content: (
      <>
        <p>
          Design and implementation of an interface between brain modeling and machine learning algorithms in Python and
          C++.
        </p>
        <p>
          Parameter optimization using evolutionary algorithms. Integration of libraries into service architecture for
          cloud computing.
        </p>
        <p>Coordinated work accross four labs operating from multiple countries.</p>
      </>
    ),
  },
  {
    date: '2016 - 2019',
    location: 'IBM Research, New York, United States',
    title: 'Post-doctoral Researcher',
    content: (
      <>
        <p>
          Delivered IBM Solutions in brain modeling to clients (CHDI, Pfizer) investigating Huntington’s disease
          phenotypes in-silico.{' '}
        </p>
        <p>Delivered quarterly reports with client presentations and ThinkLab demonstrations at client’s events. </p>
        <p>Developed software patches for IBM Neural Graph Simulator.</p>
        <p>
          Co-lead IBM team on joint collaborative research projects with Stanford University Department of Medical
          Neuroscience and University Health Network, Toronto.{' '}
        </p>
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
    {
      name: 'Luca Cocchi',
      title: 'Professor, QIMR Berghofer',
      text: "Sebastien contributed broadly to our clinical program. His commitment to open science and data quality has shaped our lab's practice.",
      image: luca,
    },
    {
      name: 'Anaïs Llorens',
      title: 'Group Leader, Sainte-Anne Hospital',
      text: "I've known Seb for 15+ years. He's a great colleague: brilliant, witty, and full of positive energy.",
      image: anais,
    },
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
      text: 'East Village, Manhattan, New York, USA',
      href: 'https://maps.app.goo.gl/1AsowejdWwEHirjJ9',
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
  {label: 'Google Scholar', Icon: GoogleScholarIcon, href: 'https://scholar.google.com/citations?user=ETwKspoAAAAJ'},
  /*{label: 'ORCID', Icon: OrcidIcon, href: 'https://orcid.org/0000-0003-0367-402X'},*/
];
