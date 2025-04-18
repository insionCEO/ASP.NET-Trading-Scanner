import { Destination, Experience } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Santorini',
    location: 'Greece',
    description: 'Famous for its stunning sunsets, white-washed buildings and blue domes that reflect the blue sky.',
    imageUrl: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    tags: ['Island', 'Beach', 'Romantic', 'Cultural'],
    savedCount: 15243
  },
  {
    id: '2',
    name: 'Kyoto',
    location: 'Japan',
    description: 'A city of classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses.',
    imageUrl: 'https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    tags: ['Cultural', 'Historical', 'Temples', 'Gardens'],
    savedCount: 12985
  },
  {
    id: '3',
    name: 'Bali',
    location: 'Indonesia',
    description: 'Known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
    imageUrl: 'https://images.pexels.com/photos/5007442/pexels-photo-5007442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    tags: ['Beach', 'Cultural', 'Nature', 'Spiritual'],
    savedCount: 18654
  },
  {
    id: '4',
    name: 'Machu Picchu',
    location: 'Peru',
    description: 'An Incan citadel set high in the Andes Mountains, renowned for its sophisticated dry-stone walls.',
    imageUrl: 'https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    tags: ['Historical', 'UNESCO', 'Hiking', 'Ancient'],
    savedCount: 14732
  },
  {
    id: '5',
    name: 'Marrakech',
    location: 'Morocco',
    description: 'A former imperial city known for its vibrant markets, gardens, palaces, and mosques.',
    imageUrl: 'https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    tags: ['Cultural', 'Markets', 'Historical', 'Food'],
    savedCount: 10987
  },
  {
    id: '6',
    name: 'Banff National Park',
    location: 'Canada',
    description: 'Famous for its turquoise lakes, dramatic mountain peaks and stunning landscapes.',
    imageUrl: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    tags: ['Nature', 'Hiking', 'Wildlife', 'Lakes'],
    savedCount: 11234
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Traditional Tea Ceremony',
    description: 'Experience the ancient art of Japanese tea preparation with a master.',
    location: 'Kyoto, Japan',
    imageUrl: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '2 hours',
    price: '$45',
    tags: ['Cultural', 'Traditional', 'Relaxing'],
    rating: 4.7
  },
  {
    id: '2',
    title: 'Northern Lights Safari',
    description: 'Hunt for the magical aurora borealis in the Arctic wilderness.',
    location: 'Tromsø, Norway',
    imageUrl: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '4 hours',
    price: '$120',
    tags: ['Nature', 'Adventure', 'Photography'],
    rating: 4.9
  },
  {
    id: '3',
    title: 'Balinese Cooking Class',
    description: 'Learn to prepare authentic Balinese cuisine with local ingredients.',
    location: 'Ubud, Bali',
    imageUrl: 'https://images.pexels.com/photos/5677332/pexels-photo-5677332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '3 hours',
    price: '$35',
    tags: ['Food', 'Cultural', 'Hands-on'],
    rating: 4.8
  },
  {
    id: '4',
    title: 'Desert Camel Trek',
    description: 'Journey through the Sahara on camelback and camp under the stars.',
    location: 'Merzouga, Morocco',
    imageUrl: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '2 days',
    price: '$180',
    tags: ['Adventure', 'Nature', 'Unique'],
    rating: 4.6
  }
];

export const popularSearches = [
  "Hidden beaches in Greece",
  "Best street food in Bangkok",
  "Hiking trails in New Zealand",
  "Historical sites in Rome",
  "Cherry blossom season in Japan",
  "Wildlife safaris in Tanzania",
  "Ancient temples in Cambodia",
  "Northern lights in Iceland"
];

export const aiSuggestions = [
  "Based on your interest in historical sites, you might enjoy exploring the ancient ruins of Petra, Jordan.",
  "Since you enjoyed beach destinations, consider the pristine shores of the Maldives for your next getaway.",
  "Your hiking adventures suggest you'd love the dramatic landscapes of Patagonia in Argentina and Chile.",
  "For someone interested in cultural experiences, Kyoto's temple circuit would be perfect for you."
];