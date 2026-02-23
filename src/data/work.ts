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
        category: "Flyers"
    },
    {
        id: 2,
        title: "Flyer Design 2",
        image: "/flyer2.jpg",
        category: "Flyers"
    },
    {
        id: 3,
        title: "Event Poster X",
        image: "/flyer1.jpg", // Using existing as mock
        category: "Flyers"
    },
    {
        id: 4,
        title: "Club Night Promo",
        image: "/flyer2.jpg", // Using existing as mock
        category: "Flyers"
    }
]

export const categories = ["Flyers", "Posters", "3D Art", "Branding"]