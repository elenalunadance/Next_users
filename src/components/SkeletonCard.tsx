import { Card, CardHeader, CardFooter, CardTitle, CardContent} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
    return (
            <Card className="w-60 h-80">
                <CardHeader>
                    <CardTitle>
                        <Skeleton className="w-20 h-10 rounded-md" />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-6 rounded-md" />
                    <Skeleton className="flex-grow h-6 rounded-md m-2"/>
                </CardContent>
                <CardFooter>
                    <Skeleton className="w-20 h-10 rounded-md" />
                </CardFooter>
            </Card>
    );
}