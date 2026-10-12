type navLinksType = {
  name:string,
  href:string
}

export const navLinks:navLinksType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Posts",
    href: "/posts",
  },
  {
    name: "Categories",
    href: "/categories",
  },
];

export const signInUp = {
  Signin: { name: "Sign in", href: "/signin" },
  Signup: { name: "Sign up", href: "/signup" },
};

export const socialMedias = {
  Github: { href: "https://github.com/Amir-Korouni", name: "Github" },
  LinkedIn: { href: "https://www.linkedin.com/", name: "LinkedIn" },
};
