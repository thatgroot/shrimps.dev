type NavItem = {
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
