type Skill = {
 languages: string[],
 frameworks: { type: string, name: string }[],
}

type User = {
 name?: string,
 email: string,
 avatar: string,
 skills: Skill,
}

type Taxanomy = {
 name: "string",
 parent: Taxanomy,
}

type NavItem = {
 type: "hashtag" | "taxanomy" | "page" | "post" | ""
 title: string;
 icon: string;
 color: string;
 link?: string
};



type SectionProps = {
 items: NavItem[];
};

type LayoutProps = {
 children?: React.ReactNode | React.ReactNodeArray | undefined;
};


type Post = {
 slug: string,
}
