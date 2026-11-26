import { User } from "@/shared/Types/general.type";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../shared/ui/card";

type UserSecType = {
  users: User[];
};

const UeserSectionCard = ({ users }: UserSecType) => {
  const userCount = users.length;

  const AdminUserCount = users.filter((user) => user.role === "admin").length;

  const NormalUserCount = users.filter((user) => user.role === "user").length;
  return (
    <>
      <section className="grid grid-cols-3 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Users</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {userCount}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Admin Users</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {AdminUserCount}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Normal Users</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {NormalUserCount}
            </CardTitle>
          </CardHeader>
        </Card>
      </section>
    </>
  );
};

export default UeserSectionCard;
