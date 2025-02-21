import { Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { User } from "@/app/page";
import { Sceleton } from "@/components/ui/skeleton";



export async function getStaticParams() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();
    return users.map((user) => ({
        params: { id: user.id.toString() },
    }));
}


export default async function UserPage({
        params,
    }: {
        params: Promise<{ id: string }>
    }) {
        const { id } = await params;
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user: User = await response.json();

        return (
            <div className="flex justify-center gap-4 m-4">
                
                        <Card>
                            <CardHeader>
                                <CardTitle>{user.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="h-30">
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
        );
    }

