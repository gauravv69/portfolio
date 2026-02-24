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
    },
    { id: 5, title: "Promotional Creative 1", image: "/01.jpeg", category: "Promotional Creatives" },
    { id: 6, title: "Promotional Creative 2", image: "/02.jpeg", category: "Promotional Creatives" },
    { id: 7, title: "Promotional Creative 3", image: "/03.jpeg", category: "Promotional Creatives" },
    { id: 8, title: "Promotional Creative 4", image: "/04.jpeg", category: "Promotional Creatives" },
    { id: 9, title: "Promotional Creative 5", image: "/05.jpeg", category: "Promotional Creatives" },
    { id: 10, title: "Promotional Creative 6", image: "/06.jpeg", category: "Promotional Creatives" },
    { id: 11, title: "Promotional Creative 7", image: "/07.jpeg", category: "Promotional Creatives" },
    { id: 12, title: "Promotional Creative 8", image: "/08.jpeg", category: "Promotional Creatives" },
    { id: 13, title: "Promotional Creative 9", image: "/09.jpeg", category: "Promotional Creatives" },
    { id: 14, title: "Promotional Creative 10", image: "/10.jpeg", category: "Promotional Creatives" },
    { id: 15, title: "Promotional Creative 11", image: "/11.jpeg", category: "Promotional Creatives" },
    { id: 16, title: "Promotional Creative 12", image: "/12.jpeg", category: "Promotional Creatives" },
    { id: 17, title: "Promotional Creative 13", image: "/13.jpeg", category: "Promotional Creatives" },
    { id: 18, title: "Promotional Creative 14", image: "/14.jpeg", category: "Promotional Creatives" },
    { id: 19, title: "Promotional Creative 15", image: "/15.jpeg", category: "Promotional Creatives" },
    { id: 20, title: "Promotional Creative 16", image: "/16.jpeg", category: "Promotional Creatives" },
    { id: 21, title: "Branding Design 1", image: "/17.jpeg", category: "Branding & Visual Identity Posts" },
    { id: 22, title: "Branding Design 2", image: "/18.jpeg", category: "Branding & Visual Identity Posts" },
    { id: 23, title: "Branding Design 3", image: "/19.jpeg", category: "Branding & Visual Identity Posts" },
    { id: 24, title: "Branding Design 4", image: "/20.jpeg", category: "Branding & Visual Identity Posts" },
    { id: 25, title: "Branding Design 5", image: "/21.jpeg", category: "Branding & Visual Identity Posts" },
    { id: 26, title: "Branding Design 6", image: "/22.jpeg", category: "Branding & Visual Identity Posts" },
    { id: 27, title: "Branding Design 7", image: "/23.jpeg", category: "Branding & Visual Identity Posts" },
    { id: 28, title: "Information Post 1", image: "/24.jpeg", category: "Information / Educational Posts" },
    { id: 29, title: "Information Post 2", image: "/25.jpeg", category: "Information / Educational Posts" },
    { id: 30, title: "Information Post 3", image: "/26.jpeg", category: "Information / Educational Posts" },
    { id: 31, title: "Information Post 4", image: "/27.jpeg", category: "Information / Educational Posts" },
    { id: 32, title: "Information Post 5", image: "/28.jpeg", category: "Information / Educational Posts" },
    { id: 33, title: "Information Post 6", image: "/29.jpeg", category: "Information / Educational Posts" },
    { id: 34, title: "Information Post 7", image: "/30.jpeg", category: "Information / Educational Posts" },
    { id: 35, title: "Information Post 8", image: "/31.jpeg", category: "Information / Educational Posts" },
    { id: 36, title: "Information Post 9", image: "/32.jpeg", category: "Information / Educational Posts" },
    { id: 37, title: "Information Post 10", image: "/33.jpeg", category: "Information / Educational Posts" },
    { id: 38, title: "Information Post 11", image: "/34.jpeg", category: "Information / Educational Posts" },
    { id: 39, title: "Information Post 12", image: "/35.jpeg", category: "Information / Educational Posts" },
    { id: 40, title: "Information Post 13", image: "/36.jpeg", category: "Information / Educational Posts" },
    { id: 41, title: "Information Post 14", image: "/37.jpeg", category: "Information / Educational Posts" },
    { id: 42, title: "Engagement Post 1", image: "/38.jpeg", category: "Engagement driven creatives" },
    { id: 43, title: "Engagement Post 2", image: "/39.jpeg", category: "Engagement driven creatives" },
    { id: 44, title: "Engagement Post 3", image: "/40.jpeg", category: "Engagement driven creatives" },
    { id: 45, title: "Engagement Post 4", image: "/41.jpeg", category: "Engagement driven creatives" },
    { id: 46, title: "Engagement Post 5", image: "/42.jpeg", category: "Engagement driven creatives" },
    { id: 47, title: "Engagement Post 6", image: "/43.jpeg", category: "Engagement driven creatives" },
    { id: 48, title: "Engagement Post 7", image: "/44.jpeg", category: "Engagement driven creatives" },
    { id: 49, title: "Engagement Post 8", image: "/45.jpeg", category: "Engagement driven creatives" },
    { id: 50, title: "Engagement Post 9", image: "/46.jpeg", category: "Engagement driven creatives" },
    { id: 51, title: "Engagement Post 10", image: "/47.jpeg", category: "Engagement driven creatives" },
    { id: 52, title: "Engagement Post 11", image: "/48.jpeg", category: "Engagement driven creatives" },
    { id: 53, title: "Information Post 15", image: "/49.jpeg", category: "Information / Educational Posts" },
    { id: 54, title: "Information Post 16", image: "/50.jpeg", category: "Information / Educational Posts" }
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