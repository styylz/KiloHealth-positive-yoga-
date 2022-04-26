import Emily from '../assets/person-images/Emily.jpg';
import Kylie from '../assets/person-images/Kylie.jpg';
import Jesica from '../assets/person-images/Jesica.jpg';

export interface Benefit {
  id: string;
  title: string;
}

export interface Person {
  id: string;
  name: string;
  age: number,
  location: string;
  rating: number,
  description: string;
  image: string;
}

export interface Question {
  id: string;
  title: string;
  description: string;
}

export interface Subscription {
  id: string,
  title: string,
  price: string,
  oldPrice?: string,
  currPrice?: string,
  description: string,
  discount: string,
}

export const benefitsData: Benefit[] = [
  {
    id: '1',
    title: 'Each program adapts to your age or fitness level',
  },
  {
    id: '2',
    title: 'Mindful way to exercise and get real results',
  },
  {
    id: '3',
    title: 'Effective and long-term lasting results',
  },
  {
    id: '4',
    title: 'Suited activities that benefit both the mind and body',
  },
  {
    id: '5',
    title: 'Low-intensity but highly-effective workouts',
  },
  {
    id: '6',
    title: 'Extra attention to muscle, joint and back health',
  },
];

export const reviewData: Person[] = [
  {
    id: '1',
    name: 'Emily',
    age: 28,
    location: 'Delaware, Nj',
    rating: 5,
    description: 'I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.',
    image: Emily as string,
  },
  {
    id: '2',
    name: 'Kylie',
    age: 40,
    location: 'Los Angeles',
    rating: 5,
    description: 'I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.',
    image: Kylie as string,
  },
  {
    id: '3',
    name: 'Jesica',
    age: 51,
    location: 'San Francisco, CA',
    rating: 5,
    description: 'I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.',
    image: Jesica as string,
  },
];

export const questionsData: Question[] = [
  {
    id: '1',
    title: 'What happens after I order?',
    description: 'After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve.',
  },
  {
    id: '2',
    title: 'Where I can access my plan?',
    description: 'Your plan will be accessible in Positive Yoga\'s web app with a special link generated after your purchase.',
  },
  {
    id: '3',
    title: 'How can I cancel my subscription?',
    description: 'You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app',
  },
  {
    id: '4',
    title: 'Why this program is paid?',
    description: 'We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! ',
  },
];

export const subscriptionData: Subscription[] = [
  {
    id: '1',
    title: '6 month plan',
    price: '9.99',
    oldPrice: '119.94',
    currPrice: '59.94',
    description: 'billed every 6 months',
    discount: 'save 50%',
  },
  {
    id: '2',
    title: '3 month plan',
    price: '14.99',
    oldPrice: '59.97',
    currPrice: '44.97',
    description: 'billed every 3 months',
    discount: '',
  },
  {
    id: '3',
    title: '1 month plan',
    price: '19.99',
    description: 'billed monthly',
    discount: '',
  },
];

export default benefitsData;
