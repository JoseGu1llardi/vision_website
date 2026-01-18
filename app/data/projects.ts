export interface Project {
  name: string;
  image: string;
  description: string;
  summary: string;
}

export const projects: Project[] = [
  {
    name: "Garden Design",
    image: "/gd7.jpg",
    description:
      "Custom residential garden featuring native plants and sustainable design",
    summary:
      "Transform your outdoor space with thoughtfully designed gardens that blend aesthetics with functionality and environmental consciousness.",
  },
  {
    name: "Landscape Architecture",
    image: "/gd8.jpg",
    description:
      "Modern outdoor living space with integrated seating and lighting",
    summary:
      "Comprehensive landscape solutions that create seamless transitions between indoor and outdoor living areas.",
  },
  {
    name: "Outdoor Lighting",
    image: "/gd9.jpg",
    description:
      "Professional lighting design for enhanced ambiance and security",
    summary:
      "Expert lighting installations that highlight architectural features while providing safety and extending outdoor enjoyment into the evening.",
  },
  {
    name: "Estate Landscaping",
    image: "/gd1.jpg",
    description: "Large-scale property development with mature plantings",
    summary:
      "Sophisticated estate management combining horticultural expertise with long-term landscape planning and maintenance.",
  },
  {
    name: "Commercial Projects",
    image: "/gd2.jpg",
    description:
      "Professional landscaping for business premises and public spaces",
    summary:
      "Creating welcoming environments for commercial properties that enhance brand image and employee wellbeing.",
  },
  {
    name: "Garden Maintenance",
    image: "/gd3.jpg",
    description: "Year-round garden care and seasonal maintenance programs",
    summary:
      "Regular maintenance services ensuring your landscape remains vibrant and healthy throughout all seasons.",
  },
];
