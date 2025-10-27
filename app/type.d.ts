declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

interface Product {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
}