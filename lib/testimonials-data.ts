// testimonials.data.ts
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Yooran is an exceptional student, a fast learner who quickly grasps complex concepts and applies them with ease. Her work exemplifies both her technical abilities and creativity, showcasing a keen eye for detail and innovative thinking. She consistently goes above and beyond to support others, fostering a collaborative and positive learning environment. I am certain she will excel in any future endeavors she pursues in the field of web development.',
    author: 'Richard Te',
    role: 'Instructor, BCIT',
  },
  {
    quote:
      "Yooran has been an exceptional student across all the terms I have taught her in the New Media and Web Development program here at BCIT. As a primarily coding and portfolio instructor, I have consistently watched her go above and beyond the requirements in building strong, scalable projects. Beyond technical skills, Yooran’s inquisitive attitude is a key component to her success. Often, as I worked one-on-one with her on her code, she would ask, 'Why though?' to new concepts she was applying and new challenges she was overcoming. This inquisitive nature and her commitment to understanding what she builds has led her to take on larger projects, teach herself new concepts, and advance her learning in our program. I have no doubt Yooran will be successful in any team she joins.",
    author: 'Airrick Dunfield',
    role: 'Instructor, BCIT',
  },
  {
    quote:
      "Although I am a UX/UI designer, I was able to work with Yooran as a developer for one group project, and I was quite nervous because I wasn't sure where or how to start. I looked to Yooran as my senior developer, and she did a great job explaining how I should approach the code as a developer. She helped me gain a new skill and broaden my perspective as a designer. Now I am more cautious about how I design, always considering if I were to code this: would it be in scope, would it make sense from a coding perspective, and how difficult would it be? I really appreciate her taking the time to patiently explain the code and what I should do or how I should think about it.",
    author: 'Min Myat Thu',
    role: 'UX/UI Designer, SAP',
  },
  {
    quote:
      "During my time at BCIT, I had the pleasure of studying alongside Yooran. It was evident that Yooran has a genuine enthusiasm for web development and demonstrates determined dedication in everything she pursues. Yooran exhibits proficiency in front-end development using JavaScript and React, and she also displays adeptness in back-end development with Node.js. Furthermore, Yooran's aptitude for quickly learning new technologies, combined with her collaborative approach, greatly impressed me. Her empathetic and composed nature fosters a positive working environment, and her work consistently delivers exceptional results.",
    author: 'Patricia Tami Sakita Chung',
    role: 'Front End Developer',
  },
  {
    quote:
      'Yooran is not only highly skilled in development but also a great mood-maker who brightens up the atmosphere around her. She is always considerate and has a kind nature that prioritizes the well-being of others. In the team project, I worked on with her, I was able to learn detailed aspects of development, and we could freely exchange ideas and collaborate effectively. Moreover, she consistently shows a willingness to upgrade her development skills by adopting and mastering new technologies. Yooran is an excellent developer who finds solutions by exploring various examples when she has questions.',
    author: 'Eunsong Choi',
    role: 'Graphic Designer',
  },
];
