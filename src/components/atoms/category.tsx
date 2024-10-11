import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryProps from "@/utils/interface/category";

const Category = ({ categories }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <Tabs defaultValue={selectedCategory.value} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        {categories.map((category) => (
          <TabsTrigger
            key={category.value}
            value={category.value}
            onClick={() => setSelectedCategory(category)}
          >
            {category.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((category) => (
        <TabsContent key={category.value} value={category.value}>
          <Card>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-xl font-bold">Price: {category.price}</p>
              </div>
              <div>
                <p className="font-semibold">Benefits:</p>
                <ul className="list-disc ml-5">
                  {category.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Select {category.title}</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Category;
