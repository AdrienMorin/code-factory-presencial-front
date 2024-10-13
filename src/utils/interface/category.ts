interface CategoryProps {
  categories: {
    value: string;
    title: string;
    description: string;
    price: string;
    benefits: string[];
  }[];
  setSelectedCategory: (category: {
    value: string;
    title: string;
    description: string;
    price: string;
    benefits: string[];
  }) => void;
}

export default CategoryProps;
