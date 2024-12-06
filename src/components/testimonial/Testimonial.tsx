import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  CreditCard 
} from 'lucide-react';

const TestimonialCard = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Secure Payment',
      description: 'Your transactions are protected with advanced security measures.'
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'We deliver your products quickly and efficiently across the country.'
    },
    {
      icon: CreditCard,
      title: 'Easy Returns',
      description: 'Hassle-free return policy within 30 days of purchase.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white border rounded-lg p-6 text-center hover:shadow-md transition-shadow flex flex-col items-center"
          >
            <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-bold mb-3">{feature.title}</h2>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;