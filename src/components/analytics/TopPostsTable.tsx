import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Posts } from "@/Types/post.type";

type TopPostsProp = {
  posts: Posts[];
};

export function TopPostsTable({ posts }: TopPostsProp) {
  return (
    <Table>
      <TableCaption>A list of your recent Posts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Posts</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>author</TableHead>
          <TableHead className="text-right">Published At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>{post.category}</TableCell>
            <TableCell>{post.author}</TableCell>
            <TableCell className="text-right">{post.publishedAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
