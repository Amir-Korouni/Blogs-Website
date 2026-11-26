```

src/
│
├── app/                          # Next.js App Router
│   ├── (auth)/
│   │   ├── signin/
│   │   └── signup/
│   │
│   ├── (public)/
│   │   ├── categories/
│   │   └── posts/
│   │
│   ├── admin/
│   │   ├── account/
│   │   ├── analytics/
│   │   ├── categories/
│   │   ├── posts/
│   │   ├── tags/
│   │   ├── users/
│   │   └── settings/
│   │
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │
│   ├── layout.tsx
│   └── globals.css
│
├── widgets/                      # Large UI compositions
│   ├── header/
│   ├── footer/
│   ├── admin-sidebar/
│   ├── post-list/
│   └── dashboard-overview/
│
├── features/                     # User actions
│   ├── auth/
│   ├── create-post/
│   ├── update-post/
│   ├── delete-post/
│   ├── publish-post/
│   ├── search-posts/
│   ├── create-category/
│   ├── update-category/
│   ├── delete-category/
│   ├── create-tag/
│   ├── manage-users/
│   ├── update-account/
│   └── change-password/
│
├── entities/                     # Business objects
│   ├── post/
│   ├── category/
│   ├── tag/
│   ├── user/
│   └── comment/
│
└── shared/                       # Generic functionality
    ├── api/
    │   ├── generated/
    │   ├── client/
    │   └── types/
    │
    ├── ui/
    ├── lib/
    ├── hooks/
    ├── config/
    ├── types/
    └── assets/

```
