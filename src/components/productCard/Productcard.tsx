import React from 'react';
import { Heart, Eye, Trash, ShoppingCart } from 'lucide-react';

interface ColorOption {
  color: string;
  label: string;
}

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  orders: number;
  discount?: number;
  isNew?: boolean;
  colorOptions?: ColorOption[];
  showTrash?: boolean;
  showEyeOnly?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  rating,
  orders,
  discount,
  isNew,
  colorOptions,
  showTrash,
  showEyeOnly,
}) => {
  return (
    <div className="relative w-64 bg-white shadow-lg rounded-lg overflow-hidden group">
      {/* Image */}
      <div className="relative h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        
        {/* Discount or New tag */}
        {(discount || isNew) && (
          <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold text-white rounded ${isNew ? 'bg-green-500' : 'bg-red-500'}`}>
            {isNew ? 'NEW' : `-${discount}%`}
          </div>
        )}
        
        {/* Icons */}
        <div className="absolute top-2 left-2 flex flex-col space-y-2">
          {showTrash ? (
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <Trash size={16} />
            </button>
          ) : (
            <>
              {!showEyeOnly && (
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart size={16} />
                </button>
              )}
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <Eye size={16} />
              </button>
            </>
          )}
        </div>
        
        {/* Add to Cart button */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xl font-bold">${price.toFixed(2)}</span>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">⭐</span>
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {orders} orders
        </div>
        
        {/* Color options */}
        {colorOptions && (
          <div className="mt-2 flex space-x-2">
            {colorOptions.map((option, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full cursor-pointer"
                style={{ backgroundColor: option.color }}
                title={option.label}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

