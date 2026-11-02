import { Badge, TrendingUpIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const UeserSectionCard = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Users</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              1,248
            </CardTitle>
            <CardAction>
              <Badge>
                <TrendingUpIcon />
                +4.5%
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>New Users</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              86
            </CardTitle>
            <CardAction>
              <Badge>
                <TrendingUpIcon />
                +4.5%
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Active Users</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              920
            </CardTitle>
            <CardAction>
              <Badge>
                <TrendingUpIcon />
                +4.5%
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>
      </section>
    </>
  );
};

export default UeserSectionCard;
