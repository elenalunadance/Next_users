import { Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { User } from "@/app/page";


export default async function UserPage({
        params,
    }: {
        params: Promise<{ id: string }>
    }) {
        const { id } = await params;
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user: User = await response.json();

        if (!user) {
            throw new Error('User not found');
        }

        return (
            <main>
                <div className="flex justify-center m-10">
                    <Card>
                        <CardHeader>
                            <CardTitle>{user.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2 h-30">
                            <p>Username: {user.username}</p>
                            <p className="text-wrap">E-mail: {user.email}</p>
                            <p>Adress: {user.address.street}, {user.address.city}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                            <p>Company: {user.company.name}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="secondary">
                                <Link href={`/`}>Back to Home page</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        );
    }

