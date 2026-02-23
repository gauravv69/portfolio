export type WorkItem = {
    id: number
    title: string
    image: string
    category: string
}

export const works: WorkItem[] = [
    {
        id: 1,
        title: "Flyer Design 1",
        image: "/flyer1.jpg",
        category: "Flyers & Posters"
    },
    {
        id: 2,
        title: "Flyer Design 2",
        image: "/flyer2.jpg",
        category: "Flyers & Posters"
    },
    {
        id: 3,
        title: "Event Poster X",
        image: "/flyer1.jpg", // Using existing as mock
        category: "Flyers & Posters"
    },
    {
        id: 4,
        title: "Club Night Promo",
        image: "/flyer2.jpg", // Using existing as mock
        category: "Flyers & Posters"
    }
]

export const categories = [
    "Promotional Creatives",
    "Branding & Visual Identity Posts",
    "Information / Educational Posts",
    "Engagement driven creatives",
    "Flyers & Posters",
    "Ecommerce Product shoot",
    "Lifestyle Product Shoot",
    "Conceptual Shoots",
    "Content Campaigns",
    "Motion Creatives",
    "Cinematography",
]